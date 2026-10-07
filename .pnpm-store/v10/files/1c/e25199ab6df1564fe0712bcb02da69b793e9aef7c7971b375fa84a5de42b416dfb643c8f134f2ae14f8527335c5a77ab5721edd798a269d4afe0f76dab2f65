'use strict'

const dns = require('node:dns').promises
const stream = require('node:stream')
const { promisify } = require('node:util')
const symbols = require('../lib/symbols')
const { waitForCb } = require('./toolkit')
const assert = require('node:assert')

module.exports.sleep = promisify(setTimeout)

/**
 * @param method HTTP request method
 * @param t node:test instance
 * @param isSetErrorHandler true: using setErrorHandler
 */
module.exports.payloadMethod = function (method, t, isSetErrorHandler = false) {
  const test = t.test
  const fastify = require('..')()

  if (isSetErrorHandler) {
    fastify.setErrorHandler(function (err, request, reply) {
      assert.ok(request instanceof fastify[symbols.kRequest].parent)
      assert.strictEqual(typeof request, 'object')
      reply
        .code(err.statusCode)
        .type('application/json; charset=utf-8')
        .send(err)
    })
  }

  const upMethod = method.toUpperCase()
  const loMethod = method.toLowerCase()

  const schema = {
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

  test(`${upMethod} can be created`, t => {
    t.plan(1)
    try {
      fastify[loMethod]('/', schema, function (req, reply) {
        reply.code(200).send(req.body)
      })
      t.assert.ok(true)
    } catch (e) {
      t.assert.fail()
    }
  })

  test(`${upMethod} without schema can be created`, t => {
    t.plan(1)
    try {
      fastify[loMethod]('/missing', function (req, reply) {
        reply.code(200).send(req.body)
      })
      t.assert.ok(true)
    } catch (e) {
      t.assert.fail()
    }
  })

  test(`${upMethod} with body and querystring`, t => {
    t.plan(1)
    try {
      fastify[loMethod]('/with-query', function (req, reply) {
        req.body.hello = req.body.hello + req.query.foo
        reply.code(200).send(req.body)
      })
      t.assert.ok(true)
    } catch (e) {
      t.assert.fail()
    }
  })

  test(`${upMethod} with bodyLimit option`, t => {
    t.plan(1)
    try {
      fastify[loMethod]('/with-limit', { bodyLimit: 1 }, function (req, reply) {
        reply.send(req.body)
      })
      t.assert.ok(true)
    } catch (e) {
      t.assert.fail()
    }
  })

  fastify.listen({ port: 0 }, function (err) {
    if (err) {
      t.assert.ifError(err)
      return
    }

    t.after(() => { fastify.close() })

    test(`${upMethod} - correctly replies`, async (t) => {
      t.plan(3)

      const result = await fetch('http://localhost:' + fastify.server.address().port, {
        method: upMethod,
        body: JSON.stringify({ hello: 'world' }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      t.assert.ok(result.ok)
      t.assert.strictEqual(result.status, 200)
      t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
    })

    test(`${upMethod} - correctly replies with very large body`, async (t) => {
      t.plan(3)

      const largeString = 'world'.repeat(13200)
      const result = await fetch('http://localhost:' + fastify.server.address().port, {
        method: upMethod,
        body: JSON.stringify({ hello: largeString }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      t.assert.ok(result.ok)
      t.assert.strictEqual(result.status, 200)
      t.assert.deepStrictEqual(await result.json(), { hello: largeString })
    })

    test(`${upMethod} - correctly replies if the content type has the charset`, async (t) => {
      t.plan(3)

      const result = await fetch('http://localhost:' + fastify.server.address().port, {
        method: upMethod,
        body: JSON.stringify({ hello: 'world' }),
        headers: {
          'content-type': 'application/json; charset=utf-8'
        }
      })

      t.assert.ok(result.ok)
      t.assert.strictEqual(result.status, 200)
      t.assert.deepStrictEqual(await result.text(), JSON.stringify({ hello: 'world' }))
    })

    test(`${upMethod} without schema - correctly replies`, async (t) => {
      t.plan(3)

      const result = await fetch('http://localhost:' + fastify.server.address().port + '/missing', {
        method: upMethod,
        body: JSON.stringify({ hello: 'world' }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      t.assert.ok(result.ok)
      t.assert.strictEqual(result.status, 200)
      t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
    })

    test(`${upMethod} with body and querystring - correctly replies`, async (t) => {
      t.plan(3)

      const result = await fetch('http://localhost:' + fastify.server.address().port + '/with-query?foo=hello', {
        method: upMethod,
        body: JSON.stringify({ hello: 'world' }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      t.assert.ok(result.ok)
      t.assert.strictEqual(result.status, 200)
      t.assert.deepStrictEqual(await result.json(), { hello: 'worldhello' })
    })

    test(`${upMethod} with no body - correctly replies`, t => {
      t.plan(6)

      const { stepIn, patience } = waitForCb({ steps: 2 })

      fetch('http://localhost:' + fastify.server.address().port + '/missing', {
        method: upMethod,
        headers: { 'Content-Length': '0' }
      }).then(async (response) => {
        t.assert.ok(response.ok)
        t.assert.strictEqual(response.status, 200)
        t.assert.strictEqual(await response.text(), '')
        stepIn()
      })

      // Must use inject to make a request without a Content-Length header
      fastify.inject({
        method: upMethod,
        url: '/missing'
      }, (err, res) => {
        t.assert.ifError(err)
        t.assert.strictEqual(res.statusCode, 200)
        t.assert.strictEqual(res.payload.toString(), '')
        stepIn()
      })

      return patience
    })

    test(`${upMethod} returns 415 - incorrect media type if body is not json`, async (t) => {
      t.plan(2)

      const result = await fetch('http://localhost:' + fastify.server.address().port + '/missing', {
        method: upMethod,
        body: 'hello world',
        headers: {
          'Content-Type': undefined
        }
      })

      t.assert.ok(!result.ok)
      t.assert.strictEqual(result.status, 415)
    })

    if (loMethod === 'options') {
      test('OPTIONS returns 415 - should return 415 if Content-Type is not json or plain text', async (t) => {
        t.plan(2)

        const result = await fetch('http://localhost:' + fastify.server.address().port + '/missing', {
          method: upMethod,
          body: 'hello world',
          headers: {
            'Content-Type': 'text/xml'
          }
        })

        t.assert.ok(!result.ok)
        t.assert.strictEqual(result.status, 415)
      })
    }

    test(`${upMethod} returns 400 - Bad Request`, t => {
      const isOptions = upMethod === 'OPTIONS'
      t.plan(isOptions ? 2 : 4)

      const { stepIn, patience } = waitForCb({ steps: isOptions ? 1 : 2 })

      fetch('http://localhost:' + fastify.server.address().port, {
        method: upMethod,
        body: 'hello world',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        t.assert.ok(!response.ok)
        t.assert.strictEqual(response.status, 400)
        stepIn()
      })

      if (!isOptions) {
        fetch(`http://localhost:${fastify.server.address().port}`, {
          method: upMethod,
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': '0'
          }
        }).then((response) => {
          t.assert.ok(!response.ok)
          t.assert.strictEqual(response.status, 400)
          stepIn()
        })
      }

      return patience
    })

    test(`${upMethod} returns 413 - Payload Too Large`, t => {
      const isOptions = upMethod === 'OPTIONS'
      t.plan(isOptions ? 3 : 5)

      const { stepIn, patience } = waitForCb({ steps: isOptions ? 2 : 3 })

      fetch(`http://localhost:${fastify.server.address().port}`, {
        method: upMethod,
        body: JSON.stringify({ w: 'w'.repeat(1024 * 1024 + 1) }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        t.assert.strictEqual(response.status, 413)
        stepIn()
      }).catch((err) => {
        // Handle EPIPE error - server closed connection after sending 413
        if (err.cause?.code === 'EPIPE' || err.message.includes('fetch failed')) {
          t.assert.ok(true, 'Expected EPIPE error due to server closing connection on 413')
        } else {
          throw err
        }
        stepIn()
      })

      // Node errors for OPTIONS requests with a stream body and no Content-Length header
      if (!isOptions) {
        let chunk = Buffer.alloc(1024 * 1024 + 1, 0)
        const largeStream = new stream.Readable({
          read () {
            this.push(chunk)
            chunk = null
          }
        })
        fetch('http://localhost:' + fastify.server.address().port, {
          method: upMethod,
          headers: { 'Content-Type': 'application/json' },
          body: largeStream,
          duplex: 'half'
        }).then((response) => {
          t.assert.ok(!response.ok)
          t.assert.strictEqual(response.status, 413)
          stepIn()
        }).catch((err) => {
          // Handle EPIPE error - server closed connection after sending 413
          if (err.cause?.code === 'EPIPE' || err.message.includes('fetch failed')) {
            t.assert.ok(true, 'Expected EPIPE error due to server closing connection on 413')
          } else {
            throw err
          }
          stepIn()
        })
      }

      fetch(`http://localhost:${fastify.server.address().port}/with-limit`, {
        method: upMethod,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      }).then((response) => {
        t.assert.ok(!response.ok)
        t.assert.strictEqual(response.status, 413)
        stepIn()
      })

      return patience
    })

    test(`${upMethod} should fail with empty body and application/json content-type`, t => {
      if (upMethod === 'OPTIONS') return

      t.plan(12)

      const { stepIn, patience } = waitForCb({ steps: 5 })

      fastify.inject({
        method: `${upMethod}`,
        url: '/',
        headers: {
          'Content-Type': 'application/json'
        }
      }, (err, res) => {
        t.assert.ifError(err)
        t.assert.deepStrictEqual(JSON.parse(res.payload), {
          error: 'Bad Request',
          code: 'FST_ERR_CTP_EMPTY_JSON_BODY',
          message: 'Body cannot be empty when content-type is set to \'application/json\'',
          statusCode: 400
        })
      })

      fetch(`http://localhost:${fastify.server.address().port}`, {
        method: upMethod,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async (res) => {
        t.assert.ok(!res.ok)
        t.assert.deepStrictEqual(await res.json(), {
          error: 'Bad Request',
          code: 'FST_ERR_CTP_EMPTY_JSON_BODY',
          message: 'Body cannot be empty when content-type is set to \'application/json\'',
          statusCode: 400
        })
        stepIn()
      })

      fastify.inject({
        method: `${upMethod}`,
        url: '/',
        headers: {
          'Content-Type': 'application/json'
        },
        payload: null
      }, (err, res) => {
        t.assert.ifError(err)
        t.assert.deepStrictEqual(JSON.parse(res.payload), {
          error: 'Bad Request',
          code: 'FST_ERR_CTP_EMPTY_JSON_BODY',
          message: 'Body cannot be empty when content-type is set to \'application/json\'',
          statusCode: 400
        })
        stepIn()
      })

      fetch(`http://localhost:${fastify.server.address().port}`, {
        method: upMethod,
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
      }).then(async (res) => {
        t.assert.ok(!res.ok)
        t.assert.deepStrictEqual(await res.json(), {
          error: 'Bad Request',
          code: 'FST_ERR_CTP_EMPTY_JSON_BODY',
          message: 'Body cannot be empty when content-type is set to \'application/json\'',
          statusCode: 400
        })
        stepIn()
      })

      fastify.inject({
        method: `${upMethod}`,
        url: '/',
        headers: {
          'Content-Type': 'application/json'
        },
        payload: undefined
      }, (err, res) => {
        t.assert.ifError(err)
        t.assert.deepStrictEqual(JSON.parse(res.payload), {
          error: 'Bad Request',
          code: 'FST_ERR_CTP_EMPTY_JSON_BODY',
          message: 'Body cannot be empty when content-type is set to \'application/json\'',
          statusCode: 400
        })
        stepIn()
      })

      fetch(`http://localhost:${fastify.server.address().port}`, {
        method: upMethod,
        headers: {
          'Content-Type': 'application/json'
        },
        body: undefined
      }).then(async (res) => {
        t.assert.ok(!res.ok)
        t.assert.deepStrictEqual(await res.json(), {
          error: 'Bad Request',
          code: 'FST_ERR_CTP_EMPTY_JSON_BODY',
          message: 'Body cannot be empty when content-type is set to \'application/json\'',
          statusCode: 400
        })
        stepIn()
      })

      return patience
    })
  })
}

function lookupToIp (lookup) {
  return lookup.family === 6 ? `[${lookup.address}]` : lookup.address
}

module.exports.getLoopbackHost = async () => {
  const lookup = await dns.lookup('localhost')
  return [lookup.address, lookupToIp(lookup)]
}

module.exports.plainTextParser = function (request, callback) {
  let body = ''
  request.setEncoding('utf8')
  request.on('error', onError)
  request.on('data', onData)
  request.on('end', onEnd)
  function onError (err) {
    callback(err, null)
  }
  function onData (chunk) {
    body += chunk
  }
  function onEnd () {
    callback(null, body)
  }
}

module.exports.getServerUrl = function (app) {
  const { address, port } = app.server.address()
  return address === '::1'
    ? `http://[${address}]:${port}`
    : `http://${address}:${port}`
}
