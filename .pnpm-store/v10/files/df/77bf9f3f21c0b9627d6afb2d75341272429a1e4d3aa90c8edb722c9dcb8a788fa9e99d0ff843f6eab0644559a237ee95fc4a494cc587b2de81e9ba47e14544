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
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "disallow the use of `process.exit()`",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-process-exit"
        },

        schema: [],

        messages: {
            noProcessExit: "Don't use process.exit(); throw an error instead."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            "CallExpression > MemberExpression.callee[object.name = 'process'][property.name = 'exit']"(node) {
                context.report({ node: node.parent, messageId: "noProcessExit" });
            }
        };

    }
};
