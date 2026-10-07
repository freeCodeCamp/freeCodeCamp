/**
 * @fileoverview Config Comment Parser
 * @author Nicholas C. Zakas
 */

/* eslint-disable class-methods-use-this*/
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const levn = require("levn"),
    ConfigOps = require("@eslint/eslintrc/lib/shared/config-ops");

const debug = require("debug")("eslint:config-comment-parser");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Object to parse ESLint configuration comments inside JavaScript files.
 * @name ConfigCommentParser
 */
module.exports = class ConfigCommentParser {

    /**
     * Parses a list of "name:string_value" or/and "name" options divided by comma or
     * whitespace. Used for "global" and "exported" comments.
     * @param {string} string The string to parse.
     * @param {Comment} comment The comment node which has the string.
     * @returns {Object} Result map object of names and string values, or null values if no value was provided
     */
    parseStringConfig(string, comment) {
        debug("Parsing String config");

        const items = {};

        // Collapse whitespace around `:` and `,` to make parsing easier
        const trimmedString = string.replace(/\s*([:,])\s*/gu, "$1");

        trimmedString.split(/\s|,+/u).forEach(name => {
            if (!name) {
                return;
            }

            // value defaults to null (if not provided), e.g: "foo" => ["foo", null]
            const [key, value = null] = name.split(":");

            items[key] = { value, comment };
        });
        return items;
    }

    /**
     * Parses a JSON-like config.
     * @param {string} string The string to parse.
     * @param {Object} location Start line and column of comments for potential error message.
     * @returns {({success: true, config: Object}|{success: false, error: Problem})} Result map object
     */
    parseJsonConfig(string, location) {
        debug("Parsing JSON config");

        let items = {};

        // Parses a JSON-like comment by the same way as parsing CLI option.
        try {
            items = levn.parse("Object", string) || {};

            // Some tests say that it should ignore invalid comments such as `/*eslint no-alert:abc*/`.
            // Also, commaless notations have invalid severity:
            //     "no-alert: 2 no-console: 2" --> {"no-alert": "2 no-console: 2"}
            // Should ignore that case as well.
            if (ConfigOps.isEverySeverityValid(items)) {
                return {
                    success: true,
                    config: items
                };
            }
        } catch {

            debug("Levn parsing failed; falling back to manual parsing.");

            // ignore to parse the string by a fallback.
        }

        /*
         * Optionator cannot parse commaless notations.
         * But we are supporting that. So this is a fallback for that.
         */
        items = {};
        const normalizedString = string.replace(/([-a-zA-Z0-9/]+):/gu, "\"$1\":").replace(/(\]|[0-9])\s+(?=")/u, "$1,");

        try {
            items = JSON.parse(`{${normalizedString}}`);
        } catch (ex) {
            debug("Manual parsing failed.");

            return {
                success: false,
                error: {
                    ruleId: null,
                    fatal: true,
                    severity: 2,
                    message: `Failed to parse JSON from '${normalizedString}': ${ex.message}`,
                    line: location.start.line,
                    column: location.start.column + 1
                }
            };

        }

        return {
            success: true,
            config: items
        };
    }

    /**
     * Parses a config of values separated by comma.
     * @param {string} string The string to parse.
     * @returns {Object} Result map of values and true values
     */
    parseListConfig(string) {
        debug("Parsing list config");

        const items = {};

        // Collapse whitespace around commas
        string.replace(/\s*,\s*/gu, ",").split(/,+/u).forEach(name => {
            const trimmedName = name.trim();

            if (trimmedName) {
                items[trimmedName] = true;
            }
        });
        return items;
    }

};
