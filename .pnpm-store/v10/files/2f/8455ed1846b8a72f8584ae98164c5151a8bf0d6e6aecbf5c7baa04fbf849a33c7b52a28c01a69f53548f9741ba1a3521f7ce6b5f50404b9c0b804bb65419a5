'use strict'

const { test } = require('node:test')
const fastify = require('..')()

const noop = () => {}
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

test('chainable - get', t => {
  t.plan(1)
  t.assert.strictEqual(fastify.get('/', opts, noop), fastify)
})

test('chainable - post', t => {
  t.plan(1)
  t.assert.strictEqual(fastify.post('/', opts, noop), fastify)
})

test('chainable - route', t => {
  t.plan(1)
  t.assert.strictEqual(fastify.route({
    method: 'GET',
    url: '/other',
    schema: opts.schema,
    handler: noop
  }), fastify)
})
