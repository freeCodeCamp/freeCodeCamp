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
function isEnumType(type) {
    return (type.getFlags() & ts.TypeFlags.EnumLike) !== 0;
}
function isEnumMemberType(type) {
    const symbol = type.getSymbol();
    if (!symbol) {
        return false;
    }
    return tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.EnumMember);
}
exports.default = (0, util_1.createRule)({
    name: 'no-unnecessary-type-conversion',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow conversion idioms when they do not change the type or value of the expression',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            suggestRemove: 'Remove the type conversion.',
            suggestSatisfies: 'Instead, assert that the value satisfies the {{type}} type.',
            unnecessaryTypeConversion: '{{violation}} does not change the type or value of the {{type}}.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function doesUnderlyingTypeMatchFlag(type, typeFlag) {
            return tsutils
                .unionConstituents(type)
                .every(t => (0, util_1.isTypeFlagSet)(t, typeFlag));
        }
        const services = (0, util_1.getParserServices)(context);
        function handleUnaryOperator(node, typeFlag, typeString, violation, isDoubleOperator) {
            const outerNode = isDoubleOperator ? node.parent : node;
            const type = services.getTypeAtLocation(node.argument);
            if (doesUnderlyingTypeMatchFlag(type, typeFlag)) {
                const wrappingFixerParams = {
                    node: outerNode,
                    innerNode: [node.argument],
                    sourceCode: context.sourceCode,
                };
                context.report({
                    loc: {
                        start: outerNode.loc.start,
                        end: {
                            column: node.loc.start.column + 1,
                            line: node.loc.start.line,
                        },
                    },
                    messageId: 'unnecessaryTypeConversion',
                    data: { type: typeString, violation },
                    suggest: [
                        {
                            messageId: 'suggestRemove',
                            fix: (0, util_1.getWrappingFixer)(wrappingFixerParams),
                        },
                        {
                            messageId: 'suggestSatisfies',
                            data: { type: typeString },
                            fix: (0, util_1.getWrappingFixer)({
                                ...wrappingFixerParams,
                                wrap: expr => `${expr} satisfies ${typeString}`,
                            }),
                        },
                    ],
                });
            }
        }
        return {
            'AssignmentExpression[operator = "+="]'(node) {
                if (node.right.type === utils_1.AST_NODE_TYPES.Literal &&
                    node.right.value === '' &&
                    doesUnderlyingTypeMatchFlag(services.getTypeAtLocation(node.left), ts.TypeFlags.StringLike)) {
                    const wrappingFixerParams = {
                        node,
                        innerNode: [node.left],
                        sourceCode: context.sourceCode,
                    };
                    context.report({
                        node,
                        messageId: 'unnecessaryTypeConversion',
                        data: {
                            type: 'string',
                            violation: "Concatenating a string with ''",
                        },
                        suggest: [
                            {
                                messageId: 'suggestRemove',
                                fix: node.parent.type === utils_1.AST_NODE_TYPES.ExpressionStatement
                                    ? (fixer) => [
                                        fixer.removeRange([
                                            node.parent.range[0],
                                            node.parent.range[1],
                                        ]),
                                    ]
                                    : (0, util_1.getWrappingFixer)(wrappingFixerParams),
                            },
                            {
                                messageId: 'suggestSatisfies',
                                data: { type: 'string' },
                                fix: (0, util_1.getWrappingFixer)({
                                    ...wrappingFixerParams,
                                    wrap: expr => `${expr} satisfies string`,
                                }),
                            },
                        ],
                    });
                }
            },
            'BinaryExpression[operator = "+"]'(node) {
                if (node.right.type === utils_1.AST_NODE_TYPES.Literal &&
                    node.right.value === '' &&
                    doesUnderlyingTypeMatchFlag(services.getTypeAtLocation(node.left), ts.TypeFlags.StringLike)) {
                    const wrappingFixerParams = {
                        node,
                        innerNode: [node.left],
                        sourceCode: context.sourceCode,
                    };
                    context.report({
                        loc: {
                            start: node.left.loc.end,
                            end: node.loc.end,
                        },
                        messageId: 'unnecessaryTypeConversion',
                        data: {
                            type: 'string',
                            violation: "Concatenating a string with ''",
                        },
                        suggest: [
                            {
                                messageId: 'suggestRemove',
                                fix: (0, util_1.getWrappingFixer)(wrappingFixerParams),
                            },
                            {
                                messageId: 'suggestSatisfies',
                                data: { type: 'string' },
                                fix: (0, util_1.getWrappingFixer)({
                                    ...wrappingFixerParams,
                                    wrap: expr => `${expr} satisfies string`,
                                }),
                            },
                        ],
                    });
                }
                else if (node.left.type === utils_1.AST_NODE_TYPES.Literal &&
                    node.left.value === '' &&
                    doesUnderlyingTypeMatchFlag(services.getTypeAtLocation(node.right), ts.TypeFlags.StringLike)) {
                    const wrappingFixerParams = {
                        node,
                        innerNode: [node.right],
                        sourceCode: context.sourceCode,
                    };
                    context.report({
                        loc: {
                            start: node.loc.start,
                            end: node.right.loc.start,
                        },
                        messageId: 'unnecessaryTypeConversion',
                        data: {
                            type: 'string',
                            violation: "Concatenating '' with a string",
                        },
                        suggest: [
                            {
                                messageId: 'suggestRemove',
                                fix: (0, util_1.getWrappingFixer)(wrappingFixerParams),
                            },
                            {
                                messageId: 'suggestSatisfies',
                                data: { type: 'string' },
                                fix: (0, util_1.getWrappingFixer)({
                                    ...wrappingFixerParams,
                                    wrap: expr => `${expr} satisfies string`,
                                }),
                            },
                        ],
                    });
                }
            },
            CallExpression(node) {
                const nodeCallee = node.callee;
                const builtInTypeFlags = {
                    BigInt: ts.TypeFlags.BigIntLike,
                    Boolean: ts.TypeFlags.BooleanLike,
                    Number: ts.TypeFlags.NumberLike,
                    String: ts.TypeFlags.StringLike,
                };
                if (nodeCallee.type !== utils_1.AST_NODE_TYPES.Identifier ||
                    !(nodeCallee.name in builtInTypeFlags)) {
                    return;
                }
                const typeFlag = builtInTypeFlags[nodeCallee.name];
                const scope = context.sourceCode.getScope(node);
                const variable = utils_1.ASTUtils.findVariable(scope, nodeCallee.name);
                if (!!variable?.defs.length ||
                    !doesUnderlyingTypeMatchFlag((0, util_1.getConstrainedTypeAtLocation)(services, node.arguments[0]), typeFlag)) {
                    return;
                }
                const wrappingFixerParams = {
                    node,
                    innerNode: [node.arguments[0]],
                    sourceCode: context.sourceCode,
                };
                const typeString = nodeCallee.name.toLowerCase();
                context.report({
                    node: nodeCallee,
                    messageId: 'unnecessaryTypeConversion',
                    data: {
                        type: nodeCallee.name.toLowerCase(),
                        violation: `Passing a ${typeString} to ${nodeCallee.name}()`,
                    },
                    suggest: [
                        {
                            messageId: 'suggestRemove',
                            fix: (0, util_1.getWrappingFixer)(wrappingFixerParams),
                        },
                        {
                            messageId: 'suggestSatisfies',
                            data: { type: typeString },
                            fix: (0, util_1.getWrappingFixer)({
                                ...wrappingFixerParams,
                                wrap: expr => `${expr} satisfies ${typeString}`,
                            }),
                        },
                    ],
                });
            },
            'CallExpression > MemberExpression.callee > Identifier[name = "toString"].property'(node) {
                const memberExpr = node.parent;
                const type = (0, util_1.getConstrainedTypeAtLocation)(services, memberExpr.object);
                if (isEnumType(type) || isEnumMemberType(type)) {
                    return;
                }
                if (doesUnderlyingTypeMatchFlag(type, ts.TypeFlags.StringLike)) {
                    const wrappingFixerParams = {
                        node: memberExpr.parent,
                        innerNode: [memberExpr.object],
                        sourceCode: context.sourceCode,
                    };
                    context.report({
                        loc: {
                            start: memberExpr.property.loc.start,
                            end: memberExpr.parent.loc.end,
                        },
                        messageId: 'unnecessaryTypeConversion',
                        data: {
                            type: 'string',
                            violation: "Calling a string's .toString() method",
                        },
                        suggest: [
                            {
                                messageId: 'suggestRemove',
                                fix: (0, util_1.getWrappingFixer)(wrappingFixerParams),
                            },
                            {
                                messageId: 'suggestSatisfies',
                                data: { type: 'string' },
                                fix: (0, util_1.getWrappingFixer)({
                                    ...wrappingFixerParams,
                                    wrap: expr => `${expr} satisfies string`,
                                }),
                            },
                        ],
                    });
                }
            },
            'UnaryExpression[operator = "!"] > UnaryExpression[operator = "!"]'(node) {
                handleUnaryOperator(node, ts.TypeFlags.BooleanLike, 'boolean', 'Using !! on a boolean', true);
            },
            'UnaryExpression[operator = "+"]'(node) {
                handleUnaryOperator(node, ts.TypeFlags.NumberLike, 'number', 'Using the unary + operator on a number', false);
            },
            'UnaryExpression[operator = "~"] > UnaryExpression[operator = "~"]'(node) {
                const outerNode = node.parent;
                const type = services.getTypeAtLocation(node.argument);
                if (tsutils.unionConstituents(type).every(t => {
                    return ((0, util_1.isTypeFlagSet)(t, ts.TypeFlags.NumberLiteral) &&
                        Number.isInteger(t.value));
                })) {
                    const wrappingFixerParams = {
                        node: outerNode,
                        innerNode: [node.argument],
                        sourceCode: context.sourceCode,
                    };
                    context.report({
                        loc: {
                            start: outerNode.loc.start,
                            end: {
                                column: node.loc.start.column + 1,
                                line: node.loc.start.line,
                            },
                        },
                        messageId: 'unnecessaryTypeConversion',
                        data: { type: 'number', violation: 'Using ~~ on an integer' },
                        suggest: [
                            {
                                messageId: 'suggestRemove',
                                fix: (0, util_1.getWrappingFixer)(wrappingFixerParams),
                            },
                            {
                                messageId: 'suggestSatisfies',
                                data: { type: 'number' },
                                fix: (0, util_1.getWrappingFixer)({
                                    ...wrappingFixerParams,
                                    wrap: expr => `${expr} satisfies number`,
                                }),
                            },
                        ],
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-unnecessary-type-conversion.js.map