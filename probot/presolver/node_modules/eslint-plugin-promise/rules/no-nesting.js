/**
 * Rule: no-nesting
 * Avoid nesting your promises.
 */

var hasPromiseCallback = require('./lib/has-promise-callback')
var isInsidePromise = require('./lib/is-inside-promise')

module.exports = function (context) {
  return {
    CallExpression: function (node) {
      if (!hasPromiseCallback(node)) return
      if (context.getAncestors().some(isInsidePromise)) {
        context.report(node, 'Avoid nesting promises.')
      }
    }
  }
}
