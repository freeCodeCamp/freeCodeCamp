'use strict'

var core = require('./core')
var smart = require('./util/format-smart')

module.exports = escape

// Shortcut to escape special characters in HTML.
function escape(value) {
  return core(value, {
    escapeOnly: true,
    useNamedReferences: true,
    format: smart
  })
}
