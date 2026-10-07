'use strict'

exports.tokenize = tokenizeDirectiveText
exports.previous = previous

var createAttributes = require('./factory-attributes')
var createLabel = require('./factory-label')
var createName = require('./factory-name')

var label = {tokenize: tokenizeLabel, partial: true}
var attributes = {tokenize: tokenizeAttributes, partial: true}

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 58 /* `:` */ ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeDirectiveText(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 58 /* `:` */) throw new Error('expected `:`')

    /* istanbul ignore if - handled by mm */
    if (!previous.call(self, self.previous)) {
      throw new Error('expected correct previous')
    }

    effects.enter('directiveText')
    effects.enter('directiveTextMarker')
    effects.consume(code)
    effects.exit('directiveTextMarker')
    return createName.call(self, effects, afterName, nok, 'directiveTextName')
  }

  function afterName(code) {
    return code === 58 /* `:` */
      ? nok(code)
      : code === 91 /* `[` */
      ? effects.attempt(label, afterLabel, afterLabel)(code)
      : afterLabel(code)
  }

  function afterLabel(code) {
    return code === 123 /* `{` */
      ? effects.attempt(attributes, afterAttributes, afterAttributes)(code)
      : afterAttributes(code)
  }

  function afterAttributes(code) {
    effects.exit('directiveText')
    return ok(code)
  }
}

function tokenizeLabel(effects, ok, nok) {
  // Always a `[`
  return createLabel(
    effects,
    ok,
    nok,
    'directiveTextLabel',
    'directiveTextLabelMarker',
    'directiveTextLabelString'
  )
}

function tokenizeAttributes(effects, ok, nok) {
  // Always a `{`
  return createAttributes(
    effects,
    ok,
    nok,
    'directiveTextAttributes',
    'directiveTextAttributesMarker',
    'directiveTextAttribute',
    'directiveTextAttributeId',
    'directiveTextAttributeClass',
    'directiveTextAttributeName',
    'directiveTextAttributeInitializerMarker',
    'directiveTextAttributeValueLiteral',
    'directiveTextAttributeValue',
    'directiveTextAttributeValueMarker',
    'directiveTextAttributeValueData'
  )
}
