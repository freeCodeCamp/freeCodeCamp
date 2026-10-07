'use strict'

/**
 * Normalize the index option into an array.
 *
 * @param {boolean|string|array} val
 * @param {string} name
 * @private
 */

function normalizeList (val, name) {
  if (typeof val === 'string') {
    return [val]
  } else if (val === false) {
    return []
  } else if (Array.isArray(val)) {
    for (let i = 0, il = val.length; i < il; ++i) {
      if (typeof val[i] !== 'string') {
        throw new TypeError(name + ' must be array of strings or false')
      }
    }
    return val
  } else {
    throw new TypeError(name + ' must be array of strings or false')
  }
}

module.exports.normalizeList = normalizeList
