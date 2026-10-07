/**
 * @fileoverview Rule to flag nested ternary expressions
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow nested ternary expressions",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-nested-ternary"
        },

        schema: [],

        messages: {
            noNestedTernary: "Do not nest ternary expressions."
        }
    },

    create(context) {

        return {
            ConditionalExpression(node) {
                if (node.alternate.type === "ConditionalExpression" ||
                        node.consequent.type === "ConditionalExpression") {
                    context.report({
                        node,
                        messageId: "noNestedTernary"
                    });
                }
            }
        };
    }
};
