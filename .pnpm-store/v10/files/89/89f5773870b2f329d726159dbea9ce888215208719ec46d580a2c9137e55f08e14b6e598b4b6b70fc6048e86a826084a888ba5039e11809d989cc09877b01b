/**
 * @fileoverview Rule to check for max length on a line.
 * @author Matt DuVall <http://www.mattduvall.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const OPTIONS_SCHEMA = {
    type: "object",
    properties: {
        code: {
            type: "integer",
            minimum: 0
        },
        comments: {
            type: "integer",
            minimum: 0
        },
        tabWidth: {
            type: "integer",
            minimum: 0
        },
        ignorePattern: {
            type: "string"
        },
        ignoreComments: {
            type: "boolean"
        },
        ignoreStrings: {
            type: "boolean"
        },
        ignoreUrls: {
            type: "boolean"
        },
        ignoreTemplateLiterals: {
            type: "boolean"
        },
        ignoreRegExpLiterals: {
            type: "boolean"
        },
        ignoreTrailingComments: {
            type: "boolean"
        }
    },
    additionalProperties: false
};

const OPTIONS_OR_INTEGER_SCHEMA = {
    anyOf: [
        OPTIONS_SCHEMA,
        {
            type: "integer",
            minimum: 0
        }
    ]
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce a maximum line length",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/max-len"
        },

        schema: [
            OPTIONS_OR_INTEGER_SCHEMA,
            OPTIONS_OR_INTEGER_SCHEMA,
            OPTIONS_SCHEMA
        ],
        messages: {
            max: "This line has a length of {{lineLength}}. Maximum allowed is {{maxLength}}.",
            maxComment: "This line has a comment length of {{lineLength}}. Maximum allowed is {{maxCommentLength}}."
        }
    },

    create(context) {

        /*
         * Inspired by http://tools.ietf.org/html/rfc3986#appendix-B, however:
         * - They're matching an entire string that we know is a URI
         * - We're matching part of a string where we think there *might* be a URL
         * - We're only concerned about URLs, as picking out any URI would cause
         *   too many false positives
         * - We don't care about matching the entire URL, any small segment is fine
         */
        const URL_REGEXP = /[^:/?#]:\/\/[^?#]/u;

        const sourceCode = context.getSourceCode();

        /**
         * Computes the length of a line that may contain tabs. The width of each
         * tab will be the number of spaces to the next tab stop.
         * @param {string} line The line.
         * @param {int} tabWidth The width of each tab stop in spaces.
         * @returns {int} The computed line length.
         * @private
         */
        function computeLineLength(line, tabWidth) {
            let extraCharacterCount = 0;

            line.replace(/\t/gu, (match, offset) => {
                const totalOffset = offset + extraCharacterCount,
                    previousTabStopOffset = tabWidth ? totalOffset % tabWidth : 0,
                    spaceCount = tabWidth - previousTabStopOffset;

                extraCharacterCount += spaceCount - 1; // -1 for the replaced tab
            });
            return Array.from(line).length + extraCharacterCount;
        }

        // The options object must be the last option specified…
        const options = Object.assign({}, context.options[context.options.length - 1]);

        // …but max code length…
        if (typeof context.options[0] === "number") {
            options.code = context.options[0];
        }

        // …and tabWidth can be optionally specified directly as integers.
        if (typeof context.options[1] === "number") {
            options.tabWidth = context.options[1];
        }

        const maxLength = typeof options.code === "number" ? options.code : 80,
            tabWidth = typeof options.tabWidth === "number" ? options.tabWidth : 4,
            ignoreComments = !!options.ignoreComments,
            ignoreStrings = !!options.ignoreStrings,
            ignoreTemplateLiterals = !!options.ignoreTemplateLiterals,
            ignoreRegExpLiterals = !!options.ignoreRegExpLiterals,
            ignoreTrailingComments = !!options.ignoreTrailingComments || !!options.ignoreComments,
            ignoreUrls = !!options.ignoreUrls,
            maxCommentLength = options.comments;
        let ignorePattern = options.ignorePattern || null;

        if (ignorePattern) {
            ignorePattern = new RegExp(ignorePattern, "u");
        }

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Tells if a given comment is trailing: it starts on the current line and
         * extends to or past the end of the current line.
         * @param {string} line The source line we want to check for a trailing comment on
         * @param {number} lineNumber The one-indexed line number for line
         * @param {ASTNode} comment The comment to inspect
         * @returns {boolean} If the comment is trailing on the given line
         */
        function isTrailingComment(line, lineNumber, comment) {
            return comment &&
                (comment.loc.start.line === lineNumber && lineNumber <= comment.loc.end.line) &&
                (comment.loc.end.line > lineNumber || comment.loc.end.column === line.length);
        }

        /**
         * Tells if a comment encompasses the entire line.
         * @param {string} line The source line with a trailing comment
         * @param {number} lineNumber The one-indexed line number this is on
         * @param {ASTNode} comment The comment to remove
         * @returns {boolean} If the comment covers the entire line
         */
        function isFullLineComment(line, lineNumber, comment) {
            const start = comment.loc.start,
                end = comment.loc.end,
                isFirstTokenOnLine = !line.slice(0, comment.loc.start.column).trim();

            return comment &&
                (start.line < lineNumber || (start.line === lineNumber && isFirstTokenOnLine)) &&
                (end.line > lineNumber || (end.line === lineNumber && end.column === line.length));
        }

        /**
         * Check if a node is a JSXEmptyExpression contained in a single line JSXExpressionContainer.
         * @param {ASTNode} node A node to check.
         * @returns {boolean} True if the node is a JSXEmptyExpression contained in a single line JSXExpressionContainer.
         */
        function isJSXEmptyExpressionInSingleLineContainer(node) {
            if (!node || !node.parent || node.type !== "JSXEmptyExpression" || node.parent.type !== "JSXExpressionContainer") {
                return false;
            }

            const parent = node.parent;

            return parent.loc.start.line === parent.loc.end.line;
        }

        /**
         * Gets the line after the comment and any remaining trailing whitespace is
         * stripped.
         * @param {string} line The source line with a trailing comment
         * @param {ASTNode} comment The comment to remove
         * @returns {string} Line without comment and trailing whitespace
         */
        function stripTrailingComment(line, comment) {

            // loc.column is zero-indexed
            return line.slice(0, comment.loc.start.column).replace(/\s+$/u, "");
        }

        /**
         * Ensure that an array exists at [key] on `object`, and add `value` to it.
         * @param {Object} object the object to mutate
         * @param {string} key the object's key
         * @param {*} value the value to add
         * @returns {void}
         * @private
         */
        function ensureArrayAndPush(object, key, value) {
            if (!Array.isArray(object[key])) {
                object[key] = [];
            }
            object[key].push(value);
        }

        /**
         * Retrieves an array containing all strings (" or ') in the source code.
         * @returns {ASTNode[]} An array of string nodes.
         */
        function getAllStrings() {
            return sourceCode.ast.tokens.filter(token => (token.type === "String" ||
                (token.type === "JSXText" && sourceCode.getNodeByRangeIndex(token.range[0] - 1).type === "JSXAttribute")));
        }

        /**
         * Retrieves an array containing all template literals in the source code.
         * @returns {ASTNode[]} An array of template literal nodes.
         */
        function getAllTemplateLiterals() {
            return sourceCode.ast.tokens.filter(token => token.type === "Template");
        }


        /**
         * Retrieves an array containing all RegExp literals in the source code.
         * @returns {ASTNode[]} An array of RegExp literal nodes.
         */
        function getAllRegExpLiterals() {
            return sourceCode.ast.tokens.filter(token => token.type === "RegularExpression");
        }


        /**
         * A reducer to group an AST node by line number, both start and end.
         * @param {Object} acc the accumulator
         * @param {ASTNode} node the AST node in question
         * @returns {Object} the modified accumulator
         * @private
         */
        function groupByLineNumber(acc, node) {
            for (let i = node.loc.start.line; i <= node.loc.end.line; ++i) {
                ensureArrayAndPush(acc, i, node);
            }
            return acc;
        }

        /**
         * Returns an array of all comments in the source code.
         * If the element in the array is a JSXEmptyExpression contained with a single line JSXExpressionContainer,
         * the element is changed with JSXExpressionContainer node.
         * @returns {ASTNode[]} An array of comment nodes
         */
        function getAllComments() {
            const comments = [];

            sourceCode.getAllComments()
                .forEach(commentNode => {
                    const containingNode = sourceCode.getNodeByRangeIndex(commentNode.range[0]);

                    if (isJSXEmptyExpressionInSingleLineContainer(containingNode)) {

                        // push a unique node only
                        if (comments[comments.length - 1] !== containingNode.parent) {
                            comments.push(containingNode.parent);
                        }
                    } else {
                        comments.push(commentNode);
                    }
                });

            return comments;
        }

        /**
         * Check the program for max length
         * @param {ASTNode} node Node to examine
         * @returns {void}
         * @private
         */
        function checkProgramForMaxLength(node) {

            // split (honors line-ending)
            const lines = sourceCode.lines,

                // list of comments to ignore
                comments = ignoreComments || maxCommentLength || ignoreTrailingComments ? getAllComments() : [];

            // we iterate over comments in parallel with the lines
            let commentsIndex = 0;

            const strings = getAllStrings();
            const stringsByLine = strings.reduce(groupByLineNumber, {});

            const templateLiterals = getAllTemplateLiterals();
            const templateLiteralsByLine = templateLiterals.reduce(groupByLineNumber, {});

            const regExpLiterals = getAllRegExpLiterals();
            const regExpLiteralsByLine = regExpLiterals.reduce(groupByLineNumber, {});

            lines.forEach((line, i) => {

                // i is zero-indexed, line numbers are one-indexed
                const lineNumber = i + 1;

                /*
                 * if we're checking comment length; we need to know whether this
                 * line is a comment
                 */
                let lineIsComment = false;
                let textToMeasure;

                /*
                 * We can short-circuit the comment checks if we're already out of
                 * comments to check.
                 */
                if (commentsIndex < comments.length) {
                    let comment = null;

                    // iterate over comments until we find one past the current line
                    do {
                        comment = comments[++commentsIndex];
                    } while (comment && comment.loc.start.line <= lineNumber);

                    // and step back by one
                    comment = comments[--commentsIndex];

                    if (isFullLineComment(line, lineNumber, comment)) {
                        lineIsComment = true;
                        textToMeasure = line;
                    } else if (ignoreTrailingComments && isTrailingComment(line, lineNumber, comment)) {
                        textToMeasure = stripTrailingComment(line, comment);

                        // ignore multiple trailing comments in the same line
                        let lastIndex = commentsIndex;

                        while (isTrailingComment(textToMeasure, lineNumber, comments[--lastIndex])) {
                            textToMeasure = stripTrailingComment(textToMeasure, comments[lastIndex]);
                        }
                    } else {
                        textToMeasure = line;
                    }
                } else {
                    textToMeasure = line;
                }
                if (ignorePattern && ignorePattern.test(textToMeasure) ||
                    ignoreUrls && URL_REGEXP.test(textToMeasure) ||
                    ignoreStrings && stringsByLine[lineNumber] ||
                    ignoreTemplateLiterals && templateLiteralsByLine[lineNumber] ||
                    ignoreRegExpLiterals && regExpLiteralsByLine[lineNumber]
                ) {

                    // ignore this line
                    return;
                }

                const lineLength = computeLineLength(textToMeasure, tabWidth);
                const commentLengthApplies = lineIsComment && maxCommentLength;

                if (lineIsComment && ignoreComments) {
                    return;
                }

                const loc = {
                    start: {
                        line: lineNumber,
                        column: 0
                    },
                    end: {
                        line: lineNumber,
                        column: textToMeasure.length
                    }
                };

                if (commentLengthApplies) {
                    if (lineLength > maxCommentLength) {
                        context.report({
                            node,
                            loc,
                            messageId: "maxComment",
                            data: {
                                lineLength,
                                maxCommentLength
                            }
                        });
                    }
                } else if (lineLength > maxLength) {
                    context.report({
                        node,
                        loc,
                        messageId: "max",
                        data: {
                            lineLength,
                            maxLength
                        }
                    });
                }
            });
        }


        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            Program: checkProgramForMaxLength
        };

    }
};
