'use strict'

const { register } = require('../..')
const assert = require('assert')

function setup () {
  const obj = { foo: 'bar' }
  register(obj, shutdown)
}

let shutdownCalled = false
function shutdown (obj) {
  shutdownCalled = true
  assert.strictEqual(obj.foo, 'bar')
}

setup()

process.on('exit', function () {
  assert.strictEqual(shutdownCalled, true)
})
