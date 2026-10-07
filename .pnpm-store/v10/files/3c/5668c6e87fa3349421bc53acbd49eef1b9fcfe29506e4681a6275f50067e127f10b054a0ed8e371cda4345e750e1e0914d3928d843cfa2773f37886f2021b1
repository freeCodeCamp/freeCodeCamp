/**
 * @fileoverview Rule to flag blocks with no reason to exist
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary nested blocks",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-lone-blocks"
        },

        schema: [],

        messages: {
            redundantBlock: "Block is redundant.",
            redundantNestedBlock: "Nested block is redundant."
        }
    },

    create(context) {

        // A stack of lone blocks to be checked for block-level bindings
        const loneBlocks = [];
        let ruleDef;

        /**
         * Reports a node as invalid.
         * @param {ASTNode} node The node to be reported.
         * @returns {void}
         */
        function report(node) {
            const messageId = node.parent.type === "BlockStatement" ? "redundantNestedBlock" : "redundantBlock";

            context.report({
                node,
                messageId
            });
        }

        /**
         * Checks for any occurrence of a BlockStatement in a place where lists of statements can appear
         * @param {ASTNode} node The node to check
         * @returns {boolean} True if the node is a lone block.
         */
        function isLoneBlock(node) {
            return node.parent.type === "BlockStatement" ||
                node.parent.type === "Program" ||

                // Don't report blocks in switch cases if the block is the only statement of the case.
                node.parent.type === "SwitchCase" && !(node.parent.consequent[0] === node && node.parent.consequent.length === 1);
        }

        /**
         * Checks the enclosing block of the current node for block-level bindings,
         * and "marks it" as valid if any.
         * @returns {void}
         */
        function markLoneBlock() {
            if (loneBlocks.length === 0) {
                return;
            }

            const block = context.getAncestors().pop();

            if (loneBlocks[loneBlocks.length - 1] === block) {
                loneBlocks.pop();
            }
        }

        // Default rule definition: report all lone blocks
        ruleDef = {
            BlockStatement(node) {
                if (isLoneBlock(node)) {
                    report(node);
                }
            }
        };

        // ES6: report blocks without block-level bindings, or that's only child of another block
        if (context.parserOptions.ecmaVersion >= 6) {
            ruleDef = {
                BlockStatement(node) {
                    if (isLoneBlock(node)) {
                        loneBlocks.push(node);
                    }
                },
                "BlockStatement:exit"(node) {
                    if (loneBlocks.length > 0 && loneBlocks[loneBlocks.length - 1] === node) {
                        loneBlocks.pop();
                        report(node);
                    } else if (
                        node.parent.type === "BlockStatement" &&
                        node.parent.body.length === 1
                    ) {
                        report(node);
                    }
                }
            };

            ruleDef.VariableDeclaration = function(node) {
                if (node.kind === "let" || node.kind === "const") {
                    markLoneBlock();
                }
            };

            ruleDef.FunctionDeclaration = function() {
                if (context.getScope().isStrict) {
                    markLoneBlock();
                }
            };

            ruleDef.ClassDeclaration = markLoneBlock;
        }

        return ruleDef;
    }
};
