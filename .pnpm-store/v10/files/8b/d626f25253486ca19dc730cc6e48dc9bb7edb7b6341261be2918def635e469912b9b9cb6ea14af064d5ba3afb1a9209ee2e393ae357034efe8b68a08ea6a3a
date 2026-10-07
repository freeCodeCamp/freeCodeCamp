'use strict'

const { test } = require('node:test')

const Request = require('../lib/request')

test('aborted property should be false', async (t) => {
  const mockReq = {
    url: 'http://localhost',
    method: 'GET',
    headers: {}
  }
  const req = new Request(mockReq)

  t.assert.strictEqual(req.aborted, false)
})
