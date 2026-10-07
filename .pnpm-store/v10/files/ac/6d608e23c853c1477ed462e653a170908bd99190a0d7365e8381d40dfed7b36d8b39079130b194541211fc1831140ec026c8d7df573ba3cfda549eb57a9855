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
    name: 'no-array-constructor',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow generic `Array` constructors',
            recommended: 'error',
            extendsBaseRule: true,
        },
        fixable: 'code',
        messages: {
            useLiteral: 'The array literal notation [] is preferable.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        /**
         * Disallow construction of dense arrays using the Array constructor
         * @param node node to evaluate
         */
        function check(node) {
            if (node.arguments.length !== 1 &&
                node.callee.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.callee.name === 'Array' &&
                !node.typeParameters &&
                !util.isOptionalCallExpression(node)) {
                context.report({
                    node,
                    messageId: 'useLiteral',
                    fix(fixer) {
                        if (node.arguments.length === 0) {
                            return fixer.replaceText(node, '[]');
                        }
                        const fullText = context.getSourceCode().getText(node);
                        const preambleLength = node.callee.range[1] - node.range[0];
                        return fixer.replaceText(node, `[${fullText.slice(preambleLength + 1, -1)}]`);
                    },
                });
            }
        }
        return {
            CallExpression: check,
            NewExpression: check,
        };
    },
});
//# sourceMappingURL=no-array-constructor.js.map