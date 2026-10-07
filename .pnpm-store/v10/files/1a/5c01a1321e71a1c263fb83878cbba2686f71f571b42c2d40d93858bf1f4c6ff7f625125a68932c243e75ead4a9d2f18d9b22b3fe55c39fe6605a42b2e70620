'use strict'

var UTF8_ACCEPT = 12
var UTF8_REJECT = 0
var UTF8_DATA = [
  // The first part of the table maps bytes to character to a transition.
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7,
  10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,

  // The second part of the table maps a state to a new state when adding a
  // transition.
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96,
  0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

  // The third part maps the current transition to a mask that needs to apply
  // to the byte.
  0x7F, 0x3F, 0x3F, 0x3F, 0x00, 0x1F, 0x0F, 0x0F, 0x0F, 0x07, 0x07, 0x07
]

function decodeURIComponent (uri) {
  var percentPosition = uri.indexOf('%')
  if (percentPosition === -1) return uri

  var length = uri.length
  var decoded = ''
  var last = 0
  var codepoint = 0
  var startOfOctets = percentPosition
  var state = UTF8_ACCEPT

  while (percentPosition > -1 && percentPosition < length) {
    var high = hexCodeToInt(uri[percentPosition + 1], 4)
    var low = hexCodeToInt(uri[percentPosition + 2], 0)
    var byte = high | low
    var type = UTF8_DATA[byte]
    state = UTF8_DATA[256 + state + type]
    codepoint = (codepoint << 6) | (byte & UTF8_DATA[364 + type])

    if (state === UTF8_ACCEPT) {
      decoded += uri.slice(last, startOfOctets)

      decoded += (codepoint <= 0xFFFF)
        ? String.fromCharCode(codepoint)
        : String.fromCharCode(
          (0xD7C0 + (codepoint >> 10)),
          (0xDC00 + (codepoint & 0x3FF))
        )

      codepoint = 0
      last = percentPosition + 3
      percentPosition = startOfOctets = uri.indexOf('%', last)
    } else if (state === UTF8_REJECT) {
      return null
    } else {
      percentPosition += 3
      if (percentPosition < length && uri.charCodeAt(percentPosition) === 37) continue
      return null
    }
  }

  return decoded + uri.slice(last)
}

var HEX = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'a': 10,
  'A': 10,
  'b': 11,
  'B': 11,
  'c': 12,
  'C': 12,
  'd': 13,
  'D': 13,
  'e': 14,
  'E': 14,
  'f': 15,
  'F': 15
}

function hexCodeToInt (c, shift) {
  var i = HEX[c]
  return i === undefined ? 255 : i << shift
}

module.exports = decodeURIComponent
