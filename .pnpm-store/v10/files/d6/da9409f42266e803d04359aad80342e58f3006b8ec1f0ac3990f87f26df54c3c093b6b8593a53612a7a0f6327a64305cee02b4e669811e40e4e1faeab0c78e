'use strict'

var xtend = require('xtend')
var ccount = require('ccount')
var entities = require('stringify-entities')

module.exports = serializeDoctype

function serializeDoctype(ctx, node) {
  var sep = ctx.tightDoctype ? '' : ' '
  var parts = ['<!' + (ctx.upperDoctype ? 'DOCTYPE' : 'doctype')]

  if (node.name) {
    parts.push(sep, node.name)

    if (node.public != null) {
      parts.push(' public', sep, quote(ctx, node.public))
    } else if (node.system != null) {
      parts.push(' system')
    }

    if (node.system != null) {
      parts.push(sep, quote(ctx, node.system))
    }
  }

  return parts.join('') + '>'
}

function quote(ctx, value) {
  var string = String(value)
  var quote =
    ccount(string, ctx.quote) > ccount(string, ctx.alternative)
      ? ctx.alternative
      : ctx.quote

  return (
    quote +
    entities(string, xtend(ctx.entities, {subset: ['<', '&', quote]})) +
    quote
  )
}
