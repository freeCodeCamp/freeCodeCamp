/**
 * @fileoverview Rule to disallow use of the new operator with the `Symbol` object
 * @author Alberto Rodríguez
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `new` operators with the `Symbol` object",
            category: "ECMAScript 6",
            recommended: true
        },

        schema: []
    },

    create(context) {

        return {
            "Program:exit"() {
                const globalScope = context.getScope();
                const variable = globalScope.set.get("Symbol");

                if (variable && variable.defs.length === 0) {
                    variable.references.forEach(ref => {
                        const node = ref.identifier;

                        if (node.parent && node.parent.type === "NewExpression") {
                            context.report({ node, message: "`Symbol` cannot be called as a constructor." });
                        }
                    });
                }
            }
        };

    }
};
