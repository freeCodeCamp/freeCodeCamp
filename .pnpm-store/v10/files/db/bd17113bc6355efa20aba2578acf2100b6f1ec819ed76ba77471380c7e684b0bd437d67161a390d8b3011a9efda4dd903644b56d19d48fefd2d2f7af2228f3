/**
 * @fileoverview Rule to flag unsafe statements in finally block
 * @author Onur Temizkan
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SENTINEL_NODE_TYPE_RETURN_THROW = /^(?:Program|(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression)$/u;
const SENTINEL_NODE_TYPE_BREAK = /^(?:Program|(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression|DoWhileStatement|WhileStatement|ForOfStatement|ForInStatement|ForStatement|SwitchStatement)$/u;
const SENTINEL_NODE_TYPE_CONTINUE = /^(?:Program|(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression|DoWhileStatement|WhileStatement|ForOfStatement|ForInStatement|ForStatement)$/u;


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow control flow statements in `finally` blocks",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-unsafe-finally"
        },

        schema: [],

        messages: {
            unsafeUsage: "Unsafe usage of {{nodeType}}."
        }
    },
    create(context) {

        /**
         * Checks if the node is the finalizer of a TryStatement
         * @param {ASTNode} node node to check.
         * @returns {boolean} - true if the node is the finalizer of a TryStatement
         */
        function isFinallyBlock(node) {
            return node.parent.type === "TryStatement" && node.parent.finalizer === node;
        }

        /**
         * Climbs up the tree if the node is not a sentinel node
         * @param {ASTNode} node node to check.
         * @param {string} label label of the break or continue statement
         * @returns {boolean} - return whether the node is a finally block or a sentinel node
         */
        function isInFinallyBlock(node, label) {
            let labelInside = false;
            let sentinelNodeType;

            if (node.type === "BreakStatement" && !node.label) {
                sentinelNodeType = SENTINEL_NODE_TYPE_BREAK;
            } else if (node.type === "ContinueStatement") {
                sentinelNodeType = SENTINEL_NODE_TYPE_CONTINUE;
            } else {
                sentinelNodeType = SENTINEL_NODE_TYPE_RETURN_THROW;
            }

            for (
                let currentNode = node;
                currentNode && !sentinelNodeType.test(currentNode.type);
                currentNode = currentNode.parent
            ) {
                if (currentNode.parent.label && label && (currentNode.parent.label.name === label.name)) {
                    labelInside = true;
                }
                if (isFinallyBlock(currentNode)) {
                    if (label && labelInside) {
                        return false;
                    }
                    return true;
                }
            }
            return false;
        }

        /**
         * Checks whether the possibly-unsafe statement is inside a finally block.
         * @param {ASTNode} node node to check.
         * @returns {void}
         */
        function check(node) {
            if (isInFinallyBlock(node, node.label)) {
                context.report({
                    messageId: "unsafeUsage",
                    data: {
                        nodeType: node.type
                    },
                    node,
                    line: node.loc.line,
                    column: node.loc.column
                });
            }
        }

        return {
            ReturnStatement: check,
            ThrowStatement: check,
            BreakStatement: check,
            ContinueStatement: check
        };
    }
};
