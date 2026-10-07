'use strict'

const { test } = require('node:test')
const Stream = require('node:stream')
const util = require('node:util')
const Fastify = require('..')
const { Readable } = require('node:stream')

test('inject should exist', t => {
  t.plan(2)
  const fastify = Fastify()
  t.assert.ok(fastify.inject)
  t.assert.strictEqual(typeof fastify.inject, 'function')
})

test('should wait for the ready event', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.register((instance, opts, done) => {
    instance.get('/', (req, reply) => {
      reply.send(payload)
    })
    setTimeout(done, 500)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(payload, JSON.parse(res.payload))
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '17')
    done()
  })
})

test('inject get request', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(payload, JSON.parse(res.payload))
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '17')
    done()
  })
})

test('inject get request - code check', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.get('/', (req, reply) => {
    reply.code(201).send(payload)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(payload, JSON.parse(res.payload))
    t.assert.strictEqual(res.statusCode, 201)
    t.assert.strictEqual(res.headers['content-length'], '17')
    done()
  })
})

test('inject get request - headers check', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.header('content-type', 'text/plain').send('')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual('', res.payload)
    t.assert.strictEqual(res.headers['content-type'], 'text/plain')
    t.assert.strictEqual(res.headers['content-length'], '0')
    done()
  })
})

test('inject get request - querystring', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.send(req.query)
  })

  fastify.inject({
    method: 'GET',
    url: '/?hello=world'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual({ hello: 'world' }, JSON.parse(res.payload))
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '17')
    done()
  })
})

test('inject get request - params', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/:hello', (req, reply) => {
    reply.send(req.params)
  })

  fastify.inject({
    method: 'GET',
    url: '/world'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual({ hello: 'world' }, JSON.parse(res.payload))
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '17')
    done()
  })
})

test('inject get request - wildcard', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/test/*', (req, reply) => {
    reply.send(req.params)
  })

  fastify.inject({
    method: 'GET',
    url: '/test/wildcard'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual({ '*': 'wildcard' }, JSON.parse(res.payload))
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '16')
    done()
  })
})

test('inject get request - headers', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.send(req.headers)
  })

  fastify.inject({
    method: 'GET',
    url: '/',
    headers: { hello: 'world' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual('world', JSON.parse(res.payload).hello)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '69')
    done()
  })
})

test('inject post request', (t, done) => {
  t.plan(4)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(payload, JSON.parse(res.payload))
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '17')
    done()
  })
})

test('inject post request - send stream', (t, done) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    headers: { 'content-type': 'application/json' },
    payload: getStream()
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual('{"hello":"world"}', res.payload)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.headers['content-length'], '17')
    done()
  })
})

test('inject get request - reply stream', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.get('/', (req, reply) => {
    reply.send(getStream())
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepStrictEqual('{"hello":"world"}', res.payload)
    t.assert.strictEqual(res.statusCode, 200)
    done()
  })
})

test('inject promisify - waiting for ready event', (t, done) => {
  t.plan(1)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  const injectParams = {
    method: 'GET',
    url: '/'
  }
  fastify.inject(injectParams)
    .then(res => {
      t.assert.strictEqual(res.statusCode, 200)
      done()
    })
    .catch(t.assert.fail)
})

test('inject promisify - after the ready event', (t, done) => {
  t.plan(2)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  fastify.ready(err => {
    t.assert.ifError(err)

    const injectParams = {
      method: 'GET',
      url: '/'
    }
    fastify.inject(injectParams)
      .then(res => {
        t.assert.strictEqual(res.statusCode, 200)
        done()
      })
      .catch(t.assert.fail)
  })
})

test('inject promisify - when the server is up', (t, done) => {
  t.plan(2)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  fastify.ready(err => {
    t.assert.ifError(err)

    // setTimeout because the ready event don't set "started" flag
    // in this iteration of the 'event loop'
    setTimeout(() => {
      const injectParams = {
        method: 'GET',
        url: '/'
      }
      fastify.inject(injectParams)
        .then(res => {
          t.assert.strictEqual(res.statusCode, 200)
          done()
        })
        .catch(t.assert.fail)
    }, 10)
  })
})

test('should reject in error case', (t, done) => {
  t.plan(1)
  const fastify = Fastify()

  const error = new Error('DOOM!')
  fastify.register((instance, opts, done) => {
    setTimeout(done, 500, error)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  })
    .catch(e => {
      t.assert.strictEqual(e, error)
      done()
    })
})

test('inject a multipart request using form-body', (t, done) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.addContentTypeParser('*', function (req, payload, done) {
    let body = ''
    payload.on('data', d => {
      body += d
    })
    payload.on('end', () => {
      done(null, body)
    })
  })
  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  const form = new FormData()
  form.set('my_field', 'my value')

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: form
  })
    .then(response => {
      t.assert.strictEqual(response.statusCode, 200)
      t.assert.ok(/Content-Disposition: form-data; name="my_field"/.test(response.payload))
      done()
    })
})

// https://github.com/hapijs/shot/blob/master/test/index.js#L836
function getStream () {
  const Read = function () {
    Stream.Readable.call(this)
  }
  util.inherits(Read, Stream.Readable)
  const word = '{"hello":"world"}'
  let i = 0

  Read.prototype._read = function (size) {
    this.push(word[i] ? word[i++] : null)
  }

  return new Read()
}

test('should error the promise if ready errors', (t, done) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.register((instance, opts) => {
    return Promise.reject(new Error('kaboom'))
  }).after(function () {
    t.assert.ok('after is called')
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }).then(() => {
    t.assert.fail('this should not be called')
  }).catch(err => {
    t.assert.ok(err)
    t.assert.strictEqual(err.message, 'kaboom')
    done()
  })
})

test('should throw error if callback specified and if ready errors', (t, done) => {
  t.plan(2)
  const fastify = Fastify()
  const error = new Error('kaboom')

  fastify.register((instance, opts) => {
    return Promise.reject(error)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, err => {
    t.assert.ok(err)
    t.assert.strictEqual(err, error)
    done()
  })
})

test('should support builder-style injection with ready app', async (t) => {
  t.plan(3)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  await fastify.ready()
  const res = await fastify.inject().get('/').end()
  t.assert.deepStrictEqual(payload, JSON.parse(res.payload))
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-length'], '17')
})

test('should support builder-style injection with non-ready app', async (t) => {
  t.plan(3)
  const fastify = Fastify()
  const payload = { hello: 'world' }

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  const res = await fastify.inject().get('/').end()
  t.assert.deepStrictEqual(payload, JSON.parse(res.payload))
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.strictEqual(res.headers['content-length'], '17')
})

test('should handle errors in builder-style injection correctly', async (t) => {
  t.plan(2)
  const fastify = Fastify()
  fastify.register((instance, opts, done) => {
    done(new Error('Kaboom'))
  })

  try {
    await fastify.inject().get('/')
  } catch (err) {
    t.assert.ok(err)
    t.assert.strictEqual(err.message, 'Kaboom')
  }
})

test('Should not throw on access to routeConfig frameworkErrors handler - FST_ERR_BAD_URL', (t, done) => {
  t.plan(5)

  const fastify = Fastify({
    frameworkErrors: function (err, req, res) {
      t.assert.ok(typeof req.id === 'string')
      t.assert.ok(req.raw instanceof Readable)
      t.assert.deepStrictEqual(req.routeOptions.url, undefined)
      res.send(`${err.message} - ${err.code}`)
    }
  })

  fastify.get('/test/:id', (req, res) => {
    res.send('{ hello: \'world\' }')
  })

  fastify.inject(
    {
      method: 'GET',
      url: '/test/%world'
    },
    (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, '\'/test/%world\' is not a valid url component - FST_ERR_BAD_URL')
      done()
    }
  )
})
