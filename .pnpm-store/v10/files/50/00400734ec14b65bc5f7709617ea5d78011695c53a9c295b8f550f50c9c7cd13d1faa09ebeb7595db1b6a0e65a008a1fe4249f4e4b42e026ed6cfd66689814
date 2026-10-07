'use strict'

var convert = require('unist-util-is/convert')

module.exports = findAfter

function findAfter(parent, index, test) {
  var is = convert(test)
  var children
  var child
  var length

  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node')
  }

  children = parent.children
  length = children.length

  if (index && index.type) {
    index = children.indexOf(index)
  }

  if (isNaN(index) || index < 0 || index === Infinity) {
    throw new Error('Expected positive finite index or child node')
  }

  while (++index < length) {
    child = children[index]

    if (is(child, index, parent)) {
      return child
    }
  }

  return null
}
