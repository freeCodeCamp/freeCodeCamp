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
    items: {
        type: "string"
    },
    uniqueItems: true
};

module.exports = {
    meta: {
        docs: {
            description: "disallow specified modules when loaded by `require`",
            category: "Node.js and CommonJS",
            recommended: false
        },

        schema: {
            anyOf: [
                arrayOfStrings,
                {
                    type: "array",
                    items: [{
                        type: "object",
                        properties: {
                            paths: arrayOfStrings,
                            patterns: arrayOfStrings
                        },
                        additionalProperties: false
                    }],
                    additionalItems: false
                }
            ]
        }
    },

    create(context) {
        const options = Array.isArray(context.options) ? context.options : [];
        const isStringArray = typeof options[0] !== "object";
        const restrictedPaths = new Set(isStringArray ? context.options : options[0].paths || []);
        const restrictedPatterns = isStringArray ? [] : options[0].patterns || [];

        // if no imports are restricted we don"t need to check
        if (restrictedPaths.size === 0 && restrictedPatterns.length === 0) {
            return {};
        }

        const ig = ignore().add(restrictedPatterns);

        /**
         * Function to check if a node is a string literal.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} If the node is a string literal.
         */
        function isString(node) {
            return node && node.type === "Literal" && typeof node.value === "string";
        }

        /**
         * Function to check if a node is a require call.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} If the node is a require call.
         */
        function isRequireCall(node) {
            return node.callee.type === "Identifier" && node.callee.name === "require";
        }

        return {
            CallExpression(node) {
                if (isRequireCall(node)) {

                    // node has arguments and first argument is string
                    if (node.arguments.length && isString(node.arguments[0])) {
                        const moduleName = node.arguments[0].value.trim();

                        // check if argument value is in restricted modules array
                        if (restrictedPaths.has(moduleName)) {
                            context.report({
                                node,
                                message: "'{{moduleName}}' module is restricted from being used.",
                                data: { moduleName }
                            });
                        }

                        if (restrictedPatterns.length > 0 && ig.ignores(moduleName)) {
                            context.report({
                                node,
                                message: "'{{moduleName}}' module is restricted from being used by a pattern.",
                                data: { moduleName }
                            });
                        }
                    }
                }
            }
        };
    }
};
