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
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
const getParentFunctionNode_1 = require("../util/getParentFunctionNode");
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-return',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow returning a value with type `any` from a function',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            unsafeReturn: 'Unsafe return of a value of type {{type}}.',
            unsafeReturnAssignment: 'Unsafe return of type `{{sender}}` from function with return type `{{receiver}}`.',
            unsafeReturnThis: [
                'Unsafe return of a value of type `{{type}}`. `this` is typed as `any`.',
                'You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.',
            ].join('\n'),
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const compilerOptions = services.program.getCompilerOptions();
        const isNoImplicitThis = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'noImplicitThis');
        function checkReturn(returnNode, reportingNode = returnNode) {
            const functionNode = (0, getParentFunctionNode_1.getParentFunctionNode)(returnNode);
            /* istanbul ignore if */ if (!functionNode) {
                return;
            }
            const tsNode = services.esTreeNodeToTSNodeMap.get(returnNode);
            const type = checker.getTypeAtLocation(tsNode);
            const anyType = (0, util_1.discriminateAnyType)(type, checker, services.program, tsNode);
            // function has an explicit return type, so ensure it's a safe return
            const returnNodeType = services.getTypeAtLocation(returnNode);
            const constrainedReturnNodeType = (0, util_1.getConstrainedTypeAtLocation)(services, returnNode);
            const functionTSNode = services.esTreeNodeToTSNodeMap.get(functionNode);
            // function expressions will not have their return type modified based on receiver typing
            // so we have to use the contextual typing in these cases, i.e.
            // const foo1: () => Set<string> = () => new Set<any>();
            // the return type of the arrow function is Set<any> even though the variable is typed as Set<string>
            let functionType = ts.isFunctionExpression(functionTSNode) ||
                ts.isArrowFunction(functionTSNode)
                ? (0, util_1.getContextualType)(checker, functionTSNode)
                : services.getTypeAtLocation(functionNode);
            functionType ??= services.getTypeAtLocation(functionNode);
            const callSignatures = tsutils.getCallSignaturesOfType(functionType);
            // If there is an explicit type annotation *and* that type matches the actual
            // function return type, we shouldn't complain (it's intentional, even if unsafe)
            if (functionTSNode.type) {
                for (const signature of callSignatures) {
                    const signatureReturnType = signature.getReturnType();
                    if (returnNodeType === signatureReturnType ||
                        (0, util_1.isTypeFlagSet)(signatureReturnType, ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
                        return;
                    }
                    if (functionNode.async) {
                        const awaitedSignatureReturnType = checker.getAwaitedType(signatureReturnType);
                        const awaitedReturnNodeType = checker.getAwaitedType(returnNodeType);
                        if (awaitedReturnNodeType === awaitedSignatureReturnType ||
                            (awaitedSignatureReturnType &&
                                (0, util_1.isTypeFlagSet)(awaitedSignatureReturnType, ts.TypeFlags.Any | ts.TypeFlags.Unknown))) {
                            return;
                        }
                    }
                }
            }
            if (anyType !== util_1.AnyType.Safe) {
                // Allow cases when the declared return type of the function is either unknown or unknown[]
                // and the function is returning any or any[].
                for (const signature of callSignatures) {
                    const functionReturnType = signature.getReturnType();
                    if (anyType === util_1.AnyType.Any &&
                        (0, util_1.isTypeUnknownType)(functionReturnType)) {
                        return;
                    }
                    if (anyType === util_1.AnyType.AnyArray &&
                        (0, util_1.isTypeUnknownArrayType)(functionReturnType, checker)) {
                        return;
                    }
                    const awaitedType = checker.getAwaitedType(functionReturnType);
                    if (awaitedType &&
                        anyType === util_1.AnyType.PromiseAny &&
                        (0, util_1.isTypeUnknownType)(awaitedType)) {
                        return;
                    }
                }
                if (anyType === util_1.AnyType.PromiseAny && !functionNode.async) {
                    return;
                }
                let messageId = 'unsafeReturn';
                const isErrorType = tsutils.isIntrinsicErrorType(constrainedReturnNodeType);
                if (!isNoImplicitThis) {
                    // `return this`
                    const thisExpression = (0, util_1.getThisExpression)(returnNode);
                    if (thisExpression &&
                        (0, util_1.isTypeAnyType)((0, util_1.getConstrainedTypeAtLocation)(services, thisExpression))) {
                        messageId = 'unsafeReturnThis';
                    }
                }
                // If the function return type was not unknown/unknown[], mark usage as unsafeReturn.
                return context.report({
                    node: reportingNode,
                    messageId,
                    data: {
                        type: isErrorType
                            ? 'error'
                            : anyType === util_1.AnyType.Any
                                ? '`any`'
                                : anyType === util_1.AnyType.PromiseAny
                                    ? '`Promise<any>`'
                                    : '`any[]`',
                    },
                });
            }
            const signature = functionType.getCallSignatures().at(0);
            if (signature) {
                const functionReturnType = signature.getReturnType();
                const result = (0, util_1.isUnsafeAssignment)(returnNodeType, functionReturnType, checker, returnNode);
                if (!result) {
                    return;
                }
                const { receiver, sender } = result;
                return context.report({
                    node: reportingNode,
                    messageId: 'unsafeReturnAssignment',
                    data: {
                        receiver: checker.typeToString(receiver),
                        sender: checker.typeToString(sender),
                    },
                });
            }
        }
        return {
            'ArrowFunctionExpression > :not(BlockStatement).body': checkReturn,
            ReturnStatement(node) {
                const argument = node.argument;
                if (!argument) {
                    return;
                }
                checkReturn(argument, node);
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-return.js.map