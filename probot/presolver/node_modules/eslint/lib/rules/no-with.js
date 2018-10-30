/**
 * @fileoverview Rule to flag use of with statement
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `with` statements",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {
            WithStatement(node) {
                context.report({ node, message: "Unexpected use of 'with' statement." });
            }
        };

    }
};
