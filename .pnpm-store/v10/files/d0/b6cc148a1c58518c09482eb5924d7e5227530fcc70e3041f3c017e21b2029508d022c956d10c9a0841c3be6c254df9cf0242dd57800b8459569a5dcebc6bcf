'use strict'

var labelEnd = require('./label-end.js')
var assert = require('assert')
var codes = require('../character/codes.js')
var types = require('../constant/types.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
}

function tokenizeLabelStartImage(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    assert__default['default'](code === codes.exclamationMark, 'expected `!`')
    effects.enter(types.labelImage)
    effects.enter(types.labelImageMarker)
    effects.consume(code)
    effects.exit(types.labelImageMarker)
    return open
  }

  function open(code) {
    if (code === codes.leftSquareBracket) {
      effects.enter(types.labelMarker)
      effects.consume(code)
      effects.exit(types.labelMarker)
      effects.exit(types.labelImage)
      return after
    }

    return nok(code)
  }

  function after(code) {
    /* c8 ignore next */
    return code === codes.caret &&
      /* c8 ignore next */
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? /* c8 ignore next */ nok(code)
      : ok(code)
  }
}

module.exports = labelStartImage
