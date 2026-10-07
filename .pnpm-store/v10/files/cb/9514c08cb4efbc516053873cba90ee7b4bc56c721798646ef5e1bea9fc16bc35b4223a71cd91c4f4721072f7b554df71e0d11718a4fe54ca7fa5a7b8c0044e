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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('block-spacing');
exports.default = util.createRule({
    name: 'block-spacing',
    meta: {
        type: 'layout',
        docs: {
            description: 'Disallow or enforce spaces inside of blocks after opening block and before closing block',
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: 'whitespace',
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        messages: baseRule.meta.messages,
    },
    defaultOptions: ['always'],
    create(context, [whenToApplyOption]) {
        const sourceCode = context.getSourceCode();
        const baseRules = baseRule.create(context);
        const always = whenToApplyOption !== 'never';
        const messageId = always ? 'missing' : 'extra';
        /**
         * Gets the open brace token from a given node.
         * @returns The token of the open brace.
         */
        function getOpenBrace(node) {
            // guaranteed for enums
            // This is the only change made here from the base rule
            return sourceCode.getFirstToken(node, {
                filter: token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator && token.value === '{',
            });
        }
        /**
         * Checks whether or not:
         *   - given tokens are on same line.
         *   - there is/isn't a space between given tokens.
         * @param left A token to check.
         * @param right The token which is next to `left`.
         * @returns
         *    When the option is `"always"`, `true` if there are one or more spaces between given tokens.
         *    When the option is `"never"`, `true` if there are not any spaces between given tokens.
         *    If given tokens are not on same line, it's always `true`.
         */
        function isValid(left, right) {
            return (!util.isTokenOnSameLine(left, right) ||
                sourceCode.isSpaceBetween(left, right) === always);
        }
        /**
         * Checks and reports invalid spacing style inside braces.
         */
        function checkSpacingInsideBraces(node) {
            // Gets braces and the first/last token of content.
            const openBrace = getOpenBrace(node);
            const closeBrace = sourceCode.getLastToken(node);
            const firstToken = sourceCode.getTokenAfter(openBrace, {
                includeComments: true,
            });
            const lastToken = sourceCode.getTokenBefore(closeBrace, {
                includeComments: true,
            });
            // Skip if the node is invalid or empty.
            if (openBrace.type !== utils_1.AST_TOKEN_TYPES.Punctuator ||
                openBrace.value !== '{' ||
                closeBrace.type !== utils_1.AST_TOKEN_TYPES.Punctuator ||
                closeBrace.value !== '}' ||
                firstToken === closeBrace) {
                return;
            }
            // Skip line comments for option never
            if (!always && firstToken.type === utils_1.AST_TOKEN_TYPES.Line) {
                return;
            }
            if (!isValid(openBrace, firstToken)) {
                let loc = openBrace.loc;
                if (messageId === 'extra') {
                    loc = {
                        start: openBrace.loc.end,
                        end: firstToken.loc.start,
                    };
                }
                context.report({
                    node,
                    loc,
                    messageId,
                    data: {
                        location: 'after',
                        token: openBrace.value,
                    },
                    fix(fixer) {
                        if (always) {
                            return fixer.insertTextBefore(firstToken, ' ');
                        }
                        return fixer.removeRange([openBrace.range[1], firstToken.range[0]]);
                    },
                });
            }
            if (!isValid(lastToken, closeBrace)) {
                let loc = closeBrace.loc;
                if (messageId === 'extra') {
                    loc = {
                        start: lastToken.loc.end,
                        end: closeBrace.loc.start,
                    };
                }
                context.report({
                    node,
                    loc,
                    messageId,
                    data: {
                        location: 'before',
                        token: closeBrace.value,
                    },
                    fix(fixer) {
                        if (always) {
                            return fixer.insertTextAfter(lastToken, ' ');
                        }
                        return fixer.removeRange([lastToken.range[1], closeBrace.range[0]]);
                    },
                });
            }
        }
        return Object.assign(Object.assign({}, baseRules), { 
            // This code worked "out of the box" for interface and type literal
            // Enums were very close to match as well, the only reason they are not is that was that enums don't have a body node in the parser
            // So the opening brace punctuator starts in the middle of the node - `getFirstToken` in
            // the base rule did not filter for the first opening brace punctuator
            TSInterfaceBody: baseRules.BlockStatement, TSTypeLiteral: baseRules.BlockStatement, TSEnumDeclaration: checkSpacingInsideBraces });
    },
});
//# sourceMappingURL=block-spacing.js.map