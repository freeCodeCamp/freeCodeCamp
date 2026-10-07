'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var values = require('../character/values.js')
var fromCharCode = require('../constant/from-char-code.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

function serializeChunks(chunks) {
  var index = -1
  var result = []
  var chunk
  var value
  var atTab

  while (++index < chunks.length) {
    chunk = chunks[index]

    if (typeof chunk === 'string') {
      value = chunk
    } else if (chunk === codes.carriageReturn) {
      value = values.cr
    } else if (chunk === codes.lineFeed) {
      value = values.lf
    } else if (chunk === codes.carriageReturnLineFeed) {
      value = values.cr + values.lf
    } else if (chunk === codes.horizontalTab) {
      value = values.ht
    } else if (chunk === codes.virtualSpace) {
      if (atTab) continue
      value = values.space
    } else {
      assert__default['default'].equal(
        typeof chunk,
        'number',
        'expected number'
      )
      // Currently only replacement character.
      value = fromCharCode(chunk)
    }

    atTab = chunk === codes.horizontalTab
    result.push(value)
  }

  return result.join('')
}

module.exports = serializeChunks
