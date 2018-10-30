/**
 * @fileoverview Rule to flag when initializing octal literal
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow octal literals",
            category: "Best Practices",
            recommended: true
        },

        schema: []
    },

    create(context) {

        return {

            Literal(node) {
                if (typeof node.value === "number" && /^0[0-7]/.test(node.raw)) {
                    context.report({ node, message: "Octal literals should not be used." });
                }
            }
        };

    }
};
