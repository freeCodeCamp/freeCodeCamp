/**
 * @fileoverview `CascadingConfigArrayFactory` class.
 *
 * `CascadingConfigArrayFactory` class has a responsibility:
 *
 * 1. Handles cascading of config files.
 *
 * It provides two methods:
 *
 * - `getConfigArrayForFile(filePath)`
 *     Get the corresponded configuration of a given file. This method doesn't
 *     throw even if the given file didn't exist.
 * - `clearCache()`
 *     Clear the internal cache. You have to call this method when
 *     `additionalPluginPool` was updated if `baseConfig` or `cliConfig` depends
 *     on the additional plugins. (`CLIEngine#addPlugin()` method calls this.)
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const os = require("os");
const path = require("path");
const ConfigValidator = require("./shared/config-validator");
const { emitDeprecationWarning } = require("./shared/deprecation-warnings");
const { ConfigArrayFactory } = require("./config-array-factory");
const { ConfigArray, ConfigDependency, IgnorePattern } = require("./config-array");
const debug = require("debug")("eslintrc:cascading-config-array-factory");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

// Define types for VSCode IntelliSense.
/** @typedef {import("./shared/types").ConfigData} ConfigData */
/** @typedef {import("./shared/types").Parser} Parser */
/** @typedef {import("./shared/types").Plugin} Plugin */
/** @typedef {import("./shared/types").Rule} Rule */
/** @typedef {ReturnType<ConfigArrayFactory["create"]>} ConfigArray */

/**
 * @typedef {Object} CascadingConfigArrayFactoryOptions
 * @property {Map<string,Plugin>} [additionalPluginPool] The map for additional plugins.
 * @property {ConfigData} [baseConfig] The config by `baseConfig` option.
 * @property {ConfigData} [cliConfig] The config by CLI options (`--env`, `--global`, `--ignore-pattern`, `--parser`, `--parser-options`, `--plugin`, and `--rule`). CLI options overwrite the setting in config files.
 * @property {string} [cwd] The base directory to start lookup.
 * @property {string} [ignorePath] The path to the alternative file of `.eslintignore`.
 * @property {string[]} [rulePaths] The value of `--rulesdir` option.
 * @property {string} [specificConfigPath] The value of `--config` option.
 * @property {boolean} [useEslintrc] if `false` then it doesn't load config files.
 * @property {Function} loadRules The function to use to load rules.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 */

/**
 * @typedef {Object} CascadingConfigArrayFactoryInternalSlots
 * @property {ConfigArray} baseConfigArray The config array of `baseConfig` option.
 * @property {ConfigData} baseConfigData The config data of `baseConfig` option. This is used to reset `baseConfigArray`.
 * @property {ConfigArray} cliConfigArray The config array of CLI options.
 * @property {ConfigData} cliConfigData The config data of CLI options. This is used to reset `cliConfigArray`.
 * @property {ConfigArrayFactory} configArrayFactory The factory for config arrays.
 * @property {Map<string, ConfigArray>} configCache The cache from directory paths to config arrays.
 * @property {string} cwd The base directory to start lookup.
 * @property {WeakMap<ConfigArray, ConfigArray>} finalizeCache The cache from config arrays to finalized config arrays.
 * @property {string} [ignorePath] The path to the alternative file of `.eslintignore`.
 * @property {string[]|null} rulePaths The value of `--rulesdir` option. This is used to reset `baseConfigArray`.
 * @property {string|null} specificConfigPath The value of `--config` option. This is used to reset `cliConfigArray`.
 * @property {boolean} useEslintrc if `false` then it doesn't load config files.
 * @property {Function} loadRules The function to use to load rules.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 */

/** @type {WeakMap<CascadingConfigArrayFactory, CascadingConfigArrayFactoryInternalSlots>} */
const internalSlotsMap = new WeakMap();

/**
 * Create the config array from `baseConfig` and `rulePaths`.
 * @param {CascadingConfigArrayFactoryInternalSlots} slots The slots.
 * @returns {ConfigArray} The config array of the base configs.
 */
function createBaseConfigArray({
    configArrayFactory,
    baseConfigData,
    rulePaths,
    cwd,
    loadRules
}) {
    const baseConfigArray = configArrayFactory.create(
        baseConfigData,
        { name: "BaseConfig" }
    );

    /*
     * Create the config array element for the default ignore patterns.
     * This element has `ignorePattern` property that ignores the default
     * patterns in the current working directory.
     */
    baseConfigArray.unshift(configArrayFactory.create(
        { ignorePatterns: IgnorePattern.DefaultPatterns },
        { name: "DefaultIgnorePattern" }
    )[0]);

    /*
     * Load rules `--rulesdir` option as a pseudo plugin.
     * Use a pseudo plugin to define rules of `--rulesdir`, so we can validate
     * the rule's options with only information in the config array.
     */
    if (rulePaths && rulePaths.length > 0) {
        baseConfigArray.push({
            type: "config",
            name: "--rulesdir",
            filePath: "",
            plugins: {
                "": new ConfigDependency({
                    definition: {
                        rules: rulePaths.reduce(
                            (map, rulesPath) => Object.assign(
                                map,
                                loadRules(rulesPath, cwd)
                            ),
                            {}
                        )
                    },
                    filePath: "",
                    id: "",
                    importerName: "--rulesdir",
                    importerPath: ""
                })
            }
        });
    }

    return baseConfigArray;
}

/**
 * Create the config array from CLI options.
 * @param {CascadingConfigArrayFactoryInternalSlots} slots The slots.
 * @returns {ConfigArray} The config array of the base configs.
 */
function createCLIConfigArray({
    cliConfigData,
    configArrayFactory,
    cwd,
    ignorePath,
    specificConfigPath
}) {
    const cliConfigArray = configArrayFactory.create(
        cliConfigData,
        { name: "CLIOptions" }
    );

    cliConfigArray.unshift(
        ...(ignorePath
            ? configArrayFactory.loadESLintIgnore(ignorePath)
            : configArrayFactory.loadDefaultESLintIgnore())
    );

    if (specificConfigPath) {
        cliConfigArray.unshift(
            ...configArrayFactory.loadFile(
                specificConfigPath,
                { name: "--config", basePath: cwd }
            )
        );
    }

    return cliConfigArray;
}

/**
 * The error type when there are files matched by a glob, but all of them have been ignored.
 */
class ConfigurationNotFoundError extends Error {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {string} directoryPath The directory path.
     */
    constructor(directoryPath) {
        super(`No ESLint configuration found in ${directoryPath}.`);
        this.messageTemplate = "no-config-found";
        this.messageData = { directoryPath };
    }
}

/**
 * This class provides the functionality that enumerates every file which is
 * matched by given glob patterns and that configuration.
 */
class CascadingConfigArrayFactory {

    /**
     * Initialize this enumerator.
     * @param {CascadingConfigArrayFactoryOptions} options The options.
     */
    constructor({
        additionalPluginPool = new Map(),
        baseConfig: baseConfigData = null,
        cliConfig: cliConfigData = null,
        cwd = process.cwd(),
        ignorePath,
        resolvePluginsRelativeTo,
        rulePaths = [],
        specificConfigPath = null,
        useEslintrc = true,
        builtInRules = new Map(),
        loadRules,
        resolver,
        eslintRecommendedPath,
        eslintAllPath
    } = {}) {
        const configArrayFactory = new ConfigArrayFactory({
            additionalPluginPool,
            cwd,
            resolvePluginsRelativeTo,
            builtInRules,
            resolver,
            eslintRecommendedPath,
            eslintAllPath
        });

        internalSlotsMap.set(this, {
            baseConfigArray: createBaseConfigArray({
                baseConfigData,
                configArrayFactory,
                cwd,
                rulePaths,
                loadRules,
                resolver
            }),
            baseConfigData,
            cliConfigArray: createCLIConfigArray({
                cliConfigData,
                configArrayFactory,
                cwd,
                ignorePath,
                specificConfigPath
            }),
            cliConfigData,
            configArrayFactory,
            configCache: new Map(),
            cwd,
            finalizeCache: new WeakMap(),
            ignorePath,
            rulePaths,
            specificConfigPath,
            useEslintrc,
            builtInRules,
            loadRules
        });
    }

    /**
     * The path to the current working directory.
     * This is used by tests.
     * @type {string}
     */
    get cwd() {
        const { cwd } = internalSlotsMap.get(this);

        return cwd;
    }

    /**
     * Get the config array of a given file.
     * If `filePath` was not given, it returns the config which contains only
     * `baseConfigData` and `cliConfigData`.
     * @param {string} [filePath] The file path to a file.
     * @param {Object} [options] The options.
     * @param {boolean} [options.ignoreNotFoundError] If `true` then it doesn't throw `ConfigurationNotFoundError`.
     * @returns {ConfigArray} The config array of the file.
     */
    getConfigArrayForFile(filePath, { ignoreNotFoundError = false } = {}) {
        const {
            baseConfigArray,
            cliConfigArray,
            cwd
        } = internalSlotsMap.get(this);

        if (!filePath) {
            return new ConfigArray(...baseConfigArray, ...cliConfigArray);
        }

        const directoryPath = path.dirname(path.resolve(cwd, filePath));

        debug(`Load config files for ${directoryPath}.`);

        return this._finalizeConfigArray(
            this._loadConfigInAncestors(directoryPath),
            directoryPath,
            ignoreNotFoundError
        );
    }

    /**
     * Set the config data to override all configs.
     * Require to call `clearCache()` method after this method is called.
     * @param {ConfigData} configData The config data to override all configs.
     * @returns {void}
     */
    setOverrideConfig(configData) {
        const slots = internalSlotsMap.get(this);

        slots.cliConfigData = configData;
    }

    /**
     * Clear config cache.
     * @returns {void}
     */
    clearCache() {
        const slots = internalSlotsMap.get(this);

        slots.baseConfigArray = createBaseConfigArray(slots);
        slots.cliConfigArray = createCLIConfigArray(slots);
        slots.configCache.clear();
    }

    /**
     * Load and normalize config files from the ancestor directories.
     * @param {string} directoryPath The path to a leaf directory.
     * @param {boolean} configsExistInSubdirs `true` if configurations exist in subdirectories.
     * @returns {ConfigArray} The loaded config.
     * @private
     */
    _loadConfigInAncestors(directoryPath, configsExistInSubdirs = false) {
        const {
            baseConfigArray,
            configArrayFactory,
            configCache,
            cwd,
            useEslintrc
        } = internalSlotsMap.get(this);

        if (!useEslintrc) {
            return baseConfigArray;
        }

        let configArray = configCache.get(directoryPath);

        // Hit cache.
        if (configArray) {
            debug(`Cache hit: ${directoryPath}.`);
            return configArray;
        }
        debug(`No cache found: ${directoryPath}.`);

        const homePath = os.homedir();

        // Consider this is root.
        if (directoryPath === homePath && cwd !== homePath) {
            debug("Stop traversing because of considered root.");
            if (configsExistInSubdirs) {
                const filePath = ConfigArrayFactory.getPathToConfigFileInDirectory(directoryPath);

                if (filePath) {
                    emitDeprecationWarning(
                        filePath,
                        "ESLINT_PERSONAL_CONFIG_SUPPRESS"
                    );
                }
            }
            return this._cacheConfig(directoryPath, baseConfigArray);
        }

        // Load the config on this directory.
        try {
            configArray = configArrayFactory.loadInDirectory(directoryPath);
        } catch (error) {
            /* istanbul ignore next */
            if (error.code === "EACCES") {
                debug("Stop traversing because of 'EACCES' error.");
                return this._cacheConfig(directoryPath, baseConfigArray);
            }
            throw error;
        }

        if (configArray.length > 0 && configArray.isRoot()) {
            debug("Stop traversing because of 'root:true'.");
            configArray.unshift(...baseConfigArray);
            return this._cacheConfig(directoryPath, configArray);
        }

        // Load from the ancestors and merge it.
        const parentPath = path.dirname(directoryPath);
        const parentConfigArray = parentPath && parentPath !== directoryPath
            ? this._loadConfigInAncestors(
                parentPath,
                configsExistInSubdirs || configArray.length > 0
            )
            : baseConfigArray;

        if (configArray.length > 0) {
            configArray.unshift(...parentConfigArray);
        } else {
            configArray = parentConfigArray;
        }

        // Cache and return.
        return this._cacheConfig(directoryPath, configArray);
    }

    /**
     * Freeze and cache a given config.
     * @param {string} directoryPath The path to a directory as a cache key.
     * @param {ConfigArray} configArray The config array as a cache value.
     * @returns {ConfigArray} The `configArray` (frozen).
     */
    _cacheConfig(directoryPath, configArray) {
        const { configCache } = internalSlotsMap.get(this);

        Object.freeze(configArray);
        configCache.set(directoryPath, configArray);

        return configArray;
    }

    /**
     * Finalize a given config array.
     * Concatenate `--config` and other CLI options.
     * @param {ConfigArray} configArray The parent config array.
     * @param {string} directoryPath The path to the leaf directory to find config files.
     * @param {boolean} ignoreNotFoundError If `true` then it doesn't throw `ConfigurationNotFoundError`.
     * @returns {ConfigArray} The loaded config.
     * @private
     */
    _finalizeConfigArray(configArray, directoryPath, ignoreNotFoundError) {
        const {
            cliConfigArray,
            configArrayFactory,
            finalizeCache,
            useEslintrc,
            builtInRules
        } = internalSlotsMap.get(this);

        let finalConfigArray = finalizeCache.get(configArray);

        if (!finalConfigArray) {
            finalConfigArray = configArray;

            // Load the personal config if there are no regular config files.
            if (
                useEslintrc &&
                configArray.every(c => !c.filePath) &&
                cliConfigArray.every(c => !c.filePath) // `--config` option can be a file.
            ) {
                const homePath = os.homedir();

                debug("Loading the config file of the home directory:", homePath);

                const personalConfigArray = configArrayFactory.loadInDirectory(
                    homePath,
                    { name: "PersonalConfig" }
                );

                if (
                    personalConfigArray.length > 0 &&
                    !directoryPath.startsWith(homePath)
                ) {
                    const lastElement =
                        personalConfigArray[personalConfigArray.length - 1];

                    emitDeprecationWarning(
                        lastElement.filePath,
                        "ESLINT_PERSONAL_CONFIG_LOAD"
                    );
                }

                finalConfigArray = finalConfigArray.concat(personalConfigArray);
            }

            // Apply CLI options.
            if (cliConfigArray.length > 0) {
                finalConfigArray = finalConfigArray.concat(cliConfigArray);
            }

            // Validate rule settings and environments.
            const validator = new ConfigValidator({
                builtInRules
            });

            validator.validateConfigArray(finalConfigArray);

            // Cache it.
            Object.freeze(finalConfigArray);
            finalizeCache.set(configArray, finalConfigArray);

            debug(
                "Configuration was determined: %o on %s",
                finalConfigArray,
                directoryPath
            );
        }

        // At least one element (the default ignore patterns) exists.
        if (!ignoreNotFoundError && useEslintrc && finalConfigArray.length <= 1) {
            throw new ConfigurationNotFoundError(directoryPath);
        }

        return finalConfigArray;
    }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = { CascadingConfigArrayFactory };
