var codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented,
  resolve: resolveCodeIndented
}
export default codeIndented

import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import chunkedSplice from '../util/chunked-splice.mjs'
import prefixSize from '../util/prefix-size.mjs'
import spaceFactory from './factory-space.mjs'

var indentedContentConstruct = {
  tokenize: tokenizeIndentedContent,
  partial: true
}

function resolveCodeIndented(events, context) {
  var code = {
    type: types.codeIndented,
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  }

  chunkedSplice(events, 0, 0, [['enter', code, context]])
  chunkedSplice(events, events.length, 0, [['exit', code, context]])

  return events
}

function tokenizeCodeIndented(effects, ok, nok) {
  return effects.attempt(indentedContentConstruct, afterPrefix, nok)

  function afterPrefix(code) {
    if (code === codes.eof) {
      return ok(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code)
    }

    effects.enter(types.codeFlowValue)
    return content(code)
  }

  function content(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.codeFlowValue)
      return afterPrefix(code)
    }

    effects.consume(code)
    return content
  }
}

function tokenizeIndentedContent(effects, ok, nok) {
  var self = this

  return spaceFactory(
    effects,
    afterPrefix,
    types.linePrefix,
    constants.tabSize + 1
  )

  function afterPrefix(code) {
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      return spaceFactory(
        effects,
        afterPrefix,
        types.linePrefix,
        constants.tabSize + 1
      )
    }

    return prefixSize(self.events, types.linePrefix) < constants.tabSize
      ? nok(code)
      : ok(code)
  }
}
