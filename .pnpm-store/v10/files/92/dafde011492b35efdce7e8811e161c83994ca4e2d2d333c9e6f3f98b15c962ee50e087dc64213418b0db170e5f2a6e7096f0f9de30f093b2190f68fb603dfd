/**
 * @fileoverview Rule to enforce line breaks after each array element
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
            description: "enforce line breaks after each array element",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/array-element-newline"
        },

        fixable: "whitespace",

        schema: {
            definitions: {
                basicConfig: {
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
            },
            items: [
                {
                    oneOf: [
                        {
                            $ref: "#/definitions/basicConfig"
                        },
                        {
                            type: "object",
                            properties: {
                                ArrayExpression: {
                                    $ref: "#/definitions/basicConfig"
                                },
                                ArrayPattern: {
                                    $ref: "#/definitions/basicConfig"
                                }
                            },
                            additionalProperties: false,
                            minProperties: 1
                        }
                    ]
                }
            ]
        },

        messages: {
            unexpectedLineBreak: "There should be no linebreak here.",
            missingLineBreak: "There should be a linebreak after this element."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        /**
         * Normalizes a given option value.
         * @param {string|Object|undefined} providedOption An option value to parse.
         * @returns {{multiline: boolean, minItems: number}} Normalized option object.
         */
        function normalizeOptionValue(providedOption) {
            let consistent = false;
            let multiline = false;
            let minItems;

            const option = providedOption || "always";

            if (!option || option === "always" || option.minItems === 0) {
                minItems = 0;
            } else if (option === "never") {
                minItems = Number.POSITIVE_INFINITY;
            } else if (option === "consistent") {
                consistent = true;
                minItems = Number.POSITIVE_INFINITY;
            } else {
                multiline = Boolean(option.multiline);
                minItems = option.minItems || Number.POSITIVE_INFINITY;
            }

            return { consistent, multiline, minItems };
        }

        /**
         * Normalizes a given option value.
         * @param {string|Object|undefined} options An option value to parse.
         * @returns {{ArrayExpression: {multiline: boolean, minItems: number}, ArrayPattern: {multiline: boolean, minItems: number}}} Normalized option object.
         */
        function normalizeOptions(options) {
            if (options && (options.ArrayExpression || options.ArrayPattern)) {
                let expressionOptions, patternOptions;

                if (options.ArrayExpression) {
                    expressionOptions = normalizeOptionValue(options.ArrayExpression);
                }

                if (options.ArrayPattern) {
                    patternOptions = normalizeOptionValue(options.ArrayPattern);
                }

                return { ArrayExpression: expressionOptions, ArrayPattern: patternOptions };
            }

            const value = normalizeOptionValue(options);

            return { ArrayExpression: value, ArrayPattern: value };
        }

        /**
         * Reports that there shouldn't be a line break after the first token
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportNoLineBreak(token) {
            const tokenBefore = sourceCode.getTokenBefore(token, { includeComments: true });

            context.report({
                loc: {
                    start: tokenBefore.loc.end,
                    end: token.loc.start
                },
                messageId: "unexpectedLineBreak",
                fix(fixer) {
                    if (astUtils.isCommentToken(tokenBefore)) {
                        return null;
                    }

                    if (!astUtils.isTokenOnSameLine(tokenBefore, token)) {
                        return fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], " ");
                    }

                    /*
                     * This will check if the comma is on the same line as the next element
                     * Following array:
                     * [
                     *     1
                     *     , 2
                     *     , 3
                     * ]
                     *
                     * will be fixed to:
                     * [
                     *     1, 2, 3
                     * ]
                     */
                    const twoTokensBefore = sourceCode.getTokenBefore(tokenBefore, { includeComments: true });

                    if (astUtils.isCommentToken(twoTokensBefore)) {
                        return null;
                    }

                    return fixer.replaceTextRange([twoTokensBefore.range[1], tokenBefore.range[0]], "");

                }
            });
        }

        /**
         * Reports that there should be a line break after the first token
         * @param {Token} token The token to use for the report.
         * @returns {void}
         */
        function reportRequiredLineBreak(token) {
            const tokenBefore = sourceCode.getTokenBefore(token, { includeComments: true });

            context.report({
                loc: {
                    start: tokenBefore.loc.end,
                    end: token.loc.start
                },
                messageId: "missingLineBreak",
                fix(fixer) {
                    return fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], "\n");
                }
            });
        }

        /**
         * Reports a given node if it violated this rule.
         * @param {ASTNode} node A node to check. This is an ObjectExpression node or an ObjectPattern node.
         * @returns {void}
         */
        function check(node) {
            const elements = node.elements;
            const normalizedOptions = normalizeOptions(context.options[0]);
            const options = normalizedOptions[node.type];

            if (!options) {
                return;
            }

            let elementBreak = false;

            /*
             * MULTILINE: true
             * loop through every element and check
             * if at least one element has linebreaks inside
             * this ensures that following is not valid (due to elements are on the same line):
             *
             * [
             *      1,
             *      2,
             *      3
             * ]
             */
            if (options.multiline) {
                elementBreak = elements
                    .filter(element => element !== null)
                    .some(element => element.loc.start.line !== element.loc.end.line);
            }

            const linebreaksCount = node.elements.map((element, i) => {
                const previousElement = elements[i - 1];

                if (i === 0 || element === null || previousElement === null) {
                    return false;
                }

                const commaToken = sourceCode.getFirstTokenBetween(previousElement, element, astUtils.isCommaToken);
                const lastTokenOfPreviousElement = sourceCode.getTokenBefore(commaToken);
                const firstTokenOfCurrentElement = sourceCode.getTokenAfter(commaToken);

                return !astUtils.isTokenOnSameLine(lastTokenOfPreviousElement, firstTokenOfCurrentElement);
            }).filter(isBreak => isBreak === true).length;

            const needsLinebreaks = (
                elements.length >= options.minItems ||
                (
                    options.multiline &&
                    elementBreak
                ) ||
                (
                    options.consistent &&
                    linebreaksCount > 0 &&
                    linebreaksCount < node.elements.length
                )
            );

            elements.forEach((element, i) => {
                const previousElement = elements[i - 1];

                if (i === 0 || element === null || previousElement === null) {
                    return;
                }

                const commaToken = sourceCode.getFirstTokenBetween(previousElement, element, astUtils.isCommaToken);
                const lastTokenOfPreviousElement = sourceCode.getTokenBefore(commaToken);
                const firstTokenOfCurrentElement = sourceCode.getTokenAfter(commaToken);

                if (needsLinebreaks) {
                    if (astUtils.isTokenOnSameLine(lastTokenOfPreviousElement, firstTokenOfCurrentElement)) {
                        reportRequiredLineBreak(firstTokenOfCurrentElement);
                    }
                } else {
                    if (!astUtils.isTokenOnSameLine(lastTokenOfPreviousElement, firstTokenOfCurrentElement)) {
                        reportNoLineBreak(firstTokenOfCurrentElement);
                    }
                }
            });
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
