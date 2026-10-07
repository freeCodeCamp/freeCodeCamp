'use strict'

module.exports = code

var u = require('unist-builder')

function code(h, node) {
  var value = node.value ? node.value + '\n' : ''
  // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  var props = {}
  var code

  if (lang) {
    props.className = ['language-' + lang]
  }

  code = h(node, 'code', props, [u('text', value)])

  if (node.meta) {
    code.data = {meta: node.meta}
  }

  return h(node.position, 'pre', [code])
}
