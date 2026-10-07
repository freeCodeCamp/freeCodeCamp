'use strict'

var codes = require('../character/codes.js')
var markdownSpace = require('../character/markdown-space.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var factorySpace = require('./factory-space.js')

var blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {tokenize: tokenizeBlockQuoteContinuation},
  exit: exit
}

function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    if (code === codes.greaterThan) {
      if (!self.containerState.open) {
        effects.enter(types.blockQuote, {_container: true})
        self.containerState.open = true
      }

      effects.enter(types.blockQuotePrefix)
      effects.enter(types.blockQuoteMarker)
      effects.consume(code)
      effects.exit(types.blockQuoteMarker)
      return after
    }

    return nok(code)
  }

  function after(code) {
    if (markdownSpace(code)) {
      effects.enter(types.blockQuotePrefixWhitespace)
      effects.consume(code)
      effects.exit(types.blockQuotePrefixWhitespace)
      effects.exit(types.blockQuotePrefix)
      return ok
    }

    effects.exit(types.blockQuotePrefix)
    return ok(code)
  }
}

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(blockQuote, ok, nok),
    types.linePrefix,
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : constants.tabSize
  )
}

function exit(effects) {
  effects.exit(types.blockQuote)
}

module.exports = blockQuote
