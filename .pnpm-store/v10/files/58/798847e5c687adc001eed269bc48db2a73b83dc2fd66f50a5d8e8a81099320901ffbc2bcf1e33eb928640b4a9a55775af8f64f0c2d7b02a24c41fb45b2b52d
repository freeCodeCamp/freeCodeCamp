'use strict';

/**
 * Replaces a leading - with \-
 * @private
 * @param {any} value the facet value to replace
 * @returns {any} the escaped facet value or the value if it was not a string
 */
function escapeFacetValue(value) {
  if (typeof value !== 'string') return value;

  return String(value).replace(/^-/, '\\-');
}

/**
 * Replaces a leading \- with -
 * @private
 * @param {any} value the escaped facet value
 * @returns {any} the unescaped facet value or the value if it was not a string
 */
function unescapeFacetValue(value) {
  if (typeof value !== 'string') return value;

  return value.replace(/^\\-/, '-');
}

module.exports = {
  escapeFacetValue: escapeFacetValue,
  unescapeFacetValue: unescapeFacetValue,
};
