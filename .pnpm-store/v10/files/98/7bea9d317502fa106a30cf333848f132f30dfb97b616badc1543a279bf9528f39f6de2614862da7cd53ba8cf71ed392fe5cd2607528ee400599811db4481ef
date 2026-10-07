/**
 * @fileoverview disallow use of the Buffer() constructor
 * @author Teddy Katz
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "problem",

        docs: {
            description: "disallow use of the `Buffer()` constructor",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-buffer-constructor"
        },

        schema: [],

        messages: {
            deprecated: "{{expr}} is deprecated. Use Buffer.from(), Buffer.alloc(), or Buffer.allocUnsafe() instead."
        }
    },

    create(context) {

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "CallExpression[callee.name='Buffer'], NewExpression[callee.name='Buffer']"(node) {
                context.report({
                    node,
                    messageId: "deprecated",
                    data: { expr: node.type === "CallExpression" ? "Buffer()" : "new Buffer()" }
                });
            }
        };
    }
};
