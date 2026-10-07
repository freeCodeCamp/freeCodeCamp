/**
 * @fileoverview Rule to enforce linebreaks after open and before close array brackets
 * @author Jan Peer Stöcklmair <https://github.com/JPeer264>
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce linebreaks after opening and before closing array brackets",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/array-bracket-newline"
        },

        fixable: "whitespace",

        schema: [
            {
                oneOf: [
                    {
                        enum: ["always", "never", "consistent"]
                    },
                    {
                        type: "object",
                        properties: {
                            multiline: {
                                type: "boolean"
                            },
                            minItems: {
                                type: ["integer", "null"],
                                minimum: 0
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],

        messages: {
            unexpectedOpeningLinebreak: "There should be no linebreak after '['.",
            unexpectedClosingLinebreak: "There should be no linebreak before ']'.",
            missingOpeningLinebreak: "A linebreak is required after '['.",
            missingClosingLinebreak: "A linebreak is required before ']'."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();


        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        /**
         * Normalizes a given option value.
         * @param {string|Object|undefined} option An option value to parse.
         * @returns {{multiline: boolean, minItems: number}} Normalized option object.
         */
        function normalizeOptionValue(option) {
            let consistent = false;
            let multiline = false;
            let minItems = 0;

            if (option) {
                if (option === "consistent") {
                    consistent = true;
                    minItems = Number.POSITIVE_INFINITY;
                } else if (option === "always" || option.minItems === 0) {
                    minItems = 0;
                } else if (option === "never") {
                    minItems = Number.POSITIVE_INFINITY;
                } else {
                    multiline = Boolean(option.multiline);
                    minItems = option.minItems || Number.POSITIVE_INFINITY;
                }
            } else {
                consistent = false;
                multiline = true;
                minItems = Number.POSITIVE_INFINITY;
            }

            return { consistent, multiline, minItems };
        }

        /**
         * Normalizes a given option value.
         * @param {string|Object|undefined} options An option value to parse.
         * @returns {{ArrayExpression: {multiline: boolean, minItems: number}, ArrayPattern: {multiline: boolean, minItems: number}}} Normalized option object.
         */
        function normalizeOptions(options) {
            const value = normalizeOptionValue(options);

            return { ArrayExpression: value, ArrayPattern: value };
        }

        /**
         * Reports that there shouldn't be a linebreak after the first token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportNoBeginningLinebreak(node, token) {
            context.report({
                node,
                loc: token.loc,
                messageId: "unexpectedOpeningLinebreak",
                fix(fixer) {
                    const nextToken = sourceCode.getTokenAfter(token, { includeComments: true });

                    if (astUtils.isCommentToken(nextToken)) {
                        return null;
                    }

                    return fixer.removeRange([token.range[1], nextToken.range[0]]);
                }
            });
        }

        /**
         * Reports that there shouldn't be a linebreak before the last token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportNoEndingLinebreak(node, token) {
            context.report({
                node,
                loc: token.loc,
                messageId: "unexpectedClosingLinebreak",
                fix(fixer) {
                    const previousToken = sourceCode.getTokenBefore(token, { includeComments: true });

                    if (astUtils.isCommentToken(previousToken)) {
                        return null;
                    }

                    return fixer.removeRange([previousToken.range[1], token.range[0]]);
                }
            });
        }

        /**
         * Reports that there should be a linebreak after the first token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportRequiredBeginningLinebreak(node, token) {
            context.report({
                node,
                loc: token.loc,
                messageId: "missingOpeningLinebreak",
                fix(fixer) {
                    return fixer.insertTextAfter(token, "\n");
                }
            });
        }

        /**
         * Reports that there should be a linebreak before the last token
         * @param {ASTNode} node The node to report in the event of an error.
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportRequiredEndingLinebreak(node, token) {
            context.report({
                node,
                loc: token.loc,
                messageId: "missingClosingLinebreak",
                fix(fixer) {
                    return fixer.insertTextBefore(token, "\n");
                }
            });
        }

        /**
         * Reports a given node if it violated this rule.
         * @param {ASTNode} node A node to check. This is an ArrayExpression node or an ArrayPattern node.
         * @returns {void}
         */
        function check(node) {
            const elements = node.elements;
            const normalizedOptions = normalizeOptions(context.options[0]);
            const options = normalizedOptions[node.type];
            const openBracket = sourceCode.getFirstToken(node);
            const closeBracket = sourceCode.getLastToken(node);
            const firstIncComment = sourceCode.getTokenAfter(openBracket, { includeComments: true });
            const lastIncComment = sourceCode.getTokenBefore(closeBracket, { includeComments: true });
            const first = sourceCode.getTokenAfter(openBracket);
            const last = sourceCode.getTokenBefore(closeBracket);

            const needsLinebreaks = (
                elements.length >= options.minItems ||
                (
                    options.multiline &&
                    elements.length > 0 &&
                    firstIncComment.loc.start.line !== lastIncComment.loc.end.line
                ) ||
                (
                    elements.length === 0 &&
                    firstIncComment.type === "Block" &&
                    firstIncComment.loc.start.line !== lastIncComment.loc.end.line &&
                    firstIncComment === lastIncComment
                ) ||
                (
                    options.consistent &&
                    openBracket.loc.end.line !== first.loc.start.line
                )
            );

            /*
             * Use tokens or comments to check multiline or not.
             * But use only tokens to check whether linebreaks are needed.
             * This allows:
             *     var arr = [ // eslint-disable-line foo
             *         'a'
             *     ]
             */

            if (needsLinebreaks) {
                if (astUtils.isTokenOnSameLine(openBracket, first)) {
                    reportRequiredBeginningLinebreak(node, openBracket);
                }
                if (astUtils.isTokenOnSameLine(last, closeBracket)) {
                    reportRequiredEndingLinebreak(node, closeBracket);
                }
            } else {
                if (!astUtils.isTokenOnSameLine(openBracket, first)) {
                    reportNoBeginningLinebreak(node, openBracket);
                }
                if (!astUtils.isTokenOnSameLine(last, closeBracket)) {
                    reportNoEndingLinebreak(node, closeBracket);
                }
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            ArrayPattern: check,
            ArrayExpression: check
        };
    }
};
