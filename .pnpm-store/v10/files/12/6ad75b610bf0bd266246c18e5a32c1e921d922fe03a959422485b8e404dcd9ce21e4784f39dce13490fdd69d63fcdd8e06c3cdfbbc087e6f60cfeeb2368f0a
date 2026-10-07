'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')
const alpha = () => { }
const beta = () => { }
const gamma = () => { }
const delta = () => { }

const customHeaderConstraint = {
  name: 'requestedBy',
  storage: function () {
    let requestedBys = {}
    return {
      get: (requestedBy) => { return requestedBys[requestedBy] || null },
      set: (requestedBy, store) => { requestedBys[requestedBy] = store },
      del: (requestedBy) => { delete requestedBys[requestedBy] },
      empty: () => { requestedBys = {} }
    }
  },
  deriveConstraint: (req, ctx) => {
    return req.headers['user-agent']
  }
}

test('A route could support a custom constraint strategy', t => {
  t.plan(3)

  const findMyWay = FindMyWay({ constraints: { requestedBy: customHeaderConstraint } })

  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl' } }, alpha)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget' } }, beta)

  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl' }).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'wget' }).handler, beta)
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome' }))
})

test('A route could support a custom constraint strategy (add strategy outside constructor)', t => {
  t.plan(3)

  const findMyWay = FindMyWay()

  findMyWay.addConstraintStrategy(customHeaderConstraint)

  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl' } }, alpha)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget' } }, beta)

  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl' }).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'wget' }).handler, beta)
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome' }))
})

test('A route could support a custom constraint strategy while versioned', t => {
  t.plan(8)

  const findMyWay = FindMyWay({ constraints: { requestedBy: customHeaderConstraint } })

  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '1.0.0' } }, alpha)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '2.0.0' } }, beta)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget', version: '2.0.0' } }, gamma)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget', version: '3.0.0' } }, delta)

  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x' }).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x' }).handler, beta)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'wget', version: '2.x' }).handler, gamma)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'wget', version: '3.x' }).handler, delta)

  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome', version: '1.x' }))

  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '3.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'wget', version: '1.x' }))
})

test('A route could support a custom constraint strategy while versioned (add strategy outside constructor)', t => {
  t.plan(8)

  const findMyWay = FindMyWay()

  findMyWay.addConstraintStrategy(customHeaderConstraint)

  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '1.0.0' } }, alpha)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '2.0.0' } }, beta)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget', version: '2.0.0' } }, gamma)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget', version: '3.0.0' } }, delta)

  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x' }).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x' }).handler, beta)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'wget', version: '2.x' }).handler, gamma)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'wget', version: '3.x' }).handler, delta)

  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome', version: '1.x' }))

  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '3.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'wget', version: '1.x' }))
})

test('A route could support a custom constraint strategy while versioned and host constrained', t => {
  t.plan(9)

  const findMyWay = FindMyWay({ constraints: { requestedBy: customHeaderConstraint } })

  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '1.0.0', host: 'fastify.io' } }, alpha)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '2.0.0', host: 'fastify.io' } }, beta)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '2.0.0', host: 'example.io' } }, delta)

  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x', host: 'fastify.io' }).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x', host: 'fastify.io' }).handler, beta)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x', host: 'example.io' }).handler, delta)

  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome', version: '1.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '3.x', host: 'fastify.io' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x', host: 'example.io' }))
})

test('A route could support a custom constraint strategy while versioned and host constrained (add strategy outside constructor)', t => {
  t.plan(9)

  const findMyWay = FindMyWay()

  findMyWay.addConstraintStrategy(customHeaderConstraint)

  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '1.0.0', host: 'fastify.io' } }, alpha)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '2.0.0', host: 'fastify.io' } }, beta)
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl', version: '2.0.0', host: 'example.io' } }, delta)

  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x', host: 'fastify.io' }).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x', host: 'fastify.io' }).handler, beta)
  t.assert.equal(findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x', host: 'example.io' }).handler, delta)

  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'chrome', version: '1.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '2.x' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '3.x', host: 'fastify.io' }))
  t.assert.ok(!findMyWay.find('GET', '/', { requestedBy: 'curl', version: '1.x', host: 'example.io' }))
})

test('Custom constraint strategies can set mustMatchWhenDerived flag to true which prevents matches to unconstrained routes when a constraint is derived and there are no other routes', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    constraints: {
      requestedBy: {
        ...customHeaderConstraint,
        mustMatchWhenDerived: true
      }
    },
    defaultRoute (req, res) {
      t.assert.ok('pass')
    }
  })

  findMyWay.on('GET', '/', {}, () => t.assert.assert.fail())

  findMyWay.lookup({ method: 'GET', url: '/', headers: { 'user-agent': 'node' } }, null)
})

test('Custom constraint strategies can set mustMatchWhenDerived flag to true which prevents matches to unconstrained routes when a constraint is derived and there are no other routes (add strategy outside constructor)', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    defaultRoute (req, res) {
      t.assert.ok('pass')
    }
  })

  findMyWay.addConstraintStrategy({
    ...customHeaderConstraint,
    mustMatchWhenDerived: true
  })

  findMyWay.on('GET', '/', {}, () => t.assert.assert.fail())

  findMyWay.lookup({ method: 'GET', url: '/', headers: { 'user-agent': 'node' } }, null)
})

test('Custom constraint strategies can set mustMatchWhenDerived flag to true which prevents matches to unconstrained routes when a constraint is derived when there are constrained routes', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    constraints: {
      requestedBy: {
        ...customHeaderConstraint,
        mustMatchWhenDerived: true
      }
    },
    defaultRoute (req, res) {
      t.assert.ok('pass')
    }
  })

  findMyWay.on('GET', '/', {}, () => t.assert.assert.fail())
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl' } }, () => t.assert.assert.fail())
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget' } }, () => t.assert.assert.fail())

  findMyWay.lookup({ method: 'GET', url: '/', headers: { 'user-agent': 'node' } }, null)
})

test('Custom constraint strategies can set mustMatchWhenDerived flag to true which prevents matches to unconstrained routes when a constraint is derived when there are constrained routes (add strategy outside constructor)', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    defaultRoute (req, res) {
      t.assert.ok('pass')
    }
  })

  findMyWay.addConstraintStrategy({
    ...customHeaderConstraint,
    mustMatchWhenDerived: true
  })

  findMyWay.on('GET', '/', {}, () => t.assert.assert.fail())
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'curl' } }, () => t.assert.assert.fail())
  findMyWay.on('GET', '/', { constraints: { requestedBy: 'wget' } }, () => t.assert.assert.fail())

  findMyWay.lookup({ method: 'GET', url: '/', headers: { 'user-agent': 'node' } }, null)
})

test('Custom constraint strategies can set mustMatchWhenDerived flag to false which allows matches to unconstrained routes when a constraint is derived', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    constraints: {
      requestedBy: {
        ...customHeaderConstraint,
        mustMatchWhenDerived: false
      }
    },
    defaultRoute (req, res) {
      t.assert.assert.fail()
    }
  })

  findMyWay.on('GET', '/', {}, () => t.assert.ok('pass'))

  findMyWay.lookup({ method: 'GET', url: '/', headers: { 'user-agent': 'node' } }, null)
})

test('Custom constraint strategies can set mustMatchWhenDerived flag to false which allows matches to unconstrained routes when a constraint is derived (add strategy outside constructor)', t => {
  t.plan(1)

  const findMyWay = FindMyWay({
    defaultRoute (req, res) {
      t.assert.ok('pass')
    }
  })

  findMyWay.addConstraintStrategy({
    ...customHeaderConstraint,
    mustMatchWhenDerived: true
  })

  findMyWay.on('GET', '/', {}, () => t.assert.ok('pass'))

  findMyWay.lookup({ method: 'GET', url: '/', headers: { 'user-agent': 'node' } }, null)
})

test('Has constraint strategy method test', t => {
  t.plan(2)

  const findMyWay = FindMyWay()

  t.assert.deepEqual(findMyWay.hasConstraintStrategy(customHeaderConstraint.name), false)
  findMyWay.addConstraintStrategy(customHeaderConstraint)
  t.assert.deepEqual(findMyWay.hasConstraintStrategy(customHeaderConstraint.name), true)
})
