'use strict'

module.exports = createDate

const isValidDate = require('./is-valid-date')

/**
 * Constructs a JS Date from a number or string. Accepts any single number
 * or single string argument that is valid for the Date() constructor,
 * or an epoch as a string.
 *
 * @param {string|number} epoch The representation of the Date.
 *
 * @returns {Date} The constructed Date.
 */
function createDate (epoch) {
  // If epoch is already a valid argument, return the valid Date
  let date = new Date(epoch)
  if (isValidDate(date)) {
    return date
  }

  // Convert to a number to permit epoch as a string
  date = new Date(+epoch)
  return date
}
