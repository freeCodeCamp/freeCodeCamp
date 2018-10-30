/**
 * @fileoverview Disallow the use of process.exit()
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow the use of `process.exit()`",
            category: "Node.js and CommonJS",
            recommended: false
        },

        schema: []
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            "CallExpression > MemberExpression.callee[object.name = 'process'][property.name = 'exit']"(node) {
                context.report({ node: node.parent, message: "Don't use process.exit(); throw an error instead." });
            }
        };

    }
};
