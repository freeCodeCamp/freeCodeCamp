'use strict'

const { test, before } = require('node:test')
const Fastify = require('..')
const helper = require('./helper')
const { networkInterfaces } = require('node:os')

const isIPv6Missing = !Object.values(networkInterfaces()).flat().some(({ family }) => family === 'IPv6')

let localhostForURL

before(async function () {
  [, localhostForURL] = await helper.getLoopbackHost()
})

test('register after listen using Promise.resolve()', async t => {
  t.plan(1)
  const fastify = Fastify()

  const handler = (req, res) => res.send({})
  await Promise.resolve()
    .then(() => {
      fastify.get('/', handler)
      fastify.register((f2, options, done) => {
        f2.get('/plugin', handler)
        done()
      })
      return fastify.ready()
    })
    .catch((err) => {
      t.assert.fail(err.message)
    })
    .then(() => t.assert.ok('resolved'))
})

test('double listen errors', (t, done) => {
  t.plan(3)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ port: 0 }, (err) => {
    t.assert.ifError(err)
    fastify.listen({ port: fastify.server.address().port }, (err, address) => {
      t.assert.strictEqual(address, null)
      t.assert.ok(err)
      done()
    })
  })
})

test('double listen errors callback with (err, address)', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ port: 0 }, (err1, address1) => {
    t.assert.strictEqual(address1, `http://${localhostForURL}:${fastify.server.address().port}`)
    t.assert.ifError(err1)
    fastify.listen({ port: fastify.server.address().port }, (err2, address2) => {
      t.assert.strictEqual(address2, null)
      t.assert.ok(err2)
      done()
    })
  })
})

test('nonlocalhost double listen errors callback with (err, address)', { skip: isIPv6Missing }, (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ host: '::1', port: 0 }, (err, address) => {
    t.assert.strictEqual(address, `http://${'[::1]'}:${fastify.server.address().port}`)
    t.assert.ifError(err)
    fastify.listen({ host: '::1', port: fastify.server.address().port }, (err2, address2) => {
      t.assert.strictEqual(address2, null)
      t.assert.ok(err2)
      done()
    })
  })
})

test('listen twice on the same port', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ port: 0 }, (err1, address1) => {
    t.assert.strictEqual(address1, `http://${localhostForURL}:${fastify.server.address().port}`)
    t.assert.ifError(err1)
    const s2 = Fastify()
    t.after(() => fastify.close())
    s2.listen({ port: fastify.server.address().port }, (err2, address2) => {
      t.assert.strictEqual(address2, null)
      t.assert.ok(err2)
      done()
    })
  })
})

test('listen twice on the same port callback with (err, address)', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ port: 0 }, (err1, address1) => {
    const _port = fastify.server.address().port
    t.assert.strictEqual(address1, `http://${localhostForURL}:${_port}`)
    t.assert.ifError(err1)
    const s2 = Fastify()
    t.after(() => fastify.close())
    s2.listen({ port: _port }, (err2, address2) => {
      t.assert.strictEqual(address2, null)
      t.assert.ok(err2)
      done()
    })
  })
})
