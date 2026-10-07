'use strict'

const { test } = require('node:test')
const fastify = require('fastify')
const FjsCompiler = require('../index')

const echo = async (req) => { return req.body }

const sampleSchema = Object.freeze({
  $id: 'example1',
  type: 'object',
  properties: {
    name: { type: 'string' }
  }
})

const externalSchemas1 = Object.freeze({})
const externalSchemas2 = Object.freeze({
  foo: {
    $id: 'foo',
    type: 'object',
    properties: {
      name: { type: 'string' }
    }
  }
})

const fastifyFjsOptionsDefault = Object.freeze({})

test('basic usage', t => {
  t.plan(1)
  const factory = FjsCompiler()
  const compiler = factory(externalSchemas1, fastifyFjsOptionsDefault)
  const serializeFunc = compiler({ schema: sampleSchema })
  const result = serializeFunc({ name: 'hello' })
  t.assert.equal(result, '{"name":"hello"}')
})

test('fastify integration', async t => {
  const factory = FjsCompiler()

  const app = fastify({
    serializerOpts: {
      rounding: 'ceil'
    },
    schemaController: {
      compilersFactory: {
        buildSerializer: factory
      }
    }
  })

  app.addSchema(externalSchemas2.foo)

  app.post('/', {
    handler: echo,
    schema: {
      response: {
        200: {
          $ref: 'foo#'
        }
      }
    }
  })

  const res = await app.inject({
    url: '/',
    method: 'POST',
    payload: {
      version: '1',
      foo: 'this is not a number',
      name: 'serialize me'
    }
  })

  t.assert.equal(res.statusCode, 200)
  t.assert.deepStrictEqual(res.json(), { name: 'serialize me' })
})
