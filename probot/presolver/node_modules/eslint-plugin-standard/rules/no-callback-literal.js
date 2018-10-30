/**
 * Ensures that the callback pattern is followed properly
 * with an Error object (or undefined or null) in the first position.
 */

'use strict'

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Determine if a node has a possiblity to be an Error object
 * @param  {ASTNode}  node  ASTNode to check
 * @returns {boolean}       True if there is a chance it contains an Error obj
 */
function couldBeError (node) {
  switch (node.type) {
    case 'Identifier':
    case 'CallExpression':
    case 'NewExpression':
    case 'MemberExpression':
    case 'TaggedTemplateExpression':
    case 'YieldExpression':
      return true // possibly an error object.

    case 'AssignmentExpression':
      return couldBeError(node.right)

    case 'SequenceExpression':
      var exprs = node.expressions
      return exprs.length !== 0 && couldBeError(exprs[exprs.length - 1])

    case 'LogicalExpression':
      return couldBeError(node.left) || couldBeError(node.right)

    case 'ConditionalExpression':
      return couldBeError(node.consequent) || couldBeError(node.alternate)

    default:
      return node.value === null
  }
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    var callbackNames = context.options[0] || ['callback', 'cb']

    function isCallback (name) {
      return callbackNames.indexOf(name) > -1
    }

    return {

      CallExpression: function (node) {
        var errorArg = node.arguments[0]
        if (errorArg && isCallback(node.callee.name)) {
          if (!couldBeError(errorArg)) {
            context.report(node, 'Unexpected literal in error position of callback.')
          } else if (node.arguments.length > 1 && errorArg.type === 'Identifier') {
            if (errorArg.name === 'undefined') {
              context.report(node, 'Expected "null" instead of "undefined" in error position of callback.')
            }
          }
        }
      }
    }
  }
}
