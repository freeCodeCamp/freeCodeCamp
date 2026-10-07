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
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
const util_1 = require("../util");
exports.default = util.createRule({
    name: 'no-floating-promises',
    meta: {
        docs: {
            description: 'Require Promise-like statements to be handled appropriately',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            floating: 'Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.',
            floatingFixAwait: 'Add await operator.',
            floatingVoid: 'Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler' +
                ' or be explicitly marked as ignored with the `void` operator.',
            floatingFixVoid: 'Add void operator to ignore.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreVoid: {
                        description: 'Whether to ignore `void` expressions.',
                        type: 'boolean',
                    },
                    ignoreIIFE: {
                        description: 'Whether to ignore async IIFEs (Immediately Invocated Function Expressions).',
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
        type: 'problem',
    },
    defaultOptions: [
        {
            ignoreVoid: true,
            ignoreIIFE: false,
        },
    ],
    create(context, [options]) {
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        return {
            ExpressionStatement(node) {
                if (options.ignoreIIFE && isAsyncIife(node)) {
                    return;
                }
                let expression = node.expression;
                if (expression.type === utils_1.AST_NODE_TYPES.ChainExpression) {
                    expression = expression.expression;
                }
                if (isUnhandledPromise(checker, expression)) {
                    if (options.ignoreVoid) {
                        context.report({
                            node,
                            messageId: 'floatingVoid',
                            suggest: [
                                {
                                    messageId: 'floatingFixVoid',
                                    fix(fixer) {
                                        const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node.expression);
                                        if (isHigherPrecedenceThanUnary(tsNode)) {
                                            return fixer.insertTextBefore(node, 'void ');
                                        }
                                        else {
                                            return [
                                                fixer.insertTextBefore(node, 'void ('),
                                                fixer.insertTextAfterRange([expression.range[1], expression.range[1]], ')'),
                                            ];
                                        }
                                    },
                                },
                            ],
                        });
                    }
                    else {
                        context.report({
                            node,
                            messageId: 'floating',
                            suggest: [
                                {
                                    messageId: 'floatingFixAwait',
                                    fix(fixer) {
                                        if (expression.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                                            expression.operator === 'void') {
                                            return fixer.replaceTextRange([expression.range[0], expression.range[0] + 4], 'await');
                                        }
                                        const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node.expression);
                                        if (isHigherPrecedenceThanUnary(tsNode)) {
                                            return fixer.insertTextBefore(node, 'await ');
                                        }
                                        else {
                                            return [
                                                fixer.insertTextBefore(node, 'await ('),
                                                fixer.insertTextAfterRange([expression.range[1], expression.range[1]], ')'),
                                            ];
                                        }
                                    },
                                },
                            ],
                        });
                    }
                }
            },
        };
        function isHigherPrecedenceThanUnary(node) {
            const operator = tsutils.isBinaryExpression(node)
                ? node.operatorToken.kind
                : ts.SyntaxKind.Unknown;
            const nodePrecedence = util.getOperatorPrecedence(node.kind, operator);
            return nodePrecedence > util_1.OperatorPrecedence.Unary;
        }
        function isAsyncIife(node) {
            if (node.expression.type !== utils_1.AST_NODE_TYPES.CallExpression) {
                return false;
            }
            return (node.expression.type === utils_1.AST_NODE_TYPES.CallExpression &&
                (node.expression.callee.type ===
                    utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                    node.expression.callee.type === utils_1.AST_NODE_TYPES.FunctionExpression));
        }
        function isUnhandledPromise(checker, node) {
            // First, check expressions whose resulting types may not be promise-like
            if (node.type === utils_1.AST_NODE_TYPES.SequenceExpression) {
                // Any child in a comma expression could return a potentially unhandled
                // promise, so we check them all regardless of whether the final returned
                // value is promise-like.
                return node.expressions.some(item => isUnhandledPromise(checker, item));
            }
            if (!options.ignoreVoid &&
                node.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                node.operator === 'void') {
                // Similarly, a `void` expression always returns undefined, so we need to
                // see what's inside it without checking the type of the overall expression.
                return isUnhandledPromise(checker, node.argument);
            }
            // Check the type. At this point it can't be unhandled if it isn't a promise
            if (!isPromiseLike(checker, parserServices.esTreeNodeToTSNodeMap.get(node))) {
                return false;
            }
            if (node.type === utils_1.AST_NODE_TYPES.CallExpression) {
                // If the outer expression is a call, it must be either a `.then()` or
                // `.catch()` that handles the promise.
                return (!isPromiseCatchCallWithHandler(node) &&
                    !isPromiseThenCallWithRejectionHandler(node) &&
                    !isPromiseFinallyCallWithHandler(node));
            }
            else if (node.type === utils_1.AST_NODE_TYPES.ConditionalExpression) {
                // We must be getting the promise-like value from one of the branches of the
                // ternary. Check them directly.
                return (isUnhandledPromise(checker, node.alternate) ||
                    isUnhandledPromise(checker, node.consequent));
            }
            else if (node.type === utils_1.AST_NODE_TYPES.MemberExpression ||
                node.type === utils_1.AST_NODE_TYPES.Identifier ||
                node.type === utils_1.AST_NODE_TYPES.NewExpression) {
                // If it is just a property access chain or a `new` call (e.g. `foo.bar` or
                // `new Promise()`), the promise is not handled because it doesn't have the
                // necessary then/catch call at the end of the chain.
                return true;
            }
            else if (node.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
                return (isUnhandledPromise(checker, node.left) ||
                    isUnhandledPromise(checker, node.right));
            }
            // We conservatively return false for all other types of expressions because
            // we don't want to accidentally fail if the promise is handled internally but
            // we just can't tell.
            return false;
        }
    },
});
// Modified from tsutils.isThenable() to only consider thenables which can be
// rejected/caught via a second parameter. Original source (MIT licensed):
//
//   https://github.com/ajafff/tsutils/blob/49d0d31050b44b81e918eae4fbaf1dfe7b7286af/util/type.ts#L95-L125
function isPromiseLike(checker, node) {
    const type = checker.getTypeAtLocation(node);
    for (const ty of tsutils.unionTypeParts(checker.getApparentType(type))) {
        const then = ty.getProperty('then');
        if (then === undefined) {
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
function hasMatchingSignature(type, matcher) {
    for (const t of tsutils.unionTypeParts(type)) {
        if (t.getCallSignatures().some(matcher)) {
            return true;
        }
    }
    return false;
}
function isFunctionParam(checker, param, node) {
    const type = checker.getApparentType(checker.getTypeOfSymbolAtLocation(param, node));
    for (const t of tsutils.unionTypeParts(type)) {
        if (t.getCallSignatures().length !== 0) {
            return true;
        }
    }
    return false;
}
function isPromiseCatchCallWithHandler(expression) {
    return (expression.callee.type === utils_1.AST_NODE_TYPES.MemberExpression &&
        expression.callee.property.type === utils_1.AST_NODE_TYPES.Identifier &&
        expression.callee.property.name === 'catch' &&
        expression.arguments.length >= 1);
}
function isPromiseThenCallWithRejectionHandler(expression) {
    return (expression.callee.type === utils_1.AST_NODE_TYPES.MemberExpression &&
        expression.callee.property.type === utils_1.AST_NODE_TYPES.Identifier &&
        expression.callee.property.name === 'then' &&
        expression.arguments.length >= 2);
}
function isPromiseFinallyCallWithHandler(expression) {
    return (expression.callee.type === utils_1.AST_NODE_TYPES.MemberExpression &&
        expression.callee.property.type === utils_1.AST_NODE_TYPES.Identifier &&
        expression.callee.property.name === 'finally' &&
        expression.arguments.length >= 1);
}
//# sourceMappingURL=no-floating-promises.js.map