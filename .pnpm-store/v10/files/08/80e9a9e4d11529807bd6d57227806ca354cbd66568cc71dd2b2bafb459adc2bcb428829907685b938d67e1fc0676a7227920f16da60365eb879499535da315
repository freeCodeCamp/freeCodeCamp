/**
 * @fileoverview Validates configs.
 * @author Brandon Mills
 */

"use strict";

/* eslint class-methods-use-this: "off" */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const
    util = require("util"),
    configSchema = require("../../conf/config-schema"),
    BuiltInEnvironments = require("../../conf/environments"),
    ConfigOps = require("./config-ops"),
    { emitDeprecationWarning } = require("./deprecation-warnings");

const ajv = require("./ajv")();
const ruleValidators = new WeakMap();
const noop = Function.prototype;

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------
let validateSchema;
const severityMap = {
    error: 2,
    warn: 1,
    off: 0
};

const validated = new WeakSet();

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

module.exports = class ConfigValidator {
    constructor({ builtInRules = new Map() } = {}) {
        this.builtInRules = builtInRules;
    }

    /**
     * Gets a complete options schema for a rule.
     * @param {{create: Function, schema: (Array|null)}} rule A new-style rule object
     * @returns {Object} JSON Schema for the rule's options.
     */
    getRuleOptionsSchema(rule) {
        if (!rule) {
            return null;
        }

        const schema = rule.schema || rule.meta && rule.meta.schema;

        // Given a tuple of schemas, insert warning level at the beginning
        if (Array.isArray(schema)) {
            if (schema.length) {
                return {
                    type: "array",
                    items: schema,
                    minItems: 0,
                    maxItems: schema.length
                };
            }
            return {
                type: "array",
                minItems: 0,
                maxItems: 0
            };

        }

        // Given a full schema, leave it alone
        return schema || null;
    }

    /**
     * Validates a rule's severity and returns the severity value. Throws an error if the severity is invalid.
     * @param {options} options The given options for the rule.
     * @returns {number|string} The rule's severity value
     */
    validateRuleSeverity(options) {
        const severity = Array.isArray(options) ? options[0] : options;
        const normSeverity = typeof severity === "string" ? severityMap[severity.toLowerCase()] : severity;

        if (normSeverity === 0 || normSeverity === 1 || normSeverity === 2) {
            return normSeverity;
        }

        throw new Error(`\tSeverity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '${util.inspect(severity).replace(/'/gu, "\"").replace(/\n/gu, "")}').\n`);

    }

    /**
     * Validates the non-severity options passed to a rule, based on its schema.
     * @param {{create: Function}} rule The rule to validate
     * @param {Array} localOptions The options for the rule, excluding severity
     * @returns {void}
     */
    validateRuleSchema(rule, localOptions) {
        if (!ruleValidators.has(rule)) {
            const schema = this.getRuleOptionsSchema(rule);

            if (schema) {
                ruleValidators.set(rule, ajv.compile(schema));
            }
        }

        const validateRule = ruleValidators.get(rule);

        if (validateRule) {
            validateRule(localOptions);
            if (validateRule.errors) {
                throw new Error(validateRule.errors.map(
                    error => `\tValue ${JSON.stringify(error.data)} ${error.message}.\n`
                ).join(""));
            }
        }
    }

    /**
     * Validates a rule's options against its schema.
     * @param {{create: Function}|null} rule The rule that the config is being validated for
     * @param {string} ruleId The rule's unique name.
     * @param {Array|number} options The given options for the rule.
     * @param {string|null} source The name of the configuration source to report in any errors. If null or undefined,
     * no source is prepended to the message.
     * @returns {void}
     */
    validateRuleOptions(rule, ruleId, options, source = null) {
        try {
            const severity = this.validateRuleSeverity(options);

            if (severity !== 0) {
                this.validateRuleSchema(rule, Array.isArray(options) ? options.slice(1) : []);
            }
        } catch (err) {
            const enhancedMessage = `Configuration for rule "${ruleId}" is invalid:\n${err.message}`;

            if (typeof source === "string") {
                throw new Error(`${source}:\n\t${enhancedMessage}`);
            } else {
                throw new Error(enhancedMessage);
            }
        }
    }

    /**
     * Validates an environment object
     * @param {Object} environment The environment config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {function(envId:string): Object} [getAdditionalEnv] A map from strings to loaded environments.
     * @returns {void}
     */
    validateEnvironment(
        environment,
        source,
        getAdditionalEnv = noop
    ) {

        // not having an environment is ok
        if (!environment) {
            return;
        }

        Object.keys(environment).forEach(id => {
            const env = getAdditionalEnv(id) || BuiltInEnvironments.get(id) || null;

            if (!env) {
                const message = `${source}:\n\tEnvironment key "${id}" is unknown\n`;

                throw new Error(message);
            }
        });
    }

    /**
     * Validates a rules config object
     * @param {Object} rulesConfig The rules config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {function(ruleId:string): Object} getAdditionalRule A map from strings to loaded rules
     * @returns {void}
     */
    validateRules(
        rulesConfig,
        source,
        getAdditionalRule = noop
    ) {
        if (!rulesConfig) {
            return;
        }

        Object.keys(rulesConfig).forEach(id => {
            const rule = getAdditionalRule(id) || this.builtInRules.get(id) || null;

            this.validateRuleOptions(rule, id, rulesConfig[id], source);
        });
    }

    /**
     * Validates a `globals` section of a config file
     * @param {Object} globalsConfig The `globals` section
     * @param {string|null} source The name of the configuration source to report in the event of an error.
     * @returns {void}
     */
    validateGlobals(globalsConfig, source = null) {
        if (!globalsConfig) {
            return;
        }

        Object.entries(globalsConfig)
            .forEach(([configuredGlobal, configuredValue]) => {
                try {
                    ConfigOps.normalizeConfigGlobal(configuredValue);
                } catch (err) {
                    throw new Error(`ESLint configuration of global '${configuredGlobal}' in ${source} is invalid:\n${err.message}`);
                }
            });
    }

    /**
     * Validate `processor` configuration.
     * @param {string|undefined} processorName The processor name.
     * @param {string} source The name of config file.
     * @param {function(id:string): Processor} getProcessor The getter of defined processors.
     * @returns {void}
     */
    validateProcessor(processorName, source, getProcessor) {
        if (processorName && !getProcessor(processorName)) {
            throw new Error(`ESLint configuration of processor in '${source}' is invalid: '${processorName}' was not found.`);
        }
    }

    /**
     * Formats an array of schema validation errors.
     * @param {Array} errors An array of error messages to format.
     * @returns {string} Formatted error message
     */
    formatErrors(errors) {
        return errors.map(error => {
            if (error.keyword === "additionalProperties") {
                const formattedPropertyPath = error.dataPath.length ? `${error.dataPath.slice(1)}.${error.params.additionalProperty}` : error.params.additionalProperty;

                return `Unexpected top-level property "${formattedPropertyPath}"`;
            }
            if (error.keyword === "type") {
                const formattedField = error.dataPath.slice(1);
                const formattedExpectedType = Array.isArray(error.schema) ? error.schema.join("/") : error.schema;
                const formattedValue = JSON.stringify(error.data);

                return `Property "${formattedField}" is the wrong type (expected ${formattedExpectedType} but got \`${formattedValue}\`)`;
            }

            const field = error.dataPath[0] === "." ? error.dataPath.slice(1) : error.dataPath;

            return `"${field}" ${error.message}. Value: ${JSON.stringify(error.data)}`;
        }).map(message => `\t- ${message}.\n`).join("");
    }

    /**
     * Validates the top level properties of the config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @returns {void}
     */
    validateConfigSchema(config, source = null) {
        validateSchema = validateSchema || ajv.compile(configSchema);

        if (!validateSchema(config)) {
            throw new Error(`ESLint configuration in ${source} is invalid:\n${this.formatErrors(validateSchema.errors)}`);
        }

        if (Object.hasOwnProperty.call(config, "ecmaFeatures")) {
            emitDeprecationWarning(source, "ESLINT_LEGACY_ECMAFEATURES");
        }
    }

    /**
     * Validates an entire config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {function(ruleId:string): Object} [getAdditionalRule] A map from strings to loaded rules.
     * @param {function(envId:string): Object} [getAdditionalEnv] A map from strings to loaded envs.
     * @returns {void}
     */
    validate(config, source, getAdditionalRule, getAdditionalEnv) {
        this.validateConfigSchema(config, source);
        this.validateRules(config.rules, source, getAdditionalRule);
        this.validateEnvironment(config.env, source, getAdditionalEnv);
        this.validateGlobals(config.globals, source);

        for (const override of config.overrides || []) {
            this.validateRules(override.rules, source, getAdditionalRule);
            this.validateEnvironment(override.env, source, getAdditionalEnv);
            this.validateGlobals(config.globals, source);
        }
    }

    /**
     * Validate config array object.
     * @param {ConfigArray} configArray The config array to validate.
     * @returns {void}
     */
    validateConfigArray(configArray) {
        const getPluginEnv = Map.prototype.get.bind(configArray.pluginEnvironments);
        const getPluginProcessor = Map.prototype.get.bind(configArray.pluginProcessors);
        const getPluginRule = Map.prototype.get.bind(configArray.pluginRules);

        // Validate.
        for (const element of configArray) {
            if (validated.has(element)) {
                continue;
            }
            validated.add(element);

            this.validateEnvironment(element.env, element.name, getPluginEnv);
            this.validateGlobals(element.globals, element.name);
            this.validateProcessor(element.processor, element.name, getPluginProcessor);
            this.validateRules(element.rules, element.name, getPluginRule);
        }
    }

};
