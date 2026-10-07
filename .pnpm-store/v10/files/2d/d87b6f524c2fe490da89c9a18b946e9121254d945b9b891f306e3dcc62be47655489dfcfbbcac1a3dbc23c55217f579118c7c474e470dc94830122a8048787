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
exports.default = (0, util_1.createRule)({
    name: 'require-await',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow async functions which do not return promises and have no `await` expression',
            extendsBaseRule: true,
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            missingAwait: "{{name}} has no 'await' expression.",
            removeAsync: "Remove 'async'.",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        let scopeInfo = null;
        /**
         * Push the scope info object to the stack.
         */
        function enterFunction(node) {
            scopeInfo = {
                hasAsync: node.async,
                hasAwait: false,
                isAsyncYield: false,
                isGen: node.generator || false,
                upper: scopeInfo,
            };
        }
        /**
         * Pop the top scope info object from the stack.
         * Also, it reports the function if needed.
         */
        function exitFunction(node) {
            /* istanbul ignore if */ if (!scopeInfo) {
                // this shouldn't ever happen, as we have to exit a function after we enter it
                return;
            }
            if (node.async &&
                !scopeInfo.hasAwait &&
                !isEmptyFunction(node) &&
                !(scopeInfo.isGen && scopeInfo.isAsyncYield)) {
                // If the function belongs to a method definition or
                // property, then the function's range may not include the
                // `async` keyword and we should look at the parent instead.
                const nodeWithAsyncKeyword = (node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                    node.parent.value === node) ||
                    (node.parent.type === utils_1.AST_NODE_TYPES.Property &&
                        node.parent.method &&
                        node.parent.value === node)
                    ? node.parent
                    : node;
                const asyncToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(nodeWithAsyncKeyword, token => token.value === 'async'), 'The node is an async function, so it must have an "async" token.');
                const asyncRange = [
                    asyncToken.range[0],
                    (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(asyncToken, {
                        includeComments: true,
                    }), 'There will always be a token after the "async" keyword.').range[0],
                ];
                // Removing the `async` keyword can cause parsing errors if the
                // current statement is relying on automatic semicolon insertion.
                // If ASI is currently being used, then we should replace the
                // `async` keyword with a semicolon.
                const nextToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(asyncToken), 'There will always be a token after the "async" keyword.');
                const addSemiColon = nextToken.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                    (nextToken.value === '[' || nextToken.value === '(') &&
                    (nodeWithAsyncKeyword.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
                        (0, util_1.isStartOfExpressionStatement)(nodeWithAsyncKeyword)) &&
                    (0, util_1.needsPrecedingSemicolon)(context.sourceCode, nodeWithAsyncKeyword);
                const changes = [
                    { range: asyncRange, replacement: addSemiColon ? ';' : undefined },
                ];
                // If there's a return type annotation and it's a
                // `Promise<T>`, we can also change the return type
                // annotation to just `T` as part of the suggestion.
                // Alternatively, if the function is a generator and
                // the return type annotation is `AsyncGenerator<T>`,
                // then we can change it to `Generator<T>`.
                if (node.returnType?.typeAnnotation.type ===
                    utils_1.AST_NODE_TYPES.TSTypeReference) {
                    if (scopeInfo.isGen) {
                        if (hasTypeName(node.returnType.typeAnnotation, 'AsyncGenerator')) {
                            changes.push({
                                range: node.returnType.typeAnnotation.typeName.range,
                                replacement: 'Generator',
                            });
                        }
                    }
                    else if (hasTypeName(node.returnType.typeAnnotation, 'Promise') &&
                        node.returnType.typeAnnotation.typeArguments != null) {
                        const openAngle = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node.returnType.typeAnnotation, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                            token.value === '<'), 'There are type arguments, so the angle bracket will exist.');
                        const closeAngle = (0, util_1.nullThrows)(context.sourceCode.getLastToken(node.returnType.typeAnnotation, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                            token.value === '>'), 'There are type arguments, so the angle bracket will exist.');
                        changes.push(
                        // Remove the closing angled bracket.
                        { range: closeAngle.range, replacement: undefined }, 
                        // Remove the "Promise" identifier
                        // and the opening angled bracket.
                        {
                            range: [
                                node.returnType.typeAnnotation.typeName.range[0],
                                openAngle.range[1],
                            ],
                            replacement: undefined,
                        });
                    }
                }
                context.report({
                    loc: (0, util_1.getFunctionHeadLoc)(node, context.sourceCode),
                    node,
                    messageId: 'missingAwait',
                    data: {
                        name: (0, util_1.upperCaseFirst)((0, util_1.getFunctionNameWithKind)(node)),
                    },
                    suggest: [
                        {
                            messageId: 'removeAsync',
                            fix: (fixer) => changes.map(change => change.replacement != null
                                ? fixer.replaceTextRange(change.range, change.replacement)
                                : fixer.removeRange(change.range)),
                        },
                    ],
                });
            }
            scopeInfo = scopeInfo.upper;
        }
        /**
         * Checks if the node returns a thenable type
         */
        function isThenableType(node) {
            const type = checker.getTypeAtLocation(node);
            return tsutils.isThenableType(checker, node, type);
        }
        /**
         * Marks the current scope as having an await
         */
        function markAsHasAwait() {
            if (!scopeInfo) {
                return;
            }
            scopeInfo.hasAwait = true;
        }
        /**
         * Mark `scopeInfo.isAsyncYield` to `true` if it
         *  1) delegates async generator function
         *    or
         *  2) yields thenable type
         */
        function visitYieldExpression(node) {
            if (!scopeInfo?.isGen || !node.argument) {
                return;
            }
            if (node.argument.type === utils_1.AST_NODE_TYPES.Literal) {
                // ignoring this as for literals we don't need to check the definition
                // eg : async function* run() { yield* 1 }
                return;
            }
            if (!node.delegate) {
                if (isThenableType(services.esTreeNodeToTSNodeMap.get(node.argument))) {
                    scopeInfo.isAsyncYield = true;
                }
                return;
            }
            const type = services.getTypeAtLocation(node.argument);
            const typesToCheck = expandUnionOrIntersectionType(type);
            for (const type of typesToCheck) {
                const asyncIterator = tsutils.getWellKnownSymbolPropertyOfType(type, 'asyncIterator', checker);
                if (asyncIterator != null) {
                    scopeInfo.isAsyncYield = true;
                    break;
                }
            }
        }
        return {
            ArrowFunctionExpression: enterFunction,
            'ArrowFunctionExpression:exit': exitFunction,
            AwaitExpression: markAsHasAwait,
            'ForOfStatement[await = true]': markAsHasAwait,
            FunctionDeclaration: enterFunction,
            'FunctionDeclaration:exit': exitFunction,
            FunctionExpression: enterFunction,
            'FunctionExpression:exit': exitFunction,
            'VariableDeclaration[kind = "await using"]': markAsHasAwait,
            YieldExpression: visitYieldExpression,
            // check body-less async arrow function.
            // ignore `async () => await foo` because it's obviously correct
            'ArrowFunctionExpression[async = true] > :not(BlockStatement, AwaitExpression)'(node) {
                const expression = services.esTreeNodeToTSNodeMap.get(node);
                if (isThenableType(expression)) {
                    markAsHasAwait();
                }
            },
            ReturnStatement(node) {
                // short circuit early to avoid unnecessary type checks
                if (!scopeInfo || scopeInfo.hasAwait || !scopeInfo.hasAsync) {
                    return;
                }
                const { expression } = services.esTreeNodeToTSNodeMap.get(node);
                if (expression && isThenableType(expression)) {
                    markAsHasAwait();
                }
            },
        };
    },
});
function isEmptyFunction(node) {
    return (node.body.type === utils_1.AST_NODE_TYPES.BlockStatement &&
        node.body.body.length === 0);
}
function expandUnionOrIntersectionType(type) {
    if (type.isUnionOrIntersection()) {
        return type.types.flatMap(expandUnionOrIntersectionType);
    }
    return [type];
}
function hasTypeName(typeReference, typeName) {
    return (typeReference.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
        typeReference.typeName.name === typeName);
}
//# sourceMappingURL=require-await.js.map