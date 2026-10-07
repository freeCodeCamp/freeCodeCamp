'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

function initializeRoutes (router, handler, quantity) {
  for (const x of Array(quantity).keys()) {
    router.on('GET', '/test-route-' + x, handler)
  }
  return router
}

test('verify routes registered', t => {
  const assertPerTest = 5
  const quantity = 5
  // 1 (check length) + quantity of routes * quantity of tests per route
  t.plan(1 + (quantity * assertPerTest))

  let findMyWay = FindMyWay()
  const defaultHandler = (req, res, params) => res.end(JSON.stringify({ hello: 'world' }))

  findMyWay = initializeRoutes(findMyWay, defaultHandler, quantity)
  t.assert.equal(findMyWay.routes.length, quantity)
  findMyWay.routes.forEach((route, idx) => {
    t.assert.equal(route.method, 'GET')
    t.assert.equal(route.path, '/test-route-' + idx)
    t.assert.deepStrictEqual(route.opts, {})
    t.assert.equal(route.handler, defaultHandler)
    t.assert.equal(route.store, undefined)
  })
})

test('verify routes registered and deregister', t => {
  // 1 (check length) + quantity of routes * quantity of tests per route
  t.plan(2)

  let findMyWay = FindMyWay()
  const quantity = 2
  const defaultHandler = (req, res, params) => res.end(JSON.stringify({ hello: 'world' }))

  findMyWay = initializeRoutes(findMyWay, defaultHandler, quantity)
  t.assert.equal(findMyWay.routes.length, quantity)
  findMyWay.off('GET', '/test-route-0')
  t.assert.equal(findMyWay.routes.length, quantity - 1)
})
