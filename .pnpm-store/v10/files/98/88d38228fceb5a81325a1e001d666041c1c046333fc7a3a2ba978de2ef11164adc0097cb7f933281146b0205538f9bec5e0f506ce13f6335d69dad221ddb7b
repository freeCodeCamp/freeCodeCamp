'use strict'

var assert = require('assert')
var asciiAlpha = require('../character/ascii-alpha.js')
var asciiAlphanumeric = require('../character/ascii-alphanumeric.js')
var asciiAtext = require('../character/ascii-atext.js')
var asciiControl = require('../character/ascii-control.js')
var codes = require('../character/codes.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
}

function tokenizeAutolink(effects, ok, nok) {
  var size = 1

  return start

  function start(code) {
    assert__default['default'](code === codes.lessThan, 'expected `<`')
    effects.enter(types.autolink)
    effects.enter(types.autolinkMarker)
    effects.consume(code)
    effects.exit(types.autolinkMarker)
    effects.enter(types.autolinkProtocol)
    return open
  }

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return schemeOrEmailAtext
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code)
  }

  function schemeOrEmailAtext(code) {
    return code === codes.plusSign ||
      code === codes.dash ||
      code === codes.dot ||
      asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code)
  }

  function schemeInsideOrEmailAtext(code) {
    if (code === codes.colon) {
      effects.consume(code)
      return urlInside
    }

    if (
      (code === codes.plusSign ||
        code === codes.dash ||
        code === codes.dot ||
        asciiAlphanumeric(code)) &&
      size++ < constants.autolinkSchemeSizeMax
    ) {
      effects.consume(code)
      return schemeInsideOrEmailAtext
    }

    return emailAtext(code)
  }

  function urlInside(code) {
    if (code === codes.greaterThan) {
      effects.exit(types.autolinkProtocol)
      return end(code)
    }

    if (code === codes.space || code === codes.lessThan || asciiControl(code)) {
      return nok(code)
    }

    effects.consume(code)
    return urlInside
  }

  function emailAtext(code) {
    if (code === codes.atSign) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code)
      return emailAtext
    }

    return nok(code)
  }

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  function emailLabel(code) {
    if (code === codes.dot) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (code === codes.greaterThan) {
      // Exit, then change the type.
      effects.exit(types.autolinkProtocol).type = types.autolinkEmail
      return end(code)
    }

    return emailValue(code)
  }

  function emailValue(code) {
    if (
      (code === codes.dash || asciiAlphanumeric(code)) &&
      size++ < constants.autolinkDomainSizeMax
    ) {
      effects.consume(code)
      return code === codes.dash ? emailValue : emailLabel
    }

    return nok(code)
  }

  function end(code) {
    assert__default['default'].equal(code, codes.greaterThan, 'expected `>`')
    effects.enter(types.autolinkMarker)
    effects.consume(code)
    effects.exit(types.autolinkMarker)
    effects.exit(types.autolink)
    return ok
  }
}

module.exports = autolink
