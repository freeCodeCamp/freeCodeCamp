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
const promiseUtils_1 = require("../util/promiseUtils");
const messageBase = 'Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.';
const messageBaseVoid = 'Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler' +
    ' or be explicitly marked as ignored with the `void` operator.';
const messageRejectionHandler = 'A rejection handler that is not a function will be ignored.';
const messagePromiseArray = "An array of Promises may be unintentional. Consider handling the promises' fulfillment or rejection with Promise.all or similar.";
const messagePromiseArrayVoid = "An array of Promises may be unintentional. Consider handling the promises' fulfillment or rejection with Promise.all or similar," +
    ' or explicitly marking the expression as ignored with the `void` operator.';
exports.default = (0, util_1.createRule)({
    name: 'no-floating-promises',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require Promise-like statements to be handled appropriately',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            floating: messageBase,
            floatingFixAwait: 'Add await operator.',
            floatingFixVoid: 'Add void operator to ignore.',
            floatingPromiseArray: messagePromiseArray,
            floatingPromiseArrayVoid: messagePromiseArrayVoid,
            floatingUselessRejectionHandler: `${messageBase} ${messageRejectionHandler}`,
            floatingUselessRejectionHandlerVoid: `${messageBaseVoid} ${messageRejectionHandler}`,
            floatingVoid: messageBaseVoid,
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowForKnownSafeCalls: {
                        ...util_1.readonlynessOptionsSchema.properties.allow,
                        description: 'Type specifiers of functions whose calls are safe to float.',
                    },
                    allowForKnownSafePromises: {
                        ...util_1.readonlynessOptionsSchema.properties.allow,
                        description: 'Type specifiers that are known to be safe to float.',
                    },
                    checkThenables: {
                        type: 'boolean',
                        description: 'Whether to check all "Thenable"s, not just the built-in Promise type.',
                    },
                    ignoreIIFE: {
                        type: 'boolean',
                        description: 'Whether to ignore async IIFEs (Immediately Invoked Function Expressions).',
                    },
                    ignoreVoid: {
                        type: 'boolean',
                        description: 'Whether to ignore `void` expressions.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowForKnownSafeCalls: util_1.readonlynessOptionsDefaults.allow,
            allowForKnownSafePromises: util_1.readonlynessOptionsDefaults.allow,
            checkThenables: false,
            ignoreIIFE: false,
            ignoreVoid: true,
        },
    ],
    create(context, [options]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const { checkThenables } = options;
        // TODO: #5439
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        const allowForKnownSafePromises = options.allowForKnownSafePromises;
        const allowForKnownSafeCalls = options.allowForKnownSafeCalls;
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        return {
            ArrowFunctionExpression(node) {
                if (node.body.type === utils_1.AST_NODE_TYPES.UnaryExpression) {
                    checkNode(node.body, node.body);
                }
            },
            ExpressionStatement(node) {
                if (options.ignoreIIFE && isAsyncIife(node)) {
                    return;
                }
                const expression = (0, util_1.skipChainExpression)(node.expression);
                checkNode(node, expression);
            },
        };
        function checkNode(node, expression) {
            if (isKnownSafePromiseCall(expression)) {
                return;
            }
            const { isUnhandled, nonFunctionHandler, promiseArray } = isUnhandledPromise(checker, expression);
            if (isUnhandled) {
                if (promiseArray) {
                    context.report({
                        node,
                        messageId: options.ignoreVoid
                            ? 'floatingPromiseArrayVoid'
                            : 'floatingPromiseArray',
                    });
                }
                else if (options.ignoreVoid) {
                    context.report({
                        node,
                        messageId: nonFunctionHandler
                            ? 'floatingUselessRejectionHandlerVoid'
                            : 'floatingVoid',
                        suggest: [
                            {
                                messageId: 'floatingFixVoid',
                                fix(fixer) {
                                    if ((0, util_1.isParenthesized)(expression, context.sourceCode) ||
                                        (0, util_1.getOperatorPrecedenceForNode)(expression) >
                                            util_1.OperatorPrecedence.Unary) {
                                        return fixer.insertTextBefore(node, 'void ');
                                    }
                                    return [
                                        fixer.insertTextBefore(node, 'void ('),
                                        fixer.insertTextAfterRange([expression.range[1], expression.range[1]], ')'),
                                    ];
                                },
                            },
                            {
                                messageId: 'floatingFixAwait',
                                fix: (fixer) => addAwait(fixer, expression, node),
                            },
                        ],
                    });
                }
                else {
                    context.report({
                        node,
                        messageId: nonFunctionHandler
                            ? 'floatingUselessRejectionHandler'
                            : 'floating',
                        suggest: [
                            {
                                messageId: 'floatingFixAwait',
                                fix: (fixer) => addAwait(fixer, expression, node),
                            },
                        ],
                    });
                }
            }
        }
        function addAwait(fixer, expression, node) {
            if (expression.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                expression.operator === 'void') {
                return fixer.replaceTextRange([expression.range[0], expression.range[0] + 4], 'await');
            }
            if ((0, util_1.isParenthesized)(expression, context.sourceCode) ||
                (0, util_1.getOperatorPrecedenceForNode)(expression) > util_1.OperatorPrecedence.Unary) {
                return fixer.insertTextBefore(node, 'await ');
            }
            return [
                fixer.insertTextBefore(node, 'await ('),
                fixer.insertTextAfterRange([expression.range[1], expression.range[1]], ')'),
            ];
        }
        function isKnownSafePromiseCall(node) {
            if (node.type !== utils_1.AST_NODE_TYPES.CallExpression) {
                return false;
            }
            const type = services.getTypeAtLocation(node.callee);
            if ((0, util_1.valueMatchesSomeSpecifier)(node.callee, allowForKnownSafeCalls, services.program, type)) {
                return true;
            }
            return (0, util_1.typeMatchesSomeSpecifier)(type, allowForKnownSafeCalls, services.program);
        }
        function isAsyncIife(node) {
            if (node.expression.type !== utils_1.AST_NODE_TYPES.CallExpression) {
                return false;
            }
            return (node.expression.callee.type ===
                utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                node.expression.callee.type === utils_1.AST_NODE_TYPES.FunctionExpression);
        }
        function isValidRejectionHandler(rejectionHandler) {
            return (services.program
                .getTypeChecker()
                .getTypeAtLocation(services.esTreeNodeToTSNodeMap.get(rejectionHandler))
                .getCallSignatures().length > 0);
        }
        function isUnhandledPromise(checker, node) {
            if (node.type === utils_1.AST_NODE_TYPES.AssignmentExpression) {
                return { isUnhandled: false };
            }
            // First, check expressions whose resulting types may not be promise-like
            if (node.type === utils_1.AST_NODE_TYPES.SequenceExpression) {
                // Any child in a comma expression could return a potentially unhandled
                // promise, so we check them all regardless of whether the final returned
                // value is promise-like.
                return (node.expressions
                    .map(item => isUnhandledPromise(checker, item))
                    .find(result => result.isUnhandled) ?? { isUnhandled: false });
            }
            if (!options.ignoreVoid &&
                node.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                node.operator === 'void') {
                // Similarly, a `void` expression always returns undefined, so we need to
                // see what's inside it without checking the type of the overall expression.
                return isUnhandledPromise(checker, node.argument);
            }
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            // Check the type. At this point it can't be unhandled if it isn't a promise
            // or array thereof.
            if (isPromiseArray(tsNode)) {
                return { isUnhandled: true, promiseArray: true };
            }
            // await expression addresses promises, but not promise arrays.
            if (node.type === utils_1.AST_NODE_TYPES.AwaitExpression) {
                // you would think this wouldn't be strictly necessary, since we're
                // anyway checking the type of the expression, but, unfortunately TS
                // reports the result of `await (promise as Promise<number> & number)`
                // as `Promise<number> & number` instead of `number`.
                return { isUnhandled: false };
            }
            if (!isPromiseLike(tsNode)) {
                return { isUnhandled: false };
            }
            if (node.type === utils_1.AST_NODE_TYPES.CallExpression) {
                // If the outer expression is a call, a `.catch()` or `.then()` with
                // rejection handler handles the promise.
                const promiseHandlingMethodCall = (0, promiseUtils_1.parseCatchCall)(node, context) ?? (0, promiseUtils_1.parseThenCall)(node, context);
                if (promiseHandlingMethodCall != null) {
                    const onRejected = promiseHandlingMethodCall.onRejected;
                    if (onRejected != null) {
                        if (isValidRejectionHandler(onRejected)) {
                            return { isUnhandled: false };
                        }
                        return { isUnhandled: true, nonFunctionHandler: true };
                    }
                    return { isUnhandled: true };
                }
                const promiseFinallyCall = (0, promiseUtils_1.parseFinallyCall)(node, context);
                if (promiseFinallyCall != null) {
                    return isUnhandledPromise(checker, promiseFinallyCall.object);
                }
                // All other cases are unhandled.
                return { isUnhandled: true };
            }
            if (node.type === utils_1.AST_NODE_TYPES.ConditionalExpression) {
                // We must be getting the promise-like value from one of the branches of the
                // ternary. Check them directly.
                const alternateResult = isUnhandledPromise(checker, node.alternate);
                if (alternateResult.isUnhandled) {
                    return alternateResult;
                }
                return isUnhandledPromise(checker, node.consequent);
            }
            if (node.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
                const leftResult = isUnhandledPromise(checker, node.left);
                if (leftResult.isUnhandled) {
                    return leftResult;
                }
                return isUnhandledPromise(checker, node.right);
            }
            // Anything else is unhandled.
            return { isUnhandled: true };
        }
        function isPromiseArray(node) {
            const type = getTypeAtLocation(checker, node);
            if (type == null) {
                return false;
            }
            for (const ty of tsutils
                .unionConstituents(type)
                .map(t => checker.getApparentType(t))) {
                if (checker.isArrayType(ty)) {
                    const arrayType = checker.getTypeArguments(ty)[0];
                    if (isPromiseLike(node, arrayType)) {
                        return true;
                    }
                }
                if (checker.isTupleType(ty)) {
                    for (const tupleElementType of checker.getTypeArguments(ty)) {
                        if (isPromiseLike(node, tupleElementType)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
        function isPromiseLike(node, type) {
            type ??= checker.getTypeAtLocation(node);
            // The highest priority is to allow anything allowlisted
            if ((0, util_1.typeMatchesSomeSpecifier)(type, allowForKnownSafePromises, services.program)) {
                return false;
            }
            // Otherwise, we always consider the built-in Promise to be Promise-like...
            const typeParts = tsutils.unionConstituents(checker.getApparentType(type));
            if (typeParts.some(typePart => (0, util_1.isBuiltinSymbolLike)(services.program, typePart, 'Promise'))) {
                return true;
            }
            // ...and only check all Thenables if explicitly told to
            if (!checkThenables) {
                return false;
            }
            // Modified from tsutils.isThenable() to only consider thenables which can be
            // rejected/caught via a second parameter. Original source (MIT licensed):
            //
            //   https://github.com/ajafff/tsutils/blob/49d0d31050b44b81e918eae4fbaf1dfe7b7286af/util/type.ts#L95-L125
            for (const ty of typeParts) {
                const then = ty.getProperty('then');
                if (then == null) {
                    continue;
                }
                const thenType = checker.getTypeOfSymbolAtLocation(then, node);
                if (hasMatchingSignature(thenType, signature => signature.parameters.length >= 2 &&
                    isFunctionParam(checker, signature.parameters[0], node) &&
                    isFunctionParam(checker, signature.parameters[1], node))) {
                    return true;
                }
            }
            return false;
        }
    },
});
function hasMatchingSignature(type, matcher) {
    for (const t of tsutils.unionConstituents(type)) {
        if (t.getCallSignatures().some(matcher)) {
            return true;
        }
    }
    return false;
}
function isFunctionParam(checker, param, node) {
    const type = checker.getApparentType(checker.getTypeOfSymbolAtLocation(param, node));
    for (const t of tsutils.unionConstituents(type)) {
        if (t.getCallSignatures().length !== 0) {
            return true;
        }
    }
    return false;
}
function getTypeAtLocation(checker, node) {
    try {
        return checker.getTypeAtLocation(node);
    }
    catch {
        // Workaround for https://github.com/typescript-eslint/typescript-eslint/issues/11947
        return null;
    }
}
//# sourceMappingURL=no-floating-promises.js.map