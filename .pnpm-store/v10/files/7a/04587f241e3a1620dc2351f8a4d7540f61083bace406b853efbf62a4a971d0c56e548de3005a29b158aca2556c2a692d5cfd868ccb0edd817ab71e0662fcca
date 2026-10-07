import ljharb from '@ljharb/eslint-config/flat';
import ljharbNodeLatest from '@ljharb/eslint-config/flat/node/latest';
import ljharbTests from '@ljharb/eslint-config/flat/tests';

export default [
	{
		ignores: [
			'.nyc_output',
		],
	},
	...ljharb,
	{
		languageOptions: {
			globals: {
				DataView: false,
				Float16Array: false,
				Float32Array: false,
				Float64Array: false,
				Int8Array: false,
				Int16Array: false,
				Int32Array: false,
				Intl: false,
				Uint8Array: false,
				Uint8ClampedArray: false,
				Uint16Array: false,
				Uint32Array: false,
			},
		},
		rules: {
			'array-bracket-newline': 'off',
			complexity: 'off',
			eqeqeq: ['error', 'allow-null'],
			'func-name-matching': 'off',
			'id-length': ['error', { min: 1, max: 40 }],
			'max-lines-per-function': 'warn',
			'max-params': ['error', 5],
			'max-statements': 'warn',
			'max-statements-per-line': ['error', { max: 2 }],
			'multiline-comment-style': 'off',
			'new-cap': 'off',
			'no-extra-parens': 'warn',
			'no-implicit-coercion': ['error', {
				boolean: false,
				number: false,
				string: true,
			}],
			'no-magic-numbers': 'off',
			'sort-keys': 'off',
		},
	},
	{
		files: ['GetIntrinsic.js'],
		rules: {
			'max-statements': 'off',
		},
	},
	{
		files: ['operations/*'],
		rules: {
			'max-lines': 'off',
		},
	},
	...ljharbNodeLatest
		.filter((c) => !c.files?.some((f) => typeof f === 'function' || f === '**/*.mjs'))
		.map((c) => ({
			...c,
			files: [
				'operations/deltas.js',
				'operations/getOps.js',
				'operations/spackle.js',
				'operations/years.js',
			],
		})),
	{
		files: [
			'operations/deltas.js',
			'operations/getOps.js',
			'operations/spackle.js',
			'operations/years.js',
		],
		rules: {
			complexity: 'off',
			'func-style': 'off',
			'max-lines-per-function': 'off',
			'max-nested-callbacks': 'off',
			'max-statements': 'off',
			'no-magic-numbers': 'off',
			'no-throw-literal': 'off',
		},
	},
	...ljharbTests.map((c) => ({
		...c,
		files: ['test/**'],
	})),
	{
		files: ['test/**'],
		rules: {
			'max-len': 'off',
			'max-lines-per-function': 'off',
			'no-implicit-coercion': 'off',
			'no-invalid-this': 'warn',
			'prefer-promise-reject-errors': 'off',
		},
	},
	{
		files: [
			'*/Num*ToRawBytes.js',
			'*/RawBytesToNum*.js',
			'helpers/bytesAs*.js',
			'helpers/valueToFloat*.js',
		],
		rules: {
			'max-lines-per-function': 'off',
			'max-statements': 'off',
			'no-redeclare': 'warn',
			'operator-linebreak': ['error', 'before', {
				overrides: {
					'=': 'none',
				},
			}],
		},
	},
	{
		files: ['*/GetSubstitution.js'],
		rules: {
			'max-depth': 'off',
		},
	},
];
