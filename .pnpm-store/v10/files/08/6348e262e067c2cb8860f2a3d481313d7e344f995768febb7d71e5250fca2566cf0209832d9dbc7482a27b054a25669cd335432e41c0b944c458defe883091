'use strict'

const { format } = require('node:util')

function toString () {
  return `${this.name} [${this.code}]: ${this.message}`
}

function createError (code, message, statusCode = 500, Base = Error) {
  if (!code) throw new Error('Fastify error code must not be empty')
  if (!message) throw new Error('Fastify error message must not be empty')

  code = code.toUpperCase()
  !statusCode && (statusCode = undefined)

  function FastifyError (...args) {
    if (!new.target) {
      return new FastifyError(...args)
    }

    this.code = code
    this.name = 'FastifyError'
    this.statusCode = statusCode

    const lastElement = args.length - 1
    if (lastElement !== -1 && args[lastElement] && typeof args[lastElement] === 'object' && 'cause' in args[lastElement]) {
      this.cause = args.pop().cause
    }

    this.message = format(message, ...args)

    Error.stackTraceLimit !== 0 && Error.captureStackTrace(this, FastifyError)
  }

  FastifyError.prototype = Object.create(Base.prototype, {
    constructor: {
      value: FastifyError,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })

  FastifyError.prototype[Symbol.toStringTag] = 'Error'

  FastifyError.prototype.toString = toString

  return FastifyError
}

module.exports = createError
module.exports.default = createError
module.exports.createError = createError
