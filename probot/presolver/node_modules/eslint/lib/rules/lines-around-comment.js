/**
 * @fileoverview Enforces empty lines around comments.
 * @author Jamund Ferguson
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const lodash = require("lodash"),
    astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Return an array with with any line numbers that are empty.
 * @param {Array} lines An array of each line of the file.
 * @returns {Array} An array of line numbers.
 */
function getEmptyLineNums(lines) {
    const emptyLines = lines.map((line, i) => ({
        code: line.trim(),
        num: i + 1
    })).filter(line => !line.code).map(line => line.num);

    return emptyLines;
}

/**
 * Return an array with with any line numbers that contain comments.
 * @param {Array} comments An array of comment nodes.
 * @returns {Array} An array of line numbers.
 */
function getCommentLineNums(comments) {
    const lines = [];

    comments.forEach(token => {
        const start = token.loc.start.line;
        const end = token.loc.end.line;

        lines.push(start, end);
    });
    return lines;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require empty lines around comments",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "whitespace",

        schema: [
            {
                type: "object",
                properties: {
                    beforeBlockComment: {
                        type: "boolean"
                    },
                    afterBlockComment: {
                        type: "boolean"
                    },
                    beforeLineComment: {
                        type: "boolean"
                    },
                    afterLineComment: {
                        type: "boolean"
                    },
                    allowBlockStart: {
                        type: "boolean"
                    },
                    allowBlockEnd: {
                        type: "boolean"
                    },
                    allowObjectStart: {
                        type: "boolean"
                    },
                    allowObjectEnd: {
                        type: "boolean"
                    },
                    allowArrayStart: {
                        type: "boolean"
                    },
                    allowArrayEnd: {
                        type: "boolean"
                    },
                    ignorePattern: {
                        type: "string"
                    },
                    applyDefaultIgnorePatterns: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        const options = context.options[0] ? Object.assign({}, context.options[0]) : {};
        const ignorePattern = options.ignorePattern;
        const defaultIgnoreRegExp = astUtils.COMMENTS_IGNORE_PATTERN;
        const customIgnoreRegExp = new RegExp(ignorePattern);
        const applyDefaultIgnorePatterns = options.applyDefaultIgnorePatterns !== false;


        options.beforeLineComment = options.beforeLineComment || false;
        options.afterLineComment = options.afterLineComment || false;
        options.beforeBlockComment = typeof options.beforeBlockComment !== "undefined" ? options.beforeBlockComment : true;
        options.afterBlockComment = options.afterBlockComment || false;
        options.allowBlockStart = options.allowBlockStart || false;
        options.allowBlockEnd = options.allowBlockEnd || false;

        const sourceCode = context.getSourceCode();

        const lines = sourceCode.lines,
            numLines = lines.length + 1,
            comments = sourceCode.getAllComments(),
            commentLines = getCommentLineNums(comments),
            emptyLines = getEmptyLineNums(lines),
            commentAndEmptyLines = commentLines.concat(emptyLines);

        /**
         * Returns whether or not a token is a comment node type
         * @param {Token} token The token to check
         * @returns {boolean} True if the token is a comment node
         */
        function isCommentNodeType(token) {
            return token && (token.type === "Block" || token.type === "Line");
        }

        /**
         * Returns whether or not comments are on lines starting with or ending with code
         * @param {ASTNode} node The comment node to check.
         * @returns {boolean} True if the comment is not alone.
         */
        function codeAroundComment(node) {
            let token;

            token = node;
            do {
                token = sourceCode.getTokenBefore(token, { includeComments: true });
            } while (isCommentNodeType(token));

            if (token && astUtils.isTokenOnSameLine(token, node)) {
                return true;
            }

            token = node;
            do {
                token = sourceCode.getTokenAfter(token, { includeComments: true });
            } while (isCommentNodeType(token));

            if (token && astUtils.isTokenOnSameLine(node, token)) {
                return true;
            }

            return false;
        }

        /**
         * Returns whether or not comments are inside a node type or not.
         * @param {ASTNode} node The Comment node.
         * @param {ASTNode} parent The Comment parent node.
         * @param {string} nodeType The parent type to check against.
         * @returns {boolean} True if the comment is inside nodeType.
         */
        function isCommentInsideNodeType(node, parent, nodeType) {
            return parent.type === nodeType ||
                (parent.body && parent.body.type === nodeType) ||
                (parent.consequent && parent.consequent.type === nodeType);
        }

        /**
         * Returns whether or not comments are at the parent start or not.
         * @param {ASTNode} node The Comment node.
         * @param {string} nodeType The parent type to check against.
         * @returns {boolean} True if the comment is at parent start.
         */
        function isCommentAtParentStart(node, nodeType) {
            const ancestors = context.getAncestors();
            let parent;

            if (ancestors.length) {
                parent = ancestors.pop();
            }

            return parent && isCommentInsideNodeType(node, parent, nodeType) &&
                    node.loc.start.line - parent.loc.start.line === 1;
        }

        /**
         * Returns whether or not comments are at the parent end or not.
         * @param {ASTNode} node The Comment node.
         * @param {string} nodeType The parent type to check against.
         * @returns {boolean} True if the comment is at parent end.
         */
        function isCommentAtParentEnd(node, nodeType) {
            const ancestors = context.getAncestors();
            let parent;

            if (ancestors.length) {
                parent = ancestors.pop();
            }

            return parent && isCommentInsideNodeType(node, parent, nodeType) &&
                    parent.loc.end.line - node.loc.end.line === 1;
        }

        /**
         * Returns whether or not comments are at the block start or not.
         * @param {ASTNode} node The Comment node.
         * @returns {boolean} True if the comment is at block start.
         */
        function isCommentAtBlockStart(node) {
            return isCommentAtParentStart(node, "ClassBody") || isCommentAtParentStart(node, "BlockStatement") || isCommentAtParentStart(node, "SwitchCase");
        }

        /**
         * Returns whether or not comments are at the block end or not.
         * @param {ASTNode} node The Comment node.
         * @returns {boolean} True if the comment is at block end.
         */
        function isCommentAtBlockEnd(node) {
            return isCommentAtParentEnd(node, "ClassBody") || isCommentAtParentEnd(node, "BlockStatement") || isCommentAtParentEnd(node, "SwitchCase") || isCommentAtParentEnd(node, "SwitchStatement");
        }

        /**
         * Returns whether or not comments are at the object start or not.
         * @param {ASTNode} node The Comment node.
         * @returns {boolean} True if the comment is at object start.
         */
        function isCommentAtObjectStart(node) {
            return isCommentAtParentStart(node, "ObjectExpression") || isCommentAtParentStart(node, "ObjectPattern");
        }

        /**
         * Returns whether or not comments are at the object end or not.
         * @param {ASTNode} node The Comment node.
         * @returns {boolean} True if the comment is at object end.
         */
        function isCommentAtObjectEnd(node) {
            return isCommentAtParentEnd(node, "ObjectExpression") || isCommentAtParentEnd(node, "ObjectPattern");
        }

        /**
         * Returns whether or not comments are at the array start or not.
         * @param {ASTNode} node The Comment node.
         * @returns {boolean} True if the comment is at array start.
         */
        function isCommentAtArrayStart(node) {
            return isCommentAtParentStart(node, "ArrayExpression") || isCommentAtParentStart(node, "ArrayPattern");
        }

        /**
         * Returns whether or not comments are at the array end or not.
         * @param {ASTNode} node The Comment node.
         * @returns {boolean} True if the comment is at array end.
         */
        function isCommentAtArrayEnd(node) {
            return isCommentAtParentEnd(node, "ArrayExpression") || isCommentAtParentEnd(node, "ArrayPattern");
        }

        /**
         * Checks if a comment node has lines around it (ignores inline comments)
         * @param {ASTNode} node The Comment node.
         * @param {Object} opts Options to determine the newline.
         * @param {boolean} opts.after Should have a newline after this line.
         * @param {boolean} opts.before Should have a newline before this line.
         * @returns {void}
         */
        function checkForEmptyLine(node, opts) {
            if (applyDefaultIgnorePatterns && defaultIgnoreRegExp.test(node.value)) {
                return;
            }

            if (ignorePattern && customIgnoreRegExp.test(node.value)) {
                return;
            }

            let after = opts.after,
                before = opts.before;

            const prevLineNum = node.loc.start.line - 1,
                nextLineNum = node.loc.end.line + 1,
                commentIsNotAlone = codeAroundComment(node);

            const blockStartAllowed = options.allowBlockStart && isCommentAtBlockStart(node),
                blockEndAllowed = options.allowBlockEnd && isCommentAtBlockEnd(node),
                objectStartAllowed = options.allowObjectStart && isCommentAtObjectStart(node),
                objectEndAllowed = options.allowObjectEnd && isCommentAtObjectEnd(node),
                arrayStartAllowed = options.allowArrayStart && isCommentAtArrayStart(node),
                arrayEndAllowed = options.allowArrayEnd && isCommentAtArrayEnd(node);

            const exceptionStartAllowed = blockStartAllowed || objectStartAllowed || arrayStartAllowed;
            const exceptionEndAllowed = blockEndAllowed || objectEndAllowed || arrayEndAllowed;

            // ignore top of the file and bottom of the file
            if (prevLineNum < 1) {
                before = false;
            }
            if (nextLineNum >= numLines) {
                after = false;
            }

            // we ignore all inline comments
            if (commentIsNotAlone) {
                return;
            }

            const previousTokenOrComment = sourceCode.getTokenBefore(node, { includeComments: true });
            const nextTokenOrComment = sourceCode.getTokenAfter(node, { includeComments: true });

            // check for newline before
            if (!exceptionStartAllowed && before && !lodash.includes(commentAndEmptyLines, prevLineNum) &&
                    !(isCommentNodeType(previousTokenOrComment) && astUtils.isTokenOnSameLine(previousTokenOrComment, node))) {
                const lineStart = node.range[0] - node.loc.start.column;
                const range = [lineStart, lineStart];

                context.report({
                    node,
                    message: "Expected line before comment.",
                    fix(fixer) {
                        return fixer.insertTextBeforeRange(range, "\n");
                    }
                });
            }

            // check for newline after
            if (!exceptionEndAllowed && after && !lodash.includes(commentAndEmptyLines, nextLineNum) &&
                    !(isCommentNodeType(nextTokenOrComment) && astUtils.isTokenOnSameLine(node, nextTokenOrComment))) {
                context.report({
                    node,
                    message: "Expected line after comment.",
                    fix(fixer) {
                        return fixer.insertTextAfter(node, "\n");
                    }
                });
            }

        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            LineComment(node) {
                if (options.beforeLineComment || options.afterLineComment) {
                    checkForEmptyLine(node, {
                        after: options.afterLineComment,
                        before: options.beforeLineComment
                    });
                }
            },

            BlockComment(node) {
                if (options.beforeBlockComment || options.afterBlockComment) {
                    checkForEmptyLine(node, {
                        after: options.afterBlockComment,
                        before: options.beforeBlockComment
                    });
                }
            }

        };
    }
};
