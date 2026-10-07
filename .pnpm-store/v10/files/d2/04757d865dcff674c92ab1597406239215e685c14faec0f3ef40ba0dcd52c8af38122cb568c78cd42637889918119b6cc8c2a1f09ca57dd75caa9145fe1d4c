'use strict'

const { test } = require('node:test')
const { Client } = require('undici')
const fastify = require('../../fastify')()

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

const nullSchema = {
  schema: {
    response: {
      '2xx': {
        type: 'null'
      }
    }
  }
}

const numberSchema = {
  schema: {
    response: {
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
        },
        'Y-Test': {
          type: 'number'
        }
      }
    }
  }
}

test('shorthand - get', t => {
  t.plan(1)
  try {
    fastify.get('/', schema, function (req, reply) {
      reply.code(200).send({ hello: 'world' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - get (return null)', t => {
  t.plan(1)
  try {
    fastify.get('/null', nullSchema, function (req, reply) {
      reply.code(200).send(null)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - get params', t => {
  t.plan(1)
  try {
    fastify.get('/params/:foo/:test', paramsSchema, function (req, reply) {
      reply.code(200).send(req.params)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - get, querystring schema', t => {
  t.plan(1)
  try {
    fastify.get('/query', querySchema, function (req, reply) {
      reply.code(200).send(req.query)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - get, headers schema', t => {
  t.plan(1)
  try {
    fastify.get('/headers', headersSchema, function (req, reply) {
      reply.code(200).send(req.headers)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('missing schema - get', t => {
  t.plan(1)
  try {
    fastify.get('/missing', function (req, reply) {
      reply.code(200).send({ hello: 'world' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('custom serializer - get', t => {
  t.plan(1)

  function customSerializer (data) {
    return JSON.stringify(data)
  }

  try {
    fastify.get('/custom-serializer', numberSchema, function (req, reply) {
      reply.code(200).serializer(customSerializer).send({ hello: 'world' })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('empty response', t => {
  t.plan(1)
  try {
    fastify.get('/empty', function (req, reply) {
      reply.code(200).send()
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('send a falsy boolean', t => {
  t.plan(1)
  try {
    fastify.get('/boolean', function (req, reply) {
      reply.code(200).send(false)
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('shorthand - get, set port', t => {
  t.plan(1)
  try {
    fastify.get('/port', headersSchema, function (req, reply) {
      reply.code(200).send({ port: req.port })
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('get test', async t => {
  t.after(() => { fastify.close() })

  await fastify.listen({ port: 0 })

  await t.test('shorthand - request get', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port, {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await t.test('shorthand - request get params schema', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/params/world/123', {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { foo: 'world', test: 123 })
  })

  await t.test('shorthand - request get params schema error', async t => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/params/world/string', {
      method: 'GET'
    })
    t.assert.ok(!response.ok)
    t.assert.strictEqual(response.status, 400)
    const body = await response.text()
    t.assert.deepStrictEqual(JSON.parse(body), {
      error: 'Bad Request',
      code: 'FST_ERR_VALIDATION',
      message: 'params/test must be integer',
      statusCode: 400
    })
  })

  await t.test('shorthand - request get headers schema', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/headers', {
      method: 'GET',
      headers: {
        'x-test': '1',
        'Y-Test': '3'
      }
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.json()
    t.assert.strictEqual(body['x-test'], 1)
    t.assert.strictEqual(body['y-test'], 3)
  })

  await t.test('shorthand - request get headers schema error', async t => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/headers', {
      method: 'GET',
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

  await t.test('shorthand - request get querystring schema', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/query?hello=123', {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 123 })
  })

  await t.test('shorthand - request get querystring schema error', async t => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/query?hello=world', {
      method: 'GET'
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

  await t.test('shorthand - request get missing schema', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/missing', {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await t.test('shorthand - custom serializer', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/custom-serializer', {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '' + body.length)
    t.assert.deepStrictEqual(JSON.parse(body), { hello: 'world' })
  })

  await t.test('shorthand - empty response', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/empty', {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.strictEqual(response.headers.get('content-length'), '0')
    t.assert.deepStrictEqual(body.toString(), '')
  })

  await t.test('shorthand - send a falsy boolean', async t => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/boolean', {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.deepStrictEqual(body.toString(), 'false')
  })

  await t.test('shorthand - send null value', async t => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/null', {
      method: 'GET'
    })
    t.assert.ok(response.ok)
    t.assert.strictEqual(response.status, 200)
    const body = await response.text()
    t.assert.deepStrictEqual(body.toString(), 'null')
  })

  await t.test('shorthand - request get headers - test fall back port', async t => {
    t.plan(2)

    const instance = new Client('http://localhost:' + fastify.server.address().port)

    const response = await instance.request({
      path: '/port',
      method: 'GET',
      headers: {
        host: 'fastify.test'
      }
    })

    t.assert.strictEqual(response.statusCode, 200)
    const body = JSON.parse(await response.body.text())
    t.assert.strictEqual(body.port, null)
  })
})
