module.exports = listItem

var repeat = require('repeat-string')
var checkBullet = require('../util/check-bullet')
var checkListItemIndent = require('../util/check-list-item-indent')
var flow = require('../util/container-flow')
var indentLines = require('../util/indent-lines')

function listItem(node, parent, context) {
  var bullet = checkBullet(context)
  var listItemIndent = checkListItemIndent(context)
  var size
  var value
  var exit

  if (parent && parent.ordered) {
    bullet =
      (parent.start > -1 ? parent.start : 1) +
      (context.options.incrementListMarker === false
        ? 0
        : parent.children.indexOf(node)) +
      '.'
  }

  size = bullet.length + 1

  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' && ((parent && parent.spread) || node.spread))
  ) {
    size = Math.ceil(size / 4) * 4
  }

  exit = context.enter('listItem')
  value = indentLines(flow(node, context), map)
  exit()

  return value

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : repeat(' ', size)) + line
    }

    return (blank ? bullet : bullet + repeat(' ', size - bullet.length)) + line
  }
}
