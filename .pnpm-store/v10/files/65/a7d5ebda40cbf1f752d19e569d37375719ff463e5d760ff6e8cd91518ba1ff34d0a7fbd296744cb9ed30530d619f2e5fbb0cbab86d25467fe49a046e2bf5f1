"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('init-declarations');
exports.default = (0, util_1.createRule)({
    name: 'init-declarations',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require or disallow initialization in variable declarations',
            recommended: false,
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        messages: baseRule.meta.messages,
    },
    defaultOptions: ['always'],
    create(context, [mode]) {
        const rules = baseRule.create(context);
        return {
            'VariableDeclaration:exit'(node) {
                if (mode === 'always') {
                    if (node.declare) {
                        return;
                    }
                    if (isAncestorNamespaceDeclared(node)) {
                        return;
                    }
                }
                rules['VariableDeclaration:exit'](node);
            },
        };
        function isAncestorNamespaceDeclared(node) {
            let ancestor = node.parent;
            while (ancestor) {
                if (ancestor.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration &&
                    ancestor.declare) {
                    return true;
                }
                ancestor = ancestor.parent;
            }
            return false;
        }
    },
});
//# sourceMappingURL=init-declarations.js.map