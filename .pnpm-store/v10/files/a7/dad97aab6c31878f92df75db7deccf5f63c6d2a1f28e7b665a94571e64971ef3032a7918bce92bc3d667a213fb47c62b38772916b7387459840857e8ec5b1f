'use strict'

var assert = require('assert')
var codes = require('../character/codes.js')
var markdownLineEndingOrSpace = require('../character/markdown-line-ending-or-space.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var chunkedPush = require('../util/chunked-push.js')
var chunkedSplice = require('../util/chunked-splice.js')
var normalizeIdentifier = require('../util/normalize-identifier.js')
var resolveAll = require('../util/resolve-all.js')
var shallow = require('../util/shallow.js')
var factoryDestination = require('./factory-destination.js')
var factoryLabel = require('./factory-label.js')
var factoryTitle = require('./factory-title.js')
var factoryWhitespace = require('./factory-whitespace.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var assert__default = /*#__PURE__*/ _interopDefaultLegacy(assert)

var labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
}

var resourceConstruct = {tokenize: tokenizeResource}
var fullReferenceConstruct = {tokenize: tokenizeFullReference}
var collapsedReferenceConstruct = {tokenize: tokenizeCollapsedReference}

function resolveAllLabelEnd(events) {
  var index = -1
  var token

  while (++index < events.length) {
    token = events[index][1]

    if (
      !token._used &&
      (token.type === types.labelImage ||
        token.type === types.labelLink ||
        token.type === types.labelEnd)
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === types.labelImage ? 4 : 2)
      token.type = types.data
      index++
    }
  }

  return events
}

function resolveToLabelEnd(events, context) {
  var index = events.length
  var offset = 0
  var group
  var label
  var text
  var token
  var open
  var close
  var media

  // Find an opening.
  while (index--) {
    token = events[index][1]

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === types.link ||
        (token.type === types.labelLink && token._inactive)
      ) {
        break
      }

      // Mark other link openings as inactive, as we can’t have links in
      // links.
      if (events[index][0] === 'enter' && token.type === types.labelLink) {
        token._inactive = true
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === types.labelImage || token.type === types.labelLink) &&
        !token._balanced
      ) {
        open = index

        if (token.type !== types.labelLink) {
          offset = 2
          break
        }
      }
    } else if (token.type === types.labelEnd) {
      close = index
    }
  }

  group = {
    type: events[open][1].type === types.labelLink ? types.link : types.image,
    start: shallow(events[open][1].start),
    end: shallow(events[events.length - 1][1].end)
  }

  label = {
    type: types.label,
    start: shallow(events[open][1].start),
    end: shallow(events[close][1].end)
  }

  text = {
    type: types.labelText,
    start: shallow(events[open + offset + 2][1].end),
    end: shallow(events[close - 2][1].start)
  }

  media = [
    ['enter', group, context],
    ['enter', label, context]
  ]

  // Opening marker.
  media = chunkedPush(media, events.slice(open + 1, open + offset + 3))

  // Text open.
  media = chunkedPush(media, [['enter', text, context]])

  // Between.
  media = chunkedPush(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  )

  // Text close, marker close, label close.
  media = chunkedPush(media, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ])

  // Reference, resource, or so.
  media = chunkedPush(media, events.slice(close + 1))

  // Media close.
  media = chunkedPush(media, [['exit', group, context]])

  chunkedSplice(events, open, events.length, media)

  return events
}

function tokenizeLabelEnd(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var labelStart
  var defined

  // Find an opening.
  while (index--) {
    if (
      (self.events[index][1].type === types.labelImage ||
        self.events[index][1].type === types.labelLink) &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1]
      break
    }
  }

  return start

  function start(code) {
    assert__default['default'](
      code === codes.rightSquareBracket,
      'expected `]`'
    )

    if (!labelStart) {
      return nok(code)
    }

    // It’s a balanced bracket, but contains a link.
    if (labelStart._inactive) return balanced(code)
    defined =
      self.parser.defined.indexOf(
        normalizeIdentifier(
          self.sliceSerialize({start: labelStart.end, end: self.now()})
        )
      ) > -1
    effects.enter(types.labelEnd)
    effects.enter(types.labelMarker)
    effects.consume(code)
    effects.exit(types.labelMarker)
    effects.exit(types.labelEnd)
    return afterLabelEnd
  }

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === codes.leftParenthesis) {
      return effects.attempt(
        resourceConstruct,
        ok,
        defined ? ok : balanced
      )(code)
    }

    // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
    if (code === codes.leftSquareBracket) {
      return effects.attempt(
        fullReferenceConstruct,
        ok,
        defined
          ? effects.attempt(collapsedReferenceConstruct, ok, balanced)
          : balanced
      )(code)
    }

    // Shortcut reference: `[asd]`?
    return defined ? ok(code) : balanced(code)
  }

  function balanced(code) {
    labelStart._balanced = true
    return nok(code)
  }
}

function tokenizeResource(effects, ok, nok) {
  return start

  function start(code) {
    assert__default['default'].equal(
      code,
      codes.leftParenthesis,
      'expected left paren'
    )
    effects.enter(types.resource)
    effects.enter(types.resourceMarker)
    effects.consume(code)
    effects.exit(types.resourceMarker)
    return factoryWhitespace(effects, open)
  }

  function open(code) {
    if (code === codes.rightParenthesis) {
      return end(code)
    }

    return factoryDestination(
      effects,
      destinationAfter,
      nok,
      types.resourceDestination,
      types.resourceDestinationLiteral,
      types.resourceDestinationLiteralMarker,
      types.resourceDestinationRaw,
      types.resourceDestinationString,
      constants.linkResourceDestinationBalanceMax
    )(code)
  }

  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? factoryWhitespace(effects, between)(code)
      : end(code)
  }

  function between(code) {
    if (
      code === codes.quotationMark ||
      code === codes.apostrophe ||
      code === codes.leftParenthesis
    ) {
      return factoryTitle(
        effects,
        factoryWhitespace(effects, end),
        nok,
        types.resourceTitle,
        types.resourceTitleMarker,
        types.resourceTitleString
      )(code)
    }

    return end(code)
  }

  function end(code) {
    if (code === codes.rightParenthesis) {
      effects.enter(types.resourceMarker)
      effects.consume(code)
      effects.exit(types.resourceMarker)
      effects.exit(types.resource)
      return ok
    }

    return nok(code)
  }
}

function tokenizeFullReference(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    assert__default['default'].equal(
      code,
      codes.leftSquareBracket,
      'expected left bracket'
    )
    return factoryLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      types.reference,
      types.referenceMarker,
      types.referenceString
    )(code)
  }

  function afterLabel(code) {
    return self.parser.defined.indexOf(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) < 0
      ? nok(code)
      : ok(code)
  }
}

function tokenizeCollapsedReference(effects, ok, nok) {
  return start

  function start(code) {
    assert__default['default'].equal(
      code,
      codes.leftSquareBracket,
      'expected left bracket'
    )
    effects.enter(types.reference)
    effects.enter(types.referenceMarker)
    effects.consume(code)
    effects.exit(types.referenceMarker)
    return open
  }

  function open(code) {
    if (code === codes.rightSquareBracket) {
      effects.enter(types.referenceMarker)
      effects.consume(code)
      effects.exit(types.referenceMarker)
      effects.exit(types.reference)
      return ok
    }

    return nok(code)
  }
}

module.exports = labelEnd
