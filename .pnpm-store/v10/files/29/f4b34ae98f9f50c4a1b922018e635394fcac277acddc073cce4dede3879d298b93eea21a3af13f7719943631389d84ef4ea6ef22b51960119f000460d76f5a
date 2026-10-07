/**
 * @fileoverview Rule to flag comparison where left part is the same as the right
 * part.
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow comparisons where both sides are exactly the same",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-self-compare"
        },

        schema: [],

        messages: {
            comparingToSelf: "Comparing to itself is potentially pointless."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Determines whether two nodes are composed of the same tokens.
         * @param {ASTNode} nodeA The first node
         * @param {ASTNode} nodeB The second node
         * @returns {boolean} true if the nodes have identical token representations
         */
        function hasSameTokens(nodeA, nodeB) {
            const tokensA = sourceCode.getTokens(nodeA);
            const tokensB = sourceCode.getTokens(nodeB);

            return tokensA.length === tokensB.length &&
                tokensA.every((token, index) => token.type === tokensB[index].type && token.value === tokensB[index].value);
        }

        return {

            BinaryExpression(node) {
                const operators = new Set(["===", "==", "!==", "!=", ">", "<", ">=", "<="]);

                if (operators.has(node.operator) && hasSameTokens(node.left, node.right)) {
                    context.report({ node, messageId: "comparingToSelf" });
                }
            }
        };

    }
};
