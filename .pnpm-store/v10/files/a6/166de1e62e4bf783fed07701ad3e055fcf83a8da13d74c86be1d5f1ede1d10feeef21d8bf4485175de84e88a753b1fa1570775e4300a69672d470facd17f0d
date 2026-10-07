'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var markdownLineEndingOrSpace = require('../character/markdown-line-ending-or-space.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var prefixSize = require('../util/prefix-size.js')
var factorySpace = require('./factory-space.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
}

function tokenizeCodeFenced(effects, ok, nok) {
  var self = this
  var closingFenceConstruct = {tokenize: tokenizeClosingFence, partial: true}
  var initialPrefix = prefixSize(this.events, types.linePrefix)
  var sizeOpen = 0
  var marker

  return start

  function start(code) {
    assert__default['default'](
      code === codes.graveAccent || code === codes.tilde,
      'expected `` ` `` or `~`'
    )
    effects.enter(types.codeFenced)
    effects.enter(types.codeFencedFence)
    effects.enter(types.codeFencedFenceSequence)
    marker = code
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code)
      sizeOpen++
      return sequenceOpen
    }

    effects.exit(types.codeFencedFenceSequence)
    return sizeOpen < constants.codeFencedSequenceSizeMin
      ? nok(code)
      : factorySpace(effects, infoOpen, types.whitespace)(code)
  }

  function infoOpen(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter(types.codeFencedFenceInfo)
    effects.enter(types.chunkString, {contentType: constants.contentTypeString})
    return info(code)
  }

  function info(code) {
    if (code === codes.eof || markdownLineEndingOrSpace(code)) {
      effects.exit(types.chunkString)
      effects.exit(types.codeFencedFenceInfo)
      return factorySpace(effects, infoAfter, types.whitespace)(code)
    }

    if (code === codes.graveAccent && code === marker) return nok(code)
    effects.consume(code)
    return info
  }

  function infoAfter(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter(types.codeFencedFenceMeta)
    effects.enter(types.chunkString, {contentType: constants.contentTypeString})
    return meta(code)
  }

  function meta(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.chunkString)
      effects.exit(types.codeFencedFenceMeta)
      return openAfter(code)
    }

    if (code === codes.graveAccent && code === marker) return nok(code)
    effects.consume(code)
    return meta
  }

  function openAfter(code) {
    effects.exit(types.codeFencedFence)
    return self.interrupt ? ok(code) : content(code)
  }

  function content(code) {
    if (code === codes.eof) {
      return after(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      return effects.attempt(
        closingFenceConstruct,
        after,
        initialPrefix
          ? factorySpace(effects, content, types.linePrefix, initialPrefix + 1)
          : content
      )
    }

    effects.enter(types.codeFlowValue)
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.codeFlowValue)
      return content(code)
    }

    effects.consume(code)
    return contentContinue
  }

  function after(code) {
    effects.exit(types.codeFenced)
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0

    return factorySpace(
      effects,
      closingSequenceStart,
      types.linePrefix,
      this.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : constants.tabSize
    )

    function closingSequenceStart(code) {
      effects.enter(types.codeFencedFence)
      effects.enter(types.codeFencedFenceSequence)
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code)
        size++
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit(types.codeFencedFenceSequence)
      return factorySpace(effects, closingSequenceEnd, types.whitespace)(code)
    }

    function closingSequenceEnd(code) {
      if (code === codes.eof || markdownLineEnding(code)) {
        effects.exit(types.codeFencedFence)
        return ok(code)
      }

      return nok(code)
    }
  }
}

module.exports = codeFenced
