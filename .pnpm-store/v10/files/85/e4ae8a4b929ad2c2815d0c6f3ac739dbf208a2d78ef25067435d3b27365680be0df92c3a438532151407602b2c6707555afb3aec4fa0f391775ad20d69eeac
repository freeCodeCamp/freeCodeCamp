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
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'restrict-plus-operands',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require both operands of addition to be the same type and be `bigint`, `number`, or `string`',
            recommended: {
                recommended: true,
                strict: [
                    {
                        allowAny: false,
                        allowBoolean: false,
                        allowNullish: false,
                        allowNumberAndString: false,
                        allowRegExp: false,
                    },
                ],
            },
            requiresTypeChecking: true,
        },
        messages: {
            bigintAndNumber: "Numeric '+' operations must either be both bigints or both numbers. Got `{{left}}` + `{{right}}`.",
            invalid: "Invalid operand for a '+' operation. Operands must each be a number or {{stringLike}}. Got `{{type}}`.",
            mismatched: "Operands of '+' operations must be a number or {{stringLike}}. Got `{{left}}` + `{{right}}`.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowAny: {
                        type: 'boolean',
                        description: 'Whether to allow `any` typed values.',
                    },
                    allowBoolean: {
                        type: 'boolean',
                        description: 'Whether to allow `boolean` typed values.',
                    },
                    allowNullish: {
                        type: 'boolean',
                        description: 'Whether to allow potentially `null` or `undefined` typed values.',
                    },
                    allowNumberAndString: {
                        type: 'boolean',
                        description: 'Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.',
                    },
                    allowRegExp: {
                        type: 'boolean',
                        description: 'Whether to allow `regexp` typed values.',
                    },
                    skipCompoundAssignments: {
                        type: 'boolean',
                        description: 'Whether to skip compound assignments such as `+=`.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowAny: true,
            allowBoolean: true,
            allowNullish: true,
            allowNumberAndString: true,
            allowRegExp: true,
            skipCompoundAssignments: false,
        },
    ],
    create(context, [{ allowAny, allowBoolean, allowNullish, allowNumberAndString, allowRegExp, skipCompoundAssignments, },]) {
        const services = (0, util_1.getParserServices)(context);
        const typeChecker = services.program.getTypeChecker();
        const stringLikes = [
            allowAny && '`any`',
            allowBoolean && '`boolean`',
            allowNullish && '`null`',
            allowRegExp && '`RegExp`',
            allowNullish && '`undefined`',
        ].filter((value) => typeof value === 'string');
        const stringLike = stringLikes.length
            ? stringLikes.length === 1
                ? `string, allowing a string + ${stringLikes[0]}`
                : `string, allowing a string + any of: ${stringLikes.join(', ')}`
            : 'string';
        function getTypeConstrained(node) {
            return typeChecker.getBaseTypeOfLiteralType((0, util_1.getConstrainedTypeAtLocation)(services, node));
        }
        function checkPlusOperands(node) {
            const leftType = getTypeConstrained(node.left);
            const rightType = getTypeConstrained(node.right);
            if (leftType === rightType &&
                tsutils.isTypeFlagSet(leftType, ts.TypeFlags.BigIntLike |
                    ts.TypeFlags.NumberLike |
                    ts.TypeFlags.StringLike)) {
                return;
            }
            let hadIndividualComplaint = false;
            for (const [baseNode, baseType, otherType] of [
                [node.left, leftType, rightType],
                [node.right, rightType, leftType],
            ]) {
                if (isTypeFlagSetInUnion(baseType, ts.TypeFlags.ESSymbolLike |
                    ts.TypeFlags.Never |
                    ts.TypeFlags.Unknown) ||
                    (!allowAny && isTypeFlagSetInUnion(baseType, ts.TypeFlags.Any)) ||
                    (!allowBoolean &&
                        isTypeFlagSetInUnion(baseType, ts.TypeFlags.BooleanLike)) ||
                    (!allowNullish &&
                        (0, util_1.isTypeFlagSet)(baseType, ts.TypeFlags.Null | ts.TypeFlags.Undefined))) {
                    context.report({
                        node: baseNode,
                        messageId: 'invalid',
                        data: {
                            type: typeChecker.typeToString(baseType),
                            stringLike,
                        },
                    });
                    hadIndividualComplaint = true;
                    continue;
                }
                // RegExps also contain ts.TypeFlags.Any & ts.TypeFlags.Object
                for (const subBaseType of tsutils.unionConstituents(baseType)) {
                    const typeName = (0, util_1.getTypeName)(typeChecker, subBaseType);
                    if (typeName === 'RegExp'
                        ? !allowRegExp ||
                            tsutils.isTypeFlagSet(otherType, ts.TypeFlags.NumberLike)
                        : (!allowAny && (0, util_1.isTypeAnyType)(subBaseType)) ||
                            isDeeplyObjectType(subBaseType)) {
                        context.report({
                            node: baseNode,
                            messageId: 'invalid',
                            data: {
                                type: typeChecker.typeToString(subBaseType),
                                stringLike,
                            },
                        });
                        hadIndividualComplaint = true;
                        continue;
                    }
                }
            }
            if (hadIndividualComplaint) {
                return;
            }
            for (const [baseType, otherType] of [
                [leftType, rightType],
                [rightType, leftType],
            ]) {
                if (!allowNumberAndString &&
                    isTypeFlagSetInUnion(baseType, ts.TypeFlags.StringLike) &&
                    isTypeFlagSetInUnion(otherType, ts.TypeFlags.NumberLike | ts.TypeFlags.BigIntLike)) {
                    return context.report({
                        node,
                        messageId: 'mismatched',
                        data: {
                            left: typeChecker.typeToString(leftType),
                            right: typeChecker.typeToString(rightType),
                            stringLike,
                        },
                    });
                }
                if (isTypeFlagSetInUnion(baseType, ts.TypeFlags.NumberLike) &&
                    isTypeFlagSetInUnion(otherType, ts.TypeFlags.BigIntLike)) {
                    return context.report({
                        node,
                        messageId: 'bigintAndNumber',
                        data: {
                            left: typeChecker.typeToString(leftType),
                            right: typeChecker.typeToString(rightType),
                        },
                    });
                }
            }
        }
        return {
            "BinaryExpression[operator='+']": checkPlusOperands,
            ...(!skipCompoundAssignments && {
                "AssignmentExpression[operator='+=']"(node) {
                    checkPlusOperands(node);
                },
            }),
        };
    },
});
function isDeeplyObjectType(type) {
    return type.isIntersection()
        ? tsutils.intersectionConstituents(type).every(tsutils.isObjectType)
        : tsutils.unionConstituents(type).every(tsutils.isObjectType);
}
function isTypeFlagSetInUnion(type, flag) {
    return tsutils
        .unionConstituents(type)
        .some(subType => tsutils.isTypeFlagSet(subType, flag));
}
//# sourceMappingURL=restrict-plus-operands.js.map