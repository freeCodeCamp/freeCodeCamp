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
exports.default = (0, util_1.createRule)({
    name: 'no-meaningless-void-operator',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the `void` operator except when used to discard a value',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            meaninglessVoidOnNonCall: "void operator is useless here; it should only discard a call's return value",
            meaninglessVoidOperator: "void operator shouldn't be used on {{type}}; it should convey that a return value is being ignored",
            removeVoid: "Remove 'void'",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkNever: {
                        type: 'boolean',
                        description: "Whether to suggest removing `void` when a call's return type is `never`.",
                    },
                },
            },
        ],
    },
    defaultOptions: [{ checkNever: false }],
    create(context, [{ checkNever }]) {
        const services = utils_1.ESLintUtils.getParserServices(context);
        const checker = services.program.getTypeChecker();
        return {
            'UnaryExpression[operator="void"]'(node) {
                const fix = (fixer) => {
                    return fixer.removeRange([
                        context.sourceCode.getTokens(node)[0].range[0],
                        context.sourceCode.getTokens(node)[1].range[0],
                    ]);
                };
                const inner = unwrapVoidArgument(node.argument);
                if (inner.type !== utils_1.AST_NODE_TYPES.CallExpression) {
                    // `void 0` is a common undefined idiom, not a discarded call.
                    if (inner.type === utils_1.AST_NODE_TYPES.Literal && inner.value === 0) {
                        return;
                    }
                    // `void (x = value)` discards the assignment result so the
                    // expression evaluates to undefined (e.g. `() => void (x = 1)`).
                    if (inner.type === utils_1.AST_NODE_TYPES.AssignmentExpression) {
                        return;
                    }
                    const tsArgument = services.esTreeNodeToTSNodeMap.get(node.argument);
                    const argType = services.getTypeAtLocation(node.argument);
                    // Allow `void promiseValue` so this rule does not fight no-floating-promises.
                    if (tsutils.isThenableType(checker, tsArgument, argType)) {
                        return;
                    }
                    context.report({
                        node,
                        messageId: 'meaninglessVoidOnNonCall',
                        fix: node.parent.type === utils_1.AST_NODE_TYPES.ExpressionStatement
                            ? fix
                            : undefined,
                    });
                    return;
                }
                const argType = services.getTypeAtLocation(node.argument);
                const unionParts = tsutils.unionConstituents(argType);
                if (unionParts.every(part => tsutils.isTypeFlagSet(part, ts.TypeFlags.Void | ts.TypeFlags.Undefined))) {
                    context.report({
                        node,
                        messageId: 'meaninglessVoidOperator',
                        data: { type: checker.typeToString(argType) },
                        fix,
                    });
                }
                else if (checkNever &&
                    unionParts.every(part => tsutils.isTypeFlagSet(part, ts.TypeFlags.Void | ts.TypeFlags.Undefined | ts.TypeFlags.Never))) {
                    context.report({
                        node,
                        messageId: 'meaninglessVoidOperator',
                        data: { type: checker.typeToString(argType) },
                        suggest: [{ messageId: 'removeVoid', fix }],
                    });
                }
            },
        };
    },
});
function unwrapVoidArgument(node) {
    let current = node;
    while (true) {
        switch (current.type) {
            case utils_1.AST_NODE_TYPES.ChainExpression:
            case utils_1.AST_NODE_TYPES.TSAsExpression:
            case utils_1.AST_NODE_TYPES.TSNonNullExpression:
            case utils_1.AST_NODE_TYPES.TSSatisfiesExpression:
            case utils_1.AST_NODE_TYPES.TSTypeAssertion:
                current = current.expression;
                continue;
            case utils_1.AST_NODE_TYPES.SequenceExpression:
                current = (0, util_1.nullThrows)(current.expressions.at(-1), 'Expected SequenceExpression to have at least one expression');
                continue;
            default:
                return current;
        }
    }
}
//# sourceMappingURL=no-meaningless-void-operator.js.map