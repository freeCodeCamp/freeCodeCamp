"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
function removeSpaces(str) {
    return str.replaceAll(/\s/g, '');
}
function stringifyNode(node, sourceCode) {
    return removeSpaces(sourceCode.getText(node));
}
function getCustomMessage(bannedType) {
    if (!bannedType || bannedType === true) {
        return '';
    }
    if (typeof bannedType === 'string') {
        return ` ${bannedType}`;
    }
    if (bannedType.message) {
        return ` ${bannedType.message}`;
    }
    return '';
}
const TYPE_KEYWORDS = {
    bigint: utils_1.AST_NODE_TYPES.TSBigIntKeyword,
    boolean: utils_1.AST_NODE_TYPES.TSBooleanKeyword,
    never: utils_1.AST_NODE_TYPES.TSNeverKeyword,
    null: utils_1.AST_NODE_TYPES.TSNullKeyword,
    number: utils_1.AST_NODE_TYPES.TSNumberKeyword,
    object: utils_1.AST_NODE_TYPES.TSObjectKeyword,
    string: utils_1.AST_NODE_TYPES.TSStringKeyword,
    symbol: utils_1.AST_NODE_TYPES.TSSymbolKeyword,
    undefined: utils_1.AST_NODE_TYPES.TSUndefinedKeyword,
    unknown: utils_1.AST_NODE_TYPES.TSUnknownKeyword,
    void: utils_1.AST_NODE_TYPES.TSVoidKeyword,
};
exports.default = (0, util_1.createRule)({
    name: 'no-restricted-types',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow certain types',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            bannedTypeMessage: "Don't use `{{name}}` as a type.{{customMessage}}",
            bannedTypeReplacement: 'Replace `{{name}}` with `{{replacement}}`.',
        },
        schema: [
            {
                type: 'object',
                $defs: {
                    banConfig: {
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Bans the type with the default message.',
                                enum: [true],
                            },
                            {
                                type: 'string',
                                description: 'Bans the type with a custom message.',
                            },
                            {
                                type: 'object',
                                additionalProperties: false,
                                description: 'Bans a type.',
                                properties: {
                                    fixWith: {
                                        type: 'string',
                                        description: 'Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.',
                                    },
                                    message: {
                                        type: 'string',
                                        description: 'Custom error message.',
                                    },
                                    suggest: {
                                        type: 'array',
                                        description: 'Types to suggest replacing with.',
                                        items: { type: 'string' },
                                    },
                                },
                            },
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    types: {
                        type: 'object',
                        additionalProperties: {
                            $ref: '#/items/0/$defs/banConfig',
                        },
                        description: 'An object whose keys are the types you want to ban, and the values are error messages.',
                    },
                },
            },
        ],
    },
    defaultOptions: [{}],
    create(context, [{ types = {} }]) {
        const bannedTypes = new Map(Object.entries(types).map(([type, data]) => [removeSpaces(type), data]));
        function checkBannedTypes(typeNode, name = stringifyNode(typeNode, context.sourceCode)) {
            const bannedType = bannedTypes.get(name);
            if (bannedType == null || bannedType === false) {
                return;
            }
            const customMessage = getCustomMessage(bannedType);
            const fixWith = bannedType && typeof bannedType === 'object' && bannedType.fixWith;
            const suggest = bannedType && typeof bannedType === 'object'
                ? bannedType.suggest
                : undefined;
            context.report({
                node: typeNode,
                messageId: 'bannedTypeMessage',
                data: {
                    name,
                    customMessage,
                },
                fix: fixWith
                    ? (fixer) => fixer.replaceText(typeNode, fixWith)
                    : null,
                suggest: suggest?.map(replacement => ({
                    messageId: 'bannedTypeReplacement',
                    data: {
                        name,
                        replacement,
                    },
                    fix: (fixer) => fixer.replaceText(typeNode, replacement),
                })),
            });
        }
        const keywordSelectors = (0, util_1.objectReduceKey)(TYPE_KEYWORDS, (acc, keyword) => {
            if (bannedTypes.has(keyword)) {
                acc[TYPE_KEYWORDS[keyword]] = (node) => checkBannedTypes(node, keyword);
            }
            return acc;
        }, {});
        return {
            ...keywordSelectors,
            TSClassImplements(node) {
                checkBannedTypes(node.expression);
                if (node.typeArguments) {
                    checkBannedTypes(node);
                }
            },
            TSInterfaceHeritage(node) {
                checkBannedTypes(node.expression);
                if (node.typeArguments) {
                    checkBannedTypes(node);
                }
            },
            TSTupleType(node) {
                if (!node.elementTypes.length) {
                    checkBannedTypes(node);
                }
            },
            TSTypeLiteral(node) {
                if (!node.members.length) {
                    checkBannedTypes(node);
                }
            },
            TSTypeReference(node) {
                checkBannedTypes(node.typeName);
                if (node.typeArguments) {
                    checkBannedTypes(node);
                }
            },
        };
    },
});
//# sourceMappingURL=no-restricted-types.js.map