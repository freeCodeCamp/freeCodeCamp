/**
 * @fileoverview Disallow shadowing of NaN, undefined, and Infinity (ES5 section 15.1.1)
 * @author Michael Ficarra
 */
"use strict";

/**
 * Determines if a variable safely shadows undefined.
 * This is the case when a variable named `undefined` is never assigned to a value (i.e. it always shares the same value
 * as the global).
 * @param {eslintScope.Variable} variable The variable to check
 * @returns {boolean} true if this variable safely shadows `undefined`
 */
function safelyShadowsUndefined(variable) {
    return variable.name === "undefined" &&
        variable.references.every(ref => !ref.isWrite()) &&
        variable.defs.every(def => def.node.type === "VariableDeclarator" && def.node.init === null);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow identifiers from shadowing restricted names",
            category: "Variables",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-shadow-restricted-names"
        },

        schema: [],

        messages: {
            shadowingRestrictedName: "Shadowing of global property '{{name}}'."
        }
    },

    create(context) {


        const RESTRICTED = new Set(["undefined", "NaN", "Infinity", "arguments", "eval"]);

        return {
            "VariableDeclaration, :function, CatchClause"(node) {
                for (const variable of context.getDeclaredVariables(node)) {
                    if (variable.defs.length > 0 && RESTRICTED.has(variable.name) && !safelyShadowsUndefined(variable)) {
                        context.report({
                            node: variable.defs[0].name,
                            messageId: "shadowingRestrictedName",
                            data: {
                                name: variable.name
                            }
                        });
                    }
                }
            }
        };

    }
};
