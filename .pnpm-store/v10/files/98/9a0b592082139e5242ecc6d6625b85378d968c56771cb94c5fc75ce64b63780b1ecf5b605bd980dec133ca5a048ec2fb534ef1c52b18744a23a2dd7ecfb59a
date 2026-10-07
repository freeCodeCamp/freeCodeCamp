"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'method-signature-style',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce using a particular method signature syntax',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            convertToMethodSignature: 'Convert to a method signature. This removes the `readonly` modifier, allowing the member to be reassigned.',
            errorMethod: 'Shorthand method signature is forbidden. Use a function property instead.',
            errorProperty: 'Function property signature is forbidden. Use a method shorthand instead.',
        },
        schema: [
            {
                type: 'string',
                description: 'The method signature style to enforce using.',
                enum: ['property', 'method'],
            },
        ],
    },
    defaultOptions: ['property'],
    create(context, [mode]) {
        function getMethodKey(node) {
            let key = context.sourceCode.getText(node.key);
            if (node.computed) {
                key = `[${key}]`;
            }
            if (node.optional) {
                key = `${key}?`;
            }
            return key;
        }
        function getMethodParams(node) {
            let params = '()';
            if (node.params.length > 0) {
                const openingParen = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(node.params[0], util_1.isOpeningParenToken), 'Missing opening paren before first parameter');
                const closingParen = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(node.params[node.params.length - 1], util_1.isClosingParenToken), 'Missing closing paren after last parameter');
                params = context.sourceCode.text.substring(openingParen.range[0], closingParen.range[1]);
            }
            if (node.typeParameters != null) {
                const typeParams = context.sourceCode.getText(node.typeParameters);
                params = `${typeParams}${params}`;
            }
            return params;
        }
        function getMethodReturnType(node) {
            return node.returnType == null
                ? // if the method has no return type, it implicitly has an `any` return type
                    // we just make it explicit here so we can do the fix
                    'any'
                : context.sourceCode.getText(node.returnType.typeAnnotation);
        }
        function getDelimiter(node) {
            const lastToken = context.sourceCode.getLastToken(node);
            if (lastToken &&
                ((0, util_1.isSemicolonToken)(lastToken) || (0, util_1.isCommaToken)(lastToken))) {
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
        return {
            ...(mode === 'property' && {
                TSMethodSignature(methodNode) {
                    if (methodNode.kind !== 'method') {
                        return;
                    }
                    const skipFix = returnTypeReferencesThisType(methodNode.returnType);
                    const parent = methodNode.parent;
                    const members = parent.type === utils_1.AST_NODE_TYPES.TSInterfaceBody
                        ? parent.body
                        : parent.members;
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
                                fix: skipFix
                                    ? undefined
                                    : function* fix(fixer) {
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
                                            const lastToken = context.sourceCode.getLastToken(node);
                                            if (lastToken) {
                                                const nextToken = context.sourceCode.getTokenAfter(lastToken);
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
                            fix: skipFix
                                ? undefined
                                : fixer => {
                                    const key = getMethodKey(methodNode);
                                    const params = getMethodParams(methodNode);
                                    const returnType = getMethodReturnType(methodNode);
                                    const delimiter = getDelimiter(methodNode);
                                    return fixer.replaceText(methodNode, `${key}: ${params} => ${returnType}${delimiter}`);
                                },
                        });
                    }
                },
            }),
            ...(mode === 'method' && {
                TSPropertySignature(propertyNode) {
                    const typeNode = propertyNode.typeAnnotation?.typeAnnotation;
                    if (typeNode?.type !== utils_1.AST_NODE_TYPES.TSFunctionType) {
                        return;
                    }
                    const fix = fixer => {
                        const key = getMethodKey(propertyNode);
                        const params = getMethodParams(typeNode);
                        const returnType = getMethodReturnType(typeNode);
                        const delimiter = getDelimiter(propertyNode);
                        return fixer.replaceText(propertyNode, `${key}${params}: ${returnType}${delimiter}`);
                    };
                    // There is no syntax for a `readonly` method signature, so converting
                    // a `readonly` function-typed property drops the `readonly` modifier.
                    // That is a behavioral change (a method may be reassigned, a
                    // `readonly` property may not), so it is offered as a suggestion
                    // rather than applied as an autofix.
                    if (propertyNode.readonly) {
                        context.report({
                            node: propertyNode,
                            messageId: 'errorProperty',
                            suggest: [{ messageId: 'convertToMethodSignature', fix }],
                        });
                        return;
                    }
                    context.report({
                        node: propertyNode,
                        messageId: 'errorProperty',
                        fix,
                    });
                },
            }),
        };
    },
});
function returnTypeReferencesThisType(node) {
    return (node &&
        (0, util_1.forEachChildESTree)(node.typeAnnotation, child => child.type === utils_1.AST_NODE_TYPES.TSThisType));
}
//# sourceMappingURL=method-signature-style.js.map