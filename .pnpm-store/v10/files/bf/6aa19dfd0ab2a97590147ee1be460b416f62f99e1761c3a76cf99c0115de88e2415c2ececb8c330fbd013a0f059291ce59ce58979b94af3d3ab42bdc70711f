var defaultListItem = require('mdast-util-to-markdown/lib/handle/list-item')

exports.unsafe = [{atBreak: true, character: '-', after: '[:|-]'}]

exports.handlers = {
  listItem: listItemWithTaskListItem
}

function listItemWithTaskListItem(node, parent, context) {
  var value = defaultListItem(node, parent, context)
  var head = node.children[0]

  if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check)
  }

  return value

  function check($0) {
    return $0 + '[' + (node.checked ? 'x' : ' ') + '] '
  }
}
