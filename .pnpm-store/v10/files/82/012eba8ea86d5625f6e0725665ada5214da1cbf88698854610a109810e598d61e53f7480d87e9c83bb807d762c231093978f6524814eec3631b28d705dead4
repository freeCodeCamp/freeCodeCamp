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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('consistent-return');
const defaultOptions = [{ treatUndefinedAsUnspecified: false }];
exports.default = (0, util_1.createRule)({
    name: 'consistent-return',
    meta: {
        type: 'suggestion',
        defaultOptions,
        docs: {
            description: 'Require `return` statements to either always or never specify values',
            extendsBaseRule: true,
            requiresTypeChecking: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: baseRule.meta.schema,
    },
    defaultOptions,
    create(context, [options]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const rules = baseRule.create(context);
        const functions = [];
        const treatUndefinedAsUnspecified = options?.treatUndefinedAsUnspecified === true;
        function enterFunction(node) {
            functions.push(node);
        }
        function exitFunction() {
            functions.pop();
        }
        function getCurrentFunction() {
            return functions[functions.length - 1] ?? null;
        }
        function isPromiseVoid(node, type) {
            if (tsutils.isThenableType(checker, node, type) &&
                tsutils.isTypeReference(type)) {
                const awaitedType = type.typeArguments?.[0];
                if (awaitedType) {
                    if ((0, util_1.isTypeFlagSet)(awaitedType, ts.TypeFlags.Void)) {
                        return true;
                    }
                    return isPromiseVoid(node, awaitedType);
                }
            }
            return false;
        }
        function isReturnVoidOrThenableVoid(node) {
            const functionType = services.getTypeAtLocation(node);
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            const callSignatures = functionType.getCallSignatures();
            return callSignatures.some(signature => {
                const returnType = signature.getReturnType();
                if (node.async) {
                    return isPromiseVoid(tsNode, returnType);
                }
                return (0, util_1.isTypeFlagSet)(returnType, ts.TypeFlags.Void);
            });
        }
        return {
            ...rules,
            ArrowFunctionExpression: enterFunction,
            'ArrowFunctionExpression:exit'(node) {
                exitFunction();
                rules['ArrowFunctionExpression:exit'](node);
            },
            FunctionDeclaration: enterFunction,
            'FunctionDeclaration:exit'(node) {
                exitFunction();
                rules['FunctionDeclaration:exit'](node);
            },
            FunctionExpression: enterFunction,
            'FunctionExpression:exit'(node) {
                exitFunction();
                rules['FunctionExpression:exit'](node);
            },
            ReturnStatement(node) {
                const functionNode = getCurrentFunction();
                if (!node.argument &&
                    functionNode &&
                    isReturnVoidOrThenableVoid(functionNode)) {
                    return;
                }
                if (treatUndefinedAsUnspecified && node.argument) {
                    const returnValueType = services.getTypeAtLocation(node.argument);
                    if (returnValueType.flags === ts.TypeFlags.Undefined) {
                        rules.ReturnStatement({
                            ...node,
                            argument: null,
                        });
                        return;
                    }
                }
                rules.ReturnStatement(node);
            },
        };
    },
});
//# sourceMappingURL=consistent-return.js.map