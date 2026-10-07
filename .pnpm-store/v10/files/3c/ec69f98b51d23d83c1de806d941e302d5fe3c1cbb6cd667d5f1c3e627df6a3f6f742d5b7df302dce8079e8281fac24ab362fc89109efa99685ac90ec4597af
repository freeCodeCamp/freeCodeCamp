'use strict';
const valueParser = require('postcss-value-parser');
const browserslist = require('browserslist');
const convert = require('./lib/convert.js');

const LENGTH_UNITS = new Set([
  'em',
  'ex',
  'ch',
  'rem',
  'vw',
  'vh',
  'vmin',
  'vmax',
  'cm',
  'mm',
  'q',
  'in',
  'pt',
  'pc',
  'px',
]);

// These properties only accept percentages, so no point in trying to transform
const notALength = new Set([
  'descent-override',
  'ascent-override',
  'font-stretch',
  'size-adjust',
  'line-gap-override',
]);

// Can't change the unit on these properties when they're 0
const keepWhenZero = new Set([
  'stroke-dashoffset',
  'stroke-width',
  'line-height',
]);

// Can't remove the % on these properties when they're 0 on IE 11
const keepZeroPercent = new Set(['max-height', 'height', 'min-width']);

/**
 * Numbers without digits after the dot are technically invalid,
 * but in that case css-value-parser returns the dot as part of the unit,
 * so we use this to remove the dot.
 *
 * @param {string} item
 * @return {string}
 */
function stripLeadingDot(item) {
  if (item.charCodeAt(0) === '.'.charCodeAt(0)) {
    return item.slice(1);
  } else {
    return item;
  }
}

/**
 * @param {valueParser.Node} node
 * @param {Options} opts
 * @param {boolean} keepZeroUnit
 * @return {void}
 */
function parseWord(node, opts, keepZeroUnit) {
  const pair = valueParser.unit(node.value);
  if (pair) {
    const num = Number(pair.number);
    const u = stripLeadingDot(pair.unit);
    if (num === 0) {
      node.value =
        0 +
        (keepZeroUnit || (!LENGTH_UNITS.has(u.toLowerCase()) && u !== '%')
          ? u
          : '');
    } else {
      node.value = convert(num, u, opts);

      if (
        typeof opts.precision === 'number' &&
        u.toLowerCase() === 'px' &&
        pair.number.includes('.')
      ) {
        const precision = Math.pow(10, opts.precision);
        node.value =
          Math.round(parseFloat(node.value) * precision) / precision + u;
      }
    }
  }
}

/**
 * @param {valueParser.WordNode} node
 * @return {void}
 */
function clampOpacity(node) {
  const pair = valueParser.unit(node.value);
  if (!pair) {
    return;
  }
  let num = Number(pair.number);
  if (num > 1) {
    node.value = pair.unit === '%' ? num + pair.unit : 1 + pair.unit;
  } else if (num < 0) {
    node.value = 0 + pair.unit;
  }
}

/**
 * @param {import('postcss').Declaration} decl
 * @param {string[]} browsers
 * @return {boolean}
 */
function shouldKeepZeroUnit(decl, browsers) {
  const { parent } = decl;
  const lowerCasedProp = decl.prop.toLowerCase();
  return (
    (decl.value.includes('%') &&
      keepZeroPercent.has(lowerCasedProp) &&
      browsers.includes('ie 11')) ||
    (parent &&
      parent.parent &&
      parent.parent.type === 'atrule' &&
      /** @type {import('postcss').AtRule} */ (
        parent.parent
      ).name.toLowerCase() === 'keyframes' &&
      lowerCasedProp === 'stroke-dasharray') ||
    keepWhenZero.has(lowerCasedProp)
  );
}
/**
 * @param {Options} opts
 * @param {string[]} browsers
 * @param {import('postcss').Declaration} decl
 * @return {void}
 */
function transform(opts, browsers, decl) {
  const lowerCasedProp = decl.prop.toLowerCase();
  if (
    lowerCasedProp.includes('flex') ||
    lowerCasedProp.indexOf('--') === 0 ||
    notALength.has(lowerCasedProp)
  ) {
    return;
  }

  decl.value = valueParser(decl.value)
    .walk((node) => {
      const lowerCasedValue = node.value.toLowerCase();

      if (node.type === 'word') {
        parseWord(node, opts, shouldKeepZeroUnit(decl, browsers));
        if (
          lowerCasedProp === 'opacity' ||
          lowerCasedProp === 'shape-image-threshold'
        ) {
          clampOpacity(node);
        }
      } else if (node.type === 'function') {
        if (
          lowerCasedValue === 'calc' ||
          lowerCasedValue === 'min' ||
          lowerCasedValue === 'max' ||
          lowerCasedValue === 'clamp' ||
          lowerCasedValue === 'hsl' ||
          lowerCasedValue === 'hsla'
        ) {
          valueParser.walk(node.nodes, (n) => {
            if (n.type === 'word') {
              parseWord(n, opts, true);
            }
          });
          return false;
        }
        if (lowerCasedValue === 'url') {
          return false;
        }
      }
    })
    .toString();
}

const plugin = 'postcss-convert-values';
/**
 * @typedef {{precision: boolean | number, angle?: boolean, time?: boolean, length?: boolean} & browserslist.Options} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
function pluginCreator(opts = { precision: false }) {
  const browsers = browserslist(null, {
    stats: opts.stats,
    path: __dirname,
    env: opts.env,
  });

  return {
    postcssPlugin: plugin,
    OnceExit(css) {
      css.walkDecls((decl) => transform(opts, browsers, decl));
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
