'use strict'

module.exports = code

var u = require('unist-builder')

function code(h, node) {
  var value = node.value ? node.value + '\n' : ''
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  var props = {}

  if (lang) {
    props.className = ['language-' + lang]
  }

  return h(node.position, 'pre', [h(node, 'code', props, [u('text', value)])])
}
