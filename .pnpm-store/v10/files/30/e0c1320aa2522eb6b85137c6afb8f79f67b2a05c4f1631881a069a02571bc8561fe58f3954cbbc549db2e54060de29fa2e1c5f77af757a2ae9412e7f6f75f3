"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendedVue = exports.recommendedReact = exports.recommended = void 0;
exports.recommended = {
    plugins: ['filenames-simple'],
    rules: {
        'filenames-simple/extension': 'error',
        'filenames-simple/named-export': ['warn', 'singular'],
        'filenames-simple/naming-convention': 'error',
        'filenames-simple/no-index': 'off',
        'filenames-simple/pluralize': 'off',
        'filenames-simple/typescript-module-declaration': 'error',
    },
};
exports.recommendedReact = {
    ...exports.recommended,
    overrides: [
        {
            files: ['*.jsx', '*.tsx'],
            rules: {
                'filenames-simple/naming-convention': ['error', { rule: 'PascalCase' }],
            },
        },
    ],
};
exports.recommendedVue = {
    ...exports.recommended,
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'filenames-simple/naming-convention': ['error', { rule: 'PascalCase' }],
            },
        },
    ],
};
