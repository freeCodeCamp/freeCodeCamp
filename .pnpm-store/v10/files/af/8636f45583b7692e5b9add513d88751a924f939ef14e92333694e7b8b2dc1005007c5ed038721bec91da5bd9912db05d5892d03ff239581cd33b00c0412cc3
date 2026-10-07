'use strict'

var codes = require('../character/codes.js')
var values = require('../character/values.js')
var fromCharCode = require('../constant/from-char-code.js')

function safeFromInt(value, base) {
  var code = parseInt(value, base)

  if (
    // C0 except for HT, LF, FF, CR, space
    code < codes.ht ||
    code === codes.vt ||
    (code > codes.cr && code < codes.space) ||
    // Control character (DEL) of the basic block and C1 controls.
    (code > codes.tilde && code < 160) ||
    // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) ||
    // Noncharacters.
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 ||
    // Out of range
    code > 1114111
  ) {
    return values.replacementCharacter
  }

  return fromCharCode(code)
}

module.exports = safeFromInt
