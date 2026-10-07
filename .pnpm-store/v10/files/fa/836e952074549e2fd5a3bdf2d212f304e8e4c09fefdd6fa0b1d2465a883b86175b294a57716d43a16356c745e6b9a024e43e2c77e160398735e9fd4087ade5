/**
 * @fileoverview Rule to flag variable leak in CatchClauses in IE 8 and earlier
 * @author Ian Christian Myers
 * @deprecated in ESLint v5.1.0
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow `catch` clause parameters from shadowing variables in the outer scope",
            category: "Variables",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-catch-shadow"
        },

        replacedBy: ["no-shadow"],

        deprecated: true,
        schema: [],

        messages: {
            mutable: "Value of '{{name}}' may be overwritten in IE 8 and earlier."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Check if the parameters are been shadowed
         * @param {Object} scope current scope
         * @param {string} name parameter name
         * @returns {boolean} True is its been shadowed
         */
        function paramIsShadowing(scope, name) {
            return astUtils.getVariableByName(scope, name) !== null;
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {

            "CatchClause[param!=null]"(node) {
                let scope = context.getScope();

                /*
                 * When ecmaVersion >= 6, CatchClause creates its own scope
                 * so start from one upper scope to exclude the current node
                 */
                if (scope.block === node) {
                    scope = scope.upper;
                }

                if (paramIsShadowing(scope, node.param.name)) {
                    context.report({ node, messageId: "mutable", data: { name: node.param.name } });
                }
            }
        };

    }
};
