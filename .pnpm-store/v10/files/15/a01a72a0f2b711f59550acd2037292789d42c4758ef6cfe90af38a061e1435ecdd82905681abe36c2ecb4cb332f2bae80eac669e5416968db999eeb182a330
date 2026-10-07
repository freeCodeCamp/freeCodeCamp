/**
 * @fileoverview Rule to flag no-unneeded-ternary
 * @author Gyandeep Singh
 */

"use strict";

const astUtils = require("./utils/ast-utils");

// Operators that always result in a boolean value
const BOOLEAN_OPERATORS = new Set(["==", "===", "!=", "!==", ">", ">=", "<", "<=", "in", "instanceof"]);
const OPERATOR_INVERSES = {
    "==": "!=",
    "!=": "==",
    "===": "!==",
    "!==": "==="

    // Operators like < and >= are not true inverses, since both will return false with NaN.
};
const OR_PRECEDENCE = astUtils.getPrecedence({ type: "LogicalExpression", operator: "||" });

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow ternary operators when simpler alternatives exist",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-unneeded-ternary"
        },

        schema: [
            {
                type: "object",
                properties: {
                    defaultAssignment: {
                        type: "boolean",
                        default: true
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code",

        messages: {
            unnecessaryConditionalExpression: "Unnecessary use of boolean literals in conditional expression.",
            unnecessaryConditionalAssignment: "Unnecessary use of conditional expression for default assignment."
        }
    },

    create(context) {
        const options = context.options[0] || {};
        const defaultAssignment = options.defaultAssignment !== false;
        const sourceCode = context.getSourceCode();

        /**
         * Test if the node is a boolean literal
         * @param {ASTNode} node The node to report.
         * @returns {boolean} True if the its a boolean literal
         * @private
         */
        function isBooleanLiteral(node) {
            return node.type === "Literal" && typeof node.value === "boolean";
        }

        /**
         * Creates an expression that represents the boolean inverse of the expression represented by the original node
         * @param {ASTNode} node A node representing an expression
         * @returns {string} A string representing an inverted expression
         */
        function invertExpression(node) {
            if (node.type === "BinaryExpression" && Object.prototype.hasOwnProperty.call(OPERATOR_INVERSES, node.operator)) {
                const operatorToken = sourceCode.getFirstTokenBetween(
                    node.left,
                    node.right,
                    token => token.value === node.operator
                );
                const text = sourceCode.getText();

                return text.slice(node.range[0],
                    operatorToken.range[0]) + OPERATOR_INVERSES[node.operator] + text.slice(operatorToken.range[1], node.range[1]);
            }

            if (astUtils.getPrecedence(node) < astUtils.getPrecedence({ type: "UnaryExpression" })) {
                return `!(${astUtils.getParenthesisedText(sourceCode, node)})`;
            }
            return `!${astUtils.getParenthesisedText(sourceCode, node)}`;
        }

        /**
         * Tests if a given node always evaluates to a boolean value
         * @param {ASTNode} node An expression node
         * @returns {boolean} True if it is determined that the node will always evaluate to a boolean value
         */
        function isBooleanExpression(node) {
            return node.type === "BinaryExpression" && BOOLEAN_OPERATORS.has(node.operator) ||
                node.type === "UnaryExpression" && node.operator === "!";
        }

        /**
         * Test if the node matches the pattern id ? id : expression
         * @param {ASTNode} node The ConditionalExpression to check.
         * @returns {boolean} True if the pattern is matched, and false otherwise
         * @private
         */
        function matchesDefaultAssignment(node) {
            return node.test.type === "Identifier" &&
                   node.consequent.type === "Identifier" &&
                   node.test.name === node.consequent.name;
        }

        return {

            ConditionalExpression(node) {
                if (isBooleanLiteral(node.alternate) && isBooleanLiteral(node.consequent)) {
                    context.report({
                        node,
                        messageId: "unnecessaryConditionalExpression",
                        fix(fixer) {
                            if (node.consequent.value === node.alternate.value) {

                                // Replace `foo ? true : true` with just `true`, but don't replace `foo() ? true : true`
                                return node.test.type === "Identifier" ? fixer.replaceText(node, node.consequent.value.toString()) : null;
                            }
                            if (node.alternate.value) {

                                // Replace `foo() ? false : true` with `!(foo())`
                                return fixer.replaceText(node, invertExpression(node.test));
                            }

                            // Replace `foo ? true : false` with `foo` if `foo` is guaranteed to be a boolean, or `!!foo` otherwise.

                            return fixer.replaceText(node, isBooleanExpression(node.test) ? astUtils.getParenthesisedText(sourceCode, node.test) : `!${invertExpression(node.test)}`);
                        }
                    });
                } else if (!defaultAssignment && matchesDefaultAssignment(node)) {
                    context.report({
                        node,
                        messageId: "unnecessaryConditionalAssignment",
                        fix: fixer => {
                            const shouldParenthesizeAlternate =
                                (
                                    astUtils.getPrecedence(node.alternate) < OR_PRECEDENCE ||
                                    astUtils.isCoalesceExpression(node.alternate)
                                ) &&
                                !astUtils.isParenthesised(sourceCode, node.alternate);
                            const alternateText = shouldParenthesizeAlternate
                                ? `(${sourceCode.getText(node.alternate)})`
                                : astUtils.getParenthesisedText(sourceCode, node.alternate);
                            const testText = astUtils.getParenthesisedText(sourceCode, node.test);

                            return fixer.replaceText(node, `${testText} || ${alternateText}`);
                        }
                    });
                }
            }
        };
    }
};
