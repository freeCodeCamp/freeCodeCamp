/**
 * @fileoverview Rule to disallow empty functions.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ALLOW_OPTIONS = Object.freeze([
    "functions",
    "arrowFunctions",
    "generatorFunctions",
    "methods",
    "generatorMethods",
    "getters",
    "setters",
    "constructors",
    "asyncFunctions",
    "asyncMethods"
]);

/**
 * Gets the kind of a given function node.
 * @param {ASTNode} node A function node to get. This is one of
 *      an ArrowFunctionExpression, a FunctionDeclaration, or a
 *      FunctionExpression.
 * @returns {string} The kind of the function. This is one of "functions",
 *      "arrowFunctions", "generatorFunctions", "asyncFunctions", "methods",
 *      "generatorMethods", "asyncMethods", "getters", "setters", and
 *      "constructors".
 */
function getKind(node) {
    const parent = node.parent;
    let kind = "";

    if (node.type === "ArrowFunctionExpression") {
        return "arrowFunctions";
    }

    // Detects main kind.
    if (parent.type === "Property") {
        if (parent.kind === "get") {
            return "getters";
        }
        if (parent.kind === "set") {
            return "setters";
        }
        kind = parent.method ? "methods" : "functions";

    } else if (parent.type === "MethodDefinition") {
        if (parent.kind === "get") {
            return "getters";
        }
        if (parent.kind === "set") {
            return "setters";
        }
        if (parent.kind === "constructor") {
            return "constructors";
        }
        kind = "methods";

    } else {
        kind = "functions";
    }

    // Detects prefix.
    let prefix = "";

    if (node.generator) {
        prefix = "generator";
    } else if (node.async) {
        prefix = "async";
    } else {
        return kind;
    }
    return prefix + kind[0].toUpperCase() + kind.slice(1);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow empty functions",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-empty-function"
        },

        schema: [
            {
                type: "object",
                properties: {
                    allow: {
                        type: "array",
                        items: { enum: ALLOW_OPTIONS },
                        uniqueItems: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unexpected: "Unexpected empty {{name}}."
        }
    },

    create(context) {
        const options = context.options[0] || {};
        const allowed = options.allow || [];

        const sourceCode = context.getSourceCode();

        /**
         * Reports a given function node if the node matches the following patterns.
         *
         * - Not allowed by options.
         * - The body is empty.
         * - The body doesn't have any comments.
         * @param {ASTNode} node A function node to report. This is one of
         *      an ArrowFunctionExpression, a FunctionDeclaration, or a
         *      FunctionExpression.
         * @returns {void}
         */
        function reportIfEmpty(node) {
            const kind = getKind(node);
            const name = astUtils.getFunctionNameWithKind(node);
            const innerComments = sourceCode.getTokens(node.body, {
                includeComments: true,
                filter: astUtils.isCommentToken
            });

            if (allowed.indexOf(kind) === -1 &&
                node.body.type === "BlockStatement" &&
                node.body.body.length === 0 &&
                innerComments.length === 0
            ) {
                context.report({
                    node,
                    loc: node.body.loc,
                    messageId: "unexpected",
                    data: { name }
                });
            }
        }

        return {
            ArrowFunctionExpression: reportIfEmpty,
            FunctionDeclaration: reportIfEmpty,
            FunctionExpression: reportIfEmpty
        };
    }
};
