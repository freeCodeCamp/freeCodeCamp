/**
 * @fileoverview Restrict usage of specified node modules.
 * @author Christian Schulz
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const ignore = require("ignore");

const arrayOfStrings = {
    type: "array",
    items: { type: "string" },
    uniqueItems: true
};

const arrayOfStringsOrObjects = {
    type: "array",
    items: {
        anyOf: [
            { type: "string" },
            {
                type: "object",
                properties: {
                    name: { type: "string" },
                    message: {
                        type: "string",
                        minLength: 1
                    }
                },
                additionalProperties: false,
                required: ["name"]
            }
        ]
    },
    uniqueItems: true
};

module.exports = {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "disallow specified modules when loaded by `require`",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-restricted-modules"
        },

        schema: {
            anyOf: [
                arrayOfStringsOrObjects,
                {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            paths: arrayOfStringsOrObjects,
                            patterns: arrayOfStrings
                        },
                        additionalProperties: false
                    },
                    additionalItems: false
                }
            ]
        },

        messages: {
            defaultMessage: "'{{name}}' module is restricted from being used.",
            // eslint-disable-next-line eslint-plugin/report-message-format
            customMessage: "'{{name}}' module is restricted from being used. {{customMessage}}",
            patternMessage: "'{{name}}' module is restricted from being used by a pattern."
        }
    },

    create(context) {
        const options = Array.isArray(context.options) ? context.options : [];
        const isPathAndPatternsObject =
            typeof options[0] === "object" &&
            (Object.prototype.hasOwnProperty.call(options[0], "paths") || Object.prototype.hasOwnProperty.call(options[0], "patterns"));

        const restrictedPaths = (isPathAndPatternsObject ? options[0].paths : context.options) || [];
        const restrictedPatterns = (isPathAndPatternsObject ? options[0].patterns : []) || [];

        const restrictedPathMessages = restrictedPaths.reduce((memo, importName) => {
            if (typeof importName === "string") {
                memo[importName] = null;
            } else {
                memo[importName.name] = importName.message;
            }
            return memo;
        }, {});

        // if no imports are restricted we don"t need to check
        if (Object.keys(restrictedPaths).length === 0 && restrictedPatterns.length === 0) {
            return {};
        }

        const ig = ignore().add(restrictedPatterns);


        /**
         * Function to check if a node is a string literal.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} If the node is a string literal.
         */
        function isStringLiteral(node) {
            return node && node.type === "Literal" && typeof node.value === "string";
        }

        /**
         * Function to check if a node is a static string template literal.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} If the node is a string template literal.
         */
        function isStaticTemplateLiteral(node) {
            return node && node.type === "TemplateLiteral" && node.expressions.length === 0;
        }

        /**
         * Function to check if a node is a require call.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} If the node is a require call.
         */
        function isRequireCall(node) {
            return node.callee.type === "Identifier" && node.callee.name === "require";
        }

        /**
         * Extract string from Literal or TemplateLiteral node
         * @param {ASTNode} node The node to extract from
         * @returns {string|null} Extracted string or null if node doesn't represent a string
         */
        function getFirstArgumentString(node) {
            if (isStringLiteral(node)) {
                return node.value.trim();
            }

            if (isStaticTemplateLiteral(node)) {
                return node.quasis[0].value.cooked.trim();
            }

            return null;
        }

        /**
         * Report a restricted path.
         * @param {node} node representing the restricted path reference
         * @param {string} name restricted path
         * @returns {void}
         * @private
         */
        function reportPath(node, name) {
            const customMessage = restrictedPathMessages[name];
            const messageId = customMessage
                ? "customMessage"
                : "defaultMessage";

            context.report({
                node,
                messageId,
                data: {
                    name,
                    customMessage
                }
            });
        }

        /**
         * Check if the given name is a restricted path name
         * @param {string} name name of a variable
         * @returns {boolean} whether the variable is a restricted path or not
         * @private
         */
        function isRestrictedPath(name) {
            return Object.prototype.hasOwnProperty.call(restrictedPathMessages, name);
        }

        return {
            CallExpression(node) {
                if (isRequireCall(node)) {

                    // node has arguments
                    if (node.arguments.length) {
                        const name = getFirstArgumentString(node.arguments[0]);

                        // if first argument is a string literal or a static string template literal
                        if (name) {

                            // check if argument value is in restricted modules array
                            if (isRestrictedPath(name)) {
                                reportPath(node, name);
                            }

                            if (restrictedPatterns.length > 0 && ig.ignores(name)) {
                                context.report({
                                    node,
                                    messageId: "patternMessage",
                                    data: { name }
                                });
                            }
                        }
                    }
                }
            }
        };
    }
};
