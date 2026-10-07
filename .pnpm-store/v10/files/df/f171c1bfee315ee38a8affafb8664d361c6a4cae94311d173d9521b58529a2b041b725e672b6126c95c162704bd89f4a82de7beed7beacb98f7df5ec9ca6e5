'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')

test('If there are constraints param, router.off method support filter', t => {
  t.plan(12)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/a', { constraints: { host: '1' } }, () => {}, { name: 1 })
  findMyWay.on('GET', '/a', { constraints: { host: '2', version: '1.0.0' } }, () => {}, { name: 2 })
  findMyWay.on('GET', '/a', { constraints: { host: '2', version: '2.0.0' } }, () => {}, { name: 3 })

  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '1' }).store, { name: 1 })
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '1.0.0' }).store, { name: 2 })
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '2.0.0' }).store, { name: 3 })

  findMyWay.off('GET', '/a', { host: '1' })

  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '1' }), null)
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '1.0.0' }).store, { name: 2 })
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '2.0.0' }).store, { name: 3 })

  findMyWay.off('GET', '/a', { host: '2', version: '1.0.0' })

  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '1' }), null)
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '1.0.0' }), null)
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '2.0.0' }).store, { name: 3 })

  findMyWay.off('GET', '/a', { host: '2', version: '2.0.0' })

  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '1' }), null)
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '1.0.0' }), null)
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2', version: '2.0.0' }), null)
})

test('If there are no constraints param, router.off method remove all matched router', t => {
  t.plan(4)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/a', { constraints: { host: '1' } }, () => {}, { name: 1 })
  findMyWay.on('GET', '/a', { constraints: { host: '2' } }, () => {}, { name: 2 })

  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '1' }).store, { name: 1 })
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2' }).store, { name: 2 })

  findMyWay.off('GET', '/a')

  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '1' }), null)
  t.assert.deepEqual(findMyWay.find('GET', '/a', { host: '2' }), null)
})
