'use strict'

const { test } = require('node:test')
const FindMyWay = require('..')
const alpha = () => { }
const beta = () => { }
const gamma = () => { }

test('A route supports multiple host constraints', t => {
  t.plan(4)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', {}, alpha)
  findMyWay.on('GET', '/', { constraints: { host: 'fastify.io' } }, beta)
  findMyWay.on('GET', '/', { constraints: { host: 'example.com' } }, gamma)

  t.assert.equal(findMyWay.find('GET', '/', {}).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { host: 'something-else.io' }).handler, alpha)
  t.assert.equal(findMyWay.find('GET', '/', { host: 'fastify.io' }).handler, beta)
  t.assert.equal(findMyWay.find('GET', '/', { host: 'example.com' }).handler, gamma)
})

test('A route supports wildcard host constraints', t => {
  t.plan(4)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', { constraints: { host: 'fastify.io' } }, beta)
  findMyWay.on('GET', '/', { constraints: { host: /.*\.fastify\.io/ } }, gamma)

  t.assert.equal(findMyWay.find('GET', '/', { host: 'fastify.io' }).handler, beta)
  t.assert.equal(findMyWay.find('GET', '/', { host: 'foo.fastify.io' }).handler, gamma)
  t.assert.equal(findMyWay.find('GET', '/', { host: 'bar.fastify.io' }).handler, gamma)
  t.assert.ok(!findMyWay.find('GET', '/', { host: 'example.com' }))
})

test('A route supports multiple host constraints (lookup)', t => {
  t.plan(4)

  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/', {}, (req, res) => {})
  findMyWay.on('GET', '/', { constraints: { host: 'fastify.io' } }, (req, res) => {
    t.assert.equal(req.headers.host, 'fastify.io')
  })
  findMyWay.on('GET', '/', { constraints: { host: 'example.com' } }, (req, res) => {
    t.assert.equal(req.headers.host, 'example.com')
  })
  findMyWay.on('GET', '/', { constraints: { host: /.+\.fancy\.ca/ } }, (req, res) => {
    t.assert.ok(req.headers.host.endsWith('.fancy.ca'))
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { host: 'fastify.io' }
  })

  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { host: 'example.com' }
  })
  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { host: 'foo.fancy.ca' }
  })
  findMyWay.lookup({
    method: 'GET',
    url: '/',
    headers: { host: 'bar.fancy.ca' }
  })
})

test('A route supports up to 31 host constraints', (t) => {
  t.plan(1)

  const findMyWay = FindMyWay()

  for (let i = 0; i < 31; i++) {
    const host = `h${i.toString().padStart(2, '0')}`
    findMyWay.on('GET', '/', { constraints: { host } }, alpha)
  }

  t.assert.equal(findMyWay.find('GET', '/', { host: 'h01' }).handler, alpha)
})

test('A route throws when constraint limit exceeded', (t) => {
  t.plan(1)

  const findMyWay = FindMyWay()

  for (let i = 0; i < 31; i++) {
    const host = `h${i.toString().padStart(2, '0')}`
    findMyWay.on('GET', '/', { constraints: { host } }, alpha)
  }

  t.assert.throws(
    () => findMyWay.on('GET', '/', { constraints: { host: 'h31' } }, beta),
    new Error('find-my-way supports a maximum of 31 route handlers per node when there are constraints, limit reached')
  )
})
