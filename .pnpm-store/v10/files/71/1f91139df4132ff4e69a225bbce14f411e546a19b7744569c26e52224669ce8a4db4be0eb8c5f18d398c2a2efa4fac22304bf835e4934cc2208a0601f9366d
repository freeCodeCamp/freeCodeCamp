var autolinkLiteral = require('mdast-util-gfm-autolink-literal/to-markdown')
var strikethrough = require('mdast-util-gfm-strikethrough/to-markdown')
var table = require('mdast-util-gfm-table/to-markdown')
var taskListItem = require('mdast-util-gfm-task-list-item/to-markdown')
var configure = require('mdast-util-to-markdown/lib/configure')

module.exports = toMarkdown

function toMarkdown(options) {
  var config = configure(
    {handlers: {}, join: [], unsafe: [], options: {}},
    {
      extensions: [autolinkLiteral, strikethrough, table(options), taskListItem]
    }
  )

  return Object.assign(config.options, {
    handlers: config.handlers,
    join: config.join,
    unsafe: config.unsafe
  })
}
