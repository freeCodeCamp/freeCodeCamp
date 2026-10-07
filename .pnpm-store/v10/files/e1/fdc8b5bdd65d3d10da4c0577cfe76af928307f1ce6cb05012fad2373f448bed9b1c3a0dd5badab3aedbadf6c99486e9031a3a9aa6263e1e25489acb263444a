'use strict'

module.exports = splitPropertyKey

/**
 * Splits the property key delimited by a dot character but not when it is preceded
 * by a backslash.
 *
 * @param {string} key A string identifying the property.
 *
 * @returns {string[]} Returns a list of string containing each delimited property.
 * e.g. `'prop2\.domain\.corp.prop2'` should return [ 'prop2.domain.com', 'prop2' ]
 */
function splitPropertyKey (key) {
  const result = []
  let backslash = false
  let segment = ''

  for (let i = 0; i < key.length; i++) {
    const c = key.charAt(i)

    if (c === '\\') {
      backslash = true
      continue
    }

    if (backslash) {
      backslash = false
      segment += c
      continue
    }

    /* Non-escaped dot, push to result */
    if (c === '.') {
      result.push(segment)
      segment = ''
      continue
    }

    segment += c
  }

  /* Push last entry to result */
  if (segment.length) {
    result.push(segment)
  }

  return result
}
