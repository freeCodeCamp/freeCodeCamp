"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'comma-spacing',
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce consistent spacing before and after commas',
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    before: {
                        type: 'boolean',
                        default: false,
                    },
                    after: {
                        type: 'boolean',
                        default: true,
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            unexpected: `There should be no space {{loc}} ','.`,
            missing: `A space is required {{loc}} ','.`,
        },
    },
    defaultOptions: [
        {
            before: false,
            after: true,
        },
    ],
    create(context, [{ before: spaceBefore, after: spaceAfter }]) {
        const sourceCode = context.getSourceCode();
        const tokensAndComments = sourceCode.tokensAndComments;
        const ignoredTokens = new Set();
        /**
         * Adds null elements of the ArrayExpression or ArrayPattern node to the ignore list
         * @param node node to evaluate
         */
        function addNullElementsToIgnoreList(node) {
            let previousToken = sourceCode.getFirstToken(node);
            for (const element of node.elements) {
                let token;
                if (element == null) {
                    token = sourceCode.getTokenAfter(previousToken);
                    if (token && (0, util_1.isCommaToken)(token)) {
                        ignoredTokens.add(token);
                    }
                }
                else {
                    token = sourceCode.getTokenAfter(element);
                }
                previousToken = token;
            }
        }
        /**
         * Adds type parameters trailing comma token to the ignore list
         * @param node node to evaluate
         */
        function addTypeParametersTrailingCommaToIgnoreList(node) {
            const paramLength = node.params.length;
            if (paramLength) {
                const param = node.params[paramLength - 1];
                const afterToken = sourceCode.getTokenAfter(param);
                if (afterToken && (0, util_1.isCommaToken)(afterToken)) {
                    ignoredTokens.add(afterToken);
                }
            }
        }
        /**
         * Validates the spacing around a comma token.
         * @param commaToken The token representing the comma
         * @param prevToken The last token before the comma
         * @param nextToken The first token after the comma
         */
        function validateCommaSpacing(commaToken, prevToken, nextToken) {
            if (prevToken &&
                (0, util_1.isTokenOnSameLine)(prevToken, commaToken) &&
                // eslint-disable-next-line deprecation/deprecation -- TODO - switch once our min ESLint version is 6.7.0
                spaceBefore !== sourceCode.isSpaceBetweenTokens(prevToken, commaToken)) {
                context.report({
                    node: commaToken,
                    data: {
                        loc: 'before',
                    },
                    messageId: spaceBefore ? 'missing' : 'unexpected',
                    fix: fixer => spaceBefore
                        ? fixer.insertTextBefore(commaToken, ' ')
                        : fixer.replaceTextRange([prevToken.range[1], commaToken.range[0]], ''),
                });
            }
            if (nextToken && (0, util_1.isClosingParenToken)(nextToken)) {
                return;
            }
            if (spaceAfter &&
                nextToken &&
                ((0, util_1.isClosingBraceToken)(nextToken) || (0, util_1.isClosingBracketToken)(nextToken))) {
                return;
            }
            if (!spaceAfter && nextToken && nextToken.type === utils_1.AST_TOKEN_TYPES.Line) {
                return;
            }
            if (nextToken &&
                (0, util_1.isTokenOnSameLine)(commaToken, nextToken) &&
                // eslint-disable-next-line deprecation/deprecation -- TODO - switch once our min ESLint version is 6.7.0
                spaceAfter !== sourceCode.isSpaceBetweenTokens(commaToken, nextToken)) {
                context.report({
                    node: commaToken,
                    data: {
                        loc: 'after',
                    },
                    messageId: spaceAfter ? 'missing' : 'unexpected',
                    fix: fixer => spaceAfter
                        ? fixer.insertTextAfter(commaToken, ' ')
                        : fixer.replaceTextRange([commaToken.range[1], nextToken.range[0]], ''),
                });
            }
        }
        return {
            TSTypeParameterDeclaration: addTypeParametersTrailingCommaToIgnoreList,
            ArrayExpression: addNullElementsToIgnoreList,
            ArrayPattern: addNullElementsToIgnoreList,
            'Program:exit'() {
                tokensAndComments.forEach((token, i) => {
                    if (!(0, util_1.isCommaToken)(token)) {
                        return;
                    }
                    const prevToken = tokensAndComments[i - 1];
                    const nextToken = tokensAndComments[i + 1];
                    validateCommaSpacing(token, (0, util_1.isCommaToken)(prevToken) || ignoredTokens.has(token)
                        ? null
                        : prevToken, (nextToken && (0, util_1.isCommaToken)(nextToken)) || ignoredTokens.has(token)
                        ? null
                        : nextToken);
                });
            },
        };
    },
});
//# sourceMappingURL=comma-spacing.js.map