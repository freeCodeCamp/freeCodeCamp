"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const defaultMinimumDescriptionLength = 3;
exports.default = (0, util_1.createRule)({
    name: 'ban-ts-comment',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow `@ts-<directive>` comments or require descriptions after directives',
            recommended: {
                recommended: true,
                strict: [{ minimumDescriptionLength: 10 }],
            },
        },
        hasSuggestions: true,
        messages: {
            replaceTsIgnoreWithTsExpectError: 'Replace "@ts-ignore" with "@ts-expect-error".',
            tsDirectiveComment: 'Do not use "@ts-{{directive}}" because it alters compilation errors.',
            tsDirectiveCommentDescriptionNotMatchPattern: 'The description for the "@ts-{{directive}}" directive must match the {{format}} format.',
            tsDirectiveCommentRequiresDescription: 'Include a description after the "@ts-{{directive}}" directive to explain why the @ts-{{directive}} is necessary. The description must be {{minimumDescriptionLength}} characters or longer.',
            tsIgnoreInsteadOfExpectError: 'Use "@ts-expect-error" instead of "@ts-ignore", as "@ts-ignore" will do nothing if the following line is error-free.',
        },
        schema: [
            {
                type: 'object',
                $defs: {
                    directiveConfigSchema: {
                        oneOf: [
                            {
                                type: 'boolean',
                                default: true,
                            },
                            {
                                type: 'string',
                                enum: ['allow-with-description'],
                            },
                            {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                    descriptionFormat: { type: 'string' },
                                },
                            },
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    minimumDescriptionLength: {
                        type: 'number',
                        description: 'A minimum character length for descriptions when `allow-with-description` is enabled.',
                    },
                    'ts-check': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether to allow ts-check directives, and with which restrictions.',
                    },
                    'ts-expect-error': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether to allow ts-expect-error directives, and with which restrictions.',
                    },
                    'ts-ignore': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether to allow ts-ignore directives, and with which restrictions.',
                    },
                    'ts-nocheck': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether to allow ts-nocheck directives, and with which restrictions.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            minimumDescriptionLength: defaultMinimumDescriptionLength,
            'ts-check': false,
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
        },
    ],
    create(context, [options]) {
        // https://github.com/microsoft/TypeScript/blob/6f1ad5ad8bec5671f7e951a3524b62d82ec4be68/src/compiler/parser.ts#L10591
        const singleLinePragmaRegEx = /^\/\/\/?\s*@ts-(?<directive>check|nocheck)(?<description>.*)$/;
        /*
          The regex used are taken from the ones used in the official TypeScript repo -
          https://github.com/microsoft/TypeScript/blob/6f1ad5ad8bec5671f7e951a3524b62d82ec4be68/src/compiler/scanner.ts#L340-L348
        */
        const commentDirectiveRegExSingleLine = /^\/*\s*@ts-(?<directive>expect-error|ignore)(?<description>.*)/;
        const commentDirectiveRegExMultiLine = /^\s*(?:\/|\*)*\s*@ts-(?<directive>expect-error|ignore)(?<description>.*)/;
        const descriptionFormats = new Map();
        for (const directive of [
            'ts-expect-error',
            'ts-ignore',
            'ts-nocheck',
            'ts-check',
        ]) {
            const option = options[directive];
            if (typeof option === 'object' && option.descriptionFormat) {
                descriptionFormats.set(directive, new RegExp(option.descriptionFormat));
            }
        }
        function execDirectiveRegEx(regex, str) {
            const match = regex.exec(str);
            if (!match) {
                return null;
            }
            const { description, directive } = (0, util_1.nullThrows)(match.groups, 'RegExp should contain groups');
            return {
                description: (0, util_1.nullThrows)(description, 'RegExp should contain "description" group'),
                directive: (0, util_1.nullThrows)(directive, 'RegExp should contain "directive" group'),
            };
        }
        function findDirectiveInComment(comment) {
            if (comment.type === utils_1.AST_TOKEN_TYPES.Line) {
                const matchedPragma = execDirectiveRegEx(singleLinePragmaRegEx, `//${comment.value}`);
                if (matchedPragma) {
                    return matchedPragma;
                }
                return execDirectiveRegEx(commentDirectiveRegExSingleLine, comment.value);
            }
            const commentLines = comment.value.split(utils_1.ASTUtils.LINEBREAK_MATCHER);
            return execDirectiveRegEx(commentDirectiveRegExMultiLine, commentLines[commentLines.length - 1]);
        }
        return {
            Program(node) {
                const firstStatement = node.body.at(0);
                const comments = context.sourceCode.getAllComments();
                comments.forEach(comment => {
                    const match = findDirectiveInComment(comment);
                    if (!match) {
                        return;
                    }
                    const { description, directive } = match;
                    if (directive === 'nocheck' &&
                        firstStatement &&
                        firstStatement.loc.start.line <= comment.loc.start.line) {
                        return;
                    }
                    const fullDirective = `ts-${directive}`;
                    const option = options[fullDirective];
                    if (option === true) {
                        if (directive === 'ignore') {
                            // Special case to suggest @ts-expect-error instead of @ts-ignore
                            context.report({
                                node: comment,
                                messageId: 'tsIgnoreInsteadOfExpectError',
                                suggest: [
                                    {
                                        messageId: 'replaceTsIgnoreWithTsExpectError',
                                        fix(fixer) {
                                            const commentText = comment.value.replace(/@ts-ignore/, '@ts-expect-error');
                                            return fixer.replaceText(comment, comment.type === utils_1.AST_TOKEN_TYPES.Line
                                                ? `//${commentText}`
                                                : `/*${commentText}*/`);
                                        },
                                    },
                                ],
                            });
                        }
                        else {
                            context.report({
                                node: comment,
                                messageId: 'tsDirectiveComment',
                                data: { directive },
                            });
                        }
                    }
                    if (option === 'allow-with-description' ||
                        (typeof option === 'object' && option.descriptionFormat)) {
                        const { minimumDescriptionLength } = options;
                        const format = descriptionFormats.get(fullDirective);
                        if ((0, util_1.getStringLength)(description.trim()) <
                            (0, util_1.nullThrows)(minimumDescriptionLength, 'Expected minimumDescriptionLength to be set')) {
                            context.report({
                                node: comment,
                                messageId: 'tsDirectiveCommentRequiresDescription',
                                data: { directive, minimumDescriptionLength },
                            });
                        }
                        else if (format && !format.test(description)) {
                            context.report({
                                node: comment,
                                messageId: 'tsDirectiveCommentDescriptionNotMatchPattern',
                                data: { directive, format: format.source },
                            });
                        }
                    }
                });
            },
        };
    },
});
//# sourceMappingURL=ban-ts-comment.js.map