export var tokenize = initializeContent

import assert from 'assert'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import spaceFactory from '../tokenize/factory-space.mjs'

function initializeContent(effects) {
  var contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  )
  var previous

  return contentStart

  function afterContentStartConstruct(code) {
    assert(
      code === codes.eof || markdownLineEnding(code),
      'expected eol or eof'
    )

    if (code === codes.eof) {
      effects.consume(code)
      return
    }

    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return spaceFactory(effects, contentStart, types.linePrefix)
  }

  function paragraphInitial(code) {
    assert(
      code !== codes.eof && !markdownLineEnding(code),
      'expected anything other than a line ending or EOF'
    )
    effects.enter(types.paragraph)
    return lineStart(code)
  }

  function lineStart(code) {
    var token = effects.enter(types.chunkText, {
      contentType: constants.contentTypeText,
      previous: previous
    })

    if (previous) {
      previous.next = token
    }

    previous = token

    return data(code)
  }

  function data(code) {
    if (code === codes.eof) {
      effects.exit(types.chunkText)
      effects.exit(types.paragraph)
      effects.consume(code)
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit(types.chunkText)
      return lineStart
    }

    // Data.
    effects.consume(code)
    return data
  }
}
