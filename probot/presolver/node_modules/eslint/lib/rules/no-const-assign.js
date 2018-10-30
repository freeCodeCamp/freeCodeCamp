/**
 * @fileoverview A rule to disallow modifying variables that are declared using `const`
 * @author Toru Nagashima
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow reassigning `const` variables",
            category: "ECMAScript 6",
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
                context.report({ node: reference.identifier, message: "'{{name}}' is constant.", data: { name: reference.identifier.name } });
            });
        }

        return {
            VariableDeclaration(node) {
                if (node.kind === "const") {
                    context.getDeclaredVariables(node).forEach(checkVariable);
                }
            }
        };

    }
};
