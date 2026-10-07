/**
 * @fileoverview Rule to flag when using constructor for wrapper objects
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow `new` operators with the `String`, `Number`, and `Boolean` objects",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-new-wrappers"
        },

        schema: [],

        messages: {
            noConstructor: "Do not use {{fn}} as a constructor."
        }
    },

    create(context) {

        return {

            NewExpression(node) {
                const wrapperObjects = ["String", "Number", "Boolean"];

                if (wrapperObjects.indexOf(node.callee.name) > -1) {
                    context.report({
                        node,
                        messageId: "noConstructor",
                        data: { fn: node.callee.name }
                    });
                }
            }
        };

    }
};
