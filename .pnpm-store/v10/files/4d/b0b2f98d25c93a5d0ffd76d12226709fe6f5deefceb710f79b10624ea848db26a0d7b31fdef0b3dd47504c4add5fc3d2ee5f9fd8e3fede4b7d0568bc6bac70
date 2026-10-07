'use strict'

var toString = require('nlcst-to-string')
var modifyChildren = require('unist-util-modify-children')

module.exports = modifyChildren(mergePrefixExceptions)

// Blacklist of full stop characters that should not be treated as terminal
// sentence markers: A case-insensitive abbreviation.
var abbreviationPrefix = new RegExp(
  '^(' +
    '[0-9]{1,3}|' +
    '[a-z]|' +
    // Common Latin Abbreviations:
    // Based on: <https://en.wikipedia.org/wiki/List_of_Latin_abbreviations>.
    // Where only the abbreviations written without joining full stops,
    // but with a final full stop, were extracted.
    //
    // circa, capitulus, confer, compare, centum weight, eadem, (et) alii,
    // et cetera, floruit, foliis, ibidem, idem, nemine && contradicente,
    // opere && citato, (per) cent, (per) procurationem, (pro) tempore,
    // sic erat scriptum, (et) sequentia, statim, videlicet. */
    'al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|' +
    'fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz' +
    ')$'
)

// Merge a sentence into its next sentence, when the sentence ends with a
// certain word.
function mergePrefixExceptions(child, index, parent) {
  var children = child.children
  var period
  var node
  var next

  if (children && children.length > 1) {
    period = children[children.length - 1]

    if (period && toString(period) === '.') {
      node = children[children.length - 2]

      if (
        node &&
        node.type === 'WordNode' &&
        abbreviationPrefix.test(toString(node).toLowerCase())
      ) {
        // Merge period into abbreviation.
        node.children.push(period)
        children.pop()

        // Update position.
        if (period.position && node.position) {
          node.position.end = period.position.end
        }

        // Merge sentences.
        next = parent.children[index + 1]

        if (next) {
          child.children = children.concat(next.children)

          parent.children.splice(index + 1, 1)

          // Update position.
          if (next.position && child.position) {
            child.position.end = next.position.end
          }

          // Next, iterate over the current node again.
          return index - 1
        }
      }
    }
  }
}
