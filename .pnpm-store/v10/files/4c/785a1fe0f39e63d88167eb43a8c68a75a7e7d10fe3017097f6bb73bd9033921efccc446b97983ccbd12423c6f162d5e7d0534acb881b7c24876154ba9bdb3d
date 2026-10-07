'use strict'

const statusCodes = require('node:http').STATUS_CODES
const wrapThenable = require('./wrap-thenable.js')
const { setErrorStatusCode } = require('./error-status.js')
const {
  kReplyHeaders,
  kReplyNextErrorHandler,
  kReplyIsRunningOnErrorHook,
  kRouteContext,
  kDisableRequestLogging
} = require('./symbols.js')

const {
  FST_ERR_REP_INVALID_PAYLOAD_TYPE,
  FST_ERR_FAILED_ERROR_SERIALIZATION
} = require('./errors')

const { getSchemaSerializer } = require('./schemas')

const serializeError = require('./error-serializer')

const rootErrorHandler = {
  func: defaultErrorHandler,
  toJSON () {
    return this.func.name.toString() + '()'
  }
}

function handleError (reply, error, cb) {
  reply[kReplyIsRunningOnErrorHook] = false

  const context = reply[kRouteContext]
  if (reply[kReplyNextErrorHandler] === false) {
    fallbackErrorHandler(error, reply, function (reply, payload) {
      try {
        reply.raw.writeHead(reply.raw.statusCode, reply[kReplyHeaders])
      } catch (error) {
        if (!reply.log[kDisableRequestLogging]) {
          reply.log.warn(
            { req: reply.request, res: reply, err: error },
            error?.message
          )
        }
        reply.raw.writeHead(reply.raw.statusCode)
      }
      reply.raw.end(payload)
    })
    return
  }
  const errorHandler = reply[kReplyNextErrorHandler] || context.errorHandler

  // In case the error handler throws, we set the next errorHandler so we can error again
  reply[kReplyNextErrorHandler] = Object.getPrototypeOf(errorHandler)

  // we need to remove content-type to allow content-type guessing for serialization
  delete reply[kReplyHeaders]['content-type']
  delete reply[kReplyHeaders]['content-length']

  const func = errorHandler.func

  if (!func) {
    reply[kReplyNextErrorHandler] = false
    fallbackErrorHandler(error, reply, cb)
    return
  }

  try {
    const result = func(error, reply.request, reply)
    if (result !== undefined) {
      if (result !== null && typeof result.then === 'function') {
        wrapThenable(result, reply)
      } else {
        reply.send(result)
      }
    }
  } catch (err) {
    reply.send(err)
  }
}

function defaultErrorHandler (error, request, reply) {
  setErrorHeaders(error, reply)
  setErrorStatusCode(reply, error)
  if (reply.statusCode < 500) {
    if (!reply.log[kDisableRequestLogging]) {
      reply.log.info(
        { res: reply, err: error },
        error?.message
      )
    }
  } else {
    if (!reply.log[kDisableRequestLogging]) {
      reply.log.error(
        { req: request, res: reply, err: error },
        error?.message
      )
    }
  }
  reply.send(error)
}

function fallbackErrorHandler (error, reply, cb) {
  const res = reply.raw
  const statusCode = reply.statusCode
  reply[kReplyHeaders]['content-type'] = reply[kReplyHeaders]['content-type'] ?? 'application/json; charset=utf-8'
  let payload
  try {
    const serializerFn = getSchemaSerializer(reply[kRouteContext], statusCode, reply[kReplyHeaders]['content-type'])
    if (serializerFn === false) {
      payload = serializeError({
        error: statusCodes[statusCode + ''],
        code: error.code,
        message: error.message,
        statusCode
      })
    } else {
      payload = serializerFn(Object.create(error, {
        error: { value: statusCodes[statusCode + ''] },
        message: { value: error.message },
        statusCode: { value: statusCode }
      }))
    }
  } catch (err) {
    if (!reply.log[kDisableRequestLogging]) {
      // error is always FST_ERR_SCH_SERIALIZATION_BUILD because this is called from route/compileSchemasForSerialization
      reply.log.error({ err, statusCode: res.statusCode }, 'The serializer for the given status code failed')
    }
    reply.code(500)
    payload = serializeError(new FST_ERR_FAILED_ERROR_SERIALIZATION(err.message, error.message))
  }

  if (typeof payload !== 'string' && !Buffer.isBuffer(payload)) {
    payload = serializeError(new FST_ERR_REP_INVALID_PAYLOAD_TYPE(typeof payload))
  }

  reply[kReplyHeaders]['content-length'] = '' + Buffer.byteLength(payload)

  cb(reply, payload)
}

function buildErrorHandler (parent = rootErrorHandler, func) {
  if (!func) {
    return parent
  }

  const errorHandler = Object.create(parent)
  errorHandler.func = func
  return errorHandler
}

function setErrorHeaders (error, reply) {
  const res = reply.raw
  let statusCode = res.statusCode
  statusCode = (statusCode >= 400) ? statusCode : 500
  // treat undefined and null as same
  if (error != null) {
    if (error.headers !== undefined) {
      reply.headers(error.headers)
    }
    if (error.status >= 400) {
      statusCode = error.status
    } else if (error.statusCode >= 400) {
      statusCode = error.statusCode
    }
  }
  res.statusCode = statusCode
}

module.exports = {
  buildErrorHandler,
  handleError
}
