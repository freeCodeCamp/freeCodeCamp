/**
 * @fileoverview Rule Validator
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const ajv = require("../shared/ajv")();

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * Finds a rule with the given ID in the given config.
 * @param {string} ruleId The ID of the rule to find.
 * @param {Object} config The config to search in.
 * @returns {{create: Function, schema: (Array|null)}} THe rule object.
 */
function findRuleDefinition(ruleId, config) {
    const ruleIdParts = ruleId.split("/");
    let pluginName, ruleName;

    // built-in rule
    if (ruleIdParts.length === 1) {
        pluginName = "@";
        ruleName = ruleIdParts[0];
    } else {
        ruleName = ruleIdParts.pop();
        pluginName = ruleIdParts.join("/");
    }

    if (!config.plugins || !config.plugins[pluginName]) {
        throw new TypeError(`Key "rules": Key "${ruleId}": Could not find plugin "${pluginName}".`);
    }

    if (!config.plugins[pluginName].rules || !config.plugins[pluginName].rules[ruleName]) {
        throw new TypeError(`Key "rules": Key "${ruleId}": Could not find "${ruleName}" in plugin "${pluginName}".`);
    }

    return config.plugins[pluginName].rules[ruleName];

}

/**
 * Gets a complete options schema for a rule.
 * @param {{create: Function, schema: (Array|null)}} rule A new-style rule object
 * @returns {Object} JSON Schema for the rule's options.
 */
function getRuleOptionsSchema(rule) {

    if (!rule) {
        return null;
    }

    const schema = rule.schema || rule.meta && rule.meta.schema;

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

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Implements validation functionality for the rules portion of a config.
 */
class RuleValidator {

    /**
     * Creates a new instance.
     */
    constructor() {

        /**
         * A collection of compiled validators for rules that have already
         * been validated.
         * @type {WeakMap}
         * @property validators
         */
        this.validators = new WeakMap();
    }

    /**
     * Validates all of the rule configurations in a config against each
     * rule's schema.
     * @param {Object} config The full config to validate. This object must
     *      contain both the rules section and the plugins section.
     * @returns {void}
     * @throws {Error} If a rule's configuration does not match its schema.
     */
    validate(config) {

        if (!config.rules) {
            return;
        }

        for (const [ruleId, ruleOptions] of Object.entries(config.rules)) {

            // check for edge case
            if (ruleId === "__proto__") {
                continue;
            }

            /*
             * If a rule is disabled, we don't do any validation. This allows
             * users to safely set any value to 0 or "off" without worrying
             * that it will cause a validation error.
             *
             * Note: ruleOptions is always an array at this point because
             * this validation occurs after FlatConfigArray has merged and
             * normalized values.
             */
            if (ruleOptions[0] === 0) {
                continue;
            }

            const rule = findRuleDefinition(ruleId, config);

            // Precompile and cache validator the first time
            if (!this.validators.has(rule)) {
                const schema = getRuleOptionsSchema(rule);

                if (schema) {
                    this.validators.set(rule, ajv.compile(schema));
                }
            }

            const validateRule = this.validators.get(rule);

            if (validateRule) {

                validateRule(ruleOptions.slice(1));

                if (validateRule.errors) {
                    throw new Error(`Key "rules": Key "${ruleId}": ${
                        validateRule.errors.map(
                            error => `\tValue ${JSON.stringify(error.data)} ${error.message}.\n`
                        ).join("")
                    }`);
                }
            }
        }
    }
}

exports.RuleValidator = RuleValidator;
