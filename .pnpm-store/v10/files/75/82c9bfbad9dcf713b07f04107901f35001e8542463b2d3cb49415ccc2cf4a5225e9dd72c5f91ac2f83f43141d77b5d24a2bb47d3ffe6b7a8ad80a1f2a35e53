/**
 * @fileoverview A rule to set the maximum number of line of code in a function.
 * @author Pete Ward <peteward44@gmail.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { upperCaseFirst } = require("../shared/string-utils");

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const OPTIONS_SCHEMA = {
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
        },
        IIFEs: {
            type: "boolean"
        }
    },
    additionalProperties: false
};

const OPTIONS_OR_INTEGER_SCHEMA = {
    oneOf: [
        OPTIONS_SCHEMA,
        {
            type: "integer",
            minimum: 1
        }
    ]
};

/**
 * Given a list of comment nodes, return a map with numeric keys (source code line numbers) and comment token values.
 * @param {Array} comments An array of comment nodes.
 * @returns {Map.<string,Node>} A map with numeric keys (source code line numbers) and comment token values.
 */
function getCommentLineNumbers(comments) {
    const map = new Map();

    comments.forEach(comment => {
        for (let i = comment.loc.start.line; i <= comment.loc.end.line; i++) {
            map.set(i, comment);
        }
    });
    return map;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce a maximum number of lines of code in a function",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/max-lines-per-function"
        },

        schema: [
            OPTIONS_OR_INTEGER_SCHEMA
        ],
        messages: {
            exceed: "{{name}} has too many lines ({{lineCount}}). Maximum allowed is {{maxLines}}."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const lines = sourceCode.lines;

        const option = context.options[0];
        let maxLines = 50;
        let skipComments = false;
        let skipBlankLines = false;
        let IIFEs = false;

        if (typeof option === "object") {
            maxLines = typeof option.max === "number" ? option.max : 50;
            skipComments = !!option.skipComments;
            skipBlankLines = !!option.skipBlankLines;
            IIFEs = !!option.IIFEs;
        } else if (typeof option === "number") {
            maxLines = option;
        }

        const commentLineNumbers = getCommentLineNumbers(sourceCode.getAllComments());

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

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
                isFirstTokenOnLine = start.line === lineNumber && !line.slice(0, start.column).trim(),
                isLastTokenOnLine = end.line === lineNumber && !line.slice(end.column).trim();

            return comment &&
                (start.line < lineNumber || isFirstTokenOnLine) &&
                (end.line > lineNumber || isLastTokenOnLine);
        }

        /**
         * Identifies is a node is a FunctionExpression which is part of an IIFE
         * @param {ASTNode} node Node to test
         * @returns {boolean} True if it's an IIFE
         */
        function isIIFE(node) {
            return (node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") && node.parent && node.parent.type === "CallExpression" && node.parent.callee === node;
        }

        /**
         * Identifies is a node is a FunctionExpression which is embedded within a MethodDefinition or Property
         * @param {ASTNode} node Node to test
         * @returns {boolean} True if it's a FunctionExpression embedded within a MethodDefinition or Property
         */
        function isEmbedded(node) {
            if (!node.parent) {
                return false;
            }
            if (node !== node.parent.value) {
                return false;
            }
            if (node.parent.type === "MethodDefinition") {
                return true;
            }
            if (node.parent.type === "Property") {
                return node.parent.method === true || node.parent.kind === "get" || node.parent.kind === "set";
            }
            return false;
        }

        /**
         * Count the lines in the function
         * @param {ASTNode} funcNode Function AST node
         * @returns {void}
         * @private
         */
        function processFunction(funcNode) {
            const node = isEmbedded(funcNode) ? funcNode.parent : funcNode;

            if (!IIFEs && isIIFE(node)) {
                return;
            }
            let lineCount = 0;

            for (let i = node.loc.start.line - 1; i < node.loc.end.line; ++i) {
                const line = lines[i];

                if (skipComments) {
                    if (commentLineNumbers.has(i + 1) && isFullLineComment(line, i + 1, commentLineNumbers.get(i + 1))) {
                        continue;
                    }
                }

                if (skipBlankLines) {
                    if (line.match(/^\s*$/u)) {
                        continue;
                    }
                }

                lineCount++;
            }

            if (lineCount > maxLines) {
                const name = upperCaseFirst(astUtils.getFunctionNameWithKind(funcNode));

                context.report({
                    node,
                    messageId: "exceed",
                    data: { name, lineCount, maxLines }
                });
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            FunctionDeclaration: processFunction,
            FunctionExpression: processFunction,
            ArrowFunctionExpression: processFunction
        };
    }
};
