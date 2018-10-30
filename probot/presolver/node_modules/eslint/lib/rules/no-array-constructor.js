/**
 * @fileoverview Disallow construction of dense arrays using the Array constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `Array` constructors",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create(context) {

        /**
         * Disallow construction of dense arrays using the Array constructor
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function check(node) {
            if (
                node.arguments.length !== 1 &&
                node.callee.type === "Identifier" &&
                node.callee.name === "Array"
            ) {
                context.report({ node, message: "The array literal notation [] is preferrable." });
            }
        }

        return {
            CallExpression: check,
            NewExpression: check
        };

    }
};
