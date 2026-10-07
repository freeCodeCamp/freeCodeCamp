"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-array-delete',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow using the `delete` operator on array values',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            noArrayDelete: 'Using the `delete` operator with an array expression is unsafe.',
            useSplice: 'Use `array.splice()` instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function isUnderlyingTypeArray(type) {
            const predicate = (t) => checker.isArrayType(t) || checker.isTupleType(t);
            if (type.isUnion()) {
                return type.types.every(predicate);
            }
            if (type.isIntersection()) {
                return type.types.some(predicate);
            }
            return predicate(type);
        }
        return {
            'UnaryExpression[operator="delete"]'(node) {
                const { argument } = node;
                if (argument.type !== utils_1.AST_NODE_TYPES.MemberExpression) {
                    return;
                }
                const type = (0, util_1.getConstrainedTypeAtLocation)(services, argument.object);
                if (!isUnderlyingTypeArray(type)) {
                    return;
                }
                context.report({
                    node,
                    messageId: 'noArrayDelete',
                    suggest: [
                        {
                            messageId: 'useSplice',
                            fix(fixer) {
                                const { object, property } = argument;
                                const shouldHaveParentheses = property.type === utils_1.AST_NODE_TYPES.SequenceExpression;
                                const nodeMap = services.esTreeNodeToTSNodeMap;
                                const target = nodeMap.get(object).getText();
                                const rawKey = nodeMap.get(property).getText();
                                const key = shouldHaveParentheses ? `(${rawKey})` : rawKey;
                                let suggestion = `${target}.splice(${key}, 1)`;
                                const comments = context.sourceCode.getCommentsInside(node);
                                if (comments.length > 0) {
                                    const indentationCount = node.loc.start.column;
                                    const indentation = ' '.repeat(indentationCount);
                                    const commentsText = comments
                                        .map(comment => {
                                        return comment.type === utils_1.AST_TOKEN_TYPES.Line
                                            ? `//${comment.value}`
                                            : `/*${comment.value}*/`;
                                    })
                                        .join(`\n${indentation}`);
                                    suggestion = `${commentsText}\n${indentation}${suggestion}`;
                                }
                                return fixer.replaceText(node, suggestion);
                            },
                        },
                    ],
                });
            },
        };
    },
});
//# sourceMappingURL=no-array-delete.js.map