'use strict'

module.exports = deleteLogProperty

const getPropertyValue = require('./get-property-value')
const splitPropertyKey = require('./split-property-key')

/**
 * Deletes a specified property from a log object if it exists.
 * This function mutates the passed in `log` object.
 *
 * @param {object} log The log object to be modified.
 * @param {string} property A string identifying the property to be deleted from
 * the log object. Accepts nested properties delimited by a `.`
 * Delimiter can be escaped to preserve property names that contain the delimiter.
 * e.g. `'prop1.prop2'` or `'prop2\.domain\.corp.prop2'`
 */
function deleteLogProperty (log, property) {
  const props = splitPropertyKey(property)
  const propToDelete = props.pop()

  log = getPropertyValue(log, props)

  /* istanbul ignore else */
  if (log !== null && typeof log === 'object' && Object.prototype.hasOwnProperty.call(log, propToDelete)) {
    delete log[propToDelete]
  }
}
