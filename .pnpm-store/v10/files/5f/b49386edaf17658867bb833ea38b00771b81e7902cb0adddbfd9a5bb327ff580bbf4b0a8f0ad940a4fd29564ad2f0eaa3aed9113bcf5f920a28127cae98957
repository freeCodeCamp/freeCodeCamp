/**
 * @import {
 *   Code,
 *   Construct,
 *   Exiter,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {factorySpace} from 'micromark-factory-space'
import {asciiDigit, markdownSpace} from 'micromark-util-character'
import {codes, constants, types} from 'micromark-util-symbol'
import {blankLine} from './blank-line.js'
import {thematicBreak} from './thematic-break.js'

/** @type {Construct} */
export const list = {
  continuation: {tokenize: tokenizeListContinuation},
  exit: tokenizeListEnd,
  name: 'list',
  tokenize: tokenizeListStart
}

/** @type {Construct} */
const listItemPrefixWhitespaceConstruct = {
  partial: true,
  tokenize: tokenizeListItemPrefixWhitespace
}

/** @type {Construct} */
const indentConstruct = {partial: true, tokenize: tokenizeIndent}

// To do: `markdown-rs` parses list items on their own and later stitches them
// together.

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListStart(effects, ok, nok) {
  const self = this
  const tail = self.events[self.events.length - 1]
  let initialSize =
    tail && tail[1].type === types.linePrefix
      ? tail[2].sliceSerialize(tail[1], true).length
      : 0
  let size = 0

  return start

  /** @type {State} */
  function start(code) {
    assert(self.containerState, 'expected state')
    const kind =
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

  /** @type {State} */
  function inside(code) {
    assert(self.containerState, 'expected state')
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

  /**
   * @type {State}
   **/
  function atMarker(code) {
    assert(self.containerState, 'expected state')
    assert(code !== codes.eof, 'eof (`null`) is not a marker')
    effects.enter(types.listItemMarker)
    effects.consume(code)
    effects.exit(types.listItemMarker)
    self.containerState.marker = self.containerState.marker || code
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }

  /** @type {State} */
  function onBlank(code) {
    assert(self.containerState, 'expected state')
    self.containerState.initialBlankLine = true
    initialSize++
    return endOfPrefix(code)
  }

  /** @type {State} */
  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter(types.listItemPrefixWhitespace)
      effects.consume(code)
      effects.exit(types.listItemPrefixWhitespace)
      return endOfPrefix
    }

    return nok(code)
  }

  /** @type {State} */
  function endOfPrefix(code) {
    assert(self.containerState, 'expected state')
    self.containerState.size =
      initialSize +
      self.sliceSerialize(effects.exit(types.listItemPrefix), true).length
    return ok(code)
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListContinuation(effects, ok, nok) {
  const self = this

  assert(self.containerState, 'expected state')
  self.containerState._closeFlow = undefined

  return effects.check(blankLine, onBlank, notBlank)

  /** @type {State} */
  function onBlank(code) {
    assert(self.containerState, 'expected state')
    assert(typeof self.containerState.size === 'number', 'expected size')
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine

    // We have a blank line.
    // Still, try to consume at most the items size.
    return factorySpace(
      effects,
      ok,
      types.listItemIndent,
      self.containerState.size + 1
    )(code)
  }

  /** @type {State} */
  function notBlank(code) {
    assert(self.containerState, 'expected state')
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined
      self.containerState.initialBlankLine = undefined
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = undefined
    self.containerState.initialBlankLine = undefined
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
  }

  /** @type {State} */
  function notInCurrentItem(code) {
    assert(self.containerState, 'expected state')
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true
    // As we’re closing flow, we’re no longer interrupting.
    self.interrupt = undefined
    // Always populated by defaults.
    assert(
      self.parser.constructs.disable.null,
      'expected `disable.null` to be populated'
    )
    return factorySpace(
      effects,
      effects.attempt(list, ok, nok),
      types.linePrefix,
      self.parser.constructs.disable.null.includes('codeIndented')
        ? undefined
        : constants.tabSize
    )(code)
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeIndent(effects, ok, nok) {
  const self = this

  assert(self.containerState, 'expected state')
  assert(typeof self.containerState.size === 'number', 'expected size')

  return factorySpace(
    effects,
    afterPrefix,
    types.listItemIndent,
    self.containerState.size + 1
  )

  /** @type {State} */
  function afterPrefix(code) {
    assert(self.containerState, 'expected state')
    const tail = self.events[self.events.length - 1]
    return tail &&
      tail[1].type === types.listItemIndent &&
      tail[2].sliceSerialize(tail[1], true).length === self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Exiter}
 */
function tokenizeListEnd(effects) {
  assert(this.containerState, 'expected state')
  assert(typeof this.containerState.type === 'string', 'expected type')
  effects.exit(this.containerState.type)
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this

  // Always populated by defaults.
  assert(
    self.parser.constructs.disable.null,
    'expected `disable.null` to be populated'
  )

  return factorySpace(
    effects,
    afterPrefix,
    types.listItemPrefixWhitespace,
    self.parser.constructs.disable.null.includes('codeIndented')
      ? undefined
      : constants.tabSize + 1
  )

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1]

    return !markdownSpace(code) &&
      tail &&
      tail[1].type === types.listItemPrefixWhitespace
      ? ok(code)
      : nok(code)
  }
}
