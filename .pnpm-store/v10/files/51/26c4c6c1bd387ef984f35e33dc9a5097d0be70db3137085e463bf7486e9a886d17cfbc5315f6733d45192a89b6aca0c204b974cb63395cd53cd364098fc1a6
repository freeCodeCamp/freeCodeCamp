"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
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
exports.default = util.createRule({
    name: 'no-useless-empty-export',
    meta: {
        docs: {
            description: "Disallow empty exports that don't change anything in a module file",
            recommended: false,
        },
        fixable: 'code',
        hasSuggestions: false,
        messages: {
            uselessExport: 'Empty export does nothing and can be removed.',
        },
        schema: [],
        type: 'suggestion',
    },
    defaultOptions: [],
    create(context) {
        function checkNode(node) {
            if (!Array.isArray(node.body)) {
                return;
            }
            let emptyExport;
            let foundOtherExport = false;
            for (const statement of node.body) {
                if (isEmptyExport(statement)) {
                    emptyExport = statement;
                    if (foundOtherExport) {
                        break;
                    }
                }
                else if (exportOrImportNodeTypes.has(statement.type)) {
                    foundOtherExport = true;
                }
            }
            if (emptyExport && foundOtherExport) {
                context.report({
                    fix: fixer => fixer.remove(emptyExport),
                    messageId: 'uselessExport',
                    node: emptyExport,
                });
            }
        }
        return {
            Program: checkNode,
            TSModuleDeclaration: checkNode,
        };
    },
});
//# sourceMappingURL=no-useless-empty-export.js.map