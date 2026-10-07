'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Test route with optional parameter', (t) => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:param/b/:optional?', (req, res, params) => {
    if (params.optional) {
      t.assert.equal(params.optional, 'foo')
    } else {
      t.assert.equal(params.optional, undefined)
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar/b', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar/b/foo', headers: {} }, null)
})

test('Test for duplicate route with optional param', (t) => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/foo/:bar?', (req, res, params) => {})

  try {
    findMyWay.on('GET', '/foo', (req, res, params) => {})
    t.assert.fail('method is already declared for route with optional param')
  } catch (e) {
    t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/foo\' with constraints \'{}\'')
  }
})

test('Test for param with ? not at the end', (t) => {
  t.plan(1)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  try {
    findMyWay.on('GET', '/foo/:bar?/baz', (req, res, params) => {})
    t.assert.fail('Optional Param in the middle of the path is not allowed')
  } catch (e) {
    t.assert.equal(e.message, 'Optional Parameter needs to be the last parameter of the path')
  }
})

test('Multi parametric route with optional param', (t) => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:p1-:p2?', (req, res, params) => {
    if (params.p1 && params.p2) {
      t.assert.equal(params.p1, 'foo-bar')
      t.assert.equal(params.p2, 'baz')
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/a/foo-bar-baz', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/a', headers: {} }, null)
})

test('Optional Parameter with ignoreTrailingSlash = true', (t) => {
  t.plan(4)
  const findMyWay = FindMyWay({
    ignoreTrailingSlash: true,
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/test/hello/:optional?', (req, res, params) => {
    if (params.optional) {
      t.assert.equal(params.optional, 'foo')
    } else {
      t.assert.equal(params.optional, undefined)
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/test/hello/', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello/foo', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello/foo/', headers: {} }, null)
})

test('Optional Parameter with ignoreTrailingSlash = false', (t) => {
  t.plan(4)
  const findMyWay = FindMyWay({
    ignoreTrailingSlash: false,
    defaultRoute: (req, res) => {
      t.assert.equal(req.url, '/test/hello/foo/')
    }
  })

  findMyWay.on('GET', '/test/hello/:optional?', (req, res, params) => {
    if (req.url === '/test/hello/') {
      t.assert.deepEqual(params, { optional: '' })
    } else if (req.url === '/test/hello') {
      t.assert.deepEqual(params, {})
    } else if (req.url === '/test/hello/foo') {
      t.assert.deepEqual(params, { optional: 'foo' })
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/test/hello/', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello/foo', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello/foo/', headers: {} }, null)
})

test('Optional Parameter with ignoreDuplicateSlashes = true', (t) => {
  t.plan(4)
  const findMyWay = FindMyWay({
    ignoreDuplicateSlashes: true,
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/test/hello/:optional?', (req, res, params) => {
    if (params.optional) {
      t.assert.equal(params.optional, 'foo')
    } else {
      t.assert.equal(params.optional, undefined)
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/test//hello', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello/foo', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test//hello//foo', headers: {} }, null)
})

test('Optional Parameter with ignoreDuplicateSlashes = false', (t) => {
  t.plan(4)
  const findMyWay = FindMyWay({
    ignoreDuplicateSlashes: false,
    defaultRoute: (req, res) => {
      if (req.url === '/test//hello') {
        t.assert.deepEqual(req.params, undefined)
      } else if (req.url === '/test//hello/foo') {
        t.assert.deepEqual(req.params, undefined)
      }
    }
  })

  findMyWay.on('GET', '/test/hello/:optional?', (req, res, params) => {
    if (req.url === '/test/hello/') {
      t.assert.deepEqual(params, { optional: '' })
    } else if (req.url === '/test/hello') {
      t.assert.deepEqual(params, {})
    } else if (req.url === '/test/hello/foo') {
      t.assert.deepEqual(params, { optional: 'foo' })
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/test//hello', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test/hello/foo', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/test//hello/foo', headers: {} }, null)
})

test('deregister a route with optional param', (t) => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/a/:param/b/:optional?', (req, res, params) => {})

  t.assert.ok(findMyWay.find('GET', '/a/:param/b'))
  t.assert.ok(findMyWay.find('GET', '/a/:param/b/:optional'))

  findMyWay.off('GET', '/a/:param/b/:optional?')

  t.assert.ok(!findMyWay.find('GET', '/a/:param/b'))
  t.assert.ok(!findMyWay.find('GET', '/a/:param/b/:optional'))
})

test('optional parameter on root', (t) => {
  t.plan(2)
  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('Should not be defaultRoute')
    }
  })

  findMyWay.on('GET', '/:optional?', (req, res, params) => {
    if (params.optional) {
      t.assert.equal(params.optional, 'foo')
    } else {
      t.assert.equal(params.optional, undefined)
    }
  })

  findMyWay.lookup({ method: 'GET', url: '/', headers: {} }, null)
  findMyWay.lookup({ method: 'GET', url: '/foo', headers: {} }, null)
})
