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
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
class FunctionSignature {
    static create(checker, tsNode) {
        var _a;
        const signature = checker.getResolvedSignature(tsNode);
        if (!signature) {
            return null;
        }
        const paramTypes = [];
        let restType = null;
        const parameters = signature.getParameters();
        for (let i = 0; i < parameters.length; i += 1) {
            const param = parameters[i];
            const type = checker.getTypeOfSymbolAtLocation(param, tsNode);
            const decl = (_a = param.getDeclarations()) === null || _a === void 0 ? void 0 : _a[0];
            if (decl && ts.isParameter(decl) && decl.dotDotDotToken) {
                // is a rest param
                if (checker.isArrayType(type)) {
                    restType = {
                        type: util.getTypeArguments(type, checker)[0],
                        kind: 0 /* RestTypeKind.Array */,
                        index: i,
                    };
                }
                else if (checker.isTupleType(type)) {
                    restType = {
                        typeArguments: util.getTypeArguments(type, checker),
                        kind: 1 /* RestTypeKind.Tuple */,
                        index: i,
                    };
                }
                else {
                    restType = {
                        type,
                        kind: 2 /* RestTypeKind.Other */,
                        index: i,
                    };
                }
                break;
            }
            paramTypes.push(type);
        }
        return new this(paramTypes, restType);
    }
    constructor(paramTypes, restType) {
        this.paramTypes = paramTypes;
        this.restType = restType;
        this.parameterTypeIndex = 0;
        this.hasConsumedArguments = false;
    }
    getNextParameterType() {
        const index = this.parameterTypeIndex;
        this.parameterTypeIndex += 1;
        if (index >= this.paramTypes.length || this.hasConsumedArguments) {
            if (this.restType == null) {
                return null;
            }
            switch (this.restType.kind) {
                case 1 /* RestTypeKind.Tuple */: {
                    const typeArguments = this.restType.typeArguments;
                    if (this.hasConsumedArguments) {
                        // all types consumed by a rest - just assume it's the last type
                        // there is one edge case where this is wrong, but we ignore it because
                        // it's rare and really complicated to handle
                        // eg: function foo(...a: [number, ...string[], number])
                        return typeArguments[typeArguments.length - 1];
                    }
                    const typeIndex = index - this.restType.index;
                    if (typeIndex >= typeArguments.length) {
                        return typeArguments[typeArguments.length - 1];
                    }
                    return typeArguments[typeIndex];
                }
                case 0 /* RestTypeKind.Array */:
                case 2 /* RestTypeKind.Other */:
                    return this.restType.type;
            }
        }
        return this.paramTypes[index];
    }
    consumeRemainingArguments() {
        this.hasConsumedArguments = true;
    }
}
exports.default = util.createRule({
    name: 'no-unsafe-argument',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow calling a function with a value with type `any`',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        messages: {
            unsafeArgument: 'Unsafe argument of type `{{sender}}` assigned to a parameter of type `{{receiver}}`.',
            unsafeTupleSpread: 'Unsafe spread of a tuple type. The argument is of type `{{sender}}` and is assigned to a parameter of type `{{receiver}}`.',
            unsafeArraySpread: 'Unsafe spread of an `any` array type.',
            unsafeSpread: 'Unsafe spread of an `any` type.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const { program, esTreeNodeToTSNodeMap } = util.getParserServices(context);
        const checker = program.getTypeChecker();
        return {
            'CallExpression, NewExpression'(node) {
                if (node.arguments.length === 0) {
                    return;
                }
                // ignore any-typed calls as these are caught by no-unsafe-call
                if (util.isTypeAnyType(checker.getTypeAtLocation(esTreeNodeToTSNodeMap.get(node.callee)))) {
                    return;
                }
                const tsNode = esTreeNodeToTSNodeMap.get(node);
                const signature = FunctionSignature.create(checker, tsNode);
                if (!signature) {
                    return;
                }
                for (const argument of node.arguments) {
                    switch (argument.type) {
                        // spreads consume
                        case utils_1.AST_NODE_TYPES.SpreadElement: {
                            const spreadArgType = checker.getTypeAtLocation(esTreeNodeToTSNodeMap.get(argument.argument));
                            if (util.isTypeAnyType(spreadArgType)) {
                                // foo(...any)
                                context.report({
                                    node: argument,
                                    messageId: 'unsafeSpread',
                                });
                            }
                            else if (util.isTypeAnyArrayType(spreadArgType, checker)) {
                                // foo(...any[])
                                // TODO - we could break down the spread and compare the array type against each argument
                                context.report({
                                    node: argument,
                                    messageId: 'unsafeArraySpread',
                                });
                            }
                            else if (checker.isTupleType(spreadArgType)) {
                                // foo(...[tuple1, tuple2])
                                const spreadTypeArguments = util.getTypeArguments(spreadArgType, checker);
                                for (const tupleType of spreadTypeArguments) {
                                    const parameterType = signature.getNextParameterType();
                                    if (parameterType == null) {
                                        continue;
                                    }
                                    const result = util.isUnsafeAssignment(tupleType, parameterType, checker, 
                                    // we can't pass the individual tuple members in here as this will most likely be a spread variable
                                    // not a spread array
                                    null);
                                    if (result) {
                                        context.report({
                                            node: argument,
                                            messageId: 'unsafeTupleSpread',
                                            data: {
                                                sender: checker.typeToString(tupleType),
                                                receiver: checker.typeToString(parameterType),
                                            },
                                        });
                                    }
                                }
                                if (spreadArgType.target.hasRestElement) {
                                    // the last element was a rest - so all remaining defined arguments can be considered "consumed"
                                    // all remaining arguments should be compared against the rest type (if one exists)
                                    signature.consumeRemainingArguments();
                                }
                            }
                            else {
                                // something that's iterable
                                // handling this will be pretty complex - so we ignore it for now
                                // TODO - handle generic iterable case
                            }
                            break;
                        }
                        default: {
                            const parameterType = signature.getNextParameterType();
                            if (parameterType == null) {
                                continue;
                            }
                            const argumentType = checker.getTypeAtLocation(esTreeNodeToTSNodeMap.get(argument));
                            const result = util.isUnsafeAssignment(argumentType, parameterType, checker, argument);
                            if (result) {
                                context.report({
                                    node: argument,
                                    messageId: 'unsafeArgument',
                                    data: {
                                        sender: checker.typeToString(argumentType),
                                        receiver: checker.typeToString(parameterType),
                                    },
                                });
                            }
                        }
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-argument.js.map