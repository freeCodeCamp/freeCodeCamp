/**
 * @fileoverview Rule to flag when initializing octal literal
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
            description: "disallow octal literals",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-octal"
        },

        schema: [],

        messages: {
            noOcatal: "Octal literals should not be used."
        }
    },

    create(context) {

        return {

            Literal(node) {
                if (typeof node.value === "number" && /^0[0-9]/u.test(node.raw)) {
                    context.report({
                        node,
                        messageId: "noOcatal"
                    });
                }
            }
        };

    }
};
