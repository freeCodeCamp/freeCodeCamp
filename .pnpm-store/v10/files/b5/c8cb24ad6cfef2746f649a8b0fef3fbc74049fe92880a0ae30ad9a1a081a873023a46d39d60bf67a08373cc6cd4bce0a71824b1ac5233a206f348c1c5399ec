export default destinationFactory

import asciiControl from '../character/ascii-control.mjs'
import codes from '../character/codes.mjs'
import markdownLineEndingOrSpace from '../character/markdown-line-ending-or-space.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'

// eslint-disable-next-line max-params
function destinationFactory(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  var limit = max || Infinity
  var balance = 0

  return start

  function start(code) {
    if (code === codes.lessThan) {
      effects.enter(type)
      effects.enter(literalType)
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      return destinationEnclosedBefore
    }

    if (asciiControl(code) || code === codes.rightParenthesis) {
      return nok(code)
    }

    effects.enter(type)
    effects.enter(rawType)
    effects.enter(stringType)
    effects.enter(types.chunkString, {contentType: constants.contentTypeString})
    return destinationRaw(code)
  }

  function destinationEnclosedBefore(code) {
    if (code === codes.greaterThan) {
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      effects.exit(literalType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    effects.enter(types.chunkString, {contentType: constants.contentTypeString})
    return destinationEnclosed(code)
  }

  function destinationEnclosed(code) {
    if (code === codes.greaterThan) {
      effects.exit(types.chunkString)
      effects.exit(stringType)
      return destinationEnclosedBefore(code)
    }

    if (
      code === codes.eof ||
      code === codes.lessThan ||
      markdownLineEnding(code)
    ) {
      return nok(code)
    }

    effects.consume(code)
    return code === codes.backslash
      ? destinationEnclosedEscape
      : destinationEnclosed
  }

  function destinationEnclosedEscape(code) {
    if (
      code === codes.lessThan ||
      code === codes.greaterThan ||
      code === codes.backslash
    ) {
      effects.consume(code)
      return destinationEnclosed
    }

    return destinationEnclosed(code)
  }

  function destinationRaw(code) {
    if (code === codes.leftParenthesis) {
      if (++balance > limit) return nok(code)
      effects.consume(code)
      return destinationRaw
    }

    if (code === codes.rightParenthesis) {
      if (!balance--) {
        effects.exit(types.chunkString)
        effects.exit(stringType)
        effects.exit(rawType)
        effects.exit(type)
        return ok(code)
      }

      effects.consume(code)
      return destinationRaw
    }

    if (code === codes.eof || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code)
      effects.exit(types.chunkString)
      effects.exit(stringType)
      effects.exit(rawType)
      effects.exit(type)
      return ok(code)
    }

    if (asciiControl(code)) return nok(code)
    effects.consume(code)
    return code === codes.backslash ? destinationRawEscape : destinationRaw
  }

  function destinationRawEscape(code) {
    if (
      code === codes.leftParenthesis ||
      code === codes.rightParenthesis ||
      code === codes.backslash
    ) {
      effects.consume(code)
      return destinationRaw
    }

    return destinationRaw(code)
  }
}
