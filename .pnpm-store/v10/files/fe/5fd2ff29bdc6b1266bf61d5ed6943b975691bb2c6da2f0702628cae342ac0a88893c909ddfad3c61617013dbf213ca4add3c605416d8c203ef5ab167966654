'use strict';

/**
 * @param {import('postcss-selector-parser').Selector} selector
 * @param {number} index
 * @param {string} value
 * @return {boolean | undefined | ''}
 */
module.exports = function exists(selector, index, value) {
  const node = selector.at(index);

  return node && node.value && node.value.toLowerCase() === value;
};
