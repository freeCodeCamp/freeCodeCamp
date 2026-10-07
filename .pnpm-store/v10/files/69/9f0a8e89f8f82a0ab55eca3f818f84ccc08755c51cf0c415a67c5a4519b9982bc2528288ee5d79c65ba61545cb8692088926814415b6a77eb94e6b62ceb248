'use strict';
const parser = require('postcss-selector-parser');
const canUnquote = require('./lib/canUnquote.js');

const pseudoElements = new Set([
  '::before',
  '::after',
  '::first-letter',
  '::first-line',
]);

/**
 * @param {parser.Attribute} selector
 * @return {void}
 */
function attribute(selector) {
  if (selector.value) {
    if (selector.raws.value) {
      // Join selectors that are split over new lines
      selector.raws.value = selector.raws.value.replace(/\\\n/g, '').trim();
    }
    if (canUnquote(selector.value)) {
      selector.quoteMark = null;
    }

    if (selector.operator) {
      selector.operator = /** @type {parser.AttributeOperator} */ (
        selector.operator.trim()
      );
    }
  }

  selector.rawSpaceBefore = '';
  selector.rawSpaceAfter = '';
  selector.spaces.attribute = { before: '', after: '' };
  selector.spaces.operator = { before: '', after: '' };
  selector.spaces.value = {
    before: '',
    after: selector.insensitive ? ' ' : '',
  };

  if (selector.raws.spaces) {
    selector.raws.spaces.attribute = {
      before: '',
      after: '',
    };

    selector.raws.spaces.operator = {
      before: '',
      after: '',
    };

    selector.raws.spaces.value = {
      before: '',
      after: selector.insensitive ? ' ' : '',
    };

    if (selector.insensitive) {
      selector.raws.spaces.insensitive = {
        before: '',
        after: '',
      };
    }
  }

  selector.attribute = selector.attribute.trim();
}

/**
 * @param {parser.Combinator} selector
 * @return {void}
 */
function combinator(selector) {
  const value = selector.value.trim();
  selector.spaces.before = '';
  selector.spaces.after = '';
  selector.rawSpaceBefore = '';
  selector.rawSpaceAfter = '';
  selector.value = value.length ? value : ' ';
}

const pseudoReplacements = new Map([
  [':nth-child', ':first-child'],
  [':nth-of-type', ':first-of-type'],
  [':nth-last-child', ':last-child'],
  [':nth-last-of-type', ':last-of-type'],
]);

/**
 * @param {parser.Pseudo} selector
 * @return {void}
 */
function pseudo(selector) {
  const value = selector.value.toLowerCase();

  if (selector.nodes.length === 1 && pseudoReplacements.has(value)) {
    const first = selector.at(0);
    const one = first.at(0);

    if (first.length === 1) {
      if (one.value === '1') {
        selector.replaceWith(
          parser.pseudo({
            value: /** @type {string} */ (pseudoReplacements.get(value)),
          })
        );
      }

      if (one.value && one.value.toLowerCase() === 'even') {
        one.value = '2n';
      }
    }

    if (first.length === 3) {
      const two = first.at(1);
      const three = first.at(2);

      if (
        one.value &&
        one.value.toLowerCase() === '2n' &&
        two.value === '+' &&
        three.value === '1'
      ) {
        one.value = 'odd';

        two.remove();
        three.remove();
      }
    }

    return;
  }

  selector.walk((child) => {
    if (child.type === 'selector' && child.parent) {
      const uniques = new Set();
      child.parent.each((sibling) => {
        const siblingStr = String(sibling);

        if (!uniques.has(siblingStr)) {
          uniques.add(siblingStr);
        } else {
          sibling.remove();
        }
      });
    }
  });

  if (pseudoElements.has(value)) {
    selector.value = selector.value.slice(1);
  }
}

const tagReplacements = new Map([
  ['from', '0%'],
  ['100%', 'to'],
]);

/**
 * @param {parser.Tag} selector
 * @return {void}
 */
function tag(selector) {
  const value = selector.value.toLowerCase();

  if (tagReplacements.has(value)) {
    selector.value = /** @type {string} */ (tagReplacements.get(value));
  }
}

/**
 * @param {parser.Universal} selector
 * @return {void}
 */
function universal(selector) {
  const next = selector.next();

  if (next && next.type !== 'combinator') {
    selector.remove();
  }
}

const reducers = new Map(
  /** @type {[string, ((selector: parser.Node) => void)][]}*/ ([
    ['attribute', attribute],
    ['combinator', combinator],
    ['pseudo', pseudo],
    ['tag', tag],
    ['universal', universal],
  ])
);

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-minify-selectors',

    OnceExit(css) {
      const cache = new Map();
      const processor = parser((selectors) => {
        const uniqueSelectors = new Set();

        selectors.walk((sel) => {
          // Trim whitespace around the value
          sel.spaces.before = sel.spaces.after = '';
          const reducer = reducers.get(sel.type);
          if (reducer !== undefined) {
            reducer(sel);
            return;
          }

          const toString = String(sel);

          if (
            sel.type === 'selector' &&
            sel.parent &&
            sel.parent.type !== 'pseudo'
          ) {
            if (!uniqueSelectors.has(toString)) {
              uniqueSelectors.add(toString);
            } else {
              sel.remove();
            }
          }
        });
        selectors.nodes.sort();
      });

      css.walkRules((rule) => {
        const selector =
          rule.raws.selector && rule.raws.selector.value === rule.selector
            ? rule.raws.selector.raw
            : rule.selector;

        // If the selector ends with a ':' it is likely a part of a custom mixin,
        // so just pass through.
        if (selector[selector.length - 1] === ':') {
          return;
        }

        if (cache.has(selector)) {
          rule.selector = cache.get(selector);

          return;
        }

        const optimizedSelector = processor.processSync(selector);

        rule.selector = optimizedSelector;
        cache.set(selector, optimizedSelector);
      });
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
