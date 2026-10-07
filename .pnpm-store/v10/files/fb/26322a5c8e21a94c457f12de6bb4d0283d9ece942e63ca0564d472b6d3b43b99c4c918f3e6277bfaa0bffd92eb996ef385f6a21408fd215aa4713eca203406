/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {
  asciiAlphanumeric,
  asciiAlpha,
  asciiAtext,
  asciiControl
} from 'micromark-util-character'
import {codes, constants, types} from 'micromark-util-symbol'

/** @type {Construct} */
export const autolink = {name: 'autolink', tokenize: tokenizeAutolink}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeAutolink(effects, ok, nok) {
  let size = 0

  return start

  /**
   * Start of an autolink.
   *
   * ```markdown
   * > | a<https://example.com>b
   *      ^
   * > | a<user@example.com>b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    assert(code === codes.lessThan, 'expected `<`')
    effects.enter(types.autolink)
    effects.enter(types.autolinkMarker)
    effects.consume(code)
    effects.exit(types.autolinkMarker)
    effects.enter(types.autolinkProtocol)
    return open
  }

  /**
   * After `<`, at protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *       ^
   * > | a<user@example.com>b
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return schemeOrEmailAtext
    }

    if (code === codes.atSign) {
      return nok(code)
    }

    return emailAtext(code)
  }

  /**
   * At second byte of protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeOrEmailAtext(code) {
    // ASCII alphanumeric and `+`, `-`, and `.`.
    if (
      code === codes.plusSign ||
      code === codes.dash ||
      code === codes.dot ||
      asciiAlphanumeric(code)
    ) {
      // Count the previous alphabetical from `open` too.
      size = 1
      return schemeInsideOrEmailAtext(code)
    }

    return emailAtext(code)
  }

  /**
   * In ambiguous protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeInsideOrEmailAtext(code) {
    if (code === codes.colon) {
      effects.consume(code)
      size = 0
      return urlInside
    }

    // ASCII alphanumeric and `+`, `-`, and `.`.
    if (
      (code === codes.plusSign ||
        code === codes.dash ||
        code === codes.dot ||
        asciiAlphanumeric(code)) &&
      size++ < constants.autolinkSchemeSizeMax
    ) {
      effects.consume(code)
      return schemeInsideOrEmailAtext
    }

    size = 0
    return emailAtext(code)
  }

  /**
   * After protocol, in URL.
   *
   * ```markdown
   * > | a<https://example.com>b
   *             ^
   * ```
   *
   * @type {State}
   */
  function urlInside(code) {
    if (code === codes.greaterThan) {
      effects.exit(types.autolinkProtocol)
      effects.enter(types.autolinkMarker)
      effects.consume(code)
      effects.exit(types.autolinkMarker)
      effects.exit(types.autolink)
      return ok
    }

    // ASCII control, space, or `<`.
    if (
      code === codes.eof ||
      code === codes.space ||
      code === codes.lessThan ||
      asciiControl(code)
    ) {
      return nok(code)
    }

    effects.consume(code)
    return urlInside
  }

  /**
   * In email atext.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *              ^
   * ```
   *
   * @type {State}
   */
  function emailAtext(code) {
    if (code === codes.atSign) {
      effects.consume(code)
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code)
      return emailAtext
    }

    return nok(code)
  }

  /**
   * In label, after at-sign or dot.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                 ^       ^
   * ```
   *
   * @type {State}
   */
  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  /**
   * In label, where `.` and `>` are allowed.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                   ^
   * ```
   *
   * @type {State}
   */
  function emailLabel(code) {
    if (code === codes.dot) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (code === codes.greaterThan) {
      // Exit, then change the token type.
      effects.exit(types.autolinkProtocol).type = types.autolinkEmail
      effects.enter(types.autolinkMarker)
      effects.consume(code)
      effects.exit(types.autolinkMarker)
      effects.exit(types.autolink)
      return ok
    }

    return emailValue(code)
  }

  /**
   * In label, where `.` and `>` are *not* allowed.
   *
   * Though, this is also used in `emailLabel` to parse other values.
   *
   * ```markdown
   * > | a<user.name@ex-ample.com>b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function emailValue(code) {
    // ASCII alphanumeric or `-`.
    if (
      (code === codes.dash || asciiAlphanumeric(code)) &&
      size++ < constants.autolinkDomainSizeMax
    ) {
      const next = code === codes.dash ? emailValue : emailLabel
      effects.consume(code)
      return next
    }

    return nok(code)
  }
}
