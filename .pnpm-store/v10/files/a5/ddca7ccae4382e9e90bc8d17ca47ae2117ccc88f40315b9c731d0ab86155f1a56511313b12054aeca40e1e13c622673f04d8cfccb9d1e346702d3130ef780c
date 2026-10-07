'use strict'

var toString = require('nlcst-to-string')

module.exports = tokenizerFactory

// Factory to create a tokenizer based on a given `expression`.
function tokenizerFactory(childType, expression) {
  return tokenizer

  // A function that splits.
  function tokenizer(node) {
    var children = []
    var tokens = node.children
    var type = node.type
    var length = tokens.length
    var index = -1
    var lastIndex = length - 1
    var start = 0
    var first
    var last
    var parent

    while (++index < length) {
      if (
        index === lastIndex ||
        (tokens[index].type === childType &&
          expression.test(toString(tokens[index])))
      ) {
        first = tokens[start]
        last = tokens[index]

        parent = {
          type: type,
          children: tokens.slice(start, index + 1)
        }

        if (first.position && last.position) {
          parent.position = {
            start: first.position.start,
            end: last.position.end
          }
        }

        children.push(parent)

        start = index + 1
      }
    }

    return children
  }
}
