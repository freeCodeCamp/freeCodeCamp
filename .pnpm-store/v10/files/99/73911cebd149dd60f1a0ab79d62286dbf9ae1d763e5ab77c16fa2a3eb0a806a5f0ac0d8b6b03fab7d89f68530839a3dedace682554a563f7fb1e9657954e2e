'use strict'

const { test } = require('node:test')
const rfdc = require('rfdc')({ proto: true })
const FindMyWay = require('..')

function equalRouters (t, router1, router2) {
  t.assert.deepStrictEqual(router1._opts, router2._opts)
  t.assert.deepEqual(router1.routes, router2.routes)
  t.assert.deepEqual(JSON.stringify(router1.trees), JSON.stringify(router2.trees))

  t.assert.deepStrictEqual(router1.constrainer.strategies, router2.constrainer.strategies)
  t.assert.deepStrictEqual(
    router1.constrainer.strategiesInUse,
    router2.constrainer.strategiesInUse
  )
  t.assert.deepStrictEqual(
    router1.constrainer.asyncStrategiesInUse,
    router2.constrainer.asyncStrategiesInUse
  )
}

test('findRoute returns null if there is no routes', (t) => {
  t.plan(7)

  const findMyWay = FindMyWay()
  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/example')
  t.assert.equal(route, null)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler and store for a static route', (t) => {
  t.plan(9)

  const findMyWay = FindMyWay()

  const handler = () => {}
  const store = { hello: 'world' }
  findMyWay.on('GET', '/example', handler, store)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/example')
  t.assert.equal(route.handler, handler)
  t.assert.equal(route.store, store)
  t.assert.deepEqual(route.params, [])

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns null for a static route', (t) => {
  t.plan(7)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/example', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/example1')
  t.assert.equal(route, null)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler and params for a parametric route', (t) => {
  t.plan(8)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/:param', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/:param')
  t.assert.equal(route.handler, handler)
  t.assert.deepEqual(route.params, ['param'])

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns null for a parametric route', (t) => {
  t.plan(7)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/foo/:param', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/bar/:param')
  t.assert.equal(route, null)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler and params for a parametric route with static suffix', (t) => {
  t.plan(8)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/:param-static', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/:param-static')
  t.assert.equal(route.handler, handler)
  t.assert.deepEqual(route.params, ['param'])

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns null for a parametric route with static suffix', (t) => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:param-static1', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/:param-static2')
  t.assert.equal(route, null)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler and original params even if a param name different', (t) => {
  t.plan(8)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/:param1', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/:param2')
  t.assert.equal(route.handler, handler)
  t.assert.deepEqual(route.params, ['param1'])

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler and params for a multi-parametric route', (t) => {
  t.plan(8)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/:param1-:param2', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/:param1-:param2')
  t.assert.equal(route.handler, handler)
  t.assert.deepEqual(route.params, ['param1', 'param2'])

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns null for a multi-parametric route', (t) => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo/:param1-:param2/bar1', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/foo/:param1-:param2/bar2')
  t.assert.equal(route, null)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler and regexp param for a regexp route', (t) => {
  t.plan(8)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/:param(^\\d+$)', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/:param(^\\d+$)')
  t.assert.equal(route.handler, handler)
  t.assert.deepEqual(route.params, ['param'])

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns null for a regexp route', (t) => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:file(^\\S+).png', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/:file(^\\D+).png')
  t.assert.equal(route, null)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler and wildcard param for a wildcard route', (t) => {
  t.plan(8)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on('GET', '/example/*', handler)

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/example/*')
  t.assert.equal(route.handler, handler)
  t.assert.deepEqual(route.params, ['*'])

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns null for a wildcard route', (t) => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo1/*', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const route = findMyWay.findRoute('GET', '/foo2/*')
  t.assert.equal(route, null)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('findRoute returns handler for a constrained route', (t) => {
  t.plan(9)

  const findMyWay = FindMyWay()

  const handler = () => {}
  findMyWay.on(
    'GET',
    '/example',
    { constraints: { version: '1.0.0' } },
    handler
  )

  const fundMyWayClone = rfdc(findMyWay)

  {
    const route = findMyWay.findRoute('GET', '/example')
    t.assert.equal(route, null)
  }

  {
    const route = findMyWay.findRoute('GET', '/example', { version: '1.0.0' })
    t.assert.equal(route.handler, handler)
  }

  {
    const route = findMyWay.findRoute('GET', '/example', { version: '2.0.0' })
    t.assert.equal(route, null)
  }

  equalRouters(t, findMyWay, fundMyWayClone)
})
