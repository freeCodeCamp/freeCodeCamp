'use strict'

/**
 * @param {any} maybePromiseLike
 * @returns {maybePromiseLike is PromiseLike}
 */
function isPromiseLike (maybePromiseLike) {
  return (
    maybePromiseLike !== null &&
    typeof maybePromiseLike === 'object' &&
    typeof maybePromiseLike.then === 'function'
  )
}

module.exports = {
  isPromiseLike
}
