export default spaceFactory

import markdownSpace from '../character/markdown-space.mjs'

function spaceFactory(effects, ok, type, max) {
  var limit = max ? max - 1 : Infinity
  var size = 0

  return start

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type)
      return prefix(code)
    }

    return ok(code)
  }

  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code)
      return prefix
    }

    effects.exit(type)
    return ok(code)
  }
}
