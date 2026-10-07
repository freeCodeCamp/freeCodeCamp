module.exports = toHexReference

var fromCharCode = require('../constant/from-char-code')

// Transform `code` into a hexadecimal character reference.
function toHexReference(code, next, omit) {
  var value = '&#x' + code.toString(16).toUpperCase()
  return omit && next && !/[\dA-Fa-f]/.test(fromCharCode(next))
    ? value
    : value + ';'
}
