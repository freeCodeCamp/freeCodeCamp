module.exports = list

var flow = require('../util/container-flow')

function list(node, _, context) {
  var exit = context.enter('list')
  var value = flow(node, context)
  exit()
  return value
}
