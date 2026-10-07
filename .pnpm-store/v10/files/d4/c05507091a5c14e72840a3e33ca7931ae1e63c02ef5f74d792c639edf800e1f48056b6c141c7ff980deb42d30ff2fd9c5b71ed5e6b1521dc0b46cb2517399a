/**
 * @fileoverview enforce a maximum file length
 * @author Alberto Rodríguez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Creates an array of numbers from `start` up to, but not including, `end`
 * @param {number} start The start of the range
 * @param {number} end The end of the range
 * @returns {number[]} The range of numbers
 */
function range(start, end) {
    return [...Array(end - start).keys()].map(x => x + start);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce a maximum number of lines per file",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/max-lines"
        },

        schema: [
            {
                oneOf: [
                    {
                        type: "integer",
                        minimum: 0
                    },
                    {
                        type: "object",
                        properties: {
                            max: {
                                type: "integer",
                                minimum: 0
                            },
                            skipComments: {
                                type: "boolean"
                            },
                            skipBlankLines: {
                                type: "boolean"
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: {
            exceed:
                "File has too many lines ({{actual}}). Maximum allowed is {{max}}."
        }
    },

    create(context) {
        const option = context.options[0];
        let max = 300;

        if (
            typeof option === "object" &&
            Object.prototype.hasOwnProperty.call(option, "max")
        ) {
            max = option.max;
        } else if (typeof option === "number") {
            max = option;
        }

        const skipComments = option && option.skipComments;
        const skipBlankLines = option && option.skipBlankLines;

        const sourceCode = context.getSourceCode();

        /**
         * Returns whether or not a token is a comment node type
         * @param {Token} token The token to check
         * @returns {boolean} True if the token is a comment node
         */
        function isCommentNodeType(token) {
            return token && (token.type === "Block" || token.type === "Line");
        }

        /**
         * Returns the line numbers of a comment that don't have any code on the same line
         * @param {Node} comment The comment node to check
         * @returns {number[]} The line numbers
         */
        function getLinesWithoutCode(comment) {
            let start = comment.loc.start.line;
            let end = comment.loc.end.line;

            let token;

            token = comment;
            do {
                token = sourceCode.getTokenBefore(token, {
                    includeComments: true
                });
            } while (isCommentNodeType(token));

            if (token && astUtils.isTokenOnSameLine(token, comment)) {
                start += 1;
            }

            token = comment;
            do {
                token = sourceCode.getTokenAfter(token, {
                    includeComments: true
                });
            } while (isCommentNodeType(token));

            if (token && astUtils.isTokenOnSameLine(comment, token)) {
                end -= 1;
            }

            if (start <= end) {
                return range(start, end + 1);
            }
            return [];
        }

        /**
         * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
         * TODO(stephenwade): Replace this with array.flatMap when we drop support for Node v10
         * @param {any[]} array The array to process
         * @param {Function} fn The function to use
         * @returns {any[]} The result array
         */
        function flatMap(array, fn) {
            const mapped = array.map(fn);
            const flattened = [].concat(...mapped);

            return flattened;
        }

        return {
            "Program:exit"() {
                let lines = sourceCode.lines.map((text, i) => ({
                    lineNumber: i + 1,
                    text
                }));

                /*
                 * If file ends with a linebreak, `sourceCode.lines` will have one extra empty line at the end.
                 * That isn't a real line, so we shouldn't count it.
                 */
                if (lines.length > 1 && lines[lines.length - 1].text === "") {
                    lines.pop();
                }

                if (skipBlankLines) {
                    lines = lines.filter(l => l.text.trim() !== "");
                }

                if (skipComments) {
                    const comments = sourceCode.getAllComments();

                    const commentLines = flatMap(comments, comment => getLinesWithoutCode(comment));

                    lines = lines.filter(
                        l => !commentLines.includes(l.lineNumber)
                    );
                }

                if (lines.length > max) {
                    const loc = {
                        start: {
                            line: lines[max].lineNumber,
                            column: 0
                        },
                        end: {
                            line: sourceCode.lines.length,
                            column: sourceCode.lines[sourceCode.lines.length - 1].length
                        }
                    };

                    context.report({
                        loc,
                        messageId: "exceed",
                        data: {
                            max,
                            actual: lines.length
                        }
                    });
                }
            }
        };
    }
};
