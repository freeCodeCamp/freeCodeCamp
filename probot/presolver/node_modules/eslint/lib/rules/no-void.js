/**
 * @fileoverview Rule to disallow use of void operator.
 * @author Mike Sidorov
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `void` operators",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            UnaryExpression(node) {
                if (node.operator === "void") {
                    context.report({ node, message: "Expected 'undefined' and instead saw 'void'." });
                }
            }
        };

    }
};
