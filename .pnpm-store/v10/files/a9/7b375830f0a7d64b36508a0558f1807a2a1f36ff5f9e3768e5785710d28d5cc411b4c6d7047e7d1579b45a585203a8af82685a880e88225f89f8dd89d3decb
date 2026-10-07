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
    name: 'no-implicit-any-catch',
    meta: {
        deprecated: true,
        type: 'suggestion',
        docs: {
            description: 'Disallow usage of the implicit `any` type in catch clauses',
            recommended: false,
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            implicitAnyInCatch: 'Implicit any in catch clause.',
            explicitAnyInCatch: 'Explicit any in catch clause.',
            suggestExplicitUnknown: 'Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowExplicitAny: {
                        description: 'Whether to disallow specifying `: any` as the error type as well. See also `no-explicit-any`.',
                        type: 'boolean',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowExplicitAny: false,
        },
    ],
    create(context, [{ allowExplicitAny }]) {
        return {
            CatchClause(node) {
                if (!node.param) {
                    return; // ignore catch without variable
                }
                if (!node.param.typeAnnotation) {
                    context.report({
                        node,
                        messageId: 'implicitAnyInCatch',
                        suggest: [
                            {
                                messageId: 'suggestExplicitUnknown',
                                fix(fixer) {
                                    return fixer.insertTextAfter(node.param, ': unknown');
                                },
                            },
                        ],
                    });
                }
                else if (!allowExplicitAny &&
                    node.param.typeAnnotation.typeAnnotation.type ===
                        utils_1.AST_NODE_TYPES.TSAnyKeyword) {
                    context.report({
                        node,
                        messageId: 'explicitAnyInCatch',
                        suggest: [
                            {
                                messageId: 'suggestExplicitUnknown',
                                fix(fixer) {
                                    return fixer.replaceText(node.param.typeAnnotation, ': unknown');
                                },
                            },
                        ],
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-implicit-any-catch.js.map