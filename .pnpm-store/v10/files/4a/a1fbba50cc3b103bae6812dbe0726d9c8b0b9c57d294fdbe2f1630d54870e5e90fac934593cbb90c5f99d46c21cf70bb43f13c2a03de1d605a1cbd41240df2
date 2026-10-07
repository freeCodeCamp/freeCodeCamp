/**
 * @import {
 *   Construct,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {factorySpace} from 'micromark-factory-space'
import {
  markdownLineEndingOrSpace,
  markdownLineEnding,
  markdownSpace
} from 'micromark-util-character'
import {splice} from 'micromark-util-chunked'
import {codes, constants, types} from 'micromark-util-symbol'

/** @type {Construct} */
export const headingAtx = {
  name: 'headingAtx',
  resolve: resolveHeadingAtx,
  tokenize: tokenizeHeadingAtx
}

/** @type {Resolver} */
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2
  let contentStart = 3
  /** @type {Token} */
  let content
  /** @type {Token} */
  let text

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === types.whitespace) {
    contentStart += 2
  }

  // Suffix whitespace, part of the closing.
  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === types.whitespace
  ) {
    contentEnd -= 2
  }

  if (
    events[contentEnd][1].type === types.atxHeadingSequence &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === types.whitespace))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
  }

  if (contentEnd > contentStart) {
    content = {
      type: types.atxHeadingText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    }
    text = {
      type: types.chunkText,
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: constants.contentTypeText
    }

    splice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ])
  }

  return events
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeHeadingAtx(effects, ok, nok) {
  let size = 0

  return start

  /**
   * Start of a heading (atx).
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse indent like `markdown-rs`.
    effects.enter(types.atxHeading)
    return before(code)
  }

  /**
   * After optional whitespace, at `#`.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    assert(code === codes.numberSign, 'expected `#`')
    effects.enter(types.atxHeadingSequence)
    return sequenceOpen(code)
  }

  /**
   * In opening sequence.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (
      code === codes.numberSign &&
      size++ < constants.atxHeadingOpeningFenceSizeMax
    ) {
      effects.consume(code)
      return sequenceOpen
    }

    // Always at least one `#`.
    if (code === codes.eof || markdownLineEndingOrSpace(code)) {
      effects.exit(types.atxHeadingSequence)
      return atBreak(code)
    }

    return nok(code)
  }

  /**
   * After something, before something else.
   *
   * ```markdown
   * > | ## aa
   *       ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === codes.numberSign) {
      effects.enter(types.atxHeadingSequence)
      return sequenceFurther(code)
    }

    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.atxHeading)
      // To do: interrupt like `markdown-rs`.
      // // Feel free to interrupt.
      // tokenizer.interrupt = false
      return ok(code)
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, types.whitespace)(code)
    }

    // To do: generate `data` tokens, add the `text` token later.
    // Needs edit map, see: `markdown.rs`.
    effects.enter(types.atxHeadingText)
    return data(code)
  }

  /**
   * In further sequence (after whitespace).
   *
   * Could be normal “visible” hashes in the heading or a final sequence.
   *
   * ```markdown
   * > | ## aa ##
   *           ^
   * ```
   *
   * @type {State}
   */
  function sequenceFurther(code) {
    if (code === codes.numberSign) {
      effects.consume(code)
      return sequenceFurther
    }

    effects.exit(types.atxHeadingSequence)
    return atBreak(code)
  }

  /**
   * In text.
   *
   * ```markdown
   * > | ## aa
   *        ^
   * ```
   *
   * @type {State}
   */
  function data(code) {
    if (
      code === codes.eof ||
      code === codes.numberSign ||
      markdownLineEndingOrSpace(code)
    ) {
      effects.exit(types.atxHeadingText)
      return atBreak(code)
    }

    effects.consume(code)
    return data
  }
}
