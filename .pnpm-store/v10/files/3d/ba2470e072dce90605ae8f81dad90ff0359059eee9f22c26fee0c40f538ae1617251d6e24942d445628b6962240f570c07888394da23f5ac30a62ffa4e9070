'use strict'

module.exports = directive

var directiveText = require('./tokenize-directive-text')
var directiveLeaf = require('./tokenize-directive-leaf')
var directiveContainer = require('./tokenize-directive-container')

function directive() {
  return {
    text: {58: directiveText},
    flow: {58: [directiveContainer, directiveLeaf]}
  }
}
