'use strict'

var toString = require('nlcst-to-string')
var modifyChildren = require('unist-util-modify-children')

module.exports = modifyChildren(mergeFinalWordSymbol)

// Merge certain punctuation marks into their preceding words.
function mergeFinalWordSymbol(child, index, parent) {
  var children
  var previous
  var next

  if (
    index !== 0 &&
    (child.type === 'SymbolNode' || child.type === 'PunctuationNode') &&
    toString(child) === '-'
  ) {
    children = parent.children

    previous = children[index - 1]
    next = children[index + 1]

    if (
      (!next || next.type !== 'WordNode') &&
      previous &&
      previous.type === 'WordNode'
    ) {
      // Remove `child` from parent.
      children.splice(index, 1)

      // Add the punctuation mark at the end of the previous node.
      previous.children.push(child)

      // Update position.
      if (previous.position && child.position) {
        previous.position.end = child.position.end
      }

      // Next, iterate over the node *now* at the current position (which was
      // the next node).
      return index
    }
  }
}
