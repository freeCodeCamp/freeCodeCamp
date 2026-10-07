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
exports.default = util.createRule({
    name: 'promise-function-async',
    meta: {
        type: 'suggestion',
        fixable: 'code',
        docs: {
            description: 'Require any function or method that returns a Promise to be marked async',
            recommended: false,
            requiresTypeChecking: true,
        },
        messages: {
            missingAsync: 'Functions that return promises must be async.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowAny: {
                        description: 'Whether to consider `any` and `unknown` to be Promises.',
                        type: 'boolean',
                    },
                    allowedPromiseNames: {
                        description: 'Any extra names of classes or interfaces to be considered Promises.',
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    checkArrowFunctions: {
                        type: 'boolean',
                    },
                    checkFunctionDeclarations: {
                        type: 'boolean',
                    },
                    checkFunctionExpressions: {
                        type: 'boolean',
                    },
                    checkMethodDeclarations: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
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
            ...allowedPromiseNames,
        ]);
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        const sourceCode = context.getSourceCode();
        function validateNode(node) {
            var _a;
            const originalNode = parserServices.esTreeNodeToTSNodeMap.get(node);
            const signatures = checker
                .getTypeAtLocation(originalNode)
                .getCallSignatures();
            if (!signatures.length) {
                return;
            }
            const returnType = checker.getReturnTypeOfSignature(signatures[0]);
            if (!util.containsAllTypesByName(returnType, allowAny, allAllowedPromiseNames, 
            // If no return type is explicitly set, we check if any parts of the return type match a Promise (instead of requiring all to match).
            node.returnType == null)) {
                // Return type is not a promise
                return;
            }
            if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition) {
                // Abstract method can't be async
                return;
            }
            if (node.parent &&
                (node.parent.type === utils_1.AST_NODE_TYPES.Property ||
                    node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition) &&
                (node.parent.kind === 'get' || node.parent.kind === 'set')) {
                // Getters and setters can't be async
                return;
            }
            if (util.isTypeFlagSet(returnType, ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
                // Report without auto fixer because the return type is unknown
                return context.report({
                    messageId: 'missingAsync',
                    node,
                    loc: util.getFunctionHeadLoc(node, sourceCode),
                });
            }
            context.report({
                messageId: 'missingAsync',
                node,
                loc: util.getFunctionHeadLoc(node, sourceCode),
                fix: fixer => {
                    if (node.parent &&
                        (node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
                            (node.parent.type === utils_1.AST_NODE_TYPES.Property &&
                                node.parent.method))) {
                        // this function is a class method or object function property shorthand
                        const method = node.parent;
                        // the token to put `async` before
                        let keyToken = sourceCode.getFirstToken(method);
                        // if there are decorators then skip past them
                        if (method.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                            method.decorators) {
                            const lastDecorator = method.decorators[method.decorators.length - 1];
                            keyToken = sourceCode.getTokenAfter(lastDecorator);
                        }
                        // if current token is a keyword like `static` or `public` then skip it
                        while (keyToken.type === utils_1.AST_TOKEN_TYPES.Keyword &&
                            keyToken.range[0] < method.key.range[0]) {
                            keyToken = sourceCode.getTokenAfter(keyToken);
                        }
                        // check if there is a space between key and previous token
                        const insertSpace = !sourceCode.isSpaceBetween(sourceCode.getTokenBefore(keyToken), keyToken);
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
        return Object.assign(Object.assign(Object.assign({}, (checkArrowFunctions && {
            'ArrowFunctionExpression[async = false]'(node) {
                validateNode(node);
            },
        })), (checkFunctionDeclarations && {
            'FunctionDeclaration[async = false]'(node) {
                validateNode(node);
            },
        })), { 'FunctionExpression[async = false]'(node) {
                if (node.parent &&
                    node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                    node.parent.kind === 'method') {
                    if (checkMethodDeclarations) {
                        validateNode(node);
                    }
                    return;
                }
                if (checkFunctionExpressions) {
                    validateNode(node);
                }
            } });
    },
});
//# sourceMappingURL=promise-function-async.js.map