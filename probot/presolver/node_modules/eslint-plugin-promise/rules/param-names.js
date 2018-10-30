module.exports = {
  create: function (context) {
    return {
      NewExpression: function (node) {
        if (node.callee.name === 'Promise' && node.arguments.length === 1) {
          var params = node.arguments[0].params

          if (!params || !params.length) { return }

          if (params[0].name !== 'resolve') {
            return context.report(node, 'Promise constructor parameters must be named resolve, reject')
          }

          if (params[1] && params[1].name !== 'reject') {
            return context.report(node, 'Promise constructor parameters must be named resolve, reject')
          }
        }
      }
    }
  }
}
