'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('Buffer test', async t => {
  const fastify = Fastify()
  fastify.addContentTypeParser('application/json', { parseAs: 'buffer' }, fastify.getDefaultJsonParser('error', 'ignore'))

  fastify.delete('/', async (request) => {
    return request.body
  })

  await test('should return 200 if the body is not empty', async t => {
    t.plan(3)

    const response = await fastify.inject({
      method: 'DELETE',
      url: '/',
      payload: Buffer.from('{"hello":"world"}'),
      headers: {
        'content-type': 'application/json'
      }
    })

    t.assert.ifError(response.error)
    t.assert.strictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.payload.toString(), '{"hello":"world"}')
  })

  await test('should return 400 if the body is empty', async t => {
    t.plan(3)

    const response = await fastify.inject({
      method: 'DELETE',
      url: '/',
      payload: Buffer.alloc(0),
      headers: {
        'content-type': 'application/json'
      }
    })

    t.assert.ifError(response.error)
    t.assert.strictEqual(response.statusCode, 400)
    t.assert.deepStrictEqual(JSON.parse(response.payload.toString()), {
      error: 'Bad Request',
      code: 'FST_ERR_CTP_EMPTY_JSON_BODY',
      message: 'Body cannot be empty when content-type is set to \'application/json\'',
      statusCode: 400
    })
  })

  await test('should return 400 if the body is invalid json', async t => {
    t.plan(3)

    const response = await fastify.inject({
      method: 'DELETE',
      url: '/',
      payload: Buffer.from(']'),
      headers: {
        'content-type': 'application/json'
      }
    })

    t.assert.ifError(response.error)
    t.assert.strictEqual(response.statusCode, 400)
    t.assert.deepStrictEqual(JSON.parse(response.payload.toString()), {
      error: 'Bad Request',
      code: 'FST_ERR_CTP_INVALID_JSON_BODY',
      message: 'Body is not valid JSON but content-type is set to \'application/json\'',
      statusCode: 400
    })
  })
})
