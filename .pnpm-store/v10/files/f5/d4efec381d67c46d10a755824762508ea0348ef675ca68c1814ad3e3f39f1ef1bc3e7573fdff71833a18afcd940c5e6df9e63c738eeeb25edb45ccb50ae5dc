"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
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
function caseSensitiveSort(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
exports.default = (0, util_1.createRule)({
    name: 'sort-type-constituents',
    meta: {
        type: 'suggestion',
        deprecated: {
            deprecatedSince: '7.13.0',
            replacedBy: [
                {
                    plugin: {
                        name: 'eslint-plugin-perfectionist',
                        url: 'https://perfectionist.dev',
                    },
                    rule: {
                        name: 'perfectionist/sort-intersection-types',
                        url: 'https://perfectionist.dev/rules/sort-intersection-types',
                    },
                },
                {
                    plugin: {
                        name: 'eslint-plugin-perfectionist',
                        url: 'https://perfectionist.dev',
                    },
                    rule: {
                        name: 'perfectionist/sort-union-types',
                        url: 'https://perfectionist.dev/rules/sort-union-types',
                    },
                },
            ],
            url: 'https://github.com/typescript-eslint/typescript-eslint/pull/9253',
        },
        docs: {
            description: 'Enforce constituents of a type union/intersection to be sorted alphabetically',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            notSorted: '{{type}} type constituents must be sorted.',
            notSortedNamed: '{{type}} type {{name}} constituents must be sorted.',
            suggestFix: 'Sort constituents of type (removes all comments).',
        },
        replacedBy: [
            'perfectionist/sort-intersection-types',
            'perfectionist/sort-union-types',
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    caseSensitive: {
                        type: 'boolean',
                        description: 'Whether to sort using case sensitive string comparisons.',
                    },
                    checkIntersections: {
                        type: 'boolean',
                        description: 'Whether to check intersection types (`&`).',
                    },
                    checkUnions: {
                        type: 'boolean',
                        description: 'Whether to check union types (`|`).',
                    },
                    groupOrder: {
                        type: 'array',
                        description: 'Ordering of the groups.',
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
            caseSensitive: false,
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
    create(context, [{ caseSensitive, checkIntersections, checkUnions, groupOrder }]) {
        const collator = new Intl.Collator('en', {
            numeric: true,
            sensitivity: 'base',
        });
        function checkSorting(node) {
            const sourceOrder = node.types.map(type => {
                const group = groupOrder?.indexOf(getGroup(type)) ?? -1;
                return {
                    node: type,
                    group: group === -1 ? Number.MAX_SAFE_INTEGER : group,
                    text: context.sourceCode.getText(type),
                };
            });
            const expectedOrder = [...sourceOrder].sort((a, b) => {
                if (a.group !== b.group) {
                    return a.group - b.group;
                }
                if (caseSensitive) {
                    return caseSensitiveSort(a.text, b.text);
                }
                return (collator.compare(a.text, b.text) ||
                    (a.text < b.text ? -1 : a.text > b.text ? 1 : 0));
            });
            const hasComments = node.types.some(type => {
                const count = context.sourceCode.getCommentsBefore(type).length +
                    context.sourceCode.getCommentsAfter(type).length;
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
                    if (node.parent.type === utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration) {
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
                    return context.report({
                        node,
                        messageId,
                        data,
                        // don't autofix if any of the types have leading/trailing comments
                        // the logic for preserving them correctly is a pain - we may implement this later
                        ...(hasComments
                            ? {
                                suggest: [
                                    {
                                        messageId: 'suggestFix',
                                        fix,
                                    },
                                ],
                            }
                            : { fix }),
                    });
                }
            }
        }
        return {
            ...(checkIntersections && {
                TSIntersectionType(node) {
                    checkSorting(node);
                },
            }),
            ...(checkUnions && {
                TSUnionType(node) {
                    checkSorting(node);
                },
            }),
        };
    },
});
//# sourceMappingURL=sort-type-constituents.js.map