module.exports = flow

var repeat = require('repeat-string')

function flow(parent, context) {
  var children = parent.children || []
  var results = []
  var index = -1
  var child

  while (++index < children.length) {
    child = children[index]

    results.push(
      context.handle(child, parent, context, {before: '\n', after: '\n'})
    )

    if (index + 1 < children.length) {
      results.push(between(child, children[index + 1]))
    }
  }

  return results.join('')

  function between(left, right) {
    var index = -1
    var result

    while (++index < context.join.length) {
      result = context.join[index](left, right, parent, context)

      if (result === true || result === 1) {
        break
      }

      if (typeof result === 'number') {
        return repeat('\n', 1 + Number(result))
      }

      if (result === false) {
        return '\n\n<!---->\n\n'
      }
    }

    return '\n\n'
  }
}
