"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-ts-expect-error',
    meta: {
        type: 'problem',
        deprecated: {
            deprecatedSince: '7.11.0',
            replacedBy: [
                {
                    rule: {
                        name: '@typescript-eslint/ban-ts-comment',
                        url: 'https://typescript-eslint.io/rules/ban-ts-comment',
                    },
                },
            ],
            url: 'https://github.com/typescript-eslint/typescript-eslint/pull/9081',
        },
        docs: {
            description: 'Enforce using `@ts-expect-error` over `@ts-ignore`',
        },
        fixable: 'code',
        messages: {
            preferExpectErrorComment: 'Use "@ts-expect-error" to ensure an error is actually being suppressed.',
        },
        replacedBy: ['@typescript-eslint/ban-ts-comment'],
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const tsIgnoreRegExpSingleLine = /^\s*\/?\s*@ts-ignore/;
        const tsIgnoreRegExpMultiLine = /^\s*(?:\/|\*)*\s*@ts-ignore/;
        function isLineComment(comment) {
            return comment.type === utils_1.AST_TOKEN_TYPES.Line;
        }
        function getLastCommentLine(comment) {
            if (isLineComment(comment)) {
                return comment.value;
            }
            // For multiline comments - we look at only the last line.
            const commentlines = comment.value.split(utils_1.ASTUtils.LINEBREAK_MATCHER);
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
                const comments = context.sourceCode.getAllComments();
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