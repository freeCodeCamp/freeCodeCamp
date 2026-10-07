/**
 * @fileoverview Rule to flag statements with function invocation preceded by
 * "new" and not part of assignment
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
            description: "disallow `new` operators outside of assignments or comparisons",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-new"
        },

        schema: [],

        messages: {
            noNewStatement: "Do not use 'new' for side effects."
        }
    },

    create(context) {

        return {
            "ExpressionStatement > NewExpression"(node) {
                context.report({
                    node: node.parent,
                    messageId: "noNewStatement"
                });
            }
        };

    }
};
