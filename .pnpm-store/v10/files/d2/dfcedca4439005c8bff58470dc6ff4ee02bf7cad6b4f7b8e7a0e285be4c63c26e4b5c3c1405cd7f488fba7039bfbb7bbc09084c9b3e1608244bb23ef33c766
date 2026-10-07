/**
 * @import {
 *   Code,
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {factorySpace} from 'micromark-factory-space'
import {markdownLineEnding, markdownSpace} from 'micromark-util-character'
import {codes, constants, types} from 'micromark-util-symbol'

/** @type {Construct} */
const nonLazyContinuation = {
  partial: true,
  tokenize: tokenizeNonLazyContinuation
}

/** @type {Construct} */
export const codeFenced = {
  concrete: true,
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeCodeFenced(effects, ok, nok) {
  const self = this
  /** @type {Construct} */
  const closeStart = {partial: true, tokenize: tokenizeCloseStart}
  let initialPrefix = 0
  let sizeOpen = 0
  /** @type {NonNullable<Code>} */
  let marker

  return start

  /**
   * Start of code.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse whitespace like `markdown-rs`.
    return beforeSequenceOpen(code)
  }

  /**
   * In opening fence, after prefix, at sequence.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeSequenceOpen(code) {
    assert(
      code === codes.graveAccent || code === codes.tilde,
      'expected `` ` `` or `~`'
    )

    const tail = self.events[self.events.length - 1]
    initialPrefix =
      tail && tail[1].type === types.linePrefix
        ? tail[2].sliceSerialize(tail[1], true).length
        : 0

    marker = code
    effects.enter(types.codeFenced)
    effects.enter(types.codeFencedFence)
    effects.enter(types.codeFencedFenceSequence)
    return sequenceOpen(code)
  }

  /**
   * In opening fence sequence.
   *
   * ```markdown
   * > | ~~~js
   *      ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === marker) {
      sizeOpen++
      effects.consume(code)
      return sequenceOpen
    }

    if (sizeOpen < constants.codeFencedSequenceSizeMin) {
      return nok(code)
    }

    effects.exit(types.codeFencedFenceSequence)
    return markdownSpace(code)
      ? factorySpace(effects, infoBefore, types.whitespace)(code)
      : infoBefore(code)
  }

  /**
   * In opening fence, after the sequence (and optional whitespace), before info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function infoBefore(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.codeFencedFence)
      return self.interrupt
        ? ok(code)
        : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code)
    }

    effects.enter(types.codeFencedFenceInfo)
    effects.enter(types.chunkString, {contentType: constants.contentTypeString})
    return info(code)
  }

  /**
   * In info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function info(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.chunkString)
      effects.exit(types.codeFencedFenceInfo)
      return infoBefore(code)
    }

    if (markdownSpace(code)) {
      effects.exit(types.chunkString)
      effects.exit(types.codeFencedFenceInfo)
      return factorySpace(effects, metaBefore, types.whitespace)(code)
    }

    if (code === codes.graveAccent && code === marker) {
      return nok(code)
    }

    effects.consume(code)
    return info
  }

  /**
   * In opening fence, after info and whitespace, before meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function metaBefore(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return infoBefore(code)
    }

    effects.enter(types.codeFencedFenceMeta)
    effects.enter(types.chunkString, {contentType: constants.contentTypeString})
    return meta(code)
  }

  /**
   * In meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function meta(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.chunkString)
      effects.exit(types.codeFencedFenceMeta)
      return infoBefore(code)
    }

    if (code === codes.graveAccent && code === marker) {
      return nok(code)
    }

    effects.consume(code)
    return meta
  }

  /**
   * At eol/eof in code, before a non-lazy closing fence or content.
   *
   * ```markdown
   * > | ~~~js
   *          ^
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function atNonLazyBreak(code) {
    assert(markdownLineEnding(code), 'expected eol')
    return effects.attempt(closeStart, after, contentBefore)(code)
  }

  /**
   * Before code content, not a closing fence, at eol.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentBefore(code) {
    assert(markdownLineEnding(code), 'expected eol')
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return contentStart
  }

  /**
   * Before code content, not a closing fence.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentStart(code) {
    return initialPrefix > 0 && markdownSpace(code)
      ? factorySpace(
          effects,
          beforeContentChunk,
          types.linePrefix,
          initialPrefix + 1
        )(code)
      : beforeContentChunk(code)
  }

  /**
   * Before code content, after optional prefix.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeContentChunk(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code)
    }

    effects.enter(types.codeFlowValue)
    return contentChunk(code)
  }

  /**
   * In code content.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^^^^^^^^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentChunk(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.codeFlowValue)
      return beforeContentChunk(code)
    }

    effects.consume(code)
    return contentChunk
  }

  /**
   * After code.
   *
   * ```markdown
   *   | ~~~js
   *   | alert(1)
   * > | ~~~
   *        ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    effects.exit(types.codeFenced)
    return ok(code)
  }

  /**
   * @this {TokenizeContext}
   *   Context.
   * @type {Tokenizer}
   */
  function tokenizeCloseStart(effects, ok, nok) {
    let size = 0

    return startBefore

    /**
     *
     *
     * @type {State}
     */
    function startBefore(code) {
      assert(markdownLineEnding(code), 'expected eol')
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      return start
    }

    /**
     * Before closing fence, at optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function start(code) {
      // Always populated by defaults.
      assert(
        self.parser.constructs.disable.null,
        'expected `disable.null` to be populated'
      )

      // To do: `enter` here or in next state?
      effects.enter(types.codeFencedFence)
      return markdownSpace(code)
        ? factorySpace(
            effects,
            beforeSequenceClose,
            types.linePrefix,
            self.parser.constructs.disable.null.includes('codeIndented')
              ? undefined
              : constants.tabSize
          )(code)
        : beforeSequenceClose(code)
    }

    /**
     * In closing fence, after optional whitespace, at sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function beforeSequenceClose(code) {
      if (code === marker) {
        effects.enter(types.codeFencedFenceSequence)
        return sequenceClose(code)
      }

      return nok(code)
    }

    /**
     * In closing fence sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function sequenceClose(code) {
      if (code === marker) {
        size++
        effects.consume(code)
        return sequenceClose
      }

      if (size >= sizeOpen) {
        effects.exit(types.codeFencedFenceSequence)
        return markdownSpace(code)
          ? factorySpace(effects, sequenceCloseAfter, types.whitespace)(code)
          : sequenceCloseAfter(code)
      }

      return nok(code)
    }

    /**
     * After closing fence sequence, after optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *        ^
     * ```
     *
     * @type {State}
     */
    function sequenceCloseAfter(code) {
      if (code === codes.eof || markdownLineEnding(code)) {
        effects.exit(types.codeFencedFence)
        return ok(code)
      }

      return nok(code)
    }
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuation(effects, ok, nok) {
  const self = this

  return start

  /**
   *
   *
   * @type {State}
   */
  function start(code) {
    if (code === codes.eof) {
      return nok(code)
    }

    assert(markdownLineEnding(code), 'expected eol')
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return lineStart
  }

  /**
   *
   *
   * @type {State}
   */
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
  }
}
