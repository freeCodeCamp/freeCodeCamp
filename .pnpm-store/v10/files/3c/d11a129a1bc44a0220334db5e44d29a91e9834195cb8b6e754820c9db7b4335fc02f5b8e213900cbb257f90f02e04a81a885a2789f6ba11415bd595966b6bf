'use strict'

const { test } = require('node:test')
const fastify = require('../../fastify')()
fastify.addHttpMethod('SEARCH', { hasBody: true })

const schema = {
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

const querySchema = {
  querystring: {
    type: 'object',
    properties: {
      hello: {
        type: 'integer'
      }
    }
  }
}

const paramsSchema = {
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

const bodySchema = {
  body: {
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

test('search', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'SEARCH',
      url: '/',
      schema,
      handler: function (request, reply) {
        reply.code(200).send({ hello: 'world' })
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('search, params schema', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'SEARCH',
      url: '/params/:foo/:test',
      schema: paramsSchema,
      handler: function (request, reply) {
        reply.code(200).send(request.params)
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('search, querystring schema', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'SEARCH',
      url: '/query',
      schema: querySchema,
      handler: function (request, reply) {
        reply.code(200).send(request.query)
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('search, body schema', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'SEARCH',
      url: '/body',
      schema: bodySchema,
      handler: function (request, reply) {
        reply.code(200).send(request.body)
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('search test', async t => {
  await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })
  const url = `http://localhost:${fastify.server.address().port}`

  await t.test('request - search', async t => {
    t.plan(4)
    const result = await fetch(url, {
      method: 'SEARCH'
    })
    const body = await result.text()
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await t.test('request search params schema', async t => {
    t.plan(4)
    const result = await fetch(`${url}/params/world/123`, {
      method: 'SEARCH'
    })
    const body = await result.text()
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { foo: 'world', test: 123 })
  })

  await t.test('request search params schema error', async t => {
    t.plan(3)
    const result = await fetch(`${url}/params/world/string`, {
      method: 'SEARCH'
    })
    const body = await result.text()
    t.assert.strictEqual(result.status, 400)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), {
      error: 'Bad Request',
      code: 'FST_ERR_VALIDATION',
      message: 'params/test must be integer',
      statusCode: 400
    })
  })

  await t.test('request search querystring schema', async t => {
    t.plan(4)
    const result = await fetch(`${url}/query?hello=123`, {
      method: 'SEARCH'
    })
    const body = await result.text()
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 123 })
  })

  await t.test('request search querystring schema error', async t => {
    t.plan(3)
    const result = await fetch(`${url}/query?hello=world`, {
      method: 'SEARCH'
    })
    const body = await result.text()
    t.assert.strictEqual(result.status, 400)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), {
      error: 'Bad Request',
      code: 'FST_ERR_VALIDATION',
      message: 'querystring/hello must be integer',
      statusCode: 400
    })
  })

  await t.test('request search body schema', async t => {
    t.plan(4)
    const replyBody = { foo: 'bar', test: 5 }
    const result = await fetch(`${url}/body`, {
      method: 'SEARCH',
      body: JSON.stringify(replyBody),
      headers: { 'content-type': 'application/json' }
    })
    const body = await result.text()
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), replyBody)
  })

  await t.test('request search body schema error', async t => {
    t.plan(4)
    const result = await fetch(`${url}/body`, {
      method: 'SEARCH',
      body: JSON.stringify({ foo: 'bar', test: 'test' }),
      headers: { 'content-type': 'application/json' }
    })
    const body = await result.text()
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 400)
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), {
      error: 'Bad Request',
      code: 'FST_ERR_VALIDATION',
      message: 'body/test must be integer',
      statusCode: 400
    })
  })
})
