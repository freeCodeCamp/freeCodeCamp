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
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('semi');
exports.default = util.createRule({
    name: 'semi',
    meta: {
        type: 'layout',
        docs: {
            description: 'Require or disallow semicolons instead of ASI',
            // too opinionated to be recommended
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: 'code',
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        // TODO: this rule has only had messages since v7.0 - remove this when we remove support for v6
        messages: (_a = baseRule.meta.messages) !== null && _a !== void 0 ? _a : {
            missingSemi: 'Missing semicolon.',
            extraSemi: 'Extra semicolon.',
        },
    },
    defaultOptions: [
        'always',
        {
            omitLastInOneLineBlock: false,
            beforeStatementContinuationChars: 'any',
        },
    ],
    create(context) {
        const rules = baseRule.create(context);
        const checkForSemicolon = rules.ExpressionStatement;
        /*
          The following nodes are handled by the member-delimiter-style rule
          AST_NODE_TYPES.TSCallSignatureDeclaration,
          AST_NODE_TYPES.TSConstructSignatureDeclaration,
          AST_NODE_TYPES.TSIndexSignature,
          AST_NODE_TYPES.TSMethodSignature,
          AST_NODE_TYPES.TSPropertySignature,
        */
        const nodesToCheck = [
            utils_1.AST_NODE_TYPES.PropertyDefinition,
            utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition,
            utils_1.AST_NODE_TYPES.TSDeclareFunction,
            utils_1.AST_NODE_TYPES.TSExportAssignment,
            utils_1.AST_NODE_TYPES.TSImportEqualsDeclaration,
            utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration,
            utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
        ].reduce((acc, node) => {
            acc[node] = checkForSemicolon;
            return acc;
        }, {});
        return Object.assign(Object.assign(Object.assign({}, rules), nodesToCheck), { ExportDefaultDeclaration(node) {
                if (node.declaration.type !== utils_1.AST_NODE_TYPES.TSInterfaceDeclaration) {
                    rules.ExportDefaultDeclaration(node);
                }
            } });
    },
});
//# sourceMappingURL=semi.js.map