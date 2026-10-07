'use strict'

var hasOwnProperty = require('../constant/has-own-property.js')

// Combine several HTML extensions into one.
function combineHtmlExtensions(extensions) {
  var handlers = {}
  var index = -1

  while (++index < extensions.length) {
    extension(handlers, extensions[index])
  }

  return handlers
}

function extension(handlers, extension) {
  var hook
  var left
  var right
  var type

  for (hook in extension) {
    left = hasOwnProperty.call(handlers, hook)
      ? handlers[hook]
      : (handlers[hook] = {})
    right = extension[hook]

    for (type in right) {
      left[type] = right[type]
    }
  }
}

module.exports = combineHtmlExtensions
