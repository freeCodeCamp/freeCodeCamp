"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-readonly-parameter-types',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs',
            requiresTypeChecking: true,
        },
        messages: {
            shouldBeReadonly: 'Parameter should be a read only type.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        ...util_1.readonlynessOptionsSchema.properties.allow,
                        description: 'An array of type specifiers to ignore.',
                    },
                    checkParameterProperties: {
                        type: 'boolean',
                        description: 'Whether to check class parameter properties.',
                    },
                    ignoreInferredTypes: {
                        type: 'boolean',
                        description: "Whether to ignore parameters which don't explicitly specify a type.",
                    },
                    treatMethodsAsReadonly: {
                        ...util_1.readonlynessOptionsSchema.properties.treatMethodsAsReadonly,
                        description: 'Whether to treat all mutable methods as though they are readonly.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allow: util_1.readonlynessOptionsDefaults.allow,
            checkParameterProperties: true,
            ignoreInferredTypes: false,
            treatMethodsAsReadonly: util_1.readonlynessOptionsDefaults.treatMethodsAsReadonly,
        },
    ],
    create(context, [{ allow, checkParameterProperties, ignoreInferredTypes, treatMethodsAsReadonly, },]) {
        const services = (0, util_1.getParserServices)(context);
        function getParameterType(actualParam) {
            if (actualParam.typeAnnotation?.typeAnnotation) {
                // Get type from annotation node to preserve aliasSymbol
                const checker = services.program.getTypeChecker();
                const tsTypeNode = services.esTreeNodeToTSNodeMap.get(actualParam.typeAnnotation.typeAnnotation);
                return checker.getTypeFromTypeNode(tsTypeNode);
            }
            return services.getTypeAtLocation(actualParam);
        }
        return {
            [[
                utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
                utils_1.AST_NODE_TYPES.FunctionDeclaration,
                utils_1.AST_NODE_TYPES.FunctionExpression,
                utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
                utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
                utils_1.AST_NODE_TYPES.TSDeclareFunction,
                utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
                utils_1.AST_NODE_TYPES.TSFunctionType,
                utils_1.AST_NODE_TYPES.TSMethodSignature,
            ].join(', ')](node) {
                for (const param of node.params) {
                    if (!checkParameterProperties &&
                        param.type === utils_1.AST_NODE_TYPES.TSParameterProperty) {
                        continue;
                    }
                    const actualParam = param.type === utils_1.AST_NODE_TYPES.TSParameterProperty
                        ? param.parameter
                        : param;
                    if (ignoreInferredTypes && actualParam.typeAnnotation == null) {
                        continue;
                    }
                    const type = getParameterType(actualParam);
                    const isReadOnly = (0, util_1.isTypeReadonly)(services.program, type, {
                        allow,
                        treatMethodsAsReadonly: !!treatMethodsAsReadonly,
                    });
                    if (!isReadOnly && !(0, util_1.isTypeBrandedLiteralLike)(type)) {
                        context.report({
                            node: actualParam,
                            messageId: 'shouldBeReadonly',
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=prefer-readonly-parameter-types.js.map