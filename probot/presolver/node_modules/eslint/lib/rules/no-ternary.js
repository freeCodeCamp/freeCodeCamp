/**
 * @fileoverview Rule to flag use of ternary operators.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow ternary operators",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {

            ConditionalExpression(node) {
                context.report({ node, message: "Ternary operator used." });
            }

        };

    }
};
