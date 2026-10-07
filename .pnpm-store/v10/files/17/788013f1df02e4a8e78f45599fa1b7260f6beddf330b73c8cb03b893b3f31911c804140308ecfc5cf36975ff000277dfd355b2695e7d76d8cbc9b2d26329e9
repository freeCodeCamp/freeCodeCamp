var codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous: previous
}
export default codeText

import assert from 'assert'
import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import types from '../constant/types.mjs'

function resolveCodeText(events) {
  var tailExitIndex = events.length - 4
  var headEnterIndex = 3
  var index
  var enter

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === types.lineEnding ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === types.lineEnding ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === types.codeTextData) {
        // Then we have padding.
        events[tailExitIndex][1].type = events[headEnterIndex][1].type =
          types.codeTextPadding
        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (
        index !== tailExitIndex &&
        events[index][1].type !== types.lineEnding
      ) {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === types.lineEnding
    ) {
      events[enter][1].type = types.codeTextData

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== codes.graveAccent ||
    this.events[this.events.length - 1][1].type === types.characterEscape
  )
}

function tokenizeCodeText(effects, ok, nok) {
  var self = this
  var sizeOpen = 0
  var size
  var token

  return start

  function start(code) {
    assert(code === codes.graveAccent, 'expected `` ` ``')
    assert(previous.call(self, self.previous), 'expected correct previous')
    effects.enter(types.codeText)
    effects.enter(types.codeTextSequence)
    return openingSequence(code)
  }

  function openingSequence(code) {
    if (code === codes.graveAccent) {
      effects.consume(code)
      sizeOpen++
      return openingSequence
    }

    effects.exit(types.codeTextSequence)
    return gap(code)
  }

  function gap(code) {
    // EOF.
    if (code === codes.eof) {
      return nok(code)
    }

    // Closing fence?
    // Could also be data.
    if (code === codes.graveAccent) {
      token = effects.enter(types.codeTextSequence)
      size = 0
      return closingSequence(code)
    }

    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === codes.space) {
      effects.enter('space')
      effects.consume(code)
      effects.exit('space')
      return gap
    }

    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding)
      effects.consume(code)
      effects.exit(types.lineEnding)
      return gap
    }

    // Data.
    effects.enter(types.codeTextData)
    return data(code)
  }

  // In code.
  function data(code) {
    if (
      code === codes.eof ||
      code === codes.space ||
      code === codes.graveAccent ||
      markdownLineEnding(code)
    ) {
      effects.exit(types.codeTextData)
      return gap(code)
    }

    effects.consume(code)
    return data
  }

  // Closing fence.
  function closingSequence(code) {
    // More.
    if (code === codes.graveAccent) {
      effects.consume(code)
      size++
      return closingSequence
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit(types.codeTextSequence)
      effects.exit(types.codeText)
      return ok(code)
    }

    // More or less accents: mark as data.
    token.type = types.codeTextData
    return data(code)
  }
}
