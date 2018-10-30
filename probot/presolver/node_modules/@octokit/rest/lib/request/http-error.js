'use strict'

const STATUS_CODES = {
  304: 'Not Modified', // See PR #673 (https://github.com/octokit/rest.js/pull/673)
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
}

module.exports = class HttpError extends Error {
  constructor (message, code, headers) {
    super(message)
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    /* istanbul ignore else */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
    this.name = 'HttpError'
    this.code = code
    this.status = STATUS_CODES[code]
    this.headers = headers
  }

  toString () {
    return this.message
  }

  toJSON () {
    return {
      code: this.code,
      status: this.status,
      message: this.message
    }
  }
}
