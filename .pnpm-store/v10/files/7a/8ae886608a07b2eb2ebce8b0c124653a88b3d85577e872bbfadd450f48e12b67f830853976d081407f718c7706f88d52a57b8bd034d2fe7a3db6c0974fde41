'use strict'

var toString = require('nlcst-to-string')
var modifyChildren = require('unist-util-modify-children')
var expressions = require('../expressions')

module.exports = modifyChildren(mergeAffixSymbol)

// Closing or final punctuation, or terminal markers that should still be
// included in the previous sentence, even though they follow the sentence’s
// terminal marker.
var affixSymbol = expressions.affixSymbol

// Move certain punctuation following a terminal marker (thus in the next
// sentence) to the previous sentence.
function mergeAffixSymbol(child, index, parent) {
  var children = child.children
  var first
  var second
  var previous

  if (children && children.length !== 0 && index !== 0) {
    first = children[0]
    second = children[1]
    previous = parent.children[index - 1]

    if (
      (first.type === 'SymbolNode' || first.type === 'PunctuationNode') &&
      affixSymbol.test(toString(first))
    ) {
      previous.children.push(children.shift())

      // Update position.
      if (first.position && previous.position) {
        previous.position.end = first.position.end
      }

      if (second && second.position && child.position) {
        child.position.start = second.position.start
      }

      // Next, iterate over the previous node again.
      return index - 1
    }
  }
}
