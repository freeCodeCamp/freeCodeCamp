module.exports = verifyAndReceive

const verify = require('../verify')

function verifyAndReceive (state, event) {
  const matchesSignature = verify(state.secret, event.payload, event.signature)

  if (!matchesSignature) {
    const error = new Error('signature does not match event payload and secret')

    error.event = event
    error.status = 400

    return state.eventHandler.receive(error)
  }

  return state.eventHandler.receive({
    id: event.id,
    name: event.name,
    payload: event.payload
  })
}
