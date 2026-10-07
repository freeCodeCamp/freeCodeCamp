'use strict'

module.exports = createName

var asciiAlpha = require('micromark/dist/character/ascii-alpha')
var asciiAlphanumeric = require('micromark/dist/character/ascii-alphanumeric')

function createName(effects, ok, nok, nameType) {
  var self = this

  return start

  function start(code) {
    if (asciiAlpha(code)) {
      effects.enter(nameType)
      effects.consume(code)
      return name
    }

    return nok(code)
  }

  function name(code) {
    if (
      code === 45 /* `-` */ ||
      code === 95 /* `_` */ ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return name
    }

    effects.exit(nameType)
    // To do next major: disallow `-` at end of name too, for consistency.
    return self.previous === 95 /* `_` */ ? nok(code) : ok(code)
  }
}
