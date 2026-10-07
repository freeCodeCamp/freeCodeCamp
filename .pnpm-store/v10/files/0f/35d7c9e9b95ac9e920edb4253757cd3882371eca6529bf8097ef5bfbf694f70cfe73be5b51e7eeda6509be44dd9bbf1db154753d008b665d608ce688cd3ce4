'use strict'

module.exports = inlineCode

var u = require('unist-builder')

function inlineCode(h, node) {
  var value = node.value.replace(/\r?\n|\r/g, ' ')
  return h(node, 'code', [u('text', value)])
}
