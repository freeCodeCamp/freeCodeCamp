'use strict'

const { test, before } = require('node:test')
const dns = require('node:dns').promises
const dnsCb = require('node:dns')
const Fastify = require('../fastify')
const helper = require('./helper')

let localhostForURL

function getUrl (fastify, lookup) {
  const { port } = fastify.server.address()
  if (lookup.family === 6) {
    return `http://[${lookup.address}]:${port}/`
  } else {
    return `http://${lookup.address}:${port}/`
  }
}

before(async function () {
  [, localhostForURL] = await helper.getLoopbackHost()
})

test('listen twice on the same port without callback rejects', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.listen({ port: 0 })
    .then(() => {
      const server2 = Fastify()
      t.after(() => server2.close())
      server2.listen({ port: fastify.server.address().port })
        .catch(err => {
          t.assert.ok(err)
          done()
        })
    })
    .catch(err => {
      t.assert.ifError(err)
    })
})

test('listen twice on the same port without callback rejects with (address)', (t, done) => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ port: 0 })
    .then(address => {
      const server2 = Fastify()
      t.after(() => server2.close())
      t.assert.strictEqual(address, `http://${localhostForURL}:${fastify.server.address().port}`)

      server2.listen({ port: fastify.server.address().port })
        .catch(err => {
          t.assert.ok(err)
          done()
        })
    })
    .catch(err => {
      t.assert.ifError(err)
    })
})

test('listen on invalid port without callback rejects', t => {
  const fastify = Fastify()
  t.after(() => fastify.close())
  return fastify.listen({ port: -1 })
    .catch(err => {
      t.assert.ok(err)
      return true
    })
})

test('listen logs the port as info', async t => {
  t.plan(1)
  const fastify = Fastify()
  t.after(() => fastify.close())

  const msgs = []
  fastify.log.info = function (msg) {
    msgs.push(msg)
  }

  await fastify.listen({ port: 0 })
  t.assert.ok(/http:\/\//.test(msgs[0]))
})

test('listen on localhost binds IPv4 and IPv6 - promise interface', async t => {
  const localAddresses = await dns.lookup('localhost', { all: true })
  t.plan(3 * localAddresses.length)

  const app = Fastify()
  app.get('/', async () => 'hello localhost')
  t.after(() => app.close())
  await app.listen({ port: 0, host: 'localhost' })

  for (const lookup of localAddresses) {
    const result = await fetch(getUrl(app, lookup), {
      method: 'GET'
    })

    t.assert.ok(result.ok)
    t.assert.deepEqual(result.status, 200)
    t.assert.deepStrictEqual(await result.text(), 'hello localhost')
  }
})

test('listen on localhost binds to all interfaces (both IPv4 and IPv6 if present) - callback interface', async (t) => {
  const lookups = await new Promise((resolve, reject) => {
    dnsCb.lookup('localhost', { all: true }, (err, lookups) => {
      if (err) return reject(err)
      resolve(lookups)
    })
  })

  t.plan(3 * lookups.length)

  const app = Fastify()
  app.get('/', async () => 'hello localhost')
  t.after(() => app.close())

  await app.listen({ port: 0, host: 'localhost' })

  // Loop over each lookup and perform the assertions
  for (const lookup of lookups) {
    const result = await fetch(getUrl(app, lookup), {
      method: 'GET'
    })

    t.assert.ok(result.ok)
    t.assert.deepEqual(result.status, 200)
    t.assert.deepStrictEqual(await result.text(), 'hello localhost')
  }
})

test('addresses getter', async t => {
  let localAddresses = await dns.lookup('localhost', { all: true })

  t.plan(4)
  const app = Fastify()
  app.get('/', async () => 'hello localhost')
  t.after(() => app.close())

  t.assert.deepStrictEqual(app.addresses(), [], 'before ready')
  await app.ready()

  t.assert.deepStrictEqual(app.addresses(), [], 'after ready')
  await app.listen({ port: 0, host: 'localhost' })

  // fix citgm
  // dns lookup may have duplicated addresses (rhel8-s390x rhel8-ppc64le debian10-x64)

  localAddresses = [...new Set([...localAddresses.map(a => JSON.stringify({
    address: a.address,
    family: typeof a.family === 'number' ? 'IPv' + a.family : a.family
  }))])].sort()

  const appAddresses = app.addresses().map(a => JSON.stringify({
    address: a.address,
    family: typeof a.family === 'number' ? 'IPv' + a.family : a.family
  })).sort()

  t.assert.deepStrictEqual(appAddresses, localAddresses, 'after listen')

  await app.close()
  t.assert.deepStrictEqual(app.addresses(), [], 'after close')
})
