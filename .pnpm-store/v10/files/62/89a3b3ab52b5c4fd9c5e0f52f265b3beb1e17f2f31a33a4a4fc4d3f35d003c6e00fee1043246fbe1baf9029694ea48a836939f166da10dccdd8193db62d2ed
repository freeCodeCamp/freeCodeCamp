'use strict';
const charset = 'charset';
// eslint-disable-next-line no-control-regex
const nonAscii = /[^\x00-\x7F]/;

/**
 * @typedef {{add?: boolean}} Options
 */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
function pluginCreator(opts = {}) {
  return {
    postcssPlugin: 'postcss-normalize-' + charset,

    OnceExit(css, { AtRule }) {
      /** @type {import('postcss').AtRule | undefined} */
      let charsetRule;
      /** @type {import('postcss').Node | undefined} */
      let nonAsciiNode;

      css.walk((node) => {
        if (node.type === 'atrule' && node.name === charset) {
          if (!charsetRule) {
            charsetRule = node;
          }
          node.remove();
        } else if (
          !nonAsciiNode &&
          node.parent === css &&
          nonAscii.test(node.toString())
        ) {
          nonAsciiNode = node;
        }
      });

      if (nonAsciiNode) {
        if (!charsetRule && opts.add !== false) {
          charsetRule = new AtRule({
            name: charset,
            params: '"utf-8"',
          });
        }
        if (charsetRule) {
          charsetRule.source = nonAsciiNode.source;
          css.prepend(charsetRule);
        }
      }
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
