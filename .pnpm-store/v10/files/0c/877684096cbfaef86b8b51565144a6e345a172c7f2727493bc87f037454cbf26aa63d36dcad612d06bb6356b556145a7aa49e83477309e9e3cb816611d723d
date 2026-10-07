/**
 * @fileoverview Rule to enforce spacing around colons of switch statements.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce spacing around colons of switch statements",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/switch-colon-spacing"
        },

        schema: [
            {
                type: "object",
                properties: {
                    before: { type: "boolean", default: false },
                    after: { type: "boolean", default: true }
                },
                additionalProperties: false
            }
        ],
        fixable: "whitespace",
        messages: {
            expectedBefore: "Expected space(s) before this colon.",
            expectedAfter: "Expected space(s) after this colon.",
            unexpectedBefore: "Unexpected space(s) before this colon.",
            unexpectedAfter: "Unexpected space(s) after this colon."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const options = context.options[0] || {};
        const beforeSpacing = options.before === true; // false by default
        const afterSpacing = options.after !== false; // true by default

        /**
         * Get the colon token of the given SwitchCase node.
         * @param {ASTNode} node The SwitchCase node to get.
         * @returns {Token} The colon token of the node.
         */
        function getColonToken(node) {
            if (node.test) {
                return sourceCode.getTokenAfter(node.test, astUtils.isColonToken);
            }
            return sourceCode.getFirstToken(node, 1);
        }

        /**
         * Check whether the spacing between the given 2 tokens is valid or not.
         * @param {Token} left The left token to check.
         * @param {Token} right The right token to check.
         * @param {boolean} expected The expected spacing to check. `true` if there should be a space.
         * @returns {boolean} `true` if the spacing between the tokens is valid.
         */
        function isValidSpacing(left, right, expected) {
            return (
                astUtils.isClosingBraceToken(right) ||
                !astUtils.isTokenOnSameLine(left, right) ||
                sourceCode.isSpaceBetweenTokens(left, right) === expected
            );
        }

        /**
         * Check whether comments exist between the given 2 tokens.
         * @param {Token} left The left token to check.
         * @param {Token} right The right token to check.
         * @returns {boolean} `true` if comments exist between the given 2 tokens.
         */
        function commentsExistBetween(left, right) {
            return sourceCode.getFirstTokenBetween(
                left,
                right,
                {
                    includeComments: true,
                    filter: astUtils.isCommentToken
                }
            ) !== null;
        }

        /**
         * Fix the spacing between the given 2 tokens.
         * @param {RuleFixer} fixer The fixer to fix.
         * @param {Token} left The left token of fix range.
         * @param {Token} right The right token of fix range.
         * @param {boolean} spacing The spacing style. `true` if there should be a space.
         * @returns {Fix|null} The fix object.
         */
        function fix(fixer, left, right, spacing) {
            if (commentsExistBetween(left, right)) {
                return null;
            }
            if (spacing) {
                return fixer.insertTextAfter(left, " ");
            }
            return fixer.removeRange([left.range[1], right.range[0]]);
        }

        return {
            SwitchCase(node) {
                const colonToken = getColonToken(node);
                const beforeToken = sourceCode.getTokenBefore(colonToken);
                const afterToken = sourceCode.getTokenAfter(colonToken);

                if (!isValidSpacing(beforeToken, colonToken, beforeSpacing)) {
                    context.report({
                        node,
                        loc: colonToken.loc,
                        messageId: beforeSpacing ? "expectedBefore" : "unexpectedBefore",
                        fix: fixer => fix(fixer, beforeToken, colonToken, beforeSpacing)
                    });
                }
                if (!isValidSpacing(colonToken, afterToken, afterSpacing)) {
                    context.report({
                        node,
                        loc: colonToken.loc,
                        messageId: afterSpacing ? "expectedAfter" : "unexpectedAfter",
                        fix: fixer => fix(fixer, colonToken, afterToken, afterSpacing)
                    });
                }
            }
        };
    }
};
