'use strict'

function isUtf8MimeType (value) {
  const len = value.length
  return (
    (len > 21 && value.indexOf('application/javascript') === 0) ||
    (len > 14 && value.indexOf('application/json') === 0) ||
    (len > 5 && value.indexOf('text/') === 0)
  )
}

module.exports.isUtf8MimeType = isUtf8MimeType
