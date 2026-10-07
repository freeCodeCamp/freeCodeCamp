module.exports = formatHeadingAsSetext

var toString = require('mdast-util-to-string')

function formatHeadingAsSetext(node, context) {
  return (
    context.options.setext && (!node.depth || node.depth < 3) && toString(node)
  )
}
