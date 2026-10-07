/**
 * @fileoverview Warn when using template string syntax in regular strings
 * @author Jeroen Engels
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow template literal placeholder syntax in regular strings",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-template-curly-in-string"
        },

        schema: [],

        messages: {
            unexpectedTemplateExpression: "Unexpected template string expression."
        }
    },

    create(context) {
        const regex = /\$\{[^}]+\}/u;

        return {
            Literal(node) {
                if (typeof node.value === "string" && regex.test(node.value)) {
                    context.report({
                        node,
                        messageId: "unexpectedTemplateExpression"
                    });
                }
            }
        };

    }
};
