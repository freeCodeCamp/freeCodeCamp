/**
 * @fileoverview Rule to disallow an empty pattern
 * @author Alberto Rodríguez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow empty destructuring patterns",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-empty-pattern"
        },

        schema: [],

        messages: {
            unexpected: "Unexpected empty {{type}} pattern."
        }
    },

    create(context) {
        return {
            ObjectPattern(node) {
                if (node.properties.length === 0) {
                    context.report({ node, messageId: "unexpected", data: { type: "object" } });
                }
            },
            ArrayPattern(node) {
                if (node.elements.length === 0) {
                    context.report({ node, messageId: "unexpected", data: { type: "array" } });
                }
            }
        };
    }
};
