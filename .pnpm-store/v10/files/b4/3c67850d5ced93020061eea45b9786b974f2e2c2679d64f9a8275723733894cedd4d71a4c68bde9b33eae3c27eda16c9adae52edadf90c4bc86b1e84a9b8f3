var autolinkLiteral = require('mdast-util-gfm-autolink-literal/from-markdown')
var strikethrough = require('mdast-util-gfm-strikethrough/from-markdown')
var table = require('mdast-util-gfm-table/from-markdown')
var taskListItem = require('mdast-util-gfm-task-list-item/from-markdown')

var own = {}.hasOwnProperty

module.exports = configure([
  autolinkLiteral,
  strikethrough,
  table,
  taskListItem
])

function configure(extensions) {
  var config = {transforms: [], canContainEols: []}
  var length = extensions.length
  var index = -1

  while (++index < length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left
  var right

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})
    right = extension[key]

    if (key === 'canContainEols' || key === 'transforms') {
      config[key] = [].concat(left, right)
    } else {
      Object.assign(left, right)
    }
  }
}
