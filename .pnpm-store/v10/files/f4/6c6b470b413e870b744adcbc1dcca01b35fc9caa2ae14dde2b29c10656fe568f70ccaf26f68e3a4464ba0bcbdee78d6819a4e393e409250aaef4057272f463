'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var types = require('../constant/types.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
}

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  function start(code) {
    assert__default['default'](code === codes.backslash, 'expected `\\`')
    effects.enter(types.hardBreakEscape)
    effects.enter(types.escapeMarker)
    effects.consume(code)
    return open
  }

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit(types.escapeMarker)
      effects.exit(types.hardBreakEscape)
      return ok(code)
    }

    return nok(code)
  }
}

module.exports = hardBreakEscape
