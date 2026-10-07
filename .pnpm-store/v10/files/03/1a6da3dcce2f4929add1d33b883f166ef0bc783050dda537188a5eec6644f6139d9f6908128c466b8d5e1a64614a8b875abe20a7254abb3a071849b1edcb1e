'use strict'

/* eslint n/no-deprecated-api: "off" */

const path = require('node:path')
const { test } = require('node:test')
const Fastify = require('fastify')

const fastifyStatic = require('../')

test('register /content-type', async t => {
  t.plan(5)

  const pluginOptions = {
    root: path.join(__dirname, '/content-type'),
    prefix: '/content-type'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/content-type/index.html', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=utf-8')
  })

  await t.test('/content-type/index.css', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/css; charset=utf-8')
  })

  await t.test('/content-type/sample.jpg', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/sample.jpg')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'image/jpeg')
  })

  await t.test('/content-type/test.txt', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/test.txt')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/plain; charset=utf-8')
  })

  await t.test('/content-type/binary', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/binary')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'application/octet-stream')
  })
})

test('register /content-type preCompressed', async t => {
  t.plan(5)

  const pluginOptions = {
    root: path.join(__dirname, '/content-type'),
    prefix: '/content-type',
    preCompressed: true
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/content-type/index.html', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/index.html', {
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=utf-8')
  })

  await t.test('/content-type/index.css', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/index.css', {
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/css; charset=utf-8')
  })

  await t.test('/content-type/sample.jpg', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/sample.jpg', {
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'image/jpeg')
  })

  await t.test('/content-type/test.txt', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/test.txt', {
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/plain; charset=utf-8')
  })

  await t.test('/content-type/binary', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/content-type/binary', {
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'application/octet-stream')
  })
})
