'use strict'

const {
  kReplyHasStatusCode
} = require('./symbols')

function setErrorStatusCode (reply, err) {
  if (!reply[kReplyHasStatusCode] || reply.statusCode === 200) {
    const statusCode = err && (err.statusCode || err.status)
    reply.code(statusCode >= 400 ? statusCode : 500)
  }
}

module.exports = { setErrorStatusCode }
