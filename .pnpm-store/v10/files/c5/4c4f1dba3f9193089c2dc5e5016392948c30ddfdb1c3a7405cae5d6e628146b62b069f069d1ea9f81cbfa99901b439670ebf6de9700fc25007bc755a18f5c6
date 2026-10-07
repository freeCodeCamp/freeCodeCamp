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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-unused-expressions');
exports.default = util.createRule({
    name: 'no-unused-expressions',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow unused expressions',
            recommended: false,
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        // TODO: this rule has only had messages since v7.0 - remove this when we remove support for v6
        messages: (_a = baseRule.meta.messages) !== null && _a !== void 0 ? _a : {
            unusedExpression: 'Expected an assignment or function call and instead saw an expression.',
        },
    },
    defaultOptions: [
        {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        },
    ],
    create(context, [{ allowShortCircuit = false, allowTernary = false }]) {
        const rules = baseRule.create(context);
        function isValidExpression(node) {
            if (allowShortCircuit && node.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
                return isValidExpression(node.right);
            }
            if (allowTernary && node.type === utils_1.AST_NODE_TYPES.ConditionalExpression) {
                return (isValidExpression(node.alternate) &&
                    isValidExpression(node.consequent));
            }
            return ((node.type === utils_1.AST_NODE_TYPES.ChainExpression &&
                node.expression.type === utils_1.AST_NODE_TYPES.CallExpression) ||
                node.type === utils_1.AST_NODE_TYPES.ImportExpression);
        }
        return {
            ExpressionStatement(node) {
                if (node.directive || isValidExpression(node.expression)) {
                    return;
                }
                rules.ExpressionStatement(node);
            },
        };
    },
});
//# sourceMappingURL=no-unused-expressions.js.map