export default whitespaceFactory

import markdownLineEnding from '../character/markdown-line-ending.mjs'
import markdownSpace from '../character/markdown-space.mjs'
import types from '../constant/types.mjs'
import spaceFactory from './factory-space.mjs'

function whitespaceFactory(effects, ok) {
  var seen

  return start

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      seen = true
      return start
    }

    if (markdownSpace(code)) {
      return spaceFactory(
        effects,
        start,
        seen ? types.linePrefix : types.lineSuffix
      )(code)
    }

    return ok(code)
  }
}
