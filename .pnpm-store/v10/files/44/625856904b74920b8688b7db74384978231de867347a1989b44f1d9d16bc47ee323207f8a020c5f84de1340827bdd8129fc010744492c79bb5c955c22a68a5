'use strict'

module.exports = ccount

function ccount(source, character) {
  var value = String(source)
  var count = 0
  var index

  if (typeof character !== 'string') {
    throw new Error('Expected character')
  }

  index = value.indexOf(character)

  while (index !== -1) {
    count++
    index = value.indexOf(character, index + character.length)
  }

  return count
}
