'use strict'

var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var chunkedSplice = require('../util/chunked-splice.js')
var prefixSize = require('../util/prefix-size.js')
var factorySpace = require('./factory-space.js')

var codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented,
  resolve: resolveCodeIndented
}

var indentedContentConstruct = {
  tokenize: tokenizeIndentedContent,
  partial: true
}

function resolveCodeIndented(events, context) {
  var code = {
    type: types.codeIndented,
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  }

  chunkedSplice(events, 0, 0, [['enter', code, context]])
  chunkedSplice(events, events.length, 0, [['exit', code, context]])

  return events
}

function tokenizeCodeIndented(effects, ok, nok) {
  return effects.attempt(indentedContentConstruct, afterPrefix, nok)

  function afterPrefix(code) {
    if (code === codes.eof) {
      return ok(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code)
    }

    effects.enter(types.codeFlowValue)
    return content(code)
  }

  function content(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.codeFlowValue)
      return afterPrefix(code)
    }

    effects.consume(code)
    return content
  }
}

function tokenizeIndentedContent(effects, ok, nok) {
  var self = this

  return factorySpace(
    effects,
    afterPrefix,
    types.linePrefix,
    constants.tabSize + 1
  )

  function afterPrefix(code) {
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      return factorySpace(
        effects,
        afterPrefix,
        types.linePrefix,
        constants.tabSize + 1
      )
    }

    return prefixSize(self.events, types.linePrefix) < constants.tabSize
      ? nok(code)
      : ok(code)
  }
}

module.exports = codeIndented
