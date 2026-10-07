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
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'method-signature-style',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce using a particular method signature syntax',
            recommended: false,
        },
        fixable: 'code',
        messages: {
            errorMethod: 'Shorthand method signature is forbidden. Use a function property instead.',
            errorProperty: 'Function property signature is forbidden. Use a method shorthand instead.',
        },
        schema: [
            {
                enum: ['property', 'method'],
            },
        ],
    },
    defaultOptions: ['property'],
    create(context, [mode]) {
        const sourceCode = context.getSourceCode();
        function getMethodKey(node) {
            let key = sourceCode.getText(node.key);
            if (node.computed) {
                key = `[${key}]`;
            }
            if (node.optional) {
                key = `${key}?`;
            }
            if (node.readonly) {
                key = `readonly ${key}`;
            }
            return key;
        }
        function getMethodParams(node) {
            let params = '()';
            if (node.params.length > 0) {
                const openingParen = util.nullThrows(sourceCode.getTokenBefore(node.params[0], util.isOpeningParenToken), 'Missing opening paren before first parameter');
                const closingParen = util.nullThrows(sourceCode.getTokenAfter(node.params[node.params.length - 1], util.isClosingParenToken), 'Missing closing paren after last parameter');
                params = sourceCode.text.substring(openingParen.range[0], closingParen.range[1]);
            }
            if (node.typeParameters != null) {
                const typeParams = sourceCode.getText(node.typeParameters);
                params = `${typeParams}${params}`;
            }
            return params;
        }
        function getMethodReturnType(node) {
            return node.returnType == null
                ? // if the method has no return type, it implicitly has an `any` return type
                    // we just make it explicit here so we can do the fix
                    'any'
                : sourceCode.getText(node.returnType.typeAnnotation);
        }
        function getDelimiter(node) {
            const lastToken = sourceCode.getLastToken(node);
            if (lastToken &&
                (util.isSemicolonToken(lastToken) || util.isCommaToken(lastToken))) {
                return lastToken.value;
            }
            return '';
        }
        function isNodeParentModuleDeclaration(node) {
            if (!node.parent) {
                return false;
            }
            if (node.parent.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration) {
                return true;
            }
            if (node.parent.type === utils_1.AST_NODE_TYPES.Program) {
                return false;
            }
            return isNodeParentModuleDeclaration(node.parent);
        }
        return Object.assign(Object.assign({}, (mode === 'property' && {
            TSMethodSignature(methodNode) {
                if (methodNode.kind !== 'method') {
                    return;
                }
                const parent = methodNode.parent;
                const members = (parent === null || parent === void 0 ? void 0 : parent.type) === utils_1.AST_NODE_TYPES.TSInterfaceBody
                    ? parent.body
                    : (parent === null || parent === void 0 ? void 0 : parent.type) === utils_1.AST_NODE_TYPES.TSTypeLiteral
                        ? parent.members
                        : [];
                const duplicatedKeyMethodNodes = members.filter((element) => element.type === utils_1.AST_NODE_TYPES.TSMethodSignature &&
                    element !== methodNode &&
                    getMethodKey(element) === getMethodKey(methodNode));
                const isParentModule = isNodeParentModuleDeclaration(methodNode);
                if (duplicatedKeyMethodNodes.length > 0) {
                    if (isParentModule) {
                        context.report({
                            node: methodNode,
                            messageId: 'errorMethod',
                        });
                    }
                    else {
                        context.report({
                            node: methodNode,
                            messageId: 'errorMethod',
                            *fix(fixer) {
                                const methodNodes = [
                                    methodNode,
                                    ...duplicatedKeyMethodNodes,
                                ].sort((a, b) => (a.range[0] < b.range[0] ? -1 : 1));
                                const typeString = methodNodes
                                    .map(node => {
                                    const params = getMethodParams(node);
                                    const returnType = getMethodReturnType(node);
                                    return `(${params} => ${returnType})`;
                                })
                                    .join(' & ');
                                const key = getMethodKey(methodNode);
                                const delimiter = getDelimiter(methodNode);
                                yield fixer.replaceText(methodNode, `${key}: ${typeString}${delimiter}`);
                                for (const node of duplicatedKeyMethodNodes) {
                                    const lastToken = sourceCode.getLastToken(node);
                                    if (lastToken) {
                                        const nextToken = sourceCode.getTokenAfter(lastToken);
                                        if (nextToken) {
                                            yield fixer.remove(node);
                                            yield fixer.replaceTextRange([lastToken.range[1], nextToken.range[0]], '');
                                        }
                                    }
                                }
                            },
                        });
                    }
                    return;
                }
                if (isParentModule) {
                    context.report({
                        node: methodNode,
                        messageId: 'errorMethod',
                    });
                }
                else {
                    context.report({
                        node: methodNode,
                        messageId: 'errorMethod',
                        fix: fixer => {
                            const key = getMethodKey(methodNode);
                            const params = getMethodParams(methodNode);
                            const returnType = getMethodReturnType(methodNode);
                            const delimiter = getDelimiter(methodNode);
                            return fixer.replaceText(methodNode, `${key}: ${params} => ${returnType}${delimiter}`);
                        },
                    });
                }
            },
        })), (mode === 'method' && {
            TSPropertySignature(propertyNode) {
                var _a;
                const typeNode = (_a = propertyNode.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation;
                if ((typeNode === null || typeNode === void 0 ? void 0 : typeNode.type) !== utils_1.AST_NODE_TYPES.TSFunctionType) {
                    return;
                }
                context.report({
                    node: propertyNode,
                    messageId: 'errorProperty',
                    fix: fixer => {
                        const key = getMethodKey(propertyNode);
                        const params = getMethodParams(typeNode);
                        const returnType = getMethodReturnType(typeNode);
                        const delimiter = getDelimiter(propertyNode);
                        return fixer.replaceText(propertyNode, `${key}${params}: ${returnType}${delimiter}`);
                    },
                });
            },
        }));
    },
});
//# sourceMappingURL=method-signature-style.js.map