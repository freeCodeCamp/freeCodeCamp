/**
 * @fileoverview Rule to flag use of an object property of the global object (Math and JSON) as a function
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow calling global object properties as functions",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {

        return {
            CallExpression(node) {

                if (node.callee.type === "Identifier") {
                    const name = node.callee.name;

                    if (name === "Math" || name === "JSON" || name === "Reflect") {
                        context.report({ node, message: "'{{name}}' is not a function.", data: { name } });
                    }
                }
            }
        };

    }
};
