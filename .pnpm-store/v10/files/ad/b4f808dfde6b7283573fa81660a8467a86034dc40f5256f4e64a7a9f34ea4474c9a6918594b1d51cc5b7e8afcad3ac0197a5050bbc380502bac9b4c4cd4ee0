'use strict'

module.exports = interElementWhiteSpace

// HTML white-space expression.
// See <https://html.spec.whatwg.org/#space-character>.
var re = /[ \t\n\f\r]/g

function interElementWhiteSpace(node) {
  var value

  if (node && typeof node === 'object' && node.type === 'text') {
    value = node.value || ''
  } else if (typeof node === 'string') {
    value = node
  } else {
    return false
  }

  return value.replace(re, '') === ''
}
