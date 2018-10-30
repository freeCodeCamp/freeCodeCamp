/**
 * @fileoverview Restrict usage of specified globals.
 * @author Benoît Zugmeyer
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow specified global variables",
            category: "Variables",
            recommended: false
        },

        schema: {
            type: "array",
            items: {
                type: "string"
            },
            uniqueItems: true
        }
    },

    create(context) {
        const restrictedGlobals = context.options;

        // if no globals are restricted we don't need to check
        if (restrictedGlobals.length === 0) {
            return {};
        }

        /**
         * Report a variable to be used as a restricted global.
         * @param {Reference} reference the variable reference
         * @returns {void}
         * @private
         */
        function reportReference(reference) {
            context.report({ node: reference.identifier, message: "Unexpected use of '{{name}}'.", data: {
                name: reference.identifier.name
            } });
        }

        /**
         * Check if the given name is a restricted global name.
         * @param {string} name name of a variable
         * @returns {boolean} whether the variable is a restricted global or not
         * @private
         */
        function isRestricted(name) {
            return restrictedGlobals.indexOf(name) >= 0;
        }

        return {
            Program() {
                const scope = context.getScope();

                // Report variables declared elsewhere (ex: variables defined as "global" by eslint)
                scope.variables.forEach(variable => {
                    if (!variable.defs.length && isRestricted(variable.name)) {
                        variable.references.forEach(reportReference);
                    }
                });

                // Report variables not declared at all
                scope.through.forEach(reference => {
                    if (isRestricted(reference.identifier.name)) {
                        reportReference(reference);
                    }
                });

            }
        };
    }
};
