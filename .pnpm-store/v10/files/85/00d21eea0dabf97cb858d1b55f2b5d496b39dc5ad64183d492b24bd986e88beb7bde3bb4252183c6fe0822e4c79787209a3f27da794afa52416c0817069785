/**
 * @fileoverview The factory of `ConfigArray` objects.
 *
 * This class provides methods to create `ConfigArray` instance.
 *
 * - `create(configData, options)`
 *     Create a `ConfigArray` instance from a config data. This is to handle CLI
 *     options except `--config`.
 * - `loadFile(filePath, options)`
 *     Create a `ConfigArray` instance from a config file. This is to handle
 *     `--config` option. If the file was not found, throws the following error:
 *      - If the filename was `*.js`, a `MODULE_NOT_FOUND` error.
 *      - If the filename was `package.json`, an IO error or an
 *        `ESLINT_CONFIG_FIELD_NOT_FOUND` error.
 *      - Otherwise, an IO error such as `ENOENT`.
 * - `loadInDirectory(directoryPath, options)`
 *     Create a `ConfigArray` instance from a config file which is on a given
 *     directory. This tries to load `.eslintrc.*` or `package.json`. If not
 *     found, returns an empty `ConfigArray`.
 * - `loadESLintIgnore(filePath)`
 *     Create a `ConfigArray` instance from a config file that is `.eslintignore`
 *     format. This is to handle `--ignore-path` option.
 * - `loadDefaultESLintIgnore()`
 *     Create a `ConfigArray` instance from `.eslintignore` or `package.json` in
 *     the current working directory.
 *
 * `ConfigArrayFactory` class has the responsibility that loads configuration
 * files, including loading `extends`, `parser`, and `plugins`. The created
 * `ConfigArray` instance has the loaded `extends`, `parser`, and `plugins`.
 *
 * But this class doesn't handle cascading. `CascadingConfigArrayFactory` class
 * handles cascading and hierarchy.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import debugOrig from "debug";
import fs from "node:fs";
import importFresh from "import-fresh";
import { createRequire } from "node:module";
import path from "node:path";
import stripComments from "strip-json-comments";

import {
    ConfigArray,
    ConfigDependency,
    IgnorePattern,
    OverrideTester
} from "./config-array/index.js";
import ConfigValidator from "./shared/config-validator.js";
import * as naming from "./shared/naming.js";
import * as ModuleResolver from "./shared/relative-module-resolver.js";

const require = createRequire(import.meta.url);

const debug = debugOrig("eslintrc:config-array-factory");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const configFilenames = [
    ".eslintrc.js",
    ".eslintrc.cjs",
    ".eslintrc.yaml",
    ".eslintrc.yml",
    ".eslintrc.json",
    ".eslintrc",
    "package.json"
];

// Define types for VSCode IntelliSense.
/** @typedef {import("./shared/types").ConfigData} ConfigData */
/** @typedef {import("./shared/types").OverrideConfigData} OverrideConfigData */
/** @typedef {import("./shared/types").Parser} Parser */
/** @typedef {import("./shared/types").Plugin} Plugin */
/** @typedef {import("./shared/types").Rule} Rule */
/** @typedef {import("./config-array/config-dependency").DependentParser} DependentParser */
/** @typedef {import("./config-array/config-dependency").DependentPlugin} DependentPlugin */
/** @typedef {ConfigArray[0]} ConfigArrayElement */

/**
 * @typedef {Object} ConfigArrayFactoryOptions
 * @property {Map<string,Plugin>} [additionalPluginPool] The map for additional plugins.
 * @property {string} [cwd] The path to the current working directory.
 * @property {string} [resolvePluginsRelativeTo] A path to the directory that plugins should be resolved from. Defaults to `cwd`.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {Function} getEslintAllConfig Returns the config data for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 * @property {Function} getEslintRecommendedConfig Returns the config data for eslint:recommended.
 */

/**
 * @typedef {Object} ConfigArrayFactoryInternalSlots
 * @property {Map<string,Plugin>} additionalPluginPool The map for additional plugins.
 * @property {string} cwd The path to the current working directory.
 * @property {string | undefined} resolvePluginsRelativeTo An absolute path the the directory that plugins should be resolved from.
 * @property {Map<string,Rule>} builtInRules The rules that are built in to ESLint.
 * @property {Object} [resolver=ModuleResolver] The module resolver object.
 * @property {string} eslintAllPath The path to the definitions for eslint:all.
 * @property {Function} getEslintAllConfig Returns the config data for eslint:all.
 * @property {string} eslintRecommendedPath The path to the definitions for eslint:recommended.
 * @property {Function} getEslintRecommendedConfig Returns the config data for eslint:recommended.
 */

/**
 * @typedef {Object} ConfigArrayFactoryLoadingContext
 * @property {string} filePath The path to the current configuration.
 * @property {string} matchBasePath The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
 * @property {string} name The name of the current configuration.
 * @property {string} pluginBasePath The base path to resolve plugins.
 * @property {"config" | "ignore" | "implicit-processor"} type The type of the current configuration. This is `"config"` in normal. This is `"ignore"` if it came from `.eslintignore`. This is `"implicit-processor"` if it came from legacy file-extension processors.
 */

/**
 * @typedef {Object} ConfigArrayFactoryLoadingContext
 * @property {string} filePath The path to the current configuration.
 * @property {string} matchBasePath The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
 * @property {string} name The name of the current configuration.
 * @property {"config" | "ignore" | "implicit-processor"} type The type of the current configuration. This is `"config"` in normal. This is `"ignore"` if it came from `.eslintignore`. This is `"implicit-processor"` if it came from legacy file-extension processors.
 */

/** @type {WeakMap<ConfigArrayFactory, ConfigArrayFactoryInternalSlots>} */
const internalSlotsMap = new WeakMap();

/** @type {WeakMap<object, Plugin>} */
const normalizedPlugins = new WeakMap();

/**
 * Check if a given string is a file path.
 * @param {string} nameOrPath A module name or file path.
 * @returns {boolean} `true` if the `nameOrPath` is a file path.
 */
function isFilePath(nameOrPath) {
    return (
        /^\.{1,2}[/\\]/u.test(nameOrPath) ||
        path.isAbsolute(nameOrPath)
    );
}

/**
 * Convenience wrapper for synchronously reading file contents.
 * @param {string} filePath The filename to read.
 * @returns {string} The file contents, with the BOM removed.
 * @private
 */
function readFile(filePath) {
    return fs.readFileSync(filePath, "utf8").replace(/^\ufeff/u, "");
}

/**
 * Loads a YAML configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadYAMLConfigFile(filePath) {
    debug(`Loading YAML config file: ${filePath}`);

    // lazy load YAML to improve performance when not used
    const yaml = require("js-yaml");

    try {

        // empty YAML file can be null, so always use
        return yaml.load(readFile(filePath)) || {};
    } catch (e) {
        debug(`Error reading YAML file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a JSON configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadJSONConfigFile(filePath) {
    debug(`Loading JSON config file: ${filePath}`);

    try {
        return JSON.parse(stripComments(readFile(filePath)));
    } catch (e) {
        debug(`Error reading JSON file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        e.messageTemplate = "failed-to-read-json";
        e.messageData = {
            path: filePath,
            message: e.message
        };
        throw e;
    }
}

/**
 * Loads a legacy (.eslintrc) configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadLegacyConfigFile(filePath) {
    debug(`Loading legacy config file: ${filePath}`);

    // lazy load YAML to improve performance when not used
    const yaml = require("js-yaml");

    try {
        return yaml.load(stripComments(readFile(filePath))) || /* istanbul ignore next */ {};
    } catch (e) {
        debug("Error reading YAML file: %s\n%o", filePath, e);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a JavaScript configuration from a file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadJSConfigFile(filePath) {
    debug(`Loading JS config file: ${filePath}`);
    try {
        return importFresh(filePath);
    } catch (e) {
        debug(`Error reading JavaScript file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a configuration from a package.json file.
 * @param {string} filePath The filename to load.
 * @returns {ConfigData} The configuration object from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadPackageJSONConfigFile(filePath) {
    debug(`Loading package.json config file: ${filePath}`);
    try {
        const packageData = loadJSONConfigFile(filePath);

        if (!Object.hasOwn(packageData, "eslintConfig")) {
            throw Object.assign(
                new Error("package.json file doesn't have 'eslintConfig' field."),
                { code: "ESLINT_CONFIG_FIELD_NOT_FOUND" }
            );
        }

        return packageData.eslintConfig;
    } catch (e) {
        debug(`Error reading package.json file: ${filePath}`);
        e.message = `Cannot read config file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Loads a `.eslintignore` from a file.
 * @param {string} filePath The filename to load.
 * @returns {string[]} The ignore patterns from the file.
 * @throws {Error} If the file cannot be read.
 * @private
 */
function loadESLintIgnoreFile(filePath) {
    debug(`Loading .eslintignore file: ${filePath}`);

    try {
        return readFile(filePath)
            .split(/\r?\n/gu)
            .filter(line => line.trim() !== "" && !line.startsWith("#"));
    } catch (e) {
        debug(`Error reading .eslintignore file: ${filePath}`);
        e.message = `Cannot read .eslintignore file: ${filePath}\nError: ${e.message}`;
        throw e;
    }
}

/**
 * Creates an error to notify about a missing config to extend from.
 * @param {string} configName The name of the missing config.
 * @param {string} importerName The name of the config that imported the missing config
 * @param {string} messageTemplate The text template to source error strings from.
 * @returns {Error} The error object to throw
 * @private
 */
function configInvalidError(configName, importerName, messageTemplate) {
    return Object.assign(
        new Error(`Failed to load config "${configName}" to extend from.`),
        {
            messageTemplate,
            messageData: { configName, importerName }
        }
    );
}

/**
 * Loads a configuration file regardless of the source. Inspects the file path
 * to determine the correctly way to load the config file.
 * @param {string} filePath The path to the configuration.
 * @returns {ConfigData|null} The configuration information.
 * @private
 */
function loadConfigFile(filePath) {
    switch (path.extname(filePath)) {
        case ".js":
        case ".cjs":
            return loadJSConfigFile(filePath);

        case ".json":
            if (path.basename(filePath) === "package.json") {
                return loadPackageJSONConfigFile(filePath);
            }
            return loadJSONConfigFile(filePath);

        case ".yaml":
        case ".yml":
            return loadYAMLConfigFile(filePath);

        default:
            return loadLegacyConfigFile(filePath);
    }
}

/**
 * Write debug log.
 * @param {string} request The requested module name.
 * @param {string} relativeTo The file path to resolve the request relative to.
 * @param {string} filePath The resolved file path.
 * @returns {void}
 */
function writeDebugLogForLoading(request, relativeTo, filePath) {
    /* istanbul ignore next */
    if (debug.enabled) {
        let nameAndVersion = null; // eslint-disable-line no-useless-assignment -- known bug in the rule

        try {
            const packageJsonPath = ModuleResolver.resolve(
                `${request}/package.json`,
                relativeTo
            );
            const { version = "unknown" } = require(packageJsonPath);

            nameAndVersion = `${request}@${version}`;
        } catch (error) {
            debug("package.json was not found:", error.message);
            nameAndVersion = request;
        }

        debug("Loaded: %s (%s)", nameAndVersion, filePath);
    }
}

/**
 * Create a new context with default values.
 * @param {ConfigArrayFactoryInternalSlots} slots The internal slots.
 * @param {"config" | "ignore" | "implicit-processor" | undefined} providedType The type of the current configuration. Default is `"config"`.
 * @param {string | undefined} providedName The name of the current configuration. Default is the relative path from `cwd` to `filePath`.
 * @param {string | undefined} providedFilePath The path to the current configuration. Default is empty string.
 * @param {string | undefined} providedMatchBasePath The type of the current configuration. Default is the directory of `filePath` or `cwd`.
 * @returns {ConfigArrayFactoryLoadingContext} The created context.
 */
function createContext(
    { cwd, resolvePluginsRelativeTo },
    providedType,
    providedName,
    providedFilePath,
    providedMatchBasePath
) {
    const filePath = providedFilePath
        ? path.resolve(cwd, providedFilePath)
        : "";
    const matchBasePath =
        (providedMatchBasePath && path.resolve(cwd, providedMatchBasePath)) ||
        (filePath && path.dirname(filePath)) ||
        cwd;
    const name =
        providedName ||
        (filePath && path.relative(cwd, filePath)) ||
        "";
    const pluginBasePath =
        resolvePluginsRelativeTo ||
        (filePath && path.dirname(filePath)) ||
        cwd;
    const type = providedType || "config";

    return { filePath, matchBasePath, name, pluginBasePath, type };
}

/**
 * Normalize a given plugin.
 * - Ensure the object to have four properties: configs, environments, processors, and rules.
 * - Ensure the object to not have other properties.
 * @param {Plugin} plugin The plugin to normalize.
 * @returns {Plugin} The normalized plugin.
 */
function normalizePlugin(plugin) {

    // first check the cache
    let normalizedPlugin = normalizedPlugins.get(plugin);

    if (normalizedPlugin) {
        return normalizedPlugin;
    }

    normalizedPlugin = {
        configs: plugin.configs || {},
        environments: plugin.environments || {},
        processors: plugin.processors || {},
        rules: plugin.rules || {}
    };

    // save the reference for later
    normalizedPlugins.set(plugin, normalizedPlugin);

    return normalizedPlugin;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * The factory of `ConfigArray` objects.
 */
class ConfigArrayFactory {

    /**
     * Initialize this instance.
     * @param {ConfigArrayFactoryOptions} [options] The map for additional plugins.
     */
    constructor({
        additionalPluginPool = new Map(),
        cwd = process.cwd(),
        resolvePluginsRelativeTo,
        builtInRules,
        resolver = ModuleResolver,
        eslintAllPath,
        getEslintAllConfig,
        eslintRecommendedPath,
        getEslintRecommendedConfig
    } = {}) {
        internalSlotsMap.set(this, {
            additionalPluginPool,
            cwd,
            resolvePluginsRelativeTo:
                resolvePluginsRelativeTo &&
                path.resolve(cwd, resolvePluginsRelativeTo),
            builtInRules,
            resolver,
            eslintAllPath,
            getEslintAllConfig,
            eslintRecommendedPath,
            getEslintRecommendedConfig
        });
    }

    /**
     * Create `ConfigArray` instance from a config data.
     * @param {ConfigData|null} configData The config data to create.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.filePath] The path to this config data.
     * @param {string} [options.name] The config name.
     * @returns {ConfigArray} Loaded config.
     */
    create(configData, { basePath, filePath, name } = {}) {
        if (!configData) {
            return new ConfigArray();
        }

        const slots = internalSlotsMap.get(this);
        const ctx = createContext(slots, "config", name, filePath, basePath);
        const elements = this._normalizeConfigData(configData, ctx);

        return new ConfigArray(...elements);
    }

    /**
     * Load a config file.
     * @param {string} filePath The path to a config file.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.name] The config name.
     * @returns {ConfigArray} Loaded config.
     */
    loadFile(filePath, { basePath, name } = {}) {
        const slots = internalSlotsMap.get(this);
        const ctx = createContext(slots, "config", name, filePath, basePath);

        return new ConfigArray(...this._loadConfigData(ctx));
    }

    /**
     * Load the config file on a given directory if exists.
     * @param {string} directoryPath The path to a directory.
     * @param {Object} [options] The options.
     * @param {string} [options.basePath] The base path to resolve relative paths in `overrides[].files`, `overrides[].excludedFiles`, and `ignorePatterns`.
     * @param {string} [options.name] The config name.
     * @throws {Error} If the config file is invalid.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     */
    loadInDirectory(directoryPath, { basePath, name } = {}) {
        const slots = internalSlotsMap.get(this);

        for (const filename of configFilenames) {
            const ctx = createContext(
                slots,
                "config",
                name,
                path.join(directoryPath, filename),
                basePath
            );

            if (fs.existsSync(ctx.filePath) && fs.statSync(ctx.filePath).isFile()) {
                let configData;

                try {
                    configData = loadConfigFile(ctx.filePath);
                } catch (error) {
                    if (!error || error.code !== "ESLINT_CONFIG_FIELD_NOT_FOUND") {
                        throw error;
                    }
                }

                if (configData) {
                    debug(`Config file found: ${ctx.filePath}`);
                    return new ConfigArray(
                        ...this._normalizeConfigData(configData, ctx)
                    );
                }
            }
        }

        debug(`Config file not found on ${directoryPath}`);
        return new ConfigArray();
    }

    /**
     * Check if a config file on a given directory exists or not.
     * @param {string} directoryPath The path to a directory.
     * @returns {string | null} The path to the found config file. If not found then null.
     */
    static getPathToConfigFileInDirectory(directoryPath) {
        for (const filename of configFilenames) {
            const filePath = path.join(directoryPath, filename);

            if (fs.existsSync(filePath)) {
                if (filename === "package.json") {
                    try {
                        loadPackageJSONConfigFile(filePath);
                        return filePath;
                    } catch { /* ignore */ }
                } else {
                    return filePath;
                }
            }
        }
        return null;
    }

    /**
     * Load `.eslintignore` file.
     * @param {string} filePath The path to a `.eslintignore` file to load.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     */
    loadESLintIgnore(filePath) {
        const slots = internalSlotsMap.get(this);
        const ctx = createContext(
            slots,
            "ignore",
            void 0,
            filePath,
            slots.cwd
        );
        const ignorePatterns = loadESLintIgnoreFile(ctx.filePath);

        return new ConfigArray(
            ...this._normalizeESLintIgnoreData(ignorePatterns, ctx)
        );
    }

    /**
     * Load `.eslintignore` file in the current working directory.
     * @returns {ConfigArray} Loaded config. An empty `ConfigArray` if any config doesn't exist.
     * @throws {Error} If the ignore file is invalid.
     */
    loadDefaultESLintIgnore() {
        const slots = internalSlotsMap.get(this);
        const eslintIgnorePath = path.resolve(slots.cwd, ".eslintignore");
        const packageJsonPath = path.resolve(slots.cwd, "package.json");

        if (fs.existsSync(eslintIgnorePath)) {
            return this.loadESLintIgnore(eslintIgnorePath);
        }
        if (fs.existsSync(packageJsonPath)) {
            const data = loadJSONConfigFile(packageJsonPath);

            if (Object.hasOwn(data, "eslintIgnore")) {
                if (!Array.isArray(data.eslintIgnore)) {
                    throw new Error("Package.json eslintIgnore property requires an array of paths");
                }
                const ctx = createContext(
                    slots,
                    "ignore",
                    "eslintIgnore in package.json",
                    packageJsonPath,
                    slots.cwd
                );

                return new ConfigArray(
                    ...this._normalizeESLintIgnoreData(data.eslintIgnore, ctx)
                );
            }
        }

        return new ConfigArray();
    }

    /**
     * Load a given config file.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} Loaded config.
     * @private
     */
    _loadConfigData(ctx) {
        return this._normalizeConfigData(loadConfigFile(ctx.filePath), ctx);
    }

    /**
     * Normalize a given `.eslintignore` data to config array elements.
     * @param {string[]} ignorePatterns The patterns to ignore files.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    *_normalizeESLintIgnoreData(ignorePatterns, ctx) {
        const elements = this._normalizeObjectConfigData(
            { ignorePatterns },
            ctx
        );

        // Set `ignorePattern.loose` flag for backward compatibility.
        for (const element of elements) {
            if (element.ignorePattern) {
                element.ignorePattern.loose = true;
            }
            yield element;
        }
    }

    /**
     * Normalize a given config to an array.
     * @param {ConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    _normalizeConfigData(configData, ctx) {
        const validator = new ConfigValidator();

        validator.validateConfigSchema(configData, ctx.name || ctx.filePath);
        return this._normalizeObjectConfigData(configData, ctx);
    }

    /**
     * Normalize a given config to an array.
     * @param {ConfigData|OverrideConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    *_normalizeObjectConfigData(configData, ctx) {
        const { files, excludedFiles, ...configBody } = configData;
        const criteria = OverrideTester.create(
            files,
            excludedFiles,
            ctx.matchBasePath
        );
        const elements = this._normalizeObjectConfigDataBody(configBody, ctx);

        // Apply the criteria to every element.
        for (const element of elements) {

            /*
             * Merge the criteria.
             * This is for the `overrides` entries that came from the
             * configurations of `overrides[].extends`.
             */
            element.criteria = OverrideTester.and(criteria, element.criteria);

            /*
             * Remove `root` property to ignore `root` settings which came from
             * `extends` in `overrides`.
             */
            if (element.criteria) {
                element.root = void 0;
            }

            yield element;
        }
    }

    /**
     * Normalize a given config to an array.
     * @param {ConfigData} configData The config data to normalize.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @private
     */
    *_normalizeObjectConfigDataBody(
        {
            env,
            extends: extend,
            globals,
            ignorePatterns,
            noInlineConfig,
            parser: parserName,
            parserOptions,
            plugins: pluginList,
            processor,
            reportUnusedDisableDirectives,
            root,
            rules,
            settings,
            overrides: overrideList = []
        },
        ctx
    ) {
        const extendList = Array.isArray(extend) ? extend : [extend];
        const ignorePattern = ignorePatterns && new IgnorePattern(
            Array.isArray(ignorePatterns) ? ignorePatterns : [ignorePatterns],
            ctx.matchBasePath
        );

        // Flatten `extends`.
        for (const extendName of extendList.filter(Boolean)) {
            yield* this._loadExtends(extendName, ctx);
        }

        // Load parser & plugins.
        const parser = parserName && this._loadParser(parserName, ctx);
        const plugins = pluginList && this._loadPlugins(pluginList, ctx);

        // Yield pseudo config data for file extension processors.
        if (plugins) {
            yield* this._takeFileExtensionProcessors(plugins, ctx);
        }

        // Yield the config data except `extends` and `overrides`.
        yield {

            // Debug information.
            type: ctx.type,
            name: ctx.name,
            filePath: ctx.filePath,

            // Config data.
            criteria: null,
            env,
            globals,
            ignorePattern,
            noInlineConfig,
            parser,
            parserOptions,
            plugins,
            processor,
            reportUnusedDisableDirectives,
            root,
            rules,
            settings
        };

        // Flatten `overries`.
        for (let i = 0; i < overrideList.length; ++i) {
            yield* this._normalizeObjectConfigData(
                overrideList[i],
                { ...ctx, name: `${ctx.name}#overrides[${i}]` }
            );
        }
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtends(extendName, ctx) {
        debug("Loading {extends:%j} relative to %s", extendName, ctx.filePath);
        try {
            if (extendName.startsWith("eslint:")) {
                return this._loadExtendedBuiltInConfig(extendName, ctx);
            }
            if (extendName.startsWith("plugin:")) {
                return this._loadExtendedPluginConfig(extendName, ctx);
            }
            return this._loadExtendedShareableConfig(extendName, ctx);
        } catch (error) {
            error.message += `\nReferenced from: ${ctx.filePath || ctx.name}`;
            throw error;
        }
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtendedBuiltInConfig(extendName, ctx) {
        const {
            eslintAllPath,
            getEslintAllConfig,
            eslintRecommendedPath,
            getEslintRecommendedConfig
        } = internalSlotsMap.get(this);

        if (extendName === "eslint:recommended") {
            const name = `${ctx.name} » ${extendName}`;

            if (getEslintRecommendedConfig) {
                if (typeof getEslintRecommendedConfig !== "function") {
                    throw new Error(`getEslintRecommendedConfig must be a function instead of '${getEslintRecommendedConfig}'`);
                }
                return this._normalizeConfigData(getEslintRecommendedConfig(), { ...ctx, name, filePath: "" });
            }
            return this._loadConfigData({
                ...ctx,
                name,
                filePath: eslintRecommendedPath
            });
        }
        if (extendName === "eslint:all") {
            const name = `${ctx.name} » ${extendName}`;

            if (getEslintAllConfig) {
                if (typeof getEslintAllConfig !== "function") {
                    throw new Error(`getEslintAllConfig must be a function instead of '${getEslintAllConfig}'`);
                }
                return this._normalizeConfigData(getEslintAllConfig(), { ...ctx, name, filePath: "" });
            }
            return this._loadConfigData({
                ...ctx,
                name,
                filePath: eslintAllPath
            });
        }

        throw configInvalidError(extendName, ctx.name, "extend-config-missing");
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtendedPluginConfig(extendName, ctx) {
        const slashIndex = extendName.lastIndexOf("/");

        if (slashIndex === -1) {
            throw configInvalidError(extendName, ctx.filePath, "plugin-invalid");
        }

        const pluginName = extendName.slice("plugin:".length, slashIndex);
        const configName = extendName.slice(slashIndex + 1);

        if (isFilePath(pluginName)) {
            throw new Error("'extends' cannot use a file path for plugins.");
        }

        const plugin = this._loadPlugin(pluginName, ctx);
        const configData =
            plugin.definition &&
            plugin.definition.configs[configName];

        if (configData) {
            return this._normalizeConfigData(configData, {
                ...ctx,
                filePath: plugin.filePath || ctx.filePath,
                name: `${ctx.name} » plugin:${plugin.id}/${configName}`
            });
        }

        throw plugin.error || configInvalidError(extendName, ctx.filePath, "extend-config-missing");
    }

    /**
     * Load configs of an element in `extends`.
     * @param {string} extendName The name of a base config.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The normalized config.
     * @throws {Error} If the extended config file can't be loaded.
     * @private
     */
    _loadExtendedShareableConfig(extendName, ctx) {
        const { cwd, resolver } = internalSlotsMap.get(this);
        const relativeTo = ctx.filePath || path.join(cwd, "__placeholder__.js");
        let request;

        if (isFilePath(extendName)) {
            request = extendName;
        } else if (extendName.startsWith(".")) {
            request = `./${extendName}`; // For backward compatibility. A ton of tests depended on this behavior.
        } else {
            request = naming.normalizePackageName(
                extendName,
                "eslint-config"
            );
        }

        let filePath;

        try {
            filePath = resolver.resolve(request, relativeTo);
        } catch (error) {
            /* istanbul ignore else */
            if (error && error.code === "MODULE_NOT_FOUND") {
                throw configInvalidError(extendName, ctx.filePath, "extend-config-missing");
            }
            throw error;
        }

        writeDebugLogForLoading(request, relativeTo, filePath);
        return this._loadConfigData({
            ...ctx,
            filePath,
            name: `${ctx.name} » ${request}`
        });
    }

    /**
     * Load given plugins.
     * @param {string[]} names The plugin names to load.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {Record<string,DependentPlugin>} The loaded parser.
     * @private
     */
    _loadPlugins(names, ctx) {
        return names.reduce((map, name) => {
            if (isFilePath(name)) {
                throw new Error("Plugins array cannot includes file paths.");
            }
            const plugin = this._loadPlugin(name, ctx);

            map[plugin.id] = plugin;

            return map;
        }, {});
    }

    /**
     * Load a given parser.
     * @param {string} nameOrPath The package name or the path to a parser file.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {DependentParser} The loaded parser.
     */
    _loadParser(nameOrPath, ctx) {
        debug("Loading parser %j from %s", nameOrPath, ctx.filePath);

        const { cwd, resolver } = internalSlotsMap.get(this);
        const relativeTo = ctx.filePath || path.join(cwd, "__placeholder__.js");

        try {
            const filePath = resolver.resolve(nameOrPath, relativeTo);

            writeDebugLogForLoading(nameOrPath, relativeTo, filePath);

            return new ConfigDependency({
                definition: require(filePath),
                filePath,
                id: nameOrPath,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        } catch (error) {

            // If the parser name is "espree", load the espree of ESLint.
            if (nameOrPath === "espree") {
                debug("Fallback espree.");
                return new ConfigDependency({
                    definition: require("espree"),
                    filePath: require.resolve("espree"),
                    id: nameOrPath,
                    importerName: ctx.name,
                    importerPath: ctx.filePath
                });
            }

            debug("Failed to load parser '%s' declared in '%s'.", nameOrPath, ctx.name);
            error.message = `Failed to load parser '${nameOrPath}' declared in '${ctx.name}': ${error.message}`;

            return new ConfigDependency({
                error,
                id: nameOrPath,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        }
    }

    /**
     * Load a given plugin.
     * @param {string} name The plugin name to load.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {DependentPlugin} The loaded plugin.
     * @private
     */
    _loadPlugin(name, ctx) {
        debug("Loading plugin %j from %s", name, ctx.filePath);

        const { additionalPluginPool, resolver } = internalSlotsMap.get(this);
        const request = naming.normalizePackageName(name, "eslint-plugin");
        const id = naming.getShorthandName(request, "eslint-plugin");
        const relativeTo = path.join(ctx.pluginBasePath, "__placeholder__.js");

        if (name.match(/\s+/u)) {
            const error = Object.assign(
                new Error(`Whitespace found in plugin name '${name}'`),
                {
                    messageTemplate: "whitespace-found",
                    messageData: { pluginName: request }
                }
            );

            return new ConfigDependency({
                error,
                id,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        }

        // Check for additional pool.
        const plugin =
            additionalPluginPool.get(request) ||
            additionalPluginPool.get(id);

        if (plugin) {
            return new ConfigDependency({
                definition: normalizePlugin(plugin),
                original: plugin,
                filePath: "", // It's unknown where the plugin came from.
                id,
                importerName: ctx.name,
                importerPath: ctx.filePath
            });
        }

        let filePath;
        let error;

        try {
            filePath = resolver.resolve(request, relativeTo);
        } catch (resolveError) {
            error = resolveError;
            /* istanbul ignore else */
            if (error && error.code === "MODULE_NOT_FOUND") {
                error.messageTemplate = "plugin-missing";
                error.messageData = {
                    pluginName: request,
                    resolvePluginsRelativeTo: ctx.pluginBasePath,
                    importerName: ctx.name
                };
            }
        }

        if (filePath) {
            try {
                writeDebugLogForLoading(request, relativeTo, filePath);

                const startTime = Date.now();
                const pluginDefinition = require(filePath);

                debug(`Plugin ${filePath} loaded in: ${Date.now() - startTime}ms`);

                return new ConfigDependency({
                    definition: normalizePlugin(pluginDefinition),
                    original: pluginDefinition,
                    filePath,
                    id,
                    importerName: ctx.name,
                    importerPath: ctx.filePath
                });
            } catch (loadError) {
                error = loadError;
            }
        }

        debug("Failed to load plugin '%s' declared in '%s'.", name, ctx.name);
        error.message = `Failed to load plugin '${name}' declared in '${ctx.name}': ${error.message}`;
        return new ConfigDependency({
            error,
            id,
            importerName: ctx.name,
            importerPath: ctx.filePath
        });
    }

    /**
     * Take file expression processors as config array elements.
     * @param {Record<string,DependentPlugin>} plugins The plugin definitions.
     * @param {ConfigArrayFactoryLoadingContext} ctx The loading context.
     * @returns {IterableIterator<ConfigArrayElement>} The config array elements of file expression processors.
     * @private
     */
    *_takeFileExtensionProcessors(plugins, ctx) {
        for (const pluginId of Object.keys(plugins)) {
            const processors =
                plugins[pluginId] &&
                plugins[pluginId].definition &&
                plugins[pluginId].definition.processors;

            if (!processors) {
                continue;
            }

            for (const processorId of Object.keys(processors)) {
                if (processorId.startsWith(".")) {
                    yield* this._normalizeObjectConfigData(
                        {
                            files: [`*${processorId}`],
                            processor: `${pluginId}/${processorId}`
                        },
                        {
                            ...ctx,
                            type: "implicit-processor",
                            name: `${ctx.name}#processors["${pluginId}/${processorId}"]`
                        }
                    );
                }
            }
        }
    }
}

export {
    ConfigArrayFactory,
    createContext,
    loadConfigFile
};
