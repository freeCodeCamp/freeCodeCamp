'use strict'

const { test } = require('node:test')
const rfdc = require('rfdc')({ proto: true })
const FindMyWay = require('..')

function equalRouters (t, router1, router2) {
  t.assert.deepStrictEqual(router1._opts, router2._opts)
  t.assert.deepEqual(router1.routes, router2.routes)
  t.assert.deepEqual(JSON.stringify(router1.trees), JSON.stringify(router2.trees))

  t.assert.deepStrictEqual(
    router1.constrainer.strategies,
    router2.constrainer.strategies
  )
  t.assert.deepStrictEqual(
    router1.constrainer.strategiesInUse,
    router2.constrainer.strategiesInUse
  )
  t.assert.deepStrictEqual(
    router1.constrainer.asyncStrategiesInUse,
    router2.constrainer.asyncStrategiesInUse
  )
}

test('hasRoute returns false if there is no routes', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/example')
  t.assert.equal(hasRoute, false)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns true for a static route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/example', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/example')
  t.assert.equal(hasRoute, true)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns false for a static route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/example', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/example1')
  t.assert.equal(hasRoute, false)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns true for a parametric route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:param', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/:param')
  t.assert.equal(hasRoute, true)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns false for a parametric route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo/:param', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/bar/:param')
  t.assert.equal(hasRoute, false)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns true for a parametric route with static suffix', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:param-static', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/:param-static')
  t.assert.equal(hasRoute, true)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns false for a parametric route with static suffix', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:param-static1', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/:param-static2')
  t.assert.equal(hasRoute, false)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns true even if a param name different', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:param1', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/:param2')
  t.assert.equal(hasRoute, true)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns true for a multi-parametric route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:param1-:param2', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/:param1-:param2')
  t.assert.equal(hasRoute, true)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns false for a multi-parametric route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo/:param1-:param2/bar1', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/foo/:param1-:param2/bar2')
  t.assert.equal(hasRoute, false)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns true for a regexp route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:param(^\\d+$)', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/:param(^\\d+$)')
  t.assert.equal(hasRoute, true)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns false for a regexp route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/:file(^\\S+).png', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/:file(^\\D+).png')
  t.assert.equal(hasRoute, false)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns true for a wildcard route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/example/*', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/example/*')
  t.assert.equal(hasRoute, true)

  equalRouters(t, findMyWay, fundMyWayClone)
})

test('hasRoute returns false for a wildcard route', t => {
  t.plan(7)

  const findMyWay = FindMyWay()
  findMyWay.on('GET', '/foo1/*', () => {})

  const fundMyWayClone = rfdc(findMyWay)

  const hasRoute = findMyWay.hasRoute('GET', '/foo2/*')
  t.assert.equal(hasRoute, false)

  equalRouters(t, findMyWay, fundMyWayClone)
})
