"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'triple-slash-reference',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow certain triple slash directives in favor of ES6-style import declarations',
            recommended: 'recommended',
        },
        messages: {
            tripleSlashReference: 'Do not use a triple slash reference for {{module}}, use `import` style instead.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    lib: {
                        type: 'string',
                        description: 'What to enforce for `/// <reference lib="..." />` references.',
                        enum: ['always', 'never'],
                    },
                    path: {
                        type: 'string',
                        description: 'What to enforce for `/// <reference path="..." />` references.',
                        enum: ['always', 'never'],
                    },
                    types: {
                        type: 'string',
                        description: 'What to enforce for `/// <reference types="..." />` references.',
                        enum: ['always', 'never', 'prefer-import'],
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            lib: 'always',
            path: 'never',
            types: 'prefer-import',
        },
    ],
    create(context, [{ lib, path, types }]) {
        let programNode;
        const references = [];
        function hasMatchingReference(source) {
            references.forEach(reference => {
                if (reference.importName === source.value) {
                    context.report({
                        node: reference.comment,
                        messageId: 'tripleSlashReference',
                        data: {
                            module: reference.importName,
                        },
                    });
                }
            });
        }
        return {
            ImportDeclaration(node) {
                if (programNode) {
                    hasMatchingReference(node.source);
                }
            },
            Program(node) {
                if (lib === 'always' && path === 'always' && types === 'always') {
                    return;
                }
                programNode = node;
                const referenceRegExp = /^\/\s*<reference\s*(types|path|lib)\s*=\s*["|'](.*)["|']/;
                const commentsBefore = context.sourceCode.getCommentsBefore(programNode);
                commentsBefore.forEach(comment => {
                    if (comment.type !== utils_1.AST_TOKEN_TYPES.Line) {
                        return;
                    }
                    const referenceResult = referenceRegExp.exec(comment.value);
                    if (referenceResult) {
                        if ((referenceResult[1] === 'types' && types === 'never') ||
                            (referenceResult[1] === 'path' && path === 'never') ||
                            (referenceResult[1] === 'lib' && lib === 'never')) {
                            context.report({
                                node: comment,
                                messageId: 'tripleSlashReference',
                                data: {
                                    module: referenceResult[2],
                                },
                            });
                            return;
                        }
                        if (referenceResult[1] === 'types' && types === 'prefer-import') {
                            references.push({ comment, importName: referenceResult[2] });
                        }
                    }
                });
            },
            TSImportEqualsDeclaration(node) {
                if (programNode) {
                    const reference = node.moduleReference;
                    if (reference.type === utils_1.AST_NODE_TYPES.TSExternalModuleReference) {
                        hasMatchingReference(reference.expression);
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=triple-slash-reference.js.map