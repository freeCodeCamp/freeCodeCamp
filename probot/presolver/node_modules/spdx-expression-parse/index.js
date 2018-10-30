'use strict'

var scan = require('./scan')
var parse = require('./parse')

module.exports = function (source) {
  return parse(scan(source))
}
