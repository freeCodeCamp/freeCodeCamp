/**
 * @fileoverview Rule to flag comparisons to null without a type-checking
 * operator.
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
            description: "disallow `null` comparisons without type-checking operators",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-eq-null"
        },

        schema: [],

        messages: {
            unexpected: "Use '===' to compare with null."
        }
    },

    create(context) {

        return {

            BinaryExpression(node) {
                const badOperator = node.operator === "==" || node.operator === "!=";

                if (node.right.type === "Literal" && node.right.raw === "null" && badOperator ||
                        node.left.type === "Literal" && node.left.raw === "null" && badOperator) {
                    context.report({ node, messageId: "unexpected" });
                }
            }
        };

    }
};
