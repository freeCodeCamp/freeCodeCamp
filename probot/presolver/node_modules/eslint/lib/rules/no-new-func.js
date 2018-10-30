/**
 * @fileoverview Rule to flag when using new Function
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `new` operators with the `Function` object",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Reports a node.
         * @param {ASTNode} node The node to report
         * @returns {void}
         * @private
         */
        function report(node) {
            context.report({ node, message: "The Function constructor is eval." });
        }

        return {
            "NewExpression[callee.name = 'Function']": report,
            "CallExpression[callee.name = 'Function']": report
        };

    }
};
