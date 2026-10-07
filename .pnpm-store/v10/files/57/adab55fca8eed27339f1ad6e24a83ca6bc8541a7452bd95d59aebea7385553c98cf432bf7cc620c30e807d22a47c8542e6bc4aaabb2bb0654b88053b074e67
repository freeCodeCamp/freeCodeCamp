/**
 * @fileoverview Config initialization wizard.
 * @author Ilya Volodin
 */


"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const util = require("util"),
    path = require("path"),
    fs = require("fs"),
    enquirer = require("enquirer"),
    ProgressBar = require("progress"),
    semver = require("semver"),
    espree = require("espree"),
    recConfig = require("../../conf/eslint-recommended"),
    ConfigOps = require("@eslint/eslintrc/lib/shared/config-ops"),
    log = require("../shared/logging"),
    naming = require("@eslint/eslintrc/lib/shared/naming"),
    ModuleResolver = require("../shared/relative-module-resolver"),
    autoconfig = require("./autoconfig.js"),
    ConfigFile = require("./config-file"),
    npmUtils = require("./npm-utils"),
    { getSourceCodeOfFiles } = require("./source-code-utils");

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
    } else if (format === "JavaScript") {
        const pkgJSONPath = npmUtils.findPackageJson();

        if (pkgJSONPath) {
            const pkgJSONContents = JSON.parse(fs.readFileSync(pkgJSONPath, "utf8"));

            if (pkgJSONContents.type === "module") {
                extname = ".cjs";
            }
        }
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
 * Get the peer dependencies of the given module.
 * This adds the gotten value to cache at the first time, then reuses it.
 * In a process, this function is called twice, but `npmUtils.fetchPeerDependencies` needs to access network which is relatively slow.
 * @param {string} moduleName The module name to get.
 * @returns {Object} The peer dependencies of the given module.
 * This object is the object of `peerDependencies` field of `package.json`.
 * Returns null if npm was not found.
 */
function getPeerDependencies(moduleName) {
    let result = getPeerDependencies.cache.get(moduleName);

    if (!result) {
        log.info(`Checking peerDependencies of ${moduleName}`);

        result = npmUtils.fetchPeerDependencies(moduleName);
        getPeerDependencies.cache.set(moduleName, result);
    }

    return result;
}
getPeerDependencies.cache = new Map();

/**
 * Return necessary plugins, configs, parsers, etc. based on the config
 * @param   {Object} config  config object
 * @param   {boolean} [installESLint=true]  If `false` is given, it does not install eslint.
 * @returns {string[]} An array of modules to be installed.
 */
function getModulesList(config, installESLint) {
    const modules = {};

    // Create a list of modules which should be installed based on config
    if (config.plugins) {
        for (const plugin of config.plugins) {
            const moduleName = naming.normalizePackageName(plugin, "eslint-plugin");

            modules[moduleName] = "latest";
        }
    }
    if (config.extends) {
        const extendList = Array.isArray(config.extends) ? config.extends : [config.extends];

        for (const extend of extendList) {
            if (extend.startsWith("eslint:") || extend.startsWith("plugin:")) {
                continue;
            }
            const moduleName = naming.normalizePackageName(extend, "eslint-config");

            modules[moduleName] = "latest";
            Object.assign(
                modules,
                getPeerDependencies(`${moduleName}@latest`)
            );
        }
    }

    const parser = config.parser || (config.parserOptions && config.parserOptions.parser);

    if (parser) {
        modules[parser] = "latest";
    }

    if (installESLint === false) {
        delete modules.eslint;
    } else {
        const installStatus = npmUtils.checkDevDeps(["eslint"]);

        // Mark to show messages if it's new installation of eslint.
        if (installStatus.eslint === false) {
            log.info("Local ESLint installation not found.");
            modules.eslint = modules.eslint || "latest";
            config.installedESLint = true;
        }
    }

    return Object.keys(modules).map(name => `${name}@${modules[name]}`);
}

/**
 * Set the `rules` of a config by examining a user's source code
 *
 * Note: This clones the config object and returns a new config to avoid mutating
 * the original config parameter.
 * @param   {Object} answers  answers received from enquirer
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
    const patterns = answers.patterns.split(/[\s]+/u);

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

    /*
     * If there is only one config that results in no errors for a rule, we should use it.
     * createConfig will only add rules that have one configuration in the registry.
     */
    const singleConfigs = registry.createConfig().rules;

    /*
     * The "sweet spot" for number of options in a config seems to be two (severity plus one option).
     * Very often, a third option (usually an object) is available to address
     * edge cases, exceptions, or unique situations. We will prefer to use a config with
     * specificity of two.
     */
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
 * @param {Object} answers answers received from enquirer
 * @returns {Object} config object
 */
function processAnswers(answers) {
    let config = {
        rules: {},
        env: {},
        parserOptions: {},
        extends: []
    };

    config.parserOptions.ecmaVersion = espree.latestEcmaVersion;
    config.env.es2021 = true;

    // set the module type
    if (answers.moduleType === "esm") {
        config.parserOptions.sourceType = "module";
    } else if (answers.moduleType === "commonjs") {
        config.env.commonjs = true;
    }

    // add in browser and node environments if necessary
    answers.env.forEach(env => {
        config.env[env] = true;
    });

    // add in library information
    if (answers.framework === "react") {
        config.parserOptions.ecmaFeatures = {
            jsx: true
        };
        config.plugins = ["react"];
        config.extends.push("plugin:react/recommended");
    } else if (answers.framework === "vue") {
        config.plugins = ["vue"];
        config.extends.push("plugin:vue/essential");
    }

    if (answers.typescript) {
        if (answers.framework === "vue") {
            config.parserOptions.parser = "@typescript-eslint/parser";
        } else {
            config.parser = "@typescript-eslint/parser";
        }

        if (Array.isArray(config.plugins)) {
            config.plugins.push("@typescript-eslint");
        } else {
            config.plugins = ["@typescript-eslint"];
        }
    }

    // setup rules based on problems/style enforcement preferences
    if (answers.purpose === "problems") {
        config.extends.unshift("eslint:recommended");
    } else if (answers.purpose === "style") {
        if (answers.source === "prompt") {
            config.extends.unshift("eslint:recommended");
            config.rules.indent = ["error", answers.indent];
            config.rules.quotes = ["error", answers.quotes];
            config.rules["linebreak-style"] = ["error", answers.linebreak];
            config.rules.semi = ["error", answers.semi ? "always" : "never"];
        } else if (answers.source === "auto") {
            config = configureRules(answers, config);
            config = autoconfig.extendFromRecommended(config);
        }
    }
    if (answers.typescript && config.extends.includes("eslint:recommended")) {
        config.extends.push("plugin:@typescript-eslint/recommended");
    }

    // normalize extends
    if (config.extends.length === 0) {
        delete config.extends;
    } else if (config.extends.length === 1) {
        config.extends = config.extends[0];
    }

    ConfigOps.normalizeToStrings(config);
    return config;
}

/**
 * Get the version of the local ESLint.
 * @returns {string|null} The version. If the local ESLint was not found, returns null.
 */
function getLocalESLintVersion() {
    try {
        const eslintPath = ModuleResolver.resolve("eslint", path.join(process.cwd(), "__placeholder__.js"));
        const eslint = require(eslintPath);

        return eslint.linter.version || null;
    } catch {
        return null;
    }
}

/**
 * Get the shareable config name of the chosen style guide.
 * @param {Object} answers The answers object.
 * @returns {string} The shareable config name.
 */
function getStyleGuideName(answers) {
    if (answers.styleguide === "airbnb" && answers.framework !== "react") {
        return "airbnb-base";
    }
    return answers.styleguide;
}

/**
 * Check whether the local ESLint version conflicts with the required version of the chosen shareable config.
 * @param {Object} answers The answers object.
 * @returns {boolean} `true` if the local ESLint is found then it conflicts with the required version of the chosen shareable config.
 */
function hasESLintVersionConflict(answers) {

    // Get the local ESLint version.
    const localESLintVersion = getLocalESLintVersion();

    if (!localESLintVersion) {
        return false;
    }

    // Get the required range of ESLint version.
    const configName = getStyleGuideName(answers);
    const moduleName = `eslint-config-${configName}@latest`;
    const peerDependencies = getPeerDependencies(moduleName) || {};
    const requiredESLintVersionRange = peerDependencies.eslint;

    if (!requiredESLintVersionRange) {
        return false;
    }

    answers.localESLintVersion = localESLintVersion;
    answers.requiredESLintVersionRange = requiredESLintVersionRange;

    // Check the version.
    if (semver.satisfies(localESLintVersion, requiredESLintVersionRange)) {
        answers.installESLint = false;
        return false;
    }

    return true;
}

/**
 * Install modules.
 * @param   {string[]} modules Modules to be installed.
 * @returns {void}
 */
function installModules(modules) {
    log.info(`Installing ${modules.join(", ")}`);
    npmUtils.installSyncSaveDev(modules);
}

/* istanbul ignore next: no need to test enquirer */
/**
 * Ask user to install modules.
 * @param   {string[]} modules Array of modules to be installed.
 * @param   {boolean} packageJsonExists Indicates if package.json is existed.
 * @returns {Promise} Answer that indicates if user wants to install.
 */
function askInstallModules(modules, packageJsonExists) {

    // If no modules, do nothing.
    if (modules.length === 0) {
        return Promise.resolve();
    }

    log.info("The config that you've selected requires the following dependencies:\n");
    log.info(modules.join(" "));
    return enquirer.prompt([
        {
            type: "toggle",
            name: "executeInstallation",
            message: "Would you like to install them now with npm?",
            enabled: "Yes",
            disabled: "No",
            initial: 1,
            skip() {
                return !(modules.length && packageJsonExists);
            },
            result(input) {
                return this.skipped ? null : input;
            }
        }
    ]).then(({ executeInstallation }) => {
        if (executeInstallation) {
            installModules(modules);
        }
    });
}

/* istanbul ignore next: no need to test enquirer */
/**
 * Ask use a few questions on command prompt
 * @returns {Promise} The promise with the result of the prompt
 */
function promptUser() {

    return enquirer.prompt([
        {
            type: "select",
            name: "purpose",
            message: "How would you like to use ESLint?",

            // The returned number matches the name value of nth in the choices array.
            initial: 1,
            choices: [
                { message: "To check syntax only", name: "syntax" },
                { message: "To check syntax and find problems", name: "problems" },
                { message: "To check syntax, find problems, and enforce code style", name: "style" }
            ]
        },
        {
            type: "select",
            name: "moduleType",
            message: "What type of modules does your project use?",
            initial: 0,
            choices: [
                { message: "JavaScript modules (import/export)", name: "esm" },
                { message: "CommonJS (require/exports)", name: "commonjs" },
                { message: "None of these", name: "none" }
            ]
        },
        {
            type: "select",
            name: "framework",
            message: "Which framework does your project use?",
            initial: 0,
            choices: [
                { message: "React", name: "react" },
                { message: "Vue.js", name: "vue" },
                { message: "None of these", name: "none" }
            ]
        },
        {
            type: "toggle",
            name: "typescript",
            message: "Does your project use TypeScript?",
            enabled: "Yes",
            disabled: "No",
            initial: 0
        },
        {
            type: "multiselect",
            name: "env",
            message: "Where does your code run?",
            hint: "(Press <space> to select, <a> to toggle all, <i> to invert selection)",
            initial: 0,
            choices: [
                { message: "Browser", name: "browser" },
                { message: "Node", name: "node" }
            ]
        },
        {
            type: "select",
            name: "source",
            message: "How would you like to define a style for your project?",
            choices: [
                { message: "Use a popular style guide", name: "guide" },
                { message: "Answer questions about your style", name: "prompt" },
                { message: "Inspect your JavaScript file(s)", name: "auto" }
            ],
            skip() {
                return this.state.answers.purpose !== "style";
            },
            result(input) {
                return this.skipped ? null : input;
            }
        },
        {
            type: "select",
            name: "styleguide",
            message: "Which style guide do you want to follow?",
            choices: [
                { message: "Airbnb: https://github.com/airbnb/javascript", name: "airbnb" },
                { message: "Standard: https://github.com/standard/standard", name: "standard" },
                { message: "Google: https://github.com/google/eslint-config-google", name: "google" },
                { message: "XO: https://github.com/xojs/eslint-config-xo", name: "xo" }
            ],
            skip() {
                this.state.answers.packageJsonExists = npmUtils.checkPackageJson();
                return !(this.state.answers.source === "guide" && this.state.answers.packageJsonExists);
            },
            result(input) {
                return this.skipped ? null : input;
            }
        },
        {
            type: "input",
            name: "patterns",
            message: "Which file(s), path(s), or glob(s) should be examined?",
            skip() {
                return this.state.answers.source !== "auto";
            },
            validate(input) {
                if (!this.skipped && input.trim().length === 0 && input.trim() !== ",") {
                    return "You must tell us what code to examine. Try again.";
                }
                return true;
            }
        },
        {
            type: "select",
            name: "format",
            message: "What format do you want your config file to be in?",
            initial: 0,
            choices: ["JavaScript", "YAML", "JSON"]
        },
        {
            type: "toggle",
            name: "installESLint",
            message() {
                const { answers } = this.state;
                const verb = semver.ltr(answers.localESLintVersion, answers.requiredESLintVersionRange)
                    ? "upgrade"
                    : "downgrade";

                return `The style guide "${answers.styleguide}" requires eslint@${answers.requiredESLintVersionRange}. You are currently using eslint@${answers.localESLintVersion}.\n  Do you want to ${verb}?`;
            },
            enabled: "Yes",
            disabled: "No",
            initial: 1,
            skip() {
                return !(this.state.answers.source === "guide" && this.state.answers.packageJsonExists && hasESLintVersionConflict(this.state.answers));
            },
            result(input) {
                return this.skipped ? null : input;
            }
        }
    ]).then(earlyAnswers => {

        // early exit if no style guide is necessary
        if (earlyAnswers.purpose !== "style") {
            const config = processAnswers(earlyAnswers);
            const modules = getModulesList(config);

            return askInstallModules(modules, earlyAnswers.packageJsonExists)
                .then(() => writeFile(config, earlyAnswers.format));
        }

        // early exit if you are using a style guide
        if (earlyAnswers.source === "guide") {
            if (!earlyAnswers.packageJsonExists) {
                log.info("A package.json is necessary to install plugins such as style guides. Run `npm init` to create a package.json file and try again.");
                return void 0;
            }
            if (earlyAnswers.installESLint === false && !semver.satisfies(earlyAnswers.localESLintVersion, earlyAnswers.requiredESLintVersionRange)) {
                log.info(`Note: it might not work since ESLint's version is mismatched with the ${earlyAnswers.styleguide} config.`);
            }
            if (earlyAnswers.styleguide === "airbnb" && earlyAnswers.framework !== "react") {
                earlyAnswers.styleguide = "airbnb-base";
            }

            const config = processAnswers(earlyAnswers);

            if (Array.isArray(config.extends)) {
                config.extends.push(earlyAnswers.styleguide);
            } else if (config.extends) {
                config.extends = [config.extends, earlyAnswers.styleguide];
            } else {
                config.extends = [earlyAnswers.styleguide];
            }

            const modules = getModulesList(config);

            return askInstallModules(modules, earlyAnswers.packageJsonExists)
                .then(() => writeFile(config, earlyAnswers.format));

        }

        if (earlyAnswers.source === "auto") {
            const combinedAnswers = Object.assign({}, earlyAnswers);
            const config = processAnswers(combinedAnswers);
            const modules = getModulesList(config);

            return askInstallModules(modules).then(() => writeFile(config, earlyAnswers.format));
        }

        // continue with the style questions otherwise...
        return enquirer.prompt([
            {
                type: "select",
                name: "indent",
                message: "What style of indentation do you use?",
                initial: 0,
                choices: [{ message: "Tabs", name: "tab" }, { message: "Spaces", name: 4 }]
            },
            {
                type: "select",
                name: "quotes",
                message: "What quotes do you use for strings?",
                initial: 0,
                choices: [{ message: "Double", name: "double" }, { message: "Single", name: "single" }]
            },
            {
                type: "select",
                name: "linebreak",
                message: "What line endings do you use?",
                initial: 0,
                choices: [{ message: "Unix", name: "unix" }, { message: "Windows", name: "windows" }]
            },
            {
                type: "toggle",
                name: "semi",
                message: "Do you require semicolons?",
                enabled: "Yes",
                disabled: "No",
                initial: 1
            }
        ]).then(answers => {
            const totalAnswers = Object.assign({}, earlyAnswers, answers);

            const config = processAnswers(totalAnswers);
            const modules = getModulesList(config);

            return askInstallModules(modules).then(() => writeFile(config, earlyAnswers.format));
        });
    });
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const init = {
    getModulesList,
    hasESLintVersionConflict,
    installModules,
    processAnswers,
    writeFile,
    /* istanbul ignore next */initializeConfig() {
        return promptUser();
    }
};

module.exports = init;
