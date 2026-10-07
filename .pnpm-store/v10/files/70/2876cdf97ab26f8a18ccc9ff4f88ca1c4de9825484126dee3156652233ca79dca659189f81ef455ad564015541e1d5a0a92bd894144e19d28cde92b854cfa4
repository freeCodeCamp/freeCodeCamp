'use strict'

const stream = require('node:stream')
const { ReadableStream } = require('node:stream/web')
const { test } = require('node:test')
const Fastify = require('..')

test('Creates a HEAD route for a GET one with prefixTrailingSlash', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  const arr = []
  fastify.register((instance, opts, next) => {
    instance.addHook('onRoute', (routeOptions) => {
      arr.push(`${routeOptions.method} ${routeOptions.url}`)
    })

    instance.route({
      method: 'GET',
      path: '/',
      exposeHeadRoute: true,
      prefixTrailingSlash: 'both',
      handler: (req, reply) => {
        reply.send({ here: 'is coffee' })
      }
    })

    next()
  }, { prefix: '/v1' })

  await fastify.ready()

  t.assert.ok(true)
})

test('Will not create a HEAD route that is not GET', async t => {
  t.plan(8)

  const fastify = Fastify({ exposeHeadRoutes: true })

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: (req, reply) => {
      reply.send({ here: 'is coffee' })
    }
  })

  fastify.route({
    method: 'GET',
    path: '/some-light',
    handler: (req, reply) => {
      reply.send()
    }
  })

  fastify.route({
    method: 'POST',
    path: '/something',
    handler: (req, reply) => {
      reply.send({ look: 'It is something!' })
    }
  })

  let res = await fastify.inject({
    method: 'HEAD',
    url: '/more-coffee'
  })

  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.deepStrictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/some-light'
  })

  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], undefined)
  t.assert.strictEqual(res.headers['content-length'], '0')
  t.assert.strictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/something'
  })

  t.assert.strictEqual(res.statusCode, 404)
})

test('HEAD route should handle properly each response type', async t => {
  t.plan(24)

  const fastify = Fastify({ exposeHeadRoutes: true })
  const resString = 'Found me!'
  const resJSON = { here: 'is Johnny' }
  const resBuffer = Buffer.from('I am a buffer!')
  const resStream = stream.Readable.from('I am a stream!')
  const resWebStream = ReadableStream.from('I am a web stream!')

  fastify.route({
    method: 'GET',
    path: '/json',
    handler: (req, reply) => {
      reply.send(resJSON)
    }
  })

  fastify.route({
    method: 'GET',
    path: '/string',
    handler: (req, reply) => {
      reply.send(resString)
    }
  })

  fastify.route({
    method: 'GET',
    path: '/buffer',
    handler: (req, reply) => {
      reply.send(resBuffer)
    }
  })

  fastify.route({
    method: 'GET',
    path: '/buffer-with-content-type',
    handler: (req, reply) => {
      reply.headers({ 'content-type': 'image/jpeg' })
      reply.send(resBuffer)
    }
  })

  fastify.route({
    method: 'GET',
    path: '/stream',
    handler: (req, reply) => {
      return resStream
    }
  })

  fastify.route({
    method: 'GET',
    path: '/web-stream',
    handler: (req, reply) => {
      return resWebStream
    }
  })

  let res = await fastify.inject({
    method: 'HEAD',
    url: '/json'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.strictEqual(res.headers['content-length'], `${Buffer.byteLength(JSON.stringify(resJSON))}`)
  t.assert.deepStrictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/string'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'text/plain; charset=utf-8')
  t.assert.strictEqual(res.headers['content-length'], `${Buffer.byteLength(resString)}`)
  t.assert.strictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/buffer'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/octet-stream')
  t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
  t.assert.strictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/buffer-with-content-type'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'image/jpeg')
  t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
  t.assert.strictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/stream'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], undefined)
  t.assert.strictEqual(res.headers['content-length'], undefined)
  t.assert.strictEqual(res.body, '')

  res = await fastify.inject({
    method: 'HEAD',
    url: '/web-stream'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], undefined)
  t.assert.strictEqual(res.headers['content-length'], undefined)
  t.assert.strictEqual(res.body, '')
})

test('HEAD route should respect custom onSend handlers', async t => {
  t.plan(5)

  let counter = 0
  const resBuffer = Buffer.from('I am a coffee!')
  const fastify = Fastify({ exposeHeadRoutes: true })
  const customOnSend = (res, reply, payload, done) => {
    counter = counter + 1
    done(null, payload)
  }

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: (req, reply) => {
      reply.send(resBuffer)
    },
    onSend: [customOnSend, customOnSend]
  })

  const res = await fastify.inject({
    method: 'HEAD',
    url: '/more-coffee'
  })

  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/octet-stream')
  t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
  t.assert.strictEqual(res.body, '')
  t.assert.strictEqual(counter, 2)
})

test('route onSend can be function or array of functions', async t => {
  t.plan(10)
  const counters = { single: 0, multiple: 0 }

  const resBuffer = Buffer.from('I am a coffee!')
  const fastify = Fastify({ exposeHeadRoutes: true })

  fastify.route({
    method: 'GET',
    path: '/coffee',
    handler: () => resBuffer,
    onSend: (res, reply, payload, done) => {
      counters.single += 1
      done(null, payload)
    }
  })

  const customOnSend = (res, reply, payload, done) => {
    counters.multiple += 1
    done(null, payload)
  }

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    handler: () => resBuffer,
    onSend: [customOnSend, customOnSend]
  })

  let res = await fastify.inject({ method: 'HEAD', url: '/coffee' })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/octet-stream')
  t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
  t.assert.strictEqual(res.body, '')
  t.assert.strictEqual(counters.single, 1)

  res = await fastify.inject({ method: 'HEAD', url: '/more-coffee' })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-type'], 'application/octet-stream')
  t.assert.strictEqual(res.headers['content-length'], `${resBuffer.byteLength}`)
  t.assert.strictEqual(res.body, '')
  t.assert.strictEqual(counters.multiple, 2)
})

test('no warning for exposeHeadRoute', async t => {
  const fastify = Fastify()

  fastify.route({
    method: 'GET',
    path: '/more-coffee',
    exposeHeadRoute: true,
    async handler () {
      return 'hello world'
    }
  })

  const listener = (w) => {
    t.assert.fail('no warning')
  }

  process.on('warning', listener)

  await fastify.listen({ port: 0 })

  process.removeListener('warning', listener)

  await fastify.close()
})
