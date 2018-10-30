/**
 * @fileoverview Rule to flag assignment of the exception parameter
 * @author Stephen Murray <spmurrayzzz>
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow reassigning exceptions in `catch` clauses",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {

        /**
         * Finds and reports references that are non initializer and writable.
         * @param {Variable} variable - A variable to check.
         * @returns {void}
         */
        function checkVariable(variable) {
            astUtils.getModifyingReferences(variable.references).forEach(reference => {
                context.report({ node: reference.identifier, message: "Do not assign to the exception parameter." });
            });
        }

        return {
            CatchClause(node) {
                context.getDeclaredVariables(node).forEach(checkVariable);
            }
        };

    }
};
