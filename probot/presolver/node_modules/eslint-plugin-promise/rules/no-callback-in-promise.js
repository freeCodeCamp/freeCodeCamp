/**
 * Rule: no-callback-in-promise
 * Avoid calling back inside of a promise
 */

var hasPromiseCallback = require('./lib/has-promise-callback')
var isInsidePromise = require('./lib/is-inside-promise')
var isCallback = require('./lib/is-callback')

module.exports = function (context) {
  return {
    CallExpression: function (node) {
      if (!isCallback(node)) {
        // in general we send you packing if you're not a callback
        // but we also need to watch out for whatever.then(cb)
        if (hasPromiseCallback(node)) {
          var name = node.arguments && node.arguments[0] && node.arguments[0].name
          if (name === 'callback' || name === 'cb' || name === 'next' || name === 'done') {
            context.report(node.arguments[0], 'Avoid calling back inside of a promise.')
          }
        }
        return
      }
      if (context.getAncestors().some(isInsidePromise)) {
        context.report(node, 'Avoid calling back inside of a promise.')
      }
    }
  }
}
