export default classifyCharacter

import codes from '../character/codes.mjs'
import markdownLineEndingOrSpace from '../character/markdown-line-ending-or-space.mjs'
import unicodePunctuation from '../character/unicode-punctuation.mjs'
import unicodeWhitespace from '../character/unicode-whitespace.mjs'
import constants from '../constant/constants.mjs'

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
