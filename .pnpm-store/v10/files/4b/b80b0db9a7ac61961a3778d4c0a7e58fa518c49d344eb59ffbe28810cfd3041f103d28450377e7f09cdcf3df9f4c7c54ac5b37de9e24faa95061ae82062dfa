"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-confusing-non-null-assertion',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow non-null assertion in locations that may be confusing',
            recommended: 'strict',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            confusingEqual: 'Confusing combinations of non-null assertion and equal test like "a! == b", which looks very similar to not equal "a !== b".',
            confusingAssign: 'Confusing combinations of non-null assertion and equal test like "a! = b", which looks very similar to not equal "a != b".',
            notNeedInEqualTest: 'Unnecessary non-null assertion (!) in equal test.',
            notNeedInAssign: 'Unnecessary non-null assertion (!) in assignment left hand.',
            wrapUpLeft: 'Wrap up left hand to avoid putting non-null assertion "!" and "=" together.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const sourceCode = context.getSourceCode();
        return {
            'BinaryExpression, AssignmentExpression'(node) {
                function isLeftHandPrimaryExpression(node) {
                    return node.type === utils_1.AST_NODE_TYPES.TSNonNullExpression;
                }
                if (node.operator === '==' ||
                    node.operator === '===' ||
                    node.operator === '=') {
                    const isAssign = node.operator === '=';
                    const leftHandFinalToken = sourceCode.getLastToken(node.left);
                    const tokenAfterLeft = sourceCode.getTokenAfter(node.left);
                    if ((leftHandFinalToken === null || leftHandFinalToken === void 0 ? void 0 : leftHandFinalToken.type) === utils_1.AST_TOKEN_TYPES.Punctuator &&
                        (leftHandFinalToken === null || leftHandFinalToken === void 0 ? void 0 : leftHandFinalToken.value) === '!' &&
                        (tokenAfterLeft === null || tokenAfterLeft === void 0 ? void 0 : tokenAfterLeft.value) !== ')') {
                        if (isLeftHandPrimaryExpression(node.left)) {
                            context.report({
                                node,
                                messageId: isAssign ? 'confusingAssign' : 'confusingEqual',
                                suggest: [
                                    {
                                        messageId: isAssign
                                            ? 'notNeedInAssign'
                                            : 'notNeedInEqualTest',
                                        fix: (fixer) => [
                                            fixer.remove(leftHandFinalToken),
                                        ],
                                    },
                                ],
                            });
                        }
                        else {
                            context.report({
                                node,
                                messageId: isAssign ? 'confusingAssign' : 'confusingEqual',
                                suggest: [
                                    {
                                        messageId: 'wrapUpLeft',
                                        fix: (fixer) => [
                                            fixer.insertTextBefore(node.left, '('),
                                            fixer.insertTextAfter(node.left, ')'),
                                        ],
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
//# sourceMappingURL=no-confusing-non-null-assertion.js.map