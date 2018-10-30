/**
 * @fileoverview Rule to check use of chained assignment expressions
 * @author Stewart Rand
 */

"use strict";


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow use of chained assignment expressions",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: []
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            AssignmentExpression(node) {
                if (["AssignmentExpression", "VariableDeclarator"].indexOf(node.parent.type) !== -1) {
                    context.report({
                        node,
                        message: "Unexpected chained assignment."
                    });
                }
            }
        };

    }
};
