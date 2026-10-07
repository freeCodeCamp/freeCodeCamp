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
const util_1 = require("../util");
var Group;
(function (Group) {
    Group["conditional"] = "conditional";
    Group["function"] = "function";
    Group["import"] = "import";
    Group["intersection"] = "intersection";
    Group["keyword"] = "keyword";
    Group["nullish"] = "nullish";
    Group["literal"] = "literal";
    Group["named"] = "named";
    Group["object"] = "object";
    Group["operator"] = "operator";
    Group["tuple"] = "tuple";
    Group["union"] = "union";
})(Group || (Group = {}));
function getGroup(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSConditionalType:
            return Group.conditional;
        case utils_1.AST_NODE_TYPES.TSConstructorType:
        case utils_1.AST_NODE_TYPES.TSFunctionType:
            return Group.function;
        case utils_1.AST_NODE_TYPES.TSImportType:
            return Group.import;
        case utils_1.AST_NODE_TYPES.TSIntersectionType:
            return Group.intersection;
        case utils_1.AST_NODE_TYPES.TSAnyKeyword:
        case utils_1.AST_NODE_TYPES.TSBigIntKeyword:
        case utils_1.AST_NODE_TYPES.TSBooleanKeyword:
        case utils_1.AST_NODE_TYPES.TSNeverKeyword:
        case utils_1.AST_NODE_TYPES.TSNumberKeyword:
        case utils_1.AST_NODE_TYPES.TSObjectKeyword:
        case utils_1.AST_NODE_TYPES.TSStringKeyword:
        case utils_1.AST_NODE_TYPES.TSSymbolKeyword:
        case utils_1.AST_NODE_TYPES.TSThisType:
        case utils_1.AST_NODE_TYPES.TSUnknownKeyword:
        case utils_1.AST_NODE_TYPES.TSIntrinsicKeyword:
            return Group.keyword;
        case utils_1.AST_NODE_TYPES.TSNullKeyword:
        case utils_1.AST_NODE_TYPES.TSUndefinedKeyword:
        case utils_1.AST_NODE_TYPES.TSVoidKeyword:
            return Group.nullish;
        case utils_1.AST_NODE_TYPES.TSLiteralType:
        case utils_1.AST_NODE_TYPES.TSTemplateLiteralType:
            return Group.literal;
        case utils_1.AST_NODE_TYPES.TSArrayType:
        case utils_1.AST_NODE_TYPES.TSIndexedAccessType:
        case utils_1.AST_NODE_TYPES.TSInferType:
        case utils_1.AST_NODE_TYPES.TSTypeReference:
        case utils_1.AST_NODE_TYPES.TSQualifiedName:
            return Group.named;
        case utils_1.AST_NODE_TYPES.TSMappedType:
        case utils_1.AST_NODE_TYPES.TSTypeLiteral:
            return Group.object;
        case utils_1.AST_NODE_TYPES.TSTypeOperator:
        case utils_1.AST_NODE_TYPES.TSTypeQuery:
            return Group.operator;
        case utils_1.AST_NODE_TYPES.TSTupleType:
            return Group.tuple;
        case utils_1.AST_NODE_TYPES.TSUnionType:
            return Group.union;
        // These types should never occur as part of a union/intersection
        case utils_1.AST_NODE_TYPES.TSAbstractKeyword:
        case utils_1.AST_NODE_TYPES.TSAsyncKeyword:
        case utils_1.AST_NODE_TYPES.TSDeclareKeyword:
        case utils_1.AST_NODE_TYPES.TSExportKeyword:
        case utils_1.AST_NODE_TYPES.TSNamedTupleMember:
        case utils_1.AST_NODE_TYPES.TSOptionalType:
        case utils_1.AST_NODE_TYPES.TSPrivateKeyword:
        case utils_1.AST_NODE_TYPES.TSProtectedKeyword:
        case utils_1.AST_NODE_TYPES.TSPublicKeyword:
        case utils_1.AST_NODE_TYPES.TSReadonlyKeyword:
        case utils_1.AST_NODE_TYPES.TSRestType:
        case utils_1.AST_NODE_TYPES.TSStaticKeyword:
        case utils_1.AST_NODE_TYPES.TSTypePredicate:
            /* istanbul ignore next */
            throw new Error(`Unexpected Type ${node.type}`);
    }
}
exports.default = util.createRule({
    name: 'sort-type-union-intersection-members',
    meta: {
        deprecated: true,
        type: 'suggestion',
        docs: {
            description: 'Enforce members of a type union/intersection to be sorted alphabetically',
            recommended: false,
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            notSorted: '{{type}} type members must be sorted.',
            notSortedNamed: '{{type}} type {{name}} members must be sorted.',
            suggestFix: 'Sort members of type (removes all comments).',
        },
        replacedBy: ['@typescript-eslint/sort-type-constituents'],
        schema: [
            {
                type: 'object',
                properties: {
                    checkIntersections: {
                        description: 'Whether to check intersection types.',
                        type: 'boolean',
                    },
                    checkUnions: {
                        description: 'Whether to check union types.',
                        type: 'boolean',
                    },
                    groupOrder: {
                        description: 'Ordering of the groups.',
                        type: 'array',
                        items: {
                            type: 'string',
                            enum: (0, util_1.getEnumNames)(Group),
                        },
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            checkIntersections: true,
            checkUnions: true,
            groupOrder: [
                Group.named,
                Group.keyword,
                Group.operator,
                Group.literal,
                Group.function,
                Group.import,
                Group.conditional,
                Group.object,
                Group.tuple,
                Group.intersection,
                Group.union,
                Group.nullish,
            ],
        },
    ],
    create(context, [{ checkIntersections, checkUnions, groupOrder }]) {
        const sourceCode = context.getSourceCode();
        const collator = new Intl.Collator('en', {
            sensitivity: 'base',
            numeric: true,
        });
        function checkSorting(node) {
            var _a;
            const sourceOrder = node.types.map(type => {
                var _a;
                const group = (_a = groupOrder === null || groupOrder === void 0 ? void 0 : groupOrder.indexOf(getGroup(type))) !== null && _a !== void 0 ? _a : -1;
                return {
                    group: group === -1 ? Number.MAX_SAFE_INTEGER : group,
                    node: type,
                    text: sourceCode.getText(type),
                };
            });
            const expectedOrder = [...sourceOrder].sort((a, b) => {
                if (a.group !== b.group) {
                    return a.group - b.group;
                }
                return (collator.compare(a.text, b.text) ||
                    (a.text < b.text ? -1 : a.text > b.text ? 1 : 0));
            });
            const hasComments = node.types.some(type => {
                const count = sourceCode.getCommentsBefore(type).length +
                    sourceCode.getCommentsAfter(type).length;
                return count > 0;
            });
            for (let i = 0; i < expectedOrder.length; i += 1) {
                if (expectedOrder[i].node !== sourceOrder[i].node) {
                    let messageId = 'notSorted';
                    const data = {
                        name: '',
                        type: node.type === utils_1.AST_NODE_TYPES.TSIntersectionType
                            ? 'Intersection'
                            : 'Union',
                    };
                    if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration) {
                        messageId = 'notSortedNamed';
                        data.name = node.parent.id.name;
                    }
                    const fix = fixer => {
                        const sorted = expectedOrder
                            .map(t => (0, util_1.typeNodeRequiresParentheses)(t.node, t.text) ||
                            (node.type === utils_1.AST_NODE_TYPES.TSIntersectionType &&
                                t.node.type === utils_1.AST_NODE_TYPES.TSUnionType)
                            ? `(${t.text})`
                            : t.text)
                            .join(node.type === utils_1.AST_NODE_TYPES.TSIntersectionType ? ' & ' : ' | ');
                        return fixer.replaceText(node, sorted);
                    };
                    return context.report(Object.assign({ node,
                        messageId,
                        data }, (hasComments
                        ? {
                            suggest: [
                                {
                                    messageId: 'suggestFix',
                                    fix,
                                },
                            ],
                        }
                        : { fix })));
                }
            }
        }
        return Object.assign(Object.assign({}, (checkIntersections && {
            TSIntersectionType(node) {
                checkSorting(node);
            },
        })), (checkUnions && {
            TSUnionType(node) {
                checkSorting(node);
            },
        }));
    },
});
//# sourceMappingURL=sort-type-union-intersection-members.js.map