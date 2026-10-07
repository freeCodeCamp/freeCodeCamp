'use strict'

const { debug } = require('./debug')
const { kThenifyDoNotWrap } = require('./symbols')

/**
 * @callback PromiseConstructorLikeResolve
 * @param {any} value
 * @returns {void}
 */

/**
 * @callback PromiseConstructorLikeReject
 * @param {reason} error
 * @returns {void}
 */

/**
 * @callback PromiseConstructorLike
 * @param {PromiseConstructorLikeResolve} resolve
 * @param {PromiseConstructorLikeReject} reject
 * @returns {void}
 */

/**
 * @returns {PromiseConstructorLike}
 */
function thenify () {
  // If the instance is ready, then there is
  // nothing to await. This is true during
  // await server.ready() as ready() resolves
  // with the server, end we will end up here
  // because of automatic promise chaining.
  if (this.booted) {
    debug('thenify returning undefined because we are already booted')
    return
  }

  // Calling resolve(this._server) would fetch the then
  // property on the server, which will lead it here.
  // If we do not break the recursion, we will loop
  // forever.
  if (this[kThenifyDoNotWrap]) {
    this[kThenifyDoNotWrap] = false
    return
  }

  debug('thenify')
  return (resolve, reject) => {
    const p = this._loadRegistered()
    return p.then(() => {
      this[kThenifyDoNotWrap] = true
      return resolve(this._server)
    }, reject)
  }
}

module.exports = {
  thenify
}
