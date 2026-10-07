'use strict'

module.exports = blockquote

var wrap = require('../wrap')
var all = require('../all')

function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}
