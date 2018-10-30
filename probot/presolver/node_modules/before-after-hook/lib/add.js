module.exports = addHook

function addHook (state, kind, name, hook) {
  if (!state.registry[name]) {
    state.registry[name] = {
      before: [],
      error: [],
      after: []
    }
  }

  state.registry[name][kind][kind === 'before' ? 'unshift' : 'push'](hook)
}
