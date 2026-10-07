var thematicBreak = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
}
export default thematicBreak

import assert from 'assert'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import markdownSpace from '../character/markdown-space.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import spaceFactory from './factory-space.mjs'

function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0
  var marker

  return start

  function start(code) {
    assert(
      code === codes.asterisk ||
        code === codes.dash ||
        code === codes.underscore,
      'expected `*`, `-`, or `_`'
    )

    effects.enter(types.thematicBreak)
    marker = code
    return atBreak(code)
  }

  function atBreak(code) {
    if (code === marker) {
      effects.enter(types.thematicBreakSequence)
      return sequence(code)
    }

    if (markdownSpace(code)) {
      return spaceFactory(effects, atBreak, types.whitespace)(code)
    }

    if (
      size < constants.thematicBreakMarkerCountMin ||
      (code !== codes.eof && !markdownLineEnding(code))
    ) {
      return nok(code)
    }

    effects.exit(types.thematicBreak)
    return ok(code)
  }

  function sequence(code) {
    if (code === marker) {
      effects.consume(code)
      size++
      return sequence
    }

    effects.exit(types.thematicBreakSequence)
    return atBreak(code)
  }
}
