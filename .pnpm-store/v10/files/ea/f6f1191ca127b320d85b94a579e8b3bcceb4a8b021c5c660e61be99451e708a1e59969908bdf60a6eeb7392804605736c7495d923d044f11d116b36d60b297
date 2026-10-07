/**
 * @fileoverview Comma spacing - validates spacing before and after comma
 * @author Vignesh Anand aka vegetableman.
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
            description: "enforce consistent spacing before and after commas",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/comma-spacing"
        },

        fixable: "whitespace",

        schema: [
            {
                type: "object",
                properties: {
                    before: {
                        type: "boolean",
                        default: false
                    },
                    after: {
                        type: "boolean",
                        default: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            missing: "A space is required {{loc}} ','.",
            unexpected: "There should be no space {{loc}} ','."
        }
    },

    create(context) {

        const sourceCode = context.getSourceCode();
        const tokensAndComments = sourceCode.tokensAndComments;

        const options = {
            before: context.options[0] ? context.options[0].before : false,
            after: context.options[0] ? context.options[0].after : true
        };

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        // list of comma tokens to ignore for the check of leading whitespace
        const commaTokensToIgnore = [];

        /**
         * Reports a spacing error with an appropriate message.
         * @param {ASTNode} node The binary expression node to report.
         * @param {string} loc Is the error "before" or "after" the comma?
         * @param {ASTNode} otherNode The node at the left or right of `node`
         * @returns {void}
         * @private
         */
        function report(node, loc, otherNode) {
            context.report({
                node,
                fix(fixer) {
                    if (options[loc]) {
                        if (loc === "before") {
                            return fixer.insertTextBefore(node, " ");
                        }
                        return fixer.insertTextAfter(node, " ");

                    }
                    let start, end;
                    const newText = "";

                    if (loc === "before") {
                        start = otherNode.range[1];
                        end = node.range[0];
                    } else {
                        start = node.range[1];
                        end = otherNode.range[0];
                    }

                    return fixer.replaceTextRange([start, end], newText);

                },
                messageId: options[loc] ? "missing" : "unexpected",
                data: {
                    loc
                }
            });
        }

        /**
         * Validates the spacing around a comma token.
         * @param {Object} tokens The tokens to be validated.
         * @param {Token} tokens.comma The token representing the comma.
         * @param {Token} [tokens.left] The last token before the comma.
         * @param {Token} [tokens.right] The first token after the comma.
         * @param {Token|ASTNode} reportItem The item to use when reporting an error.
         * @returns {void}
         * @private
         */
        function validateCommaItemSpacing(tokens, reportItem) {
            if (tokens.left && astUtils.isTokenOnSameLine(tokens.left, tokens.comma) &&
                    (options.before !== sourceCode.isSpaceBetweenTokens(tokens.left, tokens.comma))
            ) {
                report(reportItem, "before", tokens.left);
            }

            if (tokens.right && astUtils.isClosingParenToken(tokens.right)) {
                return;
            }

            if (tokens.right && !options.after && tokens.right.type === "Line") {
                return;
            }

            if (tokens.right && astUtils.isTokenOnSameLine(tokens.comma, tokens.right) &&
                    (options.after !== sourceCode.isSpaceBetweenTokens(tokens.comma, tokens.right))
            ) {
                report(reportItem, "after", tokens.right);
            }
        }

        /**
         * Adds null elements of the given ArrayExpression or ArrayPattern node to the ignore list.
         * @param {ASTNode} node An ArrayExpression or ArrayPattern node.
         * @returns {void}
         */
        function addNullElementsToIgnoreList(node) {
            let previousToken = sourceCode.getFirstToken(node);

            node.elements.forEach(element => {
                let token;

                if (element === null) {
                    token = sourceCode.getTokenAfter(previousToken);

                    if (astUtils.isCommaToken(token)) {
                        commaTokensToIgnore.push(token);
                    }
                } else {
                    token = sourceCode.getTokenAfter(element);
                }

                previousToken = token;
            });
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            "Program:exit"() {
                tokensAndComments.forEach((token, i) => {

                    if (!astUtils.isCommaToken(token)) {
                        return;
                    }

                    if (token && token.type === "JSXText") {
                        return;
                    }

                    const previousToken = tokensAndComments[i - 1];
                    const nextToken = tokensAndComments[i + 1];

                    validateCommaItemSpacing({
                        comma: token,
                        left: astUtils.isCommaToken(previousToken) || commaTokensToIgnore.includes(token) ? null : previousToken,
                        right: astUtils.isCommaToken(nextToken) ? null : nextToken
                    }, token);
                });
            },
            ArrayExpression: addNullElementsToIgnoreList,
            ArrayPattern: addNullElementsToIgnoreList

        };

    }
};
