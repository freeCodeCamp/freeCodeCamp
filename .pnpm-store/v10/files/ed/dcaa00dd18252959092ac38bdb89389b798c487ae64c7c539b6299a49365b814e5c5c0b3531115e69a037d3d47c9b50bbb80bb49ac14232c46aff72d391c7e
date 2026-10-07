'use strict'

var alphabetical = require('is-alphabetical')
var decimal = require('is-decimal')

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}
