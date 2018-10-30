/**
 * @fileoverview Validates configs.
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rules = require("../rules"),
    Environments = require("./environments"),
    schemaValidator = require("is-my-json-valid"),
    util = require("util");

const validators = {
    rules: Object.create(null)
};

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Gets a complete options schema for a rule.
 * @param {string} id The rule's unique name.
 * @returns {Object} JSON Schema for the rule's options.
 */
function getRuleOptionsSchema(id) {
    const rule = rules.get(id),
        schema = rule && rule.schema || rule && rule.meta && rule.meta.schema;

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
function validateRuleSeverity(options) {
    const severity = Array.isArray(options) ? options[0] : options;

    if (severity !== 0 && severity !== 1 && severity !== 2 && !(typeof severity === "string" && /^(?:off|warn|error)$/i.test(severity))) {
        throw new Error(`\tSeverity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '${util.inspect(severity).replace(/'/g, "\"").replace(/\n/g, "")}').\n`);
    }

    return severity;
}

/**
* Validates the non-severity options passed to a rule, based on its schema.
* @param {string} id The rule's unique name
* @param {array} localOptions The options for the rule, excluding severity
* @returns {void}
*/
function validateRuleSchema(id, localOptions) {
    const schema = getRuleOptionsSchema(id);

    if (!validators.rules[id] && schema) {
        validators.rules[id] = schemaValidator(schema, { verbose: true });
    }

    const validateRule = validators.rules[id];

    if (validateRule) {
        validateRule(localOptions);
        if (validateRule.errors) {
            throw new Error(validateRule.errors.map(error => `\tValue "${error.value}" ${error.message}.\n`).join(""));
        }
    }
}

/**
 * Validates a rule's options against its schema.
 * @param {string} id The rule's unique name.
 * @param {array|number} options The given options for the rule.
 * @param {string} source The name of the configuration source.
 * @returns {void}
 */
function validateRuleOptions(id, options, source) {
    try {
        const severity = validateRuleSeverity(options);

        if (severity !== 0 && !(typeof severity === "string" && severity.toLowerCase() === "off")) {
            validateRuleSchema(id, Array.isArray(options) ? options.slice(1) : []);
        }
    } catch (err) {
        throw new Error(`${source}:\n\tConfiguration for rule "${id}" is invalid:\n${err.message}`);
    }
}

/**
 * Validates an environment object
 * @param {Object} environment The environment config object to validate.
 * @param {string} source The location to report with any errors.
 * @returns {void}
 */
function validateEnvironment(environment, source) {

    // not having an environment is ok
    if (!environment) {
        return;
    }

    if (Array.isArray(environment)) {
        throw new Error("Environment must not be an array");
    }

    if (typeof environment === "object") {
        Object.keys(environment).forEach(env => {
            if (!Environments.get(env)) {
                const message = [
                    source, ":\n",
                    "\tEnvironment key \"", env, "\" is unknown\n"
                ];

                throw new Error(message.join(""));
            }
        });
    } else {
        throw new Error("Environment must be an object");
    }
}

/**
 * Validates an entire config object.
 * @param {Object} config The config object to validate.
 * @param {string} source The location to report with any errors.
 * @returns {void}
 */
function validate(config, source) {

    if (typeof config.rules === "object") {
        Object.keys(config.rules).forEach(id => {
            validateRuleOptions(id, config.rules[id], source);
        });
    }

    validateEnvironment(config.env, source);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    getRuleOptionsSchema,
    validate,
    validateRuleOptions
};
