/**
 * @typedef {import('micromark-util-types').Code} Code
 */

import {
  markdownLineEndingOrSpace,
  unicodePunctuation,
  unicodeWhitespace
} from 'micromark-util-character'
/**
 * Classify whether a code represents whitespace, punctuation, or something
 * else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * > 👉 **Note**: eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 *   Code.
 * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}
 *   Group.
 */
export function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }
  if (unicodePunctuation(code)) {
    return 2
  }
}
