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
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
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
    [utils_1.TSESTree.AST_NODE_TYPES.TSUnknownKeyword, ts.TypeFlags.Unknown],
    [utils_1.TSESTree.AST_NODE_TYPES.TSNumberKeyword, ts.TypeFlags.Number],
    [utils_1.TSESTree.AST_NODE_TYPES.TSStringKeyword, ts.TypeFlags.String],
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
    if (util.isTypeBigIntLiteralType(type)) {
        return `${type.value.negative ? '-' : ''}${type.value.base10Value}n`;
    }
    if (type.isLiteral()) {
        return type.value.toString();
    }
    if (util.isTypeAnyType(type)) {
        return 'any';
    }
    if (util.isTypeNeverType(type)) {
        return 'never';
    }
    if (util.isTypeUnknownType(type)) {
        return 'unknown';
    }
    if (util.isTypeTemplateLiteralType(type)) {
        return 'template literal type';
    }
    if (tsutils.isBooleanLiteralType(type, true)) {
        return 'true';
    }
    if (tsutils.isBooleanLiteralType(type, false)) {
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
    var _a;
    return !!(((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.TSTypeAnnotation &&
        node.parent.parent &&
        (util.isFunctionType(node.parent.parent) ||
            util.isFunction(node.parent.parent)));
}
/**
 * @remarks TypeScript stores boolean types as the union false | true, always.
 */
function unionTypePartsUnlessBoolean(type) {
    return type.isUnion() &&
        type.types.length === 2 &&
        tsutils.isBooleanLiteralType(type.types[0], false) &&
        tsutils.isBooleanLiteralType(type.types[1], true)
        ? [type]
        : tsutils.unionTypeParts(type);
}
exports.default = util.createRule({
    name: 'no-redundant-type-constituents',
    meta: {
        docs: {
            description: 'Disallow members of unions and intersections that do nothing or override type information',
            recommended: false,
            requiresTypeChecking: true,
        },
        messages: {
            literalOverridden: `{{literal}} is overridden by {{primitive}} in this union type.`,
            primitiveOverridden: `{{primitive}} is overridden by the {{literal}} in this intersection type.`,
            overridden: `'{{typeName}}' is overridden by other types in this {{container}} type.`,
            overrides: `'{{typeName}}' overrides all other types in this {{container}} type.`,
        },
        schema: [],
        type: 'suggestion',
    },
    defaultOptions: [],
    create(context) {
        const parserServices = util.getParserServices(context);
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
            const tsNode = parserServices.esTreeNodeToTSNodeMap.get(typeNode);
            const checker = parserServices.program.getTypeChecker();
            const nodeType = checker.getTypeAtLocation(tsNode);
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
                function checkIntersectionBottomAndTopTypes({ typeFlags, typeName }, typeNode) {
                    for (const [messageId, checkFlag] of [
                        ['overrides', ts.TypeFlags.Any],
                        ['overrides', ts.TypeFlags.Never],
                        ['overridden', ts.TypeFlags.Unknown],
                    ]) {
                        if (typeFlags === checkFlag) {
                            context.report({
                                data: {
                                    container: 'intersection',
                                    typeName,
                                },
                                messageId,
                                node: typeNode,
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
                }
                // For each primitive type of all the seen primitive types,
                // if there was a literal type seen that overrides it,
                // report each of the primitive type's type nodes
                for (const [primitiveTypeFlag, typeNodes] of seenPrimitiveTypes) {
                    const matchedLiteralTypes = seenLiteralTypes.get(primitiveTypeFlag);
                    if (matchedLiteralTypes) {
                        for (const typeNode of typeNodes) {
                            context.report({
                                data: {
                                    literal: matchedLiteralTypes.join(' | '),
                                    primitive: primitiveTypeFlagNames[primitiveTypeFlag],
                                },
                                messageId: 'primitiveOverridden',
                                node: typeNode,
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
                                data: {
                                    container: 'union',
                                    typeName,
                                },
                                messageId: 'overrides',
                                node: typeNode,
                            });
                            return true;
                        }
                    }
                    if (typeFlags === ts.TypeFlags.Never &&
                        !isNodeInsideReturnType(node)) {
                        context.report({
                            data: {
                                container: 'union',
                                typeName: 'never',
                            },
                            messageId: 'overridden',
                            node: typeNode,
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
                    const grouped = util.arrayGroupByToMap(typeFlagsWithText, pair => pair.primitiveTypeFlag);
                    for (const [primitiveTypeFlag, pairs] of grouped) {
                        context.report({
                            data: {
                                literal: pairs.map(pair => pair.literalValue).join(' | '),
                                primitive: primitiveTypeFlagNames[primitiveTypeFlag],
                            },
                            messageId: 'literalOverridden',
                            node: typeNode,
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-redundant-type-constituents.js.map