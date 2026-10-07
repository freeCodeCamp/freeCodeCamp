var lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
}
export default lineEnding

import assert from 'assert'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import types from '../constant/types.mjs'
import spaceFactory from './factory-space.mjs'

function tokenizeLineEnding(effects, ok) {
  return start

  function start(code) {
    assert(markdownLineEnding(code), 'expected eol')
    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return spaceFactory(effects, ok, types.linePrefix)
  }
}
