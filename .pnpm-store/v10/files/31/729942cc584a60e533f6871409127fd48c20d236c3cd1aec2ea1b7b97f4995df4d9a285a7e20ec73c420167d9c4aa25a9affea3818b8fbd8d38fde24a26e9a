'use strict';
const browserslist = require('browserslist');
const valueParser = require('postcss-value-parser');
const { getArguments } = require('cssnano-utils');

/**
 * Return the greatest common divisor
 * of two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {[number, number]}
 */
function aspectRatio(a, b) {
  const divisor = gcd(a, b);

  return [a / divisor, b / divisor];
}

/**
 * @param {valueParser.Node[]} args
 * @return {string}
 */
function split(args) {
  return args.map((arg) => valueParser.stringify(arg)).join('');
}

/**
 * @param {valueParser.Node} node
 * @return {void}
 */
function removeNode(node) {
  node.value = '';
  node.type = 'word';
}

/**
 * @param {unknown[]} items
 * @return {string}
 */
function sortAndDedupe(items) {
  const a = [...new Set(items)];
  a.sort();
  return a.join();
}

/**
 * @param {boolean} legacy
 * @param {import('postcss').AtRule} rule
 * @return {void}
 */
function transform(legacy, rule) {
  const ruleName = rule.name.toLowerCase();

  // We should re-arrange parameters only for `@media` and `@supports` at-rules
  if (!rule.params || !['media', 'supports'].includes(ruleName)) {
    return;
  }

  const params = valueParser(rule.params);

  params.walk((node, index) => {
    if (node.type === 'div') {
      node.before = node.after = '';
    } else if (node.type === 'function') {
      node.before = '';
      if (
        node.nodes[0] &&
        node.nodes[0].type === 'word' &&
        node.nodes[0].value.startsWith('--') &&
        node.nodes[2] === undefined
      ) {
        node.after = ' ';
      } else {
        node.after = '';
      }
      if (
        node.nodes[4] &&
        node.nodes[0].value.toLowerCase().indexOf('-aspect-ratio') === 3
      ) {
        const [a, b] = aspectRatio(
          Number(node.nodes[2].value),
          Number(node.nodes[4].value)
        );

        node.nodes[2].value = a.toString();
        node.nodes[4].value = b.toString();
      }
    } else if (node.type === 'space') {
      node.value = ' ';
    } else {
      const prevWord = params.nodes[index - 2];

      if (
        node.value.toLowerCase() === 'all' &&
        rule.name.toLowerCase() === 'media' &&
        !prevWord
      ) {
        const nextWord = params.nodes[index + 2];

        if (!legacy || nextWord) {
          removeNode(node);
        }

        if (nextWord && nextWord.value.toLowerCase() === 'and') {
          const nextSpace = params.nodes[index + 1];
          const secondSpace = params.nodes[index + 3];

          removeNode(nextWord);
          removeNode(nextSpace);
          removeNode(secondSpace);
        }
      }
    }
  }, true);

  rule.params = sortAndDedupe(getArguments(params).map(split));

  if (!rule.params.length) {
    rule.raws.afterName = '';
  }
}

const allBugBrowers = new Set(['ie 10', 'ie 11']);

/**
 * @type {import('postcss').PluginCreator<browserslist.Options>}
 * @param {browserslist.Options} options
 * @return {import('postcss').Plugin}
 */
function pluginCreator(options = {}) {
  const browsers = browserslist(null, {
    stats: options.stats,
    path: __dirname,
    env: options.env,
  });

  const hasAllBug = browsers.some((browser) => allBugBrowers.has(browser));
  return {
    postcssPlugin: 'postcss-minify-params',

    OnceExit(css) {
      css.walkAtRules((rule) => transform(hasAllBug, rule));
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
