/**
 * @fileoverview Config initialization wizard.
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const util = require("util"),
    inquirer = require("inquirer"),
    ProgressBar = require("progress"),
    autoconfig = require("./autoconfig.js"),
    ConfigFile = require("./config-file"),
    ConfigOps = require("./config-ops"),
    getSourceCodeOfFiles = require("../util/source-code-util").getSourceCodeOfFiles,
    npmUtil = require("../util/npm-util"),
    recConfig = require("../../conf/eslint-recommended"),
    log = require("../logging");

const debug = require("debug")("eslint:config-initializer");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/* istanbul ignore next: hard to test fs function */
/**
 * Create .eslintrc file in the current working directory
 * @param {Object} config object that contains user's answers
 * @param {string} format The file format to write to.
 * @returns {void}
 */
function writeFile(config, format) {

    // default is .js
    let extname = ".js";

    if (format === "YAML") {
        extname = ".yml";
    } else if (format === "JSON") {
        extname = ".json";
    }

    const installedESLint = config.installedESLint;

    delete config.installedESLint;

    ConfigFile.write(config, `./.eslintrc${extname}`);
    log.info(`Successfully created .eslintrc${extname} file in ${process.cwd()}`);

    if (installedESLint) {
        log.info("ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.");
    }
}

/**
 * Synchronously install necessary plugins, configs, parsers, etc. based on the config
 * @param   {Object} config  config object
 * @returns {void}
 */
function installModules(config) {
    let modules = [];

    // Create a list of modules which should be installed based on config
    if (config.plugins) {
        modules = modules.concat(config.plugins.map(name => `eslint-plugin-${name}`));
    }
    if (config.extends && config.extends.indexOf("eslint:") === -1) {
        modules.push(`eslint-config-${config.extends}`);
    }

    // Determine which modules are already installed
    if (modules.length === 0) {
        return;
    }

    // Add eslint to list in case user does not have it installed locally
    modules.unshift("eslint");

    const installStatus = npmUtil.checkDevDeps(modules);

    // Install packages which aren't already installed
    const modulesToInstall = Object.keys(installStatus).filter(module => {
        const notInstalled = installStatus[module] === false;

        if (module === "eslint" && notInstalled) {
            log.info("Local ESLint installation not found.");
            config.installedESLint = true;
        }

        return notInstalled;
    });

    if (modulesToInstall.length > 0) {
        log.info(`Installing ${modulesToInstall.join(", ")}`);
        npmUtil.installSyncSaveDev(modulesToInstall);
    }
}

/**
 * Set the `rules` of a config by examining a user's source code
 *
 * Note: This clones the config object and returns a new config to avoid mutating
 * the original config parameter.
 *
 * @param   {Object} answers  answers received from inquirer
 * @param   {Object} config   config object
 * @returns {Object}          config object with configured rules
 */
function configureRules(answers, config) {
    const BAR_TOTAL = 20,
        BAR_SOURCE_CODE_TOTAL = 4,
        newConfig = Object.assign({}, config),
        disabledConfigs = {};
    let sourceCodes,
        registry;

    // Set up a progress bar, as this process can take a long time
    const bar = new ProgressBar("Determining Config: :percent [:bar] :elapseds elapsed, eta :etas ", {
        width: 30,
        total: BAR_TOTAL
    });

    bar.tick(0); // Shows the progress bar

    // Get the SourceCode of all chosen files
    const patterns = answers.patterns.split(/[\s]+/);

    try {
        sourceCodes = getSourceCodeOfFiles(patterns, { baseConfig: newConfig, useEslintrc: false }, total => {
            bar.tick((BAR_SOURCE_CODE_TOTAL / total));
        });
    } catch (e) {
        log.info("\n");
        throw e;
    }
    const fileQty = Object.keys(sourceCodes).length;

    if (fileQty === 0) {
        log.info("\n");
        throw new Error("Automatic Configuration failed.  No files were able to be parsed.");
    }

    // Create a registry of rule configs
    registry = new autoconfig.Registry();
    registry.populateFromCoreRules();

    // Lint all files with each rule config in the registry
    registry = registry.lintSourceCode(sourceCodes, newConfig, total => {
        bar.tick((BAR_TOTAL - BAR_SOURCE_CODE_TOTAL) / total); // Subtract out ticks used at beginning
    });
    debug(`\nRegistry: ${util.inspect(registry.rules, { depth: null })}`);

    // Create a list of recommended rules, because we don't want to disable them
    const recRules = Object.keys(recConfig.rules).filter(ruleId => ConfigOps.isErrorSeverity(recConfig.rules[ruleId]));

    // Find and disable rules which had no error-free configuration
    const failingRegistry = registry.getFailingRulesRegistry();

    Object.keys(failingRegistry.rules).forEach(ruleId => {

        // If the rule is recommended, set it to error, otherwise disable it
        disabledConfigs[ruleId] = (recRules.indexOf(ruleId) !== -1) ? 2 : 0;
    });

    // Now that we know which rules to disable, strip out configs with errors
    registry = registry.stripFailingConfigs();

    // If there is only one config that results in no errors for a rule, we should use it.
    // createConfig will only add rules that have one configuration in the registry.
    const singleConfigs = registry.createConfig().rules;

    // The "sweet spot" for number of options in a config seems to be two (severity plus one option).
    // Very often, a third option (usually an object) is available to address
    // edge cases, exceptions, or unique situations. We will prefer to use a config with
    // specificity of two.
    const specTwoConfigs = registry.filterBySpecificity(2).createConfig().rules;

    // Maybe a specific combination using all three options works
    const specThreeConfigs = registry.filterBySpecificity(3).createConfig().rules;

    // If all else fails, try to use the default (severity only)
    const defaultConfigs = registry.filterBySpecificity(1).createConfig().rules;

    // Combine configs in reverse priority order (later take precedence)
    newConfig.rules = Object.assign({}, disabledConfigs, defaultConfigs, specThreeConfigs, specTwoConfigs, singleConfigs);

    // Make sure progress bar has finished (floating point rounding)
    bar.update(BAR_TOTAL);

    // Log out some stats to let the user know what happened
    const finalRuleIds = Object.keys(newConfig.rules);
    const totalRules = finalRuleIds.length;
    const enabledRules = finalRuleIds.filter(ruleId => (newConfig.rules[ruleId] !== 0)).length;
    const resultMessage = [
        `\nEnabled ${enabledRules} out of ${totalRules}`,
        `rules based on ${fileQty}`,
        `file${(fileQty === 1) ? "." : "s."}`
    ].join(" ");

    log.info(resultMessage);

    ConfigOps.normalizeToStrings(newConfig);
    return newConfig;
}

/**
 * process user's answers and create config object
 * @param {Object} answers answers received from inquirer
 * @returns {Object} config object
 */
function processAnswers(answers) {
    let config = { rules: {}, env: {} };

    if (answers.es6) {
        config.env.es6 = true;
        if (answers.modules) {
            config.parserOptions = config.parserOptions || {};
            config.parserOptions.sourceType = "module";
        }
    }
    if (answers.commonjs) {
        config.env.commonjs = true;
    }
    answers.env.forEach(env => {
        config.env[env] = true;
    });
    if (answers.jsx) {
        config.parserOptions = config.parserOptions || {};
        config.parserOptions.ecmaFeatures = config.parserOptions.ecmaFeatures || {};
        config.parserOptions.ecmaFeatures.jsx = true;
        if (answers.react) {
            config.plugins = ["react"];
            config.parserOptions.ecmaFeatures.experimentalObjectRestSpread = true;
        }
    }

    if (answers.source === "prompt") {
        config.extends = "eslint:recommended";
        config.rules.indent = ["error", answers.indent];
        config.rules.quotes = ["error", answers.quotes];
        config.rules["linebreak-style"] = ["error", answers.linebreak];
        config.rules.semi = ["error", answers.semi ? "always" : "never"];
    }

    installModules(config);

    if (answers.source === "auto") {
        config = configureRules(answers, config);
        config = autoconfig.extendFromRecommended(config);
    }

    ConfigOps.normalizeToStrings(config);
    return config;
}

/**
 * process user's style guide of choice and return an appropriate config object.
 * @param {string} guide name of the chosen style guide
 * @returns {Object} config object
 */
function getConfigForStyleGuide(guide) {
    const guides = {
        google: { extends: "google" },
        airbnb: { extends: "airbnb", plugins: ["react", "jsx-a11y", "import"] },
        "airbnb-base": { extends: "airbnb-base", plugins: ["import"] },
        standard: { extends: "standard", plugins: ["standard", "promise"] }
    };

    if (!guides[guide]) {
        throw new Error("You referenced an unsupported guide.");
    }

    installModules(guides[guide]);

    return guides[guide];
}

/* istanbul ignore next: no need to test inquirer*/
/**
 * Ask use a few questions on command prompt
 * @param {Function} callback callback function when file has been written
 * @returns {void}
 */
function promptUser(callback) {
    let config;

    inquirer.prompt([
        {
            type: "list",
            name: "source",
            message: "How would you like to configure ESLint?",
            default: "prompt",
            choices: [
                { name: "Answer questions about your style", value: "prompt" },
                { name: "Use a popular style guide", value: "guide" },
                { name: "Inspect your JavaScript file(s)", value: "auto" }
            ]
        },
        {
            type: "list",
            name: "styleguide",
            message: "Which style guide do you want to follow?",
            choices: [{ name: "Google", value: "google" }, { name: "Airbnb", value: "airbnb" }, { name: "Standard", value: "standard" }],
            when(answers) {
                answers.packageJsonExists = npmUtil.checkPackageJson();
                return answers.source === "guide" && answers.packageJsonExists;
            }
        },
        {
            type: "confirm",
            name: "airbnbReact",
            message: "Do you use React?",
            default: false,
            when(answers) {
                return answers.styleguide === "airbnb";
            }
        },
        {
            type: "input",
            name: "patterns",
            message: "Which file(s), path(s), or glob(s) should be examined?",
            when(answers) {
                return (answers.source === "auto");
            },
            validate(input) {
                if (input.trim().length === 0 && input.trim() !== ",") {
                    return "You must tell us what code to examine. Try again.";
                }
                return true;
            }
        },
        {
            type: "list",
            name: "format",
            message: "What format do you want your config file to be in?",
            default: "JavaScript",
            choices: ["JavaScript", "YAML", "JSON"],
            when(answers) {
                return ((answers.source === "guide" && answers.packageJsonExists) || answers.source === "auto");
            }
        }
    ], earlyAnswers => {

        // early exit if you are using a style guide
        if (earlyAnswers.source === "guide") {
            if (!earlyAnswers.packageJsonExists) {
                log.info("A package.json is necessary to install plugins such as style guides. Run `npm init` to create a package.json file and try again.");
                return;
            }
            if (earlyAnswers.styleguide === "airbnb" && !earlyAnswers.airbnbReact) {
                earlyAnswers.styleguide = "airbnb-base";
            }
            try {
                config = getConfigForStyleGuide(earlyAnswers.styleguide);
                writeFile(config, earlyAnswers.format);
            } catch (err) {
                callback(err);
                return;
            }
            return;
        }

        // continue with the questions otherwise...
        inquirer.prompt([
            {
                type: "confirm",
                name: "es6",
                message: "Are you using ECMAScript 6 features?",
                default: false
            },
            {
                type: "confirm",
                name: "modules",
                message: "Are you using ES6 modules?",
                default: false,
                when(answers) {
                    return answers.es6 === true;
                }
            },
            {
                type: "checkbox",
                name: "env",
                message: "Where will your code run?",
                default: ["browser"],
                choices: [{ name: "Browser", value: "browser" }, { name: "Node", value: "node" }]
            },
            {
                type: "confirm",
                name: "commonjs",
                message: "Do you use CommonJS?",
                default: false,
                when(answers) {
                    return answers.env.some(env => env === "browser");
                }
            },
            {
                type: "confirm",
                name: "jsx",
                message: "Do you use JSX?",
                default: false
            },
            {
                type: "confirm",
                name: "react",
                message: "Do you use React?",
                default: false,
                when(answers) {
                    return answers.jsx;
                }
            }
        ], secondAnswers => {

            // early exit if you are using automatic style generation
            if (earlyAnswers.source === "auto") {
                try {
                    const combinedAnswers = Object.assign({}, earlyAnswers, secondAnswers);

                    config = processAnswers(combinedAnswers);
                    installModules(config);
                    writeFile(config, earlyAnswers.format);
                } catch (err) {
                    callback(err);
                    return;
                }
                return;
            }

            // continue with the style questions otherwise...
            inquirer.prompt([
                {
                    type: "list",
                    name: "indent",
                    message: "What style of indentation do you use?",
                    default: "tab",
                    choices: [{ name: "Tabs", value: "tab" }, { name: "Spaces", value: 4 }]
                },
                {
                    type: "list",
                    name: "quotes",
                    message: "What quotes do you use for strings?",
                    default: "double",
                    choices: [{ name: "Double", value: "double" }, { name: "Single", value: "single" }]
                },
                {
                    type: "list",
                    name: "linebreak",
                    message: "What line endings do you use?",
                    default: "unix",
                    choices: [{ name: "Unix", value: "unix" }, { name: "Windows", value: "windows" }]
                },
                {
                    type: "confirm",
                    name: "semi",
                    message: "Do you require semicolons?",
                    default: true
                },
                {
                    type: "list",
                    name: "format",
                    message: "What format do you want your config file to be in?",
                    default: "JavaScript",
                    choices: ["JavaScript", "YAML", "JSON"]
                }
            ], answers => {
                try {
                    const totalAnswers = Object.assign({}, earlyAnswers, secondAnswers, answers);

                    config = processAnswers(totalAnswers);
                    installModules(config);
                    writeFile(config, answers.format);
                } catch (err) {
                    callback(err); // eslint-disable-line callback-return
                }
            });
        });
    });
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const init = {
    getConfigForStyleGuide,
    processAnswers,
    /* istanbul ignore next */initializeConfig(callback) {
        promptUser(callback);
    }
};

module.exports = init;
