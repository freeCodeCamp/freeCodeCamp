/**
 * @fileoverview Rule to flag the generator functions that does not have yield.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require generator functions to contain `yield`",
            category: "ECMAScript 6",
            recommended: true
        },

        schema: []
    },

    create(context) {
        const stack = [];

        /**
         * If the node is a generator function, start counting `yield` keywords.
         * @param {Node} node - A function node to check.
         * @returns {void}
         */
        function beginChecking(node) {
            if (node.generator) {
                stack.push(0);
            }
        }

        /**
         * If the node is a generator function, end counting `yield` keywords, then
         * reports result.
         * @param {Node} node - A function node to check.
         * @returns {void}
         */
        function endChecking(node) {
            if (!node.generator) {
                return;
            }

            const countYield = stack.pop();

            if (countYield === 0 && node.body.body.length > 0) {
                context.report({ node, message: "This generator function does not have 'yield'." });
            }
        }

        return {
            FunctionDeclaration: beginChecking,
            "FunctionDeclaration:exit": endChecking,
            FunctionExpression: beginChecking,
            "FunctionExpression:exit": endChecking,

            // Increases the count of `yield` keyword.
            YieldExpression() {

                /* istanbul ignore else */
                if (stack.length > 0) {
                    stack[stack.length - 1] += 1;
                }
            }
        };
    }
};
