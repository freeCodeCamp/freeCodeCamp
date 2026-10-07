module.exports = blockquote

var flow = require('../util/container-flow')
var indentLines = require('../util/indent-lines')

function blockquote(node, _, context) {
  var exit = context.enter('blockquote')
  var value = indentLines(flow(node, context), map)
  exit()
  return value
}

function map(line, index, blank) {
  return '>' + (blank ? '' : ' ') + line
}
