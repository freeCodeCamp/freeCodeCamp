function HARError (errors) {
  var message = 'validation failed'

  this.name = 'HARError'
  this.message = message
  this.errors = errors

  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, this.constructor)
  } else {
    this.stack = (new Error(message)).stack
  }
}

HARError.prototype = Error.prototype

module.exports = HARError
