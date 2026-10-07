'use strict'

var convert = require('./convert')

module.exports = isElement

isElement.convert = convert

// Check if if `node` is an `element` and whether it passes the given test.
function isElement(node, test, index, parent, context) {
  var hasParent = parent !== null && parent !== undefined
  var hasIndex = index !== null && index !== undefined
  var check = convert(test)

  if (
    hasIndex &&
    (typeof index !== 'number' || index < 0 || index === Infinity)
  ) {
    throw new Error('Expected positive finite index for child node')
  }

  if (hasParent && (!parent.type || !parent.children)) {
    throw new Error('Expected parent node')
  }

  if (!node || !node.type || typeof node.type !== 'string') {
    return false
  }

  if (hasParent !== hasIndex) {
    throw new Error('Expected both parent and index')
  }

  return check.call(context, node, index, parent)
}
