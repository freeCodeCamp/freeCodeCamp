'use strict'

const { register } = require('../..')
const assert = require('assert')

function setup () {
  let obj = { foo: 'bar' }
  register(obj, shutdown)
  setImmediate(function () {
    obj = undefined
    gc() // eslint-disable-line
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
