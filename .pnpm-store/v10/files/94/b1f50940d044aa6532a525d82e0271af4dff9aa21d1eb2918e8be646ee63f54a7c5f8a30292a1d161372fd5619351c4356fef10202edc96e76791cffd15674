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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-duplicate-imports');
exports.default = util.createRule({
    name: 'no-duplicate-imports',
    meta: {
        deprecated: true,
        replacedBy: ['import/no-duplicates'],
        type: 'problem',
        docs: {
            description: 'Disallow duplicate imports',
            recommended: false,
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        messages: Object.assign(Object.assign({}, baseRule.meta.messages), { importType: '{{module}} type import is duplicated.', importTypeAs: '{{module}} type import is duplicated as type export.', exportType: '{{module}} type export is duplicated.', exportTypeAs: '{{module}} type export is duplicated as type import.' }),
    },
    defaultOptions: [
        {
            includeExports: false,
        },
    ],
    create(context, [{ includeExports }]) {
        const rules = baseRule.create(context);
        const typeMemberImports = new Set();
        const typeDefaultImports = new Set();
        const typeExports = new Set();
        function report(messageId, node, module) {
            context.report({
                messageId,
                node,
                data: {
                    module,
                },
            });
        }
        function isAllMemberImport(node) {
            return node.specifiers.every(specifier => specifier.type === utils_1.AST_NODE_TYPES.ImportSpecifier);
        }
        function checkTypeImport(node) {
            if (node.source) {
                const value = node.source.value;
                const isMemberImport = isAllMemberImport(node);
                if (isMemberImport
                    ? typeMemberImports.has(value)
                    : typeDefaultImports.has(value)) {
                    report('importType', node, value);
                }
                if (includeExports && typeExports.has(value)) {
                    report('importTypeAs', node, value);
                }
                if (isMemberImport) {
                    typeMemberImports.add(value);
                }
                else {
                    typeDefaultImports.add(value);
                }
            }
        }
        function checkTypeExport(node) {
            if (node.source) {
                const value = node.source.value;
                if (typeExports.has(value)) {
                    report('exportType', node, value);
                }
                if (typeMemberImports.has(value) || typeDefaultImports.has(value)) {
                    report('exportTypeAs', node, value);
                }
                typeExports.add(value);
            }
        }
        return Object.assign(Object.assign({}, rules), { ImportDeclaration(node) {
                if (node.importKind === 'type') {
                    checkTypeImport(node);
                    return;
                }
                rules.ImportDeclaration(node);
            },
            ExportNamedDeclaration(node) {
                var _a;
                if (includeExports && node.exportKind === 'type') {
                    checkTypeExport(node);
                    return;
                }
                (_a = rules.ExportNamedDeclaration) === null || _a === void 0 ? void 0 : _a.call(rules, node);
            },
            ExportAllDeclaration(node) {
                var _a;
                if (includeExports && node.exportKind === 'type') {
                    checkTypeExport(node);
                    return;
                }
                (_a = rules.ExportAllDeclaration) === null || _a === void 0 ? void 0 : _a.call(rules, node);
            } });
    },
});
//# sourceMappingURL=no-duplicate-imports.js.map