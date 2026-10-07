module.exports = toNamed

var legacy = require('character-entities-legacy')
var characters = require('../constant/characters')
var fromCharCode = require('../constant/from-char-code')
var own = require('../constant/has-own-property')
var dangerous = require('../constant/dangerous.json')

// Transform `code` into a named character reference.
function toNamed(code, next, omit, attribute) {
  var character = fromCharCode(code)
  var name
  var value

  if (own.call(characters, character)) {
    name = characters[character]
    value = '&' + name

    if (
      omit &&
      own.call(legacy, name) &&
      dangerous.indexOf(name) === -1 &&
      (!attribute ||
        (next && next !== 61 /* `=` */ && /[^\da-z]/i.test(fromCharCode(next))))
    ) {
      return value
    }

    return value + ';'
  }

  return ''
}
