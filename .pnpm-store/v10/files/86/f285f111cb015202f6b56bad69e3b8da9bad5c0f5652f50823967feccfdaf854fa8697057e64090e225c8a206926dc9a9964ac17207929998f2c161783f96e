var blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {tokenize: tokenizeBlockQuoteContinuation},
  exit: exit
}
export default blockQuote

import codes from '../character/codes.mjs'
import markdownSpace from '../character/markdown-space.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import spaceFactory from './factory-space.mjs'

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
  return spaceFactory(
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
