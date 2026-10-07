/**
 * @fileoverview disallow using an async function as a Promise executor
 * @author Teddy Katz
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow using an async function as a Promise executor",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-async-promise-executor"
        },

        fixable: null,
        schema: [],
        messages: {
            async: "Promise executor functions should not be async."
        }
    },

    create(context) {
        return {
            "NewExpression[callee.name='Promise'][arguments.0.async=true]"(node) {
                context.report({
                    node: context.getSourceCode().getFirstToken(node.arguments[0], token => token.value === "async"),
                    messageId: "async"
                });
            }
        };
    }
};
