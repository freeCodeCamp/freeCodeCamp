"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-import-type-side-effects',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers',
        },
        fixable: 'code',
        messages: {
            useTopLevelQualifier: 'TypeScript will only remove the inline type specifiers which will leave behind a side effect import at runtime. Convert this to a top-level type qualifier to properly remove the entire import.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
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
                            const qualifier = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(specifier, util_1.isTypeKeyword), util_1.NullThrowsReasons.MissingToken('type keyword', 'import specifier'));
                            fixes.push(fixer.removeRange([
                                qualifier.range[0],
                                specifier.imported.range[0],
                            ]));
                        }
                        const importKeyword = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isImportKeyword), util_1.NullThrowsReasons.MissingToken('import keyword', 'import'));
                        fixes.push(fixer.insertTextAfter(importKeyword, ' type'));
                        return fixes;
                    },
                });
            },
        };
    },
});
//# sourceMappingURL=no-import-type-side-effects.js.map