'use strict';
const { isSupported } = require('caniuse-api');
const selectorParser = require('postcss-selector-parser');

const simpleSelectorRe = /^#?[-._a-z0-9 ]+$/i;

const cssSel2 = 'css-sel2';
const cssSel3 = 'css-sel3';
const cssGencontent = 'css-gencontent';
const cssFirstLetter = 'css-first-letter';
const cssFirstLine = 'css-first-line';
const cssInOutOfRange = 'css-in-out-of-range';
const formValidation = 'form-validation';

const vendorPrefix =
  /-(ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)-/;

const level2Sel = new Set(['=', '~=', '|=']);
const level3Sel = new Set(['^=', '$=', '*=']);

/**
 * @param {string} selector
 * @return {RegExpMatchArray | null}
 */
function filterPrefixes(selector) {
  return selector.match(vendorPrefix);
}

/**
 * Internet Explorer use :-ms-input-placeholder.
 * Microsoft Edge use ::-ms-input-placeholder.
 *
 * @type {(selector: string) => number}
 */
const findMsInputPlaceholder = (selector) =>
  ~selector.search(/-ms-input-placeholder/i);

/**
 * @param {string[]} selectorsA
 * @param {string[]} selectorsB
 * @return {boolean}
 */
function sameVendor(selectorsA, selectorsB) {
  /** @type {(selectors: string[]) => string} */
  let same = (selectors) => selectors.map(filterPrefixes).join();
  /** @type {(selectors: string[]) => string | undefined} */
  let findMsVendor = (selectors) => selectors.find(findMsInputPlaceholder);
  return (
    same(selectorsA) === same(selectorsB) &&
    !(findMsVendor(selectorsA) && findMsVendor(selectorsB))
  );
}

/**
 * @param {string} selector
 * @return {boolean}
 */
function noVendor(selector) {
  return !vendorPrefix.test(selector);
}

const pseudoElements = {
  ':active': cssSel2,
  ':after': cssGencontent,
  ':any-link': 'css-any-link',
  ':before': cssGencontent,
  ':checked': cssSel3,
  ':default': 'css-default-pseudo',
  ':dir': 'css-dir-pseudo',
  ':disabled': cssSel3,
  ':empty': cssSel3,
  ':enabled': cssSel3,
  ':first-child': cssSel2,
  ':first-letter': cssFirstLetter,
  ':first-line': cssFirstLine,
  ':first-of-type': cssSel3,
  ':focus': cssSel2,
  ':focus-within': 'css-focus-within',
  ':focus-visible': 'css-focus-visible',
  ':has': 'css-has',
  ':hover': cssSel2,
  ':in-range': cssInOutOfRange,
  ':indeterminate': 'css-indeterminate-pseudo',
  ':invalid': formValidation,
  ':is': 'css-matches-pseudo',
  ':lang': cssSel2,
  ':last-child': cssSel3,
  ':last-of-type': cssSel3,
  ':link': cssSel2,
  ':matches': 'css-matches-pseudo',
  ':not': cssSel3,
  ':nth-child': cssSel3,
  ':nth-last-child': cssSel3,
  ':nth-last-of-type': cssSel3,
  ':nth-of-type': cssSel3,
  ':only-child': cssSel3,
  ':only-of-type': cssSel3,
  ':optional': 'css-optional-pseudo',
  ':out-of-range': cssInOutOfRange,
  ':placeholder-shown': 'css-placeholder-shown',
  ':required': formValidation,
  ':root': cssSel3,
  ':target': cssSel3,
  '::after': cssGencontent,
  '::backdrop': 'dialog',
  '::before': cssGencontent,
  '::first-letter': cssFirstLetter,
  '::first-line': cssFirstLine,
  '::marker': 'css-marker-pseudo',
  '::placeholder': 'css-placeholder',
  '::selection': 'css-selection',
  ':valid': formValidation,
  ':visited': cssSel2,
};

/**
 * @param {string} selector
 * @return {boolean}
 */
function isCssMixin(selector) {
  return selector[selector.length - 1] === ':';
}

/**
 * @param {string} selector
 * @return {boolean}
 */
function isHostPseudoClass(selector) {
  return selector.includes(':host');
}

const isSupportedCache = new Map();

// Move to util in future
/**
 * @param {string} feature
 * @param {string[] | undefined} browsers
 */
function isSupportedCached(feature, browsers) {
  const key = JSON.stringify({ feature, browsers });
  let result = isSupportedCache.get(key);

  if (!result) {
    result = isSupported(feature, /** @type {string[]} */ (browsers));
    isSupportedCache.set(key, result);
  }

  return result;
}

/**
 * @param {string[]} selectors
 * @param{string[]=} browsers
 * @param{Map<string,boolean>=} compatibilityCache
 * @return {boolean}
 */
function ensureCompatibility(selectors, browsers, compatibilityCache) {
  // Should not merge mixins
  if (selectors.some(isCssMixin)) {
    return false;
  }

  // Should not merge :host selector https://github.com/angular/angular-cli/issues/18672
  if (selectors.some(isHostPseudoClass)) {
    return false;
  }
  return selectors.every((selector) => {
    if (simpleSelectorRe.test(selector)) {
      return true;
    }
    if (compatibilityCache && compatibilityCache.has(selector)) {
      return compatibilityCache.get(selector);
    }
    let compatible = true;
    selectorParser((ast) => {
      ast.walk((node) => {
        const { type, value } = node;
        if (type === 'pseudo') {
          const entry =
            pseudoElements[/** @type {keyof pseudoElements} */ (value)];
          if (!entry && noVendor(value)) {
            compatible = false;
          }
          if (entry && compatible) {
            compatible = isSupportedCached(entry, browsers);
          }
        }
        if (type === 'combinator') {
          if (value.includes('~')) {
            compatible = isSupportedCached(cssSel3, browsers);
          }
          if (value.includes('>') || value.includes('+')) {
            compatible = isSupportedCached(cssSel2, browsers);
          }
        }
        if (type === 'attribute' && node.attribute) {
          // [foo]
          if (!node.operator) {
            compatible = isSupportedCached(cssSel2, browsers);
          }
          if (value) {
            // [foo="bar"], [foo~="bar"], [foo|="bar"]
            if (level2Sel.has(/** @type {string} */ (node.operator))) {
              compatible = isSupportedCached(cssSel2, browsers);
            }
            // [foo^="bar"], [foo$="bar"], [foo*="bar"]
            if (level3Sel.has(/** @type {string} */ (node.operator))) {
              compatible = isSupportedCached(cssSel3, browsers);
            }
          }

          // [foo="bar" i]
          if (node.insensitive) {
            compatible = isSupportedCached('css-case-insensitive', browsers);
          }
        }
        if (!compatible) {
          // If this node was not compatible,
          // break out early from walking the rest
          return false;
        }
      });
    }).processSync(selector);
    if (compatibilityCache) {
      compatibilityCache.set(selector, compatible);
    }
    return compatible;
  });
}

module.exports = { sameVendor, noVendor, pseudoElements, ensureCompatibility };
