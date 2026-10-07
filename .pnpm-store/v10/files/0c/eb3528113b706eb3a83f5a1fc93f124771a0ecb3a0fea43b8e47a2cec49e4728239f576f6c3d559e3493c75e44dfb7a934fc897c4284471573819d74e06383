/**
 * @fileoverview Rule to disallow specified names in exports
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow specified names in exports",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-restricted-exports"
        },

        schema: [{
            type: "object",
            properties: {
                restrictedNamedExports: {
                    type: "array",
                    items: {
                        type: "string"
                    },
                    uniqueItems: true
                }
            },
            additionalProperties: false
        }],

        messages: {
            restrictedNamed: "'{{name}}' is restricted from being used as an exported name."
        }
    },

    create(context) {

        const restrictedNames = new Set(context.options[0] && context.options[0].restrictedNamedExports);

        /**
         * Checks and reports given exported identifier.
         * @param {ASTNode} node exported `Identifier` node to check.
         * @returns {void}
         */
        function checkExportedName(node) {
            const name = node.name;

            if (restrictedNames.has(name)) {
                context.report({
                    node,
                    messageId: "restrictedNamed",
                    data: { name }
                });
            }
        }

        return {
            ExportAllDeclaration(node) {
                if (node.exported) {
                    checkExportedName(node.exported);
                }
            },

            ExportNamedDeclaration(node) {
                const declaration = node.declaration;

                if (declaration) {
                    if (declaration.type === "FunctionDeclaration" || declaration.type === "ClassDeclaration") {
                        checkExportedName(declaration.id);
                    } else if (declaration.type === "VariableDeclaration") {
                        context.getDeclaredVariables(declaration)
                            .map(v => v.defs.find(d => d.parent === declaration))
                            .map(d => d.name) // Identifier nodes
                            .forEach(checkExportedName);
                    }
                } else {
                    node.specifiers
                        .map(s => s.exported)
                        .forEach(checkExportedName);
                }
            }
        };
    }
};
