module.exports = Hook

var register = require('./lib/register')
var addHook = require('./lib/add')
var removeHook = require('./lib/remove')

function Hook () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  hook.remove = {}
  hook.api = {remove: {}}

  ;['before', 'error', 'after'].forEach(function (kind) {
    hook[kind] = hook.api[kind] = addHook.bind(null, state, kind)
    hook.remove[kind] = hook.api.remove[kind] = removeHook.bind(null, state, kind)
  })

  return hook
}
