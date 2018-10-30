/**
 * @fileoverview Rule to flag comparisons to the value NaN
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require calls to `isNaN()` when checking for `NaN`",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {

        return {
            BinaryExpression(node) {
                if (/^(?:[<>]|[!=]=)=?$/.test(node.operator) && (node.left.name === "NaN" || node.right.name === "NaN")) {
                    context.report({ node, message: "Use the isNaN function to compare with NaN." });
                }
            }
        };

    }
};
