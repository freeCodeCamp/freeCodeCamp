import ljharbConfig from '@ljharb/eslint-config/flat';

export default [
    {
        ignores: ['dist/'],
    },

    ...ljharbConfig,

    {
        rules: {
            complexity: 'off',
            'consistent-return': 'warn',
            'func-name-matching': 'off',
            'id-length': [
                'error',
                {
                    max: 25,
                    min: 1,
                    properties: 'never',
                },
            ],
            indent: ['error', 4],
            'max-lines': 'off',
            'max-lines-per-function': [
                'error',
                { max: 150 },
            ],
            'max-params': ['error', 18],
            'max-statements': ['error', 100],
            'multiline-comment-style': 'off',
            'no-continue': 'warn',
            'no-magic-numbers': 'off',
            'no-restricted-syntax': [
                'error',
                'BreakStatement',
                'DebuggerStatement',
                'ForInStatement',
                'LabeledStatement',
                'WithStatement',
            ],
        },
    },

    {
        files: ['test/**'],
        rules: {
            'function-paren-newline': 'off',
            'max-lines-per-function': 'off',
            'max-statements': 'off',
            'no-buffer-constructor': 'off',
            'no-extend-native': 'off',
            'no-throw-literal': 'off',
        },
    },
];
