/**
 * Rule: prefer-await-to-then
 * Discourage using then() and instead use async/await.
 */

module.exports = function (context) {
  return {
    MemberExpression: function (node) {
      // you can then() if you are inside of a yield or await
      if (context.getAncestors().some(function (parent) {
        return parent.type === 'AwaitExpression' || parent.type === 'YieldExpression'
      })) {
        return
      }

      // if you're a then expression then you're probably a promise
      if (node.property && node.property.name === 'then') {
        context.report(node.property, 'Prefer await to then().')
      }
    }
  }
}
