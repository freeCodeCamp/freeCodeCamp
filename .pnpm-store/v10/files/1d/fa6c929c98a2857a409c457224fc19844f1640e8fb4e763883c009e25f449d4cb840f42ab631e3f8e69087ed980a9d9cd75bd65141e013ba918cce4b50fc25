'use strict'

var xtend = require('xtend')
var entities = require('stringify-entities')

module.exports = serializeText

function serializeText(ctx, node, index, parent) {
  // Check if content of `node` should be escaped.
  return parent && (parent.tagName === 'script' || parent.tagName === 'style')
    ? node.value
    : entities(node.value, xtend(ctx.entities, {subset: ['<', '&']}))
}
