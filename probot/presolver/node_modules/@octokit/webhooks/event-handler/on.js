module.exports = receiverOn

const webhookNames = require('../lib/webhook-names.json')

function receiverOn (state, webhookNameOrNames, handler) {
  if (Array.isArray(webhookNameOrNames)) {
    webhookNameOrNames.forEach(webhookName => receiverOn(state, webhookName, handler))
    return
  }

  if (webhookNames.indexOf(webhookNameOrNames) === -1) {
    console.warn(`"${webhookNameOrNames}" is not a known webhook name (https://developer.github.com/v3/activity/events/types/)`)
  }

  if (!state.hooks[webhookNameOrNames]) {
    state.hooks[webhookNameOrNames] = []
  }

  state.hooks[webhookNameOrNames].push(handler)
}
