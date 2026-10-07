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
import {
  asciiAlphanumeric,
  asciiAlpha,
  markdownLineEndingOrSpace,
  markdownLineEnding,
  markdownSpace
} from 'micromark-util-character'
import {codes, constants, types} from 'micromark-util-symbol'

/** @type {Construct} */
export const htmlText = {name: 'htmlText', tokenize: tokenizeHtmlText}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeHtmlText(effects, ok, nok) {
  const self = this
  /** @type {NonNullable<Code> | undefined} */
  let marker
  /** @type {number} */
  let index
  /** @type {State} */
  let returnState

  return start

  /**
   * Start of HTML (text).
   *
   * ```markdown
   * > | a <b> c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    assert(code === codes.lessThan, 'expected `<`')
    effects.enter(types.htmlText)
    effects.enter(types.htmlTextData)
    effects.consume(code)
    return open
  }

  /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | a <b> c
   *        ^
   * > | a <!doctype> c
   *        ^
   * > | a <!--b--> c
   *        ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === codes.exclamationMark) {
      effects.consume(code)
      return declarationOpen
    }

    if (code === codes.slash) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === codes.questionMark) {
      effects.consume(code)
      return instruction
    }

    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagOpen
    }

    return nok(code)
  }

  /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | a <!doctype> c
   *         ^
   * > | a <!--b--> c
   *         ^
   * > | a <![CDATA[>&<]]> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function declarationOpen(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return commentOpenInside
    }

    if (code === codes.leftSquareBracket) {
      effects.consume(code)
      index = 0
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return declaration
    }

    return nok(code)
  }

  /**
   * In a comment, after `<!-`, at another `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function commentOpenInside(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return commentEnd
    }

    return nok(code)
  }

  /**
   * In comment.
   *
   * ```markdown
   * > | a <!--b--> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function comment(code) {
    if (code === codes.eof) {
      return nok(code)
    }

    if (code === codes.dash) {
      effects.consume(code)
      return commentClose
    }

    if (markdownLineEnding(code)) {
      returnState = comment
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return comment
  }

  /**
   * In comment, after `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *             ^
   * ```
   *
   * @type {State}
   */
  function commentClose(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return commentEnd
    }

    return comment(code)
  }

  /**
   * In comment, after `--`.
   *
   * ```markdown
   * > | a <!--b--> c
   *              ^
   * ```
   *
   * @type {State}
   */
  function commentEnd(code) {
    return code === codes.greaterThan
      ? end(code)
      : code === codes.dash
        ? commentClose(code)
        : comment(code)
  }

  /**
   * After `<![`, in CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *          ^^^^^^
   * ```
   *
   * @type {State}
   */
  function cdataOpenInside(code) {
    const value = constants.cdataOpeningString

    if (code === value.charCodeAt(index++)) {
      effects.consume(code)
      return index === value.length ? cdata : cdataOpenInside
    }

    return nok(code)
  }

  /**
   * In CDATA.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                ^^^
   * ```
   *
   * @type {State}
   */
  function cdata(code) {
    if (code === codes.eof) {
      return nok(code)
    }

    if (code === codes.rightSquareBracket) {
      effects.consume(code)
      return cdataClose
    }

    if (markdownLineEnding(code)) {
      returnState = cdata
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return cdata
  }

  /**
   * In CDATA, after `]`, at another `]`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function cdataClose(code) {
    if (code === codes.rightSquareBracket) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  /**
   * In CDATA, after `]]`, at `>`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                     ^
   * ```
   *
   * @type {State}
   */
  function cdataEnd(code) {
    if (code === codes.greaterThan) {
      return end(code)
    }

    if (code === codes.rightSquareBracket) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  /**
   * In declaration.
   *
   * ```markdown
   * > | a <!b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function declaration(code) {
    if (code === codes.eof || code === codes.greaterThan) {
      return end(code)
    }

    if (markdownLineEnding(code)) {
      returnState = declaration
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return declaration
  }

  /**
   * In instruction.
   *
   * ```markdown
   * > | a <?b?> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function instruction(code) {
    if (code === codes.eof) {
      return nok(code)
    }

    if (code === codes.questionMark) {
      effects.consume(code)
      return instructionClose
    }

    if (markdownLineEnding(code)) {
      returnState = instruction
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return instruction
  }

  /**
   * In instruction, after `?`, at `>`.
   *
   * ```markdown
   * > | a <?b?> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function instructionClose(code) {
    return code === codes.greaterThan ? end(code) : instruction(code)
  }

  /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | a </b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagCloseStart(code) {
    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagClose
    }

    return nok(code)
  }

  /**
   * After `</x`, in a tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagClose(code) {
    // ASCII alphanumerical and `-`.
    if (code === codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagClose
    }

    return tagCloseBetween(code)
  }

  /**
   * In closing tag, after tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween
      return lineEndingBefore(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagCloseBetween
    }

    return end(code)
  }

  /**
   * After `<x`, in opening tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpen(code) {
    // ASCII alphanumerical and `-`.
    if (code === codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagOpen
    }

    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      markdownLineEndingOrSpace(code)
    ) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  /**
   * In opening tag, after tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpenBetween(code) {
    if (code === codes.slash) {
      effects.consume(code)
      return end
    }

    // ASCII alphabetical and `:` and `_`.
    if (code === codes.colon || code === codes.underscore || asciiAlpha(code)) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween
      return lineEndingBefore(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenBetween
    }

    return end(code)
  }

  /**
   * In attribute name.
   *
   * ```markdown
   * > | a <b c> d
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeName(code) {
    // ASCII alphabetical and `-`, `.`, `:`, and `_`.
    if (
      code === codes.dash ||
      code === codes.dot ||
      code === codes.colon ||
      code === codes.underscore ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }

  /**
   * After attribute name, before initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | a <b c> d
   *           ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeNameAfter(code) {
    if (code === codes.equalsTo) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter
      return lineEndingBefore(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

  /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueBefore(code) {
    if (
      code === codes.eof ||
      code === codes.lessThan ||
      code === codes.equalsTo ||
      code === codes.greaterThan ||
      code === codes.graveAccent
    ) {
      return nok(code)
    }

    if (code === codes.quotationMark || code === codes.apostrophe) {
      effects.consume(code)
      marker = code
      return tagOpenAttributeValueQuoted
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore
      return lineEndingBefore(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  }

  /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | a <b c="d"> e
   *             ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      marker = undefined
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === codes.eof) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted
      return lineEndingBefore(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueQuoted
  }

  /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === codes.eof ||
      code === codes.quotationMark ||
      code === codes.apostrophe ||
      code === codes.lessThan ||
      code === codes.equalsTo ||
      code === codes.graveAccent
    ) {
      return nok(code)
    }

    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      markdownLineEndingOrSpace(code)
    ) {
      return tagOpenBetween(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  }

  /**
   * After double or single quoted attribute value, before whitespace or the end
   * of the tag.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuotedAfter(code) {
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      markdownLineEndingOrSpace(code)
    ) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  /**
   * In certain circumstances of a tag where only an `>` is allowed.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function end(code) {
    if (code === codes.greaterThan) {
      effects.consume(code)
      effects.exit(types.htmlTextData)
      effects.exit(types.htmlText)
      return ok
    }

    return nok(code)
  }

  /**
   * At eol.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   * > | a <!--a
   *            ^
   *   | b-->
   * ```
   *
   * @type {State}
   */
  function lineEndingBefore(code) {
    assert(returnState, 'expected return state')
    assert(markdownLineEnding(code), 'expected eol')
    effects.exit(types.htmlTextData)
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return lineEndingAfter
  }

  /**
   * After eol, at optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfter(code) {
    // Always populated by defaults.
    assert(
      self.parser.constructs.disable.null,
      'expected `disable.null` to be populated'
    )
    return markdownSpace(code)
      ? factorySpace(
          effects,
          lineEndingAfterPrefix,
          types.linePrefix,
          self.parser.constructs.disable.null.includes('codeIndented')
            ? undefined
            : constants.tabSize
        )(code)
      : lineEndingAfterPrefix(code)
  }

  /**
   * After eol, after optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfterPrefix(code) {
    effects.enter(types.htmlTextData)
    return returnState(code)
  }
}
