'use strict'

const { test } = require('node:test')
const fastify = require('../../fastify')()

const schema = {
  schema: {
    response: {
      '2xx': {
        type: 'null'
      }
    }
  }
}

const querySchema = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        hello: {
          type: 'integer'
        }
      }
    }
  }
}

const paramsSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        foo: {
          type: 'string'
        },
        test: {
          type: 'integer'
        }
      }
    }
  }
}

test('shorthand - head', t => {
  t.plan(1)
  try {
    fastify.head('/', schema, function (req, reply) {
      reply.code(200).send(null)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - custom head', t => {
  t.plan(1)
  try {
    fastify.head('/proxy/*', function (req, reply) {
      reply.headers({ 'x-foo': 'bar' })
      reply.code(200).send(null)
    })

    fastify.get('/proxy/*', function (req, reply) {
      reply.code(200).send(null)
    })

    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - custom head with constraints', t => {
  t.plan(1)
  try {
    fastify.head('/proxy/*', { constraints: { version: '1.0.0' } }, function (req, reply) {
      reply.headers({ 'x-foo': 'bar' })
      reply.code(200).send(null)
    })

    fastify.get('/proxy/*', { constraints: { version: '1.0.0' } }, function (req, reply) {
      reply.code(200).send(null)
    })

    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - should not reset a head route', t => {
  t.plan(1)
  try {
    fastify.get('/query1', function (req, reply) {
      reply.code(200).send(null)
    })

    fastify.put('/query1', function (req, reply) {
      reply.code(200).send(null)
    })

    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - should set get and head route in the same api call', t => {
  t.plan(1)
  try {
    fastify.route({
      method: ['HEAD', 'GET'],
      url: '/query4',
      handler: function (req, reply) {
        reply.headers({ 'x-foo': 'bar' })
        reply.code(200).send(null)
      }
    })

    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - head params', t => {
  t.plan(1)
  try {
    fastify.head('/params/:foo/:test', paramsSchema, function (req, reply) {
      reply.send(null)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - head, querystring schema', t => {
  t.plan(1)
  try {
    fastify.head('/query', querySchema, function (req, reply) {
      reply.code(200).send(null)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('missing schema - head', t => {
  t.plan(1)
  try {
    fastify.head('/missing', function (req, reply) {
      reply.code(200).send(null)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('head test', async t => {
  t.after(() => { fastify.close() })
  const fastifyServer = await fastify.listen({ port: 0 })

  await t.test('shorthand - request head', async t => {
    t.plan(2)
    const result = await fetch(fastifyServer, {
      method: 'HEAD'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
  })

  await t.test('shorthand - request head params schema', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/params/world/123`, {
      method: 'HEAD'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
  })

  await t.test('shorthand - request head params schema error', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/params/world/string`, {
      method: 'HEAD'
    })
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 400)
  })

  await t.test('shorthand - request head querystring schema', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/query?hello=123`, {
      method: 'HEAD'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
  })

  await t.test('shorthand - request head querystring schema error', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/query?hello=world`, {
      method: 'HEAD'
    })
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 400)
  })

  await t.test('shorthand - request head missing schema', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/missing`, {
      method: 'HEAD'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
  })

  await t.test('shorthand - request head custom head', async t => {
    t.plan(3)
    const result = await fetch(`${fastifyServer}/proxy/test`, {
      method: 'HEAD'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.headers.get('x-foo'), 'bar')
    t.assert.strictEqual(result.status, 200)
  })

  await t.test('shorthand - request head custom head with constraints', async t => {
    t.plan(3)
    const result = await fetch(`${fastifyServer}/proxy/test`, {
      method: 'HEAD',
      headers: {
        version: '1.0.0'
      }
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.headers.get('x-foo'), 'bar')
    t.assert.strictEqual(result.status, 200)
  })

  await t.test('shorthand - should not reset a head route', async t => {
    t.plan(2)
    const result = await fetch(`${fastifyServer}/query1`, {
      method: 'HEAD'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
  })

  await t.test('shorthand - should set get and head route in the same api call', async t => {
    t.plan(3)
    const result = await fetch(`${fastifyServer}/query4`, {
      method: 'HEAD'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.headers.get('x-foo'), 'bar')
    t.assert.strictEqual(result.status, 200)
  })
})
