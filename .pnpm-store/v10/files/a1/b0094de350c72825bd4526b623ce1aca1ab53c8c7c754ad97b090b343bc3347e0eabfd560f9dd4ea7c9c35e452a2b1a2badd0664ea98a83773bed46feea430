import ljharb from '@ljharb/eslint-config/flat';

export default [
	...ljharb,
	{
		ignores: [
			'test/resolver/malformed_package_json/package.json',
			'test/list-exports/**',
		],
	},
	{
		rules: {
			'array-bracket-newline': 'off',
			complexity: 'off',
			'consistent-return': 'off',
			curly: 'off',
			'dot-notation': ['error', { allowKeywords: true }],
			'func-name-matching': 'off',
			'func-style': 'off',
			'global-require': 'warn',
			'id-length': ['error', { min: 1, max: 40 }],
			'max-depth': 'off',
			'max-lines-per-function': 'off',
			'max-lines': 'off',
			'max-nested-callbacks': 'off',
			'max-params': 'off',
			'max-statements-per-line': ['error', { max: 2 }],
			'max-statements': 'off',
			'multiline-comment-style': 'off',
			'no-magic-numbers': 'off',
			'no-shadow': 'off',
			'no-use-before-define': 'off',
			'sort-keys': 'off',
			strict: 'off',
		},
	},
	{
		files: ['**/*.js'],
		rules: {
			indent: ['error', 4],
		},
	},
	{
		files: ['bin/**'],
		rules: {
			'no-process-exit': 'off',
		},
	},
	{
		files: ['example/**'],
		rules: {
			'no-console': 'off',
		},
	},
	{
		files: ['test/resolver/nested_symlinks/mylib/*.js'],
		rules: {
			'no-throw-literal': 'off',
		},
	},
	{
		files: ['test/**'],
		languageOptions: {
			ecmaVersion: 5,
			parserOptions: {
				allowReserved: false,
			},
		},
		rules: {
			'dot-notation': ['error', { allowPattern: 'throws' }],
			'max-lines': 'off',
			'max-lines-per-function': 'off',
			'no-unused-vars': ['error', {
				vars: 'all',
				args: 'none',
				caughtErrors: 'none',
			}],
		},
	},
];
