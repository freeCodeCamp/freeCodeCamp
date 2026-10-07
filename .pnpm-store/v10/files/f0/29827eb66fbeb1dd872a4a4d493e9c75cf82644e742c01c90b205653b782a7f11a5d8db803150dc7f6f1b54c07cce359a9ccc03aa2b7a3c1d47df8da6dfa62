/**
 * @fileoverview Validate strings passed to the RegExp constructor
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RegExpValidator = require("regexpp").RegExpValidator;
const validator = new RegExpValidator();
const validFlags = /[gimuys]/gu;
const undefined1 = void 0;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow invalid regular expression strings in `RegExp` constructors",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-invalid-regexp"
        },

        schema: [{
            type: "object",
            properties: {
                allowConstructorFlags: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            },
            additionalProperties: false
        }],

        messages: {
            regexMessage: "{{message}}."
        }
    },

    create(context) {

        const options = context.options[0];
        let allowedFlags = null;

        if (options && options.allowConstructorFlags) {
            const temp = options.allowConstructorFlags.join("").replace(validFlags, "");

            if (temp) {
                allowedFlags = new RegExp(`[${temp}]`, "giu");
            }
        }

        /**
         * Check if node is a string
         * @param {ASTNode} node node to evaluate
         * @returns {boolean} True if its a string
         * @private
         */
        function isString(node) {
            return node && node.type === "Literal" && typeof node.value === "string";
        }

        /**
         * Gets flags of a regular expression created by the given `RegExp()` or `new RegExp()` call
         * Examples:
         *     new RegExp(".")         // => ""
         *     new RegExp(".", "gu")   // => "gu"
         *     new RegExp(".", flags)  // => null
         * @param {ASTNode} node `CallExpression` or `NewExpression` node
         * @returns {string|null} flags if they can be determined, `null` otherwise
         * @private
         */
        function getFlags(node) {
            if (node.arguments.length < 2) {
                return "";
            }

            if (isString(node.arguments[1])) {
                return node.arguments[1].value;
            }

            return null;
        }

        /**
         * Check syntax error in a given pattern.
         * @param {string} pattern The RegExp pattern to validate.
         * @param {boolean} uFlag The Unicode flag.
         * @returns {string|null} The syntax error.
         */
        function validateRegExpPattern(pattern, uFlag) {
            try {
                validator.validatePattern(pattern, undefined1, undefined1, uFlag);
                return null;
            } catch (err) {
                return err.message;
            }
        }

        /**
         * Check syntax error in a given flags.
         * @param {string} flags The RegExp flags to validate.
         * @returns {string|null} The syntax error.
         */
        function validateRegExpFlags(flags) {
            try {
                validator.validateFlags(flags);
                return null;
            } catch {
                return `Invalid flags supplied to RegExp constructor '${flags}'`;
            }
        }

        return {
            "CallExpression, NewExpression"(node) {
                if (node.callee.type !== "Identifier" || node.callee.name !== "RegExp" || !isString(node.arguments[0])) {
                    return;
                }
                const pattern = node.arguments[0].value;
                let flags = getFlags(node);

                if (flags && allowedFlags) {
                    flags = flags.replace(allowedFlags, "");
                }

                const message =
                    (
                        flags && validateRegExpFlags(flags)
                    ) ||
                    (

                        // If flags are unknown, report the regex only if its pattern is invalid both with and without the "u" flag
                        flags === null
                            ? validateRegExpPattern(pattern, true) && validateRegExpPattern(pattern, false)
                            : validateRegExpPattern(pattern, flags.includes("u"))
                    );

                if (message) {
                    context.report({
                        node,
                        messageId: "regexMessage",
                        data: { message }
                    });
                }
            }
        };
    }
};
