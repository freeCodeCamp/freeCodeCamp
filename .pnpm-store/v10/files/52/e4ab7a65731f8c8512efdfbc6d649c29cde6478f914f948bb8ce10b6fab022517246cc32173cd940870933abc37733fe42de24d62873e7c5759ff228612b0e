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
const util = __importStar(require("../util"));
const util_1 = require("../util");
exports.default = util.createRule({
    name: 'no-unsafe-return',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow returning a value with type `any` from a function',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        messages: {
            unsafeReturn: 'Unsafe return of an `{{type}}` typed value.',
            unsafeReturnThis: [
                'Unsafe return of an `{{type}}` typed value. `this` is typed as `any`.',
                'You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.',
            ].join('\n'),
            unsafeReturnAssignment: 'Unsafe return of type `{{sender}}` from function with return type `{{receiver}}`.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const { program, esTreeNodeToTSNodeMap } = util.getParserServices(context);
        const checker = program.getTypeChecker();
        const compilerOptions = program.getCompilerOptions();
        const isNoImplicitThis = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'noImplicitThis');
        function getParentFunctionNode(node) {
            let current = node.parent;
            while (current) {
                if (current.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                    current.type === utils_1.AST_NODE_TYPES.FunctionDeclaration ||
                    current.type === utils_1.AST_NODE_TYPES.FunctionExpression) {
                    return current;
                }
                current = current.parent;
            }
            // this shouldn't happen in correct code, but someone may attempt to parse bad code
            // the parser won't error, so we shouldn't throw here
            /* istanbul ignore next */ return null;
        }
        function checkReturn(returnNode, reportingNode = returnNode) {
            const tsNode = esTreeNodeToTSNodeMap.get(returnNode);
            const anyType = util.isAnyOrAnyArrayTypeDiscriminated(tsNode, checker);
            const functionNode = getParentFunctionNode(returnNode);
            /* istanbul ignore if */ if (!functionNode) {
                return;
            }
            // function has an explicit return type, so ensure it's a safe return
            const returnNodeType = util.getConstrainedTypeAtLocation(checker, esTreeNodeToTSNodeMap.get(returnNode));
            const functionTSNode = esTreeNodeToTSNodeMap.get(functionNode);
            // function expressions will not have their return type modified based on receiver typing
            // so we have to use the contextual typing in these cases, i.e.
            // const foo1: () => Set<string> = () => new Set<any>();
            // the return type of the arrow function is Set<any> even though the variable is typed as Set<string>
            let functionType = tsutils.isExpression(functionTSNode)
                ? util.getContextualType(checker, functionTSNode)
                : checker.getTypeAtLocation(functionTSNode);
            if (!functionType) {
                functionType = checker.getTypeAtLocation(functionTSNode);
            }
            // If there is an explicit type annotation *and* that type matches the actual
            // function return type, we shouldn't complain (it's intentional, even if unsafe)
            if (functionTSNode.type) {
                for (const signature of functionType.getCallSignatures()) {
                    if (returnNodeType === signature.getReturnType()) {
                        return;
                    }
                }
            }
            if (anyType !== util.AnyType.Safe) {
                // Allow cases when the declared return type of the function is either unknown or unknown[]
                // and the function is returning any or any[].
                for (const signature of functionType.getCallSignatures()) {
                    const functionReturnType = signature.getReturnType();
                    if (anyType === util.AnyType.Any &&
                        util.isTypeUnknownType(functionReturnType)) {
                        return;
                    }
                    if (anyType === util.AnyType.AnyArray &&
                        util.isTypeUnknownArrayType(functionReturnType, checker)) {
                        return;
                    }
                }
                let messageId = 'unsafeReturn';
                if (!isNoImplicitThis) {
                    // `return this`
                    const thisExpression = (0, util_1.getThisExpression)(returnNode);
                    if (thisExpression &&
                        util.isTypeAnyType(util.getConstrainedTypeAtLocation(checker, esTreeNodeToTSNodeMap.get(thisExpression)))) {
                        messageId = 'unsafeReturnThis';
                    }
                }
                // If the function return type was not unknown/unknown[], mark usage as unsafeReturn.
                return context.report({
                    node: reportingNode,
                    messageId,
                    data: {
                        type: anyType === util.AnyType.Any ? 'any' : 'any[]',
                    },
                });
            }
            for (const signature of functionType.getCallSignatures()) {
                const functionReturnType = signature.getReturnType();
                const result = util.isUnsafeAssignment(returnNodeType, functionReturnType, checker, returnNode);
                if (!result) {
                    return;
                }
                const { sender, receiver } = result;
                return context.report({
                    node: reportingNode,
                    messageId: 'unsafeReturnAssignment',
                    data: {
                        sender: checker.typeToString(sender),
                        receiver: checker.typeToString(receiver),
                    },
                });
            }
        }
        return {
            ReturnStatement(node) {
                const argument = node.argument;
                if (!argument) {
                    return;
                }
                checkReturn(argument, node);
            },
            'ArrowFunctionExpression > :not(BlockStatement).body': checkReturn,
        };
    },
});
//# sourceMappingURL=no-unsafe-return.js.map