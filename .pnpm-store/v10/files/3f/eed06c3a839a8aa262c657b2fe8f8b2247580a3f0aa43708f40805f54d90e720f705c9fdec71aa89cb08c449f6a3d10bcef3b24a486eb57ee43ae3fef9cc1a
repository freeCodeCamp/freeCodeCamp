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
import {markdownLineEnding} from 'micromark-util-character'
import {subtokenize} from 'micromark-util-subtokenize'
import {codes, constants, types} from 'micromark-util-symbol'

/**
 * No name because it must not be turned off.
 * @type {Construct}
 */
export const content = {resolve: resolveContent, tokenize: tokenizeContent}

/** @type {Construct} */
const continuationConstruct = {partial: true, tokenize: tokenizeContinuation}

/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */
function resolveContent(events) {
  subtokenize(events)
  return events
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeContent(effects, ok) {
  /** @type {Token | undefined} */
  let previous

  return chunkStart

  /**
   * Before a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^
   * ```
   *
   * @type {State}
   */
  function chunkStart(code) {
    assert(
      code !== codes.eof && !markdownLineEnding(code),
      'expected no eof or eol'
    )

    effects.enter(types.content)
    previous = effects.enter(types.chunkContent, {
      contentType: constants.contentTypeContent
    })
    return chunkInside(code)
  }

  /**
   * In a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^^^
   * ```
   *
   * @type {State}
   */
  function chunkInside(code) {
    if (code === codes.eof) {
      return contentEnd(code)
    }

    // To do: in `markdown-rs`, each line is parsed on its own, and everything
    // is stitched together resolving.
    if (markdownLineEnding(code)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code)
    }

    // Data.
    effects.consume(code)
    return chunkInside
  }

  /**
   *
   *
   * @type {State}
   */
  function contentEnd(code) {
    effects.exit(types.chunkContent)
    effects.exit(types.content)
    return ok(code)
  }

  /**
   *
   *
   * @type {State}
   */
  function contentContinue(code) {
    assert(markdownLineEnding(code), 'expected eol')
    effects.consume(code)
    effects.exit(types.chunkContent)
    assert(previous, 'expected previous token')
    previous.next = effects.enter(types.chunkContent, {
      contentType: constants.contentTypeContent,
      previous
    })
    previous = previous.next
    return chunkInside
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeContinuation(effects, ok, nok) {
  const self = this

  return startLookahead

  /**
   *
   *
   * @type {State}
   */
  function startLookahead(code) {
    assert(markdownLineEnding(code), 'expected a line ending')
    effects.exit(types.chunkContent)
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return factorySpace(effects, prefixed, types.linePrefix)
  }

  /**
   *
   *
   * @type {State}
   */
  function prefixed(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return nok(code)
    }

    // Always populated by defaults.
    assert(
      self.parser.constructs.disable.null,
      'expected `disable.null` to be populated'
    )

    const tail = self.events[self.events.length - 1]

    if (
      !self.parser.constructs.disable.null.includes('codeIndented') &&
      tail &&
      tail[1].type === types.linePrefix &&
      tail[2].sliceSerialize(tail[1], true).length >= constants.tabSize
    ) {
      return ok(code)
    }

    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
  }
}
