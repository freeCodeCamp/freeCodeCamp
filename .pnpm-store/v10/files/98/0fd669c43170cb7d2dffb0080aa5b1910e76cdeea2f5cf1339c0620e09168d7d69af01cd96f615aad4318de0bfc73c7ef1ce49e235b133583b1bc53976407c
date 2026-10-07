/**
 * @fileoverview Rule to flag when using new Function
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow `new` operators with the `Function` object",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-new-func"
        },

        schema: [],

        messages: {
            noFunctionConstructor: "The Function constructor is eval."
        }
    },

    create(context) {

        return {
            "Program:exit"() {
                const globalScope = context.getScope();
                const variable = globalScope.set.get("Function");

                if (variable && variable.defs.length === 0) {
                    variable.references.forEach(ref => {
                        const node = ref.identifier;
                        const { parent } = node;

                        if (
                            parent &&
                            (parent.type === "NewExpression" || parent.type === "CallExpression") &&
                            node === parent.callee
                        ) {
                            context.report({
                                node: parent,
                                messageId: "noFunctionConstructor"
                            });
                        }
                    });
                }
            }
        };

    }
};
