'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('Should accept a custom childLoggerFactory function', (t, done) => {
  t.plan(4)

  const fastify = Fastify()
  fastify.setChildLoggerFactory(function (logger, bindings, opts) {
    t.assert.ok(bindings.reqId)
    t.assert.ok(opts)
    this.log.debug(bindings, 'created child logger')
    return logger.child(bindings, opts)
  })

  fastify.get('/', (req, reply) => {
    req.log.info('log message')
    reply.send()
  })

  t.after(() => fastify.close())

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    fastify.inject({
      method: 'GET',
      url: 'http://localhost:' + fastify.server.address().port
    }, (err, res) => {
      t.assert.ifError(err)
      done()
    })
  })
})

test('Should accept a custom childLoggerFactory function as option', (t, done) => {
  t.plan(4)

  const fastify = Fastify({
    childLoggerFactory: function (logger, bindings, opts) {
      t.assert.ok(bindings.reqId)
      t.assert.ok(opts)
      this.log.debug(bindings, 'created child logger')
      return logger.child(bindings, opts)
    }
  })

  fastify.get('/', (req, reply) => {
    req.log.info('log message')
    reply.send()
  })

  t.after(() => fastify.close())

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    fastify.inject({
      method: 'GET',
      url: 'http://localhost:' + fastify.server.address().port
    }, (err, res) => {
      t.assert.ifError(err)
      done()
    })
  })
})

test('req.log should be the instance returned by the factory', (t, done) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.setChildLoggerFactory(function (logger, bindings, opts) {
    this.log.debug('using root logger')
    return this.log
  })

  fastify.get('/', (req, reply) => {
    t.assert.strictEqual(req.log, fastify.log)
    req.log.info('log message')
    reply.send()
  })

  t.after(() => fastify.close())

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    fastify.inject({
      method: 'GET',
      url: 'http://localhost:' + fastify.server.address().port
    }, (err, res) => {
      t.assert.ifError(err)
      done()
    })
  })
})

test('should throw error if invalid logger is returned', (t, done) => {
  t.plan(2)

  const fastify = Fastify()
  fastify.setChildLoggerFactory(function () {
    this.log.debug('returning an invalid logger, expect error')
    return undefined
  })

  fastify.get('/', (req, reply) => {
    reply.send()
  })

  t.after(() => fastify.close())

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    t.assert.throws(() => {
      try {
        fastify.inject({
          method: 'GET',
          url: 'http://localhost:' + fastify.server.address().port
        }, (err) => {
          t.assert.fail('request should have failed but did not')
          t.assert.ifError(err)
          done()
        })
      } finally {
        done()
      }
    }, { code: 'FST_ERR_LOG_INVALID_LOGGER' })
  })
})
