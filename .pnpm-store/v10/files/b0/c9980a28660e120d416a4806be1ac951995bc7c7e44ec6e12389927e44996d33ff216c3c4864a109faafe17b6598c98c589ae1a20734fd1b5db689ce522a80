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
    name: 'no-var-requires',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow `require` statements except in import statements',
            recommended: 'error',
        },
        messages: {
            noVarReqs: 'Require statement not part of import statement.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            'CallExpression[callee.name="require"]'(node) {
                var _a;
                const parent = ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ChainExpression
                    ? node.parent.parent
                    : node.parent;
                if (parent &&
                    [
                        utils_1.AST_NODE_TYPES.CallExpression,
                        utils_1.AST_NODE_TYPES.MemberExpression,
                        utils_1.AST_NODE_TYPES.NewExpression,
                        utils_1.AST_NODE_TYPES.TSAsExpression,
                        utils_1.AST_NODE_TYPES.TSTypeAssertion,
                        utils_1.AST_NODE_TYPES.VariableDeclarator,
                    ].includes(parent.type)) {
                    const variable = utils_1.ASTUtils.findVariable(context.getScope(), 'require');
                    if (!(variable === null || variable === void 0 ? void 0 : variable.identifiers.length)) {
                        context.report({
                            node,
                            messageId: 'noVarReqs',
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-var-requires.js.map