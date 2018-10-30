/**
 * @fileoverview Rule to flag unsafe statements in finally block
 * @author Onur Temizkan
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SENTINEL_NODE_TYPE_RETURN_THROW = /^(?:Program|(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression)$/;
const SENTINEL_NODE_TYPE_BREAK = /^(?:Program|(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression|DoWhileStatement|WhileStatement|ForOfStatement|ForInStatement|ForStatement|SwitchStatement)$/;
const SENTINEL_NODE_TYPE_CONTINUE = /^(?:Program|(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression|DoWhileStatement|WhileStatement|ForOfStatement|ForInStatement|ForStatement)$/;


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow control flow statements in `finally` blocks",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },
    create(context) {

        /**
         * Checks if the node is the finalizer of a TryStatement
         *
         * @param {ASTNode} node - node to check.
         * @returns {boolean} - true if the node is the finalizer of a TryStatement
         */
        function isFinallyBlock(node) {
            return node.parent.type === "TryStatement" && node.parent.finalizer === node;
        }

        /**
         * Climbs up the tree if the node is not a sentinel node
         *
         * @param {ASTNode} node - node to check.
         * @param {string} label - label of the break or continue statement
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

            while (node && !sentinelNodeType.test(node.type)) {
                if (node.parent.label && label && (node.parent.label.name === label.name)) {
                    labelInside = true;
                }
                if (isFinallyBlock(node)) {
                    if (label && labelInside) {
                        return false;
                    }
                    return true;
                }
                node = node.parent;
            }
            return false;
        }

        /**
         * Checks whether the possibly-unsafe statement is inside a finally block.
         *
         * @param {ASTNode} node - node to check.
         * @returns {void}
         */
        function check(node) {
            if (isInFinallyBlock(node, node.label)) {
                context.report({
                    message: "Unsafe usage of {{nodeType}}.",
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
