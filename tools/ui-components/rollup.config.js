import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve(),
    postcss(),
    babel({ babelHelpers: 'bundled' }),
    commonjs()
  ],
  external: ['react']
};

export default config;
