'use strict'

exports.tokenize = tokenizeDirectiveLeaf

var markdownLineEnding = require('micromark/dist/character/markdown-line-ending')
var createSpace = require('micromark/dist/tokenize/factory-space')
var createAttributes = require('./factory-attributes')
var createLabel = require('./factory-label')
var createName = require('./factory-name')

var label = {tokenize: tokenizeLabel, partial: true}
var attributes = {tokenize: tokenizeAttributes, partial: true}

function tokenizeDirectiveLeaf(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 58 /* `:` */) throw new Error('expected `:`')

    effects.enter('directiveLeaf')
    effects.enter('directiveLeafSequence')
    effects.consume(code)
    return inStart
  }

  function inStart(code) {
    if (code === 58 /* `:` */) {
      effects.consume(code)
      effects.exit('directiveLeafSequence')
      return createName.call(self, effects, afterName, nok, 'directiveLeafName')
    }

    return nok(code)
  }

  function afterName(code) {
    return code === 91 /* `[` */
      ? effects.attempt(label, afterLabel, afterLabel)(code)
      : afterLabel(code)
  }

  function afterLabel(code) {
    return code === 123 /* `{` */
      ? effects.attempt(attributes, afterAttributes, afterAttributes)(code)
      : afterAttributes(code)
  }

  function afterAttributes(code) {
    return createSpace(effects, end, 'whitespace')(code)
  }

  function end(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('directiveLeaf')
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeLabel(effects, ok, nok) {
  // Always a `[`
  return createLabel(
    effects,
    ok,
    nok,
    'directiveLeafLabel',
    'directiveLeafLabelMarker',
    'directiveLeafLabelString',
    true
  )
}

function tokenizeAttributes(effects, ok, nok) {
  // Always a `{`
  return createAttributes(
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
