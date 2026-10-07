var list = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {tokenize: tokenizeListContinuation},
  exit: tokenizeListEnd
}
export default list

import asciiDigit from '../character/ascii-digit.mjs'
import codes from '../character/codes.mjs'
import markdownSpace from '../character/markdown-space.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import prefixSize from '../util/prefix-size.mjs'
import sizeChunks from '../util/size-chunks.mjs'
import spaceFactory from './factory-space.mjs'
import blank from './partial-blank-line.mjs'
import thematicBreak from './thematic-break.mjs'

var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
}
var indentConstruct = {tokenize: tokenizeIndent, partial: true}

function tokenizeListStart(effects, ok, nok) {
  var self = this
  var initialSize = prefixSize(self.events, types.linePrefix)
  var size = 0

  return start

  function start(code) {
    var kind =
      self.containerState.type ||
      (code === codes.asterisk || code === codes.plusSign || code === codes.dash
        ? types.listUnordered
        : types.listOrdered)

    if (
      kind === types.listUnordered
        ? !self.containerState.marker || code === self.containerState.marker
        : asciiDigit(code)
    ) {
      if (!self.containerState.type) {
        self.containerState.type = kind
        effects.enter(kind, {_container: true})
      }

      if (kind === types.listUnordered) {
        effects.enter(types.listItemPrefix)
        return code === codes.asterisk || code === codes.dash
          ? effects.check(thematicBreak, nok, atMarker)(code)
          : atMarker(code)
      }

      if (!self.interrupt || code === codes.digit1) {
        effects.enter(types.listItemPrefix)
        effects.enter(types.listItemValue)
        return inside(code)
      }
    }

    return nok(code)
  }

  function inside(code) {
    if (asciiDigit(code) && ++size < constants.listItemValueSizeMax) {
      effects.consume(code)
      return inside
    }

    if (
      (!self.interrupt || size < 2) &&
      (self.containerState.marker
        ? code === self.containerState.marker
        : code === codes.rightParenthesis || code === codes.dot)
    ) {
      effects.exit(types.listItemValue)
      return atMarker(code)
    }

    return nok(code)
  }

  function atMarker(code) {
    effects.enter(types.listItemMarker)
    effects.consume(code)
    effects.exit(types.listItemMarker)
    self.containerState.marker = self.containerState.marker || code
    return effects.check(
      blank,
      // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true
    initialSize++
    return endOfPrefix(code)
  }

  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter(types.listItemPrefixWhitespace)
      effects.consume(code)
      effects.exit(types.listItemPrefixWhitespace)
      return endOfPrefix
    }

    return nok(code)
  }

  function endOfPrefix(code) {
    self.containerState.size =
      initialSize +
      sizeChunks(self.sliceStream(effects.exit(types.listItemPrefix)))
    return ok(code)
  }
}

function tokenizeListContinuation(effects, ok, nok) {
  var self = this

  self.containerState._closeFlow = undefined

  return effects.check(blank, onBlank, notBlank)

  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine

    // We have a blank line.
    // Still, try to consume at most the items size.
    return spaceFactory(
      effects,
      ok,
      types.listItemIndent,
      self.containerState.size + 1
    )(code)
  }

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
  }

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true
    // As we’re closing flow, we’re no longer interrupting.
    self.interrupt = undefined
    return spaceFactory(
      effects,
      effects.attempt(list, ok, nok),
      types.linePrefix,
      self.parser.constructs.disable.null.indexOf('codeIndented') > -1
        ? undefined
        : constants.tabSize
    )(code)
  }
}

function tokenizeIndent(effects, ok, nok) {
  var self = this

  return spaceFactory(
    effects,
    afterPrefix,
    types.listItemIndent,
    self.containerState.size + 1
  )

  function afterPrefix(code) {
    return prefixSize(self.events, types.listItemIndent) ===
      self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type)
}

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this

  return spaceFactory(
    effects,
    afterPrefix,
    types.listItemPrefixWhitespace,
    self.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : constants.tabSize + 1
  )

  function afterPrefix(code) {
    return markdownSpace(code) ||
      !prefixSize(self.events, types.listItemPrefixWhitespace)
      ? nok(code)
      : ok(code)
  }
}
