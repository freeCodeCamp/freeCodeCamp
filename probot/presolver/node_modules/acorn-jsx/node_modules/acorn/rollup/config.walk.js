import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/walk/index.js',
	moduleName: 'acorn.walk',
	plugins: [ buble() ],
	targets: [
		{ dest: 'dist/walk.js', format: 'umd' },
		{ dest: 'dist/walk.es.js', format: 'es' }
	]
};
