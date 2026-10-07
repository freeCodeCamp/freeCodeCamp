/**
 * @import {Construct, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {factorySpace} from 'micromark-factory-space'
import {markdownLineEnding} from 'micromark-util-character'
import {codes, types} from 'micromark-util-symbol'
import {factoryAttributes} from './factory-attributes.js'
import {factoryLabel} from './factory-label.js'
import {factoryName} from './factory-name.js'

/** @type {Construct} */
export const directiveLeaf = {tokenize: tokenizeDirectiveLeaf}

const label = {tokenize: tokenizeLabel, partial: true}
const attributes = {tokenize: tokenizeAttributes, partial: true}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDirectiveLeaf(effects, ok, nok) {
  const self = this

  return start

  /** @type {State} */
  function start(code) {
    assert(code === codes.colon, 'expected `:`')
    effects.enter('directiveLeaf')
    effects.enter('directiveLeafSequence')
    effects.consume(code)
    return inStart
  }

  /** @type {State} */
  function inStart(code) {
    if (code === codes.colon) {
      effects.consume(code)
      effects.exit('directiveLeafSequence')
      return factoryName.call(
        self,
        effects,
        afterName,
        nok,
        'directiveLeafName'
      )
    }

    return nok(code)
  }

  /** @type {State} */
  function afterName(code) {
    return code === codes.leftSquareBracket
      ? effects.attempt(label, afterLabel, afterLabel)(code)
      : afterLabel(code)
  }

  /** @type {State} */
  function afterLabel(code) {
    return code === codes.leftCurlyBrace
      ? effects.attempt(attributes, afterAttributes, afterAttributes)(code)
      : afterAttributes(code)
  }

  /** @type {State} */
  function afterAttributes(code) {
    return factorySpace(effects, end, types.whitespace)(code)
  }

  /** @type {State} */
  function end(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit('directiveLeaf')
      return ok(code)
    }

    return nok(code)
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabel(effects, ok, nok) {
  // Always a `[`
  return factoryLabel(
    effects,
    ok,
    nok,
    'directiveLeafLabel',
    'directiveLeafLabelMarker',
    'directiveLeafLabelString',
    true
  )
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttributes(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(
    effects,
    ok,
    nok,
    'directiveLeafAttributes',
    'directiveLeafAttributesMarker',
    'directiveLeafAttribute',
    'directiveLeafAttributeId',
    'directiveLeafAttributeClass',
    'directiveLeafAttributeName',
    'directiveLeafAttributeInitializerMarker',
    'directiveLeafAttributeValueLiteral',
    'directiveLeafAttributeValue',
    'directiveLeafAttributeValueMarker',
    'directiveLeafAttributeValueData',
    true
  )
}
