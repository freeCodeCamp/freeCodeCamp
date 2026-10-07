'use strict'

var convert = require('unist-util-is/convert')

module.exports = remove

function remove(tree, options, test) {
  var is = convert(test || options)
  var cascade = options.cascade == null ? true : options.cascade

  return preorder(tree, null, null)

  // Check and remove nodes recursively in preorder.
  // For each composite node, modify its children array in-place.
  function preorder(node, index, parent) {
    var children = node.children
    var childIndex = -1
    var position = 0

    if (is(node, index, parent)) {
      return null
    }

    if (children && children.length) {
      // Move all living children to the beginning of the children array.
      while (++childIndex < children.length) {
        if (preorder(children[childIndex], childIndex, node)) {
          children[position++] = children[childIndex]
        }
      }

      // Cascade delete.
      if (cascade && !position) {
        return null
      }

      // Drop other nodes.
      children.length = position
    }

    return node
  }
}
