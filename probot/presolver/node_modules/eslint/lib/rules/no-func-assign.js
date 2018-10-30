/**
 * @fileoverview Rule to flag use of function declaration identifiers as variables.
 * @author Ian Christian Myers
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow reassigning `function` declarations",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {

        /**
         * Reports a reference if is non initializer and writable.
         * @param {References} references - Collection of reference to check.
         * @returns {void}
         */
        function checkReference(references) {
            astUtils.getModifyingReferences(references).forEach(reference => {
                context.report({ node: reference.identifier, message: "'{{name}}' is a function.", data: { name: reference.identifier.name } });
            });
        }

        /**
         * Finds and reports references that are non initializer and writable.
         * @param {Variable} variable - A variable to check.
         * @returns {void}
         */
        function checkVariable(variable) {
            if (variable.defs[0].type === "FunctionName") {
                checkReference(variable.references);
            }
        }

        /**
         * Checks parameters of a given function node.
         * @param {ASTNode} node - A function node to check.
         * @returns {void}
         */
        function checkForFunction(node) {
            context.getDeclaredVariables(node).forEach(checkVariable);
        }

        return {
            FunctionDeclaration: checkForFunction,
            FunctionExpression: checkForFunction
        };
    }
};
