'use strict'

var tokenizer = require('./tokenizer')

module.exports = parserFactory

// Construct a parser based on `options`.
function parserFactory(options) {
  var type = options.type
  var tokenizerProperty = options.tokenizer
  var delimiter = options.delimiter
  var tokenize = delimiter && tokenizer(options.delimiterType, delimiter)

  return parser

  function parser(value) {
    var children = this[tokenizerProperty](value)

    return {
      type: type,
      children: tokenize ? tokenize(children) : children
    }
  }
}
