/**
 * @import {Code, Effects, State, Token, TokenType} from 'micromark-util-types'
 */

import { markdownLineEnding } from 'micromark-util-character';
// This is a fork of:
// <https://github.com/micromark/micromark/tree/main/packages/micromark-factory-label>
// to allow empty labels, balanced brackets (such as for nested directives),
// text instead of strings, and optionally disallows EOLs.

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} type
 * @param {TokenType} markerType
 * @param {TokenType} stringType
 * @param {boolean | undefined} [disallowEol=false]
 */
export function factoryLabel(effects, ok, nok, type, markerType, stringType, disallowEol) {
  let size = 0;
  let balance = 0;
  /** @type {Token | undefined} */
  let previous;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return afterStart;
  }

  /** @type {State} */
  function afterStart(code) {
    if (code === 93) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return lineStart(code);
  }

  /** @type {State} */
  function lineStart(code) {
    if (code === 93 && !balance) {
      return atClosingBrace(code);
    }
    const token = effects.enter("chunkText", {
      _contentTypeTextTrailing: true,
      contentType: "text",
      previous
    });
    if (previous) previous.next = token;
    previous = token;
    return data(code);
  }

  /** @type {State} */
  function data(code) {
    if (code === null || size > 999) {
      return nok(code);
    }
    if (code === 91 && ++balance > 32) {
      return nok(code);
    }
    if (code === 93 && !balance--) {
      effects.exit("chunkText");
      return atClosingBrace(code);
    }
    if (markdownLineEnding(code)) {
      if (disallowEol) {
        return nok(code);
      }
      effects.consume(code);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code);
    return code === 92 ? dataEscape : data;
  }

  /** @type {State} */
  function dataEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return data;
    }
    return data(code);
  }

  /** @type {State} */
  function atClosingBrace(code) {
    effects.exit(stringType);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.exit(type);
    return ok;
  }
}