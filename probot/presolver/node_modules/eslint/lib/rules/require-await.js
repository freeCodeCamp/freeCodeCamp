/**
 * @fileoverview Rule to disallow async functions which have no `await` expression.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Capitalize the 1st letter of the given text.
 *
 * @param {string} text - The text to capitalize.
 * @returns {string} The text that the 1st letter was capitalized.
 */
function capitalizeFirstLetter(text) {
    return text[0].toUpperCase() + text.slice(1);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow async functions which have no `await` expression",
            category: "Best Practices",
            recommended: false
        },
        schema: []
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        let scopeInfo = null;

        /**
         * Push the scope info object to the stack.
         *
         * @returns {void}
         */
        function enterFunction() {
            scopeInfo = {
                upper: scopeInfo,
                hasAwait: false
            };
        }

        /**
         * Pop the top scope info object from the stack.
         * Also, it reports the function if needed.
         *
         * @param {ASTNode} node - The node to report.
         * @returns {void}
         */
        function exitFunction(node) {
            if (node.async && !scopeInfo.hasAwait && !astUtils.isEmptyFunction(node)) {
                context.report({
                    node,
                    loc: astUtils.getFunctionHeadLoc(node, sourceCode),
                    message: "{{name}} has no 'await' expression.",
                    data: {
                        name: capitalizeFirstLetter(
                            astUtils.getFunctionNameWithKind(node)
                        )
                    }
                });
            }

            scopeInfo = scopeInfo.upper;
        }

        return {
            FunctionDeclaration: enterFunction,
            FunctionExpression: enterFunction,
            ArrowFunctionExpression: enterFunction,
            "FunctionDeclaration:exit": exitFunction,
            "FunctionExpression:exit": exitFunction,
            "ArrowFunctionExpression:exit": exitFunction,

            AwaitExpression() {
                scopeInfo.hasAwait = true;
            }
        };
    }
};
