/**
 * @fileoverview A rule to disallow calls to the Object constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `Object` constructors",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create(context) {

        return {

            NewExpression(node) {
                if (node.callee.name === "Object") {
                    context.report({ node, message: "The object literal notation {} is preferrable." });
                }
            }
        };

    }
};
