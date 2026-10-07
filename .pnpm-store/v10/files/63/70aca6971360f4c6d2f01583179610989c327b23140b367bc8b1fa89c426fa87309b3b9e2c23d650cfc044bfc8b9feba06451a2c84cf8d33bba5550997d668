var htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
}
export default htmlFlow

import assert from 'assert'
import asciiAlpha from '../character/ascii-alpha.mjs'
import asciiAlphanumeric from '../character/ascii-alphanumeric.mjs'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import markdownLineEndingOrSpace from '../character/markdown-line-ending-or-space.mjs'
import markdownSpace from '../character/markdown-space.mjs'
import constants from '../constant/constants.mjs'
import fromCharCode from '../constant/from-char-code.mjs'
import basics from '../constant/html-block-names.mjs'
import raws from '../constant/html-raw-names.mjs'
import types from '../constant/types.mjs'
import blank from './partial-blank-line.mjs'

var nextBlankConstruct = {tokenize: tokenizeNextBlank, partial: true}

function resolveToHtmlFlow(events) {
  var index = events.length

  while (index--) {
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === types.htmlFlow
    ) {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === types.linePrefix) {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start
    // Add the prefix start to the HTML line token.
    events[index + 1][1].start = events[index - 2][1].start
    // Remove the line prefix.
    events.splice(index - 2, 2)
  }

  return events
}

function tokenizeHtmlFlow(effects, ok, nok) {
  var self = this
  var kind
  var startTag
  var buffer
  var index
  var marker

  return start

  function start(code) {
    assert(code === codes.lessThan, 'expected `<`')
    effects.enter(types.htmlFlow)
    effects.enter(types.htmlFlowData)
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === codes.exclamationMark) {
      effects.consume(code)
      return declarationStart
    }

    if (code === codes.slash) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === codes.questionMark) {
      effects.consume(code)
      kind = constants.htmlInstruction
      // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.
      return self.interrupt ? ok : continuationDeclarationInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      startTag = true
      return tagName
    }

    return nok(code)
  }

  function declarationStart(code) {
    if (code === codes.dash) {
      effects.consume(code)
      kind = constants.htmlComment
      return commentOpenInside
    }

    if (code === codes.leftSquareBracket) {
      effects.consume(code)
      kind = constants.htmlCdata
      buffer = constants.cdataOpeningString
      index = 0
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      kind = constants.htmlDeclaration
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function commentOpenInside(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length
        ? self.interrupt
          ? ok
          : continuation
        : cdataOpenInside
    }

    return nok(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function tagName(code) {
    if (
      code === codes.eof ||
      code === codes.slash ||
      code === codes.greaterThan ||
      markdownLineEndingOrSpace(code)
    ) {
      if (
        code !== codes.slash &&
        startTag &&
        raws.indexOf(buffer.toLowerCase()) > -1
      ) {
        kind = constants.htmlRaw
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (basics.indexOf(buffer.toLowerCase()) > -1) {
        kind = constants.htmlBasic

        if (code === codes.slash) {
          effects.consume(code)
          return basicSelfClosing
        }

        return self.interrupt ? ok(code) : continuation(code)
      }

      kind = constants.htmlComplete
      // Do not support complete HTML when interrupting.
      return self.interrupt
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code)
    }

    if (code === codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function basicSelfClosing(code) {
    if (code === codes.greaterThan) {
      effects.consume(code)
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }

  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }

  function completeAttributeNameBefore(code) {
    if (code === codes.slash) {
      effects.consume(code)
      return completeEnd
    }

    if (code === codes.colon || code === codes.underscore || asciiAlpha(code)) {
      effects.consume(code)
      return completeAttributeName
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }

  function completeAttributeName(code) {
    if (
      code === codes.dash ||
      code === codes.dot ||
      code === codes.colon ||
      code === codes.underscore ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }

  function completeAttributeNameAfter(code) {
    if (code === codes.equalsTo) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }

  function completeAttributeValueBefore(code) {
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
      return completeAttributeValueQuoted
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    marker = undefined
    return completeAttributeValueUnquoted(code)
  }

  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return completeAttributeValueQuotedAfter
    }

    if (code === codes.eof || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return completeAttributeValueQuoted
  }

  function completeAttributeValueUnquoted(code) {
    if (
      code === codes.eof ||
      code === codes.quotationMark ||
      code === codes.apostrophe ||
      code === codes.lessThan ||
      code === codes.equalsTo ||
      code === codes.greaterThan ||
      code === codes.graveAccent ||
      markdownLineEndingOrSpace(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code)
    return completeAttributeValueUnquoted
  }

  function completeAttributeValueQuotedAfter(code) {
    if (
      code === codes.slash ||
      code === codes.greaterThan ||
      markdownSpace(code)
    ) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }

  function completeEnd(code) {
    if (code === codes.greaterThan) {
      effects.consume(code)
      return completeAfter
    }

    return nok(code)
  }

  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAfter
    }

    return code === codes.eof || markdownLineEnding(code)
      ? continuation(code)
      : nok(code)
  }

  function continuation(code) {
    if (code === codes.dash && kind === constants.htmlComment) {
      effects.consume(code)
      return continuationCommentInside
    }

    if (code === codes.lessThan && kind === constants.htmlRaw) {
      effects.consume(code)
      return continuationRawTagOpen
    }

    if (code === codes.greaterThan && kind === constants.htmlDeclaration) {
      effects.consume(code)
      return continuationClose
    }

    if (code === codes.questionMark && kind === constants.htmlInstruction) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    if (code === codes.rightSquareBracket && kind === constants.htmlCdata) {
      effects.consume(code)
      return continuationCharacterDataInside
    }

    if (
      markdownLineEnding(code) &&
      (kind === constants.htmlBasic || kind === constants.htmlComplete)
    ) {
      return effects.check(
        nextBlankConstruct,
        continuationClose,
        continuationAtLineEnding
      )(code)
    }

    if (code === codes.eof || markdownLineEnding(code)) {
      return continuationAtLineEnding(code)
    }

    effects.consume(code)
    return continuation
  }

  function continuationAtLineEnding(code) {
    effects.exit(types.htmlFlowData)
    return htmlContinueStart(code)
  }

  function htmlContinueStart(code) {
    if (code === codes.eof) {
      return done(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      return htmlContinueStart
    }

    effects.enter(types.htmlFlowData)
    return continuation(code)
  }

  function continuationCommentInside(code) {
    if (code === codes.dash) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationRawTagOpen(code) {
    if (code === codes.slash) {
      effects.consume(code)
      buffer = ''
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationRawEndTag(code) {
    if (code === codes.greaterThan && raws.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code)
      return continuationClose
    }

    if (asciiAlpha(code) && buffer.length < constants.htmlRawSizeMax) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationCharacterDataInside(code) {
    if (code === codes.rightSquareBracket) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationDeclarationInside(code) {
    if (code === codes.greaterThan) {
      effects.consume(code)
      return continuationClose
    }

    return continuation(code)
  }

  function continuationClose(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.htmlFlowData)
      return done(code)
    }

    effects.consume(code)
    return continuationClose
  }

  function done(code) {
    effects.exit(types.htmlFlow)
    return ok(code)
  }
}

function tokenizeNextBlank(effects, ok, nok) {
  return start

  function start(code) {
    assert(markdownLineEnding(code), 'expected a line ending')
    effects.exit(types.htmlFlowData)
    effects.enter(types.lineEndingBlank)
    effects.consume(code)
    effects.exit(types.lineEndingBlank)
    return effects.attempt(blank, ok, nok)
  }
}
