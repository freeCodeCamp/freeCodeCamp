'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var markdownLineEndingOrSpace = require('../character/markdown-line-ending-or-space.js')
var types = require('../constant/types.js')
var normalizeIdentifier = require('../util/normalize-identifier.js')
var factoryDestination = require('./factory-destination.js')
var factoryLabel = require('./factory-label.js')
var factorySpace = require('./factory-space.js')
var factoryWhitespace = require('./factory-whitespace.js')
var factoryTitle = require('./factory-title.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
}

var titleConstruct = {tokenize: tokenizeTitle, partial: true}

function tokenizeDefinition(effects, ok, nok) {
  var self = this
  var identifier

  return start

  function start(code) {
    assert__default['default'](code === codes.leftSquareBracket, 'expected `[`')
    effects.enter(types.definition)
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      types.definitionLabel,
      types.definitionLabelMarker,
      types.definitionLabelString
    )(code)
  }

  function labelAfter(code) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    )

    if (code === codes.colon) {
      effects.enter(types.definitionMarker)
      effects.consume(code)
      effects.exit(types.definitionMarker)

      // Note: blank lines can’t exist in content.
      return factoryWhitespace(
        effects,
        factoryDestination(
          effects,
          effects.attempt(
            titleConstruct,
            factorySpace(effects, after, types.whitespace),
            factorySpace(effects, after, types.whitespace)
          ),
          nok,
          types.definitionDestination,
          types.definitionDestinationLiteral,
          types.definitionDestinationLiteralMarker,
          types.definitionDestinationRaw,
          types.definitionDestinationString
        )
      )
    }

    return nok(code)
  }

  function after(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.definition)

      if (self.parser.defined.indexOf(identifier) < 0) {
        self.parser.defined.push(identifier)
      }

      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeTitle(effects, ok, nok) {
  return start

  function start(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, before)(code)
      : nok(code)
  }

  function before(code) {
    if (
      code === codes.quotationMark ||
      code === codes.apostrophe ||
      code === codes.leftParenthesis
    ) {
      return factoryTitle(
        effects,
        factorySpace(effects, after, types.whitespace),
        nok,
        types.definitionTitle,
        types.definitionTitleMarker,
        types.definitionTitleString
      )(code)
    }

    return nok(code)
  }

  function after(code) {
    return code === codes.eof || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}

module.exports = definition
