/**
 * @import {
 *   Construct,
 *   Exiter,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {factorySpace} from 'micromark-factory-space'
import {markdownSpace} from 'micromark-util-character'
import {codes, constants, types} from 'micromark-util-symbol'

/** @type {Construct} */
export const blockQuote = {
  continuation: {tokenize: tokenizeBlockQuoteContinuation},
  exit,
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this

  return start

  /**
   * Start of block quote.
   *
   * ```markdown
   * > | > a
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === codes.greaterThan) {
      const state = self.containerState

      assert(state, 'expected `containerState` to be defined in container')

      if (!state.open) {
        effects.enter(types.blockQuote, {_container: true})
        state.open = true
      }

      effects.enter(types.blockQuotePrefix)
      effects.enter(types.blockQuoteMarker)
      effects.consume(code)
      effects.exit(types.blockQuoteMarker)
      return after
    }

    return nok(code)
  }

  /**
   * After `>`, before optional whitespace.
   *
   * ```markdown
   * > | > a
   *      ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if (markdownSpace(code)) {
      effects.enter(types.blockQuotePrefixWhitespace)
      effects.consume(code)
      effects.exit(types.blockQuotePrefixWhitespace)
      effects.exit(types.blockQuotePrefix)
      return ok
    }

    effects.exit(types.blockQuotePrefix)
    return ok(code)
  }
}

/**
 * Start of block quote continuation.
 *
 * ```markdown
 *   | > a
 * > | > b
 *     ^
 * ```
 *
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  const self = this

  return contStart

  /**
   * Start of block quote continuation.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contStart(code) {
    if (markdownSpace(code)) {
      // Always populated by defaults.
      assert(
        self.parser.constructs.disable.null,
        'expected `disable.null` to be populated'
      )

      return factorySpace(
        effects,
        contBefore,
        types.linePrefix,
        self.parser.constructs.disable.null.includes('codeIndented')
          ? undefined
          : constants.tabSize
      )(code)
    }

    return contBefore(code)
  }

  /**
   * At `>`, after optional whitespace.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contBefore(code) {
    return effects.attempt(blockQuote, ok, nok)(code)
  }
}

/** @type {Exiter} */
function exit(effects) {
  effects.exit(types.blockQuote)
}
