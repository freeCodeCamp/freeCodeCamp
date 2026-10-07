import baseConfig from './config.base.js';
import { terser } from 'rollup-plugin-terser';
import pkg from './packageJson.js';

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    file: pkg.browser.replace('umd', 'min'),
    format: 'umd',
  },
  plugins: [...baseConfig.plugins, terser()],
};
