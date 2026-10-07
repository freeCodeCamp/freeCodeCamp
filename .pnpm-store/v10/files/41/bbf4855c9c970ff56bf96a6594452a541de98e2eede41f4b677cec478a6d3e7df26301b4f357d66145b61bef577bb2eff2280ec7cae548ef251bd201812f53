'use strict'

var text = require('./text')

module.exports = serializeRaw

function serializeRaw(ctx, node) {
  return ctx.dangerous ? node.value : text(ctx, node)
}
