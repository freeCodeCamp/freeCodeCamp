/**
 * @fileoverview Rule to flag use of with statement
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow `with` statements",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-with"
        },

        schema: [],

        messages: {
            unexpectedWith: "Unexpected use of 'with' statement."
        }
    },

    create(context) {

        return {
            WithStatement(node) {
                context.report({ node, messageId: "unexpectedWith" });
            }
        };

    }
};
