/**
 * @fileoverview A rule to disallow negated left operands of the `in` operator
 * @author Michael Ficarra
 * @deprecated in ESLint v3.3.0
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow negating the left operand in `in` expressions",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-negated-in-lhs"
        },

        replacedBy: ["no-unsafe-negation"],

        deprecated: true,
        schema: [],

        messages: {
            negatedLHS: "The 'in' expression's left operand is negated."
        }
    },

    create(context) {

        return {

            BinaryExpression(node) {
                if (node.operator === "in" && node.left.type === "UnaryExpression" && node.left.operator === "!") {
                    context.report({ node, messageId: "negatedLHS" });
                }
            }
        };

    }
};
