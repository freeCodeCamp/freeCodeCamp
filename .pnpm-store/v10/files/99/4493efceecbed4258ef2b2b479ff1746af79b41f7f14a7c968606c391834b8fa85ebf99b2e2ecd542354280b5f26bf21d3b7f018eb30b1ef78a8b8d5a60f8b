/**
 * @fileoverview Rule to enforce description with the `Symbol` object
 * @author Jarek Rencz
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
            description: "require symbol descriptions",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/symbol-description"
        },
        fixable: null,
        schema: [],
        messages: {
            expected: "Expected Symbol to have a description."
        }
    },

    create(context) {

        /**
         * Reports if node does not conform the rule in case rule is set to
         * report missing description
         * @param {ASTNode} node A CallExpression node to check.
         * @returns {void}
         */
        function checkArgument(node) {
            if (node.arguments.length === 0) {
                context.report({
                    node,
                    messageId: "expected"
                });
            }
        }

        return {
            "Program:exit"() {
                const scope = context.getScope();
                const variable = astUtils.getVariableByName(scope, "Symbol");

                if (variable && variable.defs.length === 0) {
                    variable.references.forEach(reference => {
                        const node = reference.identifier;

                        if (astUtils.isCallee(node)) {
                            checkArgument(node.parent);
                        }
                    });
                }
            }
        };

    }
};
