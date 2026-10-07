module.exports = toDecimalReference

var fromCharCode = require('../constant/from-char-code')

// Transform `code` into a decimal character reference.
function toDecimalReference(code, next, omit) {
  var value = '&#' + String(code)
  return omit && next && !/\d/.test(fromCharCode(next)) ? value : value + ';'
}
