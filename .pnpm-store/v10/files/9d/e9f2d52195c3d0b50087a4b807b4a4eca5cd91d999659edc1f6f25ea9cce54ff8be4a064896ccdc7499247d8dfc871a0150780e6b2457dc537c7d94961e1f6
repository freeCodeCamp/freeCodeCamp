'use strict'

var xtend = require('xtend')
var entities = require('stringify-entities')

module.exports = serializeComment

function serializeComment(ctx, node) {
  // See: <https://html.spec.whatwg.org/multipage/syntax.html#comments>
  return ctx.bogusComments
    ? '<?' + entities(node.value, xtend(ctx.entities, {subset: ['>']})) + '>'
    : '<!--' + node.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, encode) + '-->'

  function encode($0) {
    return entities($0, xtend(ctx.entities, {subset: ['<', '>']}))
  }
}
