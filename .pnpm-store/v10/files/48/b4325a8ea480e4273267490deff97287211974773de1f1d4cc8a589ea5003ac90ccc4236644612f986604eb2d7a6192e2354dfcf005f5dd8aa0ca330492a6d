/**
 * @import {Code, Effects, State, TokenizeContext, TokenType} from 'micromark-util-types'
 */

import { markdownLineEnding, unicodePunctuation, unicodeWhitespace } from 'micromark-util-character';
/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} type
 */
export function factoryName(effects, ok, nok, type) {
  const self = this;
  return start;

  /** @type {State} */
  function start(code) {
    if (code === null || markdownLineEnding(code) || unicodePunctuation(code) || unicodeWhitespace(code)) {
      return nok(code);
    }
    effects.enter(type);
    effects.consume(code);
    return name;
  }

  /** @type {State} */
  function name(code) {
    if (code === null || markdownLineEnding(code) || unicodeWhitespace(code) || unicodePunctuation(code) && code !== 45 && code !== 95) {
      effects.exit(type);
      return self.previous === 45 || self.previous === 95 ? nok(code) : ok(code);
    }
    effects.consume(code);
    return name;
  }
}