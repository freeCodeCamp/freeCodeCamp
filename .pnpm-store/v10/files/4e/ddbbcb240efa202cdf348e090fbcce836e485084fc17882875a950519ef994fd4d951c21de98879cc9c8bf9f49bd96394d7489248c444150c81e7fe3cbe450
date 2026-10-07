'use strict';
const transform = require('./lib/transform.js');

/**
 * @typedef {{precision?: number | false,
 *          preserve?: boolean,
 *          warnWhenCannotResolve?: boolean,
 *          mediaQueries?: boolean,
 *          selectors?: boolean}} PostCssCalcOptions
 */
/**
 * @type {import('postcss').PluginCreator<PostCssCalcOptions>}
 * @param {PostCssCalcOptions} opts
 * @return {import('postcss').Plugin}
 */
function pluginCreator(opts) {
  const options = Object.assign(
    {
      precision: 5,
      preserve: false,
      warnWhenCannotResolve: false,
      mediaQueries: false,
      selectors: false,
    },
    opts
  );

  return {
    postcssPlugin: 'postcss-calc',
    OnceExit(css, { result }) {
      css.walk((node) => {
        const { type } = node;
        if (type === 'decl') {
          transform(node, 'value', options, result);
        }

        if (type === 'atrule' && options.mediaQueries) {
          transform(node, 'params', options, result);
        }

        if (type === 'rule' && options.selectors) {
          transform(node, 'selector', options, result);
        }
      });
    },
  };
}

pluginCreator.postcss = true;

module.exports = pluginCreator;
