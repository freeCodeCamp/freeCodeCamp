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
export function classifyCharacter(
  code: Code
):
  | typeof constants.characterGroupWhitespace
  | typeof constants.characterGroupPunctuation
  | undefined
export type Code = import('micromark-util-types').Code
import {constants} from 'micromark-util-symbol'
