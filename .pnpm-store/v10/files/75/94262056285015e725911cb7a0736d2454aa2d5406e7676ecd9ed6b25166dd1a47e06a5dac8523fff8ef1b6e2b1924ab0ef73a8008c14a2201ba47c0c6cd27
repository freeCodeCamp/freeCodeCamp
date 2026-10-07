'use strict'

var convert = require('unist-util-is/convert')
var whiteSpace = require('hast-util-whitespace')

module.exports = whiteSpaceStart

var isText = convert('text')

// Check if `node` starts with white-space.
function whiteSpaceStart(node) {
  return isText(node) && whiteSpace(node.value.charAt(0))
}
