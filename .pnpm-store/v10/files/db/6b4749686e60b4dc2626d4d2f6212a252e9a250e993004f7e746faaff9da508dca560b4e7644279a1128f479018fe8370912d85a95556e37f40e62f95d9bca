'use strict'

const { Readable } = require('node:stream')
const { test } = require('node:test')
const Fastify = require('../')

process.removeAllListeners('warning')

function endRouteHook (doneOrPayload, done, doneValue) {
  if (typeof doneOrPayload === 'function') {
    doneOrPayload(doneValue)
  } else {
    done(doneValue)
  }
}

function testExecutionHook (hook) {
  test(`${hook}`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.post('/', {
      [hook]: (req, reply, doneOrPayload, done) => {
        t.assert.ok('hook called')
        endRouteHook(doneOrPayload, done)
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { hello: 'world' })
      testDone()
    })
  })

  test(`${hook} option should be called after ${hook} hook`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()
    const checker = Object.defineProperty({ calledTimes: 0 }, 'check', {
      get: function () { return ++this.calledTimes }
    })

    fastify.addHook(hook, (req, reply, doneOrPayload, done) => {
      t.assert.strictEqual(checker.check, 1)
      endRouteHook(doneOrPayload, done)
    })

    fastify.post('/', {
      [hook]: (req, reply, doneOrPayload, done) => {
        t.assert.strictEqual(checker.check, 2)
        endRouteHook(doneOrPayload, done)
      }
    }, (req, reply) => {
      reply.send({})
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      testDone()
    })
  })

  test(`${hook} option could accept an array of functions`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()
    const checker = Object.defineProperty({ calledTimes: 0 }, 'check', {
      get: function () { return ++this.calledTimes }
    })

    fastify.post('/', {
      [hook]: [
        (req, reply, doneOrPayload, done) => {
          t.assert.strictEqual(checker.check, 1)
          endRouteHook(doneOrPayload, done)
        },
        (req, reply, doneOrPayload, done) => {
          t.assert.strictEqual(checker.check, 2)
          endRouteHook(doneOrPayload, done)
        }
      ]
    }, (req, reply) => {
      reply.send({})
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      testDone()
    })
  })

  test(`${hook} option could accept an array of async functions`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()
    const checker = Object.defineProperty({ calledTimes: 0 }, 'check', {
      get: function () { return ++this.calledTimes }
    })

    fastify.post('/', {
      [hook]: [
        async (req, reply) => {
          t.assert.strictEqual(checker.check, 1)
        },
        async (req, reply) => {
          t.assert.strictEqual(checker.check, 2)
        }
      ]
    }, (req, reply) => {
      reply.send({})
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      testDone()
    })
  })

  test(`${hook} option does not interfere with ${hook} hook`, (t, testDone) => {
    t.plan(7)
    const fastify = Fastify()
    const checker = Object.defineProperty({ calledTimes: 0 }, 'check', {
      get: function () { return ++this.calledTimes }
    })

    fastify.addHook(hook, (req, reply, doneOrPayload, done) => {
      t.assert.strictEqual(checker.check, 1)
      endRouteHook(doneOrPayload, done)
    })

    fastify.post('/', {
      [hook]: (req, reply, doneOrPayload, done) => {
        t.assert.strictEqual(checker.check, 2)
        endRouteHook(doneOrPayload, done)
      }
    }, handler)

    fastify.post('/no', handler)

    function handler (req, reply) {
      reply.send({})
    }

    fastify.inject({
      method: 'post',
      url: '/'
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(checker.calledTimes, 2)

      checker.calledTimes = 0

      fastify.inject({
        method: 'post',
        url: '/no'
      }, (err, res) => {
        t.assert.ifError(err)
        t.assert.strictEqual(checker.calledTimes, 1)
        testDone()
      })
    })
  })
}

function testBeforeHandlerHook (hook) {
  test(`${hook} option should be unique per route`, (t, testDone) => {
    t.plan(4)
    const fastify = Fastify()

    fastify.post('/', {
      [hook]: (req, reply, doneOrPayload, done) => {
        req.hello = 'earth'
        endRouteHook(doneOrPayload, done)
      }
    }, (req, reply) => {
      reply.send({ hello: req.hello })
    })

    fastify.post('/no', (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { hello: 'earth' })
    })

    fastify.inject({
      method: 'POST',
      url: '/no',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { hello: 'world' })
      testDone()
    })
  })

  test(`${hook} option should handle errors`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.post('/', {
      [hook]: (req, reply, doneOrPayload, done) => {
        endRouteHook(doneOrPayload, done, new Error('kaboom'))
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.strictEqual(res.statusCode, 500)
      t.assert.deepStrictEqual(payload, {
        message: 'kaboom',
        error: 'Internal Server Error',
        statusCode: 500
      })
      testDone()
    })
  })

  test(`${hook} option should handle throwing objects`, (t, testDone) => {
    t.plan(4)
    const fastify = Fastify()

    const myError = { myError: 'kaboom' }

    fastify.setErrorHandler(async (error, request, reply) => {
      t.assert.deepStrictEqual(error, myError, 'the error object throws by the user')
      return reply.code(500).send({ this: 'is', my: 'error' })
    })

    fastify.get('/', {
      [hook]: async () => {
        throw myError
      }
    }, (req, reply) => {
      t.assert.fail('the handler must not be called')
    })

    fastify.inject({
      url: '/',
      method: 'GET'
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 500)
      t.assert.deepStrictEqual(res.json(), { this: 'is', my: 'error' })
      testDone()
    })
  })

  test(`${hook} option should handle throwing objects by default`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.get('/', {
      [hook]: async () => {
        // eslint-disable-next-line no-throw-literal
        throw { myError: 'kaboom', message: 'i am an error' }
      }
    }, (req, reply) => {
      t.assert.fail('the handler must not be called')
    })

    fastify.inject({
      url: '/',
      method: 'GET'
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 500)
      t.assert.deepStrictEqual(res.json(), { myError: 'kaboom', message: 'i am an error' })
      testDone()
    })
  })

  test(`${hook} option should handle errors with custom status code`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.post('/', {
      [hook]: (req, reply, doneOrPayload, done) => {
        reply.code(401)
        endRouteHook(doneOrPayload, done, new Error('go away'))
      }
    }, (req, reply) => {
      reply.send(req.body)
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.strictEqual(res.statusCode, 401)
      t.assert.deepStrictEqual(payload, {
        message: 'go away',
        error: 'Unauthorized',
        statusCode: 401
      })
      testDone()
    })
  })

  test(`${hook} option should keep the context`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.decorate('foo', 42)

    fastify.post('/', {
      [hook]: function (req, reply, doneOrPayload, done) {
        t.assert.strictEqual(this.foo, 42)
        this.foo += 1
        endRouteHook(doneOrPayload, done)
      }
    }, function (req, reply) {
      reply.send({ foo: this.foo })
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { foo: 43 })
      testDone()
    })
  })

  test(`${hook} option should keep the context (array)`, (t, testDone) => {
    t.plan(3)
    const fastify = Fastify()

    fastify.decorate('foo', 42)

    fastify.post('/', {
      [hook]: [function (req, reply, doneOrPayload, done) {
        t.assert.strictEqual(this.foo, 42)
        this.foo += 1
        endRouteHook(doneOrPayload, done)
      }]
    }, function (req, reply) {
      reply.send({ foo: this.foo })
    })

    fastify.inject({
      method: 'POST',
      url: '/',
      payload: { hello: 'world' }
    }, (err, res) => {
      t.assert.ifError(err)
      const payload = JSON.parse(res.payload)
      t.assert.deepStrictEqual(payload, { foo: 43 })
      testDone()
    })
  })
}

testExecutionHook('preHandler')
testExecutionHook('onSend')
testExecutionHook('onRequest')
testExecutionHook('onResponse')
testExecutionHook('preValidation')
testExecutionHook('preParsing')
// hooks that comes before the handler
testBeforeHandlerHook('preHandler')
testBeforeHandlerHook('onRequest')
testBeforeHandlerHook('preValidation')
testBeforeHandlerHook('preParsing')

test('preValidation option should be called before preHandler hook', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preHandler', (req, reply, done) => {
    t.assert.ok(req.called)
    done()
  })

  fastify.post('/', {
    preValidation: (req, reply, done) => {
      req.called = true
      done()
    }
  }, (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    testDone()
  })
})

test('preSerialization option should be able to modify the payload', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.get('/only', {
    preSerialization: (req, reply, payload, done) => {
      done(null, { hello: 'another world' })
    }
  }, (req, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.inject({
    method: 'GET',
    url: '/only'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'another world' })
    testDone()
  })
})

test('preParsing option should be called before preValidation hook', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preValidation', (req, reply, done) => {
    t.assert.ok(req.called)
    done()
  })

  fastify.post('/', {
    preParsing: (req, reply, payload, done) => {
      req.called = true
      done()
    }
  }, (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    testDone()
  })
})

test('preParsing option should be able to modify the payload', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.post('/only', {
    preParsing: (req, reply, payload, done) => {
      const stream = new Readable()
      stream.receivedEncodedLength = parseInt(req.headers['content-length'], 10)
      stream.push(JSON.stringify({ hello: 'another world' }))
      stream.push(null)
      done(null, stream)
    }
  }, (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/only',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.payload), { hello: 'another world' })
    testDone()
  })
})

test('preParsing option should be able to supply statusCode', (t, testDone) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/only', {
    preParsing: async (req, reply, payload) => {
      const stream = new Readable({
        read () {
          const error = new Error('kaboom')
          error.statusCode = 408
          this.destroy(error)
        }
      })
      stream.receivedEncodedLength = 20
      return stream
    },
    onError: async (req, res, err) => {
      t.assert.strictEqual(err.statusCode, 408)
    }
  }, (req, reply) => {
    t.assert.fail('should not be called')
  })

  fastify.inject({
    method: 'POST',
    url: '/only',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 408)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      statusCode: 408,
      error: 'Request Timeout',
      message: 'kaboom'
    })
    testDone()
  })
})

test('onRequest option should be called before preParsing', (t, testDone) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.addHook('preParsing', (req, reply, payload, done) => {
    t.assert.ok(req.called)
    done()
  })

  fastify.post('/', {
    onRequest: (req, reply, done) => {
      req.called = true
      done()
    }
  }, (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    const payload = JSON.parse(res.payload)
    t.assert.deepStrictEqual(payload, { hello: 'world' })
    testDone()
  })
})

test('onTimeout on route', async (t) => {
  t.plan(3)
  const fastify = Fastify({ connectionTimeout: 500 })

  fastify.get('/timeout', {
    handler (request, reply) { },
    onTimeout (request, reply, done) {
      t.assert.ok('onTimeout called')
      done()
    }
  })

  const address = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  try {
    await fetch(`${address}/timeout`)
    t.assert.fail('Should have thrown an error')
  } catch (err) {
    t.assert.ok(err instanceof Error)
    t.assert.strictEqual(err.message, 'fetch failed')
  }
})

test('onError on route', (t, testDone) => {
  t.plan(3)

  const fastify = Fastify()

  const err = new Error('kaboom')

  fastify.get('/',
    {
      onError (request, reply, error, done) {
        t.assert.deepStrictEqual(error, err)
        done()
      }
    },
    (req, reply) => {
      reply.send(err)
    })

  fastify.inject('/', (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      error: 'Internal Server Error',
      message: 'kaboom',
      statusCode: 500
    })
    testDone()
  })
})
