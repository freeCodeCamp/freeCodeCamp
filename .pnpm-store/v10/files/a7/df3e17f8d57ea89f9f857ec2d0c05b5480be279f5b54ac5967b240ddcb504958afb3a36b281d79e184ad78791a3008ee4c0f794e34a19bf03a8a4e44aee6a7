/**
 * @fileoverview A rule to warn against using arrow functions when they could be
 * confused with comparisons
 * @author Jxck <https://github.com/Jxck>
 */

"use strict";

const astUtils = require("./utils/ast-utils.js");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a node is a conditional expression.
 * @param {ASTNode} node node to test
 * @returns {boolean} `true` if the node is a conditional expression.
 */
function isConditional(node) {
    return node && node.type === "ConditionalExpression";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow arrow functions where they could be confused with comparisons",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-confusing-arrow"
        },

        fixable: "code",

        schema: [{
            type: "object",
            properties: {
                allowParens: { type: "boolean", default: true }
            },
            additionalProperties: false
        }],

        messages: {
            confusing: "Arrow function used ambiguously with a conditional expression."
        }
    },

    create(context) {
        const config = context.options[0] || {};
        const allowParens = config.allowParens || (config.allowParens === void 0);
        const sourceCode = context.getSourceCode();


        /**
         * Reports if an arrow function contains an ambiguous conditional.
         * @param {ASTNode} node A node to check and report.
         * @returns {void}
         */
        function checkArrowFunc(node) {
            const body = node.body;

            if (isConditional(body) && !(allowParens && astUtils.isParenthesised(sourceCode, body))) {
                context.report({
                    node,
                    messageId: "confusing",
                    fix(fixer) {

                        // if `allowParens` is not set to true don't bother wrapping in parens
                        return allowParens && fixer.replaceText(node.body, `(${sourceCode.getText(node.body)})`);
                    }
                });
            }
        }

        return {
            ArrowFunctionExpression: checkArrowFunc
        };
    }
};
