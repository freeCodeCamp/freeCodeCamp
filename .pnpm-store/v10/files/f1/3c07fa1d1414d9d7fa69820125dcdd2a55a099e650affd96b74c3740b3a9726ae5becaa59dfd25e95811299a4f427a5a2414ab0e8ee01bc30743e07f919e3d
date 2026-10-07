'use strict'

var core = require('./core')
var assign = require('./constant/assign')
var basic = require('./util/format-basic')

module.exports = encodeHexadecimal

// Encode special characters in `value` as hexadecimals.
function encodeHexadecimal(value, options) {
  // Note: this file was added in a minor release, so here we can use
  // `Object.assign`.
  return core(value, assign({format: basic}, options))
}
