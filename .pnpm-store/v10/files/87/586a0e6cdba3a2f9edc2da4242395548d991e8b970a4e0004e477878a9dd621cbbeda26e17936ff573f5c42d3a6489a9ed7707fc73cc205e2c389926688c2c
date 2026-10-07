"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-declaration-merging',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unsafe declaration merging',
            recommended: 'recommended',
            requiresTypeChecking: false,
        },
        messages: {
            unsafeMerging: 'Unsafe declaration merging between classes and interfaces.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function checkUnsafeDeclaration(scope, node, unsafeKind) {
            const variable = scope.set.get(node.name);
            if (!variable) {
                return;
            }
            const defs = variable.defs;
            if (defs.length <= 1) {
                return;
            }
            if (defs.some(def => def.node.type === unsafeKind)) {
                context.report({
                    node,
                    messageId: 'unsafeMerging',
                });
            }
        }
        return {
            ClassDeclaration(node) {
                if (node.id) {
                    // by default eslint returns the inner class scope for the ClassDeclaration node
                    // but we want the outer scope within which merged variables will sit
                    const currentScope = context.sourceCode.getScope(node).upper;
                    if (currentScope == null) {
                        return;
                    }
                    checkUnsafeDeclaration(currentScope, node.id, utils_1.AST_NODE_TYPES.TSInterfaceDeclaration);
                }
            },
            TSInterfaceDeclaration(node) {
                checkUnsafeDeclaration(context.sourceCode.getScope(node), node.id, utils_1.AST_NODE_TYPES.ClassDeclaration);
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-declaration-merging.js.map