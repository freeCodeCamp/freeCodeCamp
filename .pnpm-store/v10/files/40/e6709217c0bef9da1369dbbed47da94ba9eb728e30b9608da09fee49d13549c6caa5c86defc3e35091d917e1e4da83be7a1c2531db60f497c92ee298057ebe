'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')
const noop = () => { }

test('A route could support multiple versions (find) / 1', t => {
  t.plan(7)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', { constraints: { version: '1.2.3' } }, noop)
  findMyWay.on('GET', '/', { constraints: { version: '3.2.0' } }, noop)

  t.assert.ok(findMyWay.find('GET', '/', { version: '1.x' }))
  t.assert.ok(findMyWay.find('GET', '/', { version: '1.2.3' }))
  t.assert.ok(findMyWay.find('GET', '/', { version: '3.x' }))
  t.assert.ok(findMyWay.find('GET', '/', { version: '3.2.0' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: '2.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: '2.3.4' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: '3.2.1' }))
})

test('A route could support multiple versions (find) / 2', t => {
  t.plan(7)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', { constraints: { version: '1.2.3' } }, noop)
  findMyWay.on('GET', '/test', { constraints: { version: '3.2.0' } }, noop)

  t.assert.ok(findMyWay.find('GET', '/test', { version: '1.x' }))
  t.assert.ok(findMyWay.find('GET', '/test', { version: '1.2.3' }))
  t.assert.ok(findMyWay.find('GET', '/test', { version: '3.x' }))
  t.assert.ok(findMyWay.find('GET', '/test', { version: '3.2.0' }))
  t.assert.ok(!findMyWay.find('GET', '/test', { version: '2.x' }))
  t.assert.ok(!findMyWay.find('GET', '/test', { version: '2.3.4' }))
  t.assert.ok(!findMyWay.find('GET', '/test', { version: '3.2.1' }))
})

test('A route could support multiple versions (find) / 3', t => {
  t.plan(10)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test/:id/hello', { constraints: { version: '1.2.3' } }, noop)
  findMyWay.on('GET', '/test/:id/hello', { constraints: { version: '3.2.0' } }, noop)
  findMyWay.on('GET', '/test/name/hello', { constraints: { version: '4.0.0' } }, noop)

  t.assert.ok(findMyWay.find('GET', '/test/1234/hello', { version: '1.x' }))
  t.assert.ok(findMyWay.find('GET', '/test/1234/hello', { version: '1.2.3' }))
  t.assert.ok(findMyWay.find('GET', '/test/1234/hello', { version: '3.x' }))
  t.assert.ok(findMyWay.find('GET', '/test/1234/hello', { version: '3.2.0' }))
  t.assert.ok(findMyWay.find('GET', '/test/name/hello', { version: '4.x' }))
  t.assert.ok(findMyWay.find('GET', '/test/name/hello', { version: '3.x' }))
  t.assert.ok(!findMyWay.find('GET', '/test/1234/hello', { version: '2.x' }))
  t.assert.ok(!findMyWay.find('GET', '/test/1234/hello', { version: '2.3.4' }))
  t.assert.ok(!findMyWay.find('GET', '/test/1234/hello', { version: '3.2.1' }))
  t.assert.ok(!findMyWay.find('GET', '/test/1234/hello', { version: '4.x' }))
})

test('A route could support multiple versions (find) / 4', t => {
  t.plan(8)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test/*', { constraints: { version: '1.2.3' } }, noop)
  findMyWay.on('GET', '/test/hello', { constraints: { version: '3.2.0' } }, noop)

  t.assert.ok(findMyWay.find('GET', '/test/1234/hello', { version: '1.x' }))
  t.assert.ok(findMyWay.find('GET', '/test/1234/hello', { version: '1.2.3' }))
  t.assert.ok(findMyWay.find('GET', '/test/hello', { version: '3.x' }))
  t.assert.ok(findMyWay.find('GET', '/test/hello', { version: '3.2.0' }))
  t.assert.ok(!findMyWay.find('GET', '/test/1234/hello', { version: '3.2.0' }))
  t.assert.ok(!findMyWay.find('GET', '/test/1234/hello', { version: '3.x' }))
  t.assert.ok(!findMyWay.find('GET', '/test/1234/hello', { version: '2.x' }))
  t.assert.ok(!findMyWay.find('GET', '/test/hello', { version: '2.x' }))
})

test('A route could support multiple versions (find) / 5', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', { constraints: { version: '1.2.3' } }, () => false)
  findMyWay.on('GET', '/', { constraints: { version: '3.2.0' } }, () => true)

  t.assert.ok(findMyWay.find('GET', '/', { version: '*' }).handler())
})

test('Find with a version but without versioned routes', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', noop)

  t.assert.ok(!findMyWay.find('GET', '/', { version: '1.x' }))
})

test('A route could support multiple versions (lookup)', t => {
  t.plan(7)

  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      const versions = ['2.x', '2.3.4', '3.2.1']
      t.assert.ok(versions.indexOf(req.headers['accept-version']) > -1)
    }
  })

  findMyWay.on('GET', '/', { constraints: { version: '1.2.3' } }, (req, res) => {
    const versions = ['1.x', '1.2.3']
    t.assert.ok(versions.indexOf(req.headers['accept-version']) > -1)
  })

  findMyWay.on('GET', '/', { constraints: { version: '3.2.0' } }, (req, res) => {
    const versions = ['3.x', '3.2.0']
    t.assert.ok(versions.indexOf(req.headers['accept-version']) > -1)
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '1.x' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '1.2.3' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '3.x' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '3.2.0' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '2.x' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '2.3.4' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '3.2.1' }
  }, null)
})

test('It should always choose the highest version of a route', t => {
  t.plan(3)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', { constraints: { version: '2.3.0' } }, (req, res) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.on('GET', '/', { constraints: { version: '2.4.0' } }, (req, res) => {
    t.assert.ok('Yeah!')
  })

  findMyWay.on('GET', '/', { constraints: { version: '3.3.0' } }, (req, res) => {
    t.assert.ok('Yeah!')
  })

  findMyWay.on('GET', '/', { constraints: { version: '3.2.0' } }, (req, res) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.on('GET', '/', { constraints: { version: '3.2.2' } }, (req, res) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.on('GET', '/', { constraints: { version: '4.4.0' } }, (req, res) => {
    t.assert.fail('We should not be here')
  })

  findMyWay.on('GET', '/', { constraints: { version: '4.3.2' } }, (req, res) => {
    t.assert.ok('Yeah!')
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '2.x' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '3.x' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '4.3.x' }
  }, null)
})

test('Declare the same route with and without version', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', noop)
  findMyWay.on('GET', '/', { constraints: { version: '1.2.0' } }, noop)

  t.assert.ok(findMyWay.find('GET', '/', { version: '1.x' }))
  t.assert.ok(findMyWay.find('GET', '/', {}))
})

test('It should throw if you declare multiple times the same route', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', { constraints: { version: '1.2.3' } }, noop)

  try {
    findMyWay.on('GET', '/', { constraints: { version: '1.2.3' } }, noop)
    t.assert.fail('It should throw')
  } catch (err) {
    t.assert.equal(err.message, 'Method \'GET\' already declared for route \'/\' with constraints \'{"version":"1.2.3"}\'')
  }
})

test('Versioning won\'t work if there are no versioned routes', t => {
  t.plan(2)

  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.fail('We should not be here')
    }
  })

  findMyWay.on('GET', '/', (req, res) => {
    t.assert.ok('Yeah!')
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '2.x' }
  }, null)

  findMyWay.lookup({
    method: 'GET',
    url: '/'
  }, null)
})

test('Unversioned routes aren\'t triggered when unknown versions are requested', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    defaultRoute: (req, res) => {
      t.assert.ok('We should be here')
    }
  })

  findMyWay.on('GET', '/', (req, res) => {
    t.assert.fail('unversioned route shouldnt be hit!')
  })
  findMyWay.on('GET', '/', { constraints: { version: '1.0.0' } }, (req, res) => {
    t.assert.fail('versioned route shouldnt be hit for wrong version!')
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { 'accept-version': '2.x' }
  }, null)
})
