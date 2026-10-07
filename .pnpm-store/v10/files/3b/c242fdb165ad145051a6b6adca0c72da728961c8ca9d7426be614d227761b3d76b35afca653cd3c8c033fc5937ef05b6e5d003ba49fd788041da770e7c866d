'use strict'

/**
 * Collapse all leading slashes into a single slash
 *
 * @param {string} str
 * @private
 */

function collapseLeadingSlashes (str) {
  if (
    str[0] !== '/' ||
    str[1] !== '/'
  ) {
    return str
  }
  for (let i = 2, il = str.length; i < il; ++i) {
    if (str[i] !== '/') {
      return str.slice(i - 1)
    }
  }
  /* c8 ignore next */
}

module.exports.collapseLeadingSlashes = collapseLeadingSlashes
