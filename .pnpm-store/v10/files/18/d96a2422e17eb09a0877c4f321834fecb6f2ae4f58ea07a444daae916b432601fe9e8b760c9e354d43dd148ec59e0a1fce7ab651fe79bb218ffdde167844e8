"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_utils_1 = require("@typescript-eslint/type-utils");
const utils_1 = require("@typescript-eslint/utils");
const typescript_1 = require("typescript");
const util_1 = require("../util");
const testTypeFlag = (flagsToCheck) => type => (0, util_1.isTypeFlagSet)(type, flagsToCheck);
const optionTesters = [
    ['Any', util_1.isTypeAnyType],
    [
        'Array',
        (type, checker, recursivelyCheckType) => (checker.isArrayType(type) || checker.isTupleType(type)) &&
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            recursivelyCheckType(type.getNumberIndexType()),
    ],
    // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
    ['Boolean', testTypeFlag(typescript_1.TypeFlags.BooleanLike)],
    ['Nullish', testTypeFlag(typescript_1.TypeFlags.Null | typescript_1.TypeFlags.Undefined)],
    ['Number', testTypeFlag(typescript_1.TypeFlags.NumberLike | typescript_1.TypeFlags.BigIntLike)],
    [
        'RegExp',
        (type, checker) => (0, util_1.getTypeName)(checker, type) === 'RegExp',
    ],
    ['Never', util_1.isTypeNeverType],
].map(([type, tester]) => ({
    type,
    option: `allow${type}`,
    tester,
}));
exports.default = (0, util_1.createRule)({
    name: 'restrict-template-expressions',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce template literal expressions to be of `string` type',
            recommended: {
                recommended: true,
                strict: [
                    {
                        allowAny: false,
                        allowBoolean: false,
                        allowNever: false,
                        allowNullish: false,
                        allowNumber: false,
                        allowRegExp: false,
                    },
                ],
            },
            requiresTypeChecking: true,
        },
        messages: {
            invalidType: 'Invalid type "{{type}}" of template literal expression.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ...Object.fromEntries(optionTesters.map(({ type, option }) => [
                        option,
                        {
                            type: 'boolean',
                            description: `Whether to allow \`${type.toLowerCase()}\` typed values in template expressions.`,
                        },
                    ])),
                    allow: {
                        description: `Types to allow in template expressions.`,
                        ...type_utils_1.typeOrValueSpecifiersSchema,
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allow: [{ name: ['Error', 'URL', 'URLSearchParams'], from: 'lib' }],
            allowAny: true,
            allowBoolean: true,
            allowNullish: true,
            allowNumber: true,
            allowRegExp: true,
        },
    ],
    create(context, [{ allow, ...options }]) {
        const services = (0, util_1.getParserServices)(context);
        const { program } = services;
        const checker = program.getTypeChecker();
        const enabledOptionTesters = optionTesters.filter(({ option }) => options[option]);
        return {
            TemplateLiteral(node) {
                // don't check tagged template literals
                if (node.parent.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression) {
                    return;
                }
                for (const expression of node.expressions) {
                    const expressionType = (0, util_1.getConstrainedTypeAtLocation)(services, expression);
                    if (!recursivelyCheckType(expressionType)) {
                        context.report({
                            node: expression,
                            messageId: 'invalidType',
                            data: { type: checker.typeToString(expressionType) },
                        });
                    }
                }
            },
        };
        function recursivelyCheckType(innerType) {
            if (innerType.isUnion()) {
                return innerType.types.every(recursivelyCheckType);
            }
            if (innerType.isIntersection()) {
                return innerType.types.some(recursivelyCheckType);
            }
            return ((0, util_1.isTypeFlagSet)(innerType, typescript_1.TypeFlags.StringLike) ||
                (0, util_1.matchesTypeOrBaseType)(services, type => (0, type_utils_1.typeMatchesSomeSpecifier)(type, allow, program), innerType) ||
                enabledOptionTesters.some(({ tester }) => tester(innerType, checker, recursivelyCheckType)));
        }
    },
});
//# sourceMappingURL=restrict-template-expressions.js.map