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
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'promise-function-async',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require any function or method that returns a Promise to be marked async',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            missingAsync: 'Functions that return promises must be async.',
            missingAsyncHybridReturn: 'Functions that return promises must be async. Consider adding an explicit return type annotation if the function is intended to return a union of promise and non-promise types.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowAny: {
                        type: 'boolean',
                        description: 'Whether to consider `any` and `unknown` to be Promises.',
                    },
                    allowedPromiseNames: {
                        type: 'array',
                        description: 'Any extra names of classes or interfaces to be considered Promises.',
                        items: {
                            type: 'string',
                        },
                    },
                    checkArrowFunctions: {
                        type: 'boolean',
                        description: 'Whether to check arrow functions.',
                    },
                    checkFunctionDeclarations: {
                        type: 'boolean',
                        description: 'Whether to check standalone function declarations.',
                    },
                    checkFunctionExpressions: {
                        type: 'boolean',
                        description: 'Whether to check inline function expressions',
                    },
                    checkMethodDeclarations: {
                        type: 'boolean',
                        description: 'Whether to check methods on classes and object literals.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowAny: true,
            allowedPromiseNames: [],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true,
        },
    ],
    create(context, [{ allowAny, allowedPromiseNames, checkArrowFunctions, checkFunctionDeclarations, checkFunctionExpressions, checkMethodDeclarations, },]) {
        const allAllowedPromiseNames = new Set([
            'Promise',
            // https://github.com/typescript-eslint/typescript-eslint/issues/5439
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            ...allowedPromiseNames,
        ]);
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function validateNode(node) {
            if (node.parent.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition) {
                // Abstract method can't be async
                return;
            }
            if ((node.parent.type === utils_1.AST_NODE_TYPES.Property ||
                node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition) &&
                (node.parent.kind === 'get' || node.parent.kind === 'set')) {
                // Getters and setters can't be async
                return;
            }
            const signatures = services.getTypeAtLocation(node).getCallSignatures();
            if (!signatures.length) {
                return;
            }
            const returnTypes = signatures.map(signature => checker.getReturnTypeOfSignature(signature));
            if (!allowAny &&
                returnTypes.some(type => (0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Any | ts.TypeFlags.Unknown))) {
                // Report without auto fixer because the return type is unknown
                return context.report({
                    loc: (0, util_1.getFunctionHeadLoc)(node, context.sourceCode),
                    node,
                    messageId: 'missingAsync',
                });
            }
            if (
            // require all potential return types to be promise/any/unknown
            returnTypes.every(type => (0, util_1.containsAllTypesByName)(type, true, allAllowedPromiseNames, 
            // If no return type is explicitly set, we check if any parts of the return type match a Promise (instead of requiring all to match).
            node.returnType == null))) {
                const isHybridReturnType = returnTypes.some(type => type.isUnion() &&
                    !type.types.every(part => (0, util_1.containsAllTypesByName)(part, true, allAllowedPromiseNames)));
                context.report({
                    loc: (0, util_1.getFunctionHeadLoc)(node, context.sourceCode),
                    node,
                    messageId: isHybridReturnType
                        ? 'missingAsyncHybridReturn'
                        : 'missingAsync',
                    fix: fixer => {
                        if (node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
                            (node.parent.type === utils_1.AST_NODE_TYPES.Property &&
                                node.parent.method)) {
                            // this function is a class method or object function property shorthand
                            const method = node.parent;
                            // the token to put `async` before
                            let keyToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(method), util_1.NullThrowsReasons.MissingToken('key token', 'method'));
                            // if there are decorators then skip past them
                            if (method.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                                method.decorators.length) {
                                const lastDecorator = method.decorators[method.decorators.length - 1];
                                keyToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(lastDecorator), util_1.NullThrowsReasons.MissingToken('key token', 'last decorator'));
                            }
                            // if current token is a keyword like `static` or `public`, or the `override` modifier, then skip it
                            while ((keyToken.type === utils_1.AST_TOKEN_TYPES.Keyword ||
                                (keyToken.type === utils_1.AST_TOKEN_TYPES.Identifier &&
                                    keyToken.value === 'override')) &&
                                keyToken.range[0] < method.key.range[0]) {
                                keyToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(keyToken), util_1.NullThrowsReasons.MissingToken('token', 'modifier keyword'));
                            }
                            // check if there is a space between key and previous token
                            const insertSpace = !context.sourceCode.isSpaceBetween((0, util_1.nullThrows)(context.sourceCode.getTokenBefore(keyToken), util_1.NullThrowsReasons.MissingToken('token', 'keyword')), keyToken);
                            let code = 'async ';
                            if (insertSpace) {
                                code = ` ${code}`;
                            }
                            return fixer.insertTextBefore(keyToken, code);
                        }
                        return fixer.insertTextBefore(node, 'async ');
                    },
                });
            }
        }
        return {
            ...(checkArrowFunctions && {
                'ArrowFunctionExpression[async = false]'(node) {
                    validateNode(node);
                },
            }),
            ...(checkFunctionDeclarations && {
                'FunctionDeclaration[async = false]'(node) {
                    validateNode(node);
                },
            }),
            'FunctionExpression[async = false]'(node) {
                if (node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                    node.parent.kind === 'method') {
                    if (checkMethodDeclarations) {
                        validateNode(node);
                    }
                    return;
                }
                if (checkFunctionExpressions) {
                    validateNode(node);
                }
            },
        };
    },
});
//# sourceMappingURL=promise-function-async.js.map