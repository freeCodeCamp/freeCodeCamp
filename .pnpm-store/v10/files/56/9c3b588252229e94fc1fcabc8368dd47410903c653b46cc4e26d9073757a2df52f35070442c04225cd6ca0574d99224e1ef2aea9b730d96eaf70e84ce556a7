'use strict'

var markdownLineEnding = require('../character/markdown-line-ending.js')
var markdownSpace = require('../character/markdown-space.js')
var types = require('../constant/types.js')
var factorySpace = require('./factory-space.js')

function whitespaceFactory(effects, ok) {
  var seen

  return start

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      seen = true
      return start
    }

    if (markdownSpace(code)) {
      return factorySpace(
        effects,
        start,
        seen ? types.linePrefix : types.lineSuffix
      )(code)
    }

    return ok(code)
  }
}

module.exports = whitespaceFactory
