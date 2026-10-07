"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-as-const',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce the use of `as const` over literal type',
            recommended: 'recommended',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            preferConstAssertion: 'Expected a `const` instead of a literal type assertion.',
            variableConstAssertion: 'Expected a `const` assertion instead of a literal type annotation.',
            variableSuggest: 'You should use `as const` instead of type annotation.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function compareTypes(valueNode, typeNode, canFix) {
            if (valueNode.type === utils_1.AST_NODE_TYPES.Literal &&
                typeNode.type === utils_1.AST_NODE_TYPES.TSLiteralType &&
                typeNode.literal.type === utils_1.AST_NODE_TYPES.Literal &&
                valueNode.raw === typeNode.literal.raw) {
                if (canFix) {
                    context.report({
                        node: typeNode,
                        messageId: 'preferConstAssertion',
                        fix: fixer => fixer.replaceText(typeNode, 'const'),
                    });
                }
                else {
                    context.report({
                        node: typeNode,
                        messageId: 'variableConstAssertion',
                        suggest: [
                            {
                                messageId: 'variableSuggest',
                                fix: (fixer) => [
                                    fixer.remove(typeNode.parent),
                                    fixer.insertTextAfter(valueNode, ' as const'),
                                ],
                            },
                        ],
                    });
                }
            }
        }
        return {
            PropertyDefinition(node) {
                if (node.value && node.typeAnnotation) {
                    compareTypes(node.value, node.typeAnnotation.typeAnnotation, false);
                }
            },
            TSAsExpression(node) {
                compareTypes(node.expression, node.typeAnnotation, true);
            },
            TSTypeAssertion(node) {
                compareTypes(node.expression, node.typeAnnotation, true);
            },
            VariableDeclarator(node) {
                if (node.init && node.id.typeAnnotation) {
                    compareTypes(node.init, node.id.typeAnnotation.typeAnnotation, false);
                }
            },
        };
    },
});
//# sourceMappingURL=prefer-as-const.js.map