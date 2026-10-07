/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {asciiPunctuation} from 'micromark-util-character'
import {codes, types} from 'micromark-util-symbol'

/** @type {Construct} */
export const characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  /**
   * Start of character escape.
   *
   * ```markdown
   * > | a\*b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    assert(code === codes.backslash, 'expected `\\`')
    effects.enter(types.characterEscape)
    effects.enter(types.escapeMarker)
    effects.consume(code)
    effects.exit(types.escapeMarker)
    return inside
  }

  /**
   * After `\`, at punctuation.
   *
   * ```markdown
   * > | a\*b
   *       ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    // ASCII punctuation.
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
