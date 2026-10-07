'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var markdownLineEndingOrSpace = require('../character/markdown-line-ending-or-space.js')
var markdownSpace = require('../character/markdown-space.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var chunkedSplice = require('../util/chunked-splice.js')
var factorySpace = require('./factory-space.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
}

function resolveHeadingAtx(events, context) {
  var contentEnd = events.length - 2
  var contentStart = 3
  var content
  var text

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === types.whitespace) {
    contentStart += 2
  }

  // Suffix whitespace, part of the closing.
  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === types.whitespace
  ) {
    contentEnd -= 2
  }

  if (
    events[contentEnd][1].type === types.atxHeadingSequence &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === types.whitespace))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
  }

  if (contentEnd > contentStart) {
    content = {
      type: types.atxHeadingText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    }
    text = {
      type: types.chunkText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: constants.contentTypeText
    }

    chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ])
  }

  return events
}

function tokenizeHeadingAtx(effects, ok, nok) {
  var self = this
  var size = 0

  return start

  function start(code) {
    assert__default['default'](code === codes.numberSign, 'expected `#`')
    effects.enter(types.atxHeading)
    effects.enter(types.atxHeadingSequence)
    return fenceOpenInside(code)
  }

  function fenceOpenInside(code) {
    if (
      code === codes.numberSign &&
      size++ < constants.atxHeadingOpeningFenceSizeMax
    ) {
      effects.consume(code)
      return fenceOpenInside
    }

    if (code === codes.eof || markdownLineEndingOrSpace(code)) {
      effects.exit(types.atxHeadingSequence)
      return self.interrupt ? ok(code) : headingBreak(code)
    }

    return nok(code)
  }

  function headingBreak(code) {
    if (code === codes.numberSign) {
      effects.enter(types.atxHeadingSequence)
      return sequence(code)
    }

    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.atxHeading)
      return ok(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, headingBreak, types.whitespace)(code)
    }

    effects.enter(types.atxHeadingText)
    return data(code)
  }

  function sequence(code) {
    if (code === codes.numberSign) {
      effects.consume(code)
      return sequence
    }

    effects.exit(types.atxHeadingSequence)
    return headingBreak(code)
  }

  function data(code) {
    if (
      code === codes.eof ||
      code === codes.numberSign ||
      markdownLineEndingOrSpace(code)
    ) {
      effects.exit(types.atxHeadingText)
      return headingBreak(code)
    }

    effects.consume(code)
    return data
  }
}

module.exports = headingAtx
