import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default {
	input: `index.js`,
	plugins: [
		commonjs(),
		resolve(),
	],
	output: [
		{
			file: pkg.main,
			format: `cjs`
		},
		{
			name: 'deepmerge',
			file: 'dist/umd.js',
			format: `umd`
		},
	],
}
