var partialBlankLine = {
  tokenize: tokenizePartialBlankLine,
  partial: true
}
export default partialBlankLine

import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import types from '../constant/types.mjs'
import spaceFactory from './factory-space.mjs'

function tokenizePartialBlankLine(effects, ok, nok) {
  return spaceFactory(effects, afterWhitespace, types.linePrefix)

  function afterWhitespace(code) {
    return code === codes.eof || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}
