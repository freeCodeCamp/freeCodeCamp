'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const fastify = require('..')()

test.after(() => fastify.close())

const opts = {
  schema: {
    response: {
      '2xx': {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.get('/return', opts, function (req, reply) {
  const promise = new Promise((resolve, reject) => {
    resolve({ hello: 'world' })
  })
  return promise
})

fastify.get('/return-error', opts, function (req, reply) {
  const promise = new Promise((resolve, reject) => {
    reject(new Error('some error'))
  })
  return promise
})

fastify.get('/double', function (req, reply) {
  setTimeout(function () {
    // this should not throw
    reply.send({ hello: 'world' })
  }, 20)
  return Promise.resolve({ hello: '42' })
})

fastify.get('/thenable', opts, function (req, reply) {
  setImmediate(function () {
    reply.send({ hello: 'world' })
  })
  return reply
})

fastify.get('/thenable-error', opts, function (req, reply) {
  setImmediate(function () {
    reply.send(new Error('kaboom'))
  })
  return reply
})

fastify.get('/return-reply', opts, function (req, reply) {
  return reply.send({ hello: 'world' })
})

fastify.listen({ port: 0 }, (err, fastifyServer) => {
  assert.ifError(err)

  test('shorthand - fetch return promise es6 get', async t => {
    t.plan(4)

    const result = await fetch(`${fastifyServer}/return`)
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  test('shorthand - fetch promise es6 get return error', async t => {
    t.plan(2)

    const result = await fetch(`${fastifyServer}/return-error`)
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 500)
  })

  test('fetch promise double send', async t => {
    t.plan(3)

    const result = await fetch(`${fastifyServer}/double`)
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.deepStrictEqual(JSON.parse(body), { hello: '42' })
  })

  test('thenable', async t => {
    t.plan(4)

    const result = await fetch(`${fastifyServer}/thenable`)
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  test('thenable (error)', async t => {
    t.plan(2)

    const result = await fetch(`${fastifyServer}/thenable-error`)
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 500)
  })

  test('return-reply', async t => {
    t.plan(4)

    const result = await fetch(`${fastifyServer}/return-reply`)
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })
})
