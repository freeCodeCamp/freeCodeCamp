'use strict'

var modifyChildren = require('unist-util-modify-children')

module.exports = modifyChildren(removeEmptyNodes)

// Remove empty children.
function removeEmptyNodes(child, index, parent) {
  if ('children' in child && child.children.length === 0) {
    parent.children.splice(index, 1)

    // Next, iterate over the node *now* at the current position (which was the
    // next node).
    return index
  }
}
