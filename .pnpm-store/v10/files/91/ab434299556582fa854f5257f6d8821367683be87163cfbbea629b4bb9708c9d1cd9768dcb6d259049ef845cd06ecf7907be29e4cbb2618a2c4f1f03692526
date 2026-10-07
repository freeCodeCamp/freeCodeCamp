'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var prefixSize = require('../util/prefix-size.js')
var subtokenize = require('../util/subtokenize.js')
var factorySpace = require('./factory-space.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

// No name because it must not be turned off.
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent,
  interruptible: true,
  lazy: true
}

var continuationConstruct = {tokenize: tokenizeContinuation, partial: true}

// Content is transparent: it’s parsed right now. That way, definitions are also
// parsed right now: before text in paragraphs (specifically, media) are parsed.
function resolveContent(events) {
  subtokenize(events)
  return events
}

function tokenizeContent(effects, ok) {
  var previous

  return start

  function start(code) {
    assert__default['default'](
      code !== codes.eof && !markdownLineEnding(code),
      'expected no eof or eol'
    )

    effects.enter(types.content)
    previous = effects.enter(types.chunkContent, {
      contentType: constants.contentTypeContent
    })
    return data(code)
  }

  function data(code) {
    if (code === codes.eof) {
      return contentEnd(code)
    }

    if (markdownLineEnding(code)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code)
    }

    // Data.
    effects.consume(code)
    return data
  }

  function contentEnd(code) {
    effects.exit(types.chunkContent)
    effects.exit(types.content)
    return ok(code)
  }

  function contentContinue(code) {
    assert__default['default'](markdownLineEnding(code), 'expected eol')
    effects.consume(code)
    effects.exit(types.chunkContent)
    previous = previous.next = effects.enter(types.chunkContent, {
      contentType: constants.contentTypeContent,
      previous: previous
    })
    return data
  }
}

function tokenizeContinuation(effects, ok, nok) {
  var self = this

  return startLookahead

  function startLookahead(code) {
    assert__default['default'](
      markdownLineEnding(code),
      'expected a line ending'
    )
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return factorySpace(effects, prefixed, types.linePrefix)
  }

  function prefixed(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return nok(code)
    }

    if (
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1 ||
      prefixSize(self.events, types.linePrefix) < constants.tabSize
    ) {
      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
    }

    return ok(code)
  }
}

module.exports = content
