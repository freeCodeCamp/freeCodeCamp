/**
 * @fileoverview A rule to disallow modifying variables of class declarations
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
            description: "disallow reassigning class members",
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
                context.report({ node: reference.identifier, message: "'{{name}}' is a class.", data: { name: reference.identifier.name } });

            });
        }

        /**
         * Finds and reports references that are non initializer and writable.
         * @param {ASTNode} node - A ClassDeclaration/ClassExpression node to check.
         * @returns {void}
         */
        function checkForClass(node) {
            context.getDeclaredVariables(node).forEach(checkVariable);
        }

        return {
            ClassDeclaration: checkForClass,
            ClassExpression: checkForClass
        };

    }
};
