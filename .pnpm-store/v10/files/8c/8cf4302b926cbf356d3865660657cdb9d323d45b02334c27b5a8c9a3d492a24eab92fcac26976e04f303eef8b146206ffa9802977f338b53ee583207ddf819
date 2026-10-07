var headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
}
export default headingAtx

import assert from 'assert'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import markdownLineEndingOrSpace from '../character/markdown-line-ending-or-space.mjs'
import markdownSpace from '../character/markdown-space.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import chunkedSplice from '../util/chunked-splice.mjs'
import spaceFactory from './factory-space.mjs'

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
    assert(code === codes.numberSign, 'expected `#`')
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
      return spaceFactory(effects, headingBreak, types.whitespace)(code)
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
