/**
 * @fileoverview Rule to flag labels that are the same as an identifier
 * @author Ian Christian Myers
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
            description: "disallow labels that share a name with a variable",
            category: "Variables",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-label-var"
        },

        schema: [],

        messages: {
            identifierClashWithLabel: "Found identifier with same name as label."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Check if the identifier is present inside current scope
         * @param {Object} scope current scope
         * @param {string} name To evaluate
         * @returns {boolean} True if its present
         * @private
         */
        function findIdentifier(scope, name) {
            return astUtils.getVariableByName(scope, name) !== null;
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {

            LabeledStatement(node) {

                // Fetch the innermost scope.
                const scope = context.getScope();

                /*
                 * Recursively find the identifier walking up the scope, starting
                 * with the innermost scope.
                 */
                if (findIdentifier(scope, node.label.name)) {
                    context.report({
                        node,
                        messageId: "identifierClashWithLabel"
                    });
                }
            }

        };

    }
};
