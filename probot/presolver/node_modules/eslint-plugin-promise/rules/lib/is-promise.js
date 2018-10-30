/**
 * Library: isPromise
 * Makes sure that an Expression node is part of a promise.
 */
var STATIC_METHODS = [
  'all',
  'race',
  'reject',
  'resolve'
]

function isPromise (expression) {
  return ( // hello.then()
  expression.type === 'CallExpression' &&
  expression.callee.type === 'MemberExpression' &&
  expression.callee.property.name === 'then'
  ) || ( // hello.catch()
  expression.type === 'CallExpression' &&
  expression.callee.type === 'MemberExpression' &&
  expression.callee.property.name === 'catch'
  ) || ( // somePromise.ANYTHING()
  expression.type === 'CallExpression' &&
  expression.callee.type === 'MemberExpression' &&
  isPromise(expression.callee.object)
  ) || ( // Promise.STATIC_METHOD()
  expression.type === 'CallExpression' &&
  expression.callee.type === 'MemberExpression' &&
  expression.callee.object.type === 'Identifier' &&
  expression.callee.object.name === 'Promise' &&
  STATIC_METHODS.indexOf(expression.callee.property.name) !== -1
  )
}

module.exports = isPromise
