'use strict'

var toString = require('nlcst-to-string')
var modifyChildren = require('unist-util-modify-children')

module.exports = modifyChildren(mergeAffixExceptions)

// Merge a sentence into its previous sentence, when the sentence starts with a
// comma.
function mergeAffixExceptions(child, index, parent) {
  var children = child.children
  var node
  var position
  var value
  var previousChild

  if (!children || children.length === 0 || index === 0) {
    return
  }

  position = -1

  while (children[++position]) {
    node = children[position]

    if (node.type === 'WordNode') {
      return
    }

    if (node.type === 'SymbolNode' || node.type === 'PunctuationNode') {
      value = toString(node)

      if (value !== ',' && value !== ';') {
        return
      }

      previousChild = parent.children[index - 1]

      previousChild.children = previousChild.children.concat(children)

      // Update position.
      if (previousChild.position && child.position) {
        previousChild.position.end = child.position.end
      }

      parent.children.splice(index, 1)

      // Next, iterate over the node *now* at the current position.
      return index
    }
  }
}
