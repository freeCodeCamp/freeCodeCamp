'use strict';
const valueParser = require('postcss-value-parser');
const {
  normalizeGridAutoFlow,
  normalizeGridColumnRowGap,
  normalizeGridColumnRow,
} = require('./rules/grid');

// rules
const animation = require('./rules/animation');
const border = require('./rules/border');
const boxShadow = require('./rules/boxShadow');
const flexFlow = require('./rules/flexFlow');
const transition = require('./rules/transition');
const listStyle = require('./rules/listStyle');
const column = require('./rules/columns');
const vendorUnprefixed = require('./lib/vendorUnprefixed.js');

/** @type {[string, (parsed: valueParser.ParsedValue) => string][]} */
const borderRules = [
  ['border', border],
  ['border-block', border],
  ['border-inline', border],
  ['border-block-end', border],
  ['border-block-start', border],
  ['border-inline-end', border],
  ['border-inline-start', border],
  ['border-top', border],
  ['border-right', border],
  ['border-bottom', border],
  ['border-left', border],
];

/** @type {[string, (parsed: valueParser.ParsedValue) => string | string[] | valueParser.ParsedValue][]} */
const grid = [
  ['grid-auto-flow', normalizeGridAutoFlow],
  ['grid-column-gap', normalizeGridColumnRowGap], // normal | <length-percentage>
  ['grid-row-gap', normalizeGridColumnRowGap], // normal | <length-percentage>
  ['grid-column', normalizeGridColumnRow], // <grid-line>+
  ['grid-row', normalizeGridColumnRow], // <grid-line>+
  ['grid-row-start', normalizeGridColumnRow], // <grid-line>
  ['grid-row-end', normalizeGridColumnRow], // <grid-line>
  ['grid-column-start', normalizeGridColumnRow], // <grid-line>
  ['grid-column-end', normalizeGridColumnRow], // <grid-line>
];

/** @type {[string, (parsed: valueParser.ParsedValue) => string | valueParser.ParsedValue][]} */
const columnRules = [
  ['column-rule', border],
  ['columns', column],
];

/** @type {Map<string, ((parsed: valueParser.ParsedValue) => string | string[] | valueParser.ParsedValue)>} */
const rules = new Map([
  ['animation', animation],
  ['outline', border],
  ['box-shadow', boxShadow],
  ['flex-flow', flexFlow],
  ['list-style', listStyle],
  ['transition', transition],
  ...borderRules,
  ...grid,
  ...columnRules,
]);

const variableFunctions = new Set(['var', 'env', 'constant']);

/**
 * @param {valueParser.Node} node
 * @return {boolean}
 */
function isVariableFunctionNode(node) {
  if (node.type !== 'function') {
    return false;
  }

  return variableFunctions.has(node.value.toLowerCase());
}

/**
 * @param {valueParser.ParsedValue} parsed
 * @return {boolean}
 */
function shouldAbort(parsed) {
  let abort = false;

  parsed.walk((node) => {
    if (
      node.type === 'comment' ||
      isVariableFunctionNode(node) ||
      (node.type === 'word' && node.value.includes(`___CSS_LOADER_IMPORT___`))
    ) {
      abort = true;

      return false;
    }
  });

  return abort;
}

/**
 * @param {import('postcss').Declaration} decl
 * @return {string}
 */
function getValue(decl) {
  let { value, raws } = decl;

  if (raws && raws.value && raws.value.raw) {
    value = raws.value.raw;
  }

  return value;
}
/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-ordered-values',
    prepare() {
      const cache = new Map();
      return {
        OnceExit(css) {
          css.walkDecls((decl) => {
            const lowerCasedProp = decl.prop.toLowerCase();
            const normalizedProp = vendorUnprefixed(lowerCasedProp);
            const processor = rules.get(normalizedProp);

            if (!processor) {
              return;
            }

            const value = getValue(decl);

            if (cache.has(value)) {
              decl.value = cache.get(value);

              return;
            }

            const parsed = valueParser(value);

            if (parsed.nodes.length < 2 || shouldAbort(parsed)) {
              cache.set(value, value);

              return;
            }

            const result = processor(parsed);

            decl.value = result.toString();
            cache.set(value, result.toString());
          });
        },
      };
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
