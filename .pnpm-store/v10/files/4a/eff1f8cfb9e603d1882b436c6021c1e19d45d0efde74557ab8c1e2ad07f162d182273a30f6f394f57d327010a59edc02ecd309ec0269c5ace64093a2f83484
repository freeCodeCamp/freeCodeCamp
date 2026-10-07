'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const Reply = require('../lib/reply')

test('should serialize reply when response stream is ended', (t, done) => {
  t.plan(5)

  const stream = require('node:stream')
  const fastify = Fastify({
    logger: {
      serializers: {
        res (reply) {
          t.assert.strictEqual(reply instanceof Reply, true)
          t.assert.ok('passed')
          return reply
        }
      }
    }
  })

  fastify.get('/error', function (req, reply) {
    const reallyLongStream = new stream.Readable({
      read: () => { }
    })
    reply.code(200).send(reallyLongStream)
    reply.raw.end(Buffer.from('hello\n'))
  })

  t.after(() => fastify.close())

  fastify.inject({
    url: '/error',
    method: 'GET'
  }, (err) => {
    t.assert.ifError(err)
    done()
  })
})
