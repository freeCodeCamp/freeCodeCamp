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
const tsutils = __importStar(require("ts-api-utils"));
const util_1 = require("../util");
const useUnknownMessageBase = 'Prefer the safe `: unknown` for a `{{method}}`{{append}} callback variable.';
exports.default = (0, util_1.createRule)({
    name: 'use-unknown-in-catch-callback-variable',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce typing arguments in Promise rejection callbacks as `unknown`',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            addUnknownRestTypeAnnotationSuggestion: 'Add an explicit `: [unknown]` type annotation to the rejection callback rest variable.',
            addUnknownTypeAnnotationSuggestion: 'Add an explicit `: unknown` type annotation to the rejection callback variable.',
            useUnknown: useUnknownMessageBase,
            useUnknownArrayDestructuringPattern: `${useUnknownMessageBase} The thrown error may not be iterable.`,
            useUnknownObjectDestructuringPattern: `${useUnknownMessageBase} The thrown error may be nullable, or may not have the expected shape.`,
            wrongRestTypeAnnotationSuggestion: 'Change existing type annotation to `: [unknown]`.',
            wrongTypeAnnotationSuggestion: 'Change existing type annotation to `: unknown`.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const { esTreeNodeToTSNodeMap, program } = (0, util_1.getParserServices)(context);
        const checker = program.getTypeChecker();
        function isFlaggableHandlerType(type) {
            for (const unionPart of tsutils.unionConstituents(type)) {
                const callSignatures = tsutils.getCallSignaturesOfType(unionPart);
                if (callSignatures.length === 0) {
                    // Ignore any non-function components to the type. Those are not this rule's problem.
                    continue;
                }
                for (const callSignature of callSignatures) {
                    const firstParam = callSignature.parameters.at(0);
                    if (!firstParam) {
                        // it's not an issue if there's no catch variable at all.
                        continue;
                    }
                    let firstParamType = checker.getTypeOfSymbol(firstParam);
                    const decl = firstParam.valueDeclaration;
                    if (decl != null && (0, util_1.isRestParameterDeclaration)(decl)) {
                        if (checker.isArrayType(firstParamType)) {
                            firstParamType = checker.getTypeArguments(firstParamType)[0];
                        }
                        else if (checker.isTupleType(firstParamType)) {
                            firstParamType = checker.getTypeArguments(firstParamType)[0];
                        }
                        else {
                            // a rest arg that's not an array or tuple should definitely be flagged.
                            return true;
                        }
                    }
                    if (!tsutils.isIntrinsicUnknownType(firstParamType)) {
                        return true;
                    }
                }
            }
            return false;
        }
        function collectFlaggedNodes(node) {
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.LogicalExpression:
                    return [
                        ...collectFlaggedNodes(node.left),
                        ...collectFlaggedNodes(node.right),
                    ];
                case utils_1.AST_NODE_TYPES.SequenceExpression:
                    return collectFlaggedNodes((0, util_1.nullThrows)(node.expressions.at(-1), 'sequence expression must have multiple expressions'));
                case utils_1.AST_NODE_TYPES.ConditionalExpression:
                    return [
                        ...collectFlaggedNodes(node.consequent),
                        ...collectFlaggedNodes(node.alternate),
                    ];
                case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
                case utils_1.AST_NODE_TYPES.FunctionExpression:
                    {
                        const argument = esTreeNodeToTSNodeMap.get(node);
                        const typeOfArgument = checker.getTypeAtLocation(argument);
                        if (isFlaggableHandlerType(typeOfArgument)) {
                            return [node];
                        }
                    }
                    break;
                default:
                    break;
            }
            return [];
        }
        /**
         * Analyzes the syntax of the catch argument and makes a best effort to pinpoint
         * why it's reporting, and to come up with a suggested fix if possible.
         *
         * This function is explicitly operating under the assumption that the
         * rule _is reporting_, so it is not guaranteed to be sound to call otherwise.
         */
        function refineReportIfPossible(argument) {
            const catchVariableOuterWithIncorrectTypes = (0, util_1.nullThrows)(argument.params.at(0), 'There should have been at least one parameter for the rule to have flagged.');
            // Function expressions can't have parameter properties; those only exist in constructors.
            const catchVariableOuter = catchVariableOuterWithIncorrectTypes;
            const catchVariableInner = catchVariableOuter.type === utils_1.AST_NODE_TYPES.AssignmentPattern
                ? catchVariableOuter.left
                : catchVariableOuter;
            switch (catchVariableInner.type) {
                case utils_1.AST_NODE_TYPES.Identifier: {
                    const catchVariableTypeAnnotation = catchVariableInner.typeAnnotation;
                    if (catchVariableTypeAnnotation == null) {
                        return {
                            node: catchVariableOuter,
                            suggest: [
                                {
                                    messageId: 'addUnknownTypeAnnotationSuggestion',
                                    fix: (fixer) => {
                                        if (argument.type ===
                                            utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
                                            (0, util_1.isParenlessArrowFunction)(argument, context.sourceCode)) {
                                            return [
                                                fixer.insertTextBefore(catchVariableInner, '('),
                                                fixer.insertTextAfter(catchVariableInner, ': unknown)'),
                                            ];
                                        }
                                        return [
                                            fixer.insertTextAfter(catchVariableInner, ': unknown'),
                                        ];
                                    },
                                },
                            ],
                        };
                    }
                    return {
                        node: catchVariableOuter,
                        suggest: [
                            {
                                messageId: 'wrongTypeAnnotationSuggestion',
                                fix: (fixer) => fixer.replaceText(catchVariableTypeAnnotation, ': unknown'),
                            },
                        ],
                    };
                }
                case utils_1.AST_NODE_TYPES.ArrayPattern: {
                    return {
                        node: catchVariableOuter,
                        messageId: 'useUnknownArrayDestructuringPattern',
                    };
                }
                case utils_1.AST_NODE_TYPES.ObjectPattern: {
                    return {
                        node: catchVariableOuter,
                        messageId: 'useUnknownObjectDestructuringPattern',
                    };
                }
                case utils_1.AST_NODE_TYPES.RestElement: {
                    const catchVariableTypeAnnotation = catchVariableInner.typeAnnotation;
                    if (catchVariableTypeAnnotation == null) {
                        return {
                            node: catchVariableOuter,
                            suggest: [
                                {
                                    messageId: 'addUnknownRestTypeAnnotationSuggestion',
                                    fix: (fixer) => fixer.insertTextAfter(catchVariableInner, ': [unknown]'),
                                },
                            ],
                        };
                    }
                    return {
                        node: catchVariableOuter,
                        suggest: [
                            {
                                messageId: 'wrongRestTypeAnnotationSuggestion',
                                fix: (fixer) => fixer.replaceText(catchVariableTypeAnnotation, ': [unknown]'),
                            },
                        ],
                    };
                }
            }
        }
        return {
            CallExpression({ arguments: args, callee }) {
                if (callee.type !== utils_1.AST_NODE_TYPES.MemberExpression) {
                    return;
                }
                const staticMemberAccessKey = (0, util_1.getStaticMemberAccessValue)(callee, context);
                if (!staticMemberAccessKey) {
                    return;
                }
                const promiseMethodInfo = [
                    { append: '', argIndexToCheck: 0, method: 'catch' },
                    { append: ' rejection', argIndexToCheck: 1, method: 'then' },
                ].find(({ method }) => staticMemberAccessKey === method);
                if (!promiseMethodInfo) {
                    return;
                }
                // Need to be enough args to check
                const { argIndexToCheck, ...data } = promiseMethodInfo;
                if (args.length < argIndexToCheck + 1) {
                    return;
                }
                // Argument to check, and all arguments before it, must be "ordinary" arguments (i.e. no spread arguments)
                // promise.catch(f), promise.catch(() => {}), promise.catch(<expression>, <<other-args>>)
                const argsToCheck = args.slice(0, argIndexToCheck + 1);
                if (argsToCheck.some(({ type }) => type === utils_1.AST_NODE_TYPES.SpreadElement)) {
                    return;
                }
                if (!tsutils.isThenableType(checker, esTreeNodeToTSNodeMap.get(callee), checker.getTypeAtLocation(esTreeNodeToTSNodeMap.get(callee.object)))) {
                    return;
                }
                // the `some` check above has already excluded `SpreadElement`, so we are safe to assert the same
                const argToCheck = argsToCheck[argIndexToCheck];
                for (const node of collectFlaggedNodes(argToCheck)) {
                    // We are now guaranteed to report, but we have a bit of work to do
                    // to determine exactly where, and whether we can fix it.
                    const overrides = refineReportIfPossible(node);
                    context.report({
                        node,
                        messageId: 'useUnknown',
                        data,
                        ...overrides,
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=use-unknown-in-catch-callback-variable.js.map