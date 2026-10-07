'use strict'

Object.defineProperty(exports, '__esModule', {value: true})

var codes = require('../character/codes.js')
var assign = require('../constant/assign.js')
var constants = require('../constant/constants.js')
var types = require('../constant/types.js')
var shallow = require('../util/shallow.js')

var text = initializeFactory('text')
var string = initializeFactory('string')
var resolver = {resolveAll: createResolver()}

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === 'text' ? resolveAllLineSuffixes : undefined
    )
  }

  function initializeText(effects) {
    var self = this
    var constructs = this.parser.constructs[field]
    var text = effects.attempt(constructs, start, notText)

    return start

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    function notText(code) {
      if (code === codes.eof) {
        effects.consume(code)
        return
      }

      effects.enter(types.data)
      effects.consume(code)
      return data
    }

    function data(code) {
      if (atBreak(code)) {
        effects.exit(types.data)
        return text(code)
      }

      // Data.
      effects.consume(code)
      return data
    }

    function atBreak(code) {
      var list = constructs[code]
      var index = -1

      if (code === codes.eof) {
        return true
      }

      if (list) {
        while (++index < list.length) {
          if (
            !list[index].previous ||
            list[index].previous.call(self, self.previous)
          ) {
            return true
          }
        }
      }
    }
  }
}

function createResolver(extraResolver) {
  return resolveAllText

  function resolveAllText(events, context) {
    var index = -1
    var enter

    // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.
    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === types.data) {
          enter = index
          index++
        }
      } else if (!events[index] || events[index][1].type !== types.data) {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end
          events.splice(enter + 2, index - enter - 2)
          index = enter + 2
        }

        enter = undefined
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
}

// A rather ugly set of instructions which again looks at chunks in the input
// stream.
// The reason to do this here is that it is *much* faster to parse in reverse.
// And that we can’t hook into `null` to split the line suffix before an EOF.
// To do: figure out if we can make this into a clean utility, or even in core.
// As it will be useful for GFMs literal autolink extension (and maybe even
// tables?)
function resolveAllLineSuffixes(events, context) {
  var eventIndex = -1
  var chunks
  var data
  var chunk
  var index
  var bufferIndex
  var size
  var tabs
  var token

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === types.lineEnding) &&
      events[eventIndex - 1][1].type === types.data
    ) {
      data = events[eventIndex - 1][1]
      chunks = context.sliceStream(data)
      index = chunks.length
      bufferIndex = -1
      size = 0
      tabs = undefined

      while (index--) {
        chunk = chunks[index]

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length

          while (chunk.charCodeAt(bufferIndex - 1) === codes.space) {
            size++
            bufferIndex--
          }

          if (bufferIndex) break
          bufferIndex = -1
        }
        // Number
        else if (chunk === codes.horizontalTab) {
          tabs = true
          size++
        } else if (chunk === codes.virtualSpace);
        else {
          // Replacement character, exit.
          index++
          break
        }
      }

      if (size) {
        token = {
          type:
            eventIndex === events.length ||
            tabs ||
            size < constants.hardBreakPrefixSizeMin
              ? types.lineSuffix
              : types.hardBreakTrailing,
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },
          end: shallow(data.end)
        }

        data.end = shallow(token.start)

        if (data.start.offset === data.end.offset) {
          assign(data, token)
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          )
          eventIndex += 2
        }
      }

      eventIndex++
    }
  }

  return events
}

exports.resolver = resolver
exports.string = string
exports.text = text
