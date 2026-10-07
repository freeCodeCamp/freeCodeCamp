"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('brace-style');
exports.default = (0, util_1.createRule)({
    name: 'brace-style',
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce consistent brace style for blocks',
            recommended: false,
            extendsBaseRule: true,
        },
        messages: baseRule.meta.messages,
        fixable: baseRule.meta.fixable,
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
    },
    defaultOptions: ['1tbs'],
    create(context) {
        const [style, { allowSingleLine } = { allowSingleLine: false }] = 
        // eslint-disable-next-line no-restricted-syntax -- Use raw options for extended rules.
        context.options;
        const isAllmanStyle = style === 'allman';
        const sourceCode = context.getSourceCode();
        const rules = baseRule.create(context);
        /**
         * Checks a pair of curly brackets based on the user's config
         */
        function validateCurlyPair(openingCurlyToken, closingCurlyToken) {
            if (allowSingleLine &&
                (0, util_1.isTokenOnSameLine)(openingCurlyToken, closingCurlyToken)) {
                return;
            }
            const tokenBeforeOpeningCurly = sourceCode.getTokenBefore(openingCurlyToken);
            const tokenBeforeClosingCurly = sourceCode.getTokenBefore(closingCurlyToken);
            const tokenAfterOpeningCurly = sourceCode.getTokenAfter(openingCurlyToken);
            if (!isAllmanStyle &&
                !(0, util_1.isTokenOnSameLine)(tokenBeforeOpeningCurly, openingCurlyToken)) {
                context.report({
                    node: openingCurlyToken,
                    messageId: 'nextLineOpen',
                    fix: fixer => {
                        const textRange = [
                            tokenBeforeOpeningCurly.range[1],
                            openingCurlyToken.range[0],
                        ];
                        const textBetween = sourceCode.text.slice(textRange[0], textRange[1]);
                        if (textBetween.trim()) {
                            return null;
                        }
                        return fixer.replaceTextRange(textRange, ' ');
                    },
                });
            }
            if (isAllmanStyle &&
                (0, util_1.isTokenOnSameLine)(tokenBeforeOpeningCurly, openingCurlyToken)) {
                context.report({
                    node: openingCurlyToken,
                    messageId: 'sameLineOpen',
                    fix: fixer => fixer.insertTextBefore(openingCurlyToken, '\n'),
                });
            }
            if ((0, util_1.isTokenOnSameLine)(openingCurlyToken, tokenAfterOpeningCurly) &&
                tokenAfterOpeningCurly !== closingCurlyToken) {
                context.report({
                    node: openingCurlyToken,
                    messageId: 'blockSameLine',
                    fix: fixer => fixer.insertTextAfter(openingCurlyToken, '\n'),
                });
            }
            if ((0, util_1.isTokenOnSameLine)(tokenBeforeClosingCurly, closingCurlyToken) &&
                tokenBeforeClosingCurly !== openingCurlyToken) {
                context.report({
                    node: closingCurlyToken,
                    messageId: 'singleLineClose',
                    fix: fixer => fixer.insertTextBefore(closingCurlyToken, '\n'),
                });
            }
        }
        return Object.assign(Object.assign({}, rules), { 'TSInterfaceBody, TSModuleBlock'(node) {
                const openingCurly = sourceCode.getFirstToken(node);
                const closingCurly = sourceCode.getLastToken(node);
                validateCurlyPair(openingCurly, closingCurly);
            },
            TSEnumDeclaration(node) {
                const closingCurly = sourceCode.getLastToken(node);
                const openingCurly = sourceCode.getTokenBefore(node.members.length ? node.members[0] : closingCurly);
                validateCurlyPair(openingCurly, closingCurly);
            } });
    },
});
//# sourceMappingURL=brace-style.js.map