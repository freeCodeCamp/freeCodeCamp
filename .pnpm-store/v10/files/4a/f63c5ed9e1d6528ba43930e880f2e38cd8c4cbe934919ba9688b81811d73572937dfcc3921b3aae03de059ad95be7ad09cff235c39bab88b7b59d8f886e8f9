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
exports.default = util.createRule({
    name: 'no-import-type-side-effects',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers',
            recommended: false,
        },
        fixable: 'code',
        messages: {
            useTopLevelQualifier: 'TypeScript will only remove the inline type specifiers which will leave behind a side effect import at runtime. Convert this to a top-level type qualifier to properly remove the entire import.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const sourceCode = context.getSourceCode();
        return {
            'ImportDeclaration[importKind!="type"]'(node) {
                if (node.specifiers.length === 0) {
                    return;
                }
                const specifiers = [];
                for (const specifier of node.specifiers) {
                    if (specifier.type !== utils_1.AST_NODE_TYPES.ImportSpecifier ||
                        specifier.importKind !== 'type') {
                        return;
                    }
                    specifiers.push(specifier);
                }
                context.report({
                    node,
                    messageId: 'useTopLevelQualifier',
                    fix(fixer) {
                        const fixes = [];
                        for (const specifier of specifiers) {
                            const qualifier = util.nullThrows(sourceCode.getFirstToken(specifier, util.isTypeKeyword), util.NullThrowsReasons.MissingToken('type keyword', 'import specifier'));
                            fixes.push(fixer.removeRange([
                                qualifier.range[0],
                                specifier.imported.range[0],
                            ]));
                        }
                        const importKeyword = util.nullThrows(sourceCode.getFirstToken(node, util.isImportKeyword), util.NullThrowsReasons.MissingToken('import keyword', 'import'));
                        fixes.push(fixer.insertTextAfter(importKeyword, ' type'));
                        return fixes;
                    },
                });
            },
        };
    },
});
//# sourceMappingURL=no-import-type-side-effects.js.map