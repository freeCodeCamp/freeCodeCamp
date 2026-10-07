var phrasing = require('mdast-util-to-markdown/lib/util/container-phrasing')
var defaultInlineCode = require('mdast-util-to-markdown/lib/handle/inline-code')
var markdownTable = require('markdown-table')

module.exports = toMarkdown

function toMarkdown(options) {
  var settings = options || {}
  var padding = settings.tableCellPadding
  var alignDelimiters = settings.tablePipeAlign
  var stringLength = settings.stringLength
  var around = padding ? ' ' : '|'

  return {
    unsafe: [
      {character: '\r', inConstruct: 'tableCell'},
      {character: '\n', inConstruct: 'tableCell'},
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      {atBreak: true, character: '|', after: '[\t :-]'},
      // A pipe in a cell must be encoded.
      {character: '|', inConstruct: 'tableCell'},
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      {atBreak: true, character: ':', after: '-'},
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      {atBreak: true, character: '-', after: '[:|-]'}
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  }

  function handleTable(node, _, context) {
    return serializeData(handleTableAsData(node, context), node.align)
  }

  // This function isn’t really used normally, because we handle rows at the
  // table level.
  // But, if someone passes in a table row, this ensures we make somewhat sense.
  function handleTableRow(node, _, context) {
    var row = handleTableRowAsData(node, context)
    // `markdown-table` will always add an align row
    var value = serializeData([row])
    return value.slice(0, value.indexOf('\n'))
  }

  function handleTableCell(node, _, context) {
    var exit = context.enter('tableCell')
    var value = phrasing(node, context, {before: around, after: around})
    exit()
    return value
  }

  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align: align,
      alignDelimiters: alignDelimiters,
      padding: padding,
      stringLength: stringLength
    })
  }

  function handleTableAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('table')

    while (++index < length) {
      result[index] = handleTableRowAsData(children[index], context)
    }

    subexit()

    return result
  }

  function handleTableRowAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('tableRow')

    while (++index < length) {
      result[index] = handleTableCell(children[index], node, context)
    }

    subexit()

    return result
  }

  function inlineCodeWithTable(node, parent, context) {
    var value = defaultInlineCode(node, parent, context)

    if (context.stack.indexOf('tableCell') !== -1) {
      value = value.replace(/\|/g, '\\$&')
    }

    return value
  }
}
