'use strict'

module.exports = getPropertyValue

const splitPropertyKey = require('./split-property-key')

/**
 * Gets a specified property from an object if it exists.
 *
 * @param {object} obj The object to be searched.
 * @param {string|string[]} property A string, or an array of strings, identifying
 * the property to be retrieved from the object.
 * Accepts nested properties delimited by a `.`.
 * Delimiter can be escaped to preserve property names that contain the delimiter.
 * e.g. `'prop1.prop2'` or `'prop2\.domain\.corp.prop2'`.
 *
 * @returns {*}
 */
function getPropertyValue (obj, property) {
  const props = Array.isArray(property) ? property : splitPropertyKey(property)

  for (const prop of props) {
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      return
    }
    obj = obj[prop]
  }

  return obj
}
