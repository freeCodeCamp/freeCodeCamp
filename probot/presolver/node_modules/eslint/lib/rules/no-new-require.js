/**
 * @fileoverview Rule to disallow use of new operator with the `require` function
 * @author Wil Moore III
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `new` operators with calls to `require`",
            category: "Node.js and CommonJS",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {

            NewExpression(node) {
                if (node.callee.type === "Identifier" && node.callee.name === "require") {
                    context.report({ node, message: "Unexpected use of new with require." });
                }
            }
        };

    }
};
