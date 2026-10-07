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
    name: 'no-non-null-assertion',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow non-null assertions using the `!` postfix operator',
            recommended: 'warn',
        },
        hasSuggestions: true,
        messages: {
            noNonNull: 'Forbidden non-null assertion.',
            suggestOptionalChain: 'Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const sourceCode = context.getSourceCode();
        return {
            TSNonNullExpression(node) {
                var _a, _b;
                const suggest = [];
                function convertTokenToOptional(replacement) {
                    return (fixer) => {
                        const operator = sourceCode.getTokenAfter(node.expression, util.isNonNullAssertionPunctuator);
                        if (operator) {
                            return fixer.replaceText(operator, replacement);
                        }
                        return null;
                    };
                }
                function removeToken() {
                    return (fixer) => {
                        const operator = sourceCode.getTokenAfter(node.expression, util.isNonNullAssertionPunctuator);
                        if (operator) {
                            return fixer.remove(operator);
                        }
                        return null;
                    };
                }
                if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.MemberExpression &&
                    node.parent.object === node) {
                    if (!node.parent.optional) {
                        if (node.parent.computed) {
                            // it is x![y]?.z
                            suggest.push({
                                messageId: 'suggestOptionalChain',
                                fix: convertTokenToOptional('?.'),
                            });
                        }
                        else {
                            // it is x!.y?.z
                            suggest.push({
                                messageId: 'suggestOptionalChain',
                                fix: convertTokenToOptional('?'),
                            });
                        }
                    }
                    else {
                        if (node.parent.computed) {
                            // it is x!?.[y].z
                            suggest.push({
                                messageId: 'suggestOptionalChain',
                                fix: removeToken(),
                            });
                        }
                        else {
                            // it is x!?.y.z
                            suggest.push({
                                messageId: 'suggestOptionalChain',
                                fix: removeToken(),
                            });
                        }
                    }
                }
                else if (((_b = node.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.CallExpression &&
                    node.parent.callee === node) {
                    if (!node.parent.optional) {
                        // it is x.y?.z!()
                        suggest.push({
                            messageId: 'suggestOptionalChain',
                            fix: convertTokenToOptional('?.'),
                        });
                    }
                    else {
                        // it is x.y.z!?.()
                        suggest.push({
                            messageId: 'suggestOptionalChain',
                            fix: removeToken(),
                        });
                    }
                }
                context.report({
                    node,
                    messageId: 'noNonNull',
                    suggest,
                });
            },
        };
    },
});
//# sourceMappingURL=no-non-null-assertion.js.map