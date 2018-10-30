/**
 * Rule: prefer-await-to-callbacks
 * Discourage using then() and instead use async/await.
 */

var errorMessage = 'Avoid callbacks. Prefer Async/Await.'

module.exports = function (context) {
  function checkLastParamsForCallback (node) {
    var len = node.params.length - 1
    var lastParam = node.params[len]
    if (lastParam && (lastParam.name === 'callback' || lastParam.name === 'cb')) {
      context.report(lastParam, errorMessage)
    }
  }
  function isInsideYieldOrAwait () {
    return context.getAncestors().some(function (parent) {
      return parent.type === 'AwaitExpression' || parent.type === 'YieldExpression'
    })
  }
  return {
    CallExpression: function (node) {
      // callbacks aren't allowed
      if (node.callee.name === 'cb' || node.callee.name === 'callback') {
        context.report(node, errorMessage)
        return
      }

      // thennables aren't allowed either
      var args = node.arguments
      var num = args.length - 1
      var arg = num > -1 && node.arguments && node.arguments[num]
      if (arg && arg.type === 'FunctionExpression' || arg.type === 'ArrowFunctionExpression') {
        if (arg.params && arg.params[0] && arg.params[0].name === 'err') {
          if (!isInsideYieldOrAwait()) {
            context.report(arg, errorMessage)
          }
        }
      }
    },
    FunctionDeclaration: checkLastParamsForCallback,
    FunctionExpression: checkLastParamsForCallback,
    ArrowFunctionExpression: checkLastParamsForCallback
  }
}
