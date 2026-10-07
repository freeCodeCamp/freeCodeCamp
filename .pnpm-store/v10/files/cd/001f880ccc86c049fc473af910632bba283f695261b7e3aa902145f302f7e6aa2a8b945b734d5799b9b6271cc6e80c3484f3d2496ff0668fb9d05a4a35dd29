'use strict'

const { test } = require('node:test')

const fastifyAccepts = require('..')

const Fastify = require('fastify')

/** @typedef {import('node:test').TestContext} TestContext */

const testCases = [
  {
    name: 'request - no header',
    acceptHeader: '',
    url: '/request',
    expected: {
      types: [],
      charsets: ['*'],
      param1: 'utf1',
      param2: 'utf1',
      param3: 'utf1',
      param4: 'utf1',
      param5: 'utf1'
    }
  },
  {
    name: 'request - simple',
    acceptHeader: 'text/html',
    url: '/request',
    expected: {
      types: ['text/html'],
      charsets: ['*'],
      param1: 'utf1',
      param2: 'utf1',
      param3: 'utf1',
      param4: 'utf1',
      param5: 'utf1'
    }
  },
  {
    name: 'request - complex',
    acceptHeader: 'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
    url: '/request',
    expected: {
      types: [
        'text/html',
        'application/xhtml+xml',
        'application/xml',
        '*/*'
      ],
      charsets: ['*'],
      param1: 'utf1',
      param2: 'utf1',
      param3: 'utf1',
      param4: 'utf1',
      param5: 'utf1'
    }
  },
  {
    name: 'reply - no header',
    acceptHeader: '',
    url: '/reply',
    expected: {
      types: [],
      param1: 'utf1'
    }
  },
  {
    name: 'reply - simple',
    acceptHeader: 'text/html',
    url: '/reply',
    expected: {
      types: ['text/html'],
      param1: 'utf1'
    }
  },
  {
    name: 'reply - complex',
    acceptHeader: 'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
    url: '/reply',
    expected: {
      types: [
        'text/html',
        'application/xhtml+xml',
        'application/xml',
        '*/*'
      ],
      param1: 'utf1'
    }
  }
]

test('accept header', async (/** @type {TestContext} */ t) => {
  t.plan(testCases.length)

  const fastify = Fastify()
  fastify.register(fastifyAccepts, { decorateReply: true })

  t.after(() => fastify.close())

  fastify.get('/request', function (req, reply) {
    reply.send({
      types: req.types(),
      charsets: req.charsets(),
      param1: req.charsets(['utf1']),
      param2: req.charsets(['utf1', 'utf2']),
      param3: req.charsets(['utf1', 'utf2', 'utf3']),
      param4: req.charsets(['utf1', 'utf2', 'utf3', 'utf4']),
      param5: req.charsets(['utf1', 'utf2', 'utf3', 'utf4', 'utf5'])
    })
  })

  fastify.get('/reply', function (_req, reply) {
    reply.send({
      types: reply.requestTypes(),
      param1: reply.requestCharsets(['utf1'])
    })
  })

  await fastify.listen({ port: 0 })

  const BASE_URL = `http://localhost:${fastify.server.address().port}`

  for (const testCase of testCases) {
    await t.test(testCase.name, async (/** @type {TestContext} */ t) => {
      t.plan(1)

      const result = await fetch(`${BASE_URL}${testCase.url}`, {
        headers: {
          accept: testCase.acceptHeader
        },
      })
      t.assert.deepStrictEqual(await result.json(), testCase.expected)
    })
  }
})

test('no reply decorator', async function (/** @type {TestContext} */ t) {
  const fastify = Fastify()
  fastify.register(fastifyAccepts, { decorateReply: false })
  await fastify.ready()

  const methodNames = [
    'Charset', 'Charsets',
    'Encoding', 'Encodings',
    'Language', 'Languages',
    'Type', 'Types'
  ]

  for (const method of methodNames) {
    t.assert.deepStrictEqual(fastify.hasReplyDecorator('request' + method, false), false)
  }
})
