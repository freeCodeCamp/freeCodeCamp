'use strict'

var toString = require('nlcst-to-string')
var modifyChildren = require('unist-util-modify-children')
var expressions = require('../expressions')

module.exports = modifyChildren(mergeInitialLowerCaseLetterSentences)

// Initial lowercase letter.
var lowerInitial = expressions.lowerInitial

// Merge a sentence into its previous sentence, when the sentence starts with a
// lower case letter.
function mergeInitialLowerCaseLetterSentences(child, index, parent) {
  var children = child.children
  var position
  var node
  var siblings
  var previous

  if (children && children.length !== 0 && index !== 0) {
    position = -1

    while (children[++position]) {
      node = children[position]

      if (node.type === 'WordNode') {
        if (!lowerInitial.test(toString(node))) {
          return
        }

        siblings = parent.children

        previous = siblings[index - 1]

        previous.children = previous.children.concat(children)

        siblings.splice(index, 1)

        // Update position.
        if (previous.position && child.position) {
          previous.position.end = child.position.end
        }

        // Next, iterate over the node *now* at the current position.
        return index
      }

      if (node.type === 'SymbolNode' || node.type === 'PunctuationNode') {
        return
      }
    }
  }
}
