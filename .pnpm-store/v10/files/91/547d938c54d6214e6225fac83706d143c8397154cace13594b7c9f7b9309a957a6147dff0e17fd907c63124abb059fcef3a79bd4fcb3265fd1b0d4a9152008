"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const confusingOperators = new Set([
    '=',
    '==',
    '===',
    'in',
    'instanceof',
]);
function isConfusingOperator(operator) {
    return confusingOperators.has(operator);
}
exports.default = (0, util_1.createRule)({
    name: 'no-confusing-non-null-assertion',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow non-null assertion in locations that may be confusing',
            recommended: 'stylistic',
        },
        hasSuggestions: true,
        messages: {
            confusingAssign: 'Confusing combination of non-null assertion and assignment like `a! = b`, which looks very similar to `a != b`.',
            confusingEqual: 'Confusing combination of non-null assertion and equality test like `a! == b`, which looks very similar to `a !== b`.',
            confusingOperator: 'Confusing combination of non-null assertion and `{{operator}}` operator like `a! {{operator}} b`, which might be misinterpreted as `!(a {{operator}} b)`.',
            notNeedInAssign: 'Remove unnecessary non-null assertion (!) in assignment left-hand side.',
            notNeedInEqualTest: 'Remove unnecessary non-null assertion (!) in equality test.',
            notNeedInOperator: 'Remove possibly unnecessary non-null assertion (!) in the left operand of the `{{operator}}` operator.',
            wrapUpLeft: 'Wrap the left-hand side in parentheses to avoid confusion with "{{operator}}" operator.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function confusingOperatorToMessageData(operator) {
            switch (operator) {
                case '=':
                    return {
                        messageId: 'confusingAssign',
                    };
                case '==':
                case '===':
                    return {
                        messageId: 'confusingEqual',
                    };
                case 'in':
                case 'instanceof':
                    return {
                        messageId: 'confusingOperator',
                        data: { operator },
                    };
                // istanbul ignore next
                default:
                    operator;
                    throw new Error(`Unexpected operator ${operator}`);
            }
        }
        return {
            'BinaryExpression, AssignmentExpression'(node) {
                const operator = node.operator;
                if (isConfusingOperator(operator)) {
                    // Look for a non-null assertion as the last token on the left hand side.
                    // That way, we catch things like `1 + two! === 3`, even though the left
                    // hand side isn't a non-null assertion AST node.
                    const leftHandFinalToken = context.sourceCode.getLastToken(node.left);
                    const tokenAfterLeft = context.sourceCode.getTokenAfter(node.left);
                    if (leftHandFinalToken?.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                        leftHandFinalToken.value === '!' &&
                        tokenAfterLeft?.value !== ')') {
                        if (node.left.type === utils_1.AST_NODE_TYPES.TSNonNullExpression) {
                            let suggestions;
                            switch (operator) {
                                case '=':
                                    suggestions = [
                                        {
                                            messageId: 'notNeedInAssign',
                                            fix: (fixer) => fixer.remove(leftHandFinalToken),
                                        },
                                    ];
                                    break;
                                case '==':
                                case '===':
                                    suggestions = [
                                        {
                                            messageId: 'notNeedInEqualTest',
                                            fix: (fixer) => fixer.remove(leftHandFinalToken),
                                        },
                                    ];
                                    break;
                                case 'in':
                                case 'instanceof':
                                    suggestions = [
                                        {
                                            messageId: 'notNeedInOperator',
                                            data: { operator },
                                            fix: (fixer) => fixer.remove(leftHandFinalToken),
                                        },
                                        {
                                            messageId: 'wrapUpLeft',
                                            data: { operator },
                                            fix: wrapUpLeftFixer(node),
                                        },
                                    ];
                                    break;
                                // istanbul ignore next
                                default:
                                    operator;
                                    return;
                            }
                            context.report({
                                node,
                                ...confusingOperatorToMessageData(operator),
                                suggest: suggestions,
                            });
                        }
                        else {
                            context.report({
                                node,
                                ...confusingOperatorToMessageData(operator),
                                suggest: [
                                    {
                                        messageId: 'wrapUpLeft',
                                        data: { operator },
                                        fix: wrapUpLeftFixer(node),
                                    },
                                ],
                            });
                        }
                    }
                }
            },
        };
    },
});
function wrapUpLeftFixer(node) {
    return (fixer) => [
        fixer.insertTextBefore(node.left, '('),
        fixer.insertTextAfter(node.left, ')'),
    ];
}
//# sourceMappingURL=no-confusing-non-null-assertion.js.map