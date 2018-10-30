/**
 * @fileoverview Rule to flag nested ternary expressions
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow nested ternary expressions",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {
            ConditionalExpression(node) {
                if (node.alternate.type === "ConditionalExpression" ||
                        node.consequent.type === "ConditionalExpression") {
                    context.report({ node, message: "Do not nest ternary expressions." });
                }
            }
        };
    }
};
