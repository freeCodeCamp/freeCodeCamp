'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Wildcard route match when regexp route fails', (t) => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/:a(a)', () => {})
  findMyWay.on('GET', '/*', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/b', {}).params, { '*': 'b' })
})
