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
const util_1 = require("../util");
const promiseUtils_1 = require("../util/promiseUtils");
function parseChecksVoidReturn(checksVoidReturn) {
    switch (checksVoidReturn) {
        case false:
            return false;
        case true:
        case undefined:
            return {
                arguments: true,
                attributes: true,
                inheritedMethods: true,
                properties: true,
                returns: true,
                variables: true,
            };
        default:
            return {
                arguments: checksVoidReturn.arguments ?? true,
                attributes: checksVoidReturn.attributes ?? true,
                inheritedMethods: checksVoidReturn.inheritedMethods ?? true,
                properties: checksVoidReturn.properties ?? true,
                returns: checksVoidReturn.returns ?? true,
                variables: checksVoidReturn.variables ?? true,
            };
    }
}
exports.default = (0, util_1.createRule)({
    name: 'no-misused-promises',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow Promises in places not designed to handle them',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            conditional: 'Expected non-Promise value in a boolean conditional.',
            predicate: 'Expected a non-Promise value to be returned.',
            spread: 'Expected a non-Promise value to be spread in an object.',
            voidReturnArgument: 'Promise returned in function argument where a void return was expected.',
            voidReturnAttribute: 'Promise-returning function provided to attribute where a void return was expected.',
            voidReturnInheritedMethod: "Promise-returning method provided where a void return was expected by extended/implemented type '{{ heritageTypeName }}'.",
            voidReturnProperty: 'Promise-returning function provided to property where a void return was expected.',
            voidReturnReturnValue: 'Promise-returning function provided to return value where a void return was expected.',
            voidReturnVariable: 'Promise-returning function provided to variable where a void return was expected.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checksConditionals: {
                        description: 'Whether to warn when a Promise is provided to conditional statements.',
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Whether to check conditionals.',
                            },
                            {
                                type: 'object',
                                additionalProperties: false,
                                description: 'Detailed settings for conditional inspection.',
                                properties: {
                                    flagUnions: {
                                        type: 'string',
                                        description: 'Configures how union types containing Promise-like types are checked.',
                                        enum: ['all', 'strict', 'none'],
                                    },
                                },
                            },
                        ],
                    },
                    checksSpreads: {
                        type: 'boolean',
                        description: 'Whether to warn when `...` spreading a `Promise`.',
                    },
                    checksVoidReturn: {
                        description: 'Whether to warn when a Promise is returned from a function typed as returning `void`.',
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Whether to disable checking all asynchronous functions.',
                            },
                            {
                                type: 'object',
                                additionalProperties: false,
                                description: 'Which forms of functions may have checking disabled.',
                                properties: {
                                    arguments: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns `void`.',
                                    },
                                    attributes: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns `void`.',
                                    },
                                    inheritedMethods: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous method in a type that extends or implements another type expecting that method to return `void`.',
                                    },
                                    properties: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function passed as an object property expected to be a function that returns `void`.',
                                    },
                                    returns: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function returned in a function whose return type is a function that returns `void`.',
                                    },
                                    variables: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function used as a variable whose return type is a function that returns `void`.',
                                    },
                                },
                            },
                        ],
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            checksConditionals: true,
            checksSpreads: true,
            checksVoidReturn: true,
        },
    ],
    create(context, [{ checksConditionals, checksSpreads, checksVoidReturn }]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const checkedNodes = new Set();
        const flagUnionsOption = normalizeFlagUnionsOption(checksConditionals);
        const conditionalChecks = {
            'CallExpression > MemberExpression': checkArrayPredicates,
            ConditionalExpression: checkTestConditional,
            DoWhileStatement: checkTestConditional,
            ForStatement: checkTestConditional,
            IfStatement: checkTestConditional,
            LogicalExpression: checkConditional,
            'UnaryExpression[operator="!"]'(node) {
                checkConditional(node.argument, true);
            },
            WhileStatement: checkTestConditional,
        };
        checksVoidReturn = parseChecksVoidReturn(checksVoidReturn);
        const voidReturnChecks = checksVoidReturn
            ? {
                ...(checksVoidReturn.arguments && {
                    CallExpression: checkArguments,
                    NewExpression: checkArguments,
                }),
                ...(checksVoidReturn.attributes && {
                    JSXAttribute: checkJSXAttribute,
                }),
                ...(checksVoidReturn.inheritedMethods && {
                    ClassDeclaration: checkClassLikeOrInterfaceNode,
                    ClassExpression: checkClassLikeOrInterfaceNode,
                    TSInterfaceDeclaration: checkClassLikeOrInterfaceNode,
                }),
                ...(checksVoidReturn.properties && {
                    Property: checkProperty,
                }),
                ...(checksVoidReturn.returns && {
                    ReturnStatement: checkReturnStatement,
                }),
                ...(checksVoidReturn.variables && {
                    AssignmentExpression: checkAssignment,
                    VariableDeclarator: checkVariableDeclaration,
                }),
            }
            : {};
        const spreadChecks = {
            SpreadElement: checkSpread,
        };
        /**
         * A syntactic check to see if an annotated type is maybe a function type.
         * This is a perf optimization to help avoid requesting types where possible
         */
        function isPossiblyFunctionType(node) {
            switch (node.typeAnnotation.type) {
                case utils_1.AST_NODE_TYPES.TSConditionalType:
                case utils_1.AST_NODE_TYPES.TSConstructorType:
                case utils_1.AST_NODE_TYPES.TSFunctionType:
                case utils_1.AST_NODE_TYPES.TSImportType:
                case utils_1.AST_NODE_TYPES.TSIndexedAccessType:
                case utils_1.AST_NODE_TYPES.TSInferType:
                case utils_1.AST_NODE_TYPES.TSIntersectionType:
                case utils_1.AST_NODE_TYPES.TSQualifiedName:
                case utils_1.AST_NODE_TYPES.TSThisType:
                case utils_1.AST_NODE_TYPES.TSTypeOperator:
                case utils_1.AST_NODE_TYPES.TSTypeQuery:
                case utils_1.AST_NODE_TYPES.TSTypeReference:
                case utils_1.AST_NODE_TYPES.TSUnionType:
                    return true;
                case utils_1.AST_NODE_TYPES.TSTypeLiteral:
                    return node.typeAnnotation.members.some(member => member.type === utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration ||
                        member.type === utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration);
                case utils_1.AST_NODE_TYPES.TSAbstractKeyword:
                case utils_1.AST_NODE_TYPES.TSAnyKeyword:
                case utils_1.AST_NODE_TYPES.TSArrayType:
                case utils_1.AST_NODE_TYPES.TSAsyncKeyword:
                case utils_1.AST_NODE_TYPES.TSBigIntKeyword:
                case utils_1.AST_NODE_TYPES.TSBooleanKeyword:
                case utils_1.AST_NODE_TYPES.TSDeclareKeyword:
                case utils_1.AST_NODE_TYPES.TSExportKeyword:
                case utils_1.AST_NODE_TYPES.TSIntrinsicKeyword:
                case utils_1.AST_NODE_TYPES.TSLiteralType:
                case utils_1.AST_NODE_TYPES.TSMappedType:
                case utils_1.AST_NODE_TYPES.TSNamedTupleMember:
                case utils_1.AST_NODE_TYPES.TSNeverKeyword:
                case utils_1.AST_NODE_TYPES.TSNullKeyword:
                case utils_1.AST_NODE_TYPES.TSNumberKeyword:
                case utils_1.AST_NODE_TYPES.TSObjectKeyword:
                case utils_1.AST_NODE_TYPES.TSOptionalType:
                case utils_1.AST_NODE_TYPES.TSPrivateKeyword:
                case utils_1.AST_NODE_TYPES.TSProtectedKeyword:
                case utils_1.AST_NODE_TYPES.TSPublicKeyword:
                case utils_1.AST_NODE_TYPES.TSReadonlyKeyword:
                case utils_1.AST_NODE_TYPES.TSRestType:
                case utils_1.AST_NODE_TYPES.TSStaticKeyword:
                case utils_1.AST_NODE_TYPES.TSStringKeyword:
                case utils_1.AST_NODE_TYPES.TSSymbolKeyword:
                case utils_1.AST_NODE_TYPES.TSTemplateLiteralType:
                case utils_1.AST_NODE_TYPES.TSTupleType:
                case utils_1.AST_NODE_TYPES.TSTypePredicate:
                case utils_1.AST_NODE_TYPES.TSUndefinedKeyword:
                case utils_1.AST_NODE_TYPES.TSUnknownKeyword:
                case utils_1.AST_NODE_TYPES.TSVoidKeyword:
                    return false;
            }
        }
        function checkTestConditional(node) {
            if (node.test) {
                checkConditional(node.test, true);
            }
        }
        /**
         * This function analyzes the type of a node and checks if it is a Promise in a boolean conditional.
         * It uses recursion when checking nested logical operators.
         * @param node The AST node to check.
         * @param isTestExpr Whether the node is a descendant of a test expression.
         */
        function checkConditional(node, isTestExpr = false) {
            // prevent checking the same node multiple times
            if (checkedNodes.has(node)) {
                return;
            }
            checkedNodes.add(node);
            if (node.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
                // ignore the left operand for nullish coalescing expressions not in a context of a test expression
                if (node.operator !== '??' || isTestExpr) {
                    checkConditional(node.left, isTestExpr);
                }
                // we ignore the right operand when not in a context of a test expression
                if (isTestExpr) {
                    checkConditional(node.right, isTestExpr);
                }
                return;
            }
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            if (isAlwaysThenable(checker, tsNode)) {
                context.report({
                    node,
                    messageId: 'conditional',
                });
                return;
            }
            if (
            // none -> Report `Promise` but not `Promise | ...`
            (flagUnionsOption === 'none' && isAlwaysThenable(checker, tsNode)) ||
                //
                // all -> Report `Promise` and `Promise | ...`
                (flagUnionsOption === 'all' && isSometimesThenable(checker, tsNode)) ||
                //
                // strict -> Report `Promise<T> | T` but not `Promise<T> | NotT`
                (flagUnionsOption === 'strict' &&
                    hasMatchingPromiseTypeArgument(checker, tsNode))) {
                context.report({
                    node,
                    messageId: 'conditional',
                });
            }
        }
        function checkArrayPredicates(node) {
            const parent = node.parent;
            if (parent.type === utils_1.AST_NODE_TYPES.CallExpression) {
                const callback = parent.arguments.at(0);
                if (callback &&
                    (0, util_1.isArrayMethodCallWithPredicate)(context, services, parent)) {
                    const type = services.esTreeNodeToTSNodeMap.get(callback);
                    if (returnsThenable(checker, type)) {
                        context.report({
                            node: callback,
                            messageId: 'predicate',
                        });
                    }
                }
            }
        }
        function checkArguments(node) {
            if (node.type === utils_1.AST_NODE_TYPES.CallExpression &&
                isPromiseFinallyMethod(node)) {
                return;
            }
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            const voidArgs = voidFunctionArguments(checker, tsNode);
            if (voidArgs.size === 0) {
                return;
            }
            for (const [index, argument] of node.arguments.entries()) {
                if (!voidArgs.has(index)) {
                    continue;
                }
                const tsNode = services.esTreeNodeToTSNodeMap.get(argument);
                if (returnsThenable(checker, tsNode)) {
                    context.report({
                        node: argument,
                        messageId: 'voidReturnArgument',
                    });
                }
            }
        }
        function checkAssignment(node) {
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            const varType = services.getTypeAtLocation(node.left);
            if (!isVoidReturningFunctionType(checker, tsNode.left, varType)) {
                return;
            }
            if (returnsThenable(checker, tsNode.right)) {
                context.report({
                    node: node.right,
                    messageId: 'voidReturnVariable',
                });
            }
        }
        function checkVariableDeclaration(node) {
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            if (tsNode.initializer == null || node.init == null) {
                return;
            }
            if (node.parent.kind === 'using' &&
                hasWellKnownSymbolWithThenableReturn(checker, tsNode.initializer, checker.getTypeAtLocation(tsNode.initializer), 'dispose')) {
                context.report({
                    node: node.init,
                    messageId: 'voidReturnVariable',
                });
            }
            if (node.id.typeAnnotation == null) {
                return;
            }
            const variableType = services.getTypeAtLocation(node.id);
            if (hasWellKnownSymbolWithVoidReturn(checker, tsNode.name, variableType, 'dispose') &&
                hasWellKnownSymbolWithThenableReturn(checker, tsNode.initializer, checker.getTypeAtLocation(tsNode.initializer), 'dispose')) {
                context.report({
                    node: node.init,
                    messageId: 'voidReturnVariable',
                });
            }
            // syntactically ignore some known-good cases to avoid touching type info
            if (!isPossiblyFunctionType(node.id.typeAnnotation)) {
                return;
            }
            const varType = services.getTypeAtLocation(node.id);
            if (!isVoidReturningFunctionType(checker, tsNode.initializer, varType)) {
                return;
            }
            if (returnsThenable(checker, tsNode.initializer)) {
                context.report({
                    node: node.init,
                    messageId: 'voidReturnVariable',
                });
            }
        }
        function checkProperty(node) {
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            if (ts.isPropertyAssignment(tsNode)) {
                const contextualType = checker.getContextualType(tsNode.initializer);
                if (contextualType != null &&
                    isVoidReturningFunctionType(checker, tsNode.initializer, contextualType) &&
                    returnsThenable(checker, tsNode.initializer)) {
                    if ((0, util_1.isFunction)(node.value)) {
                        const functionNode = node.value;
                        if (functionNode.returnType) {
                            context.report({
                                node: functionNode.returnType.typeAnnotation,
                                messageId: 'voidReturnProperty',
                            });
                        }
                        else {
                            context.report({
                                loc: (0, util_1.getFunctionHeadLoc)(functionNode, context.sourceCode),
                                messageId: 'voidReturnProperty',
                            });
                        }
                    }
                    else {
                        context.report({
                            node: node.value,
                            messageId: 'voidReturnProperty',
                        });
                    }
                }
            }
            else if (ts.isShorthandPropertyAssignment(tsNode)) {
                const contextualType = checker.getContextualType(tsNode.name);
                if (contextualType != null &&
                    isVoidReturningFunctionType(checker, tsNode.name, contextualType) &&
                    returnsThenable(checker, tsNode.name)) {
                    context.report({
                        node: node.value,
                        messageId: 'voidReturnProperty',
                    });
                }
            }
            else if (ts.isMethodDeclaration(tsNode)) {
                if (ts.isComputedPropertyName(tsNode.name)) {
                    return;
                }
                const obj = tsNode.parent;
                // Below condition isn't satisfied unless something goes wrong,
                // but is needed for type checking.
                // 'node' does not include class method declaration so 'obj' is
                // always an object literal expression, but after converting 'node'
                // to TypeScript AST, its type includes MethodDeclaration which
                // does include the case of class method declaration.
                if (!ts.isObjectLiteralExpression(obj)) {
                    return;
                }
                if (!returnsThenable(checker, tsNode)) {
                    return;
                }
                const objType = checker.getContextualType(obj);
                if (objType == null) {
                    return;
                }
                const propertySymbol = tsutils
                    .unionConstituents(objType)
                    .map(t => checker.getPropertyOfType(t, tsNode.name.getText()))
                    .find(p => p);
                if (propertySymbol == null) {
                    return;
                }
                const contextualType = checker.getTypeOfSymbolAtLocation(propertySymbol, tsNode.name);
                if (isVoidReturningFunctionType(checker, tsNode.name, contextualType)) {
                    const functionNode = node.value;
                    if (functionNode.returnType) {
                        context.report({
                            node: functionNode.returnType.typeAnnotation,
                            messageId: 'voidReturnProperty',
                        });
                    }
                    else {
                        context.report({
                            loc: (0, util_1.getFunctionHeadLoc)(functionNode, context.sourceCode),
                            messageId: 'voidReturnProperty',
                        });
                    }
                }
                return;
            }
        }
        function checkReturnStatement(node) {
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            if (tsNode.expression == null || node.argument == null) {
                return;
            }
            // syntactically ignore some known-good cases to avoid touching type info
            const functionNode = (() => {
                let current = node.parent;
                while (current && !(0, util_1.isFunction)(current)) {
                    current = current.parent;
                }
                return (0, util_1.nullThrows)(current, util_1.NullThrowsReasons.MissingParent);
            })();
            if (functionNode.returnType &&
                !isPossiblyFunctionType(functionNode.returnType)) {
                return;
            }
            const contextualType = checker.getContextualType(tsNode.expression);
            if (contextualType != null &&
                isVoidReturningFunctionType(checker, tsNode.expression, contextualType) &&
                returnsThenable(checker, tsNode.expression)) {
                context.report({
                    node: node.argument,
                    messageId: 'voidReturnReturnValue',
                });
            }
        }
        function isPromiseFinallyMethod(node) {
            const promiseFinallyCall = (0, promiseUtils_1.parseFinallyCall)(node, context);
            return (promiseFinallyCall != null &&
                (0, util_1.isPromiseLike)(services.program, (0, util_1.getConstrainedTypeAtLocation)(services, promiseFinallyCall.object)));
        }
        function checkClassLikeOrInterfaceNode(node) {
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            const heritageTypes = getHeritageTypes(checker, tsNode);
            if (!heritageTypes?.length) {
                return;
            }
            for (const nodeMember of tsNode.members) {
                const memberName = nodeMember.name?.getText();
                if (memberName == null) {
                    // Call/construct/index signatures don't have names. TS allows call signatures to mismatch,
                    // and construct signatures can't be async.
                    // TODO - Once we're able to use `checker.isTypeAssignableTo` (v8), we can check an index
                    // signature here against its compatible index signatures in `heritageTypes`
                    continue;
                }
                if (!returnsThenable(checker, nodeMember)) {
                    continue;
                }
                const node = services.tsNodeToESTreeNodeMap.get(nodeMember);
                if (isStaticMember(node)) {
                    continue;
                }
                for (const heritageType of heritageTypes) {
                    checkHeritageTypeForMemberReturningVoid(nodeMember, heritageType, memberName);
                }
            }
        }
        /**
         * Checks `heritageType` for a member named `memberName` that returns void; reports the
         * 'voidReturnInheritedMethod' message if found.
         * @param nodeMember Node member that returns a Promise
         * @param heritageType Heritage type to check against
         * @param memberName Name of the member to check for
         */
        function checkHeritageTypeForMemberReturningVoid(nodeMember, heritageType, memberName) {
            const heritageMember = getMemberIfExists(heritageType, memberName);
            if (heritageMember == null) {
                return;
            }
            const memberType = checker.getTypeOfSymbolAtLocation(heritageMember, nodeMember);
            if (!isVoidReturningFunctionType(checker, nodeMember, memberType)) {
                return;
            }
            context.report({
                node: services.tsNodeToESTreeNodeMap.get(nodeMember),
                messageId: 'voidReturnInheritedMethod',
                data: { heritageTypeName: checker.typeToString(heritageType) },
            });
        }
        function checkJSXAttribute(node) {
            if (node.value?.type !== utils_1.AST_NODE_TYPES.JSXExpressionContainer) {
                return;
            }
            const expressionContainer = services.esTreeNodeToTSNodeMap.get(node.value);
            const expression = services.esTreeNodeToTSNodeMap.get(node.value.expression);
            const contextualType = checker.getContextualType(expressionContainer);
            if (contextualType != null &&
                isVoidReturningFunctionType(checker, expressionContainer, contextualType) &&
                returnsThenable(checker, expression)) {
                context.report({
                    node: node.value,
                    messageId: 'voidReturnAttribute',
                });
            }
        }
        function checkSpread(node) {
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            if (isSometimesThenable(checker, tsNode.expression)) {
                context.report({
                    node: node.argument,
                    messageId: 'spread',
                });
            }
        }
        return {
            ...(checksConditionals ? conditionalChecks : {}),
            ...(checksVoidReturn ? voidReturnChecks : {}),
            ...(checksSpreads ? spreadChecks : {}),
        };
    },
});
function isSometimesThenable(checker, node) {
    const type = checker.getTypeAtLocation(node);
    for (const subType of tsutils.unionConstituents(checker.getApparentType(type))) {
        if (tsutils.isThenableType(checker, node, subType)) {
            return true;
        }
    }
    return false;
}
// Variation on the thenable check which requires all forms of the type (read:
// alternates in a union) to be thenable. Otherwise, you might be trying to
// check if something is defined or undefined and get caught because one of the
// branches is thenable.
function isAlwaysThenable(checker, node) {
    const type = checker.getTypeAtLocation(node);
    for (const subType of tsutils.unionConstituents(checker.getApparentType(type))) {
        const thenProp = subType.getProperty('then');
        // If one of the alternates has no then property, it is not thenable in all
        // cases.
        if (thenProp == null) {
            return false;
        }
        // We walk through each variation of the then property. Since we know it
        // exists at this point, we just need at least one of the alternates to
        // be of the right form to consider it thenable.
        const thenType = checker.getTypeOfSymbolAtLocation(thenProp, node);
        let hasThenableSignature = false;
        for (const subType of tsutils.unionConstituents(thenType)) {
            for (const signature of subType.getCallSignatures()) {
                if (signature.parameters.length !== 0 &&
                    isFunctionParam(checker, signature.parameters[0], node)) {
                    hasThenableSignature = true;
                    break;
                }
            }
            // We only need to find one variant of the then property that has a
            // function signature for it to be thenable.
            if (hasThenableSignature) {
                break;
            }
        }
        // If no flavors of the then property are thenable, we don't consider the
        // overall type to be thenable
        if (!hasThenableSignature) {
            return false;
        }
    }
    // If all variants are considered thenable (i.e. haven't returned false), we
    // consider the overall type thenable
    return true;
}
function isFunctionParam(checker, param, node) {
    const type = checker.getApparentType(checker.getTypeOfSymbolAtLocation(param, node));
    for (const subType of tsutils.unionConstituents(type)) {
        if (subType.getCallSignatures().length !== 0) {
            return true;
        }
    }
    return false;
}
function checkThenableOrVoidArgument(checker, node, type, index, thenableReturnIndices, voidReturnIndices) {
    if (isThenableReturningFunctionType(checker, node.expression, type)) {
        thenableReturnIndices.add(index);
    }
    else if (isVoidReturningFunctionType(checker, node.expression, type) &&
        // If a certain argument accepts both thenable and void returns,
        // a promise-returning function is valid
        !thenableReturnIndices.has(index)) {
        voidReturnIndices.add(index);
    }
    const contextualType = checker.getContextualTypeForArgumentAtIndex(node, index);
    if (contextualType !== type) {
        checkThenableOrVoidArgument(checker, node, contextualType, index, thenableReturnIndices, voidReturnIndices);
    }
}
// Get the positions of arguments which are void functions (and not also
// thenable functions). These are the candidates for the void-return check at
// the current call site.
// If the function parameters end with a 'rest' parameter, then we consider
// the array type parameter (e.g. '...args:Array<SomeType>') when determining
// if trailing arguments are candidates.
function voidFunctionArguments(checker, node) {
    // 'new' can be used without any arguments, as in 'let b = new Object;'
    // In this case, there are no argument positions to check, so return early.
    if (!node.arguments) {
        return new Set();
    }
    const thenableReturnIndices = new Set();
    const voidReturnIndices = new Set();
    const type = checker.getTypeAtLocation(node.expression);
    // We can't use checker.getResolvedSignature because it prefers an early '() => void' over a later '() => Promise<void>'
    // See https://github.com/microsoft/TypeScript/issues/48077
    for (const subType of tsutils.unionConstituents(type)) {
        // Standard function calls and `new` have two different types of signatures
        const signatures = ts.isCallExpression(node)
            ? subType.getCallSignatures()
            : subType.getConstructSignatures();
        for (const signature of signatures) {
            for (const [index, parameter] of signature.parameters.entries()) {
                const decl = parameter.valueDeclaration;
                let type = checker.getTypeOfSymbolAtLocation(parameter, node.expression);
                // If this is a array 'rest' parameter, check all of the argument indices
                // from the current argument to the end.
                if (decl && (0, util_1.isRestParameterDeclaration)(decl)) {
                    if (checker.isArrayType(type)) {
                        // Unwrap 'Array<MaybeVoidFunction>' to 'MaybeVoidFunction',
                        // so that we'll handle it in the same way as a non-rest
                        // 'param: MaybeVoidFunction'
                        type = checker.getTypeArguments(type)[0];
                        for (let i = index; i < node.arguments.length; i++) {
                            checkThenableOrVoidArgument(checker, node, type, i, thenableReturnIndices, voidReturnIndices);
                        }
                    }
                    else if (checker.isTupleType(type)) {
                        // Check each type in the tuple - for example, [boolean, () => void] would
                        // add the index of the second tuple parameter to 'voidReturnIndices'
                        const typeArgs = checker.getTypeArguments(type);
                        for (let i = index; i < node.arguments.length && i - index < typeArgs.length; i++) {
                            checkThenableOrVoidArgument(checker, node, typeArgs[i - index], i, thenableReturnIndices, voidReturnIndices);
                        }
                    }
                }
                else {
                    checkThenableOrVoidArgument(checker, node, type, index, thenableReturnIndices, voidReturnIndices);
                }
            }
        }
    }
    for (const index of thenableReturnIndices) {
        voidReturnIndices.delete(index);
    }
    return voidReturnIndices;
}
/**
 * @returns Whether any call signature of the type has a thenable return type.
 */
function anySignatureIsThenableType(checker, node, type) {
    for (const signature of type.getCallSignatures()) {
        const returnType = signature.getReturnType();
        if (tsutils.isThenableType(checker, node, returnType)) {
            return true;
        }
    }
    return false;
}
/**
 * @returns Whether type is a thenable-returning function.
 */
function isThenableReturningFunctionType(checker, node, type) {
    for (const subType of tsutils.unionConstituents(type)) {
        if (anySignatureIsThenableType(checker, node, subType)) {
            return true;
        }
    }
    return false;
}
/**
 * @returns Whether type is a void-returning function.
 */
function isVoidReturningFunctionType(checker, node, type) {
    let hadVoidReturn = false;
    for (const subType of tsutils.unionConstituents(type)) {
        for (const signature of subType.getCallSignatures()) {
            const returnType = signature.getReturnType();
            // If a certain positional argument accepts both thenable and void returns,
            // a promise-returning function is valid
            if (tsutils.isThenableType(checker, node, returnType)) {
                return false;
            }
            hadVoidReturn ||= tsutils.isTypeFlagSet(returnType, ts.TypeFlags.Void);
        }
    }
    return hadVoidReturn;
}
/**
 * @returns Whether expression is a function that returns a thenable.
 */
function returnsThenable(checker, node) {
    const type = checker.getApparentType(checker.getTypeAtLocation(node));
    return tsutils
        .unionConstituents(type)
        .some(t => anySignatureIsThenableType(checker, node, t));
}
function getHeritageTypes(checker, tsNode) {
    return tsNode.heritageClauses
        ?.flatMap(clause => clause.types)
        .map(typeExpression => checker.getTypeAtLocation(typeExpression));
}
/**
 * @returns The member with the given name in `type`, if it exists.
 */
function getMemberIfExists(type, memberName) {
    const escapedMemberName = ts.escapeLeadingUnderscores(memberName);
    const symbolMemberMatch = type.getSymbol()?.members?.get(escapedMemberName);
    return (symbolMemberMatch ?? tsutils.getPropertyOfType(type, escapedMemberName));
}
function isStaticMember(node) {
    return ((node.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
        node.type === utils_1.AST_NODE_TYPES.PropertyDefinition ||
        node.type === utils_1.AST_NODE_TYPES.AccessorProperty) &&
        node.static);
}
function hasWellKnownSymbolWithThenableReturn(checker, node, type, symbolName) {
    return tsutils
        .unionConstituents(checker.getApparentType(type))
        .some(typePart => {
        const symbol = tsutils.getWellKnownSymbolPropertyOfType(typePart, symbolName, checker);
        if (symbol == null) {
            return false;
        }
        return isThenableReturningFunctionType(checker, node, checker.getTypeOfSymbolAtLocation(symbol, node));
    });
}
function hasWellKnownSymbolWithVoidReturn(checker, node, type, symbolName) {
    return tsutils
        .unionConstituents(checker.getApparentType(type))
        .some(typePart => {
        const symbol = tsutils.getWellKnownSymbolPropertyOfType(typePart, symbolName, checker);
        if (symbol == null) {
            return false;
        }
        return isVoidReturningFunctionType(checker, node, checker.getTypeOfSymbolAtLocation(symbol, node));
    });
}
/**
 * Check that the Promise argument is the same as the rest of the type when it is a Union that contains Promise.
 */
function hasMatchingPromiseTypeArgument(checker, node) {
    const type = checker.getTypeAtLocation(node);
    const unionConstituents = tsutils.unionConstituents(checker.getApparentType(type));
    const promiseTypes = unionConstituents.filter(type => tsutils.isThenableType(checker, node, type));
    if (promiseTypes.length === 0) {
        return false;
    }
    const nonPromiseUnionConstituents = unionConstituents.filter(type => !promiseTypes.includes(type));
    const awaitedTypeConstituents = [];
    for (const promiseType of promiseTypes) {
        const awaitedType = checker.getAwaitedType(promiseType);
        if (!awaitedType) {
            return false;
        }
        awaitedTypeConstituents.push(...tsutils.unionConstituents(awaitedType));
    }
    const typesAreEquivalent = (left, right) => checker.isTypeAssignableTo(left, right) &&
        checker.isTypeAssignableTo(right, left);
    return (nonPromiseUnionConstituents.every(type => awaitedTypeConstituents.some(awaited => typesAreEquivalent(type, awaited))) &&
        awaitedTypeConstituents.every(awaited => nonPromiseUnionConstituents.some(type => typesAreEquivalent(type, awaited))));
}
function normalizeFlagUnionsOption(checksConditionals) {
    if (!checksConditionals || checksConditionals === true) {
        return 'none';
    }
    return checksConditionals.flagUnions ?? 'none';
}
//# sourceMappingURL=no-misused-promises.js.map