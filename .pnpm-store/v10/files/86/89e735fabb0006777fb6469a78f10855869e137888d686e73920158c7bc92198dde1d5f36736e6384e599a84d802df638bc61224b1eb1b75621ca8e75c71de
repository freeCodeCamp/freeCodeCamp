'use strict';
const browserslist = require('browserslist');
const plugins = require('./plugins');

/** @typedef {{lint?: boolean}} Options */

/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
function pluginCreator(opts = {}) {
  return {
    postcssPlugin: 'stylehacks',

    OnceExit(css, { result }) {
      /** @type {typeof result.opts & browserslist.Options} */
      const resultOpts = result.opts || {};
      const browsers = browserslist(null, {
        stats: resultOpts.stats,
        path: __dirname,
        env: resultOpts.env,
      });

      /** @type {import('./plugin').Plugin[]} */
      const processors = [];
      for (const Plugin of plugins) {
        const hack = new Plugin(result);
        if (!browsers.some((browser) => hack.targets.has(browser))) {
          processors.push(hack);
        }
      }
      css.walk((node) => {
        processors.forEach((proc) => {
          if (!proc.nodeTypes.has(node.type)) {
            return;
          }

          if (opts.lint) {
            return proc.detectAndWarn(node);
          }

          return proc.detectAndResolve(node);
        });
      });
    },
  };
}

/** @type {(node: import('postcss').Node) => boolean} */
pluginCreator.detect = (node) => {
  return plugins.some((Plugin) => {
    const hack = new Plugin();

    return hack.any(node);
  });
};

pluginCreator.postcss = true;
module.exports = pluginCreator;
