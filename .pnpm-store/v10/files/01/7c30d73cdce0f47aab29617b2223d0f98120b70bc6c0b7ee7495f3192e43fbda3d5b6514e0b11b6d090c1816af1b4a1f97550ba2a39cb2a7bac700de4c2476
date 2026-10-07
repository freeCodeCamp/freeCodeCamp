/**
 * @fileoverview A rule to disallow calls to the Object constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
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
            description: "disallow `Object` constructors",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-new-object"
        },

        schema: [],

        messages: {
            preferLiteral: "The object literal notation {} is preferrable."
        }
    },

    create(context) {
        return {
            NewExpression(node) {
                const variable = astUtils.getVariableByName(
                    context.getScope(),
                    node.callee.name
                );

                if (variable && variable.identifiers.length > 0) {
                    return;
                }

                if (node.callee.name === "Object") {
                    context.report({
                        node,
                        messageId: "preferLiteral"
                    });
                }
            }
        };
    }
};
