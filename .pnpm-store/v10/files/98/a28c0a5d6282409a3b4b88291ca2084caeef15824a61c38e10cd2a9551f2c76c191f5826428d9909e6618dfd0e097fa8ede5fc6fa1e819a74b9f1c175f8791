'use strict'

exports.tokenize = tokenizeDirectiveContainer
exports.concrete = true

var markdownLineEnding = require('micromark/dist/character/markdown-line-ending')
var createSpace = require('micromark/dist/tokenize/factory-space')
var prefixSize = require('micromark/dist/util/prefix-size')
var createAttributes = require('./factory-attributes')
var createLabel = require('./factory-label')
var createName = require('./factory-name')

var label = {tokenize: tokenizeLabel, partial: true}
var attributes = {tokenize: tokenizeAttributes, partial: true}

function tokenizeDirectiveContainer(effects, ok, nok) {
  var self = this
  var initialPrefix = prefixSize(this.events, 'linePrefix')
  var sizeOpen = 0
  var previous

  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 58 /* `:` */) throw new Error('expected `:`')
    effects.enter('directiveContainer')
    effects.enter('directiveContainerFence')
    effects.enter('directiveContainerSequence')
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === 58 /* `:` */) {
      effects.consume(code)
      sizeOpen++
      return sequenceOpen
    }

    if (sizeOpen < 3) {
      return nok(code)
    }

    effects.exit('directiveContainerSequence')
    return createName.call(
      self,
      effects,
      afterName,
      nok,
      'directiveContainerName'
    )(code)
  }

  function afterName(code) {
    return code === 91 /* `[` */
      ? effects.attempt(label, afterLabel, afterLabel)(code)
      : afterLabel(code)
  }

  function afterLabel(code) {
    return code === 123 /* `{` */
      ? effects.attempt(attributes, afterAttributes, afterAttributes)(code)
      : afterAttributes(code)
  }

  function afterAttributes(code) {
    return createSpace(effects, openAfter, 'whitespace')(code)
  }

  function openAfter(code) {
    effects.exit('directiveContainerFence')

    if (code === null) {
      effects.exit('directiveContainer')
      return ok(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return self.interrupt ? ok : contentStart
    }

    return nok(code)
  }

  function contentStart(code) {
    if (code === null) {
      effects.exit('directiveContainer')
      return ok(code)
    }

    effects.enter('directiveContainerContent')
    return lineStart(code)
  }

  function lineStart(code) {
    if (code === null) {
      return after(code)
    }

    return effects.attempt(
      {tokenize: tokenizeClosingFence, partial: true},
      after,
      initialPrefix
        ? createSpace(effects, chunkStart, 'linePrefix', initialPrefix + 1)
        : chunkStart
    )(code)
  }

  function chunkStart(code) {
    var token

    if (code === null) {
      return after(code)
    }

    token = effects.enter('chunkDocument', {
      contentType: 'document',
      previous: previous
    })
    if (previous) previous.next = token
    previous = token
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null) {
      effects.exit('chunkDocument')
      return after(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit('chunkDocument')
      return lineStart
    }

    effects.consume(code)
    return contentContinue
  }

  function after(code) {
    effects.exit('directiveContainerContent')
    effects.exit('directiveContainer')
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0

    return createSpace(effects, closingPrefixAfter, 'linePrefix', 4)

    function closingPrefixAfter(code) {
      effects.enter('directiveContainerFence')
      effects.enter('directiveContainerSequence')
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === 58 /* `:` */) {
        effects.consume(code)
        size++
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('directiveContainerSequence')
      return createSpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('directiveContainerFence')
        return ok(code)
      }

      return nok(code)
    }
  }
}

function tokenizeLabel(effects, ok, nok) {
  // Always a `[`
  return createLabel(
    effects,
    ok,
    nok,
    'directiveContainerLabel',
    'directiveContainerLabelMarker',
    'directiveContainerLabelString',
    true
  )
}

function tokenizeAttributes(effects, ok, nok) {
  // Always a `{`
  return createAttributes(
    effects,
    ok,
    nok,
    'directiveContainerAttributes',
    'directiveContainerAttributesMarker',
    'directiveContainerAttribute',
    'directiveContainerAttributeId',
    'directiveContainerAttributeClass',
    'directiveContainerAttributeName',
    'directiveContainerAttributeInitializerMarker',
    'directiveContainerAttributeValueLiteral',
    'directiveContainerAttributeValue',
    'directiveContainerAttributeValueMarker',
    'directiveContainerAttributeValueData',
    true
  )
}
