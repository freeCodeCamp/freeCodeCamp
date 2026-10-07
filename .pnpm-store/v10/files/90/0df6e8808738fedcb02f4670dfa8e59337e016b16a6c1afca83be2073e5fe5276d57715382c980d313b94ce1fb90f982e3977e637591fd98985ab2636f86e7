'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')

test('lookup calls route handler with no context', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/example', function handle (req, res, params) {
    // without context, this will be the result object returned from router.find
    t.assert.equal(this.handler, handle)
  })

  findMyWay.lookup({ method: 'GET', url: '/example', headers: {} }, null)
})

test('lookup calls route handler with context as scope', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  const ctx = { foo: 'bar' }

  findMyWay.on('GET', '/example', function handle (req, res, params) {
    t.assert.equal(this, ctx)
  })

  findMyWay.lookup({ method: 'GET', url: '/example', headers: {} }, null, ctx)
})

test('lookup calls default route handler with no context', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    defaultRoute (req, res) {
      // without context, the default route's scope is the router itself
      t.assert.equal(this, findMyWay)
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/example', headers: {} }, null)
})

test('lookup calls default route handler with context as scope', t => {
  t.plan(1)

  const ctx = { foo: 'bar' }

  const findMyWay = FindMyWay({
    defaultRoute (req, res) {
      t.assert.equal(this, ctx)
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/example', headers: {} }, null, ctx)
})
