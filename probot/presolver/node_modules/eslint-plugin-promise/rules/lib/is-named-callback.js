var callbacks = ['done', 'cb', 'callback', 'next']

module.exports = function isNamedCallback (potentialCallbackName) {
  return callbacks.some(function (trueCallbackName) {
    return potentialCallbackName === trueCallbackName
  })
}
