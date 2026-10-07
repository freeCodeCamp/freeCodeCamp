/**
 * @fileoverview Disallow renaming import, export, and destructured assignments to the same name.
 * @author Kai Cataldo
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
            description: "disallow renaming import, export, and destructured assignments to the same name",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-useless-rename"
        },

        fixable: "code",

        schema: [
            {
                type: "object",
                properties: {
                    ignoreDestructuring: { type: "boolean", default: false },
                    ignoreImport: { type: "boolean", default: false },
                    ignoreExport: { type: "boolean", default: false }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unnecessarilyRenamed: "{{type}} {{name}} unnecessarily renamed."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode(),
            options = context.options[0] || {},
            ignoreDestructuring = options.ignoreDestructuring === true,
            ignoreImport = options.ignoreImport === true,
            ignoreExport = options.ignoreExport === true;

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Reports error for unnecessarily renamed assignments
         * @param {ASTNode} node node to report
         * @param {ASTNode} initial node with initial name value
         * @param {string} type the type of the offending node
         * @returns {void}
         */
        function reportError(node, initial, type) {
            const name = initial.type === "Identifier" ? initial.name : initial.value;

            return context.report({
                node,
                messageId: "unnecessarilyRenamed",
                data: {
                    name,
                    type
                },
                fix(fixer) {
                    const replacementNode = node.type === "Property" ? node.value : node.local;

                    if (sourceCode.getCommentsInside(node).length > sourceCode.getCommentsInside(replacementNode).length) {
                        return null;
                    }

                    // Don't autofix code such as `({foo: (foo) = a} = obj);`, parens are not allowed in shorthand properties.
                    if (
                        replacementNode.type === "AssignmentPattern" &&
                        astUtils.isParenthesised(sourceCode, replacementNode.left)
                    ) {
                        return null;
                    }

                    return fixer.replaceText(node, sourceCode.getText(replacementNode));
                }
            });
        }

        /**
         * Checks whether a destructured assignment is unnecessarily renamed
         * @param {ASTNode} node node to check
         * @returns {void}
         */
        function checkDestructured(node) {
            if (ignoreDestructuring) {
                return;
            }

            for (const property of node.properties) {

                /**
                 * Properties using shorthand syntax and rest elements can not be renamed.
                 * If the property is computed, we have no idea if a rename is useless or not.
                 */
                if (property.type !== "Property" || property.shorthand || property.computed) {
                    continue;
                }

                const key = (property.key.type === "Identifier" && property.key.name) || (property.key.type === "Literal" && property.key.value);
                const renamedKey = property.value.type === "AssignmentPattern" ? property.value.left.name : property.value.name;

                if (key === renamedKey) {
                    reportError(property, property.key, "Destructuring assignment");
                }
            }
        }

        /**
         * Checks whether an import is unnecessarily renamed
         * @param {ASTNode} node node to check
         * @returns {void}
         */
        function checkImport(node) {
            if (ignoreImport) {
                return;
            }

            if (node.imported.name === node.local.name &&
                    node.imported.range[0] !== node.local.range[0]) {
                reportError(node, node.imported, "Import");
            }
        }

        /**
         * Checks whether an export is unnecessarily renamed
         * @param {ASTNode} node node to check
         * @returns {void}
         */
        function checkExport(node) {
            if (ignoreExport) {
                return;
            }

            if (node.local.name === node.exported.name &&
                    node.local.range[0] !== node.exported.range[0]) {
                reportError(node, node.local, "Export");
            }

        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            ObjectPattern: checkDestructured,
            ImportSpecifier: checkImport,
            ExportSpecifier: checkExport
        };
    }
};
