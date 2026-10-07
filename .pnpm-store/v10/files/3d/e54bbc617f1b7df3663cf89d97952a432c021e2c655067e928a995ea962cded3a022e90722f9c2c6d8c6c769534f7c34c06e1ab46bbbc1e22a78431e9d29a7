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
exports.TYPE_KEYWORDS = void 0;
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}
function stringifyNode(node, sourceCode) {
    return removeSpaces(sourceCode.getText(node));
}
function getCustomMessage(bannedType) {
    if (bannedType == null) {
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
const defaultTypes = {
    String: {
        message: 'Use string instead',
        fixWith: 'string',
    },
    Boolean: {
        message: 'Use boolean instead',
        fixWith: 'boolean',
    },
    Number: {
        message: 'Use number instead',
        fixWith: 'number',
    },
    Symbol: {
        message: 'Use symbol instead',
        fixWith: 'symbol',
    },
    BigInt: {
        message: 'Use bigint instead',
        fixWith: 'bigint',
    },
    Function: {
        message: [
            'The `Function` type accepts any function-like value.',
            'It provides no type safety when calling the function, which can be a common source of bugs.',
            'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
            'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
        ].join('\n'),
    },
    // object typing
    Object: {
        message: [
            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
            '- If you want a type meaning "any object", you probably want `object` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
            '- If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.',
        ].join('\n'),
        suggest: ['object', 'unknown', 'NonNullable<unknown>'],
    },
    '{}': {
        message: [
            '`{}` actually means "any non-nullish value".',
            '- If you want a type meaning "any object", you probably want `object` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
            '- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.',
            '- If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.',
        ].join('\n'),
        suggest: [
            'object',
            'unknown',
            'Record<string, never>',
            'NonNullable<unknown>',
        ],
    },
};
exports.TYPE_KEYWORDS = {
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
exports.default = util.createRule({
    name: 'ban-types',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow certain types',
            recommended: 'error',
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
                properties: {
                    types: {
                        type: 'object',
                        additionalProperties: {
                            oneOf: [
                                { type: 'null' },
                                { type: 'boolean' },
                                { type: 'string' },
                                {
                                    type: 'object',
                                    properties: {
                                        message: { type: 'string' },
                                        fixWith: { type: 'string' },
                                        suggest: {
                                            type: 'array',
                                            items: { type: 'string' },
                                        },
                                    },
                                    additionalProperties: false,
                                },
                            ],
                        },
                    },
                    extendDefaults: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [{}],
    create(context, [options]) {
        var _a, _b;
        const extendDefaults = (_a = options.extendDefaults) !== null && _a !== void 0 ? _a : true;
        const customTypes = (_b = options.types) !== null && _b !== void 0 ? _b : {};
        const types = Object.assign({}, extendDefaults ? defaultTypes : {}, customTypes);
        const bannedTypes = new Map(Object.entries(types).map(([type, data]) => [removeSpaces(type), data]));
        function checkBannedTypes(typeNode, name = stringifyNode(typeNode, context.getSourceCode())) {
            const bannedType = bannedTypes.get(name);
            if (bannedType === undefined || bannedType === false) {
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
                suggest: suggest === null || suggest === void 0 ? void 0 : suggest.map(replacement => ({
                    messageId: 'bannedTypeReplacement',
                    data: {
                        name,
                        replacement,
                    },
                    fix: (fixer) => fixer.replaceText(typeNode, replacement),
                })),
            });
        }
        const keywordSelectors = util.objectReduceKey(exports.TYPE_KEYWORDS, (acc, keyword) => {
            if (bannedTypes.has(keyword)) {
                acc[exports.TYPE_KEYWORDS[keyword]] = (node) => checkBannedTypes(node, keyword);
            }
            return acc;
        }, {});
        return Object.assign(Object.assign({}, keywordSelectors), { TSTypeLiteral(node) {
                if (node.members.length) {
                    return;
                }
                checkBannedTypes(node);
            },
            TSTupleType(node) {
                if (node.elementTypes.length === 0) {
                    checkBannedTypes(node);
                }
            },
            TSTypeReference(node) {
                checkBannedTypes(node.typeName);
                if (node.typeParameters) {
                    checkBannedTypes(node);
                }
            },
            TSInterfaceHeritage(node) {
                checkBannedTypes(node);
            },
            TSClassImplements(node) {
                checkBannedTypes(node);
            } });
    },
});
//# sourceMappingURL=ban-types.js.map