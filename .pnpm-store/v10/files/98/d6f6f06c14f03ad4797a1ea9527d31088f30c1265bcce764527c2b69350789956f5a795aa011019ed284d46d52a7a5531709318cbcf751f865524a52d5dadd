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
/**
 * Check whatever node can be considered as simple
 * @param node the node to be evaluated.
 */
function isSimpleType(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.Identifier:
        case utils_1.AST_NODE_TYPES.TSAnyKeyword:
        case utils_1.AST_NODE_TYPES.TSBooleanKeyword:
        case utils_1.AST_NODE_TYPES.TSNeverKeyword:
        case utils_1.AST_NODE_TYPES.TSNumberKeyword:
        case utils_1.AST_NODE_TYPES.TSBigIntKeyword:
        case utils_1.AST_NODE_TYPES.TSObjectKeyword:
        case utils_1.AST_NODE_TYPES.TSStringKeyword:
        case utils_1.AST_NODE_TYPES.TSSymbolKeyword:
        case utils_1.AST_NODE_TYPES.TSUnknownKeyword:
        case utils_1.AST_NODE_TYPES.TSVoidKeyword:
        case utils_1.AST_NODE_TYPES.TSNullKeyword:
        case utils_1.AST_NODE_TYPES.TSArrayType:
        case utils_1.AST_NODE_TYPES.TSUndefinedKeyword:
        case utils_1.AST_NODE_TYPES.TSThisType:
        case utils_1.AST_NODE_TYPES.TSQualifiedName:
            return true;
        case utils_1.AST_NODE_TYPES.TSTypeReference:
            if (node.typeName &&
                node.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.typeName.name === 'Array') {
                if (!node.typeParameters) {
                    return true;
                }
                if (node.typeParameters.params.length === 1) {
                    return isSimpleType(node.typeParameters.params[0]);
                }
            }
            else {
                if (node.typeParameters) {
                    return false;
                }
                return isSimpleType(node.typeName);
            }
            return false;
        default:
            return false;
    }
}
/**
 * Check if node needs parentheses
 * @param node the node to be evaluated.
 */
function typeNeedsParentheses(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSTypeReference:
            return typeNeedsParentheses(node.typeName);
        case utils_1.AST_NODE_TYPES.TSUnionType:
        case utils_1.AST_NODE_TYPES.TSFunctionType:
        case utils_1.AST_NODE_TYPES.TSIntersectionType:
        case utils_1.AST_NODE_TYPES.TSTypeOperator:
        case utils_1.AST_NODE_TYPES.TSInferType:
        case utils_1.AST_NODE_TYPES.TSConstructorType:
            return true;
        case utils_1.AST_NODE_TYPES.Identifier:
            return node.name === 'ReadonlyArray';
        default:
            return false;
    }
}
exports.default = util.createRule({
    name: 'array-type',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require consistently using either `T[]` or `Array<T>` for arrays',
            recommended: 'strict',
        },
        fixable: 'code',
        messages: {
            errorStringGeneric: "Array type using '{{readonlyPrefix}}{{type}}[]' is forbidden. Use '{{className}}<{{type}}>' instead.",
            errorStringArray: "Array type using '{{className}}<{{type}}>' is forbidden. Use '{{readonlyPrefix}}{{type}}[]' instead.",
            errorStringArraySimple: "Array type using '{{className}}<{{type}}>' is forbidden for simple types. Use '{{readonlyPrefix}}{{type}}[]' instead.",
            errorStringGenericSimple: "Array type using '{{readonlyPrefix}}{{type}}[]' is forbidden for non-simple types. Use '{{className}}<{{type}}>' instead.",
        },
        schema: {
            $defs: {
                arrayOption: {
                    enum: ['array', 'generic', 'array-simple'],
                },
            },
            prefixItems: [
                {
                    properties: {
                        default: {
                            $ref: '#/$defs/arrayOption',
                            description: 'The array type expected for mutable cases...',
                        },
                        readonly: {
                            $ref: '#/$defs/arrayOption',
                            description: 'The array type expected for readonly cases. If omitted, the value for `default` will be used.',
                        },
                    },
                    type: 'object',
                },
            ],
            type: 'array',
        },
    },
    defaultOptions: [
        {
            default: 'array',
        },
    ],
    create(context, [options]) {
        var _a;
        const sourceCode = context.getSourceCode();
        const defaultOption = options.default;
        const readonlyOption = (_a = options.readonly) !== null && _a !== void 0 ? _a : defaultOption;
        /**
         * @param node the node to be evaluated.
         */
        function getMessageType(node) {
            if (node && isSimpleType(node)) {
                return sourceCode.getText(node);
            }
            return 'T';
        }
        return {
            TSArrayType(node) {
                const isReadonly = node.parent &&
                    node.parent.type === utils_1.AST_NODE_TYPES.TSTypeOperator &&
                    node.parent.operator === 'readonly';
                const currentOption = isReadonly ? readonlyOption : defaultOption;
                if (currentOption === 'array' ||
                    (currentOption === 'array-simple' && isSimpleType(node.elementType))) {
                    return;
                }
                const messageId = currentOption === 'generic'
                    ? 'errorStringGeneric'
                    : 'errorStringGenericSimple';
                const errorNode = isReadonly ? node.parent : node;
                context.report({
                    node: errorNode,
                    messageId,
                    data: {
                        className: isReadonly ? 'ReadonlyArray' : 'Array',
                        readonlyPrefix: isReadonly ? 'readonly ' : '',
                        type: getMessageType(node.elementType),
                    },
                    fix(fixer) {
                        const typeNode = node.elementType;
                        const arrayType = isReadonly ? 'ReadonlyArray' : 'Array';
                        return [
                            fixer.replaceTextRange([errorNode.range[0], typeNode.range[0]], `${arrayType}<`),
                            fixer.replaceTextRange([typeNode.range[1], errorNode.range[1]], '>'),
                        ];
                    },
                });
            },
            TSTypeReference(node) {
                var _a, _b;
                if (node.typeName.type !== utils_1.AST_NODE_TYPES.Identifier ||
                    !(node.typeName.name === 'Array' ||
                        node.typeName.name === 'ReadonlyArray')) {
                    return;
                }
                const isReadonlyArrayType = node.typeName.name === 'ReadonlyArray';
                const currentOption = isReadonlyArrayType
                    ? readonlyOption
                    : defaultOption;
                if (currentOption === 'generic') {
                    return;
                }
                const readonlyPrefix = isReadonlyArrayType ? 'readonly ' : '';
                const typeParams = (_a = node.typeParameters) === null || _a === void 0 ? void 0 : _a.params;
                const messageId = currentOption === 'array'
                    ? 'errorStringArray'
                    : 'errorStringArraySimple';
                if (!typeParams || typeParams.length === 0) {
                    // Create an 'any' array
                    context.report({
                        node,
                        messageId,
                        data: {
                            className: isReadonlyArrayType ? 'ReadonlyArray' : 'Array',
                            readonlyPrefix,
                            type: 'any',
                        },
                        fix(fixer) {
                            return fixer.replaceText(node, `${readonlyPrefix}any[]`);
                        },
                    });
                    return;
                }
                if (typeParams.length !== 1 ||
                    (currentOption === 'array-simple' && !isSimpleType(typeParams[0]))) {
                    return;
                }
                const type = typeParams[0];
                const typeParens = typeNeedsParentheses(type);
                const parentParens = readonlyPrefix &&
                    ((_b = node.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.TSArrayType &&
                    !util.isParenthesized(node.parent.elementType, sourceCode);
                const start = `${parentParens ? '(' : ''}${readonlyPrefix}${typeParens ? '(' : ''}`;
                const end = `${typeParens ? ')' : ''}[]${parentParens ? ')' : ''}`;
                context.report({
                    node,
                    messageId,
                    data: {
                        className: isReadonlyArrayType ? 'ReadonlyArray' : 'Array',
                        readonlyPrefix,
                        type: getMessageType(type),
                    },
                    fix(fixer) {
                        return [
                            fixer.replaceTextRange([node.range[0], type.range[0]], start),
                            fixer.replaceTextRange([type.range[1], node.range[1]], end),
                        ];
                    },
                });
            },
        };
    },
});
//# sourceMappingURL=array-type.js.map