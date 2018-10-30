/**
 * @fileoverview Rule to flag use of an lexical declarations inside a case clause
 * @author Erik Arvidsson
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow lexical declarations in case clauses",
            category: "Best Practices",
            recommended: true
        },

        schema: []
    },

    create(context) {

        /**
         * Checks whether or not a node is a lexical declaration.
         * @param {ASTNode} node A direct child statement of a switch case.
         * @returns {boolean} Whether or not the node is a lexical declaration.
         */
        function isLexicalDeclaration(node) {
            switch (node.type) {
                case "FunctionDeclaration":
                case "ClassDeclaration":
                    return true;
                case "VariableDeclaration":
                    return node.kind !== "var";
                default:
                    return false;
            }
        }

        return {
            SwitchCase(node) {
                for (let i = 0; i < node.consequent.length; i++) {
                    const statement = node.consequent[i];

                    if (isLexicalDeclaration(statement)) {
                        context.report({
                            node,
                            message: "Unexpected lexical declaration in case block."
                        });
                    }
                }
            }
        };

    }
};
