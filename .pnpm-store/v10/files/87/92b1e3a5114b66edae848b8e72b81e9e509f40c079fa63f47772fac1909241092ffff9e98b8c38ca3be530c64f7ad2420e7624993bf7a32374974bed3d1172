'use strict'

/**
 * @callback PromiseResolve
 * @param {any|PromiseLike<any>} value
 * @returns {void}
 */

/**
 * @callback PromiseReject
 * @param {any} reason
 * @returns {void}
 */

/**
 * @typedef PromiseObject
 * @property {Promise} promise
 * @property {PromiseResolve} resolve
 * @property {PromiseReject} reject
 */

/**
 * @returns {PromiseObject}
 */
function createPromise () {
  /**
   * @type {PromiseObject}
   */
  const obj = {
    resolve: null,
    reject: null,
    promise: null
  }

  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve
    obj.reject = reject
  })

  return obj
}

module.exports = {
  createPromise
}
