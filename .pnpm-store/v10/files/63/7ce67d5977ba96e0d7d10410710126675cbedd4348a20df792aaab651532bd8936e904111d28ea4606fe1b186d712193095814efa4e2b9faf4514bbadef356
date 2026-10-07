'use strict'

module.exports = html

var u = require('unist-builder')

// Return either a `raw` node in dangerous mode, otherwise nothing.
function html(h, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}
