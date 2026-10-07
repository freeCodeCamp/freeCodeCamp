export default combineHtmlExtensions

import own from '../constant/has-own-property.mjs'

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
    left = own.call(handlers, hook) ? handlers[hook] : (handlers[hook] = {})
    right = extension[hook]

    for (type in right) {
      left[type] = right[type]
    }
  }
}
