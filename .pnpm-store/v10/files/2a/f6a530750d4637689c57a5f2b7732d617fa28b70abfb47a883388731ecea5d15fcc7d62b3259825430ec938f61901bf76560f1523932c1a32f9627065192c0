'use strict'

module.exports = serialize

var handlers = {
  comment: require('./comment'),
  doctype: require('./doctype'),
  element: require('./element'),
  raw: require('./raw'),
  root: require('./all'),
  text: require('./text')
}

var own = {}.hasOwnProperty

function serialize(ctx, node, index, parent) {
  if (!node || !node.type) {
    throw new Error('Expected node, not `' + node + '`')
  }

  if (!own.call(handlers, node.type)) {
    throw new Error('Cannot compile unknown node `' + node.type + '`')
  }

  return handlers[node.type](ctx, node, index, parent)
}
