/**
 * @import {Options} from 'micromark-extension-math'
 * @import {Construct, Previous, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

// To do: next major: clean spaces in HTML compiler.
// This has to be coordinated together with `mdast-util-math`.

import {ok as assert} from 'devlop'
import {markdownLineEnding} from 'micromark-util-character'
import {codes, types} from 'micromark-util-symbol'

/**
 * @param {Options | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {Construct}
 *   Construct.
 */
export function mathText(options) {
  const options_ = options || {}
  let single = options_.singleDollarTextMath

  if (single === null || single === undefined) {
    single = true
  }

  return {
    tokenize: tokenizeMathText,
    resolve: resolveMathText,
    previous,
    name: 'mathText'
  }

  /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */
  function tokenizeMathText(effects, ok, nok) {
    const self = this
    let sizeOpen = 0
    /** @type {number} */
    let size
    /** @type {Token} */
    let token

    return start

    /**
     * Start of math (text).
     *
     * ```markdown
     * > | $a$
     *     ^
     * > | \$a$
     *      ^
     * ```
     *
     * @type {State}
     */
    function start(code) {
      assert(code === codes.dollarSign, 'expected `$`')
      assert(previous.call(self, self.previous), 'expected correct previous')
      effects.enter('mathText')
      effects.enter('mathTextSequence')
      return sequenceOpen(code)
    }

    /**
     * In opening sequence.
     *
     * ```markdown
     * > | $a$
     *     ^
     * ```
     *
     * @type {State}
     */

    function sequenceOpen(code) {
      if (code === codes.dollarSign) {
        effects.consume(code)
        sizeOpen++
        return sequenceOpen
      }

      // Not enough markers in the sequence.
      if (sizeOpen < 2 && !single) {
        return nok(code)
      }

      effects.exit('mathTextSequence')
      return between(code)
    }

    /**
     * Between something and something else.
     *
     * ```markdown
     * > | $a$
     *      ^^
     * ```
     *
     * @type {State}
     */
    function between(code) {
      if (code === codes.eof) {
        return nok(code)
      }

      if (code === codes.dollarSign) {
        token = effects.enter('mathTextSequence')
        size = 0
        return sequenceClose(code)
      }

      // Tabs don’t work, and virtual spaces don’t make sense.
      if (code === codes.space) {
        effects.enter('space')
        effects.consume(code)
        effects.exit('space')
        return between
      }

      if (markdownLineEnding(code)) {
        effects.enter(types.lineEnding)
        effects.consume(code)
        effects.exit(types.lineEnding)
        return between
      }

      // Data.
      effects.enter('mathTextData')
      return data(code)
    }

    /**
     * In data.
     *
     * ```markdown
     * > | $a$
     *      ^
     * ```
     *
     * @type {State}
     */
    function data(code) {
      if (
        code === codes.eof ||
        code === codes.space ||
        code === codes.dollarSign ||
        markdownLineEnding(code)
      ) {
        effects.exit('mathTextData')
        return between(code)
      }

      effects.consume(code)
      return data
    }

    /**
     * In closing sequence.
     *
     * ```markdown
     * > | `a`
     *       ^
     * ```
     *
     * @type {State}
     */

    function sequenceClose(code) {
      // More.
      if (code === codes.dollarSign) {
        effects.consume(code)
        size++
        return sequenceClose
      }

      // Done!
      if (size === sizeOpen) {
        effects.exit('mathTextSequence')
        effects.exit('mathText')
        return ok(code)
      }

      // More or less accents: mark as data.
      token.type = 'mathTextData'
      return data(code)
    }
  }
}

/** @type {Resolver} */
function resolveMathText(events) {
  let tailExitIndex = events.length - 4
  let headEnterIndex = 3
  /** @type {number} */
  let index
  /** @type {number | undefined} */
  let enter

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === types.lineEnding ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === types.lineEnding ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === 'mathTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = 'mathTextPadding'
        events[headEnterIndex][1].type = 'mathTextPadding'
        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (
        index !== tailExitIndex &&
        events[index][1].type !== types.lineEnding
      ) {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === types.lineEnding
    ) {
      events[enter][1].type = 'mathTextData'

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== codes.dollarSign ||
    this.events[this.events.length - 1][1].type === types.characterEscape
  )
}
