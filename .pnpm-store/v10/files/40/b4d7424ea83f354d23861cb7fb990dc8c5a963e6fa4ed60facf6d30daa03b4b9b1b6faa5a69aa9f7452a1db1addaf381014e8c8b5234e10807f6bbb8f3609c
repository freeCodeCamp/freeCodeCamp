'use strict'

var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var types = require('../constant/types.js')
var factorySpace = require('./factory-space.js')

var partialBlankLine = {
  tokenize: tokenizePartialBlankLine,
  partial: true
}

function tokenizePartialBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, types.linePrefix)

  function afterWhitespace(code) {
    return code === codes.eof || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

module.exports = partialBlankLine
