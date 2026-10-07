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
    name: 'triple-slash-reference',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow certain triple slash directives in favor of ES6-style import declarations',
            recommended: 'error',
        },
        messages: {
            tripleSlashReference: 'Do not use a triple slash reference for {{module}}, use `import` style instead.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    lib: {
                        enum: ['always', 'never'],
                    },
                    path: {
                        enum: ['always', 'never'],
                    },
                    types: {
                        enum: ['always', 'never', 'prefer-import'],
                    },
                },
                additionalProperties: false,
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
        const sourceCode = context.getSourceCode();
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
            TSImportEqualsDeclaration(node) {
                if (programNode) {
                    const reference = node.moduleReference;
                    if (reference.type === utils_1.AST_NODE_TYPES.TSExternalModuleReference) {
                        hasMatchingReference(reference.expression);
                    }
                }
            },
            Program(node) {
                if (lib === 'always' && path === 'always' && types === 'always') {
                    return;
                }
                programNode = node;
                const referenceRegExp = /^\/\s*<reference\s*(types|path|lib)\s*=\s*["|'](.*)["|']/;
                const commentsBefore = sourceCode.getCommentsBefore(programNode);
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
        };
    },
});
//# sourceMappingURL=triple-slash-reference.js.map