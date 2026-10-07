/**
 * @fileoverview Disallow string concatenation when using __dirname and __filename
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "disallow string concatenation with `__dirname` and `__filename`",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-path-concat"
        },

        schema: [],

        messages: {
            usePathFunctions: "Use path.join() or path.resolve() instead of + to create paths."
        }
    },

    create(context) {

        const MATCHER = /^__(?:dir|file)name$/u;

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            BinaryExpression(node) {

                const left = node.left,
                    right = node.right;

                if (node.operator === "+" &&
                        ((left.type === "Identifier" && MATCHER.test(left.name)) ||
                        (right.type === "Identifier" && MATCHER.test(right.name)))
                ) {

                    context.report({
                        node,
                        messageId: "usePathFunctions"
                    });
                }
            }

        };

    }
};
