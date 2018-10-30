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
        docs: {
            description: "disallow string concatenation with `__dirname` and `__filename`",
            category: "Node.js and CommonJS",
            recommended: false
        },

        schema: []
    },

    create(context) {

        const MATCHER = /^__(?:dir|file)name$/;

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

                    context.report({ node, message: "Use path.join() or path.resolve() instead of + to create paths." });
                }
            }

        };

    }
};
