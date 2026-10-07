'use strict'

var codes = require('../character/codes.js')
var markdownLineEndingOrSpace = require('../character/markdown-line-ending-or-space.js')
var unicodePunctuation = require('../character/unicode-punctuation.js')
var unicodeWhitespace = require('../character/unicode-whitespace.js')
var constants = require('../constant/constants.js')

// Classify whether a character is unicode whitespace, unicode punctuation, or
// anything else.
// Used for attention (emphasis, strong), whose sequences can open or close
// based on the class of surrounding characters.
function classifyCharacter(code) {
  if (
    code === codes.eof ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return constants.characterGroupWhitespace
  }

  if (unicodePunctuation(code)) {
    return constants.characterGroupPunctuation
  }
}

module.exports = classifyCharacter
