'use strict'

var VMessage = require('vfile-message')
var VFile = require('./core.js')

module.exports = VFile

var proto = VFile.prototype

proto.message = message
proto.info = info
proto.fail = fail

// Slight backwards compatibility.  Remove in the future.
proto.warn = message

// Create a message with `reason` at `position`.  When an error is passed in as
// `reason`, copies the stack.
function message(reason, position, origin) {
  var filePath = this.path
  var message = new VMessage(reason, position, origin)

  if (filePath) {
    message.name = filePath + ':' + message.name
    message.file = filePath
  }

  message.fatal = false

  this.messages.push(message)

  return message
}

// Fail.  Creates a vmessage, associates it with the file, and throws it.
function fail() {
  var message = this.message.apply(this, arguments)

  message.fatal = true

  throw message
}

// Info.  Creates a vmessage, associates it with the file, and marks the
// fatality as null.
function info() {
  var message = this.message.apply(this, arguments)

  message.fatal = null

  return message
}
