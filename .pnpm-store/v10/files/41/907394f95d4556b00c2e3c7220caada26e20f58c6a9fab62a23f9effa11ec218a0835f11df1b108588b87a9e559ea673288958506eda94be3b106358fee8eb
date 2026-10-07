'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('handler should have the store object', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', (req, res, params, store) => {
    t.assert.equal(store.hello, 'world')
  }, { hello: 'world' })

  findMyWay.lookup({ method: 'GET', url: '/test', headers: {} }, null)
})

test('find a store object', t => {
  t.plan(1)
  const findMyWay = FindMyWay()
  const fn = () => {}

  findMyWay.on('GET', '/test', fn, { hello: 'world' })

  t.assert.deepEqual(findMyWay.find('GET', '/test'), {
    handler: fn,
    params: {},
    store: { hello: 'world' },
    searchParams: {}
  })
})

test('update the store', t => {
  t.plan(2)
  const findMyWay = FindMyWay()
  let bool = false

  findMyWay.on('GET', '/test', (req, res, params, store) => {
    if (!bool) {
      t.assert.equal(store.hello, 'world')
      store.hello = 'hello'
      bool = true
      findMyWay.lookup({ method: 'GET', url: '/test', headers: {} }, null)
    } else {
      t.assert.equal(store.hello, 'hello')
    }
  }, { hello: 'world' })

  findMyWay.lookup({ method: 'GET', url: '/test', headers: {} }, null)
})
