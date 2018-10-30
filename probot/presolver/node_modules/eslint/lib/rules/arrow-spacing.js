/**
 * @fileoverview Rule to define spacing before/after arrow function's arrow.
 * @author Jxck
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent spacing before and after the arrow in arrow functions",
            category: "ECMAScript 6",
            recommended: false
        },

        fixable: "whitespace",

        schema: [
            {
                type: "object",
                properties: {
                    before: {
                        type: "boolean"
                    },
                    after: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        // merge rules with default
        const rule = { before: true, after: true },
            option = context.options[0] || {};

        rule.before = option.before !== false;
        rule.after = option.after !== false;

        const sourceCode = context.getSourceCode();

        /**
         * Get tokens of arrow(`=>`) and before/after arrow.
         * @param {ASTNode} node The arrow function node.
         * @returns {Object} Tokens of arrow and before/after arrow.
         */
        function getTokens(node) {
            const arrow = sourceCode.getTokenBefore(node.body, astUtils.isArrowToken);

            return {
                before: sourceCode.getTokenBefore(arrow),
                arrow,
                after: sourceCode.getTokenAfter(arrow)
            };
        }

        /**
         * Count spaces before/after arrow(`=>`) token.
         * @param {Object} tokens Tokens before/after arrow.
         * @returns {Object} count of space before/after arrow.
         */
        function countSpaces(tokens) {
            const before = tokens.arrow.range[0] - tokens.before.range[1];
            const after = tokens.after.range[0] - tokens.arrow.range[1];

            return { before, after };
        }

        /**
         * Determines whether space(s) before after arrow(`=>`) is satisfy rule.
         * if before/after value is `true`, there should be space(s).
         * if before/after value is `false`, there should be no space.
         * @param {ASTNode} node The arrow function node.
         * @returns {void}
         */
        function spaces(node) {
            const tokens = getTokens(node);
            const countSpace = countSpaces(tokens);

            if (rule.before) {

                // should be space(s) before arrow
                if (countSpace.before === 0) {
                    context.report({
                        node: tokens.before,
                        message: "Missing space before =>.",
                        fix(fixer) {
                            return fixer.insertTextBefore(tokens.arrow, " ");
                        }
                    });
                }
            } else {

                // should be no space before arrow
                if (countSpace.before > 0) {
                    context.report({
                        node: tokens.before,
                        message: "Unexpected space before =>.",
                        fix(fixer) {
                            return fixer.removeRange([tokens.before.range[1], tokens.arrow.range[0]]);
                        }
                    });
                }
            }

            if (rule.after) {

                // should be space(s) after arrow
                if (countSpace.after === 0) {
                    context.report({
                        node: tokens.after,
                        message: "Missing space after =>.",
                        fix(fixer) {
                            return fixer.insertTextAfter(tokens.arrow, " ");
                        }
                    });
                }
            } else {

                // should be no space after arrow
                if (countSpace.after > 0) {
                    context.report({
                        node: tokens.after,
                        message: "Unexpected space after =>.",
                        fix(fixer) {
                            return fixer.removeRange([tokens.arrow.range[1], tokens.after.range[0]]);
                        }
                    });
                }
            }
        }

        return {
            ArrowFunctionExpression: spaces
        };
    }
};
