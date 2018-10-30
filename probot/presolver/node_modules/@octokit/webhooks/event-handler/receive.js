'use strict'

module.exports = receiverHandle

const wrapErrorHandler = require('./wrap-error-handler')

// main handler function
function receiverHandle (state, event) {
  const errorHandlers = state.hooks.error || []

  if (event instanceof Error) {
    errorHandlers.forEach(handler => wrapErrorHandler(handler, event))

    return Promise.reject(event)
  }

  if (!event || !event.name) {
    throw new Error('Event name not passed')
  }

  if (!event.payload) {
    throw new Error('Event payload not passed')
  }

  // flatten arrays of event listeners and remove undefined values
  let hooks = [].concat(
    state.hooks[`${event.name}.${event.payload.action}`],
    state.hooks[event.name],
    state.hooks['*']
  ).filter(Boolean)

  if (hooks.length === 0) {
    return Promise.resolve()
  }

  const errors = []
  const promises = hooks.map(handler => {
    let promise = Promise.resolve(event)

    if (state.transform) {
      promise = promise.then(state.transform)
    }

    return promise.then((event) => {
      return handler(event)
    })

      .catch(error => errors.push(Object.assign(error, { event })))
  })

  return Promise.all(promises).then(() => {
    if (errors.length === 0) {
      return
    }

    errorHandlers.forEach(handler => errors.forEach(wrapErrorHandler.bind(null, handler)))

    const error = new Error('Webhook handler error')
    error.errors = errors

    throw error
  })
}
