'use strict'

const diagnostics = require('node:diagnostics_channel')
const ContentType = require('./content-type')
const wrapThenable = require('./wrap-thenable')
const { validate: validateSchema } = require('./validation')
const { preValidationHookRunner, preHandlerHookRunner } = require('./hooks')
const { FST_ERR_CTP_INVALID_MEDIA_TYPE } = require('./errors')
const { setErrorStatusCode } = require('./error-status')
const {
  kReplyIsError,
  kRouteContext,
  kFourOhFourContext,
  kSupportedHTTPMethods
} = require('./symbols')

const channels = diagnostics.tracingChannel('fastify.request.handler')

function handleRequest (err, request, reply) {
  if (reply.sent === true) return
  if (err != null) {
    reply[kReplyIsError] = true
    reply.send(err)
    return
  }

  const method = request.method

  if (this[kSupportedHTTPMethods].bodyless.has(method)) {
    handler(request, reply)
    return
  }

  if (this[kSupportedHTTPMethods].bodywith.has(method)) {
    const headers = request.headers
    const ctHeader = headers['content-type']

    if (ctHeader === undefined) {
      const contentLength = headers['content-length']
      const transferEncoding = headers['transfer-encoding']
      const isEmptyBody = transferEncoding === undefined &&
        (contentLength === undefined || contentLength === '0')

      if (isEmptyBody) {
        // Request has no body to parse
        handler(request, reply)
        return
      }

      request[kRouteContext].contentTypeParser.run('', handler, request, reply)
      return
    }

    const contentType = new ContentType(ctHeader)
    if (contentType.isValid === false) {
      reply[kReplyIsError] = true
      reply.status(415).send(new FST_ERR_CTP_INVALID_MEDIA_TYPE())
      return
    }
    request[kRouteContext].contentTypeParser.run(contentType.toString(), handler, request, reply)
    return
  }

  // Return 404 instead of 405 see https://github.com/fastify/fastify/pull/862 for discussion
  handler(request, reply)
}

function handler (request, reply) {
  try {
    if (request[kRouteContext].preValidation !== null) {
      preValidationHookRunner(
        request[kRouteContext].preValidation,
        request,
        reply,
        preValidationCallback
      )
    } else {
      preValidationCallback(null, request, reply)
    }
  } catch (err) {
    preValidationCallback(err, request, reply)
  }
}

function preValidationCallback (err, request, reply) {
  if (reply.sent === true) return

  if (err != null) {
    reply[kReplyIsError] = true
    reply.send(err)
    return
  }

  const validationErr = validateSchema(reply[kRouteContext], request)
  const isAsync = (validationErr && typeof validationErr.then === 'function') || false

  if (isAsync) {
    const cb = validationCompleted.bind(null, request, reply)
    validationErr.then(cb, cb)
  } else {
    validationCompleted(request, reply, validationErr)
  }
}

function validationCompleted (request, reply, validationErr) {
  if (validationErr) {
    if (reply[kRouteContext].attachValidation === false) {
      reply.send(validationErr)
      return
    }

    reply.request.validationError = validationErr
  }

  // preHandler hook
  if (request[kRouteContext].preHandler !== null) {
    preHandlerHookRunner(
      request[kRouteContext].preHandler,
      request,
      reply,
      preHandlerCallback
    )
  } else {
    preHandlerCallback(null, request, reply)
  }
}

function preHandlerCallback (err, request, reply) {
  if (reply.sent) return

  const context = request[kRouteContext]

  if (!channels.hasSubscribers || context[kFourOhFourContext] === null) {
    preHandlerCallbackInner(err, request, reply)
  } else {
    const store = {
      request,
      reply,
      async: false,
      route: {
        url: context.config.url,
        method: context.config.method
      }
    }
    channels.start.runStores(store, preHandlerCallbackInner, undefined, err, request, reply, store)
  }
}

function preHandlerCallbackInner (err, request, reply, store) {
  const context = request[kRouteContext]

  try {
    if (err != null) {
      reply[kReplyIsError] = true
      if (store) {
        store.error = err
        // Set status code before publishing so subscribers see the correct value
        setErrorStatusCode(reply, err)
        channels.error.publish(store)
      }
      reply.send(err)
      return
    }

    let result

    try {
      result = context.handler(request, reply)
    } catch (err) {
      if (store) {
        store.error = err
        // Set status code before publishing so subscribers see the correct value
        setErrorStatusCode(reply, err)
        channels.error.publish(store)
      }

      reply[kReplyIsError] = true
      reply.send(err)
      return
    }

    if (result !== undefined) {
      if (result !== null && typeof result.then === 'function') {
        wrapThenable(result, reply, store)
      } else {
        reply.send(result)
      }
    }
  } finally {
    if (store) channels.end.publish(store)
  }
}

module.exports = handleRequest
module.exports[Symbol.for('internals')] = { handler, preHandlerCallback }
