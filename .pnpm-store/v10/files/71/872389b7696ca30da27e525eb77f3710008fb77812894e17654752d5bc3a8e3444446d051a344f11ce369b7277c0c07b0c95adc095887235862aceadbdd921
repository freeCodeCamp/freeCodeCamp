"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
function isEmptyExport(node) {
    return (node.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration &&
        node.specifiers.length === 0 &&
        !node.declaration);
}
const exportOrImportNodeTypes = new Set([
    utils_1.AST_NODE_TYPES.ExportAllDeclaration,
    utils_1.AST_NODE_TYPES.ExportDefaultDeclaration,
    utils_1.AST_NODE_TYPES.ExportNamedDeclaration,
    utils_1.AST_NODE_TYPES.ExportSpecifier,
    utils_1.AST_NODE_TYPES.ImportDeclaration,
    utils_1.AST_NODE_TYPES.TSExportAssignment,
    utils_1.AST_NODE_TYPES.TSImportEqualsDeclaration,
]);
exports.default = (0, util_1.createRule)({
    name: 'no-useless-empty-export',
    meta: {
        type: 'suggestion',
        docs: {
            description: "Disallow empty exports that don't change anything in a module file",
        },
        fixable: 'code',
        hasSuggestions: false,
        messages: {
            uselessExport: 'Empty export does nothing and can be removed.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        // In a definition file, export {} is necessary to make the module properly
        // encapsulated, even when there are other exports
        // https://github.com/typescript-eslint/typescript-eslint/issues/4975
        if ((0, util_1.isDefinitionFile)(context.filename)) {
            return {};
        }
        function checkNode(node) {
            if (!Array.isArray(node.body)) {
                return;
            }
            const emptyExports = [];
            let foundOtherExport = false;
            for (const statement of node.body) {
                if (isEmptyExport(statement)) {
                    emptyExports.push(statement);
                }
                else if (exportOrImportNodeTypes.has(statement.type)) {
                    foundOtherExport = true;
                }
            }
            if (foundOtherExport) {
                for (const emptyExport of emptyExports) {
                    context.report({
                        node: emptyExport,
                        messageId: 'uselessExport',
                        fix: fixer => fixer.remove(emptyExport),
                    });
                }
            }
        }
        return {
            Program: checkNode,
            TSModuleDeclaration: checkNode,
        };
    },
});
//# sourceMappingURL=no-useless-empty-export.js.map