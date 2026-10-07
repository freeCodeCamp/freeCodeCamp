/**
 * @fileoverview Rule to flag assignment of the exception parameter
 * @author Stephen Murray <spmurrayzzz>
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow reassigning exceptions in `catch` clauses",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-ex-assign"
        },

        schema: [],

        messages: {
            unexpected: "Do not assign to the exception parameter."
        }
    },

    create(context) {

        /**
         * Finds and reports references that are non initializer and writable.
         * @param {Variable} variable A variable to check.
         * @returns {void}
         */
        function checkVariable(variable) {
            astUtils.getModifyingReferences(variable.references).forEach(reference => {
                context.report({ node: reference.identifier, messageId: "unexpected" });
            });
        }

        return {
            CatchClause(node) {
                context.getDeclaredVariables(node).forEach(checkVariable);
            }
        };

    }
};
