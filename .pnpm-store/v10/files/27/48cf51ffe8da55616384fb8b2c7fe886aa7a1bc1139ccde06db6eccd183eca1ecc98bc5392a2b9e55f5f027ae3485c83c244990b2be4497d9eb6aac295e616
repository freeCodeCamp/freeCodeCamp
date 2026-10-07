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
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'strict-void-return',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow passing a value-returning function in a position accepting a void function',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            asyncFunc: 'Async function used in a context where a void function is expected.',
            nonVoidFunc: 'Value-returning function used in a context where a void function is expected.',
            nonVoidReturn: 'Value returned in a context where a void return is expected.',
            suggestAddVoidOp: 'Add a void operator to discard the return value.',
            suggestWrapInAsyncIIFE: 'Wrap the function body in an async IIFE.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowReturnAny: {
                        type: 'boolean',
                        description: 'Whether to allow functions returning `any` to be used in place expecting a `void` function.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowReturnAny: false,
        },
    ],
    create(context, [options]) {
        const sourceCode = context.sourceCode;
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        return {
            ArrayExpression: (node) => {
                for (const elemNode of node.elements) {
                    if (elemNode != null &&
                        elemNode.type !== utils_1.AST_NODE_TYPES.SpreadElement) {
                        checkExpressionNode(elemNode);
                    }
                }
            },
            ArrowFunctionExpression: (node) => {
                if (node.body.type !== utils_1.AST_NODE_TYPES.BlockStatement) {
                    checkExpressionNode(node.body);
                }
            },
            AssignmentExpression: (node) => {
                checkExpressionNode(node.right); // should ignore operators like `+=` or `-=` automatically
            },
            'CallExpression, NewExpression': checkFunctionCallNode,
            JSXAttribute: (node) => {
                if (node.value?.type === utils_1.AST_NODE_TYPES.JSXExpressionContainer &&
                    node.value.expression.type !== utils_1.AST_NODE_TYPES.JSXEmptyExpression) {
                    checkExpressionNode(node.value.expression);
                }
            },
            MethodDefinition: checkClassMethodNode,
            ObjectExpression: (node) => {
                for (const propNode of node.properties) {
                    if (propNode.type !== utils_1.AST_NODE_TYPES.SpreadElement) {
                        checkObjectPropertyNode(propNode);
                    }
                }
            },
            PropertyDefinition: checkClassPropertyNode,
            ReturnStatement: (node) => {
                if (node.argument != null) {
                    checkExpressionNode(node.argument);
                }
            },
            VariableDeclarator: (node) => {
                if (node.init != null) {
                    checkExpressionNode(node.init);
                }
            },
        };
        function isVoidReturningFunctionType(type) {
            const returnTypes = tsutils
                .getCallSignaturesOfType(type)
                .flatMap(signature => tsutils.unionConstituents(signature.getReturnType()));
            return (returnTypes.length > 0 &&
                returnTypes.every(type => tsutils.isTypeFlagSet(type, ts.TypeFlags.Void)));
        }
        /**
         * Finds errors in any expression node.
         *
         * Compares the type of the node against the contextual (expected) type.
         *
         * @returns `true` if the expected type was void function.
         */
        function checkExpressionNode(node) {
            const expectedType = parserServices.getContextualType(node);
            if (expectedType != null && isVoidReturningFunctionType(expectedType)) {
                reportIfNonVoidFunction(node);
                return true;
            }
            return false;
        }
        /**
         * Finds errors in function calls.
         *
         * When checking arguments, we also manually figure out the argument types
         * by iterating over all the function signatures.
         * Thanks to this, we can find arguments like `(() => void) | (() => any)`
         * and treat them as void too.
         * This is done to also support checking functions like `addEventListener`
         * which have overloads where one callback returns any.
         *
         * Implementation mostly based on no-misused-promises,
         * which does this to find `(() => void) | (() => NotThenable)`
         * and report them too.
         */
        function checkFunctionCallNode(callNode) {
            if (callNode.arguments.length === 0) {
                return;
            }
            const callTsNode = parserServices.esTreeNodeToTSNodeMap.get(callNode);
            const funcType = checker.getTypeAtLocation(callTsNode.expression);
            const funcSignatures = tsutils
                .unionConstituents(funcType)
                .flatMap(type => ts.isCallExpression(callTsNode)
                ? type.getCallSignatures()
                : type.getConstructSignatures());
            for (const [argIdx, argNode] of callNode.arguments.entries()) {
                if (argNode.type === utils_1.AST_NODE_TYPES.SpreadElement) {
                    continue;
                }
                // Collect the types from all of the call signatures
                const argExpectedReturnTypes = funcSignatures
                    .map(s => s.parameters[argIdx])
                    .filter(Boolean)
                    .map(param => checker.getTypeOfSymbolAtLocation(param, callTsNode.expression))
                    .flatMap(paramType => tsutils.unionConstituents(paramType))
                    .flatMap(paramType => paramType.getCallSignatures())
                    .map(paramSignature => paramSignature.getReturnType());
                const hasSingleSignature = funcSignatures.length === 1;
                const allSignaturesReturnVoid = argExpectedReturnTypes.every(type => isVoid(type) ||
                    // Treat as void even though it might be technically any.
                    isNullishOrAny(type) ||
                    // `getTypeOfSymbolAtLocation` returns unresolved type parameters
                    // (e.g. `T`), even for overloads that match the call.
                    //
                    // Since we can't tell whether a generic overload currently matches,
                    // we treat TypeParameters similar to void.
                    tsutils.isTypeParameter(type));
                // Check against the contextual type first, but only when there is a
                // single signature or when all signatures return void, because
                // `getContextualType` resolves to the first overload's return type even
                // though there may be another one that matches the call.
                if ((hasSingleSignature || allSignaturesReturnVoid) &&
                    checkExpressionNode(argNode)) {
                    continue;
                }
                if (
                // At least one return type is void
                argExpectedReturnTypes.some(isVoid) &&
                    // The rest are nullish or any
                    argExpectedReturnTypes.every(isNullishOrAny)) {
                    // We treat this argument as void even though it might be technically any.
                    reportIfNonVoidFunction(argNode);
                }
            }
        }
        function isNullishOrAny(type) {
            return tsutils.isTypeFlagSet(type, ts.TypeFlags.VoidLike |
                ts.TypeFlags.Undefined |
                ts.TypeFlags.Null |
                ts.TypeFlags.Any |
                ts.TypeFlags.Never);
        }
        function isVoid(type) {
            return tsutils.isTypeFlagSet(type, ts.TypeFlags.Void);
        }
        /**
         * Finds errors in an object property.
         *
         * Object properties require different logic
         * when the property is a method shorthand.
         */
        function checkObjectPropertyNode(propNode) {
            const valueNode = propNode.value;
            const propTsNode = parserServices.esTreeNodeToTSNodeMap.get(propNode);
            if (propTsNode.kind === ts.SyntaxKind.MethodDeclaration) {
                // Object property is a method shorthand.
                if (propTsNode.name.kind === ts.SyntaxKind.ComputedPropertyName) {
                    // Don't check object methods with computed name.
                    return;
                }
                const objType = parserServices.getContextualType(propNode.parent);
                if (objType == null) {
                    // Expected object type is unknown.
                    return;
                }
                const propSymbol = checker.getPropertyOfType(objType, propTsNode.name.text);
                if (propSymbol == null) {
                    // Expected object type is known, but it doesn't have this method.
                    return;
                }
                const propExpectedType = checker.getTypeOfSymbolAtLocation(propSymbol, propTsNode);
                if (isVoidReturningFunctionType(propExpectedType)) {
                    reportIfNonVoidFunction(valueNode);
                }
                return;
            }
            // Object property is a regular property.
            checkExpressionNode(valueNode);
        }
        /**
         * Finds errors in a class property.
         *
         * In addition to the regular check against the contextual type,
         * we also check against the base class property (when the class extends another class)
         * and the implemented interfaces (when the class implements an interface).
         */
        function checkClassPropertyNode(propNode) {
            if (propNode.value == null) {
                return;
            }
            // Check in comparison to the base types.
            for (const { baseMemberType } of util.getBaseTypesOfClassMember(parserServices, propNode)) {
                if (isVoidReturningFunctionType(baseMemberType)) {
                    reportIfNonVoidFunction(propNode.value);
                    return; // Report at most one error.
                }
            }
            // Check in comparison to the contextual type.
            checkExpressionNode(propNode.value);
        }
        /**
         * Finds errors in a class method.
         *
         * We check against the base class method (when the class extends another class)
         * and the implemented interfaces (when the class implements an interface).
         */
        function checkClassMethodNode(methodNode) {
            if (methodNode.value.type === utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
                return;
            }
            // Check in comparison to the base types.
            for (const { baseMemberType } of util.getBaseTypesOfClassMember(parserServices, methodNode)) {
                if (isVoidReturningFunctionType(baseMemberType)) {
                    reportIfNonVoidFunction(methodNode.value);
                    return; // Report at most one error.
                }
            }
        }
        /**
         * Reports an error if the provided node is not allowed in a void function context.
         */
        function reportIfNonVoidFunction(funcNode) {
            const allowedReturnType = ts.TypeFlags.Void |
                ts.TypeFlags.Never |
                ts.TypeFlags.Undefined |
                (options.allowReturnAny ? ts.TypeFlags.Any : 0);
            const tsNode = parserServices.esTreeNodeToTSNodeMap.get(funcNode);
            const actualType = checker.getApparentType(checker.getTypeAtLocation(tsNode));
            if (tsutils
                .getCallSignaturesOfType(actualType)
                .map(signature => signature.getReturnType())
                .flatMap(returnType => tsutils.unionConstituents(returnType))
                .every(type => tsutils.isTypeFlagSet(type, allowedReturnType))) {
                // The function is already void.
                return;
            }
            if (funcNode.type !== utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
                funcNode.type !== utils_1.AST_NODE_TYPES.FunctionExpression) {
                // The provided function is not a function literal.
                // Report a generic error.
                return context.report({
                    node: funcNode,
                    messageId: `nonVoidFunc`,
                });
            }
            // The provided function is a function literal.
            if (funcNode.generator) {
                // The provided function is a generator function.
                // Generator functions are not allowed.
                return context.report({
                    loc: util.getFunctionHeadLoc(funcNode, sourceCode),
                    messageId: `nonVoidFunc`,
                });
            }
            if (funcNode.async) {
                // The provided function is an async function.
                if (funcNode.body.type !== utils_1.AST_NODE_TYPES.BlockStatement) {
                    // This async function is an arrow function shorthand without braces.
                    return context.report({
                        loc: util.getFunctionHeadLoc(funcNode, sourceCode),
                        messageId: 'asyncFunc',
                        suggest: utils_1.ASTUtils.hasSideEffect(funcNode.body, sourceCode)
                            ? // This function has side effects, e.g. `async () => doSomething()`.
                                // Suggest removing the async keyword and adding a void operator.
                                [
                                    {
                                        messageId: 'suggestAddVoidOp',
                                        fix: fixer => addVoidToArrowFix(fixer, funcNode),
                                    },
                                ]
                            : [],
                    });
                }
                // This async function has a block body.
                // Suggest wrapping its body in an async IIFE.
                return context.report({
                    loc: util.getFunctionHeadLoc(funcNode, sourceCode),
                    messageId: 'asyncFunc',
                    suggest: [
                        {
                            messageId: 'suggestWrapInAsyncIIFE',
                            fix: fixer => wrapInAsyncIIFEFix(fixer, funcNode),
                        },
                    ],
                });
            }
            // This function is a regular or arrow sync function.
            if (funcNode.body.type !== utils_1.AST_NODE_TYPES.BlockStatement) {
                // This function is an arrow function shorthand without braces.
                return context.report({
                    node: funcNode.body,
                    messageId: 'nonVoidReturn',
                    suggest: utils_1.ASTUtils.hasSideEffect(funcNode.body, sourceCode)
                        ? // This function has side effects, e.g. `() => doSomething()`.
                            // Suggest adding a void operator.
                            [
                                {
                                    messageId: 'suggestAddVoidOp',
                                    fix: fixer => addVoidToArrowFix(fixer, funcNode),
                                },
                            ]
                        : [],
                });
            }
            // This function is a regular or arrow sync function with a block body.
            // Check return type annotation.
            if (funcNode.returnType != null) {
                // The provided function has an explicit return type annotation.
                const typeAnnotationNode = funcNode.returnType.typeAnnotation;
                if (typeAnnotationNode.type !== utils_1.AST_NODE_TYPES.TSVoidKeyword) {
                    // The explicit return type is not `void`.
                    return context.report({
                        node: typeAnnotationNode,
                        messageId: `nonVoidFunc`,
                    });
                }
            }
            // Iterate over all function's return statements.
            for (const statement of util.walkStatements(funcNode.body.body)) {
                if (statement.type !== utils_1.AST_NODE_TYPES.ReturnStatement ||
                    statement.argument == null) {
                    // We only care about return statements with a value.
                    continue;
                }
                const returnType = checker.getTypeAtLocation(parserServices.esTreeNodeToTSNodeMap.get(statement.argument));
                if (tsutils.isTypeFlagSet(returnType, allowedReturnType)) {
                    // Only visit return statements with invalid type.
                    continue;
                }
                // This return statement causes the non-void return type.
                const returnKeyword = util.nullThrows(sourceCode.getFirstToken(statement, {
                    filter: token => token.value === 'return',
                }), util.NullThrowsReasons.MissingToken('return keyword', statement.type));
                context.report({
                    node: returnKeyword,
                    messageId: `nonVoidReturn`,
                });
            }
            // No invalid returns found. The function is allowed.
        }
        /**
         * Removes the async keyword and replaces the return type with void.
         */
        function* makeSyncFuncFix(fixer, funcNode) {
            if (funcNode.async) {
                // Remove async keyword
                const funcHeadNode = funcNode.parent.type === utils_1.AST_NODE_TYPES.Property ||
                    funcNode.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition
                    ? funcNode.parent
                    : funcNode;
                const asyncToken = util.nullThrows(sourceCode.getFirstToken(funcHeadNode, {
                    filter: token => token.value === 'async',
                }), util.NullThrowsReasons.MissingToken('async keyword', funcNode.type));
                yield fixer.remove(asyncToken);
            }
            // Replace return type with void
            if (funcNode.returnType != null) {
                yield fixer.replaceText(funcNode.returnType.typeAnnotation, 'void');
            }
        }
        /**
         * Makes the function sync and adds a void operator to the arrow shorthand body.
         */
        function* addVoidToArrowFix(fixer, funcNode) {
            yield* makeSyncFuncFix(fixer, funcNode);
            // Add void operator
            yield util.getWrappingFixer({
                node: funcNode.body,
                sourceCode,
                wrap: code => `void ${code}`,
            })(fixer);
        }
        /**
         * Makes the function sync and wraps the body in an inner async IIFE.
         */
        function* wrapInAsyncIIFEFix(fixer, funcNode) {
            yield* makeSyncFuncFix(fixer, funcNode);
            // Wrap body in async IIFE.
            // This preserves the node kind (normal/arrow) for the _outer_ function
            // and uses an arrow function for the _inner_ function,
            // so that `this` will always refer to the same value as before.
            if (funcNode.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
                const arrowToken = util.nullThrows(sourceCode.getTokenBefore(funcNode.body, {
                    filter: token => token.value === '=>',
                }), util.NullThrowsReasons.MissingToken('arrow token', 'before arrow function body'));
                yield fixer.insertTextAfter(arrowToken, ' void (async () =>');
                yield fixer.insertTextAfter(funcNode, ')()');
            }
            else {
                yield fixer.insertTextBefore(funcNode.body, '{ (async () => ');
                yield fixer.insertTextAfter(funcNode.body, ')(); }');
            }
        }
    },
});
//# sourceMappingURL=strict-void-return.js.map