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
const FUNCTION_CONSTRUCTOR = 'Function';
const GLOBAL_CANDIDATES = new Set(['global', 'globalThis', 'window']);
const EVAL_LIKE_FUNCTIONS = new Set([
    'execScript',
    'setImmediate',
    'setInterval',
    'setTimeout',
]);
exports.default = (0, util_1.createRule)({
    name: 'no-implied-eval',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the use of `eval()`-like functions',
            extendsBaseRule: true,
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            noFunctionConstructor: 'Implied eval. Do not use the Function constructor to create functions.',
            noImpliedEvalError: 'Implied eval. Consider passing a function.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function getCalleeName(node) {
            if (node.type === utils_1.AST_NODE_TYPES.Identifier) {
                return node.name;
            }
            if (node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                node.object.type === utils_1.AST_NODE_TYPES.Identifier &&
                GLOBAL_CANDIDATES.has(node.object.name)) {
                if (node.property.type === utils_1.AST_NODE_TYPES.Identifier) {
                    return node.property.name;
                }
                if (node.property.type === utils_1.AST_NODE_TYPES.Literal &&
                    typeof node.property.value === 'string') {
                    return node.property.value;
                }
            }
            return null;
        }
        function isFunctionType(node) {
            const type = services.getTypeAtLocation(node);
            const symbol = type.getSymbol();
            if (symbol &&
                tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Function | ts.SymbolFlags.Method)) {
                return true;
            }
            if ((0, util_1.isBuiltinSymbolLike)(services.program, type, FUNCTION_CONSTRUCTOR)) {
                return true;
            }
            const signatures = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
            return signatures.length > 0;
        }
        function isBind(node) {
            return node.type === utils_1.AST_NODE_TYPES.MemberExpression
                ? isBind(node.property)
                : node.type === utils_1.AST_NODE_TYPES.Identifier && node.name === 'bind';
        }
        function isFunction(node) {
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
                case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                case utils_1.AST_NODE_TYPES.FunctionExpression:
                    return true;
                case utils_1.AST_NODE_TYPES.Literal:
                case utils_1.AST_NODE_TYPES.TemplateLiteral:
                    return false;
                case utils_1.AST_NODE_TYPES.CallExpression:
                    return isBind(node.callee) || isFunctionType(node);
                default:
                    return isFunctionType(node);
            }
        }
        function checkImpliedEval(node) {
            const calleeName = getCalleeName(node.callee);
            if (calleeName == null) {
                return;
            }
            if (calleeName === FUNCTION_CONSTRUCTOR) {
                const type = services.getTypeAtLocation(node.callee);
                const symbol = type.getSymbol();
                if (symbol) {
                    if ((0, util_1.isBuiltinSymbolLike)(services.program, type, 'FunctionConstructor')) {
                        context.report({ node, messageId: 'noFunctionConstructor' });
                        return;
                    }
                }
                else {
                    context.report({ node, messageId: 'noFunctionConstructor' });
                    return;
                }
            }
            if (node.arguments.length === 0) {
                return;
            }
            const [handler] = node.arguments;
            if (EVAL_LIKE_FUNCTIONS.has(calleeName) &&
                !isFunction(handler) &&
                (0, util_1.isReferenceToGlobalFunction)(calleeName, node, context.sourceCode)) {
                context.report({ node: handler, messageId: 'noImpliedEvalError' });
            }
        }
        return {
            CallExpression: checkImpliedEval,
            NewExpression: checkImpliedEval,
        };
    },
});
//# sourceMappingURL=no-implied-eval.js.map