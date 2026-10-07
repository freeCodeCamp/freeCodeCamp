'use strict'

const os = require('node:os')
const path = require('node:path')
const fs = require('node:fs')
const { test, before } = require('node:test')
const Fastify = require('..')
const helper = require('./helper')

let localhostForURL

before(async function () {
  [, localhostForURL] = await helper.getLoopbackHost()
})

// https://nodejs.org/api/net.html#net_ipc_support
if (os.platform() !== 'win32') {
  test('listen on socket', async t => {
    t.plan(2)
    const fastify = Fastify()
    t.after(() => fastify.close())

    const sockFile = path.join(os.tmpdir(), `${(Math.random().toString(16) + '0000000').slice(2, 10)}-server.sock`)
    try {
      fs.unlinkSync(sockFile)
    } catch (e) { }

    await fastify.listen({ path: sockFile })
    t.assert.deepStrictEqual(fastify.addresses(), [sockFile])
    t.assert.strictEqual(fastify.server.address(), sockFile)
  })
} else {
  test('listen on socket', async t => {
    t.plan(2)
    const fastify = Fastify()
    t.after(() => fastify.close())

    const sockFile = `\\\\.\\pipe\\${(Math.random().toString(16) + '0000000').slice(2, 10)}-server-sock`

    await fastify.listen({ path: sockFile })
    t.assert.deepStrictEqual(fastify.addresses(), [sockFile])
    t.assert.strictEqual(fastify.server.address(), sockFile)
  })
}

test('listen without callback with (address)', async t => {
  t.plan(1)
  const fastify = Fastify()
  t.after(() => fastify.close())
  const address = await fastify.listen({ port: 0 })
  t.assert.strictEqual(address, `http://${localhostForURL}:${fastify.server.address().port}`)
})

test('double listen without callback rejects', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ port: 0 })
    .then(() => {
      fastify.listen({ port: 0 })
        .catch(err => {
          t.assert.ok(err)
          done()
        })
    })
    .catch(err => t.assert.ifError(err))
})

test('double listen without callback with (address)', (t, done) => {
  t.plan(2)
  const fastify = Fastify()
  t.after(() => fastify.close())
  fastify.listen({ port: 0 })
    .then(address => {
      t.assert.strictEqual(address, `http://${localhostForURL}:${fastify.server.address().port}`)
      fastify.listen({ port: 0 })
        .catch(err => {
          t.assert.ok(err)
          done()
        })
    })
    .catch(err => t.assert.ifError(err))
})
