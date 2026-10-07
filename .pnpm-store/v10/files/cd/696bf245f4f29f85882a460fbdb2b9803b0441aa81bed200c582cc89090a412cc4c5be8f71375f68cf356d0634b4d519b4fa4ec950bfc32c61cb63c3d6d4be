'use strict'

/**
 * Parse a HTTP token list.
 *
 * @param {string} str
 * @private
 */

const slice = String.prototype.slice

function parseTokenList (str, cb) {
  let end = 0
  let start = 0
  let result

  // gather tokens
  for (let i = 0, len = str.length; i < len; i++) {
    switch (str.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i + 1
        }
        break
      case 0x2c: /* , */
        if (start !== end) {
          result = cb(slice.call(str, start, end))
          if (result !== undefined) {
            return result
          }
        }
        start = end = i + 1
        break
      default:
        end = i + 1
        break
    }
  }

  // final token
  if (start !== end) {
    return cb(slice.call(str, start, end))
  }
}

module.exports.parseTokenList = parseTokenList
