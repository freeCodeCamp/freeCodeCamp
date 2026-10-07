/**
 * @fileoverview Ensure handling of errors when we know they exist.
 * @author Jamund Ferguson
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "require error handling in callbacks",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/handle-callback-err"
        },

        schema: [
            {
                type: "string"
            }
        ],
        messages: {
            expected: "Expected error to be handled."
        }
    },

    create(context) {

        const errorArgument = context.options[0] || "err";

        /**
         * Checks if the given argument should be interpreted as a regexp pattern.
         * @param {string} stringToCheck The string which should be checked.
         * @returns {boolean} Whether or not the string should be interpreted as a pattern.
         */
        function isPattern(stringToCheck) {
            const firstChar = stringToCheck[0];

            return firstChar === "^";
        }

        /**
         * Checks if the given name matches the configured error argument.
         * @param {string} name The name which should be compared.
         * @returns {boolean} Whether or not the given name matches the configured error variable name.
         */
        function matchesConfiguredErrorName(name) {
            if (isPattern(errorArgument)) {
                const regexp = new RegExp(errorArgument, "u");

                return regexp.test(name);
            }
            return name === errorArgument;
        }

        /**
         * Get the parameters of a given function scope.
         * @param {Object} scope The function scope.
         * @returns {Array} All parameters of the given scope.
         */
        function getParameters(scope) {
            return scope.variables.filter(variable => variable.defs[0] && variable.defs[0].type === "Parameter");
        }

        /**
         * Check to see if we're handling the error object properly.
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         */
        function checkForError(node) {
            const scope = context.getScope(),
                parameters = getParameters(scope),
                firstParameter = parameters[0];

            if (firstParameter && matchesConfiguredErrorName(firstParameter.name)) {
                if (firstParameter.references.length === 0) {
                    context.report({ node, messageId: "expected" });
                }
            }
        }

        return {
            FunctionDeclaration: checkForError,
            FunctionExpression: checkForError,
            ArrowFunctionExpression: checkForError
        };

    }
};
