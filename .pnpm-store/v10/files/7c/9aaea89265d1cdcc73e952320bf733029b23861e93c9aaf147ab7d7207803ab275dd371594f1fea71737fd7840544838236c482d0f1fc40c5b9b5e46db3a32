'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEnding = require('../character/markdown-line-ending.js')
var types = require('../constant/types.js')
var shallow = require('../util/shallow.js')
var factorySpace = require('./factory-space.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
}

function resolveToSetextUnderline(events, context) {
  var index = events.length
  var content
  var text
  var definition
  var heading

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === types.content) {
        content = index
        break
      }

      if (events[index][1].type === types.paragraph) {
        text = index
      }
    }
    // Exit
    else {
      if (events[index][1].type === types.content) {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1)
      }

      if (!definition && events[index][1].type === types.definition) {
        definition = index
      }
    }
  }

  heading = {
    type: types.setextHeading,
    start: shallow(events[text][1].start),
    end: shallow(events[events.length - 1][1].end)
  }

  // Change the paragraph to setext heading text.
  events[text][1].type = types.setextHeadingText

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context])
    events.splice(definition + 1, 0, ['exit', events[content][1], context])
    events[content][1].end = shallow(events[definition][1].end)
  } else {
    events[content][1] = heading
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context])

  return events
}

function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var marker
  var paragraph

  // Find an opening.
  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (
      self.events[index][1].type !== types.lineEnding &&
      self.events[index][1].type !== types.linePrefix &&
      self.events[index][1].type !== types.content
    ) {
      paragraph = self.events[index][1].type === types.paragraph
      break
    }
  }

  return start

  function start(code) {
    assert__default['default'](
      code === codes.dash || code === codes.equalsTo,
      'expected `=` or `-`'
    )

    if (!self.lazy && (self.interrupt || paragraph)) {
      effects.enter(types.setextHeadingLine)
      effects.enter(types.setextHeadingLineSequence)
      marker = code
      return closingSequence(code)
    }

    return nok(code)
  }

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code)
      return closingSequence
    }

    effects.exit(types.setextHeadingLineSequence)
    return factorySpace(effects, closingSequenceEnd, types.lineSuffix)(code)
  }

  function closingSequenceEnd(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.setextHeadingLine)
      return ok(code)
    }

    return nok(code)
  }
}

module.exports = setextUnderline
