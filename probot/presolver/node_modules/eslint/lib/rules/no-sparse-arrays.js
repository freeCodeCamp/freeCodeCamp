/**
 * @fileoverview Disallow sparse arrays
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow sparse arrays",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {


        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            ArrayExpression(node) {

                const emptySpot = node.elements.indexOf(null) > -1;

                if (emptySpot) {
                    context.report({ node, message: "Unexpected comma in middle of array." });
                }
            }

        };

    }
};
