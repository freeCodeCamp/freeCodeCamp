'use strict'

const { kTestInternals } = require('./symbols')

function withResolvers () {
  let res, rej
  const promise = new Promise((resolve, reject) => {
    res = resolve
    rej = reject
  })
  return { promise, resolve: res, reject: rej }
}

module.exports = {
  // TODO(20.x): remove when node@20 is not supported
  withResolvers: typeof Promise.withResolvers === 'function'
    ? Promise.withResolvers.bind(Promise) // Promise.withResolvers must bind to itself
    /* c8 ignore next */
    : withResolvers, // Tested using the kTestInternals
  [kTestInternals]: {
    withResolvers
  }
}
