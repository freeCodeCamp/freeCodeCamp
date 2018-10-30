/**
 * @fileoverview Rule to require parens in arrow function arguments.
 * @author Jxck
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require parentheses around arrow function arguments",
            category: "ECMAScript 6",
            recommended: false
        },

        fixable: "code",

        schema: [
            {
                enum: ["always", "as-needed"]
            },
            {
                type: "object",
                properties: {
                    requireForBlockBody: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const message = "Expected parentheses around arrow function argument.";
        const asNeededMessage = "Unexpected parentheses around single function argument.";
        const asNeeded = context.options[0] === "as-needed";
        const requireForBlockBodyMessage = "Unexpected parentheses around single function argument having a body with no curly braces";
        const requireForBlockBodyNoParensMessage = "Expected parentheses around arrow function argument having a body with curly braces.";
        const requireForBlockBody = asNeeded && context.options[1] && context.options[1].requireForBlockBody === true;

        const sourceCode = context.getSourceCode();


        /**
         * Determines whether a arrow function argument end with `)`
         * @param {ASTNode} node The arrow function node.
         * @returns {void}
         */
        function parens(node) {
            const token = sourceCode.getFirstToken(node, node.async ? 1 : 0);

            // "as-needed", { "requireForBlockBody": true }: x => x
            if (
                requireForBlockBody &&
                node.params.length === 1 &&
                node.params[0].type === "Identifier" &&
                !node.params[0].typeAnnotation &&
                node.body.type !== "BlockStatement" &&
                !node.returnType
            ) {
                if (astUtils.isOpeningParenToken(token)) {
                    context.report({
                        node,
                        message: requireForBlockBodyMessage,
                        fix(fixer) {
                            const paramToken = context.getTokenAfter(token);
                            const closingParenToken = context.getTokenAfter(paramToken);

                            return fixer.replaceTextRange([
                                token.range[0],
                                closingParenToken.range[1]
                            ], paramToken.value);
                        }
                    });
                }
                return;
            }

            if (
                requireForBlockBody &&
                node.body.type === "BlockStatement"
            ) {
                if (!astUtils.isOpeningParenToken(token)) {
                    context.report({
                        node,
                        message: requireForBlockBodyNoParensMessage,
                        fix(fixer) {
                            return fixer.replaceText(token, `(${token.value})`);
                        }
                    });
                }
                return;
            }

            // "as-needed": x => x
            if (asNeeded &&
                node.params.length === 1 &&
                node.params[0].type === "Identifier" &&
                !node.params[0].typeAnnotation &&
                !node.returnType
            ) {
                if (astUtils.isOpeningParenToken(token)) {
                    context.report({
                        node,
                        message: asNeededMessage,
                        fix(fixer) {
                            const paramToken = context.getTokenAfter(token);
                            const closingParenToken = context.getTokenAfter(paramToken);

                            return fixer.replaceTextRange([
                                token.range[0],
                                closingParenToken.range[1]
                            ], paramToken.value);
                        }
                    });
                }
                return;
            }

            if (token.type === "Identifier") {
                const after = sourceCode.getTokenAfter(token);

                // (x) => x
                if (after.value !== ")") {
                    context.report({
                        node,
                        message,
                        fix(fixer) {
                            return fixer.replaceText(token, `(${token.value})`);
                        }
                    });
                }
            }
        }

        return {
            ArrowFunctionExpression: parens
        };
    }
};
