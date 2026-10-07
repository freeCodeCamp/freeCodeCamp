'use strict'

var toString = require('nlcst-to-string')
var modifyChildren = require('unist-util-modify-children')
var expressions = require('../expressions')

module.exports = modifyChildren(mergeInnerWordSymbol)

// Symbols part of surrounding words.
var wordSymbolInner = expressions.wordSymbolInner

// Merge words joined by certain punctuation marks.
function mergeInnerWordSymbol(child, index, parent) {
  var siblings
  var sibling
  var previous
  var last
  var position
  var tokens
  var queue

  if (
    index !== 0 &&
    (child.type === 'SymbolNode' || child.type === 'PunctuationNode')
  ) {
    siblings = parent.children
    previous = siblings[index - 1]

    if (previous && previous.type === 'WordNode') {
      position = index - 1

      tokens = []
      queue = []

      // -   If a token which is neither word nor inner word symbol is found,
      //     the loop is broken
      // -   If an inner word symbol is found,  it’s queued
      // -   If a word is found, it’s queued (and the queue stored and emptied)
      while (siblings[++position]) {
        sibling = siblings[position]

        if (sibling.type === 'WordNode') {
          tokens = tokens.concat(queue, sibling.children)

          queue = []
        } else if (
          (sibling.type === 'SymbolNode' ||
            sibling.type === 'PunctuationNode') &&
          wordSymbolInner.test(toString(sibling))
        ) {
          queue.push(sibling)
        } else {
          break
        }
      }

      if (tokens.length !== 0) {
        // If there is a queue, remove its length from `position`.
        if (queue.length !== 0) {
          position -= queue.length
        }

        // Remove every (one or more) inner-word punctuation marks and children
        // of words.
        siblings.splice(index, position - index)

        // Add all found tokens to `prev`s children.
        previous.children = previous.children.concat(tokens)

        last = tokens[tokens.length - 1]

        // Update position.
        if (previous.position && last.position) {
          previous.position.end = last.position.end
        }

        // Next, iterate over the node *now* at the current position.
        return index
      }
    }
  }
}
