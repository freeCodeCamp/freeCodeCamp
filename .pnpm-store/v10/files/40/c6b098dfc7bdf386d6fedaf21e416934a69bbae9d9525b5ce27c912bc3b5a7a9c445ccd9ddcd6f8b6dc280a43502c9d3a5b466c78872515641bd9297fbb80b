'use strict'

module.exports = nlcstToString

// Stringify one nlcst node or list of nodes.
function nlcstToString(node, separator) {
  var sep = separator || ''
  var values
  var length
  var children

  if (!node || (!('length' in node) && !node.type)) {
    throw new Error('Expected node, not `' + node + '`')
  }

  if (typeof node.value === 'string') {
    return node.value
  }

  children = 'length' in node ? node : node.children
  length = children.length

  // Shortcut: This is pretty common, and a small performance win.
  if (length === 1 && 'value' in children[0]) {
    return children[0].value
  }

  values = []

  while (length--) {
    values[length] = nlcstToString(children[length], sep)
  }

  return values.join(sep)
}
