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
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-extra-non-null-assertion',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow extra non-null assertions',
            recommended: 'error',
        },
        fixable: 'code',
        schema: [],
        messages: {
            noExtraNonNullAssertion: 'Forbidden extra non-null assertion.',
        },
    },
    defaultOptions: [],
    create(context) {
        function checkExtraNonNullAssertion(node) {
            context.report({
                node,
                messageId: 'noExtraNonNullAssertion',
                fix(fixer) {
                    return fixer.removeRange([node.range[1] - 1, node.range[1]]);
                },
            });
        }
        return {
            'TSNonNullExpression > TSNonNullExpression': checkExtraNonNullAssertion,
            'MemberExpression[optional = true] > TSNonNullExpression.object': checkExtraNonNullAssertion,
            'CallExpression[optional = true] > TSNonNullExpression.callee': checkExtraNonNullAssertion,
        };
    },
});
//# sourceMappingURL=no-extra-non-null-assertion.js.map