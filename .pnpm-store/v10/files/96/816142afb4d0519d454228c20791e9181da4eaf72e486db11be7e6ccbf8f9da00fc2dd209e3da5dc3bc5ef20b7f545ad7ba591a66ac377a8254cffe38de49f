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
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-argument',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow calling a function with a value with type `any`',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            unsafeArgument: 'Unsafe argument of type {{sender}} assigned to a parameter of type {{receiver}}.',
            unsafeArraySpread: 'Unsafe spread of an {{sender}} array type.',
            unsafeSpread: 'Unsafe spread of an {{sender}} type.',
            unsafeTupleSpread: 'Unsafe spread of a tuple type. The argument is {{sender}} and is assigned to a parameter of type {{receiver}}.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function describeType(type) {
            if (tsutils.isIntrinsicErrorType(type)) {
                return 'error typed';
            }
            return `\`${checker.typeToString(type)}\``;
        }
        function describeTypeForSpread(type) {
            if (checker.isArrayType(type) &&
                tsutils.isIntrinsicErrorType(checker.getTypeArguments(type)[0])) {
                return 'error';
            }
            return describeType(type);
        }
        function describeTypeForTuple(type) {
            if (tsutils.isIntrinsicErrorType(type)) {
                return 'error typed';
            }
            return `of type \`${checker.typeToString(type)}\``;
        }
        function checkUnsafeArguments(args, callee, node) {
            if (args.length === 0) {
                return;
            }
            // ignore any-typed calls as these are caught by no-unsafe-call
            if ((0, util_1.isTypeAnyType)(services.getTypeAtLocation(callee))) {
                return;
            }
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            const signature = util_1.FunctionSignature.create(checker, tsNode);
            if (node.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression) {
                // Consumes the first parameter (TemplateStringsArray) of the function called with TaggedTemplateExpression.
                signature.getNextParameterType();
            }
            for (const argument of args) {
                switch (argument.type) {
                    // spreads consume
                    case utils_1.AST_NODE_TYPES.SpreadElement: {
                        const spreadArgType = services.getTypeAtLocation(argument.argument);
                        if ((0, util_1.isTypeAnyType)(spreadArgType)) {
                            // foo(...any)
                            context.report({
                                node: argument,
                                messageId: 'unsafeSpread',
                                data: { sender: describeType(spreadArgType) },
                            });
                        }
                        else if ((0, util_1.isTypeAnyArrayType)(spreadArgType, checker)) {
                            // foo(...any[])
                            // TODO - we could break down the spread and compare the array type against each argument
                            context.report({
                                node: argument,
                                messageId: 'unsafeArraySpread',
                                data: { sender: describeTypeForSpread(spreadArgType) },
                            });
                        }
                        else if (checker.isTupleType(spreadArgType)) {
                            // foo(...[tuple1, tuple2])
                            const spreadTypeArguments = checker.getTypeArguments(spreadArgType);
                            for (const tupleType of spreadTypeArguments) {
                                const parameterType = signature.getNextParameterType();
                                if (parameterType == null) {
                                    continue;
                                }
                                const result = (0, util_1.isUnsafeAssignment)(tupleType, parameterType, checker, 
                                // we can't pass the individual tuple members in here as this will most likely be a spread variable
                                // not a spread array
                                null);
                                if (result) {
                                    context.report({
                                        node: argument,
                                        messageId: 'unsafeTupleSpread',
                                        data: {
                                            receiver: describeType(parameterType),
                                            sender: describeTypeForTuple(tupleType),
                                        },
                                    });
                                }
                            }
                            if (spreadArgType.target.combinedFlags & ts.ElementFlags.Variable) {
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
                        const argumentType = services.getTypeAtLocation(argument);
                        const result = (0, util_1.isUnsafeAssignment)(argumentType, parameterType, checker, argument);
                        if (result) {
                            context.report({
                                node: argument,
                                messageId: 'unsafeArgument',
                                data: {
                                    receiver: describeType(parameterType),
                                    sender: describeType(argumentType),
                                },
                            });
                        }
                    }
                }
            }
        }
        return {
            'CallExpression, NewExpression'(node) {
                checkUnsafeArguments(node.arguments, node.callee, node);
            },
            TaggedTemplateExpression(node) {
                checkUnsafeArguments(node.quasi.expressions, node.tag, node);
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-argument.js.map