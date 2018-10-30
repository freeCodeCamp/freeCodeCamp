/**
 * Rule: no-promise-in-callback
 * Discourage using promises inside of callbacks.
 */

var isPromise = require('./lib/is-promise')
var isInsideCallback = require('./lib/is-inside-callback')

module.exports = function (context) {
  return {
    CallExpression: function (node) {
      if (!isPromise(node)) return

      // if i'm returning the promise, it's probably not really a callback
      // function, and I should be okay....
      if (node.parent.type === 'ReturnStatement') return

      // what about if the parent is an ArrowFunctionExpression
      // would that imply an implicit return?

      if (context.getAncestors().some(isInsideCallback)) {
        context.report(node.callee, 'Avoid using promises inside of callbacks.')
      }
    }
  }
}
