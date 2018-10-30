module.exports = removeHook

function removeHook (state, kind, name, method) {
  if (!state.registry[name]) {
    return
  }

  var index = state.registry[name][kind].indexOf(method)

  if (index === -1) {
    return
  }

  state.registry[name][kind].splice(index, 1)
}
