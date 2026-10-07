"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-function-type',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow using the unsafe built-in Function type',
            recommended: 'recommended',
        },
        messages: {
            bannedFunctionType: [
                'The `Function` type accepts any function-like value.',
                'Prefer explicitly defining any function parameters and return type.',
            ].join('\n'),
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function checkBannedTypes(node) {
            if (node.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.name === 'Function' &&
                (0, util_1.isReferenceToGlobalFunction)('Function', node, context.sourceCode)) {
                context.report({
                    node,
                    messageId: 'bannedFunctionType',
                });
            }
        }
        return {
            TSClassImplements(node) {
                checkBannedTypes(node.expression);
            },
            TSInterfaceHeritage(node) {
                checkBannedTypes(node.expression);
            },
            TSTypeReference(node) {
                checkBannedTypes(node.typeName);
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-function-type.js.map