'use strict'

Object.defineProperty(exports, '__esModule', {value: true})

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var factorySpace = require('../tokenize/factory-space.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var tokenize = initializeContent

function initializeContent(effects) {
  var contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  )
  var previous

  return contentStart

  function afterContentStartConstruct(code) {
    assert__default['default'](
      code === codes.eof || markdownLineEnding(code),
      'expected eol or eof'
    )

    if (code === codes.eof) {
      effects.consume(code)
      return
    }

    effects.enter(types.lineEnding)
    effects.consume(code)
    effects.exit(types.lineEnding)
    return factorySpace(effects, contentStart, types.linePrefix)
  }

  function paragraphInitial(code) {
    assert__default['default'](
      code !== codes.eof && !markdownLineEnding(code),
      'expected anything other than a line ending or EOF'
    )
    effects.enter(types.paragraph)
    return lineStart(code)
  }

  function lineStart(code) {
    var token = effects.enter(types.chunkText, {
      contentType: constants.contentTypeText,
      previous: previous
    })

    if (previous) {
      previous.next = token
    }

    previous = token

    return data(code)
  }

  function data(code) {
    if (code === codes.eof) {
      effects.exit(types.chunkText)
      effects.exit(types.paragraph)
      effects.consume(code)
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit(types.chunkText)
      return lineStart
    }

    // Data.
    effects.consume(code)
    return data
  }
}

exports.tokenize = tokenize
