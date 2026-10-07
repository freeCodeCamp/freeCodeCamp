/**
 * @fileoverview Rule to enforce a particular function style
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce the consistent use of either `function` declarations or expressions",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/func-style"
        },

        schema: [
            {
                enum: ["declaration", "expression"]
            },
            {
                type: "object",
                properties: {
                    allowArrowFunctions: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            expression: "Expected a function expression.",
            declaration: "Expected a function declaration."
        }
    },

    create(context) {

        const style = context.options[0],
            allowArrowFunctions = context.options[1] && context.options[1].allowArrowFunctions,
            enforceDeclarations = (style === "declaration"),
            stack = [];

        const nodesToCheck = {
            FunctionDeclaration(node) {
                stack.push(false);

                if (!enforceDeclarations && node.parent.type !== "ExportDefaultDeclaration") {
                    context.report({ node, messageId: "expression" });
                }
            },
            "FunctionDeclaration:exit"() {
                stack.pop();
            },

            FunctionExpression(node) {
                stack.push(false);

                if (enforceDeclarations && node.parent.type === "VariableDeclarator") {
                    context.report({ node: node.parent, messageId: "declaration" });
                }
            },
            "FunctionExpression:exit"() {
                stack.pop();
            },

            ThisExpression() {
                if (stack.length > 0) {
                    stack[stack.length - 1] = true;
                }
            }
        };

        if (!allowArrowFunctions) {
            nodesToCheck.ArrowFunctionExpression = function() {
                stack.push(false);
            };

            nodesToCheck["ArrowFunctionExpression:exit"] = function(node) {
                const hasThisExpr = stack.pop();

                if (enforceDeclarations && !hasThisExpr && node.parent.type === "VariableDeclarator") {
                    context.report({ node: node.parent, messageId: "declaration" });
                }
            };
        }

        return nodesToCheck;

    }
};
