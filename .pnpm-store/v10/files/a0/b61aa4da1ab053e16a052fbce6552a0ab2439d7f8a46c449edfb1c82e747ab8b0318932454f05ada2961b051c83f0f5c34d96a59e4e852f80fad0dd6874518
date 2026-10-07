"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const classNames = new Set([
    'BigInt',
    // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
    'Boolean',
    'Number',
    'Object',
    // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
    'String',
    'Symbol',
]);
exports.default = (0, util_1.createRule)({
    name: 'no-wrapper-object-types',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow using confusing built-in primitive class wrappers',
            recommended: 'recommended',
        },
        fixable: 'code',
        messages: {
            bannedClassType: 'Prefer using the primitive `{{preferred}}` as a type name, rather than the upper-cased `{{typeName}}`.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function checkBannedTypes(node, includeFix) {
            const typeName = node.type === utils_1.AST_NODE_TYPES.Identifier && node.name;
            if (!typeName ||
                !classNames.has(typeName) ||
                !(0, util_1.isReferenceToGlobalFunction)(typeName, node, context.sourceCode)) {
                return;
            }
            const preferred = typeName.toLowerCase();
            context.report({
                node,
                messageId: 'bannedClassType',
                data: { preferred, typeName },
                fix: includeFix
                    ? (fixer) => fixer.replaceText(node, preferred)
                    : undefined,
            });
        }
        return {
            TSClassImplements(node) {
                checkBannedTypes(node.expression, false);
            },
            TSInterfaceHeritage(node) {
                checkBannedTypes(node.expression, false);
            },
            TSTypeReference(node) {
                checkBannedTypes(node.typeName, true);
            },
        };
    },
});
//# sourceMappingURL=no-wrapper-object-types.js.map