/**
 * @fileoverview Rule to flag when deleting variables
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow deleting variables",
            category: "Variables",
            recommended: true
        },

        schema: []
    },

    create(context) {

        return {

            UnaryExpression(node) {
                if (node.operator === "delete" && node.argument.type === "Identifier") {
                    context.report({ node, message: "Variables should not be deleted." });
                }
            }
        };

    }
};
