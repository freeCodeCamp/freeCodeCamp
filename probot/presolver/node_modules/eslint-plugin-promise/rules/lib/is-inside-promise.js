function isInsidePromise (node) {
  var isFunctionExpression = node.type === 'FunctionExpression' ||
      node.type === 'ArrowFunctionExpression'
  var parent = node.parent || {}
  var callee = parent.callee || {}
  var name = callee.property && callee.property.name || ''
  var parentIsPromise = name === 'then' || name === 'catch'
  var isInCB = isFunctionExpression && parentIsPromise
  return isInCB
}

module.exports = isInsidePromise
