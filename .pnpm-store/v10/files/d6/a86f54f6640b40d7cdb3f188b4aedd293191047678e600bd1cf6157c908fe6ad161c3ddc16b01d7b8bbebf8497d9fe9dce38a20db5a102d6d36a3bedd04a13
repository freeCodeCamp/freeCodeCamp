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
exports.default = util.createRule({
    name: 'prefer-readonly-parameter-types',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs',
            recommended: false,
            requiresTypeChecking: true,
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: Object.assign({ checkParameterProperties: {
                        type: 'boolean',
                    }, ignoreInferredTypes: {
                        type: 'boolean',
                    } }, util.readonlynessOptionsSchema.properties),
            },
        ],
        messages: {
            shouldBeReadonly: 'Parameter should be a read only type.',
        },
    },
    defaultOptions: [
        Object.assign({ checkParameterProperties: true, ignoreInferredTypes: false }, util.readonlynessOptionsDefaults),
    ],
    create(context, [{ checkParameterProperties, ignoreInferredTypes, treatMethodsAsReadonly }]) {
        const { esTreeNodeToTSNodeMap, program } = util.getParserServices(context);
        const checker = program.getTypeChecker();
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
                    const tsNode = esTreeNodeToTSNodeMap.get(actualParam);
                    const type = checker.getTypeAtLocation(tsNode);
                    const isReadOnly = util.isTypeReadonly(checker, type, {
                        treatMethodsAsReadonly: treatMethodsAsReadonly,
                    });
                    if (!isReadOnly) {
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