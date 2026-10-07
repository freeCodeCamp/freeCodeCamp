export var tokenize = initializeFlow

import assert from 'assert'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import types from '../constant/types.mjs'
import content from '../tokenize/content.mjs'
import spaceFactory from '../tokenize/factory-space.mjs'
import blank from '../tokenize/partial-blank-line.mjs'

function initializeFlow(effects) {
  var self = this
  var initial = effects.attempt(
    // Try to parse a blank line.
    blank,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      spaceFactory(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        types.linePrefix
      )
    )
  )

  return initial

  function atBlankEnding(code) {
    assert(
      code === codes.eof || markdownLineEnding(code),
      'expected eol or eof'
    )

    if (code === codes.eof) {
      effects.consume(code)
      return
    }

    effects.enter(types.lineEndingBlank)
    effects.consume(code)
    effects.exit(types.lineEndingBlank)
    self.currentConstruct = undefined
    return initial
  }

  function afterConstruct(code) {
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
    self.currentConstruct = undefined
    return initial
  }
}
