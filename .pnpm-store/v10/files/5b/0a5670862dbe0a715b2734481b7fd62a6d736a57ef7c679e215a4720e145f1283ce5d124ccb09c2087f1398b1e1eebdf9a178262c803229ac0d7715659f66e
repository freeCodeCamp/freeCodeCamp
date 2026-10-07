'use strict'

const { register, unregister } = require('../..')
const assert = require('assert')

function setup () {
  const obj = { foo: 'bar' }
  register(obj, shutdown)
  setImmediate(function () {
    unregister(obj)
    unregister(obj) // twice, this should not throw
  })
}

let shutdownCalled = false
function shutdown (obj) {
  shutdownCalled = true
}

setup()

process.on('exit', function () {
  assert.strictEqual(shutdownCalled, false)
})
