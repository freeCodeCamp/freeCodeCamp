/**
 * @import {Code, Effects, State, TokenizeContext, TokenType} from 'micromark-util-types'
 */

import {
  markdownLineEnding,
  unicodePunctuation,
  unicodeWhitespace
} from 'micromark-util-character'
import {codes} from 'micromark-util-symbol'

/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} type
 */
export function factoryName(effects, ok, nok, type) {
  const self = this

  return start

  /** @type {State} */
  function start(code) {
    if (
      code === codes.eof ||
      markdownLineEnding(code) ||
      unicodePunctuation(code) ||
      unicodeWhitespace(code)
    ) {
      return nok(code)
    }

    effects.enter(type)
    effects.consume(code)
    return name
  }

  /** @type {State} */
  function name(code) {
    if (
      code === codes.eof ||
      markdownLineEnding(code) ||
      unicodeWhitespace(code) ||
      (unicodePunctuation(code) &&
        code !== codes.dash &&
        code !== codes.underscore)
    ) {
      effects.exit(type)
      return self.previous === codes.dash || self.previous === codes.underscore
        ? nok(code)
        : ok(code)
    }

    effects.consume(code)
    return name
  }
}
