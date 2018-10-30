/**
 * @fileoverview Responsible for loading config files
 * @author Seth McLaughlin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path"),
    ConfigOps = require("./config/config-ops"),
    ConfigFile = require("./config/config-file"),
    Plugins = require("./config/plugins"),
    FileFinder = require("./file-finder"),
    userHome = require("user-home"),
    isResolvable = require("is-resolvable"),
    pathIsInside = require("path-is-inside");

const debug = require("debug")("eslint:config");

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const PERSONAL_CONFIG_DIR = userHome || null;

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Check if item is an javascript object
 * @param {*} item object to check for
 * @returns {boolean} True if its an object
 * @private
 */
function isObject(item) {
    return typeof item === "object" && !Array.isArray(item) && item !== null;
}

/**
 * Load and parse a JSON config object from a file.
 * @param {string|Object} configToLoad the path to the JSON config file or the config object itself.
 * @returns {Object} the parsed config object (empty object if there was a parse error)
 * @private
 */
function loadConfig(configToLoad) {
    let config = {},
        filePath = "";

    if (configToLoad) {

        if (isObject(configToLoad)) {
            config = configToLoad;

            if (config.extends) {
                config = ConfigFile.applyExtends(config, filePath);
            }
        } else {
            filePath = configToLoad;
            config = ConfigFile.load(filePath);
        }

    }

    return config;
}

/**
 * Get personal config object from ~/.eslintrc.
 * @returns {Object} the personal config object (null if there is no personal config)
 * @private
 */
function getPersonalConfig() {
    let config;

    if (PERSONAL_CONFIG_DIR) {
        const filename = ConfigFile.getFilenameForDirectory(PERSONAL_CONFIG_DIR);

        if (filename) {
            debug("Using personal config");
            config = loadConfig(filename);
        }
    }

    return config || null;
}

/**
 * Determine if rules were explicitly passed in as options.
 * @param {Object} options The options used to create our configuration.
 * @returns {boolean} True if rules were passed in as options, false otherwise.
 */
function hasRules(options) {
    return options.rules && Object.keys(options.rules).length > 0;
}

/**
 * Get a local config object.
 * @param {Object} thisConfig A Config object.
 * @param {string} directory The directory to start looking in for a local config file.
 * @returns {Object} The local config object, or an empty object if there is no local config.
 */
function getLocalConfig(thisConfig, directory) {
    const localConfigFiles = thisConfig.findLocalConfigFiles(directory),
        numFiles = localConfigFiles.length,
        projectConfigPath = ConfigFile.getFilenameForDirectory(thisConfig.options.cwd);
    let found,
        config = {},
        rootPath;

    for (let i = 0; i < numFiles; i++) {

        const localConfigFile = localConfigFiles[i];

        // Don't consider the personal config file in the home directory,
        // except if the home directory is the same as the current working directory
        if (path.dirname(localConfigFile) === PERSONAL_CONFIG_DIR && localConfigFile !== projectConfigPath) {
            continue;
        }

        // If root flag is set, don't consider file if it is above root
        if (rootPath && !pathIsInside(path.dirname(localConfigFile), rootPath)) {
            continue;
        }

        debug(`Loading ${localConfigFile}`);
        const localConfig = loadConfig(localConfigFile);

        // Don't consider a local config file found if the config is null
        if (!localConfig) {
            continue;
        }

        // Check for root flag
        if (localConfig.root === true) {
            rootPath = path.dirname(localConfigFile);
        }

        found = true;
        debug(`Using ${localConfigFile}`);
        config = ConfigOps.merge(localConfig, config);
    }

    if (!found && !thisConfig.useSpecificConfig) {

        /*
         * - Is there a personal config in the user's home directory? If so,
         *   merge that with the passed-in config.
         * - Otherwise, if no rules were manually passed in, throw and error.
         * - Note: This function is not called if useEslintrc is false.
         */
        const personalConfig = getPersonalConfig();

        if (personalConfig) {
            config = ConfigOps.merge(config, personalConfig);
        } else if (!hasRules(thisConfig.options) && !thisConfig.options.baseConfig) {

            // No config file, no manual configuration, and no rules, so error.
            const noConfigError = new Error("No ESLint configuration found.");

            noConfigError.messageTemplate = "no-config-found";
            noConfigError.messageData = {
                directory,
                filesExamined: localConfigFiles
            };

            throw noConfigError;
        }
    }

    return config;
}

//------------------------------------------------------------------------------
// API
//------------------------------------------------------------------------------

/**
 * Configuration class
 */
class Config {

    /**
     * Config options
     * @param {Object} options Options to be passed in
     */
    constructor(options) {
        options = options || {};

        this.ignore = options.ignore;
        this.ignorePath = options.ignorePath;
        this.cache = {};
        this.parser = options.parser;
        this.parserOptions = options.parserOptions || {};

        this.baseConfig = options.baseConfig ? loadConfig(options.baseConfig) : { rules: {} };

        this.useEslintrc = (options.useEslintrc !== false);

        this.env = (options.envs || []).reduce((envs, name) => {
            envs[ name ] = true;
            return envs;
        }, {});

        /*
         * Handle declared globals.
         * For global variable foo, handle "foo:false" and "foo:true" to set
         * whether global is writable.
         * If user declares "foo", convert to "foo:false".
         */
        this.globals = (options.globals || []).reduce((globals, def) => {
            const parts = def.split(":");

            globals[parts[0]] = (parts.length > 1 && parts[1] === "true");

            return globals;
        }, {});

        const useConfig = options.configFile;

        this.options = options;

        if (useConfig) {
            debug(`Using command line config ${useConfig}`);
            if (isResolvable(useConfig) || isResolvable(`eslint-config-${useConfig}`) || useConfig.charAt(0) === "@") {
                this.useSpecificConfig = loadConfig(useConfig);
            } else {
                this.useSpecificConfig = loadConfig(path.resolve(this.options.cwd, useConfig));
            }
        }
    }

    /**
     * Build a config object merging the base config (conf/eslint-recommended),
     * the environments config (conf/environments.js) and eventually the user
     * config.
     * @param {string} filePath a file in whose directory we start looking for a local config
     * @returns {Object} config object
     */
    getConfig(filePath) {
        const directory = filePath ? path.dirname(filePath) : this.options.cwd;
        let config,
            userConfig;

        debug(`Constructing config for ${filePath ? filePath : "text"}`);

        config = this.cache[directory];

        if (config) {
            debug("Using config from cache");
            return config;
        }

        // Step 1: Determine user-specified config from .eslintrc.* and package.json files
        if (this.useEslintrc) {
            debug("Using .eslintrc and package.json files");
            userConfig = getLocalConfig(this, directory);
        } else {
            debug("Not using .eslintrc or package.json files");
            userConfig = {};
        }

        // Step 2: Create a copy of the baseConfig
        config = ConfigOps.merge({}, this.baseConfig);

        // Step 3: Merge in the user-specified configuration from .eslintrc and package.json
        config = ConfigOps.merge(config, userConfig);

        // Step 4: Merge in command line config file
        if (this.useSpecificConfig) {
            debug("Merging command line config file");

            config = ConfigOps.merge(config, this.useSpecificConfig);
        }

        // Step 5: Merge in command line environments
        debug("Merging command line environment settings");
        config = ConfigOps.merge(config, { env: this.env });

        // Step 6: Merge in command line rules
        if (this.options.rules) {
            debug("Merging command line rules");
            config = ConfigOps.merge(config, { rules: this.options.rules });
        }

        // Step 7: Merge in command line globals
        config = ConfigOps.merge(config, { globals: this.globals });

        // Only override parser if it is passed explicitly through the command line or if it's not
        // defined yet (because the final object will at least have the parser key)
        if (this.parser || !config.parser) {
            config = ConfigOps.merge(config, {
                parser: this.parser
            });
        }

        if (this.parserOptions) {
            config = ConfigOps.merge(config, {
                parserOptions: this.parserOptions
            });
        }

        // Step 8: Merge in command line plugins
        if (this.options.plugins) {
            debug("Merging command line plugins");
            Plugins.loadAll(this.options.plugins);
            config = ConfigOps.merge(config, { plugins: this.options.plugins });
        }

        // Step 9: Apply environments to the config if present
        if (config.env) {
            config = ConfigOps.applyEnvironments(config);
        }

        this.cache[directory] = config;

        return config;
    }

    /**
     * Find local config files from directory and parent directories.
     * @param {string} directory The directory to start searching from.
     * @returns {string[]} The paths of local config files found.
     */
    findLocalConfigFiles(directory) {

        if (!this.localConfigFinder) {
            this.localConfigFinder = new FileFinder(ConfigFile.CONFIG_FILES, this.options.cwd);
        }

        return this.localConfigFinder.findAllInDirectoryAndParents(directory);
    }
}

module.exports = Config;
