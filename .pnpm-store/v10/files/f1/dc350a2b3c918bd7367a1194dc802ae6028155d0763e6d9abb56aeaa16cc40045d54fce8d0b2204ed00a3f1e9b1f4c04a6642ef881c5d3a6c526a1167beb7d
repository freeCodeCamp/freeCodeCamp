'use strict'

var toHast = require('mdast-util-to-hast')
var toHtml = require('hast-util-to-html')
var sanitize = require('hast-util-sanitize')

module.exports = plugin

function plugin(options) {
  var settings = Object.assign({}, options || {})
  let clean

  if (typeof settings.sanitize === 'boolean') {
    clean = settings.sanitize
    settings.sanitize = undefined
  }

  if (typeof clean !== 'boolean') {
    clean = true
  }

  this.Compiler = compiler

  function compiler(node, file) {
    var root = node && node.type && node.type === 'root'
    var hast = toHast(node, {
      allowDangerousHtml: !clean,
      handlers: settings.handlers
    })
    var result

    if (file.extname) {
      file.extname = '.html'
    }

    if (clean) {
      hast = sanitize(hast, settings.sanitize)
    }

    result = toHtml(
      hast,
      Object.assign({}, settings, {allowDangerousHtml: !clean})
    )

    // Add an eof eol.
    if (root && result && /[^\r\n]/.test(result.charAt(result.length - 1))) {
      result += '\n'
    }

    return result
  }
}
