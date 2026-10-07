var parsePath = require('./lib/parse-path')
var setValue = require('./lib/set-value')

function appendField (store, key, value) {
  var steps = parsePath(key)

  steps.reduce(function (context, step) {
    return setValue(context, step, context[step.key], value)
  }, store)
}

module.exports = appendField
