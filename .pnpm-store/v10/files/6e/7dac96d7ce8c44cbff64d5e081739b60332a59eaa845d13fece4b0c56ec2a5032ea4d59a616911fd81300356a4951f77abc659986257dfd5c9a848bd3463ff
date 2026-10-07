/**
 * @fileoverview Rule to flag unnecessary double negation in Boolean contexts
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const eslintUtils = require("eslint-utils");

const precedence = astUtils.getPrecedence;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary boolean casts",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-extra-boolean-cast"
        },

        schema: [{
            type: "object",
            properties: {
                enforceForLogicalOperands: {
                    type: "boolean",
                    default: false
                }
            },
            additionalProperties: false
        }],
        fixable: "code",

        messages: {
            unexpectedCall: "Redundant Boolean call.",
            unexpectedNegation: "Redundant double negation."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        // Node types which have a test which will coerce values to booleans.
        const BOOLEAN_NODE_TYPES = [
            "IfStatement",
            "DoWhileStatement",
            "WhileStatement",
            "ConditionalExpression",
            "ForStatement"
        ];

        /**
         * Check if a node is a Boolean function or constructor.
         * @param {ASTNode} node the node
         * @returns {boolean} If the node is Boolean function or constructor
         */
        function isBooleanFunctionOrConstructorCall(node) {

            // Boolean(<bool>) and new Boolean(<bool>)
            return (node.type === "CallExpression" || node.type === "NewExpression") &&
                    node.callee.type === "Identifier" &&
                        node.callee.name === "Boolean";
        }

        /**
         * Checks whether the node is a logical expression and that the option is enabled
         * @param {ASTNode} node the node
         * @returns {boolean} if the node is a logical expression and option is enabled
         */
        function isLogicalContext(node) {
            return node.type === "LogicalExpression" &&
            (node.operator === "||" || node.operator === "&&") &&
            (context.options.length && context.options[0].enforceForLogicalOperands === true);

        }


        /**
         * Check if a node is in a context where its value would be coerced to a boolean at runtime.
         * @param {ASTNode} node The node
         * @returns {boolean} If it is in a boolean context
         */
        function isInBooleanContext(node) {
            return (
                (isBooleanFunctionOrConstructorCall(node.parent) &&
                node === node.parent.arguments[0]) ||

                (BOOLEAN_NODE_TYPES.indexOf(node.parent.type) !== -1 &&
                    node === node.parent.test) ||

                // !<bool>
                (node.parent.type === "UnaryExpression" &&
                    node.parent.operator === "!")
            );
        }

        /**
         * Checks whether the node is a context that should report an error
         * Acts recursively if it is in a logical context
         * @param {ASTNode} node the node
         * @returns {boolean} If the node is in one of the flagged contexts
         */
        function isInFlaggedContext(node) {
            if (node.parent.type === "ChainExpression") {
                return isInFlaggedContext(node.parent);
            }

            return isInBooleanContext(node) ||
            (isLogicalContext(node.parent) &&

            // For nested logical statements
            isInFlaggedContext(node.parent)
            );
        }


        /**
         * Check if a node has comments inside.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} `true` if it has comments inside.
         */
        function hasCommentsInside(node) {
            return Boolean(sourceCode.getCommentsInside(node).length);
        }

        /**
         * Checks if the given node is wrapped in grouping parentheses. Parentheses for constructs such as if() don't count.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} `true` if the node is parenthesized.
         * @private
         */
        function isParenthesized(node) {
            return eslintUtils.isParenthesized(1, node, sourceCode);
        }

        /**
         * Determines whether the given node needs to be parenthesized when replacing the previous node.
         * It assumes that `previousNode` is the node to be reported by this rule, so it has a limited list
         * of possible parent node types. By the same assumption, the node's role in a particular parent is already known.
         * For example, if the parent is `ConditionalExpression`, `previousNode` must be its `test` child.
         * @param {ASTNode} previousNode Previous node.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} `true` if the node needs to be parenthesized.
         */
        function needsParens(previousNode, node) {
            if (previousNode.parent.type === "ChainExpression") {
                return needsParens(previousNode.parent, node);
            }
            if (isParenthesized(previousNode)) {

                // parentheses around the previous node will stay, so there is no need for an additional pair
                return false;
            }

            // parent of the previous node will become parent of the replacement node
            const parent = previousNode.parent;

            switch (parent.type) {
                case "CallExpression":
                case "NewExpression":
                    return node.type === "SequenceExpression";
                case "IfStatement":
                case "DoWhileStatement":
                case "WhileStatement":
                case "ForStatement":
                    return false;
                case "ConditionalExpression":
                    return precedence(node) <= precedence(parent);
                case "UnaryExpression":
                    return precedence(node) < precedence(parent);
                case "LogicalExpression":
                    if (astUtils.isMixedLogicalAndCoalesceExpressions(node, parent)) {
                        return true;
                    }
                    if (previousNode === parent.left) {
                        return precedence(node) < precedence(parent);
                    }
                    return precedence(node) <= precedence(parent);

                /* istanbul ignore next */
                default:
                    throw new Error(`Unexpected parent type: ${parent.type}`);
            }
        }

        return {
            UnaryExpression(node) {
                const parent = node.parent;


                // Exit early if it's guaranteed not to match
                if (node.operator !== "!" ||
                          parent.type !== "UnaryExpression" ||
                          parent.operator !== "!") {
                    return;
                }


                if (isInFlaggedContext(parent)) {
                    context.report({
                        node: parent,
                        messageId: "unexpectedNegation",
                        fix(fixer) {
                            if (hasCommentsInside(parent)) {
                                return null;
                            }

                            if (needsParens(parent, node.argument)) {
                                return fixer.replaceText(parent, `(${sourceCode.getText(node.argument)})`);
                            }

                            let prefix = "";
                            const tokenBefore = sourceCode.getTokenBefore(parent);
                            const firstReplacementToken = sourceCode.getFirstToken(node.argument);

                            if (
                                tokenBefore &&
                                tokenBefore.range[1] === parent.range[0] &&
                                !astUtils.canTokensBeAdjacent(tokenBefore, firstReplacementToken)
                            ) {
                                prefix = " ";
                            }

                            return fixer.replaceText(parent, prefix + sourceCode.getText(node.argument));
                        }
                    });
                }
            },

            CallExpression(node) {
                if (node.callee.type !== "Identifier" || node.callee.name !== "Boolean") {
                    return;
                }

                if (isInFlaggedContext(node)) {
                    context.report({
                        node,
                        messageId: "unexpectedCall",
                        fix(fixer) {
                            const parent = node.parent;

                            if (node.arguments.length === 0) {
                                if (parent.type === "UnaryExpression" && parent.operator === "!") {

                                    /*
                                     * !Boolean() -> true
                                     */

                                    if (hasCommentsInside(parent)) {
                                        return null;
                                    }

                                    const replacement = "true";
                                    let prefix = "";
                                    const tokenBefore = sourceCode.getTokenBefore(parent);

                                    if (
                                        tokenBefore &&
                                        tokenBefore.range[1] === parent.range[0] &&
                                        !astUtils.canTokensBeAdjacent(tokenBefore, replacement)
                                    ) {
                                        prefix = " ";
                                    }

                                    return fixer.replaceText(parent, prefix + replacement);
                                }

                                /*
                                 * Boolean() -> false
                                 */

                                if (hasCommentsInside(node)) {
                                    return null;
                                }

                                return fixer.replaceText(node, "false");
                            }

                            if (node.arguments.length === 1) {
                                const argument = node.arguments[0];

                                if (argument.type === "SpreadElement" || hasCommentsInside(node)) {
                                    return null;
                                }

                                /*
                                 * Boolean(expression) -> expression
                                 */

                                if (needsParens(node, argument)) {
                                    return fixer.replaceText(node, `(${sourceCode.getText(argument)})`);
                                }

                                return fixer.replaceText(node, sourceCode.getText(argument));
                            }

                            // two or more arguments
                            return null;
                        }
                    });
                }
            }
        };

    }
};
