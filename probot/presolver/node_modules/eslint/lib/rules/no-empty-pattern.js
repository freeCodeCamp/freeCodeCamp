/**
 * @fileoverview Rule to disallow an empty pattern
 * @author Alberto Rodríguez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow empty destructuring patterns",
            category: "Best Practices",
            recommended: true
        },

        schema: []
    },

    create(context) {
        return {
            ObjectPattern(node) {
                if (node.properties.length === 0) {
                    context.report({ node, message: "Unexpected empty object pattern." });
                }
            },
            ArrayPattern(node) {
                if (node.elements.length === 0) {
                    context.report({ node, message: "Unexpected empty array pattern." });
                }
            }
        };
    }
};
