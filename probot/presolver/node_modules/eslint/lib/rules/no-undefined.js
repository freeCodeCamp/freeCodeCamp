/**
 * @fileoverview Rule to flag references to the undefined variable.
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow the use of `undefined` as an identifier",
            category: "Variables",
            recommended: false
        },

        schema: []
    },

    create(context) {

        /**
         * Report an invalid "undefined" identifier node.
         * @param {ASTNode} node The node to report.
         * @returns {void}
         */
        function report(node) {
            context.report({
                node,
                message: "Unexpected use of undefined."
            });
        }

        /**
         * Checks the given scope for references to `undefined` and reports
         * all references found.
         * @param {escope.Scope} scope The scope to check.
         * @returns {void}
         */
        function checkScope(scope) {
            const undefinedVar = scope.set.get("undefined");

            if (!undefinedVar) {
                return;
            }

            const references = undefinedVar.references;

            const defs = undefinedVar.defs;

            // Report non-initializing references (those are covered in defs below)
            references
                .filter(ref => !ref.init)
                .forEach(ref => report(ref.identifier));

            defs.forEach(def => report(def.name));
        }

        return {
            "Program:exit"() {
                const globalScope = context.getScope();

                const stack = [globalScope];

                while (stack.length) {
                    const scope = stack.pop();

                    stack.push.apply(stack, scope.childScopes);
                    checkScope(scope);
                }
            }
        };

    }
};
