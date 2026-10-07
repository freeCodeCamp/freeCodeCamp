"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-literal-enum-member',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require all enum members to be literal values',
            recommended: 'strict',
            requiresTypeChecking: false,
        },
        messages: {
            notLiteral: `Explicit enum value must only be a literal value (string or number).`,
            notLiteralOrBitwiseExpression: `Explicit enum value must only be a literal value (string or number) or a bitwise expression.`,
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowBitwiseExpressions: {
                        type: 'boolean',
                        description: 'Whether to allow using bitwise expressions in enum initializers.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowBitwiseExpressions: false,
        },
    ],
    create(context, [{ allowBitwiseExpressions }]) {
        function isIdentifierWithName(node, name) {
            return node.type === utils_1.AST_NODE_TYPES.Identifier && node.name === name;
        }
        function hasEnumMember(decl, name) {
            return decl.body.members.some(member => isIdentifierWithName(member.id, name) ||
                (member.id.type === utils_1.AST_NODE_TYPES.Literal &&
                    (0, util_1.getStaticStringValue)(member.id) === name));
        }
        function isSelfEnumMember(decl, node) {
            if (node.type === utils_1.AST_NODE_TYPES.Identifier) {
                return hasEnumMember(decl, node.name);
            }
            if (node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                isIdentifierWithName(node.object, decl.id.name)) {
                if (node.property.type === utils_1.AST_NODE_TYPES.Identifier) {
                    return hasEnumMember(decl, node.property.name);
                }
                if (node.computed) {
                    const propertyName = (0, util_1.getStaticStringValue)(node.property);
                    if (propertyName) {
                        return hasEnumMember(decl, propertyName);
                    }
                }
            }
            return false;
        }
        return {
            TSEnumMember(node) {
                // If there is no initializer, then this node is just the name of the member, so ignore.
                if (node.initializer == null) {
                    return;
                }
                const declaration = node.parent.parent;
                function isAllowedInitializerExpressionRecursive(node, partOfBitwiseComputation) {
                    // You can only refer to an enum member if it's part of a bitwise computation.
                    // so C = B isn't allowed (special case), but C = A | B is.
                    if (partOfBitwiseComputation && isSelfEnumMember(declaration, node)) {
                        return true;
                    }
                    switch (node.type) {
                        // any old literal
                        case utils_1.AST_NODE_TYPES.Literal:
                            return true;
                        // TemplateLiteral without expressions
                        case utils_1.AST_NODE_TYPES.TemplateLiteral:
                            return node.expressions.length === 0;
                        case utils_1.AST_NODE_TYPES.UnaryExpression:
                            // +123, -123, etc.
                            if (['-', '+'].includes(node.operator)) {
                                return isAllowedInitializerExpressionRecursive(node.argument, partOfBitwiseComputation);
                            }
                            if (allowBitwiseExpressions) {
                                return (node.operator === '~' &&
                                    isAllowedInitializerExpressionRecursive(node.argument, true));
                            }
                            return false;
                        case utils_1.AST_NODE_TYPES.BinaryExpression:
                            if (allowBitwiseExpressions) {
                                return (['&', '^', '<<', '>>', '>>>', '|'].includes(node.operator) &&
                                    isAllowedInitializerExpressionRecursive(node.left, true) &&
                                    isAllowedInitializerExpressionRecursive(node.right, true));
                            }
                            return false;
                        default:
                            return false;
                    }
                }
                if (isAllowedInitializerExpressionRecursive(node.initializer, false)) {
                    return;
                }
                context.report({
                    node: node.id,
                    messageId: allowBitwiseExpressions
                        ? 'notLiteralOrBitwiseExpression'
                        : 'notLiteral',
                });
            },
        };
    },
});
//# sourceMappingURL=prefer-literal-enum-member.js.map