'use strict'

module.exports = createAttributes

var asciiAlpha = require('micromark/dist/character/ascii-alpha')
var asciiAlphanumeric = require('micromark/dist/character/ascii-alphanumeric')
var markdownLineEnding = require('micromark/dist/character/markdown-line-ending')
var markdownLineEndingOrSpace = require('micromark/dist/character/markdown-line-ending-or-space')
var markdownSpace = require('micromark/dist/character/markdown-space')
var createWhitespace = require('micromark/dist/tokenize/factory-whitespace')
var createSpace = require('micromark/dist/tokenize/factory-space')

/* eslint-disable-next-line max-params */
function createAttributes(
  effects,
  ok,
  nok,
  attributesType,
  attributesMarkerType,
  attributeType,
  attributeIdType,
  attributeClassType,
  attributeNameType,
  attributeInitializerType,
  attributeValueLiteralType,
  attributeValueType,
  attributeValueMarker,
  attributeValueData,
  disallowEol
) {
  var type
  var marker

  return start

  function start(code) {
    // Always a `{`
    effects.enter(attributesType)
    effects.enter(attributesMarkerType)
    effects.consume(code)
    effects.exit(attributesMarkerType)
    return between
  }

  function between(code) {
    if (code === 35 /* `#` */) {
      type = attributeIdType
      return shortcutStart(code)
    }

    if (code === 46 /* `.` */) {
      type = attributeClassType
      return shortcutStart(code)
    }

    if (code === 58 /* `:` */ || code === 95 /* `_` */ || asciiAlpha(code)) {
      effects.enter(attributeType)
      effects.enter(attributeNameType)
      effects.consume(code)
      return name
    }

    if (disallowEol && markdownSpace(code)) {
      return createSpace(effects, between, 'whitespace')(code)
    }

    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return createWhitespace(effects, between)(code)
    }

    return end(code)
  }

  function shortcutStart(code) {
    effects.enter(attributeType)
    effects.enter(type)
    effects.enter(type + 'Marker')
    effects.consume(code)
    effects.exit(type + 'Marker')
    return shortcutStartAfter
  }

  function shortcutStartAfter(code) {
    if (
      code === null /* EOF */ ||
      code === 34 /* `"` */ ||
      code === 35 /* `#` */ ||
      code === 39 /* `'` */ ||
      code === 46 /* `.` */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */ ||
      code === 125 /* `}` */ ||
      markdownLineEndingOrSpace(code)
    ) {
      return nok(code)
    }

    effects.enter(type + 'Value')
    effects.consume(code)
    return shortcut
  }

  function shortcut(code) {
    if (
      code === null /* EOF */ ||
      code === 34 /* `"` */ ||
      code === 39 /* `'` */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */
    ) {
      return nok(code)
    }

    if (
      code === 35 /* `#` */ ||
      code === 46 /* `.` */ ||
      code === 125 /* `}` */ ||
      markdownLineEndingOrSpace(code)
    ) {
      effects.exit(type + 'Value')
      effects.exit(type)
      effects.exit(attributeType)
      return between(code)
    }

    effects.consume(code)
    return shortcut
  }

  function name(code) {
    if (
      code === 45 /* `-` */ ||
      code === 46 /* `.` */ ||
      code === 58 /* `:` */ ||
      code === 95 /* `_` */ ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return name
    }

    effects.exit(attributeNameType)

    if (disallowEol && markdownSpace(code)) {
      return createSpace(effects, nameAfter, 'whitespace')(code)
    }

    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return createWhitespace(effects, nameAfter)(code)
    }

    return nameAfter(code)
  }

  function nameAfter(code) {
    if (code === 61 /* `=` */) {
      effects.enter(attributeInitializerType)
      effects.consume(code)
      effects.exit(attributeInitializerType)
      return valueBefore
    }

    // Attribute w/o value.
    effects.exit(attributeType)
    return between(code)
  }

  function valueBefore(code) {
    if (
      code === null /* EOF */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */ ||
      code === 125 /* `}` */ ||
      (disallowEol && markdownLineEnding(code))
    ) {
      return nok(code)
    }

    if (code === 34 /* `"` */ || code === 39 /* `'` */) {
      effects.enter(attributeValueLiteralType)
      effects.enter(attributeValueMarker)
      effects.consume(code)
      effects.exit(attributeValueMarker)
      marker = code
      return valueQuotedStart
    }

    if (disallowEol && markdownSpace(code)) {
      return createSpace(effects, valueBefore, 'whitespace')(code)
    }

    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return createWhitespace(effects, valueBefore)(code)
    }

    effects.enter(attributeValueType)
    effects.enter(attributeValueData)
    effects.consume(code)
    marker = undefined
    return valueUnquoted
  }

  function valueUnquoted(code) {
    if (
      code === null /* EOF */ ||
      code === 34 /* `"` */ ||
      code === 39 /* `'` */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */
    ) {
      return nok(code)
    }

    if (code === 125 /* `}` */ || markdownLineEndingOrSpace(code)) {
      effects.exit(attributeValueData)
      effects.exit(attributeValueType)
      effects.exit(attributeType)
      return between(code)
    }

    effects.consume(code)
    return valueUnquoted
  }

  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker)
      effects.consume(code)
      effects.exit(attributeValueMarker)
      effects.exit(attributeValueLiteralType)
      effects.exit(attributeType)
      return valueQuotedAfter
    }

    effects.enter(attributeValueType)
    return valueQuotedBetween(code)
  }

  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType)
      return valueQuotedStart(code)
    }

    if (code === null /* EOF */) {
      return nok(code)
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding(code)) {
      return disallowEol
        ? nok(code)
        : createWhitespace(effects, valueQuotedBetween)(code)
    }

    effects.enter(attributeValueData)
    effects.consume(code)
    return valueQuoted
  }

  function valueQuoted(code) {
    if (
      code === marker ||
      code === null /* EOF */ ||
      markdownLineEnding(code)
    ) {
      effects.exit(attributeValueData)
      return valueQuotedBetween(code)
    }

    effects.consume(code)
    return valueQuoted
  }

  function valueQuotedAfter(code) {
    return code === 125 /* `}` */ || markdownLineEndingOrSpace(code)
      ? between(code)
      : end(code)
  }

  function end(code) {
    if (code === 125 /* `}` */) {
      effects.enter(attributesMarkerType)
      effects.consume(code)
      effects.exit(attributesMarkerType)
      effects.exit(attributesType)
      return ok
    }

    return nok(code)
  }
}
