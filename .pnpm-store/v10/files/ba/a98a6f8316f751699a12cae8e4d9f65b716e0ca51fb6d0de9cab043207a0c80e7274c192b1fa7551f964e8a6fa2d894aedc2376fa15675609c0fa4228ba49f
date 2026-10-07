/**
 * @fileoverview Validates configs.
 * @author Brandon Mills
 */

/* eslint class-methods-use-this: "off" -- not needed in this file */

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/** @typedef {import("../shared/types").Rule} Rule */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import util from "node:util";
import * as ConfigOps from "./config-ops.js";
import { emitDeprecationWarning } from "./deprecation-warnings.js";
import ajvOrig from "./ajv.js";
import { deepMergeArrays } from "./deep-merge-arrays.js";
import configSchema from "../../conf/config-schema.js";
import BuiltInEnvironments from "../../conf/environments.js";

const ajv = ajvOrig();

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

// JSON schema that disallows passing any options
const noOptionsSchema = Object.freeze({
    type: "array",
    minItems: 0,
    maxItems: 0
});

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Validator for configuration objects.
 */
export default class ConfigValidator {
    constructor({ builtInRules = new Map() } = {}) {
        this.builtInRules = builtInRules;
    }

    /**
     * Gets a complete options schema for a rule.
     * @param {Rule} rule A rule object
     * @throws {TypeError} If `meta.schema` is specified but is not an array, object or `false`.
     * @returns {Object|null} JSON Schema for the rule's options.
     *      `null` if rule wasn't passed or its `meta.schema` is `false`.
     */
    getRuleOptionsSchema(rule) {
        if (!rule) {
            return null;
        }

        if (!rule.meta) {
            return { ...noOptionsSchema }; // default if `meta.schema` is not specified
        }

        const schema = rule.meta.schema;

        if (typeof schema === "undefined") {
            return { ...noOptionsSchema }; // default if `meta.schema` is not specified
        }

        // `schema:false` is an allowed explicit opt-out of options validation for the rule
        if (schema === false) {
            return null;
        }

        if (typeof schema !== "object" || schema === null) {
            throw new TypeError("Rule's `meta.schema` must be an array or object");
        }

        // ESLint-specific array form needs to be converted into a valid JSON Schema definition
        if (Array.isArray(schema)) {
            if (schema.length) {
                return {
                    type: "array",
                    items: schema,
                    minItems: 0,
                    maxItems: schema.length
                };
            }

            // `schema:[]` is an explicit way to specify that the rule does not accept any options
            return { ...noOptionsSchema };
        }

        // `schema:<object>` is assumed to be a valid JSON Schema definition
        return schema;
    }

    /**
     * Validates a rule's severity and returns the severity value. Throws an error if the severity is invalid.
     * @param {options} options The given options for the rule.
     * @returns {number|string} The rule's severity value
     * @throws {Error} If the severity is invalid.
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
     * @throws {Error} If the options are invalid.
     */
    validateRuleSchema(rule, localOptions) {
        if (!ruleValidators.has(rule)) {
            try {
                const schema = this.getRuleOptionsSchema(rule);

                if (schema) {
                    ruleValidators.set(rule, ajv.compile(schema));
                }
            } catch (err) {
                const errorWithCode = new Error(err.message, { cause: err });

                errorWithCode.code = "ESLINT_INVALID_RULE_OPTIONS_SCHEMA";

                throw errorWithCode;
            }
        }

        const validateRule = ruleValidators.get(rule);

        if (validateRule) {
            const mergedOptions = deepMergeArrays(rule.meta?.defaultOptions, localOptions);

            validateRule(mergedOptions);

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
     * @throws {Error} If the options are invalid.
     */
    validateRuleOptions(rule, ruleId, options, source = null) {
        try {
            const severity = this.validateRuleSeverity(options);

            if (severity !== 0) {
                this.validateRuleSchema(rule, Array.isArray(options) ? options.slice(1) : []);
            }
        } catch (err) {
            let enhancedMessage = err.code === "ESLINT_INVALID_RULE_OPTIONS_SCHEMA"
                ? `Error while processing options validation schema of rule '${ruleId}': ${err.message}`
                : `Configuration for rule "${ruleId}" is invalid:\n${err.message}`;

            if (typeof source === "string") {
                enhancedMessage = `${source}:\n\t${enhancedMessage}`;
            }

            const enhancedError = new Error(enhancedMessage, { cause: err });

            if (err.code) {
                enhancedError.code = err.code;
            }

            throw enhancedError;
        }
    }

    /**
     * Validates an environment object
     * @param {Object} environment The environment config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(envId:string) => Object} [getAdditionalEnv] A map from strings to loaded environments.
     * @returns {void}
     * @throws {Error} If the environment is invalid.
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
     * @param {(ruleId:string) => Object} getAdditionalRule A map from strings to loaded rules
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
     * @param {(id:string) => Processor} getProcessor The getter of defined processors.
     * @returns {void}
     * @throws {Error} If the processor is invalid.
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
     * @throws {Error} If the config is invalid.
     */
    validateConfigSchema(config, source = null) {
        validateSchema = validateSchema || ajv.compile(configSchema);

        if (!validateSchema(config)) {
            throw new Error(`ESLint configuration in ${source} is invalid:\n${this.formatErrors(validateSchema.errors)}`);
        }

        if (Object.hasOwn(config, "ecmaFeatures")) {
            emitDeprecationWarning(source, "ESLINT_LEGACY_ECMAFEATURES");
        }
    }

    /**
     * Validates an entire config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(ruleId:string) => Object} [getAdditionalRule] A map from strings to loaded rules.
     * @param {(envId:string) => Object} [getAdditionalEnv] A map from strings to loaded envs.
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

}
