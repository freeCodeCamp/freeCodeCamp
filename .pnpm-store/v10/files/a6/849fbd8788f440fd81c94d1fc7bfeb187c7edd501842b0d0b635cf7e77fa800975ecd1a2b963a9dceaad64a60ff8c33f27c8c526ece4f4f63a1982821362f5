/**
 * @fileoverview Flat Config Array
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const { ConfigArray, ConfigArraySymbol } = require("@humanwhocodes/config-array");
const { flatConfigSchema } = require("./flat-config-schema");
const { RuleValidator } = require("./rule-validator");
const { defaultConfig } = require("./default-config");
const recommendedConfig = require("../../conf/eslint-recommended");
const allConfig = require("../../conf/eslint-all");

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const ruleValidator = new RuleValidator();

/**
 * Splits a plugin identifier in the form a/b/c into two parts: a/b and c.
 * @param {string} identifier The identifier to parse.
 * @returns {{objectName: string, pluginName: string}} The parts of the plugin
 *      name.
 */
function splitPluginIdentifier(identifier) {
    const parts = identifier.split("/");

    return {
        objectName: parts.pop(),
        pluginName: parts.join("/")
    };
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Represents an array containing configuration information for ESLint.
 */
class FlatConfigArray extends ConfigArray {

    /**
     * Creates a new instance.
     * @param {*[]} configs An array of configuration information.
     * @param {{basePath: string, baseConfig: FlatConfig}} options The options
     *      to use for the config array instance.
     */
    constructor(configs, { basePath, baseConfig = defaultConfig }) {
        super(configs, {
            basePath,
            schema: flatConfigSchema
        });

        this.unshift(baseConfig);
    }

    /* eslint-disable class-methods-use-this */
    /**
     * Replaces a config with another config to allow us to put strings
     * in the config array that will be replaced by objects before
     * normalization.
     * @param {Object} config The config to preprocess.
     * @returns {Object} The preprocessed config.
     */
    [ConfigArraySymbol.preprocessConfig](config) {
        if (config === "eslint:recommended") {
            return recommendedConfig;
        }

        if (config === "eslint:all") {
            return allConfig;
        }

        return config;
    }

    /**
     * Finalizes the config by replacing plugin references with their objects
     * and validating rule option schemas.
     * @param {Object} config The config to finalize.
     * @returns {Object} The finalized config.
     * @throws {TypeError} If the config is invalid.
     */
    [ConfigArraySymbol.finalizeConfig](config) {

        const { plugins, languageOptions, processor } = config;

        // Check parser value
        if (languageOptions && languageOptions.parser && typeof languageOptions.parser === "string") {
            const { pluginName, objectName: parserName } = splitPluginIdentifier(languageOptions.parser);

            if (!plugins || !plugins[pluginName] || !plugins[pluginName].parsers || !plugins[pluginName].parsers[parserName]) {
                throw new TypeError(`Key "parser": Could not find "${parserName}" in plugin "${pluginName}".`);
            }

            languageOptions.parser = plugins[pluginName].parsers[parserName];
        }

        // Check processor value
        if (processor && typeof processor === "string") {
            const { pluginName, objectName: processorName } = splitPluginIdentifier(processor);

            if (!plugins || !plugins[pluginName] || !plugins[pluginName].processors || !plugins[pluginName].processors[processorName]) {
                throw new TypeError(`Key "processor": Could not find "${processorName}" in plugin "${pluginName}".`);
            }

            config.processor = plugins[pluginName].processors[processorName];
        }

        ruleValidator.validate(config);

        return config;
    }
    /* eslint-enable class-methods-use-this */

}

exports.FlatConfigArray = FlatConfigArray;
