var markdownLineEndingOrSpace = require('micromark/dist/character/markdown-line-ending-or-space')
var spaceFactory = require('micromark/dist/tokenize/factory-space')
var prefixSize = require('micromark/dist/util/prefix-size')

var tasklistCheck = {tokenize: tokenizeTasklistCheck}

exports.text = {91: tasklistCheck}

function tokenizeTasklistCheck(effects, ok, nok) {
  var self = this

  return open

  function open(code) {
    if (
      // Exit if not `[`.
      code !== 91 ||
      // Exit if there’s stuff before.
      self.previous !== null ||
      // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code)
    }

    effects.enter('taskListCheck')
    effects.enter('taskListCheckMarker')
    effects.consume(code)
    effects.exit('taskListCheckMarker')
    return inside
  }

  function inside(code) {
    // Tab or space.
    if (code === -2 || code === 32) {
      effects.enter('taskListCheckValueUnchecked')
      effects.consume(code)
      effects.exit('taskListCheckValueUnchecked')
      return close
    }

    // Upper- and lower `x`.
    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked')
      effects.consume(code)
      effects.exit('taskListCheckValueChecked')
      return close
    }

    return nok(code)
  }

  function close(code) {
    // `]`
    if (code === 93) {
      effects.enter('taskListCheckMarker')
      effects.consume(code)
      effects.exit('taskListCheckMarker')
      effects.exit('taskListCheck')
      return effects.check({tokenize: spaceThenNonSpace}, ok, nok)
    }

    return nok(code)
  }
}

function spaceThenNonSpace(effects, ok, nok) {
  var self = this

  return spaceFactory(effects, after, 'whitespace')

  function after(code) {
    return prefixSize(self.events, 'whitespace') &&
      code !== null &&
      !markdownLineEndingOrSpace(code)
      ? ok(code)
      : nok(code)
  }
}
