/**
 * @fileoverview Rule to flag for-in loops without if statements inside
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require `for-in` loops to include an `if` statement",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {

            ForInStatement(node) {

                /*
                 * If the for-in statement has {}, then the real body is the body
                 * of the BlockStatement. Otherwise, just use body as provided.
                 */
                const body = node.body.type === "BlockStatement" ? node.body.body[0] : node.body;

                if (body && body.type !== "IfStatement") {
                    context.report({ node, message: "The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype." });
                }
            }
        };

    }
};
