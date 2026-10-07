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
        type: "problem",

        docs: {
            description: "disallow `new` operators with the `Symbol` object",
            category: "ECMAScript 6",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-new-symbol"
        },

        schema: [],

        messages: {
            noNewSymbol: "`Symbol` cannot be called as a constructor."
        }
    },

    create(context) {

        return {
            "Program:exit"() {
                const globalScope = context.getScope();
                const variable = globalScope.set.get("Symbol");

                if (variable && variable.defs.length === 0) {
                    variable.references.forEach(ref => {
                        const node = ref.identifier;
                        const parent = node.parent;

                        if (parent && parent.type === "NewExpression" && parent.callee === node) {
                            context.report({
                                node,
                                messageId: "noNewSymbol"
                            });
                        }
                    });
                }
            }
        };

    }
};
