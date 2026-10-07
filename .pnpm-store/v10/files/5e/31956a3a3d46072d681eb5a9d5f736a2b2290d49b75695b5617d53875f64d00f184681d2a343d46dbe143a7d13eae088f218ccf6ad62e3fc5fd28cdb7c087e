module.exports = toMarkdown

var zwitch = require('zwitch')
var configure = require('./configure')
var defaultHandlers = require('./handle')
var defaultJoin = require('./join')
var defaultUnsafe = require('./unsafe')

function toMarkdown(tree, options) {
  var settings = options || {}
  var context = {
    enter: enter,
    stack: [],
    unsafe: [],
    join: [],
    handlers: {},
    options: {}
  }
  var result

  configure(context, {
    unsafe: defaultUnsafe,
    join: defaultJoin,
    handlers: defaultHandlers
  })
  configure(context, settings)

  if (context.options.tightDefinitions) {
    context.join = [joinDefinition].concat(context.join)
  }

  context.handle = zwitch('type', {
    invalid: invalid,
    unknown: unknown,
    handlers: context.handlers
  })

  result = context.handle(tree, null, context, {before: '\n', after: '\n'})

  if (
    result &&
    result.charCodeAt(result.length - 1) !== 10 &&
    result.charCodeAt(result.length - 1) !== 13
  ) {
    result += '\n'
  }

  return result

  function enter(name) {
    context.stack.push(name)
    return exit

    function exit() {
      context.stack.pop()
    }
  }
}

function invalid(value) {
  throw new Error('Cannot handle value `' + value + '`, expected node')
}

function unknown(node) {
  throw new Error('Cannot handle unknown node `' + node.type + '`')
}

function joinDefinition(left, right) {
  // No blank line between adjacent definitions.
  if (left.type === 'definition' && left.type === right.type) {
    return 0
  }
}
