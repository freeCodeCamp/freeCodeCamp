/**
 * @fileoverview Rule to flag when IIFE is not wrapped in parens
 * @author Ilya Volodin
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
            description: "require parentheses around immediate `function` invocations",
            category: "Best Practices",
            recommended: false
        },

        schema: [
            {
                enum: ["outside", "inside", "any"]
            },
            {
                type: "object",
                properties: {
                    functionPrototypeMethods: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code"
    },

    create(context) {

        const style = context.options[0] || "outside";
        const includeFunctionPrototypeMethods = (context.options[1] && context.options[1].functionPrototypeMethods) || false;

        const sourceCode = context.getSourceCode();

        /**
         * Check if the node is wrapped in ()
         * @param {ASTNode} node node to evaluate
         * @returns {boolean} True if it is wrapped
         * @private
         */
        function wrapped(node) {
            return astUtils.isParenthesised(sourceCode, node);
        }

        /**
        * Get the function node from an IIFE
        * @param {ASTNode} node node to evaluate
        * @returns {ASTNode} node that is the function expression of the given IIFE, or null if none exist
        */
        function getFunctionNodeFromIIFE(node) {
            const callee = node.callee;

            if (callee.type === "FunctionExpression") {
                return callee;
            }

            if (includeFunctionPrototypeMethods &&
                callee.type === "MemberExpression" &&
                callee.object.type === "FunctionExpression" &&
                (astUtils.getStaticPropertyName(callee) === "call" || astUtils.getStaticPropertyName(callee) === "apply")
            ) {
                return callee.object;
            }

            return null;
        }


        return {
            CallExpression(node) {
                const innerNode = getFunctionNodeFromIIFE(node);

                if (!innerNode) {
                    return;
                }

                const callExpressionWrapped = wrapped(node),
                    functionExpressionWrapped = wrapped(innerNode);

                if (!callExpressionWrapped && !functionExpressionWrapped) {
                    context.report({
                        node,
                        message: "Wrap an immediate function invocation in parentheses.",
                        fix(fixer) {
                            const nodeToSurround = style === "inside" ? innerNode : node;

                            return fixer.replaceText(nodeToSurround, `(${sourceCode.getText(nodeToSurround)})`);
                        }
                    });
                } else if (style === "inside" && !functionExpressionWrapped) {
                    context.report({
                        node,
                        message: "Wrap only the function expression in parens.",
                        fix(fixer) {

                            /*
                             * The outer call expression will always be wrapped at this point.
                             * Replace the range between the end of the function expression and the end of the call expression.
                             * for example, in `(function(foo) {}(bar))`, the range `(bar))` should get replaced with `)(bar)`.
                             * Replace the parens from the outer expression, and parenthesize the function expression.
                             */
                            const parenAfter = sourceCode.getTokenAfter(node);

                            return fixer.replaceTextRange(
                                [innerNode.range[1], parenAfter.range[1]],
                                `)${sourceCode.getText().slice(innerNode.range[1], parenAfter.range[0])}`
                            );
                        }
                    });
                } else if (style === "outside" && !callExpressionWrapped) {
                    context.report({
                        node,
                        message: "Move the invocation into the parens that contain the function.",
                        fix(fixer) {

                            /*
                             * The inner function expression will always be wrapped at this point.
                             * It's only necessary to replace the range between the end of the function expression
                             * and the call expression. For example, in `(function(foo) {})(bar)`, the range `)(bar)`
                             * should get replaced with `(bar))`.
                             */
                            const parenAfter = sourceCode.getTokenAfter(innerNode);

                            return fixer.replaceTextRange(
                                [parenAfter.range[0], node.range[1]],
                                `${sourceCode.getText().slice(parenAfter.range[1], node.range[1])})`
                            );
                        }
                    });
                }
            }
        };

    }
};
