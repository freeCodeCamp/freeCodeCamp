'use strict'

const { test } = require('node:test')
const fastify = require('fastify')
const AjvCompiler = require('../index')

const ajvFormats = require('ajv-formats')
const ajvErrors = require('ajv-errors')
const localize = require('ajv-i18n')

test('Format Baseline test', async (t) => {
  const app = buildApplication({
    customOptions: {
      validateFormats: false
    }
  })

  const res = await app.inject({
    url: '/hello',
    headers: {
      'x-foo': 'hello',
      'x-date': 'not a date',
      'x-email': 'not an email'
    },
    query: {
      foo: 'hello',
      date: 'not a date',
      email: 'not an email'
    }
  })
  t.assert.deepStrictEqual(res.statusCode, 200, 'format validation does not apply as configured')
  t.assert.deepStrictEqual(res.payload, 'hello')
})

test('Custom Format plugin loading test', async (t) => {
  t.plan(3)
  const app = buildApplication({
    customOptions: {
      validateFormats: true
    },
    plugins: [[ajvFormats, { mode: 'fast' }]]
  })

  const res = await app.inject('/hello')
  t.assert.deepStrictEqual(res.statusCode, 400, 'format validation applies')

  const res1 = await app.inject('/2ad0612c-7578-4b18-9a6f-579863f40e0b')
  t.assert.deepStrictEqual(res1.statusCode, 400, 'format validation applies')

  const res2 = await app.inject({
    url: '/2ad0612c-7578-4b18-9a6f-579863f40e0b',
    headers: {
      'x-foo': 'hello',
      'x-date': new Date().toISOString(),
      'x-email': 'foo@bar.baz'
    },
    query: {
      foo: 'hello',
      date: new Date().toISOString(),
      email: 'foo@bar.baz'
    }
  })
  t.assert.deepStrictEqual(res2.statusCode, 200)
})

test('Format plugin set by default test', async (t) => {
  t.plan(3)
  const app = buildApplication({})

  const res = await app.inject('/hello')
  t.assert.deepStrictEqual(res.statusCode, 400, 'format validation applies')

  const res1 = await app.inject('/2ad0612c-7578-4b18-9a6f-579863f40e0b')
  t.assert.deepStrictEqual(res1.statusCode, 400, 'format validation applies')

  const res2 = await app.inject({
    url: '/2ad0612c-7578-4b18-9a6f-579863f40e0b',
    headers: {
      'x-foo': 'hello',
      'x-date': new Date().toISOString(),
      'x-email': 'foo@bar.baz'
    },
    query: {
      foo: 'hello',
      date: new Date().toISOString(),
      email: 'foo@bar.baz'
    }
  })
  t.assert.deepStrictEqual(res2.statusCode, 200)
})

test('Custom error messages', async (t) => {
  t.plan(6)

  const app = buildApplication({
    customOptions: {
      removeAdditional: false,
      allErrors: true
    },
    plugins: [ajvFormats, ajvErrors]
  })

  const errorMessage = {
    required: 'custom miss',
    type: 'custom type', // will not replace internal "type" error for the property "foo"
    _: 'custom type', // this prop will do it
    additionalProperties: 'custom too many params'
  }

  app.post('/', {
    handler: () => { t.assert.fail('dont call me') },
    schema: {
      body: {
        type: 'object',
        required: ['foo'],
        properties: {
          foo: { type: 'integer' }
        },
        additionalProperties: false,
        errorMessage
      }
    }
  })

  const res = await app.inject({
    url: '/',
    method: 'post',
    payload: {}
  })
  t.assert.deepStrictEqual(res.statusCode, 400)
  t.assert.ok(res.json().message.includes(errorMessage.required))

  const res1 = await app.inject({
    url: '/',
    method: 'post',
    payload: { foo: 'not a number' }
  })
  t.assert.deepStrictEqual(res1.statusCode, 400)
  t.assert.ok(res1.json().message.includes(errorMessage.type))

  const res2 = await app.inject({
    url: '/',
    method: 'post',
    payload: { foo: 3, bar: 'ops' }
  })

  t.assert.deepStrictEqual(res2.statusCode, 400)
  t.assert.ok(res2.json().message.includes(errorMessage.additionalProperties))
})

test('Custom i18n error messages', async (t) => {
  t.plan(2)

  const app = buildApplication({
    customOptions: {
      allErrors: true,
      messages: false
    },
    plugins: [ajvFormats]
  })

  app.post('/', {
    handler: () => { t.assert.fail('dont call me') },
    schema: {
      body: {
        type: 'object',
        required: ['foo'],
        properties: {
          foo: { type: 'integer' }
        }
      }
    }
  })

  app.setErrorHandler((error, request, reply) => {
    t.assert.ok('Error handler executed')
    if (error.validation) {
      localize.ru(error.validation)
      reply.status(400).send(error.validation)
      return
    }
    t.assert.fail('not other errors')
  })

  const res = await app.inject({
    method: 'POST',
    url: '/',
    payload: {
      foo: 'string'
    }
  })

  t.assert.deepStrictEqual(res.json()[0].message, 'должно быть integer')
})

function buildApplication (ajvOptions) {
  const factory = AjvCompiler()

  const app = fastify({
    ajv: ajvOptions,
    schemaController: {
      compilersFactory: {
        buildValidator: factory
      }
    }
  })

  app.get('/:id', {
    schema: {
      headers: {
        type: 'object',
        required: [
          'x-foo',
          'x-date',
          'x-email'
        ],
        properties: {
          'x-foo': { type: 'string' },
          'x-date': { type: 'string', format: 'date-time' },
          'x-email': { type: 'string', format: 'email' }
        }
      },
      query: {
        type: 'object',
        required: [
          'foo',
          'date',
          'email'
        ],
        properties: {
          foo: { type: 'string' },
          date: { type: 'string', format: 'date-time' },
          email: { type: 'string', format: 'email' }
        }
      },
      params: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' }
        }
      }
    }
  }, async () => 'hello')

  return app
}
