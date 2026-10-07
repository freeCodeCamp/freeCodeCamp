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
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('quotes');
exports.default = util.createRule({
    name: 'quotes',
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce the consistent use of either backticks, double, or single quotes',
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: 'code',
        hasSuggestions: baseRule.meta.hasSuggestions,
        // TODO: this rule has only had messages since v7.0 - remove this when we remove support for v6
        messages: (_a = baseRule.meta.messages) !== null && _a !== void 0 ? _a : {
            wrongQuotes: 'Strings must use {{description}}.',
        },
        schema: baseRule.meta.schema,
    },
    defaultOptions: [
        'double',
        {
            allowTemplateLiterals: false,
            avoidEscape: false,
        },
    ],
    create(context, [option]) {
        const rules = baseRule.create(context);
        function isAllowedAsNonBacktick(node) {
            const parent = node.parent;
            switch (parent === null || parent === void 0 ? void 0 : parent.type) {
                case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
                case utils_1.AST_NODE_TYPES.TSMethodSignature:
                case utils_1.AST_NODE_TYPES.TSPropertySignature:
                case utils_1.AST_NODE_TYPES.TSModuleDeclaration:
                case utils_1.AST_NODE_TYPES.TSLiteralType:
                case utils_1.AST_NODE_TYPES.TSExternalModuleReference:
                    return true;
                case utils_1.AST_NODE_TYPES.TSEnumMember:
                    return node === parent.id;
                case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition:
                case utils_1.AST_NODE_TYPES.PropertyDefinition:
                    return node === parent.key;
                default:
                    return false;
            }
        }
        return {
            Literal(node) {
                if (option === 'backtick' && isAllowedAsNonBacktick(node)) {
                    return;
                }
                rules.Literal(node);
            },
            TemplateLiteral(node) {
                rules.TemplateLiteral(node);
            },
        };
    },
});
//# sourceMappingURL=quotes.js.map