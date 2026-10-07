'use strict'

const {
  kReplyIsError,
  kReplyHijacked
} = require('./symbols')
const { setErrorStatusCode } = require('./error-status')

const diagnostics = require('node:diagnostics_channel')
const channels = diagnostics.tracingChannel('fastify.request.handler')

function wrapThenable (thenable, reply, store) {
  if (store) store.async = true
  thenable.then(function (payload) {
    if (reply[kReplyHijacked] === true) {
      return
    }

    if (store) {
      channels.asyncStart.publish(store)
    }

    try {
      // this is for async functions that are using reply.send directly
      //
      // since wrap-thenable will be called when using reply.send directly
      // without actual return. the response can be sent already or
      // the request may be terminated during the reply. in this situation,
      // it require an extra checking of request.aborted to see whether
      // the request is killed by client.
      if (payload !== undefined || //
        (reply.sent === false && //
          reply.raw.headersSent === false &&
          reply.request.raw.aborted === false &&
          reply.request.socket &&
          !reply.request.socket.destroyed
        )
      ) {
        // we use a try-catch internally to avoid adding a catch to another
        // promise, increase promise perf by 10%
        try {
          reply.send(payload)
        } catch (err) {
          reply[kReplyIsError] = true
          reply.send(err)
        }
      }
    } finally {
      if (store) {
        channels.asyncEnd.publish(store)
      }
    }
  }, function (err) {
    if (store) {
      store.error = err
      // Set status code before publishing so subscribers see the correct value
      setErrorStatusCode(reply, err)
      channels.error.publish(store) // note that error happens before asyncStart
      channels.asyncStart.publish(store)
    }

    try {
      if (reply.sent === true) {
        reply.log.error({ err }, 'Promise errored, but reply.sent = true was set')
        return
      }

      reply[kReplyIsError] = true

      reply.send(err)
      // The following should not happen
      /* c8 ignore next 3 */
    } catch (err) {
      // try-catch allow to re-throw error in error handler for async handler
      reply.send(err)
    } finally {
      if (store) {
        channels.asyncEnd.publish(store)
      }
    }
  })
}

module.exports = wrapThenable
