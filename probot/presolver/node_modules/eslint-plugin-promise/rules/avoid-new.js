/**
 * Rule: avoid-new
 * Avoid creating new promises outside of utility libraries.
 */

module.exports = function (context) {
  return {
    NewExpression: function (node) {
      if (node.callee.name === 'Promise') {
        context.report(node, 'Avoid creating new promises.')
      }
    }
  }
}
