import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

const production = process.env.NODE_ENV !== 'development';

const config = {
  input: 'src/index.ts',
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
    postcss(),
    resolve(),
    typescript({ sourceMap: false }),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    production && terser()
  ],
  external: ['react']
};

export default config;
