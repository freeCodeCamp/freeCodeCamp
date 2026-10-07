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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
const getWrappedCode_1 = require("../util/getWrappedCode");
exports.default = (0, util_1.createRule)({
    name: 'consistent-type-assertions',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce consistent usage of type assertions',
            recommended: 'stylistic',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            'angle-bracket': "Use '<{{cast}}>' instead of 'as {{cast}}'.",
            as: "Use 'as {{cast}}' instead of '<{{cast}}>'.",
            never: 'Do not use any type assertions.',
            replaceArrayTypeAssertionWithAnnotation: 'Use const x: {{cast}} = [ ... ] instead.',
            replaceArrayTypeAssertionWithSatisfies: 'Use const x = [ ... ] satisfies {{cast}} instead.',
            replaceObjectTypeAssertionWithAnnotation: 'Use const x: {{cast}} = { ... } instead.',
            replaceObjectTypeAssertionWithSatisfies: 'Use const x = { ... } satisfies {{cast}} instead.',
            unexpectedArrayTypeAssertion: 'Always prefer const x: T[] = [ ... ].',
            unexpectedObjectTypeAssertion: 'Always prefer const x: T = { ... }.',
        },
        schema: [
            {
                oneOf: [
                    {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            assertionStyle: {
                                type: 'string',
                                description: 'The expected assertion style to enforce.',
                                enum: ['never'],
                            },
                        },
                        required: ['assertionStyle'],
                    },
                    {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            arrayLiteralTypeAssertions: {
                                type: 'string',
                                description: 'Whether to always prefer type declarations for array literals used as variable initializers, rather than type assertions.',
                                enum: ['allow', 'allow-as-parameter', 'never'],
                            },
                            assertionStyle: {
                                type: 'string',
                                description: 'The expected assertion style to enforce.',
                                enum: ['as', 'angle-bracket'],
                            },
                            objectLiteralTypeAssertions: {
                                type: 'string',
                                description: 'Whether to always prefer type declarations for object literals used as variable initializers, rather than type assertions.',
                                enum: ['allow', 'allow-as-parameter', 'never'],
                            },
                        },
                    },
                ],
            },
        ],
    },
    defaultOptions: [
        {
            arrayLiteralTypeAssertions: 'allow',
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow',
        },
    ],
    create(context, [options]) {
        function isConst(node) {
            if (node.type !== utils_1.AST_NODE_TYPES.TSTypeReference) {
                return false;
            }
            return (node.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.typeName.name === 'const');
        }
        function reportIncorrectAssertionType(node) {
            const messageId = options.assertionStyle;
            // If this node is `as const`, then don't report an error.
            if (isConst(node.typeAnnotation) && messageId === 'never') {
                return;
            }
            context.report({
                node,
                messageId,
                data: messageId !== 'never'
                    ? { cast: context.sourceCode.getText(node.typeAnnotation) }
                    : {},
                fix: messageId === 'as'
                    ? (fixer) => {
                        // lazily access parserServices to avoid crashing on non TS files (#9860)
                        const tsNode = (0, util_1.getParserServices)(context, true).esTreeNodeToTSNodeMap.get(node);
                        const expressionCode = context.sourceCode.getText(node.expression);
                        const typeAnnotationCode = context.sourceCode.getText(node.typeAnnotation);
                        const asPrecedence = (0, util_1.getOperatorPrecedence)(ts.SyntaxKind.AsExpression, ts.SyntaxKind.Unknown);
                        const parentPrecedence = (0, util_1.getOperatorPrecedence)(tsNode.parent.kind, ts.isBinaryExpression(tsNode.parent)
                            ? tsNode.parent.operatorToken.kind
                            : ts.SyntaxKind.Unknown, ts.isNewExpression(tsNode.parent)
                            ? tsNode.parent.arguments != null &&
                                tsNode.parent.arguments.length > 0
                            : undefined);
                        const expressionPrecedence = (0, util_1.getOperatorPrecedenceForNode)(node.expression);
                        const expressionCodeWrapped = (0, getWrappedCode_1.getWrappedCode)(expressionCode, expressionPrecedence, asPrecedence);
                        const text = `${expressionCodeWrapped} as ${typeAnnotationCode}`;
                        return fixer.replaceText(node, (0, util_1.isParenthesized)(node, context.sourceCode)
                            ? text
                            : (0, getWrappedCode_1.getWrappedCode)(text, asPrecedence, parentPrecedence));
                    }
                    : undefined,
            });
        }
        function checkType(node) {
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.TSAnyKeyword:
                case utils_1.AST_NODE_TYPES.TSUnknownKeyword:
                    return false;
                case utils_1.AST_NODE_TYPES.TSTypeReference:
                    return (
                    // Ignore `as const` and `<const>`
                    !isConst(node) ||
                        // Allow qualified names which have dots between identifiers, `Foo.Bar`
                        node.typeName.type === utils_1.AST_NODE_TYPES.TSQualifiedName);
                default:
                    return true;
            }
        }
        function getSuggestions(node, annotationMessageId, satisfiesMessageId) {
            const suggestions = [];
            if (node.parent.type === utils_1.AST_NODE_TYPES.VariableDeclarator &&
                !node.parent.id.typeAnnotation) {
                const { parent } = node;
                suggestions.push({
                    messageId: annotationMessageId,
                    data: { cast: context.sourceCode.getText(node.typeAnnotation) },
                    fix: fixer => [
                        fixer.insertTextAfter(parent.id, `: ${context.sourceCode.getText(node.typeAnnotation)}`),
                        fixer.replaceText(node, (0, util_1.getTextWithParentheses)(context.sourceCode, node.expression)),
                    ],
                });
            }
            suggestions.push({
                messageId: satisfiesMessageId,
                data: { cast: context.sourceCode.getText(node.typeAnnotation) },
                fix: fixer => [
                    fixer.replaceText(node, (0, util_1.getTextWithParentheses)(context.sourceCode, node.expression)),
                    fixer.insertTextAfter(node, ` satisfies ${context.sourceCode.getText(node.typeAnnotation)}`),
                ],
            });
            return suggestions;
        }
        function isAsParameter(node) {
            return (node.parent.type === utils_1.AST_NODE_TYPES.NewExpression ||
                node.parent.type === utils_1.AST_NODE_TYPES.CallExpression ||
                node.parent.type === utils_1.AST_NODE_TYPES.ThrowStatement ||
                node.parent.type === utils_1.AST_NODE_TYPES.AssignmentPattern ||
                node.parent.type === utils_1.AST_NODE_TYPES.JSXExpressionContainer ||
                (node.parent.type === utils_1.AST_NODE_TYPES.TemplateLiteral &&
                    node.parent.parent.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression));
        }
        function checkExpressionForObjectAssertion(node) {
            if (options.assertionStyle === 'never' ||
                options.objectLiteralTypeAssertions === 'allow' ||
                node.expression.type !== utils_1.AST_NODE_TYPES.ObjectExpression) {
                return;
            }
            if (options.objectLiteralTypeAssertions === 'allow-as-parameter' &&
                isAsParameter(node)) {
                return;
            }
            if (checkType(node.typeAnnotation)) {
                const suggest = getSuggestions(node, 'replaceObjectTypeAssertionWithAnnotation', 'replaceObjectTypeAssertionWithSatisfies');
                context.report({
                    node,
                    messageId: 'unexpectedObjectTypeAssertion',
                    suggest,
                });
            }
        }
        function checkExpressionForArrayAssertion(node) {
            if (options.assertionStyle === 'never' ||
                options.arrayLiteralTypeAssertions === 'allow' ||
                node.expression.type !== utils_1.AST_NODE_TYPES.ArrayExpression) {
                return;
            }
            if (options.arrayLiteralTypeAssertions === 'allow-as-parameter' &&
                isAsParameter(node)) {
                return;
            }
            if (checkType(node.typeAnnotation)) {
                const suggest = getSuggestions(node, 'replaceArrayTypeAssertionWithAnnotation', 'replaceArrayTypeAssertionWithSatisfies');
                context.report({
                    node,
                    messageId: 'unexpectedArrayTypeAssertion',
                    suggest,
                });
            }
        }
        return {
            TSAsExpression(node) {
                if (options.assertionStyle !== 'as') {
                    reportIncorrectAssertionType(node);
                    return;
                }
                checkExpressionForObjectAssertion(node);
                checkExpressionForArrayAssertion(node);
            },
            TSTypeAssertion(node) {
                if (options.assertionStyle !== 'angle-bracket') {
                    reportIncorrectAssertionType(node);
                    return;
                }
                checkExpressionForObjectAssertion(node);
                checkExpressionForArrayAssertion(node);
            },
        };
    },
});
//# sourceMappingURL=consistent-type-assertions.js.map