/**
 * @fileoverview A rule to disallow modifying variables of class declarations
 * @author Toru Nagashima
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
            description: "disallow reassigning class members",
            category: "ECMAScript 6",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-class-assign"
        },

        schema: [],

        messages: {
            class: "'{{name}}' is a class."
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
                context.report({ node: reference.identifier, messageId: "class", data: { name: reference.identifier.name } });

            });
        }

        /**
         * Finds and reports references that are non initializer and writable.
         * @param {ASTNode} node A ClassDeclaration/ClassExpression node to check.
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
