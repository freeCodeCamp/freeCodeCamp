/**
 * @fileoverview Validates spacing before and after semicolon
 * @author Mathias Schreck
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent spacing before and after semicolons",
            category: "Stylistic Issues",
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

        const config = context.options[0],
            sourceCode = context.getSourceCode();
        let requireSpaceBefore = false,
            requireSpaceAfter = true;

        if (typeof config === "object") {
            if (config.hasOwnProperty("before")) {
                requireSpaceBefore = config.before;
            }
            if (config.hasOwnProperty("after")) {
                requireSpaceAfter = config.after;
            }
        }

        /**
         * Checks if a given token has leading whitespace.
         * @param {Object} token The token to check.
         * @returns {boolean} True if the given token has leading space, false if not.
         */
        function hasLeadingSpace(token) {
            const tokenBefore = sourceCode.getTokenBefore(token);

            return tokenBefore && astUtils.isTokenOnSameLine(tokenBefore, token) && sourceCode.isSpaceBetweenTokens(tokenBefore, token);
        }

        /**
         * Checks if a given token has trailing whitespace.
         * @param {Object} token The token to check.
         * @returns {boolean} True if the given token has trailing space, false if not.
         */
        function hasTrailingSpace(token) {
            const tokenAfter = sourceCode.getTokenAfter(token);

            return tokenAfter && astUtils.isTokenOnSameLine(token, tokenAfter) && sourceCode.isSpaceBetweenTokens(token, tokenAfter);
        }

        /**
         * Checks if the given token is the last token in its line.
         * @param {Token} token The token to check.
         * @returns {boolean} Whether or not the token is the last in its line.
         */
        function isLastTokenInCurrentLine(token) {
            const tokenAfter = sourceCode.getTokenAfter(token);

            return !(tokenAfter && astUtils.isTokenOnSameLine(token, tokenAfter));
        }

        /**
         * Checks if the given token is the first token in its line
         * @param {Token} token The token to check.
         * @returns {boolean} Whether or not the token is the first in its line.
         */
        function isFirstTokenInCurrentLine(token) {
            const tokenBefore = sourceCode.getTokenBefore(token);

            return !(tokenBefore && astUtils.isTokenOnSameLine(token, tokenBefore));
        }

        /**
         * Checks if the next token of a given token is a closing parenthesis.
         * @param {Token} token The token to check.
         * @returns {boolean} Whether or not the next token of a given token is a closing parenthesis.
         */
        function isBeforeClosingParen(token) {
            const nextToken = sourceCode.getTokenAfter(token);

            return (nextToken && astUtils.isClosingBraceToken(nextToken) || astUtils.isClosingParenToken(nextToken));
        }

        /**
         * Reports if the given token has invalid spacing.
         * @param {Token} token The semicolon token to check.
         * @param {ASTNode} node The corresponding node of the token.
         * @returns {void}
         */
        function checkSemicolonSpacing(token, node) {
            if (astUtils.isSemicolonToken(token)) {
                const location = token.loc.start;

                if (hasLeadingSpace(token)) {
                    if (!requireSpaceBefore) {
                        context.report({
                            node,
                            loc: location,
                            message: "Unexpected whitespace before semicolon.",
                            fix(fixer) {
                                const tokenBefore = sourceCode.getTokenBefore(token);

                                return fixer.removeRange([tokenBefore.range[1], token.range[0]]);
                            }
                        });
                    }
                } else {
                    if (requireSpaceBefore) {
                        context.report({
                            node,
                            loc: location,
                            message: "Missing whitespace before semicolon.",
                            fix(fixer) {
                                return fixer.insertTextBefore(token, " ");
                            }
                        });
                    }
                }

                if (!isFirstTokenInCurrentLine(token) && !isLastTokenInCurrentLine(token) && !isBeforeClosingParen(token)) {
                    if (hasTrailingSpace(token)) {
                        if (!requireSpaceAfter) {
                            context.report({
                                node,
                                loc: location,
                                message: "Unexpected whitespace after semicolon.",
                                fix(fixer) {
                                    const tokenAfter = sourceCode.getTokenAfter(token);

                                    return fixer.removeRange([token.range[1], tokenAfter.range[0]]);
                                }
                            });
                        }
                    } else {
                        if (requireSpaceAfter) {
                            context.report({
                                node,
                                loc: location,
                                message: "Missing whitespace after semicolon.",
                                fix(fixer) {
                                    return fixer.insertTextAfter(token, " ");
                                }
                            });
                        }
                    }
                }
            }
        }

        /**
         * Checks the spacing of the semicolon with the assumption that the last token is the semicolon.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkNode(node) {
            const token = sourceCode.getLastToken(node);

            checkSemicolonSpacing(token, node);
        }

        return {
            VariableDeclaration: checkNode,
            ExpressionStatement: checkNode,
            BreakStatement: checkNode,
            ContinueStatement: checkNode,
            DebuggerStatement: checkNode,
            ReturnStatement: checkNode,
            ThrowStatement: checkNode,
            ImportDeclaration: checkNode,
            ExportNamedDeclaration: checkNode,
            ExportAllDeclaration: checkNode,
            ExportDefaultDeclaration: checkNode,
            ForStatement(node) {
                if (node.init) {
                    checkSemicolonSpacing(sourceCode.getTokenAfter(node.init), node);
                }

                if (node.test) {
                    checkSemicolonSpacing(sourceCode.getTokenAfter(node.test), node);
                }
            }
        };
    }
};
