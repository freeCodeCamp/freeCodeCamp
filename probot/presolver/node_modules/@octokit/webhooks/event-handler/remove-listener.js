'use strict'

module.exports = receiverListener

function receiverListener (state, webhookNameOrNames, handler) {
  if (Array.isArray(webhookNameOrNames)) {
    webhookNameOrNames.forEach(webhookName => receiverListener(state, webhookName, handler))
    return
  }

  if (!state.hooks[webhookNameOrNames]) {
    return
  }

  // remove last hook that has been added, that way
  // it behaves the same as removeListener
  for (let i = state.hooks[webhookNameOrNames].length; i > 0; i--) {
    if (state.hooks[webhookNameOrNames][i] === handler) {
      state.hooks[webhookNameOrNames].splice(i, 1)
      return
    }
  }
}
