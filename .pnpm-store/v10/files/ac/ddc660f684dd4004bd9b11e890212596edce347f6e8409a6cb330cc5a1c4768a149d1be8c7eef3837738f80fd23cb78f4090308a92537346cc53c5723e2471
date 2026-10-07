"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-duplicate-enum-values',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow duplicate enum member values',
            recommended: 'recommended',
        },
        hasSuggestions: false,
        messages: {
            duplicateValue: 'Duplicate enum member value {{value}}.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function isStringLiteral(node) {
            return (node.type === utils_1.AST_NODE_TYPES.Literal && typeof node.value === 'string');
        }
        function isNumberLiteral(node) {
            return (node.type === utils_1.AST_NODE_TYPES.Literal && typeof node.value === 'number');
        }
        function isSupportedUnary(node) {
            return (node.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                ['-', '+'].includes(node.operator));
        }
        function isStaticTemplateLiteral(node) {
            return (node.type === utils_1.AST_NODE_TYPES.TemplateLiteral &&
                node.expressions.length === 0 &&
                node.quasis.length === 1);
        }
        function getMemberValue(initializer) {
            switch (true) {
                case isStringLiteral(initializer):
                case isNumberLiteral(initializer):
                    return initializer.value;
                case isSupportedUnary(initializer): {
                    const inner = Number(getMemberValue(initializer.argument));
                    if (Number.isNaN(inner)) {
                        return undefined;
                    }
                    return initializer.operator === '-' ? -inner : inner;
                }
                case isStaticTemplateLiteral(initializer):
                    return initializer.quasis[0].value.cooked ?? undefined;
                default:
                    return undefined;
            }
        }
        return {
            TSEnumDeclaration(node) {
                const enumMembers = node.body.members;
                const seenValues = [];
                enumMembers.forEach(member => {
                    if (member.initializer == null) {
                        return;
                    }
                    const value = getMemberValue(member.initializer);
                    if (value == null) {
                        return;
                    }
                    const isAlreadyPresent = seenValues.some(seenValue => Object.is(seenValue, value));
                    if (isAlreadyPresent) {
                        context.report({
                            node: member,
                            messageId: 'duplicateValue',
                            data: {
                                value,
                            },
                        });
                    }
                    else {
                        seenValues.push(value);
                    }
                });
            },
        };
    },
});
//# sourceMappingURL=no-duplicate-enum-values.js.map