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
    name: 'prefer-ts-expect-error',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce using `@ts-expect-error` over `@ts-ignore`',
            recommended: 'strict',
        },
        fixable: 'code',
        messages: {
            preferExpectErrorComment: 'Use "@ts-expect-error" to ensure an error is actually being suppressed.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const tsIgnoreRegExpSingleLine = /^\s*\/?\s*@ts-ignore/;
        const tsIgnoreRegExpMultiLine = /^\s*(?:\/|\*)*\s*@ts-ignore/;
        const sourceCode = context.getSourceCode();
        function isLineComment(comment) {
            return comment.type === utils_1.AST_TOKEN_TYPES.Line;
        }
        function getLastCommentLine(comment) {
            if (isLineComment(comment)) {
                return comment.value;
            }
            // For multiline comments - we look at only the last line.
            const commentlines = comment.value.split('\n');
            return commentlines[commentlines.length - 1];
        }
        function isValidTsIgnorePresent(comment) {
            const line = getLastCommentLine(comment);
            return isLineComment(comment)
                ? tsIgnoreRegExpSingleLine.test(line)
                : tsIgnoreRegExpMultiLine.test(line);
        }
        return {
            Program() {
                const comments = sourceCode.getAllComments();
                comments.forEach(comment => {
                    if (isValidTsIgnorePresent(comment)) {
                        const lineCommentRuleFixer = (fixer) => fixer.replaceText(comment, `//${comment.value.replace('@ts-ignore', '@ts-expect-error')}`);
                        const blockCommentRuleFixer = (fixer) => fixer.replaceText(comment, `/*${comment.value.replace('@ts-ignore', '@ts-expect-error')}*/`);
                        context.report({
                            node: comment,
                            messageId: 'preferExpectErrorComment',
                            fix: isLineComment(comment)
                                ? lineCommentRuleFixer
                                : blockCommentRuleFixer,
                        });
                    }
                });
            },
        };
    },
});
//# sourceMappingURL=prefer-ts-expect-error.js.map