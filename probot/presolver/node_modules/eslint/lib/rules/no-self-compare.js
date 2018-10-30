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
        docs: {
            description: "disallow comparisons where both sides are exactly the same",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {

            BinaryExpression(node) {
                const operators = ["===", "==", "!==", "!=", ">", "<", ">=", "<="];

                if (operators.indexOf(node.operator) > -1 &&
                    (node.left.type === "Identifier" && node.right.type === "Identifier" && node.left.name === node.right.name ||
                    node.left.type === "Literal" && node.right.type === "Literal" && node.left.value === node.right.value)) {
                    context.report({ node, message: "Comparing to itself is potentially pointless." });
                }
            }
        };

    }
};
