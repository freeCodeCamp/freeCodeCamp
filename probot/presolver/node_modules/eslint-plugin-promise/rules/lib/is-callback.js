var isNamedCallback = require('./is-named-callback')

function isCallingBack (node) {
  var isCallExpression = node.type === 'CallExpression'
  var callee = node.callee || {}
  var nameIsCallback = isNamedCallback(callee.name)
  var isCB = isCallExpression && nameIsCallback
  return isCB
}

module.exports = isCallingBack
