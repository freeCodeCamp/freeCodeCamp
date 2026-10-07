import labelEnd from './label-end.mjs'

var labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
}
export default labelStartLink

import assert from 'assert'
import codes from '../character/codes.mjs'
import types from '../constant/types.mjs'

function tokenizeLabelStartLink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    assert(code === codes.leftSquareBracket, 'expected `[`')
    effects.enter(types.labelLink)
    effects.enter(types.labelMarker)
    effects.consume(code)
    effects.exit(types.labelMarker)
    effects.exit(types.labelLink)
    return after
  }

  function after(code) {
    /* c8 ignore next */
    return code === codes.caret &&
      /* c8 ignore next */
      '_hiddenFootnoteSupport' in self.parser.constructs
      ? /* c8 ignore next */
        nok(code)
      : ok(code)
  }
}
