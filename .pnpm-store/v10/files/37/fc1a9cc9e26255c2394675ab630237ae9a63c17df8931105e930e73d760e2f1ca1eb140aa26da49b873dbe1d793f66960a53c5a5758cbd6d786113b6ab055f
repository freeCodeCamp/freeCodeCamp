'use strict';
const valueParser = require('postcss-value-parser');

const atrule = 'atrule';
const decl = 'decl';
const rule = 'rule';
const variableFunctions = new Set(['var', 'env', 'constant']);

/**
 * @param {valueParser.Node} node
 * @return {void}
 */
function reduceCalcWhitespaces(node) {
  if (node.type === 'space') {
    node.value = ' ';
  } else if (node.type === 'function') {
    if (!variableFunctions.has(node.value.toLowerCase())) {
      node.before = node.after = '';
    }
  }
}
/**
 * @param {valueParser.Node} node
 * @return {void | false}
 */
function reduceWhitespaces(node) {
  if (node.type === 'space') {
    node.value = ' ';
  } else if (node.type === 'div') {
    node.before = node.after = '';
  } else if (node.type === 'function') {
    if (!variableFunctions.has(node.value.toLowerCase())) {
      node.before = node.after = '';
    }
    if (node.value.toLowerCase() === 'calc') {
      valueParser.walk(node.nodes, reduceCalcWhitespaces);
      return false;
    }
  }
}

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-normalize-whitespace',

    OnceExit(css) {
      const cache = new Map();

      css.walk((node) => {
        const { type } = node;

        if ([decl, rule, atrule].includes(type) && node.raws.before) {
          node.raws.before = node.raws.before.replace(/\s/g, '');
        }

        if (type === decl) {
          // Ensure that !important values do not have any excess whitespace
          if (node.important) {
            node.raws.important = '!important';
          }

          // Remove whitespaces around ie 9 hack
          node.value = node.value.replace(/\s*(\\9)\s*/, '$1');
          const value = node.value;

          if (cache.has(value)) {
            node.value = cache.get(value);
          } else {
            const parsed = valueParser(node.value);
            const result = parsed.walk(reduceWhitespaces).toString();

            // Trim whitespace inside functions & dividers
            node.value = result;
            cache.set(value, result);
          }

          if (node.prop.startsWith('--') && node.value === '') {
            node.value = ' ';
          }
          // Remove extra semicolons and whitespace before the declaration
          if (node.raws.before) {
            const prev = node.prev();

            if (prev && prev.type !== rule) {
              node.raws.before = node.raws.before.replace(/;/g, '');
            }
          }

          node.raws.between = ':';
          node.raws.semicolon = false;
        } else if (type === rule || type === atrule) {
          node.raws.between = node.raws.after = '';
          node.raws.semicolon = false;
        }
      });

      // Remove final newline
      css.raws.after = '';
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
