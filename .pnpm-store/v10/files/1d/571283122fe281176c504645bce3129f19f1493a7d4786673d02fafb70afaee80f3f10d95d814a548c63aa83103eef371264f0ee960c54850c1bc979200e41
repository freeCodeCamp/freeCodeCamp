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
const literalToPrimitiveTypeFlags = {
    [ts.TypeFlags.BigIntLiteral]: ts.TypeFlags.BigInt,
    [ts.TypeFlags.BooleanLiteral]: ts.TypeFlags.Boolean,
    [ts.TypeFlags.NumberLiteral]: ts.TypeFlags.Number,
    [ts.TypeFlags.StringLiteral]: ts.TypeFlags.String,
    [ts.TypeFlags.TemplateLiteral]: ts.TypeFlags.String,
};
const literalTypeFlags = [
    ts.TypeFlags.BigIntLiteral,
    ts.TypeFlags.BooleanLiteral,
    ts.TypeFlags.NumberLiteral,
    ts.TypeFlags.StringLiteral,
    ts.TypeFlags.TemplateLiteral,
];
const primitiveTypeFlags = [
    ts.TypeFlags.BigInt,
    ts.TypeFlags.Boolean,
    ts.TypeFlags.Number,
    ts.TypeFlags.String,
];
const primitiveTypeFlagNames = {
    [ts.TypeFlags.BigInt]: 'bigint',
    [ts.TypeFlags.Boolean]: 'boolean',
    [ts.TypeFlags.Number]: 'number',
    [ts.TypeFlags.String]: 'string',
};
const primitiveTypeFlagTypes = {
    bigint: ts.TypeFlags.BigIntLiteral,
    boolean: ts.TypeFlags.BooleanLiteral,
    number: ts.TypeFlags.NumberLiteral,
    string: ts.TypeFlags.StringLiteral,
};
const keywordNodeTypesToTsTypes = new Map([
    [utils_1.TSESTree.AST_NODE_TYPES.TSAnyKeyword, ts.TypeFlags.Any],
    [utils_1.TSESTree.AST_NODE_TYPES.TSBigIntKeyword, ts.TypeFlags.BigInt],
    [utils_1.TSESTree.AST_NODE_TYPES.TSBooleanKeyword, ts.TypeFlags.Boolean],
    [utils_1.TSESTree.AST_NODE_TYPES.TSNeverKeyword, ts.TypeFlags.Never],
    [utils_1.TSESTree.AST_NODE_TYPES.TSNumberKeyword, ts.TypeFlags.Number],
    [utils_1.TSESTree.AST_NODE_TYPES.TSStringKeyword, ts.TypeFlags.String],
    [utils_1.TSESTree.AST_NODE_TYPES.TSUnknownKeyword, ts.TypeFlags.Unknown],
]);
function addToMapGroup(map, key, value) {
    const existing = map.get(key);
    if (existing) {
        existing.push(value);
    }
    else {
        map.set(key, [value]);
    }
}
function describeLiteralType(type) {
    if (type.isStringLiteral()) {
        return JSON.stringify(type.value);
    }
    if ((0, util_1.isTypeBigIntLiteralType)(type)) {
        return `${type.value.negative ? '-' : ''}${type.value.base10Value}n`;
    }
    if (type.isLiteral()) {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        return type.value.toString();
    }
    if (tsutils.isIntrinsicErrorType(type) && type.aliasSymbol) {
        return type.aliasSymbol.escapedName.toString();
    }
    if ((0, util_1.isTypeAnyType)(type)) {
        return 'any';
    }
    if ((0, util_1.isTypeNeverType)(type)) {
        return 'never';
    }
    if ((0, util_1.isTypeUnknownType)(type)) {
        return 'unknown';
    }
    if ((0, util_1.isTypeTemplateLiteralType)(type)) {
        return 'template literal type';
    }
    if ((0, util_1.isTypeBigIntLiteralType)(type)) {
        return `${type.value.negative ? '-' : ''}${type.value.base10Value}n`;
    }
    if (tsutils.isTrueLiteralType(type)) {
        return 'true';
    }
    if (tsutils.isFalseLiteralType(type)) {
        return 'false';
    }
    return 'literal type';
}
function describeLiteralTypeNode(typeNode) {
    switch (typeNode.type) {
        case utils_1.AST_NODE_TYPES.TSAnyKeyword:
            return 'any';
        case utils_1.AST_NODE_TYPES.TSBooleanKeyword:
            return 'boolean';
        case utils_1.AST_NODE_TYPES.TSNeverKeyword:
            return 'never';
        case utils_1.AST_NODE_TYPES.TSNumberKeyword:
            return 'number';
        case utils_1.AST_NODE_TYPES.TSStringKeyword:
            return 'string';
        case utils_1.AST_NODE_TYPES.TSUnknownKeyword:
            return 'unknown';
        case utils_1.AST_NODE_TYPES.TSLiteralType:
            switch (typeNode.literal.type) {
                case utils_1.TSESTree.AST_NODE_TYPES.Literal:
                    switch (typeof typeNode.literal.value) {
                        case 'bigint':
                            return `${typeNode.literal.value < 0 ? '-' : ''}${typeNode.literal.value}n`;
                        case 'string':
                            return JSON.stringify(typeNode.literal.value);
                        default:
                            return `${typeNode.literal.value}`;
                    }
                case utils_1.TSESTree.AST_NODE_TYPES.TemplateLiteral:
                    return 'template literal type';
            }
    }
    return 'literal type';
}
function isNodeInsideReturnType(node) {
    return (node.parent.type === utils_1.AST_NODE_TYPES.TSTypeAnnotation &&
        (0, util_1.isFunctionOrFunctionType)(node.parent.parent));
}
/**
 * @remarks TypeScript stores boolean types as the union false | true, always.
 */
function unionTypePartsUnlessBoolean(type) {
    return type.isUnion() &&
        type.types.length === 2 &&
        tsutils.isFalseLiteralType(type.types[0]) &&
        tsutils.isTrueLiteralType(type.types[1])
        ? [type]
        : tsutils.unionConstituents(type);
}
exports.default = (0, util_1.createRule)({
    name: 'no-redundant-type-constituents',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow members of unions and intersections that do nothing or override type information',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            errorTypeOverrides: `'{{typeName}}' is an 'error' type that acts as 'any' and overrides all other types in this {{container}} type.`,
            literalOverridden: `{{literal}} is overridden by {{primitive}} in this union type.`,
            overridden: `'{{typeName}}' is overridden by other types in this {{container}} type.`,
            overrides: `'{{typeName}}' overrides all other types in this {{container}} type.`,
            primitiveOverridden: `{{primitive}} is overridden by the {{literal}} in this intersection type.`,
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const typesCache = new Map();
        function getTypeNodeTypePartFlags(typeNode) {
            const keywordTypeFlags = keywordNodeTypesToTsTypes.get(typeNode.type);
            if (keywordTypeFlags) {
                return [
                    {
                        typeFlags: keywordTypeFlags,
                        typeName: describeLiteralTypeNode(typeNode),
                    },
                ];
            }
            if (typeNode.type === utils_1.AST_NODE_TYPES.TSLiteralType &&
                typeNode.literal.type === utils_1.AST_NODE_TYPES.Literal) {
                return [
                    {
                        typeFlags: primitiveTypeFlagTypes[typeof typeNode.literal
                            .value],
                        typeName: describeLiteralTypeNode(typeNode),
                    },
                ];
            }
            if (typeNode.type === utils_1.AST_NODE_TYPES.TSUnionType) {
                return typeNode.types.flatMap(getTypeNodeTypePartFlags);
            }
            const nodeType = services.getTypeAtLocation(typeNode);
            const typeParts = unionTypePartsUnlessBoolean(nodeType);
            return typeParts.map(typePart => ({
                typeFlags: typePart.flags,
                typeName: describeLiteralType(typePart),
            }));
        }
        function getTypeNodeTypePartFlagsCached(typeNode) {
            const existing = typesCache.get(typeNode);
            if (existing) {
                return existing;
            }
            const created = getTypeNodeTypePartFlags(typeNode);
            typesCache.set(typeNode, created);
            return created;
        }
        return {
            'TSIntersectionType:exit'(node) {
                const seenLiteralTypes = new Map();
                const seenPrimitiveTypes = new Map();
                const seenUnionTypes = new Map();
                function checkIntersectionBottomAndTopTypes({ typeFlags, typeName }, typeNode) {
                    for (const [messageId, checkFlag] of [
                        ['overrides', ts.TypeFlags.Any],
                        ['overrides', ts.TypeFlags.Never],
                        ['overridden', ts.TypeFlags.Unknown],
                    ]) {
                        if (typeFlags === checkFlag) {
                            context.report({
                                node: typeNode,
                                messageId: typeFlags === ts.TypeFlags.Any && typeName !== 'any'
                                    ? 'errorTypeOverrides'
                                    : messageId,
                                data: {
                                    container: 'intersection',
                                    typeName,
                                },
                            });
                            return true;
                        }
                    }
                    return false;
                }
                for (const typeNode of node.types) {
                    const typePartFlags = getTypeNodeTypePartFlagsCached(typeNode);
                    for (const typePart of typePartFlags) {
                        if (checkIntersectionBottomAndTopTypes(typePart, typeNode)) {
                            continue;
                        }
                        for (const literalTypeFlag of literalTypeFlags) {
                            if (typePart.typeFlags === literalTypeFlag) {
                                addToMapGroup(seenLiteralTypes, literalToPrimitiveTypeFlags[literalTypeFlag], typePart.typeName);
                                break;
                            }
                        }
                        for (const primitiveTypeFlag of primitiveTypeFlags) {
                            if (typePart.typeFlags === primitiveTypeFlag) {
                                addToMapGroup(seenPrimitiveTypes, primitiveTypeFlag, typeNode);
                            }
                        }
                    }
                    // if any typeNode is TSTypeReference and typePartFlags have more than 1 element, than the referenced type is definitely a union.
                    if (typePartFlags.length >= 2) {
                        seenUnionTypes.set(typeNode, typePartFlags);
                    }
                }
                /**
                 * @example
                 * ```ts
                 * type F = "a"|2|"b";
                 * type I = F & string;
                 * ```
                 * This function checks if all the union members of `F` are assignable to the other member of `I`. If every member is assignable, then its reported else not.
                 */
                const checkIfUnionsAreAssignable = () => {
                    for (const [typeRef, typeValues] of seenUnionTypes) {
                        let primitive = undefined;
                        for (const { typeFlags } of typeValues) {
                            if (seenPrimitiveTypes.has(literalToPrimitiveTypeFlags[typeFlags])) {
                                primitive =
                                    literalToPrimitiveTypeFlags[typeFlags];
                            }
                            else {
                                primitive = undefined;
                                break;
                            }
                        }
                        if (Number.isInteger(primitive)) {
                            context.report({
                                node: typeRef,
                                messageId: 'primitiveOverridden',
                                data: {
                                    literal: typeValues.map(name => name.typeName).join(' | '),
                                    primitive: primitiveTypeFlagNames[primitive],
                                },
                            });
                        }
                    }
                };
                if (seenUnionTypes.size > 0) {
                    checkIfUnionsAreAssignable();
                    return;
                }
                // For each primitive type of all the seen primitive types,
                // if there was a literal type seen that overrides it,
                // report each of the primitive type's type nodes
                for (const [primitiveTypeFlag, typeNodes] of seenPrimitiveTypes) {
                    const matchedLiteralTypes = seenLiteralTypes.get(primitiveTypeFlag);
                    if (matchedLiteralTypes) {
                        for (const typeNode of typeNodes) {
                            context.report({
                                node: typeNode,
                                messageId: 'primitiveOverridden',
                                data: {
                                    literal: matchedLiteralTypes.join(' | '),
                                    primitive: primitiveTypeFlagNames[primitiveTypeFlag],
                                },
                            });
                        }
                    }
                }
            },
            'TSUnionType:exit'(node) {
                const seenLiteralTypes = new Map();
                const seenPrimitiveTypes = new Set();
                function checkUnionBottomAndTopTypes({ typeFlags, typeName }, typeNode) {
                    for (const checkFlag of [
                        ts.TypeFlags.Any,
                        ts.TypeFlags.Unknown,
                    ]) {
                        if (typeFlags === checkFlag) {
                            context.report({
                                node: typeNode,
                                messageId: typeFlags === ts.TypeFlags.Any && typeName !== 'any'
                                    ? 'errorTypeOverrides'
                                    : 'overrides',
                                data: {
                                    container: 'union',
                                    typeName,
                                },
                            });
                            return true;
                        }
                    }
                    if (typeFlags === ts.TypeFlags.Never &&
                        !isNodeInsideReturnType(node)) {
                        context.report({
                            node: typeNode,
                            messageId: 'overridden',
                            data: {
                                container: 'union',
                                typeName: 'never',
                            },
                        });
                        return true;
                    }
                    return false;
                }
                for (const typeNode of node.types) {
                    const typePartFlags = getTypeNodeTypePartFlagsCached(typeNode);
                    for (const typePart of typePartFlags) {
                        if (checkUnionBottomAndTopTypes(typePart, typeNode)) {
                            continue;
                        }
                        for (const literalTypeFlag of literalTypeFlags) {
                            if (typePart.typeFlags === literalTypeFlag) {
                                addToMapGroup(seenLiteralTypes, literalToPrimitiveTypeFlags[literalTypeFlag], {
                                    literalValue: typePart.typeName,
                                    typeNode,
                                });
                                break;
                            }
                        }
                        for (const primitiveTypeFlag of primitiveTypeFlags) {
                            if ((typePart.typeFlags & primitiveTypeFlag) !== 0) {
                                seenPrimitiveTypes.add(primitiveTypeFlag);
                            }
                        }
                    }
                }
                const overriddenTypeNodes = new Map();
                // For each primitive type of all the seen literal types,
                // if there was a primitive type seen that overrides it,
                // upsert the literal text and primitive type under the backing type node
                for (const [primitiveTypeFlag, typeNodesWithText] of seenLiteralTypes) {
                    if (seenPrimitiveTypes.has(primitiveTypeFlag)) {
                        for (const { literalValue, typeNode } of typeNodesWithText) {
                            addToMapGroup(overriddenTypeNodes, typeNode, {
                                literalValue,
                                primitiveTypeFlag,
                            });
                        }
                    }
                }
                // For each type node that had at least one overridden literal,
                // group those literals by their primitive type,
                // then report each primitive type with all its literals
                for (const [typeNode, typeFlagsWithText] of overriddenTypeNodes) {
                    const grouped = (0, util_1.arrayGroupByToMap)(typeFlagsWithText, pair => pair.primitiveTypeFlag);
                    for (const [primitiveTypeFlag, pairs] of grouped) {
                        context.report({
                            node: typeNode,
                            messageId: 'literalOverridden',
                            data: {
                                literal: pairs.map(pair => pair.literalValue).join(' | '),
                                primitive: primitiveTypeFlagNames[primitiveTypeFlag],
                            },
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-redundant-type-constituents.js.map