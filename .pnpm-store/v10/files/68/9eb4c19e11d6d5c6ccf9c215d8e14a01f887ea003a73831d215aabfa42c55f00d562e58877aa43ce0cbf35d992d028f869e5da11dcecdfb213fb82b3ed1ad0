'use strict'

var syntax = require('micromark-extension-frontmatter')
var fromMarkdown = require('mdast-util-frontmatter/from-markdown')
var toMarkdown = require('mdast-util-frontmatter/to-markdown')

module.exports = frontmatter

function frontmatter(options) {
  var data = this.data()
  add('micromarkExtensions', syntax(options))
  add('fromMarkdownExtensions', fromMarkdown(options))
  add('toMarkdownExtensions', toMarkdown(options))
  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value)
    else data[field] = [value]
  }
}
