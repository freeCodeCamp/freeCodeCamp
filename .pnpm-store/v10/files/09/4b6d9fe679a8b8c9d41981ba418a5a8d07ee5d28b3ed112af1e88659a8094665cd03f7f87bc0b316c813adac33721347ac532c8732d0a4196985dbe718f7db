'use strict'

const Fastify = require('..')
const { test } = require('node:test')
const http = require('node:http')
const http2 = require('node:http2')

const testResBody = 'Hello, world!'

test('sends early hints', (t, done) => {
  t.plan(6)

  const fastify = Fastify({
    logger: false
  })

  fastify.get('/', async (request, reply) => {
    reply.writeEarlyHints({
      link: '</styles.css>; rel=preload; as=style'
    }, () => {
      t.assert.ok('callback called')
    })

    return testResBody
  })

  fastify.listen({ port: 0 }, (err, address) => {
    t.assert.ifError(err)

    const req = http.get(address)

    req.on('information', (res) => {
      t.assert.strictEqual(res.statusCode, 103)
      t.assert.strictEqual(res.headers.link, '</styles.css>; rel=preload; as=style')
    })

    req.on('response', (res) => {
      t.assert.strictEqual(res.statusCode, 200)

      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        t.assert.strictEqual(data, testResBody)
        fastify.close()
        done()
      })
    })
  })
})

test('sends early hints (http2)', (t, done) => {
  t.plan(6)

  const fastify = Fastify({
    http2: true,
    logger: false
  })

  fastify.get('/', async (request, reply) => {
    reply.writeEarlyHints({
      link: '</styles.css>; rel=preload; as=style'
    })

    return testResBody
  })

  fastify.listen({ port: 0 }, (err, address) => {
    t.assert.ifError(err)

    const client = http2.connect(address)
    const req = client.request()

    req.on('headers', (headers) => {
      t.assert.notStrictEqual(headers, undefined)
      t.assert.strictEqual(headers[':status'], 103)
      t.assert.strictEqual(headers.link, '</styles.css>; rel=preload; as=style')
    })

    req.on('response', (headers) => {
      t.assert.strictEqual(headers[':status'], 200)
    })

    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })

    req.on('end', () => {
      t.assert.strictEqual(data, testResBody)
      client.close()
      fastify.close()
      done()
    })

    req.end()
  })
})
