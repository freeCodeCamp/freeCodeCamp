/**
 * @fileoverview Main CLI object.
 * @author Nicholas C. Zakas
 */

"use strict";

/*
 * The CLI object should *not* call process.exit() directly. It should only return
 * exit codes. This allows other programs to use the CLI object and still control
 * when the program exits.
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs");
const path = require("path");
const defaultOptions = require("../../conf/default-cli-options");
const pkg = require("../../package.json");


const {
    Legacy: {
        ConfigOps,
        naming,
        CascadingConfigArrayFactory,
        IgnorePattern,
        getUsedExtractedConfigs,
        ModuleResolver
    }
} = require("@eslint/eslintrc");

const { FileEnumerator } = require("./file-enumerator");

const { Linter } = require("../linter");
const builtInRules = require("../rules");
const loadRules = require("./load-rules");
const hash = require("./hash");
const LintResultCache = require("./lint-result-cache");

const debug = require("debug")("eslint:cli-engine");
const validFixTypes = new Set(["problem", "suggestion", "layout"]);

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

// For VSCode IntelliSense
/** @typedef {import("../shared/types").ConfigData} ConfigData */
/** @typedef {import("../shared/types").DeprecatedRuleInfo} DeprecatedRuleInfo */
/** @typedef {import("../shared/types").LintMessage} LintMessage */
/** @typedef {import("../shared/types").ParserOptions} ParserOptions */
/** @typedef {import("../shared/types").Plugin} Plugin */
/** @typedef {import("../shared/types").RuleConf} RuleConf */
/** @typedef {import("../shared/types").Rule} Rule */
/** @typedef {ReturnType<CascadingConfigArrayFactory["getConfigArrayForFile"]>} ConfigArray */
/** @typedef {ReturnType<ConfigArray["extractConfig"]>} ExtractedConfig */

/**
 * The options to configure a CLI engine with.
 * @typedef {Object} CLIEngineOptions
 * @property {boolean} [allowInlineConfig] Enable or disable inline configuration comments.
 * @property {ConfigData} [baseConfig] Base config object, extended by all configs used with this CLIEngine instance
 * @property {boolean} [cache] Enable result caching.
 * @property {string} [cacheLocation] The cache file to use instead of .eslintcache.
 * @property {string} [configFile] The configuration file to use.
 * @property {string} [cwd] The value to use for the current working directory.
 * @property {string[]} [envs] An array of environments to load.
 * @property {string[]|null} [extensions] An array of file extensions to check.
 * @property {boolean|Function} [fix] Execute in autofix mode. If a function, should return a boolean.
 * @property {string[]} [fixTypes] Array of rule types to apply fixes for.
 * @property {string[]} [globals] An array of global variables to declare.
 * @property {boolean} [ignore] False disables use of .eslintignore.
 * @property {string} [ignorePath] The ignore file to use instead of .eslintignore.
 * @property {string|string[]} [ignorePattern] One or more glob patterns to ignore.
 * @property {boolean} [useEslintrc] False disables looking for .eslintrc
 * @property {string} [parser] The name of the parser to use.
 * @property {ParserOptions} [parserOptions] An object of parserOption settings to use.
 * @property {string[]} [plugins] An array of plugins to load.
 * @property {Record<string,RuleConf>} [rules] An object of rules to use.
 * @property {string[]} [rulePaths] An array of directories to load custom rules from.
 * @property {boolean} [reportUnusedDisableDirectives] `true` adds reports for unused eslint-disable directives
 * @property {boolean} [globInputPaths] Set to false to skip glob resolution of input file paths to lint (default: true). If false, each input file paths is assumed to be a non-glob path to an existing file.
 * @property {string} [resolvePluginsRelativeTo] The folder where plugins should be resolved from, defaulting to the CWD
 */

/**
 * A linting result.
 * @typedef {Object} LintResult
 * @property {string} filePath The path to the file that was linted.
 * @property {LintMessage[]} messages All of the messages for the result.
 * @property {number} errorCount Number of errors for the result.
 * @property {number} warningCount Number of warnings for the result.
 * @property {number} fixableErrorCount Number of fixable errors for the result.
 * @property {number} fixableWarningCount Number of fixable warnings for the result.
 * @property {string} [source] The source code of the file that was linted.
 * @property {string} [output] The source code of the file that was linted, with as many fixes applied as possible.
 */

/**
 * Linting results.
 * @typedef {Object} LintReport
 * @property {LintResult[]} results All of the result.
 * @property {number} errorCount Number of errors for the result.
 * @property {number} warningCount Number of warnings for the result.
 * @property {number} fixableErrorCount Number of fixable errors for the result.
 * @property {number} fixableWarningCount Number of fixable warnings for the result.
 * @property {DeprecatedRuleInfo[]} usedDeprecatedRules The list of used deprecated rules.
 */

/**
 * Private data for CLIEngine.
 * @typedef {Object} CLIEngineInternalSlots
 * @property {Map<string, Plugin>} additionalPluginPool The map for additional plugins.
 * @property {string} cacheFilePath The path to the cache of lint results.
 * @property {CascadingConfigArrayFactory} configArrayFactory The factory of configs.
 * @property {(filePath: string) => boolean} defaultIgnores The default predicate function to check if a file ignored or not.
 * @property {FileEnumerator} fileEnumerator The file enumerator.
 * @property {ConfigArray[]} lastConfigArrays The list of config arrays that the last `executeOnFiles` or `executeOnText` used.
 * @property {LintResultCache|null} lintResultCache The cache of lint results.
 * @property {Linter} linter The linter instance which has loaded rules.
 * @property {CLIEngineOptions} options The normalized options of this instance.
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/** @type {WeakMap<CLIEngine, CLIEngineInternalSlots>} */
const internalSlotsMap = new WeakMap();

/**
 * Determines if each fix type in an array is supported by ESLint and throws
 * an error if not.
 * @param {string[]} fixTypes An array of fix types to check.
 * @returns {void}
 * @throws {Error} If an invalid fix type is found.
 */
function validateFixTypes(fixTypes) {
    for (const fixType of fixTypes) {
        if (!validFixTypes.has(fixType)) {
            throw new Error(`Invalid fix type "${fixType}" found.`);
        }
    }
}

/**
 * It will calculate the error and warning count for collection of messages per file
 * @param {LintMessage[]} messages Collection of messages
 * @returns {Object} Contains the stats
 * @private
 */
function calculateStatsPerFile(messages) {
    return messages.reduce((stat, message) => {
        if (message.fatal || message.severity === 2) {
            stat.errorCount++;
            if (message.fatal) {
                stat.fatalErrorCount++;
            }
            if (message.fix) {
                stat.fixableErrorCount++;
            }
        } else {
            stat.warningCount++;
            if (message.fix) {
                stat.fixableWarningCount++;
            }
        }
        return stat;
    }, {
        errorCount: 0,
        fatalErrorCount: 0,
        warningCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0
    });
}

/**
 * It will calculate the error and warning count for collection of results from all files
 * @param {LintResult[]} results Collection of messages from all the files
 * @returns {Object} Contains the stats
 * @private
 */
function calculateStatsPerRun(results) {
    return results.reduce((stat, result) => {
        stat.errorCount += result.errorCount;
        stat.fatalErrorCount += result.fatalErrorCount;
        stat.warningCount += result.warningCount;
        stat.fixableErrorCount += result.fixableErrorCount;
        stat.fixableWarningCount += result.fixableWarningCount;
        return stat;
    }, {
        errorCount: 0,
        fatalErrorCount: 0,
        warningCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0
    });
}

/**
 * Processes an source code using ESLint.
 * @param {Object} config The config object.
 * @param {string} config.text The source code to verify.
 * @param {string} config.cwd The path to the current working directory.
 * @param {string|undefined} config.filePath The path to the file of `text`. If this is undefined, it uses `<text>`.
 * @param {ConfigArray} config.config The config.
 * @param {boolean} config.fix If `true` then it does fix.
 * @param {boolean} config.allowInlineConfig If `true` then it uses directive comments.
 * @param {boolean} config.reportUnusedDisableDirectives If `true` then it reports unused `eslint-disable` comments.
 * @param {FileEnumerator} config.fileEnumerator The file enumerator to check if a path is a target or not.
 * @param {Linter} config.linter The linter instance to verify.
 * @returns {LintResult} The result of linting.
 * @private
 */
function verifyText({
    text,
    cwd,
    filePath: providedFilePath,
    config,
    fix,
    allowInlineConfig,
    reportUnusedDisableDirectives,
    fileEnumerator,
    linter
}) {
    const filePath = providedFilePath || "<text>";

    debug(`Lint ${filePath}`);

    /*
     * Verify.
     * `config.extractConfig(filePath)` requires an absolute path, but `linter`
     * doesn't know CWD, so it gives `linter` an absolute path always.
     */
    const filePathToVerify = filePath === "<text>" ? path.join(cwd, filePath) : filePath;
    const { fixed, messages, output } = linter.verifyAndFix(
        text,
        config,
        {
            allowInlineConfig,
            filename: filePathToVerify,
            fix,
            reportUnusedDisableDirectives,

            /**
             * Check if the linter should adopt a given code block or not.
             * @param {string} blockFilename The virtual filename of a code block.
             * @returns {boolean} `true` if the linter should adopt the code block.
             */
            filterCodeBlock(blockFilename) {
                return fileEnumerator.isTargetPath(blockFilename);
            }
        }
    );

    // Tweak and return.
    const result = {
        filePath,
        messages,
        ...calculateStatsPerFile(messages)
    };

    if (fixed) {
        result.output = output;
    }
    if (
        result.errorCount + result.warningCount > 0 &&
        typeof result.output === "undefined"
    ) {
        result.source = text;
    }

    return result;
}

/**
 * Returns result with warning by ignore settings
 * @param {string} filePath File path of checked code
 * @param {string} baseDir  Absolute path of base directory
 * @returns {LintResult} Result with single warning
 * @private
 */
function createIgnoreResult(filePath, baseDir) {
    let message;
    const isHidden = filePath.split(path.sep)
        .find(segment => /^\./u.test(segment));
    const isInNodeModules = baseDir && path.relative(baseDir, filePath).startsWith("node_modules");

    if (isHidden) {
        message = "File ignored by default.  Use a negated ignore pattern (like \"--ignore-pattern '!<relative/path/to/filename>'\") to override.";
    } else if (isInNodeModules) {
        message = "File ignored by default. Use \"--ignore-pattern '!node_modules/*'\" to override.";
    } else {
        message = "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.";
    }

    return {
        filePath: path.resolve(filePath),
        messages: [
            {
                fatal: false,
                severity: 1,
                message
            }
        ],
        errorCount: 0,
        warningCount: 1,
        fixableErrorCount: 0,
        fixableWarningCount: 0
    };
}

/**
 * Get a rule.
 * @param {string} ruleId The rule ID to get.
 * @param {ConfigArray[]} configArrays The config arrays that have plugin rules.
 * @returns {Rule|null} The rule or null.
 */
function getRule(ruleId, configArrays) {
    for (const configArray of configArrays) {
        const rule = configArray.pluginRules.get(ruleId);

        if (rule) {
            return rule;
        }
    }
    return builtInRules.get(ruleId) || null;
}

/**
 * Collect used deprecated rules.
 * @param {ConfigArray[]} usedConfigArrays The config arrays which were used.
 * @returns {IterableIterator<DeprecatedRuleInfo>} Used deprecated rules.
 */
function *iterateRuleDeprecationWarnings(usedConfigArrays) {
    const processedRuleIds = new Set();

    // Flatten used configs.
    /** @type {ExtractedConfig[]} */
    const configs = [].concat(
        ...usedConfigArrays.map(getUsedExtractedConfigs)
    );

    // Traverse rule configs.
    for (const config of configs) {
        for (const [ruleId, ruleConfig] of Object.entries(config.rules)) {

            // Skip if it was processed.
            if (processedRuleIds.has(ruleId)) {
                continue;
            }
            processedRuleIds.add(ruleId);

            // Skip if it's not used.
            if (!ConfigOps.getRuleSeverity(ruleConfig)) {
                continue;
            }
            const rule = getRule(ruleId, usedConfigArrays);

            // Skip if it's not deprecated.
            if (!(rule && rule.meta && rule.meta.deprecated)) {
                continue;
            }

            // This rule was used and deprecated.
            yield {
                ruleId,
                replacedBy: rule.meta.replacedBy || []
            };
        }
    }
}

/**
 * Checks if the given message is an error message.
 * @param {LintMessage} message The message to check.
 * @returns {boolean} Whether or not the message is an error message.
 * @private
 */
function isErrorMessage(message) {
    return message.severity === 2;
}


/**
 * return the cacheFile to be used by eslint, based on whether the provided parameter is
 * a directory or looks like a directory (ends in `path.sep`), in which case the file
 * name will be the `cacheFile/.cache_hashOfCWD`
 *
 * if cacheFile points to a file or looks like a file then in will just use that file
 * @param {string} cacheFile The name of file to be used to store the cache
 * @param {string} cwd Current working directory
 * @returns {string} the resolved path to the cache file
 */
function getCacheFile(cacheFile, cwd) {

    /*
     * make sure the path separators are normalized for the environment/os
     * keeping the trailing path separator if present
     */
    const normalizedCacheFile = path.normalize(cacheFile);

    const resolvedCacheFile = path.resolve(cwd, normalizedCacheFile);
    const looksLikeADirectory = normalizedCacheFile.slice(-1) === path.sep;

    /**
     * return the name for the cache file in case the provided parameter is a directory
     * @returns {string} the resolved path to the cacheFile
     */
    function getCacheFileForDirectory() {
        return path.join(resolvedCacheFile, `.cache_${hash(cwd)}`);
    }

    let fileStats;

    try {
        fileStats = fs.lstatSync(resolvedCacheFile);
    } catch {
        fileStats = null;
    }


    /*
     * in case the file exists we need to verify if the provided path
     * is a directory or a file. If it is a directory we want to create a file
     * inside that directory
     */
    if (fileStats) {

        /*
         * is a directory or is a file, but the original file the user provided
         * looks like a directory but `path.resolve` removed the `last path.sep`
         * so we need to still treat this like a directory
         */
        if (fileStats.isDirectory() || looksLikeADirectory) {
            return getCacheFileForDirectory();
        }

        // is file so just use that file
        return resolvedCacheFile;
    }

    /*
     * here we known the file or directory doesn't exist,
     * so we will try to infer if its a directory if it looks like a directory
     * for the current operating system.
     */

    // if the last character passed is a path separator we assume is a directory
    if (looksLikeADirectory) {
        return getCacheFileForDirectory();
    }

    return resolvedCacheFile;
}

/**
 * Convert a string array to a boolean map.
 * @param {string[]|null} keys The keys to assign true.
 * @param {boolean} defaultValue The default value for each property.
 * @param {string} displayName The property name which is used in error message.
 * @returns {Record<string,boolean>} The boolean map.
 */
function toBooleanMap(keys, defaultValue, displayName) {
    if (keys && !Array.isArray(keys)) {
        throw new Error(`${displayName} must be an array.`);
    }
    if (keys && keys.length > 0) {
        return keys.reduce((map, def) => {
            const [key, value] = def.split(":");

            if (key !== "__proto__") {
                map[key] = value === void 0
                    ? defaultValue
                    : value === "true";
            }

            return map;
        }, {});
    }
    return void 0;
}

/**
 * Create a config data from CLI options.
 * @param {CLIEngineOptions} options The options
 * @returns {ConfigData|null} The created config data.
 */
function createConfigDataFromOptions(options) {
    const {
        ignorePattern,
        parser,
        parserOptions,
        plugins,
        rules
    } = options;
    const env = toBooleanMap(options.envs, true, "envs");
    const globals = toBooleanMap(options.globals, false, "globals");

    if (
        env === void 0 &&
        globals === void 0 &&
        (ignorePattern === void 0 || ignorePattern.length === 0) &&
        parser === void 0 &&
        parserOptions === void 0 &&
        plugins === void 0 &&
        rules === void 0
    ) {
        return null;
    }
    return {
        env,
        globals,
        ignorePatterns: ignorePattern,
        parser,
        parserOptions,
        plugins,
        rules
    };
}

/**
 * Checks whether a directory exists at the given location
 * @param {string} resolvedPath A path from the CWD
 * @returns {boolean} `true` if a directory exists
 */
function directoryExists(resolvedPath) {
    try {
        return fs.statSync(resolvedPath).isDirectory();
    } catch (error) {
        if (error && (error.code === "ENOENT" || error.code === "ENOTDIR")) {
            return false;
        }
        throw error;
    }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

class CLIEngine {

    /**
     * Creates a new instance of the core CLI engine.
     * @param {CLIEngineOptions} providedOptions The options for this instance.
     */
    constructor(providedOptions) {
        const options = Object.assign(
            Object.create(null),
            defaultOptions,
            { cwd: process.cwd() },
            providedOptions
        );

        if (options.fix === void 0) {
            options.fix = false;
        }

        const additionalPluginPool = new Map();
        const cacheFilePath = getCacheFile(
            options.cacheLocation || options.cacheFile,
            options.cwd
        );
        const configArrayFactory = new CascadingConfigArrayFactory({
            additionalPluginPool,
            baseConfig: options.baseConfig || null,
            cliConfig: createConfigDataFromOptions(options),
            cwd: options.cwd,
            ignorePath: options.ignorePath,
            resolvePluginsRelativeTo: options.resolvePluginsRelativeTo,
            rulePaths: options.rulePaths,
            specificConfigPath: options.configFile,
            useEslintrc: options.useEslintrc,
            builtInRules,
            loadRules,
            eslintRecommendedPath: path.resolve(__dirname, "../../conf/eslint-recommended.js"),
            eslintAllPath: path.resolve(__dirname, "../../conf/eslint-all.js")
        });
        const fileEnumerator = new FileEnumerator({
            configArrayFactory,
            cwd: options.cwd,
            extensions: options.extensions,
            globInputPaths: options.globInputPaths,
            errorOnUnmatchedPattern: options.errorOnUnmatchedPattern,
            ignore: options.ignore
        });
        const lintResultCache =
            options.cache ? new LintResultCache(cacheFilePath, options.cacheStrategy) : null;
        const linter = new Linter({ cwd: options.cwd });

        /** @type {ConfigArray[]} */
        const lastConfigArrays = [configArrayFactory.getConfigArrayForFile()];

        // Store private data.
        internalSlotsMap.set(this, {
            additionalPluginPool,
            cacheFilePath,
            configArrayFactory,
            defaultIgnores: IgnorePattern.createDefaultIgnore(options.cwd),
            fileEnumerator,
            lastConfigArrays,
            lintResultCache,
            linter,
            options
        });

        // setup special filter for fixes
        if (options.fix && options.fixTypes && options.fixTypes.length > 0) {
            debug(`Using fix types ${options.fixTypes}`);

            // throw an error if any invalid fix types are found
            validateFixTypes(options.fixTypes);

            // convert to Set for faster lookup
            const fixTypes = new Set(options.fixTypes);

            // save original value of options.fix in case it's a function
            const originalFix = (typeof options.fix === "function")
                ? options.fix : () => true;

            options.fix = message => {
                const rule = message.ruleId && getRule(message.ruleId, lastConfigArrays);
                const matches = rule && rule.meta && fixTypes.has(rule.meta.type);

                return matches && originalFix(message);
            };
        }
    }

    getRules() {
        const { lastConfigArrays } = internalSlotsMap.get(this);

        return new Map(function *() {
            yield* builtInRules;

            for (const configArray of lastConfigArrays) {
                yield* configArray.pluginRules;
            }
        }());
    }

    /**
     * Returns results that only contains errors.
     * @param {LintResult[]} results The results to filter.
     * @returns {LintResult[]} The filtered results.
     */
    static getErrorResults(results) {
        const filtered = [];

        results.forEach(result => {
            const filteredMessages = result.messages.filter(isErrorMessage);

            if (filteredMessages.length > 0) {
                filtered.push({
                    ...result,
                    messages: filteredMessages,
                    errorCount: filteredMessages.length,
                    warningCount: 0,
                    fixableErrorCount: result.fixableErrorCount,
                    fixableWarningCount: 0
                });
            }
        });

        return filtered;
    }

    /**
     * Outputs fixes from the given results to files.
     * @param {LintReport} report The report object created by CLIEngine.
     * @returns {void}
     */
    static outputFixes(report) {
        report.results.filter(result => Object.prototype.hasOwnProperty.call(result, "output")).forEach(result => {
            fs.writeFileSync(result.filePath, result.output);
        });
    }


    /**
     * Add a plugin by passing its configuration
     * @param {string} name Name of the plugin.
     * @param {Plugin} pluginObject Plugin configuration object.
     * @returns {void}
     */
    addPlugin(name, pluginObject) {
        const {
            additionalPluginPool,
            configArrayFactory,
            lastConfigArrays
        } = internalSlotsMap.get(this);

        additionalPluginPool.set(name, pluginObject);
        configArrayFactory.clearCache();
        lastConfigArrays.length = 1;
        lastConfigArrays[0] = configArrayFactory.getConfigArrayForFile();
    }

    /**
     * Resolves the patterns passed into executeOnFiles() into glob-based patterns
     * for easier handling.
     * @param {string[]} patterns The file patterns passed on the command line.
     * @returns {string[]} The equivalent glob patterns.
     */
    resolveFileGlobPatterns(patterns) {
        const { options } = internalSlotsMap.get(this);

        if (options.globInputPaths === false) {
            return patterns.filter(Boolean);
        }

        const extensions = (options.extensions || [".js"]).map(ext => ext.replace(/^\./u, ""));
        const dirSuffix = `/**/*.{${extensions.join(",")}}`;

        return patterns.filter(Boolean).map(pathname => {
            const resolvedPath = path.resolve(options.cwd, pathname);
            const newPath = directoryExists(resolvedPath)
                ? pathname.replace(/[/\\]$/u, "") + dirSuffix
                : pathname;

            return path.normalize(newPath).replace(/\\/gu, "/");
        });
    }

    /**
     * Executes the current configuration on an array of file and directory names.
     * @param {string[]} patterns An array of file and directory names.
     * @returns {LintReport} The results for all files that were linted.
     */
    executeOnFiles(patterns) {
        const {
            cacheFilePath,
            fileEnumerator,
            lastConfigArrays,
            lintResultCache,
            linter,
            options: {
                allowInlineConfig,
                cache,
                cwd,
                fix,
                reportUnusedDisableDirectives
            }
        } = internalSlotsMap.get(this);
        const results = [];
        const startTime = Date.now();

        // Clear the last used config arrays.
        lastConfigArrays.length = 0;

        // Delete cache file; should this do here?
        if (!cache) {
            try {
                fs.unlinkSync(cacheFilePath);
            } catch (error) {
                const errorCode = error && error.code;

                // Ignore errors when no such file exists or file system is read only (and cache file does not exist)
                if (errorCode !== "ENOENT" && !(errorCode === "EROFS" && !fs.existsSync(cacheFilePath))) {
                    throw error;
                }
            }
        }

        // Iterate source code files.
        for (const { config, filePath, ignored } of fileEnumerator.iterateFiles(patterns)) {
            if (ignored) {
                results.push(createIgnoreResult(filePath, cwd));
                continue;
            }

            /*
             * Store used configs for:
             * - this method uses to collect used deprecated rules.
             * - `getRules()` method uses to collect all loaded rules.
             * - `--fix-type` option uses to get the loaded rule's meta data.
             */
            if (!lastConfigArrays.includes(config)) {
                lastConfigArrays.push(config);
            }

            // Skip if there is cached result.
            if (lintResultCache) {
                const cachedResult =
                    lintResultCache.getCachedLintResults(filePath, config);

                if (cachedResult) {
                    const hadMessages =
                        cachedResult.messages &&
                        cachedResult.messages.length > 0;

                    if (hadMessages && fix) {
                        debug(`Reprocessing cached file to allow autofix: ${filePath}`);
                    } else {
                        debug(`Skipping file since it hasn't changed: ${filePath}`);
                        results.push(cachedResult);
                        continue;
                    }
                }
            }

            // Do lint.
            const result = verifyText({
                text: fs.readFileSync(filePath, "utf8"),
                filePath,
                config,
                cwd,
                fix,
                allowInlineConfig,
                reportUnusedDisableDirectives,
                fileEnumerator,
                linter
            });

            results.push(result);

            /*
             * Store the lint result in the LintResultCache.
             * NOTE: The LintResultCache will remove the file source and any
             * other properties that are difficult to serialize, and will
             * hydrate those properties back in on future lint runs.
             */
            if (lintResultCache) {
                lintResultCache.setCachedLintResults(filePath, config, result);
            }
        }

        // Persist the cache to disk.
        if (lintResultCache) {
            lintResultCache.reconcile();
        }

        debug(`Linting complete in: ${Date.now() - startTime}ms`);
        let usedDeprecatedRules;

        return {
            results,
            ...calculateStatsPerRun(results),

            // Initialize it lazily because CLI and `ESLint` API don't use it.
            get usedDeprecatedRules() {
                if (!usedDeprecatedRules) {
                    usedDeprecatedRules = Array.from(
                        iterateRuleDeprecationWarnings(lastConfigArrays)
                    );
                }
                return usedDeprecatedRules;
            }
        };
    }

    /**
     * Executes the current configuration on text.
     * @param {string} text A string of JavaScript code to lint.
     * @param {string} [filename] An optional string representing the texts filename.
     * @param {boolean} [warnIgnored] Always warn when a file is ignored
     * @returns {LintReport} The results for the linting.
     */
    executeOnText(text, filename, warnIgnored) {
        const {
            configArrayFactory,
            fileEnumerator,
            lastConfigArrays,
            linter,
            options: {
                allowInlineConfig,
                cwd,
                fix,
                reportUnusedDisableDirectives
            }
        } = internalSlotsMap.get(this);
        const results = [];
        const startTime = Date.now();
        const resolvedFilename = filename && path.resolve(cwd, filename);


        // Clear the last used config arrays.
        lastConfigArrays.length = 0;
        if (resolvedFilename && this.isPathIgnored(resolvedFilename)) {
            if (warnIgnored) {
                results.push(createIgnoreResult(resolvedFilename, cwd));
            }
        } else {
            const config = configArrayFactory.getConfigArrayForFile(
                resolvedFilename || "__placeholder__.js"
            );

            /*
             * Store used configs for:
             * - this method uses to collect used deprecated rules.
             * - `getRules()` method uses to collect all loaded rules.
             * - `--fix-type` option uses to get the loaded rule's meta data.
             */
            lastConfigArrays.push(config);

            // Do lint.
            results.push(verifyText({
                text,
                filePath: resolvedFilename,
                config,
                cwd,
                fix,
                allowInlineConfig,
                reportUnusedDisableDirectives,
                fileEnumerator,
                linter
            }));
        }

        debug(`Linting complete in: ${Date.now() - startTime}ms`);
        let usedDeprecatedRules;

        return {
            results,
            ...calculateStatsPerRun(results),

            // Initialize it lazily because CLI and `ESLint` API don't use it.
            get usedDeprecatedRules() {
                if (!usedDeprecatedRules) {
                    usedDeprecatedRules = Array.from(
                        iterateRuleDeprecationWarnings(lastConfigArrays)
                    );
                }
                return usedDeprecatedRules;
            }
        };
    }

    /**
     * Returns a configuration object for the given file based on the CLI options.
     * This is the same logic used by the ESLint CLI executable to determine
     * configuration for each file it processes.
     * @param {string} filePath The path of the file to retrieve a config object for.
     * @returns {ConfigData} A configuration object for the file.
     */
    getConfigForFile(filePath) {
        const { configArrayFactory, options } = internalSlotsMap.get(this);
        const absolutePath = path.resolve(options.cwd, filePath);

        if (directoryExists(absolutePath)) {
            throw Object.assign(
                new Error("'filePath' should not be a directory path."),
                { messageTemplate: "print-config-with-directory-path" }
            );
        }

        return configArrayFactory
            .getConfigArrayForFile(absolutePath)
            .extractConfig(absolutePath)
            .toCompatibleObjectAsConfigFileContent();
    }

    /**
     * Checks if a given path is ignored by ESLint.
     * @param {string} filePath The path of the file to check.
     * @returns {boolean} Whether or not the given path is ignored.
     */
    isPathIgnored(filePath) {
        const {
            configArrayFactory,
            defaultIgnores,
            options: { cwd, ignore }
        } = internalSlotsMap.get(this);
        const absolutePath = path.resolve(cwd, filePath);

        if (ignore) {
            const config = configArrayFactory
                .getConfigArrayForFile(absolutePath)
                .extractConfig(absolutePath);
            const ignores = config.ignores || defaultIgnores;

            return ignores(absolutePath);
        }

        return defaultIgnores(absolutePath);
    }

    /**
     * Returns the formatter representing the given format or null if the `format` is not a string.
     * @param {string} [format] The name of the format to load or the path to a
     *      custom formatter.
     * @returns {(Function|null)} The formatter function or null if the `format` is not a string.
     */
    getFormatter(format) {

        // default is stylish
        const resolvedFormatName = format || "stylish";

        // only strings are valid formatters
        if (typeof resolvedFormatName === "string") {

            // replace \ with / for Windows compatibility
            const normalizedFormatName = resolvedFormatName.replace(/\\/gu, "/");

            const slots = internalSlotsMap.get(this);
            const cwd = slots ? slots.options.cwd : process.cwd();
            const namespace = naming.getNamespaceFromTerm(normalizedFormatName);

            let formatterPath;

            // if there's a slash, then it's a file (TODO: this check seems dubious for scoped npm packages)
            if (!namespace && normalizedFormatName.indexOf("/") > -1) {
                formatterPath = path.resolve(cwd, normalizedFormatName);
            } else {
                try {
                    const npmFormat = naming.normalizePackageName(normalizedFormatName, "eslint-formatter");

                    formatterPath = ModuleResolver.resolve(npmFormat, path.join(cwd, "__placeholder__.js"));
                } catch {
                    formatterPath = path.resolve(__dirname, "formatters", normalizedFormatName);
                }
            }

            try {
                return require(formatterPath);
            } catch (ex) {
                ex.message = `There was a problem loading formatter: ${formatterPath}\nError: ${ex.message}`;
                throw ex;
            }

        } else {
            return null;
        }
    }
}

CLIEngine.version = pkg.version;
CLIEngine.getFormatter = CLIEngine.prototype.getFormatter;

module.exports = {
    CLIEngine,

    /**
     * Get the internal slots of a given CLIEngine instance for tests.
     * @param {CLIEngine} instance The CLIEngine instance to get.
     * @returns {CLIEngineInternalSlots} The internal slots.
     */
    getCLIEngineInternalSlots(instance) {
        return internalSlotsMap.get(instance);
    }
};
