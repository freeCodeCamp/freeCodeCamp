'use strict'

const { test } = require('node:test')
const { kReplyHijacked } = require('../lib/symbols')
const wrapThenable = require('../lib/wrap-thenable')
const Reply = require('../lib/reply')

test('should resolve immediately when reply[kReplyHijacked] is true', async t => {
  await new Promise(resolve => {
    const reply = {}
    reply[kReplyHijacked] = true
    const thenable = Promise.resolve()
    wrapThenable(thenable, reply)
    resolve()
  })
})

test('should reject immediately when reply[kReplyHijacked] is true', t => {
  t.plan(1)
  const reply = new Reply({}, {}, {})
  reply[kReplyHijacked] = true
  reply.log = {
    error: ({ err }) => {
      t.assert.strictEqual(err.message, 'Reply sent already')
    }
  }

  const thenable = Promise.reject(new Error('Reply sent already'))
  wrapThenable(thenable, reply)
})
