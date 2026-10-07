"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const shared_1 = require("./enum-utils/shared");
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-enum-comparison',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow comparing an enum value with a non-enum value',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            mismatchedCase: 'The case statement does not have a shared enum type with the switch predicate.',
            mismatchedCondition: 'The two values in this comparison do not have a shared enum type.',
            replaceValueWithEnum: 'Replace with an enum value comparison.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const parserServices = (0, util_1.getParserServices)(context);
        const typeChecker = parserServices.program.getTypeChecker();
        return {
            'BinaryExpression[operator=/^[<>!=]?={0,2}$/]'(node) {
                const leftType = parserServices.getTypeAtLocation(node.left);
                const rightType = parserServices.getTypeAtLocation(node.right);
                if ((0, shared_1.isMismatchedEnumComparisonTypes)(typeChecker, leftType, rightType)) {
                    context.report({
                        node,
                        messageId: 'mismatchedCondition',
                        suggest: [
                            {
                                messageId: 'replaceValueWithEnum',
                                fix(fixer) {
                                    // Replace the right side with an enum key if possible:
                                    //
                                    // ```ts
                                    // Fruit.Apple === 'apple'; // Fruit.Apple === Fruit.Apple
                                    // ```
                                    const leftEnumKey = (0, shared_1.getEnumKeyForLiteral)((0, shared_1.getEnumLiterals)(leftType), (0, util_1.getStaticValue)(node.right)?.value);
                                    if (leftEnumKey) {
                                        return fixer.replaceText(node.right, leftEnumKey);
                                    }
                                    // Replace the left side with an enum key if possible:
                                    //
                                    // ```ts
                                    // declare const fruit: Fruit;
                                    // 'apple' === Fruit.Apple; // Fruit.Apple === Fruit.Apple
                                    // ```
                                    const rightEnumKey = (0, shared_1.getEnumKeyForLiteral)((0, shared_1.getEnumLiterals)(rightType), (0, util_1.getStaticValue)(node.left)?.value);
                                    if (rightEnumKey) {
                                        return fixer.replaceText(node.left, rightEnumKey);
                                    }
                                    return null;
                                },
                            },
                        ],
                    });
                }
            },
            SwitchCase(node) {
                // Ignore `default` cases.
                if (node.test == null) {
                    return;
                }
                const { parent } = node;
                const leftType = parserServices.getTypeAtLocation(parent.discriminant);
                const rightType = parserServices.getTypeAtLocation(node.test);
                if ((0, shared_1.isMismatchedEnumComparisonTypes)(typeChecker, leftType, rightType)) {
                    context.report({
                        node,
                        messageId: 'mismatchedCase',
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-enum-comparison.js.map