'use strict'

const { test } = require('node:test')

const Response = require('../lib/response')

test('multiple calls to res.destroy should not be called', (t, done) => {
  t.plan(2)

  const mockReq = {}
  const res = new Response(mockReq, (err) => {
    t.assert.ok(err)
    t.assert.strictEqual(err.code, 'LIGHT_ECONNRESET')
    done()
  })

  res.destroy()
  res.destroy()
})
