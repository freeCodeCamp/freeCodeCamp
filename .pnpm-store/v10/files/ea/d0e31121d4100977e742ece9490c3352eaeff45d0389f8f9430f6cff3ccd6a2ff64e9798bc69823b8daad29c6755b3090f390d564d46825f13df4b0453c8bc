/**
 * @fileoverview Compatibility class for flat config.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

import createDebug from "debug";
import path from "node:path";

import environments from "../conf/environments.js";
import { ConfigArrayFactory } from "./config-array-factory.js";

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/** @typedef {import("../../shared/types").Environment} Environment */
/** @typedef {import("../../shared/types").Processor} Processor */

const debug = createDebug("eslintrc:flat-compat");
const cafactory = Symbol("cafactory");

/**
 * Translates an ESLintRC-style config object into a flag-config-style config
 * object.
 * @param {Object} eslintrcConfig An ESLintRC-style config object.
 * @param {Object} options Options to help translate the config.
 * @param {string} options.resolveConfigRelativeTo To the directory to resolve
 *      configs from.
 * @param {string} options.resolvePluginsRelativeTo The directory to resolve
 *      plugins from.
 * @param {ReadOnlyMap<string,Environment>} options.pluginEnvironments A map of plugin environment
 *      names to objects.
 * @param {ReadOnlyMap<string,Processor>} options.pluginProcessors A map of plugin processor
 *      names to objects.
 * @returns {Object} A flag-config-style config object.
 * @throws {Error} If a plugin or environment cannot be resolved.
 */
function translateESLintRC(eslintrcConfig, {
    resolveConfigRelativeTo,
    resolvePluginsRelativeTo,
    pluginEnvironments,
    pluginProcessors
}) {

    const flatConfig = {};
    const configs = [];
    const languageOptions = {};
    const linterOptions = {};
    const keysToCopy = ["settings", "rules", "processor"];
    const languageOptionsKeysToCopy = ["globals", "parser", "parserOptions"];
    const linterOptionsKeysToCopy = ["noInlineConfig", "reportUnusedDisableDirectives"];

    // copy over simple translations
    for (const key of keysToCopy) {
        if (key in eslintrcConfig && typeof eslintrcConfig[key] !== "undefined") {
            flatConfig[key] = eslintrcConfig[key];
        }
    }

    // copy over languageOptions
    for (const key of languageOptionsKeysToCopy) {
        if (key in eslintrcConfig && typeof eslintrcConfig[key] !== "undefined") {

            // create the languageOptions key in the flat config
            flatConfig.languageOptions = languageOptions;

            if (key === "parser") {
                debug(`Resolving parser '${languageOptions[key]}' relative to ${resolveConfigRelativeTo}`);

                if (eslintrcConfig[key].error) {
                    throw eslintrcConfig[key].error;
                }

                languageOptions[key] = eslintrcConfig[key].definition;
                continue;
            }

            // clone any object values that are in the eslintrc config
            if (eslintrcConfig[key] && typeof eslintrcConfig[key] === "object") {
                languageOptions[key] = {
                    ...eslintrcConfig[key]
                };
            } else {
                languageOptions[key] = eslintrcConfig[key];
            }
        }
    }

    // copy over linterOptions
    for (const key of linterOptionsKeysToCopy) {
        if (key in eslintrcConfig && typeof eslintrcConfig[key] !== "undefined") {
            flatConfig.linterOptions = linterOptions;
            linterOptions[key] = eslintrcConfig[key];
        }
    }

    // move ecmaVersion a level up
    if (languageOptions.parserOptions) {

        if ("ecmaVersion" in languageOptions.parserOptions) {
            languageOptions.ecmaVersion = languageOptions.parserOptions.ecmaVersion;
            delete languageOptions.parserOptions.ecmaVersion;
        }

        if ("sourceType" in languageOptions.parserOptions) {
            languageOptions.sourceType = languageOptions.parserOptions.sourceType;
            delete languageOptions.parserOptions.sourceType;
        }

        // check to see if we even need parserOptions anymore and remove it if not
        if (Object.keys(languageOptions.parserOptions).length === 0) {
            delete languageOptions.parserOptions;
        }
    }

    // overrides
    if (eslintrcConfig.criteria) {
        flatConfig.files = [absoluteFilePath => eslintrcConfig.criteria.test(absoluteFilePath)];
    }

    // translate plugins
    if (eslintrcConfig.plugins && typeof eslintrcConfig.plugins === "object") {
        debug(`Translating plugins: ${eslintrcConfig.plugins}`);

        flatConfig.plugins = {};

        for (const pluginName of Object.keys(eslintrcConfig.plugins)) {

            debug(`Translating plugin: ${pluginName}`);
            debug(`Resolving plugin '${pluginName} relative to ${resolvePluginsRelativeTo}`);

            const { original: plugin, error } = eslintrcConfig.plugins[pluginName];

            if (error) {
                throw error;
            }

            flatConfig.plugins[pluginName] = plugin;

            // create a config for any processors
            if (plugin.processors) {
                for (const processorName of Object.keys(plugin.processors)) {
                    if (processorName.startsWith(".")) {
                        debug(`Assigning processor: ${pluginName}/${processorName}`);

                        configs.unshift({
                            files: [`**/*${processorName}`],
                            processor: pluginProcessors.get(`${pluginName}/${processorName}`)
                        });
                    }

                }
            }
        }
    }

    // translate env - must come after plugins
    if (eslintrcConfig.env && typeof eslintrcConfig.env === "object") {
        for (const envName of Object.keys(eslintrcConfig.env)) {

            // only add environments that are true
            if (eslintrcConfig.env[envName]) {
                debug(`Translating environment: ${envName}`);

                if (environments.has(envName)) {

                    // built-in environments should be defined first
                    configs.unshift(...translateESLintRC({
                        criteria: eslintrcConfig.criteria,
                        ...environments.get(envName)
                    }, {
                        resolveConfigRelativeTo,
                        resolvePluginsRelativeTo
                    }));
                } else if (pluginEnvironments.has(envName)) {

                    // if the environment comes from a plugin, it should come after the plugin config
                    configs.push(...translateESLintRC({
                        criteria: eslintrcConfig.criteria,
                        ...pluginEnvironments.get(envName)
                    }, {
                        resolveConfigRelativeTo,
                        resolvePluginsRelativeTo
                    }));
                }
            }
        }
    }

    // only add if there are actually keys in the config
    if (Object.keys(flatConfig).length > 0) {
        configs.push(flatConfig);
    }

    return configs;
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * A compatibility class for working with configs.
 */
class FlatCompat {

    constructor({
        baseDirectory = process.cwd(),
        resolvePluginsRelativeTo = baseDirectory,
        recommendedConfig,
        allConfig
    } = {}) {
        this.baseDirectory = baseDirectory;
        this.resolvePluginsRelativeTo = resolvePluginsRelativeTo;
        this[cafactory] = new ConfigArrayFactory({
            cwd: baseDirectory,
            resolvePluginsRelativeTo,
            getEslintAllConfig() {

                if (!allConfig) {
                    throw new TypeError("Missing parameter 'allConfig' in FlatCompat constructor.");
                }

                // remove name property if it exists
                const config = { ...allConfig };

                delete config.name;

                return config;
            },
            getEslintRecommendedConfig() {

                if (!recommendedConfig) {
                    throw new TypeError("Missing parameter 'recommendedConfig' in FlatCompat constructor.");
                }

                // remove name property if it exists
                const config = { ...recommendedConfig };

                delete config.name;

                return config;
            }
        });
    }

    /**
     * Translates an ESLintRC-style config into a flag-config-style config.
     * @param {Object} eslintrcConfig The ESLintRC-style config object.
     * @returns {Object} A flag-config-style config object.
     */
    config(eslintrcConfig) {
        const eslintrcArray = this[cafactory].create(eslintrcConfig, {
            basePath: this.baseDirectory
        });

        const flatArray = [];
        let hasIgnorePatterns = false;

        eslintrcArray.forEach(configData => {
            if (configData.type === "config") {
                hasIgnorePatterns = hasIgnorePatterns || configData.ignorePattern;
                flatArray.push(...translateESLintRC(configData, {
                    resolveConfigRelativeTo: path.join(this.baseDirectory, "__placeholder.js"),
                    resolvePluginsRelativeTo: path.join(this.resolvePluginsRelativeTo, "__placeholder.js"),
                    pluginEnvironments: eslintrcArray.pluginEnvironments,
                    pluginProcessors: eslintrcArray.pluginProcessors
                }));
            }
        });

        // combine ignorePatterns to emulate ESLintRC behavior better
        if (hasIgnorePatterns) {
            flatArray.unshift({
                ignores: [filePath => {

                    // Compute the final config for this file.
                    // This filters config array elements by `files`/`excludedFiles` then merges the elements.
                    const finalConfig = eslintrcArray.extractConfig(filePath);

                    // Test the `ignorePattern` properties of the final config.
                    return Boolean(finalConfig.ignores) && finalConfig.ignores(filePath);
                }]
            });
        }

        return flatArray;
    }

    /**
     * Translates the `env` section of an ESLintRC-style config.
     * @param {Object} envConfig The `env` section of an ESLintRC config.
     * @returns {Object[]} An array of flag-config objects representing the environments.
     */
    env(envConfig) {
        return this.config({
            env: envConfig
        });
    }

    /**
     * Translates the `extends` section of an ESLintRC-style config.
     * @param {...string} configsToExtend The names of the configs to load.
     * @returns {Object[]} An array of flag-config objects representing the config.
     */
    extends(...configsToExtend) {
        return this.config({
            extends: configsToExtend
        });
    }

    /**
     * Translates the `plugins` section of an ESLintRC-style config.
     * @param {...string} plugins The names of the plugins to load.
     * @returns {Object[]} An array of flag-config objects representing the plugins.
     */
    plugins(...plugins) {
        return this.config({
            plugins
        });
    }
}

export { FlatCompat };
