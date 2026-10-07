'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')
const noop = () => {}

test('static routes', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/b/', noop)
  findMyWay.on('GET', '/b/bulk', noop)
  findMyWay.on('GET', '/b/ulk', noop)

  t.assert.equal(findMyWay.find('GET', '/bulk'), null)
})

test('parametric routes', t => {
  t.plan(5)
  const findMyWay = FindMyWay()

  function foo () { }

  findMyWay.on('GET', '/foo/:fooParam', foo)
  findMyWay.on('GET', '/foo/bar/:barParam', noop)
  findMyWay.on('GET', '/foo/search', noop)
  findMyWay.on('GET', '/foo/submit', noop)

  t.assert.equal(findMyWay.find('GET', '/foo/awesome-parameter').handler, foo)
  t.assert.equal(findMyWay.find('GET', '/foo/b-first-character').handler, foo)
  t.assert.equal(findMyWay.find('GET', '/foo/s-first-character').handler, foo)
  t.assert.equal(findMyWay.find('GET', '/foo/se-prefix').handler, foo)
  t.assert.equal(findMyWay.find('GET', '/foo/sx-prefix').handler, foo)
})

test('parametric with common prefix', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', noop)
  findMyWay.on('GET', '/:test', (req, res, params) => {
    t.assert.deepEqual(
      { test: 'text' },
      params
    )
  })
  findMyWay.on('GET', '/text/hello', noop)

  findMyWay.lookup({ url: '/text', method: 'GET', headers: {} })
})
