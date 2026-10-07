'use strict'

const { test } = require('node:test')
const fastify = require('..')()

const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      },
      '2xx': {
        type: 'object',
        properties: {
          hello: {
            type: 'number'
          }
        }
      }
    }
  }
}

test('shorthand - output string', t => {
  t.plan(1)
  try {
    fastify.get('/string', opts, function (req, reply) {
      reply.code(200).send({ hello: 'world' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - output number', t => {
  t.plan(1)
  try {
    fastify.get('/number', opts, function (req, reply) {
      reply.code(201).send({ hello: 55 })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('wrong object for schema - output', t => {
  t.plan(1)
  try {
    fastify.get('/wrong-object-for-schema', opts, function (req, reply) {
      // will send { }
      reply.code(201).send({ hello: 'world' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('empty response', t => {
  t.plan(1)
  try {
    // no checks
    fastify.get('/empty', opts, function (req, reply) {
      reply.code(204).send()
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('unlisted response code', t => {
  t.plan(1)
  try {
    fastify.get('/400', opts, function (req, reply) {
      reply.code(400).send({ hello: 'DOOM' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('start server and run tests', async (t) => {
  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await test('shorthand - string get ok', async (t) => {
    const result = await fetch(fastifyServer + '/string')
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await test('shorthand - number get ok', async (t) => {
    const result = await fetch(fastifyServer + '/number')
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 201)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 55 })
  })

  await test('shorthand - wrong-object-for-schema', async (t) => {
    const result = await fetch(fastifyServer + '/wrong-object-for-schema')
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 500)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), {
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'The value "world" cannot be converted to a number.'
    })
  })

  await test('shorthand - empty', async (t) => {
    const result = await fetch(fastifyServer + '/empty')
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 204)
  })

  await test('shorthand - 400', async (t) => {
    const result = await fetch(fastifyServer + '/400')
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 400)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'DOOM' })
  })
})
