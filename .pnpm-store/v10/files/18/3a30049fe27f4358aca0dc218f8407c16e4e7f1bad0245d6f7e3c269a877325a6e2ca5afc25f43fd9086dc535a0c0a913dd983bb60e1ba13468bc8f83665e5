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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('space-before-blocks');
exports.default = util.createRule({
    name: 'space-before-blocks',
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce consistent spacing before blocks',
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: baseRule.meta.fixable,
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        messages: Object.assign({ 
            // @ts-expect-error -- we report on this messageId so we need to ensure it's there in case ESLint changes in future
            unexpectedSpace: 'Unexpected space before opening brace.', 
            // @ts-expect-error -- we report on this messageId so we need to ensure it's there in case ESLint changes in future
            missingSpace: 'Missing space before opening brace.' }, baseRule.meta.messages),
    },
    defaultOptions: ['always'],
    create(context, [config]) {
        const rules = baseRule.create(context);
        const sourceCode = context.getSourceCode();
        let requireSpace = true;
        if (typeof config === 'object') {
            requireSpace = config.classes === 'always';
        }
        else if (config === 'never') {
            requireSpace = false;
        }
        function checkPrecedingSpace(node) {
            const precedingToken = sourceCode.getTokenBefore(node);
            if (precedingToken && util.isTokenOnSameLine(precedingToken, node)) {
                // eslint-disable-next-line deprecation/deprecation -- TODO - switch once our min ESLint version is 6.7.0
                const hasSpace = sourceCode.isSpaceBetweenTokens(precedingToken, node);
                if (requireSpace && !hasSpace) {
                    context.report({
                        node,
                        messageId: 'missingSpace',
                        fix(fixer) {
                            return fixer.insertTextBefore(node, ' ');
                        },
                    });
                }
                else if (!requireSpace && hasSpace) {
                    context.report({
                        node,
                        messageId: 'unexpectedSpace',
                        fix(fixer) {
                            return fixer.removeRange([
                                precedingToken.range[1],
                                node.range[0],
                            ]);
                        },
                    });
                }
            }
        }
        function checkSpaceAfterEnum(node) {
            const punctuator = sourceCode.getTokenAfter(node.id);
            if (punctuator) {
                checkPrecedingSpace(punctuator);
            }
        }
        return Object.assign(Object.assign({}, rules), { TSEnumDeclaration: checkSpaceAfterEnum, TSInterfaceBody: checkPrecedingSpace });
    },
});
//# sourceMappingURL=space-before-blocks.js.map