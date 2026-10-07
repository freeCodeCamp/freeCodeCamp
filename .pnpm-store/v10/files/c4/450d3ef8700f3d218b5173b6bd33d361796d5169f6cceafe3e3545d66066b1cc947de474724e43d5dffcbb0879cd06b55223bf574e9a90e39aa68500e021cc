'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Nested static parametric route, url with parameter common prefix > 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/bbbb', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/a/bbaa', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/a/babb', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('DELETE', '/a/:id', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  t.assert.deepEqual(findMyWay.find('DELETE', '/a/bbar').params, { id: 'bbar' })
})

test('Parametric route, url with parameter common prefix > 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/aaa', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/aabb', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/abc', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/:id', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  t.assert.deepEqual(findMyWay.find('GET', '/aab').params, { id: 'aab' })
})

test('Parametric route, url with multi parameter common prefix > 1', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/:id/aaa/:id2', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/:id/aabb/:id2', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/:id/abc/:id2', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  findMyWay.on('GET', '/:a/:b', (req, res) => {
    res.end('{"message":"hello world"}')
  })

  t.assert.deepEqual(findMyWay.find('GET', '/hello/aab').params, { a: 'hello', b: 'aab' })
})

test('Mixed routes, url with parameter common prefix > 1', t => {
  t.plan(11)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/test', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/testify', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/test/hello', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/test/hello/test', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/te/:a', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/test/hello/:b', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/:c', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/text/hello', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/text/:d', (req, res, params) => {
    res.end('{"winter":"is here"}')
  })

  findMyWay.on('GET', '/text/:e/test', (req, res, params) => {
    res.end('{"winter":"is here"}')
  })

  t.assert.deepEqual(findMyWay.find('GET', '/test').params, {})
  t.assert.deepEqual(findMyWay.find('GET', '/testify').params, {})
  t.assert.deepEqual(findMyWay.find('GET', '/test/hello').params, {})
  t.assert.deepEqual(findMyWay.find('GET', '/test/hello/test').params, {})
  t.assert.deepEqual(findMyWay.find('GET', '/te/hello').params, { a: 'hello' })
  t.assert.deepEqual(findMyWay.find('GET', '/te/').params, { a: '' })
  t.assert.deepEqual(findMyWay.find('GET', '/testy').params, { c: 'testy' })
  t.assert.deepEqual(findMyWay.find('GET', '/besty').params, { c: 'besty' })
  t.assert.deepEqual(findMyWay.find('GET', '/text/hellos/test').params, { e: 'hellos' })
  t.assert.deepEqual(findMyWay.find('GET', '/te/hello/'), null)
  t.assert.deepEqual(findMyWay.find('GET', '/te/hellos/testy'), null)
})

test('Parent parametric brother should not rewrite child node parametric brother', t => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/text/hello', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/text/:e/test', (req, res, params) => {
    res.end('{"winter":"is here"}')
  })

  findMyWay.on('GET', '/:c', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  t.assert.deepEqual(findMyWay.find('GET', '/text/hellos/test').params, { e: 'hellos' })
})

test('Mixed parametric routes, with last defined route being static', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/test', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/test/:a', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/test/hello/:b', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/test/hello/:c/test', (req, res, params) => {
    res.end('{"hello":"world"}')
  })
  findMyWay.on('GET', '/test/hello/:c/:k', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  findMyWay.on('GET', '/test/world', (req, res, params) => {
    res.end('{"hello":"world"}')
  })

  t.assert.deepEqual(findMyWay.find('GET', '/test/hello').params, { a: 'hello' })
  t.assert.deepEqual(findMyWay.find('GET', '/test/hello/world/test').params, { c: 'world' })
  t.assert.deepEqual(findMyWay.find('GET', '/test/hello/world/te').params, { c: 'world', k: 'te' })
  t.assert.deepEqual(findMyWay.find('GET', '/test/hello/world/testy').params, { c: 'world', k: 'testy' })
})
