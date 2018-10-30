/**
 * @fileoverview Rule to flag variable leak in CatchClauses in IE 8 and earlier
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `catch` clause parameters from shadowing variables in the outer scope",
            category: "Variables",
            recommended: false
        },

        schema: []
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

            CatchClause(node) {
                let scope = context.getScope();

                // When blockBindings is enabled, CatchClause creates its own scope
                // so start from one upper scope to exclude the current node
                if (scope.block === node) {
                    scope = scope.upper;
                }

                if (paramIsShadowing(scope, node.param.name)) {
                    context.report({ node, message: "Value of '{{name}}' may be overwritten in IE 8 and earlier.", data: { name: node.param.name } });
                }
            }
        };

    }
};
