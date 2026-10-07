'use strict'

var assert = require('assert')
var asciiAlpha = require('../character/ascii-alpha.js')
var asciiAlphanumeric = require('../character/ascii-alphanumeric.js')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var markdownLineEndingOrSpace = require('../character/markdown-line-ending-or-space.js')
var markdownSpace = require('../character/markdown-space.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var factorySpace = require('./factory-space.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
}

function tokenizeHtmlText(effects, ok, nok) {
  var self = this
  var marker
  var buffer
  var index
  var returnState

  return start

  function start(code) {
    assert__default['default'](code === codes.lessThan, 'expected `<`')
    effects.enter(types.htmlText)
    effects.enter(types.htmlTextData)
    effects.consume(code)
    return open
  }

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

    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagOpen
    }

    return nok(code)
  }

  function declarationOpen(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return commentOpen
    }

    if (code === codes.leftSquareBracket) {
      effects.consume(code)
      buffer = constants.cdataOpeningString
      index = 0
      return cdataOpen
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return declaration
    }

    return nok(code)
  }

  function commentOpen(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return commentStart
    }

    return nok(code)
  }

  function commentStart(code) {
    if (code === codes.eof || code === codes.greaterThan) {
      return nok(code)
    }

    if (code === codes.dash) {
      effects.consume(code)
      return commentStartDash
    }

    return comment(code)
  }

  function commentStartDash(code) {
    if (code === codes.eof || code === codes.greaterThan) {
      return nok(code)
    }

    return comment(code)
  }

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
      return atLineEnding(code)
    }

    effects.consume(code)
    return comment
  }

  function commentClose(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return end
    }

    return comment(code)
  }

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length ? cdata : cdataOpen
    }

    return nok(code)
  }

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
      return atLineEnding(code)
    }

    effects.consume(code)
    return cdata
  }

  function cdataClose(code) {
    if (code === codes.rightSquareBracket) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

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

  function declaration(code) {
    if (code === codes.eof || code === codes.greaterThan) {
      return end(code)
    }

    if (markdownLineEnding(code)) {
      returnState = declaration
      return atLineEnding(code)
    }

    effects.consume(code)
    return declaration
  }

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
      return atLineEnding(code)
    }

    effects.consume(code)
    return instruction
  }

  function instructionClose(code) {
    return code === codes.greaterThan ? end(code) : instruction(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagClose
    }

    return nok(code)
  }

  function tagClose(code) {
    if (code === codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagClose
    }

    return tagCloseBetween(code)
  }

  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagCloseBetween
    }

    return end(code)
  }

  function tagOpen(code) {
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

  function tagOpenBetween(code) {
    if (code === codes.slash) {
      effects.consume(code)
      return end
    }

    if (code === codes.colon || code === codes.underscore || asciiAlpha(code)) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenBetween
    }

    return end(code)
  }

  function tagOpenAttributeName(code) {
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

  function tagOpenAttributeNameAfter(code) {
    if (code === codes.equalsTo) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

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
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    effects.consume(code)
    marker = undefined
    return tagOpenAttributeValueUnquoted
  }

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === codes.eof) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted
      return atLineEnding(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueQuoted
  }

  function tagOpenAttributeValueQuotedAfter(code) {
    if (
      code === codes.greaterThan ||
      code === codes.slash ||
      markdownLineEndingOrSpace(code)
    ) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

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

    if (code === codes.greaterThan || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  }

  // We can’t have blank lines in content, so no need to worry about empty
  // tokens.
  function atLineEnding(code) {
    assert__default['default'](returnState, 'expected return state')
    assert__default['default'](markdownLineEnding(code), 'expected eol')
    effects.exit(types.htmlTextData)
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return factorySpace(
      effects,
      afterPrefix,
      types.linePrefix,
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : constants.tabSize
    )
  }

  function afterPrefix(code) {
    effects.enter(types.htmlTextData)
    return returnState(code)
  }

  function end(code) {
    if (code === codes.greaterThan) {
      effects.consume(code)
      effects.exit(types.htmlTextData)
      effects.exit(types.htmlText)
      return ok
    }

    return nok(code)
  }
}

module.exports = htmlText
