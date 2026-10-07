'use strict'

var assert = require('assert')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var types = require('../constant/types.js')
var factorySpace = require('./factory-space.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
}

function tokenizeLineEnding(effects, ok) {
  return start

  function start(code) {
    assert__default['default'](markdownLineEnding(code), 'expected eol')
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return factorySpace(effects, ok, types.linePrefix)
  }
}

module.exports = lineEnding
