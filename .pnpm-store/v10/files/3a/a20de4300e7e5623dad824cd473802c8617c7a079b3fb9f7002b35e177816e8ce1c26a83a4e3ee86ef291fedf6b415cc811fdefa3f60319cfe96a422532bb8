'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')
const noop = () => { }

const customVersioning = {
  name: 'version',
  // storage factory
  storage: function () {
    let versions = {}
    return {
      get: (version) => { return versions[version] || null },
      set: (version, store) => { versions[version] = store },
      del: (version) => { delete versions[version] },
      empty: () => { versions = {} }
    }
  },
  deriveConstraint: (req, ctx) => {
    return req.headers.accept
  }
}

test('A route could support multiple versions (find) / 1', t => {
  t.plan(5)

  const findMyWay = FindMyWay({ constraints: { version: customVersioning } })

  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=2' } }, noop)
  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=3' } }, noop)

  t.assert.ok(findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=2' }))
  t.assert.ok(findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=3' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=4' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=5' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=6' }))
})

test('A route could support multiple versions (find) / 1 (add strategy outside constructor)', t => {
  t.plan(5)

  const findMyWay = FindMyWay()

  findMyWay.addConstraintStrategy(customVersioning)

  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=2' } }, noop)
  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=3' } }, noop)

  t.assert.ok(findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=2' }))
  t.assert.ok(findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=3' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=4' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=5' }))
  t.assert.ok(!findMyWay.find('GET', '/', { version: 'application/vnd.example.api+json;version=6' }))
})

test('Overriding default strategies uses the custom deriveConstraint function', t => {
  t.plan(2)

  const findMyWay = FindMyWay({ constraints: { version: customVersioning } })

  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=2' } }, (req, res, params) => {
    t.assert.equal(req.headers.accept, 'application/vnd.example.api+json;version=2')
  })

  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=3' } }, (req, res, params) => {
    t.assert.equal(req.headers.accept, 'application/vnd.example.api+json;version=3')
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { accept: 'application/vnd.example.api+json;version=2' }
  })
  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { accept: 'application/vnd.example.api+json;version=3' }
  })
})

test('Overriding default strategies uses the custom deriveConstraint function (add strategy outside constructor)', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  findMyWay.addConstraintStrategy(customVersioning)

  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=2' } }, (req, res, params) => {
    t.assert.equal(req.headers.accept, 'application/vnd.example.api+json;version=2')
  })

  findMyWay.on('GET', '/', { constraints: { version: 'application/vnd.example.api+json;version=3' } }, (req, res, params) => {
    t.assert.equal(req.headers.accept, 'application/vnd.example.api+json;version=3')
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { accept: 'application/vnd.example.api+json;version=2' }
  })
  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { accept: 'application/vnd.example.api+json;version=3' }
  })
})

test('Overriding custom strategies throws as error (add strategy outside constructor)', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  findMyWay.addConstraintStrategy(customVersioning)

  t.assert.throws(() => findMyWay.addConstraintStrategy(customVersioning),
    new Error('There already exists a custom constraint with the name version.')
  )
})

test('Overriding default strategies after defining a route with constraint', t => {
  t.plan(1)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', { constraints: { host: 'fastify.io', version: '1.0.0' } }, () => {})

  t.assert.throws(() => findMyWay.addConstraintStrategy(customVersioning),
    new Error('There already exists a route with version constraint.')
  )
})
