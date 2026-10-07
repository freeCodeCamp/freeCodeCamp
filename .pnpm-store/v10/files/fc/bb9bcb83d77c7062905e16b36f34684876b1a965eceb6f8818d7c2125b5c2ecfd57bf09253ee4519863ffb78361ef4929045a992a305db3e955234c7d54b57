'use strict'

const { test } = require('node:test')
const fastify = require('..')()

const schema = {
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

const headersSchema = {
  schema: {
    headers: {
      type: 'object',
      properties: {
        'x-test': {
          type: 'number'
        }
      }
    }
  }
}

const bodySchema = {
  schema: {
    body: {
      type: 'object',
      properties: {
        hello: {
          type: 'string'
        }
      }
    },
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

test('shorthand - delete', (t, done) => {
  t.plan(1)
  try {
    fastify.delete('/', schema, function (req, reply) {
      reply.code(200).send({ hello: 'world' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  } finally {
    done()
  }
})

test('shorthand - delete params', t => {
  t.plan(1)
  try {
    fastify.delete('/params/:foo/:test', paramsSchema, function (req, reply) {
      reply.code(200).send(req.params)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - delete, querystring schema', t => {
  t.plan(1)
  try {
    fastify.delete('/query', querySchema, function (req, reply) {
      reply.send(req.query)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - get, headers schema', t => {
  t.plan(1)
  try {
    fastify.delete('/headers', headersSchema, function (req, reply) {
      reply.code(200).send(req.headers)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('missing schema - delete', t => {
  t.plan(1)
  try {
    fastify.delete('/missing', function (req, reply) {
      reply.code(200).send({ hello: 'world' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('body - delete', t => {
  t.plan(1)
  try {
    fastify.delete('/body', bodySchema, function (req, reply) {
      reply.send(req.body)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('delete tests', async t => {
  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => { fastify.close() })

  await t.test('shorthand - request delete', async t => {
    t.plan(4)

    const response = await fetch(fastifyServer, {
      method: 'DELETE'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await t.test('shorthand - request delete params schema', async t => {
    t.plan(4)

    const response = await fetch(fastifyServer + '/params/world/123', {
      method: 'DELETE'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { foo: 'world', test: 123 })
  })

  await t.test('shorthand - request delete params schema error', async t => {
    t.plan(3)

    const response = await fetch(fastifyServer + '/params/world/string', {
      method: 'DELETE'
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 400)
    t.assert.deepStrictEqual(await response.json(), {
      error: 'Bad Request',
      code: 'FST_ERR_VALIDATION',
      message: 'params/test must be integer',
      statusCode: 400
    })
  })

  await t.test('shorthand - request delete headers schema', async t => {
    t.plan(4)

    const response = await fetch(fastifyServer + '/headers', {
      method: 'DELETE',
      headers: {
        'x-test': '1'
      }
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.strictEqual(JSON.parse(body)['x-test'], 1)
  })

  await t.test('shorthand - request delete headers schema error', async t => {
    t.plan(3)

    const response = await fetch(fastifyServer + '/headers', {
      method: 'DELETE',
      headers: {
        'x-test': 'abc'
      }
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 400)
    const body = await response.text()
    t.assert.deepStrictEqual(JSON.parse(body), {
      error: 'Bad Request',
      code: 'FST_ERR_VALIDATION',
      message: 'headers/x-test must be number',
      statusCode: 400
    })
  })

  await t.test('shorthand - request delete querystring schema', async t => {
    t.plan(4)

    const response = await fetch(fastifyServer + '/query?hello=123', {
      method: 'DELETE'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 123 })
  })

  await t.test('shorthand - request delete querystring schema error', async t => {
    t.plan(3)

    const response = await fetch(fastifyServer + '/query?hello=world', {
      method: 'DELETE'
    })

    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 400)
    const body = await response.text()
    t.assert.deepStrictEqual(JSON.parse(body), {
      error: 'Bad Request',
      code: 'FST_ERR_VALIDATION',
      message: 'querystring/hello must be integer',
      statusCode: 400
    })
  })

  await t.test('shorthand - request delete missing schema', async t => {
    t.plan(4)

    const response = await fetch(fastifyServer + '/missing', {
      method: 'DELETE'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await t.test('shorthand - delete with body', async t => {
    t.plan(3)

    const response = await fetch(fastifyServer + '/body', {
      method: 'DELETE',
      body: JSON.stringify({ hello: 'world' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.json()
    t.assert.deepStrictEqual(body, { hello: 'world' })
  })
})

test('shorthand - delete with application/json Content-Type header and null body', (t, done) => {
  t.plan(4)
  const fastify = require('..')()
  fastify.delete('/', {}, (req, reply) => {
    t.assert.strictEqual(req.body, null)
    reply.send(req.body)
  })
  fastify.inject({
    method: 'DELETE',
    url: '/',
    headers: { 'Content-Type': 'application/json' },
    body: 'null'
  }, (err, response) => {
    t.assert.ifError(err)
    t.assert.strictEqual(response.statusCode, 200)
    t.assert.strictEqual(response.payload.toString(), 'null')
    done()
  })
})

// https://github.com/fastify/fastify/issues/936
// Skip this test because this is an invalid request
test('shorthand - delete with application/json Content-Type header and without body', { skip: 'https://github.com/fastify/fastify/pull/5419' }, t => {
  t.plan(4)
  const fastify = require('..')()
  fastify.delete('/', {}, (req, reply) => {
    t.assert.strictEqual(req.body, undefined)
    reply.send(req.body)
  })
  fastify.inject({
    method: 'DELETE',
    url: '/',
    headers: { 'Content-Type': 'application/json' },
    body: null
  }, (err, response) => {
    t.assert.ifError(err)
    t.assert.strictEqual(response.statusCode, 200)
    t.assert.strictEqual(response.payload.toString(), '')
  })
})
