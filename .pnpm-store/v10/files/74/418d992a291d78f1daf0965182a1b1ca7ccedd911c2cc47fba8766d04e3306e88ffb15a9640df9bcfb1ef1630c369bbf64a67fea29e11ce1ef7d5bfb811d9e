var hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
}
export default hardBreakEscape

import assert from 'assert'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import types from '../constant/types.mjs'

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  function start(code) {
    assert(code === codes.backslash, 'expected `\\`')
    effects.enter(types.hardBreakEscape)
    effects.enter(types.escapeMarker)
    effects.consume(code)
    return open
  }

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit(types.escapeMarker)
      effects.exit(types.hardBreakEscape)
      return ok(code)
    }

    return nok(code)
  }
}
