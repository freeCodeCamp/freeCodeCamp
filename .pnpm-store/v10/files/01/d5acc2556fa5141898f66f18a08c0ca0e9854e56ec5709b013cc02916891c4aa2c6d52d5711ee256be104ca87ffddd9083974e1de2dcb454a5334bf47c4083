var characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
}
export default characterEscape

import assert from 'assert'
import asciiPunctuation from '../character/ascii-punctuation.mjs'
import codes from '../character/codes.mjs'
import types from '../constant/types.mjs'

function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  function start(code) {
    assert(code === codes.backslash, 'expected `\\`')
    effects.enter(types.characterEscape)
    effects.enter(types.escapeMarker)
    effects.consume(code)
    effects.exit(types.escapeMarker)
    return open
  }

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter(types.characterEscapeValue)
      effects.consume(code)
      effects.exit(types.characterEscapeValue)
      effects.exit(types.characterEscape)
      return ok
    }

    return nok(code)
  }
}
