'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')

test('Matching order', t => {
  t.plan(3)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/foo/bar/static', { constraints: { host: 'test' } }, () => {})
  findMyWay.on('GET', '/foo/bar/*', () => {})
  findMyWay.on('GET', '/foo/:param/static', () => {})

  t.assert.deepEqual(findMyWay.find('GET', '/foo/bar/static', { host: 'test' }).params, {})
  t.assert.deepEqual(findMyWay.find('GET', '/foo/bar/static').params, { '*': 'static' })
  t.assert.deepEqual(findMyWay.find('GET', '/foo/value/static').params, { param: 'value' })
})
