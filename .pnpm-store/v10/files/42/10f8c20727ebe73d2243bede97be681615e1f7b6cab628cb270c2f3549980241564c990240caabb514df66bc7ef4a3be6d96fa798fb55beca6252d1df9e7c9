'use strict';
const valueParser = require('postcss-value-parser');
const mappings = require('./lib/map.js');

/**
 * @param {string} value
 * @return {string}
 */
function transform(value) {
  const { nodes } = valueParser(value);

  if (nodes.length === 1) {
    return value;
  }

  const values = nodes
    .filter((list, index) => index % 2 === 0)
    .filter((node) => node.type === 'word')
    .map((n) => n.value.toLowerCase());

  if (values.length === 0) {
    return value;
  }

  const match = mappings.get(values.toString());

  if (!match) {
    return value;
  }

  return match;
}

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-normalize-display-values',

    prepare() {
      const cache = new Map();
      return {
        OnceExit(css) {
          css.walkDecls(/^display$/i, (decl) => {
            const value = decl.value;

            if (!value) {
              return;
            }

            if (cache.has(value)) {
              decl.value = cache.get(value);

              return;
            }

            const result = transform(value);

            decl.value = result;
            cache.set(value, result);
          });
        },
      };
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
