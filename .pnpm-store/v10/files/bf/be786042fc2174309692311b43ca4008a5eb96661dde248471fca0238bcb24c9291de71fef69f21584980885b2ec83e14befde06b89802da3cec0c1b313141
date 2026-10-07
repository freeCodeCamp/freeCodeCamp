'use strict'

var asciiAlphanumeric = require('../character/ascii-alphanumeric.js')
var fromCharCode = require('../constant/from-char-code.js')

// encoded sequences.

function normalizeUri(value) {
  var index = -1
  var result = []
  var start = 0
  var skip = 0
  var code
  var next
  var replace

  while (++index < value.length) {
    code = value.charCodeAt(index) // A correct percent encoded value.

    if (
      code === 37 &&
      asciiAlphanumeric(value.charCodeAt(index + 1)) &&
      asciiAlphanumeric(value.charCodeAt(index + 2))
    ) {
      skip = 2
    } // ASCII.
    else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(fromCharCode(code))) {
        replace = fromCharCode(code)
      }
    } // Astral.
    else if (code > 55295 && code < 57344) {
      next = value.charCodeAt(index + 1) // A correct surrogate pair.

      if (code < 56320 && next > 56319 && next < 57344) {
        replace = fromCharCode(code, next)
        skip = 1
      } // Lone surrogate.
      else {
        replace = '\uFFFD'
      }
    } // Unicode.
    else {
      replace = fromCharCode(code)
    }

    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace))
      start = index + skip + 1
      replace = undefined
    }

    if (skip) {
      index += skip
      skip = 0
    }
  }

  return result.join('') + value.slice(start)
}

module.exports = normalizeUri
