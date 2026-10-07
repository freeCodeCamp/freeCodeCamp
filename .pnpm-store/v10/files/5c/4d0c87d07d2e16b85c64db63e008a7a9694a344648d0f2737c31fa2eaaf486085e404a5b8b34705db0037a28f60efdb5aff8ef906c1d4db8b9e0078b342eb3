'use strict';
const browserslist = require('browserslist');
const { isSupported } = require('caniuse-api');
const valueParser = require('postcss-value-parser');
const minifyColor = require('./minifyColor');

/**
 * @param {{nodes: valueParser.Node[]}} parent
 * @param {(node: valueParser.Node, index: number, parent: {nodes: valueParser.Node[]}) => false | undefined} callback
 * @return {void}
 */
function walk(parent, callback) {
  parent.nodes.forEach((node, index) => {
    const bubble = callback(node, index, parent);

    if (node.type === 'function' && bubble !== false) {
      walk(node, callback);
    }
  });
}

/*
 * IE 8 & 9 do not properly handle clicks on elements
 * with a `transparent` `background-color`.
 *
 * https://developer.mozilla.org/en-US/docs/Web/Events/click#Internet_Explorer
 */
const browsersWithTransparentBug = new Set(['ie 8', 'ie 9']);
const mathFunctions = new Set(['calc', 'min', 'max', 'clamp']);

/**
 * @param {valueParser.Node} node
 * @return {boolean}
 */
function isMathFunctionNode(node) {
  if (node.type !== 'function') {
    return false;
  }
  return mathFunctions.has(node.value.toLowerCase());
}

/**
 * @param {string} value
 * @param {Record<string, boolean>} options
 * @return {string}
 */
function transform(value, options) {
  const parsed = valueParser(value);

  walk(parsed, (node, index, parent) => {
    if (node.type === 'function') {
      if (/^(rgb|hsl)a?$/i.test(node.value)) {
        const { value: originalValue } = node;

        node.value = minifyColor(valueParser.stringify(node), options);
        /** @type {string} */ (node.type) = 'word';

        const next = parent.nodes[index + 1];

        if (
          node.value !== originalValue &&
          next &&
          (next.type === 'word' || next.type === 'function')
        ) {
          parent.nodes.splice(
            index + 1,
            0,
            /** @type {valueParser.SpaceNode} */ ({
              type: 'space',
              value: ' ',
            })
          );
        }
      } else if (isMathFunctionNode(node)) {
        return false;
      }
    } else if (node.type === 'word') {
      node.value = minifyColor(node.value, options);
    }
  });

  return parsed.toString();
}

/**
 * @param {Record<string, boolean>} options
 * @param {string[]} browsers
 * @return {Record<string, boolean>}
 */
function addPluginDefaults(options, browsers) {
  const defaults = {
    // Does the browser support 4 & 8 character hex notation
    transparent:
      browsers.some((b) => browsersWithTransparentBug.has(b)) === false,
    // Does the browser support "transparent" value properly
    alphaHex: isSupported('css-rrggbbaa', browsers),
    name: true,
  };
  return { ...defaults, ...options };
}
/**
 * @type {import('postcss').PluginCreator<Record<string, boolean>>}
 * @param {Record<string, boolean>} config
 * @return {import('postcss').Plugin}
 */
function pluginCreator(config = {}) {
  return {
    postcssPlugin: 'postcss-colormin',

    prepare(result) {
      /** @type {typeof result.opts & browserslist.Options} */
      const resultOptions = result.opts || {};
      const browsers = browserslist(null, {
        stats: resultOptions.stats,
        path: __dirname,
        env: resultOptions.env,
      });

      const cache = new Map();
      const options = addPluginDefaults(config, browsers);

      return {
        OnceExit(css) {
          css.walkDecls((decl) => {
            if (
              /^(composes|font|src$|filter|-webkit-tap-highlight-color)/i.test(
                decl.prop
              )
            ) {
              return;
            }

            const value = decl.value;

            if (!value) {
              return;
            }

            const cacheKey = JSON.stringify({ value, options, browsers });

            if (cache.has(cacheKey)) {
              decl.value = cache.get(cacheKey);

              return;
            }

            const newValue = transform(value, options);

            decl.value = newValue;
            cache.set(cacheKey, newValue);
          });
        },
      };
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
