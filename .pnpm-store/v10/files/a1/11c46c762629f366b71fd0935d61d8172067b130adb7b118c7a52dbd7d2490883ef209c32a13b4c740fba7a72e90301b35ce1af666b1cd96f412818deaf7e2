'use strict'

module.exports = stringify

var toMarkdown = require('mdast-util-to-markdown')

function stringify(options) {
  var self = this

  this.Compiler = compile

  function compile(tree) {
    return toMarkdown(
      tree,
      Object.assign({}, self.data('settings'), options, {
        // Note: this option is not in the readme.
        // The goal is for it to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data('toMarkdownExtensions') || []
      })
    )
  }
}
