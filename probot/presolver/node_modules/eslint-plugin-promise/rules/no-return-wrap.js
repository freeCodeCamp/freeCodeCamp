/**
 * Rule: no-return-wrap function
 * Prevents uneccessary wrapping of results in Promise.resolve
 * or Promise.reject as the Promise will do that for us
 */

'use strict'

var isPromise = require('./lib/is-promise')
var rejectMessage = 'Expected throw instead of Promise.reject'
var resolveMessage = 'Avoid wrapping return values in Promise.resolve'

function isInPromise (context) {
  var expression = context.getAncestors().filter(function (node) {
    return node.type === 'ExpressionStatement'
  })[0]
  return expression && expression.expression && isPromise(expression.expression)
}

module.exports = {
  create: function (context) {
    return {
      ReturnStatement: function (node) {
        if (isInPromise(context)) {
          if (node.argument) {
            if (node.argument.type === 'CallExpression') {
              if (node.argument.callee.type === 'MemberExpression') {
                if (node.argument.callee.object.name === 'Promise') {
                  if (node.argument.callee.property.name === 'resolve') {
                    context.report(node, resolveMessage)
                  } else if (node.argument.callee.property.name === 'reject') {
                    context.report(node, rejectMessage)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
