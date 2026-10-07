module.exports = footnote

var normalizeIdentifier = require('micromark/dist/util/normalize-identifier')
var blank = require('micromark/dist/tokenize/partial-blank-line')
var createSpace = require('micromark/dist/tokenize/factory-space')
var chunkedSplice = require('micromark/dist/util/chunked-splice')
var prefixSize = require('micromark/dist/util/prefix-size')
var shallow = require('micromark/dist/util/shallow')
var resolveAll = require('micromark/dist/util/resolve-all')

var indent = {tokenize: tokenizeIndent, partial: true}

function footnote(options) {
  var settings = options || {}
  var call = {tokenize: tokenizeFootnoteCall}
  var noteStart = {tokenize: tokenizeNoteStart, resolveAll: resolveAllNote}
  var noteEnd = {
    add: 'after',
    tokenize: tokenizeNoteEnd,
    resolveAll: resolveAllNote,
    resolveTo: resolveToNoteEnd
  }
  var definition = {
    tokenize: tokenizeDefinitionStart,
    continuation: {tokenize: tokenizeDefinitionContinuation},
    exit: footnoteDefinitionEnd
  }
  var text = {91: call}

  if (settings.inlineNotes) {
    text[93] = noteEnd
    text[94] = noteStart
  }

  return {
    _hiddenFootnoteSupport: {},
    document: {91: definition},
    text: text
  }
}

// Remove remaining note starts.
function resolveAllNote(events) {
  var length = events.length
  var index = -1
  var token

  while (++index < length) {
    token = events[index][1]

    if (events[index][0] === 'enter' && token.type === 'inlineNoteStart') {
      token.type = 'data'
      // Remove the two marker (`^[`).
      events.splice(index + 1, 4)
      length -= 4
    }
  }

  return events
}

function resolveToNoteEnd(events, context) {
  var index = events.length - 4
  var group
  var text
  var token
  var type
  var openIndex

  // Find an opening.
  while (index--) {
    token = events[index][1]

    // Find where the note starts.
    if (events[index][0] === 'enter' && token.type === 'inlineNoteStart') {
      openIndex = index
      type = 'inlineNote'
      break
    }
  }

  group = {
    type: type,
    start: shallow(events[openIndex][1].start),
    end: shallow(events[events.length - 1][1].end)
  }

  text = {
    type: 'inlineNoteText',
    start: shallow(events[openIndex + 4][1].end),
    end: shallow(events[events.length - 3][1].start)
  }

  var note = [
    ['enter', group, context],
    events[openIndex + 1],
    events[openIndex + 2],
    events[openIndex + 3],
    events[openIndex + 4],
    ['enter', text, context]
  ]

  chunkedSplice(
    note,
    note.length,
    0,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(openIndex + 6, -4),
      context
    )
  )

  note.push(
    ['exit', text, context],
    events[events.length - 2],
    events[events.length - 3],
    ['exit', group, context]
  )

  chunkedSplice(events, index, events.length - index, note)

  return events
}

function tokenizeFootnoteCall(effects, ok, nok) {
  var self = this
  var defined = self.parser.footnotes || (self.parser.footnotes = [])
  var size = 0
  var data

  return start

  function start(code) {
    // istanbul ignore next - Hooks.
    if (code !== 91) return nok(code)

    effects.enter('footnoteCall')
    effects.enter('footnoteCallLabelMarker')
    effects.consume(code)
    effects.exit('footnoteCallLabelMarker')
    return callStart
  }

  function callStart(code) {
    if (code !== 94) return nok(code)

    effects.enter('footnoteCallMarker')
    effects.consume(code)
    effects.exit('footnoteCallMarker')
    effects.enter('footnoteCallString')
    effects.enter('chunkString').contentType = 'string'
    return callData
  }

  function callData(code) {
    var token

    if (code === null || code === 91 || size++ > 999) {
      return nok(code)
    }

    if (code === 93) {
      if (!data) {
        return nok(code)
      }

      effects.exit('chunkString')
      token = effects.exit('footnoteCallString')
      return defined.indexOf(normalizeIdentifier(self.sliceSerialize(token))) <
        0
        ? nok(code)
        : end(code)
    }

    effects.consume(code)

    if (!(code < 0 || code === 32)) {
      data = true
    }

    return code === 92 ? callEscape : callData
  }

  function callEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code)
      size++
      return callData
    }

    return callData(code)
  }

  function end(code) {
    // Always a `]`.
    effects.enter('footnoteCallLabelMarker')
    effects.consume(code)
    effects.exit('footnoteCallLabelMarker')
    effects.exit('footnoteCall')
    return ok
  }
}

function tokenizeNoteStart(effects, ok, nok) {
  return start

  function start(code) {
    // istanbul ignore next - Hooks.
    if (code !== 94) return nok(code)

    effects.enter('inlineNoteStart')
    effects.enter('inlineNoteMarker')
    effects.consume(code)
    effects.exit('inlineNoteMarker')
    return noteStart
  }

  function noteStart(code) {
    if (code !== 91) return nok(code)

    effects.enter('inlineNoteStartMarker')
    effects.consume(code)
    effects.exit('inlineNoteStartMarker')
    effects.exit('inlineNoteStart')
    return ok
  }
}

function tokenizeNoteEnd(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    var index = self.events.length
    var hasStart

    // Find an opening.
    while (index--) {
      if (self.events[index][1].type === 'inlineNoteStart') {
        hasStart = true
        break
      }
    }

    // istanbul ignore next - Hooks.
    if (code !== 93 || !hasStart) {
      return nok(code)
    }

    effects.enter('inlineNoteEnd')
    effects.enter('inlineNoteEndMarker')
    effects.consume(code)
    effects.exit('inlineNoteEndMarker')
    effects.exit('inlineNoteEnd')
    return ok
  }
}

function tokenizeDefinitionStart(effects, ok, nok) {
  var self = this
  var defined = self.parser.footnotes || (self.parser.footnotes = [])
  var identifier
  var size = 0
  var data

  return start

  function start(code) {
    /* istanbul ignore if - hooks. */
    if (code !== 91) {
      return nok(code)
    }

    effects.enter('footnoteDefinition')._container = true
    effects.enter('footnoteDefinitionLabel')
    effects.enter('footnoteDefinitionLabelMarker')
    effects.consume(code)
    effects.exit('footnoteDefinitionLabelMarker')
    return labelStart
  }

  function labelStart(code) {
    // `^`
    if (code !== 94) return nok(code)

    effects.enter('footnoteDefinitionMarker')
    effects.consume(code)
    effects.exit('footnoteDefinitionMarker')
    effects.enter('footnoteDefinitionLabelString')
    return atBreak
  }

  function atBreak(code) {
    var token

    if (code === null || code === 91 || size > 999) {
      return nok(code)
    }

    if (code === 93) {
      if (!data) {
        return nok(code)
      }

      token = effects.exit('footnoteDefinitionLabelString')
      identifier = normalizeIdentifier(self.sliceSerialize(token))
      effects.enter('footnoteDefinitionLabelMarker')
      effects.consume(code)
      effects.exit('footnoteDefinitionLabelMarker')
      effects.exit('footnoteDefinitionLabel')
      return labelAfter
    }

    if (code === -5 || code === -4 || code === -3) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      size++
      return atBreak
    }

    effects.enter('chunkString').contentType = 'string'
    return label(code)
  }

  function label(code) {
    if (
      code === null ||
      code === -5 ||
      code === -4 ||
      code === -3 ||
      code === 91 ||
      code === 93 ||
      size > 999
    ) {
      effects.exit('chunkString')
      return atBreak(code)
    }

    if (!(code < 0 || code === 32)) {
      data = true
    }

    size++
    effects.consume(code)
    return code === 92 ? labelEscape : label
  }

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code)
      size++
      return label
    }

    return label(code)
  }

  function labelAfter(code) {
    if (code !== 58) {
      return nok(code)
    }

    effects.enter('definitionMarker')
    effects.consume(code)
    effects.exit('definitionMarker')
    return effects.check(blank, onBlank, nonBlank)
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true
    return done(code)
  }

  function nonBlank(code) {
    // A space or tab.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('footnoteDefinitionWhitespace')
      effects.consume(code)
      effects.exit('footnoteDefinitionWhitespace')
      return done(code)
    }

    // No space is also fine, just like a block quote marker.
    return done(code)
  }

  function done(code) {
    if (defined.indexOf(identifier) < 0) {
      defined.push(identifier)
    }

    return ok(code)
  }
}

function tokenizeDefinitionContinuation(effects, ok, nok) {
  var self = this

  return effects.check(blank, onBlank, notBlank)

  // Continued blank lines are fine.
  function onBlank(code) {
    if (self.containerState.initialBlankLine) {
      self.containerState.furtherBlankLines = true
    }

    return ok(code)
  }

  // If there were continued blank lines, or this isn’t indented at all.
  function notBlank(code) {
    if (
      self.containerState.furtherBlankLines ||
      !(code === -2 || code === -1 || code === 32)
    ) {
      return nok(code)
    }

    self.containerState.initialBlankLine = undefined
    self.containerState.furtherBlankLines = undefined
    return effects.attempt(indent, ok, nok)(code)
  }
}

function footnoteDefinitionEnd(effects) {
  effects.exit('footnoteDefinition')
}

function tokenizeIndent(effects, ok, nok) {
  var self = this

  return createSpace(effects, afterPrefix, 'footnoteDefinitionIndent', 5)

  function afterPrefix(code) {
    return prefixSize(self.events, 'footnoteDefinitionIndent') === 4
      ? ok(code)
      : nok(code)
  }
}
