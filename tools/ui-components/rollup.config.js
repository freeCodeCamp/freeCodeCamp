import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV !== 'development';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es'
    },
    {
      file: 'dist/bundle.iife.js',
      format: 'iife',
      globals: { react: 'React' },
      name: 'uiComponents'
    }
  ],
  plugins: [
    nodeResolve(),
    postcss(),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    production && terser()
  ],
  external: ['react']
};

export default config;
