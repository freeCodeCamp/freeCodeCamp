'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')

test('Set method property when splitting node', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  function handler (req, res, params) {
    t.assert.ok()
  }

  findMyWay.on('GET', '/health-a/health', handler)
  findMyWay.on('GET', '/health-b/health', handler)

  t.assert.ok(!findMyWay.prettyPrint().includes('undefined'))
})
