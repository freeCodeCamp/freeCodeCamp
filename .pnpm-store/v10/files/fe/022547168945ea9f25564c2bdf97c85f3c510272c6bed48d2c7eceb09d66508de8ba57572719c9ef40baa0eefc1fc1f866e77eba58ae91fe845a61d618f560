'use strict'

const { unregister, registerBeforeExit } = require('../..')
const assert = require('assert')

function setup () {
  const obj = { foo: 'bar' }
  registerBeforeExit(obj, shutdown)
}

let shutdownCalled = false
let timeoutFinished = false
function shutdown (obj, event) {
  console.log(event)
  shutdownCalled = true
  if (event === 'beforeExit') {
    setTimeout(function () {
      timeoutFinished = true
      assert.strictEqual(obj.foo, 'bar')
      unregister(obj)
    }, 100)
    process.on('beforeExit', function () {
      assert.strictEqual(timeoutFinished, true)
    })
  } else {
    throw new Error('different event')
  }
}

setup()

process.on('exit', function () {
  assert.strictEqual(shutdownCalled, true)
})
