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
exports.defaultMinimumDescriptionLength = void 0;
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
exports.defaultMinimumDescriptionLength = 3;
exports.default = util.createRule({
    name: 'ban-ts-comment',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow `@ts-<directive>` comments or require descriptions after directives',
            recommended: 'error',
        },
        messages: {
            tsDirectiveComment: 'Do not use "@ts-{{directive}}" because it alters compilation errors.',
            tsDirectiveCommentRequiresDescription: 'Include a description after the "@ts-{{directive}}" directive to explain why the @ts-{{directive}} is necessary. The description must be {{minimumDescriptionLength}} characters or longer.',
            tsDirectiveCommentDescriptionNotMatchPattern: 'The description for the "@ts-{{directive}}" directive must match the {{format}} format.',
        },
        schema: {
            $defs: {
                directiveConfigSchema: {
                    oneOf: [
                        {
                            type: 'boolean',
                            default: true,
                        },
                        {
                            enum: ['allow-with-description'],
                        },
                        {
                            type: 'object',
                            properties: {
                                descriptionFormat: { type: 'string' },
                            },
                        },
                    ],
                },
            },
            prefixItems: [
                {
                    properties: {
                        'ts-expect-error': {
                            $ref: '#/$defs/directiveConfigSchema',
                        },
                        'ts-ignore': { $ref: '#/$defs/directiveConfigSchema' },
                        'ts-nocheck': { $ref: '#/$defs/directiveConfigSchema' },
                        'ts-check': { $ref: '#/$defs/directiveConfigSchema' },
                        minimumDescriptionLength: {
                            type: 'number',
                            default: exports.defaultMinimumDescriptionLength,
                        },
                    },
                    additionalProperties: false,
                },
            ],
            type: 'array',
        },
    },
    defaultOptions: [
        {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: exports.defaultMinimumDescriptionLength,
        },
    ],
    create(context, [options]) {
        /*
          The regex used are taken from the ones used in the official TypeScript repo -
          https://github.com/microsoft/TypeScript/blob/408c760fae66080104bc85c449282c2d207dfe8e/src/compiler/scanner.ts#L288-L296
        */
        const commentDirectiveRegExSingleLine = /^\/*\s*@ts-(?<directive>expect-error|ignore|check|nocheck)(?<description>.*)/;
        const commentDirectiveRegExMultiLine = /^\s*(?:\/|\*)*\s*@ts-(?<directive>expect-error|ignore|check|nocheck)(?<description>.*)/;
        const sourceCode = context.getSourceCode();
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
        return {
            Program() {
                const comments = sourceCode.getAllComments();
                comments.forEach(comment => {
                    const regExp = comment.type === utils_1.AST_TOKEN_TYPES.Line
                        ? commentDirectiveRegExSingleLine
                        : commentDirectiveRegExMultiLine;
                    const match = regExp.exec(comment.value);
                    if (!match) {
                        return;
                    }
                    const { directive, description } = match.groups;
                    const fullDirective = `ts-${directive}`;
                    const option = options[fullDirective];
                    if (option === true) {
                        context.report({
                            data: { directive },
                            node: comment,
                            messageId: 'tsDirectiveComment',
                        });
                    }
                    if (option === 'allow-with-description' ||
                        (typeof option === 'object' && option.descriptionFormat)) {
                        const { minimumDescriptionLength = exports.defaultMinimumDescriptionLength, } = options;
                        const format = descriptionFormats.get(fullDirective);
                        if (util.getStringLength(description.trim()) <
                            minimumDescriptionLength) {
                            context.report({
                                data: { directive, minimumDescriptionLength },
                                node: comment,
                                messageId: 'tsDirectiveCommentRequiresDescription',
                            });
                        }
                        else if (format && !format.test(description)) {
                            context.report({
                                data: { directive, format: format.source },
                                node: comment,
                                messageId: 'tsDirectiveCommentDescriptionNotMatchPattern',
                            });
                        }
                    }
                });
            },
        };
    },
});
//# sourceMappingURL=ban-ts-comment.js.map