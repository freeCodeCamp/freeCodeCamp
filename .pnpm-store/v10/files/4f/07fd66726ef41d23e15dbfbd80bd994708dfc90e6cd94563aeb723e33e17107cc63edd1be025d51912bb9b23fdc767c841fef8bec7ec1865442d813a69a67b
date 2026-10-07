// No name because it must not be turned off.
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent,
  interruptible: true,
  lazy: true
}
export default content

import assert from 'assert'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import prefixSize from '../util/prefix-size.mjs'
import subtokenize from '../util/subtokenize.mjs'
import spaceFactory from './factory-space.mjs'

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
    assert(
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
    assert(markdownLineEnding(code), 'expected eol')
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
    assert(markdownLineEnding(code), 'expected a line ending')
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return spaceFactory(effects, prefixed, types.linePrefix)
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
