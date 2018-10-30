var isInsidePromise = require('./is-inside-promise')

function isInsideCallback (node) {
  var isCallExpression = node.type === 'FunctionExpression' ||
    node.type === 'ArrowFunctionExpression' ||
    node.type === 'FunctionDeclaration' // this may be controversial

  // it's totally fine to use promises inside promises
  if (isInsidePromise(node)) return

  var name = node.params && node.params[0] && node.params[0].name
  var firstArgIsError = name === 'err' || name === 'error'
  var isInACallback = isCallExpression && firstArgIsError
  return isInACallback
}

module.exports = isInsideCallback
