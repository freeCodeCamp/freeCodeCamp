'use strict'

const { networkInterfaces } = require('node:os')
const { test, before } = require('node:test')
const Fastify = require('..')
const helper = require('./helper')

let localhost
let localhostForURL

before(async function () {
  [localhost, localhostForURL] = await helper.getLoopbackHost()
})

test('listen works without arguments', async t => {
  const doNotWarn = () => {
    t.assert.fail('should not be deprecated')
  }
  process.on('warning', doNotWarn)

  const fastify = Fastify()
  t.after(() => {
    fastify.close()
    process.removeListener('warning', doNotWarn)
  })
  await fastify.listen()
  const address = fastify.server.address()
  t.assert.strictEqual(address.address, localhost)
  t.assert.ok(address.port > 0)
})

test('Async/await listen with arguments', async t => {
  const doNotWarn = () => {
    t.assert.fail('should not be deprecated')
  }
  process.on('warning', doNotWarn)

  const fastify = Fastify()
  t.after(() => {
    fastify.close()
    process.removeListener('warning', doNotWarn)
  })
  const addr = await fastify.listen({ port: 0, host: '0.0.0.0' })
  const address = fastify.server.address()
  const { protocol, hostname, port, pathname } = new URL(addr)
  t.assert.strictEqual(protocol, 'http:')
  t.assert.ok(Object.values(networkInterfaces())
    .flat()
    .filter(({ internal }) => internal)
    .some(({ address }) => address === hostname))
  t.assert.strictEqual(pathname, '/')
  t.assert.strictEqual(Number(port), address.port)
  t.assert.deepEqual(address, {
    address: '0.0.0.0',
    family: 'IPv4',
    port: address.port
  })
})

test('listen accepts a callback', (t, done) => {
  t.plan(2)
  const doNotWarn = () => {
    t.assert.fail('should not be deprecated')
  }
  process.on('warning', doNotWarn)

  const fastify = Fastify()
  t.after(() => {
    fastify.close()
    process.removeListener('warning', doNotWarn)
  })
  fastify.listen({ port: 0 }, (err) => {
    t.assert.ifError(err)
    t.assert.strictEqual(fastify.server.address().address, localhost)
    done()
  })
})

test('listen accepts options and a callback', (t, done) => {
  t.plan(1)
  const doNotWarn = () => {
    t.assert.fail('should not be deprecated')
  }
  process.on('warning', doNotWarn)

  const fastify = Fastify()
  t.after(() => {
    fastify.close()
    process.removeListener('warning', doNotWarn)
  })
  fastify.listen({
    port: 0,
    host: 'localhost',
    backlog: 511,
    exclusive: false,
    readableAll: false,
    writableAll: false,
    ipv6Only: false
  }, (err) => {
    t.assert.ifError(err)
    done()
  })
})

test('listen after Promise.resolve()', (t, done) => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())
  Promise.resolve()
    .then(() => {
      fastify.listen({ port: 0 }, (err, address) => {
        fastify.server.unref()
        t.assert.strictEqual(address, `http://${localhostForURL}:${fastify.server.address().port}`)
        t.assert.ifError(err)
        done()
      })
    })
})

test('listen works with undefined host', async t => {
  const doNotWarn = () => {
    t.assert.fail('should not be deprecated')
  }
  process.on('warning', doNotWarn)

  const fastify = Fastify()
  t.after(() => fastify.close())
  t.after(() => {
    fastify.close()
    process.removeListener('warning', doNotWarn)
  })
  await fastify.listen({ host: undefined, port: 0 })
  const address = fastify.server.address()
  t.assert.strictEqual(address.address, localhost)
  t.assert.ok(address.port > 0)
})

test('listen works with null host', async t => {
  const doNotWarn = () => {
    t.fail('should not be deprecated')
  }
  process.on('warning', doNotWarn)

  const fastify = Fastify()
  t.after(() => fastify.close())
  t.after(() => {
    fastify.close()
    process.removeListener('warning', doNotWarn)
  })
  await fastify.listen({ host: null, port: 0 })
  const address = fastify.server.address()
  t.assert.strictEqual(address.address, localhost)
  t.assert.ok(address.port > 0)
})
