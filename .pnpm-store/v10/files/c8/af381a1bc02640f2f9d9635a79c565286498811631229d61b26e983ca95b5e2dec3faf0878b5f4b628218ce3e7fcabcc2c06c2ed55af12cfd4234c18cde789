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
const getForStatementHeadLoc_1 = require("../util/getForStatementHeadLoc");
const isPromiseAggregatorMethod_1 = require("../util/isPromiseAggregatorMethod");
exports.default = (0, util_1.createRule)({
    name: 'await-thenable',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow awaiting a value that is not a Thenable',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            await: 'Unexpected `await` of a non-Promise (non-"Thenable") value.',
            awaitUsingOfNonAsyncDisposable: 'Unexpected `await using` of a value that is not async disposable.',
            convertToOrdinaryFor: 'Convert to an ordinary `for...of` loop.',
            forAwaitOfNonAsyncIterable: 'Unexpected `for await...of` of a value that is not async iterable.',
            invalidPromiseAggregatorInput: 'Unexpected iterable of non-Promise (non-"Thenable") values passed to promise aggregator.',
            removeAwait: 'Remove unnecessary `await`.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        return {
            AwaitExpression(node) {
                const awaitArgumentEsNode = node.argument;
                const awaitArgumentType = services.getTypeAtLocation(awaitArgumentEsNode);
                const awaitArgumentTsNode = services.esTreeNodeToTSNodeMap.get(awaitArgumentEsNode);
                const certainty = (0, util_1.needsToBeAwaited)(checker, awaitArgumentTsNode, awaitArgumentType);
                if (certainty === util_1.Awaitable.Never) {
                    context.report({
                        node,
                        messageId: 'await',
                        suggest: [
                            {
                                messageId: 'removeAwait',
                                fix(fixer) {
                                    const awaitKeyword = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isAwaitKeyword), util_1.NullThrowsReasons.MissingToken('await', 'await expression'));
                                    const awaitTokenRemovalRange = (0, util_1.getAwaitTokenRemovalRange)(context.sourceCode, awaitKeyword);
                                    const awaitRemovalFix = fixer.removeRange(awaitTokenRemovalRange);
                                    const firstOperandToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(awaitKeyword), util_1.NullThrowsReasons.MissingToken('operand', 'await expression'));
                                    if ((0, util_1.isStartOfArrowFunctionBodyNeedingParentheses)(node, firstOperandToken, context.sourceCode) ||
                                        (0, util_1.isStartOfExpressionStatementNeedingParentheses)(node, firstOperandToken)) {
                                        return [
                                            awaitRemovalFix,
                                            fixer.insertTextBefore(awaitArgumentEsNode, '('),
                                            fixer.insertTextAfter(awaitArgumentEsNode, ')'),
                                        ];
                                    }
                                    return awaitRemovalFix;
                                },
                            },
                        ],
                    });
                }
            },
            CallExpression(node) {
                if (!(0, isPromiseAggregatorMethod_1.isPromiseAggregatorMethod)(context, services, node)) {
                    return;
                }
                const argument = node.arguments.at(0);
                if (argument == null) {
                    return;
                }
                if (argument.type === utils_1.TSESTree.AST_NODE_TYPES.ArrayExpression) {
                    for (const element of argument.elements) {
                        if (element == null) {
                            continue;
                        }
                        const type = (0, util_1.getConstrainedTypeAtLocation)(services, element);
                        const tsNode = services.esTreeNodeToTSNodeMap.get(element);
                        if (isAlwaysNonAwaitableType(type, tsNode, checker)) {
                            context.report({
                                node: element,
                                messageId: 'invalidPromiseAggregatorInput',
                            });
                        }
                    }
                    return;
                }
                const type = (0, util_1.getConstrainedTypeAtLocation)(services, argument);
                if (isInvalidPromiseAggregatorInput(checker, services.esTreeNodeToTSNodeMap.get(argument), type)) {
                    context.report({
                        node: argument,
                        messageId: 'invalidPromiseAggregatorInput',
                    });
                }
            },
            'ForOfStatement[await=true]'(node) {
                const type = services.getTypeAtLocation(node.right);
                if ((0, util_1.isTypeAnyType)(type)) {
                    return;
                }
                const hasAsyncIteratorSymbol = tsutils
                    .unionConstituents(type)
                    .some(typePart => tsutils.getWellKnownSymbolPropertyOfType(typePart, 'asyncIterator', checker) != null);
                if (!hasAsyncIteratorSymbol) {
                    context.report({
                        loc: (0, getForStatementHeadLoc_1.getForStatementHeadLoc)(context.sourceCode, node),
                        messageId: 'forAwaitOfNonAsyncIterable',
                        suggest: [
                            // Note that this suggestion causes broken code for sync iterables
                            // of promises, since the loop variable is not awaited.
                            {
                                messageId: 'convertToOrdinaryFor',
                                fix(fixer) {
                                    const awaitToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isAwaitKeyword), util_1.NullThrowsReasons.MissingToken('await', 'for await loop'));
                                    return fixer.removeRange((0, util_1.getAwaitTokenRemovalRange)(context.sourceCode, awaitToken));
                                },
                            },
                        ],
                    });
                }
            },
            'VariableDeclaration[kind="await using"]'(node) {
                for (const declarator of node.declarations) {
                    const init = declarator.init;
                    if (init == null) {
                        continue;
                    }
                    const type = services.getTypeAtLocation(init);
                    if ((0, util_1.isTypeAnyType)(type)) {
                        continue;
                    }
                    const hasAsyncDisposeSymbol = tsutils
                        .unionConstituents(type)
                        .some(typePart => tsutils.getWellKnownSymbolPropertyOfType(typePart, 'asyncDispose', checker) != null);
                    if (!hasAsyncDisposeSymbol) {
                        context.report({
                            node: init,
                            messageId: 'awaitUsingOfNonAsyncDisposable',
                            // let the user figure out what to do if there's
                            // await using a = b, c = d, e = f;
                            // it's rare and not worth the complexity to handle.
                            ...(0, util_1.getFixOrSuggest)({
                                fixOrSuggest: node.declarations.length === 1 ? 'suggest' : 'none',
                                suggestion: {
                                    messageId: 'removeAwait',
                                    fix(fixer) {
                                        const awaitToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node, util_1.isAwaitKeyword), util_1.NullThrowsReasons.MissingToken('await', 'await using'));
                                        return fixer.removeRange((0, util_1.getAwaitTokenRemovalRange)(context.sourceCode, awaitToken));
                                    },
                                },
                            }),
                        });
                    }
                }
            },
        };
    },
});
function isInvalidPromiseAggregatorInput(checker, node, type) {
    // non array/tuple/iterable types already show up as a type error
    if (!isIterable(type, checker)) {
        return false;
    }
    for (const part of tsutils.unionConstituents(type)) {
        const valueTypes = getValueTypesOfArrayLike(part, checker);
        if (valueTypes != null) {
            for (const typeArgument of valueTypes) {
                if (containsNonAwaitableType(typeArgument, node, checker)) {
                    return true;
                }
            }
        }
    }
    return false;
}
function getValueTypesOfArrayLike(type, checker) {
    if (checker.isTupleType(type)) {
        return checker.getTypeArguments(type);
    }
    if (checker.isArrayLikeType(type)) {
        return [
            (0, util_1.nullThrows)(type.getNumberIndexType(), 'number index type should exist on an array-like'),
        ];
    }
    // `Iterable<...>`
    if (tsutils.isTypeReference(type)) {
        return checker.getTypeArguments(type).slice(0, 1);
    }
    return null;
}
function isAlwaysNonAwaitableType(type, node, checker) {
    return tsutils
        .unionConstituents(type)
        .every(typeArgumentPart => (0, util_1.needsToBeAwaited)(checker, node, typeArgumentPart) === util_1.Awaitable.Never);
}
function containsNonAwaitableType(type, node, checker) {
    return tsutils
        .unionConstituents(type)
        .some(typeArgumentPart => (0, util_1.needsToBeAwaited)(checker, node, typeArgumentPart) === util_1.Awaitable.Never);
}
function isIterable(type, checker) {
    return tsutils
        .unionConstituents(type)
        .every(part => !!tsutils.getWellKnownSymbolPropertyOfType(part, 'iterator', checker));
}
//# sourceMappingURL=await-thenable.js.map