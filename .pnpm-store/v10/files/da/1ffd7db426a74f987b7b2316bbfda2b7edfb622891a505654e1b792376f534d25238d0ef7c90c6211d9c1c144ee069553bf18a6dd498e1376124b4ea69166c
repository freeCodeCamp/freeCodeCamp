'use strict'

const { test } = require('node:test')
const { Readable, finished, pipeline } = require('node:stream')
const qs = require('node:querystring')
const fs = require('node:fs')
const zlib = require('node:zlib')
const http = require('node:http')
const eos = require('end-of-stream')
const express = require('express')
const multer = require('multer')

const inject = require('../index')
const parseURL = require('../lib/parse-url')

const NpmFormData = require('form-data')
const formAutoContent = require('form-auto-content')
const httpMethods = [
  'delete',
  'get',
  'head',
  'options',
  'patch',
  'post',
  'put',
  'trace'
]

test('returns non-chunked payload', (t, done) => {
  t.plan(7)
  const output = 'example.com:8080|/hello'

  const dispatch = function (req, res) {
    res.statusMessage = 'Super'
    res.setHeader('x-extra', 'hello')
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': output.length })
    res.end(req.headers.host + '|' + req.url)
  }

  inject(dispatch, 'http://example.com:8080/hello', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.statusMessage, 'Super')
    t.assert.ok(res.headers.date)
    t.assert.deepStrictEqual(res.headers, {
      date: res.headers.date,
      connection: 'keep-alive',
      'x-extra': 'hello',
      'content-type': 'text/plain',
      'content-length': output.length.toString()
    })
    t.assert.strictEqual(res.payload, output)
    t.assert.strictEqual(res.rawPayload.toString(), 'example.com:8080|/hello')
    done()
  })
})

test('returns single buffer payload', (t, done) => {
  t.plan(6)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host + '|' + req.url)
  }

  inject(dispatch, { url: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.ok(res.headers.date)
    t.assert.ok(res.headers.connection)
    t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
    t.assert.strictEqual(res.payload, 'example.com:8080|/hello')
    t.assert.strictEqual(res.rawPayload.toString(), 'example.com:8080|/hello')
    done()
  })
})

test('passes headers', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.super)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', headers: { Super: 'duper' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'duper')
    done()
  })
})

test('request has rawHeaders', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    t.assert.ok(Array.isArray(req.rawHeaders))
    t.assert.deepStrictEqual(req.rawHeaders, ['super', 'duper', 'user-agent', 'lightMyRequest', 'host', 'example.com:8080'])
    res.writeHead(200)
    res.end()
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', headers: { Super: 'duper' } }, (err) => {
    t.assert.ifError(err)
    done()
  })
})

test('request inherits from custom class', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    t.assert.ok(req instanceof http.IncomingMessage)
    res.writeHead(200)
    res.end()
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', Request: http.IncomingMessage }, (err) => {
    t.assert.ifError(err)
    done()
  })
})

test('request with custom class preserves stream data', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    t.assert.ok(req._readableState)
    res.writeHead(200)
    res.end()
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', Request: http.IncomingMessage }, (err) => {
    t.assert.ifError(err)
    done()
  })
})

test('assert Request option has a valid prototype', (t) => {
  t.plan(2)
  const dispatch = function (_req, res) {
    t.assert.ifError('should not get here')
    res.writeHead(500)
    res.end()
  }

  const MyInvalidRequest = {}

  t.assert.throws(() => {
    inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', Request: MyInvalidRequest }, () => {})
  }, Error)

  t.assert.throws(() => {
    inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', Request: 'InvalidRequest' }, () => {})
  }, Error)
})

test('passes remote address', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.socket.remoteAddress)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', remoteAddress: '1.2.3.4' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '1.2.3.4')
    done()
  })
})

test('passes a socket which emits events like a normal one does', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    req.socket.on('timeout', () => {})
    res.end('added')
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'added')
    done()
  })
})

test('includes deprecated connection on request', (t, done) => {
  t.plan(3)
  const warnings = process.listeners('warning')
  process.removeAllListeners('warning')
  function onWarning (err) {
    t.assert.strictEqual(err.code, 'FST_LIGHTMYREQUEST_DEP01')
    return false
  }
  process.on('warning', onWarning)
  t.after(() => {
    process.removeListener('warning', onWarning)
    for (const fn of warnings) {
      process.on('warning', fn)
    }
  })
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.connection.remoteAddress)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', remoteAddress: '1.2.3.4' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '1.2.3.4')
    done()
  })
})

const parseQuery = url => {
  const parsedURL = parseURL(url)
  return qs.parse(parsedURL.search.slice(1))
}

test('passes query', (t, done) => {
  t.plan(2)

  const query = {
    message: 'OK',
    xs: ['foo', 'bar']
  }

  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.url)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', query }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepEqual(parseQuery(res.payload), query)
    done()
  })
})

test('query will be merged into that in url', (t, done) => {
  t.plan(2)

  const query = {
    xs: ['foo', 'bar']
  }

  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.url)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello?message=OK', query }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepEqual(parseQuery(res.payload), Object.assign({ message: 'OK' }, query))
    done()
  })
})

test('passes query as a string', (t, done) => {
  t.plan(2)

  const query = 'message=OK&xs=foo&xs=bar'

  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.url)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', query }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepEqual(parseQuery(res.payload), {
      message: 'OK',
      xs: ['foo', 'bar']
    })
    done()
  })
})

test('query as a string will be merged into that in url', (t, done) => {
  t.plan(2)

  const query = 'xs=foo&xs=bar'

  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.url)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello?message=OK', query }, (err, res) => {
    t.assert.ifError(err)
    t.assert.deepEqual(parseQuery(res.payload), Object.assign({ message: 'OK' }, {
      xs: ['foo', 'bar']
    }))
    done()
  })
})

test('passes localhost as default remote address', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.socket.remoteAddress)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '127.0.0.1')
    done()
  })
})

test('passes host option as host header', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host)
  }

  inject(dispatch, { method: 'GET', url: '/hello', headers: { host: 'test.example.com' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'test.example.com')
    done()
  })
})

test('passes localhost as default host header', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host)
  }

  inject(dispatch, { method: 'GET', url: '/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'localhost:80')
    done()
  })
})

test('passes authority as host header', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host)
  }

  inject(dispatch, { method: 'GET', url: '/hello', authority: 'something' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'something')
    done()
  })
})

test('passes uri host as host header', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'example.com:8080')
    done()
  })
})

test('includes default http port in host header', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host)
  }

  inject(dispatch, 'http://example.com', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'example.com:80')
    done()
  })
})

test('includes default https port in host header', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host)
  }

  inject(dispatch, 'https://example.com', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'example.com:443')
    done()
  })
})

test('optionally accepts an object as url', (t, done) => {
  t.plan(5)
  const output = 'example.com:8080|/hello?test=1234'

  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': output.length })
    res.end(req.headers.host + '|' + req.url)
  }

  const url = {
    protocol: 'http',
    hostname: 'example.com',
    port: '8080',
    pathname: 'hello',
    query: {
      test: '1234'
    }
  }

  inject(dispatch, { url }, (err, res) => {
    t.assert.ifError(err)
    t.assert.ok(res.headers.date)
    t.assert.ok(res.headers.connection)
    t.assert.ifError(res.headers['transfer-encoding'])
    t.assert.strictEqual(res.payload, output)
    done()
  })
})

test('leaves user-agent unmodified', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers['user-agent'])
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', headers: { 'user-agent': 'duper' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'duper')
    done()
  })
})

test('returns chunked payload', (t, done) => {
  t.plan(5)
  const dispatch = function (_req, res) {
    res.writeHead(200, 'OK')
    res.write('a')
    res.write('b')
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.ok(res.headers.date)
    t.assert.ok(res.headers.connection)
    t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
    t.assert.strictEqual(res.payload, 'ab')
    done()
  })
})

test('sets trailers in response object', (t, done) => {
  t.plan(4)
  const dispatch = function (_req, res) {
    res.setHeader('Trailer', 'Test')
    res.addTrailers({ Test: 123 })
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers.trailer, 'Test')
    t.assert.strictEqual(res.headers.test, undefined)
    t.assert.strictEqual(res.trailers.test, '123')
    done()
  })
})

test('parses zipped payload', (t, done) => {
  t.plan(4)
  const dispatch = function (_req, res) {
    res.writeHead(200, 'OK')
    const stream = fs.createReadStream('./package.json')
    stream.pipe(zlib.createGzip()).pipe(res)
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    fs.readFile('./package.json', { encoding: 'utf-8' }, (err, file) => {
      t.assert.ifError(err)

      zlib.unzip(res.rawPayload, (err, unzipped) => {
        t.assert.ifError(err)
        t.assert.strictEqual(unzipped.toString('utf-8'), file)
        done()
      })
    })
  })
})

test('returns multi buffer payload', (t, done) => {
  t.plan(2)
  const dispatch = function (_req, res) {
    res.writeHead(200)
    res.write('a')
    res.write(Buffer.from('b'))
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'ab')
    done()
  })
})

test('returns null payload', (t, done) => {
  t.plan(2)
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Length': 0 })
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '')
    done()
  })
})

test('allows ending twice', (t, done) => {
  t.plan(2)
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Length': 0 })
    res.end()
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '')
    done()
  })
})

test('identifies injection object', (t, done) => {
  t.plan(6)
  const dispatchRequest = function (req, res) {
    t.assert.strictEqual(inject.isInjection(req), true)
    t.assert.strictEqual(inject.isInjection(res), true)

    res.writeHead(200, { 'Content-Length': 0 })
    res.end()
  }

  const dispatchCustomRequest = function (req, res) {
    t.assert.strictEqual(inject.isInjection(req), true)
    t.assert.strictEqual(inject.isInjection(res), true)

    res.writeHead(200, { 'Content-Length': 0 })
    res.end()
  }

  const options = { method: 'GET', url: '/' }
  const cb = (err) => { t.assert.ifError(err) }
  const cbDone = (err) => {
    t.assert.ifError(err)
    done()
  }

  inject(dispatchRequest, options, cb)
  inject(dispatchCustomRequest, { ...options, Request: http.IncomingMessage }, cbDone)
})

test('pipes response', (t, done) => {
  t.plan(3)
  let finished = false
  const dispatch = function (_req, res) {
    res.writeHead(200)
    const stream = getTestStream()

    res.on('finish', () => {
      finished = true
    })

    stream.pipe(res)
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(finished, true)
    t.assert.strictEqual(res.payload, 'hi')
    done()
  })
})

test('pipes response with old stream', (t, done) => {
  t.plan(3)
  let finished = false
  const dispatch = function (_req, res) {
    res.writeHead(200)
    const stream = getTestStream()
    stream.pause()
    const stream2 = new Readable().wrap(stream)
    stream.resume()

    res.on('finish', () => {
      finished = true
    })

    stream2.pipe(res)
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(finished, true)
    t.assert.strictEqual(res.payload, 'hi')
    done()
  })
})

test('echos object payload', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'content-type': req.headers['content-type'] })
    req.pipe(res)
  }

  inject(dispatch, { method: 'POST', url: '/test', payload: { a: 1 } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-type'], 'application/json')
    t.assert.strictEqual(res.payload, '{"a":1}')
    done()
  })
})

test('supports body option in Request and property in Response', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'content-type': req.headers['content-type'] })
    req.pipe(res)
  }

  inject(dispatch, { method: 'POST', url: '/test', body: { a: 1 } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-type'], 'application/json')
    t.assert.strictEqual(res.body, '{"a":1}')
    done()
  })
})

test('echos buffer payload', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200)
    req.pipe(res)
  }

  inject(dispatch, { method: 'POST', url: '/test', payload: Buffer.from('test!') }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'test!')
    done()
  })
})

test('echos object payload with non-english utf-8 string', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'content-type': req.headers['content-type'] })
    req.pipe(res)
  }

  inject(dispatch, { method: 'POST', url: '/test', payload: { a: '½½א' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-type'], 'application/json')
    t.assert.strictEqual(res.payload, '{"a":"½½א"}')
    done()
  })
})

test('echos object payload without payload', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200)
    req.pipe(res)
  }

  inject(dispatch, { method: 'POST', url: '/test' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '')
    done()
  })
})

test('retains content-type header', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'content-type': req.headers['content-type'] })
    req.pipe(res)
  }

  inject(dispatch, { method: 'POST', url: '/test', payload: { a: 1 }, headers: { 'content-type': 'something' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-type'], 'something')
    t.assert.strictEqual(res.payload, '{"a":1}')
    done()
  })
})

test('adds a content-length header if none set when payload specified', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers['content-length'])
  }

  inject(dispatch, { method: 'POST', url: '/test', payload: { a: 1 } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '{"a":1}'.length.toString())
    done()
  })
})

test('retains a content-length header when payload specified', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers['content-length'])
  }

  inject(dispatch, { method: 'POST', url: '/test', payload: '', headers: { 'content-length': '10' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '10')
    done()
  })
})

test('can handle a stream payload', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    readStream(req, (buff) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(buff)
    })
  }

  inject(dispatch, { method: 'POST', url: '/', payload: getTestStream() }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'hi')
    done()
  })
})

test('can handle a stream payload that errors', (t, done) => {
  t.plan(2)
  const dispatch = function (req) {
    req.resume()
  }

  const payload = new Readable({
    read () {
      this.destroy(new Error('kaboom'))
    }
  })

  inject(dispatch, { method: 'POST', url: '/', payload }, (err) => {
    t.assert.ok(err)
    t.assert.equal(err.message, 'kaboom')
    done()
  })
})

test('can handle a stream payload of utf-8 strings', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    readStream(req, (buff) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(buff)
    })
  }

  inject(dispatch, { method: 'POST', url: '/', payload: getTestStream('utf8') }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'hi')
    done()
  })
})

test('can override stream payload content-length header', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers['content-length'])
  }

  const headers = { 'content-length': '100' }

  inject(dispatch, { method: 'POST', url: '/', payload: getTestStream(), headers }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '100')
    done()
  })
})

test('writeHead returns single buffer payload', (t, done) => {
  t.plan(4)
  const reply = 'Hello World'
  const statusCode = 200
  const statusMessage = 'OK'
  const dispatch = function (_req, res) {
    res.writeHead(statusCode, statusMessage, { 'Content-Type': 'text/plain', 'Content-Length': reply.length })
    res.end(reply)
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, statusCode)
    t.assert.strictEqual(res.statusMessage, statusMessage)
    t.assert.strictEqual(res.payload, reply)
    done()
  })
})

test('_read() plays payload', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    let buffer = ''
    req.on('readable', () => {
      buffer = buffer + (req.read() || '')
    })

    req.on('close', () => {
    })

    req.on('end', () => {
      res.writeHead(200, { 'Content-Length': 0 })
      res.end(buffer)
      req.destroy()
    })
  }

  const body = 'something special just for you'
  inject(dispatch, { method: 'GET', url: '/', payload: body }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, body)
    done()
  })
})

test('simulates split', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    let buffer = ''
    req.on('readable', () => {
      buffer = buffer + (req.read() || '')
    })

    req.on('close', () => {
    })

    req.on('end', () => {
      res.writeHead(200, { 'Content-Length': 0 })
      res.end(buffer)
      req.destroy()
    })
  }

  const body = 'something special just for you'
  inject(dispatch, { method: 'GET', url: '/', payload: body, simulate: { split: true } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, body)
    done()
  })
})

test('simulates error', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    req.on('readable', () => {
    })

    req.on('error', () => {
      res.writeHead(200, { 'Content-Length': 0 })
      res.end('error')
    })
  }

  const body = 'something special just for you'
  inject(dispatch, { method: 'GET', url: '/', payload: body, simulate: { error: true } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'error')
    done()
  })
})

test('simulates no end without payload', (t, done) => {
  t.plan(2)
  let end = false
  const dispatch = function (req) {
    req.resume()
    req.on('end', () => {
      end = true
    })
  }

  let replied = false
  inject(dispatch, { method: 'GET', url: '/', simulate: { end: false } }, () => {
    replied = true
  })

  setTimeout(() => {
    t.assert.strictEqual(end, false)
    t.assert.strictEqual(replied, false)
    done()
  }, 10)
})

test('simulates no end with payload', (t, done) => {
  t.plan(2)
  let end = false
  const dispatch = function (req) {
    req.resume()
    req.on('end', () => {
      end = true
    })
  }

  let replied = false
  inject(dispatch, { method: 'GET', url: '/', payload: '1234567', simulate: { end: false } }, () => {
    replied = true
  })

  setTimeout(() => {
    t.assert.strictEqual(end, false)
    t.assert.strictEqual(replied, false)
    done()
  }, 10)
})

test('simulates close', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    let buffer = ''
    req.on('readable', () => {
      buffer = buffer + (req.read() || '')
    })

    req.on('close', () => {
      res.writeHead(200, { 'Content-Length': 0 })
      res.end('close')
    })

    req.on('end', () => {
    })
  }

  const body = 'something special just for you'
  inject(dispatch, { method: 'GET', url: '/', payload: body, simulate: { close: true } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'close')
    done()
  })
})

test('errors for invalid input options', (t) => {
  t.plan(1)

  t.assert.throws(
    () => inject({}, {}, () => {}),
    { name: 'AssertionError', message: 'dispatchFunc should be a function' }
  )
})

test('errors for missing url', (t) => {
  t.plan(1)

  t.assert.throws(
    () => inject(() => {}, {}, () => {}),
    { message: /must have required property 'url'/ }
  )
})

test('errors for an incorrect simulation object', (t) => {
  t.plan(1)

  t.assert.throws(
    () => inject(() => {}, { url: '/', simulate: 'sample string' }, () => {}),
    { message: /^must be object$/ }
  )
})

test('ignores incorrect simulation object', (t) => {
  t.plan(1)

  t.assert.doesNotThrow(() => inject(() => { }, { url: '/', simulate: 'sample string', validate: false }, () => { }))
})

test('errors for an incorrect simulation object values', (t) => {
  t.plan(1)

  t.assert.throws(
    () => inject(() => {}, { url: '/', simulate: { end: 'wrong input' } }, () => {}),
    { message: /^must be boolean$/ }
  )
})

test('promises support', (t, done) => {
  t.plan(1)
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello')
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello' })
    .then(res => {
      t.assert.strictEqual(res.payload, 'hello')
      done()
    })
    .catch(t.assert.fail)
})

test('this should be the server instance', (t, done) => {
  t.plan(2)

  const server = http.createServer()

  const dispatch = function (_req, res) {
    t.assert.strictEqual(this, server)
    res.end('hello')
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', server })
    .then(res => t.assert.strictEqual(res.statusCode, 200))
    .catch(t.assert.fail)
    .finally(done)
})

test('should handle response errors', (t, done) => {
  t.plan(1)
  const dispatch = function (_req, res) {
    res.connection.destroy(new Error('kaboom'))
  }

  inject(dispatch, 'http://example.com:8080/hello', (err) => {
    t.assert.ok(err)
    done()
  })
})

test('should handle response errors (promises)', async (t) => {
  t.plan(1)
  const dispatch = function (_req, res) {
    res.connection.destroy(new Error('kaboom'))
  }

  await t.assert.rejects(
    () => inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello' }),
    { name: 'Error', message: 'kaboom' }
  )
})

test('should handle response timeout handler', (t, done) => {
  t.plan(3)
  const dispatch = function (_req, res) {
    const handle = setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('incorrect')
    }, 200)
    res.setTimeout(100, () => {
      clearTimeout(handle)
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('correct')
    })
    res.on('timeout', () => {
      t.assert.ok(true, 'Response timeout event not emitted')
    })
  }
  inject(dispatch, { method: 'GET', url: '/test' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'correct')
    done()
  })
})

test('should throw on unknown HTTP method', (t) => {
  t.plan(1)
  const dispatch = function () { }

  t.assert.throws(() => inject(dispatch, { method: 'UNKNOWN_METHOD', url: 'http://example.com:8080/hello' }, (err, _res) => {
    t.assert.ok(err)
  }), Error)
})

test('should throw on unknown HTTP method (promises)', (t) => {
  t.plan(1)
  const dispatch = function () { }

  t.assert.throws(() => inject(dispatch, { method: 'UNKNOWN_METHOD', url: 'http://example.com:8080/hello' })
    .then(() => {}), Error)
})

test('HTTP method is case insensitive', (t, done) => {
  t.plan(3)

  const dispatch = function (_req, res) {
    res.end('Hi!')
  }

  inject(dispatch, { method: 'get', url: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.strictEqual(res.payload, 'Hi!')
    done()
  })
})

test('form-data should be handled correctly', (t, done) => {
  t.plan(4)

  const dispatch = function (req, res) {
    t.assert.strictEqual(req.headers['transfer-encoding'], undefined)
    let body = ''
    req.on('data', d => {
      body += d
    })
    req.on('end', () => {
      res.end(body)
    })
  }

  const form = new NpmFormData()
  form.append('my_field', 'my value')

  inject(dispatch, {
    method: 'POST',
    url: 'http://example.com:8080/hello',
    headers: {
      // Transfer-encoding is automatically deleted if Stream1 is used
      'transfer-encoding': 'chunked'
    },
    payload: form
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.ok(/--.+\r\nContent-Disposition: form-data; name="my_field"\r\n\r\nmy value\r\n--.+--\r\n/.test(res.payload))
    done()
  })
})

test('path as alias to url', (t, done) => {
  t.plan(2)

  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.url)
  }

  inject(dispatch, { method: 'GET', path: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, '/hello')
    done()
  })
})

test('Should throw if both path and url are missing', (t) => {
  t.plan(1)

  t.assert.throws(
    () => inject(() => {}, { method: 'GET' }, () => {}),
    { message: /must have required property 'url',must have required property 'path'/ }
  )
})

test('chainable api: backwards compatibility for promise (then)', (t, done) => {
  t.plan(1)

  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello')
  }

  inject(dispatch)
    .get('/')
    .then(res => t.assert.strictEqual(res.payload, 'hello'))
    .catch(t.assert.fail)
    .finally(done)
})

test('chainable api: backwards compatibility for promise (catch)', (t, done) => {
  t.plan(1)

  function dispatch () {
    throw Error
  }

  inject(dispatch)
    .get('/')
    .catch(err => t.assert.ok(err))
    .finally(done)
})

test('chainable api: multiple call of then should return the same promise', (t, done) => {
  t.plan(2)
  let id = 0

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Request-Id': id })
    ++id
    t.assert.ok('request id incremented')
    res.end('hello')
  }

  const chain = inject(dispatch).get('/')
  chain.then(res => {
    chain.then(rep => {
      t.assert.strictEqual(res.headers['request-id'], rep.headers['request-id'])
      done()
    })
  })
})

test('chainable api: http methods should work correctly', (t, done) => {
  t.plan(16)

  function dispatch (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.method)
  }

  httpMethods.forEach((method, index) => {
    inject(dispatch)[method]('http://example.com:8080/hello')
      .end((err, res) => {
        t.assert.ifError(err)
        t.assert.strictEqual(res.body, method.toUpperCase())
        if (index === httpMethods.length - 1) {
          done()
        }
      })
  })
})

test('chainable api: http methods should throw if already invoked', (t, done) => {
  t.plan(8)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  httpMethods.forEach((method, index) => {
    const chain = inject(dispatch)[method]('http://example.com:8080/hello')
    chain.end()
    t.assert.throws(() => chain[method]('/'), Error)
    if (index === httpMethods.length - 1) {
      done()
    }
  })
})

test('chainable api: body method should work correctly', (t, done) => {
  t.plan(2)

  function dispatch (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    req.pipe(res)
  }

  inject(dispatch)
    .get('http://example.com:8080/hello')
    .body('test')
    .end((err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, 'test')
      done()
    })
})

test('chainable api: cookie', (t, done) => {
  t.plan(2)

  function dispatch (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.cookie)
  }

  inject(dispatch)
    .get('http://example.com:8080/hello')
    .body('test')
    .cookies({ hello: 'world', fastify: 'rulez' })
    .end((err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.body, 'hello=world; fastify=rulez')
      done()
    })
})

test('chainable api: body method should throw if already invoked', (t) => {
  t.plan(1)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  const chain = inject(dispatch)
  chain
    .get('http://example.com:8080/hello')
    .end()
  t.assert.throws(() => chain.body('test'), Error)
})

test('chainable api: headers method should work correctly', (t, done) => {
  t.plan(2)

  function dispatch (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.foo)
  }

  inject(dispatch)
    .get('http://example.com:8080/hello')
    .headers({ foo: 'bar' })
    .end((err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.payload, 'bar')
      done()
    })
})

test('chainable api: headers method should throw if already invoked', (t) => {
  t.plan(1)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  const chain = inject(dispatch)
  chain
    .get('http://example.com:8080/hello')
    .end()
  t.assert.throws(() => chain.headers({ foo: 'bar' }), Error)
})

test('chainable api: payload method should work correctly', (t, done) => {
  t.plan(2)

  function dispatch (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    req.pipe(res)
  }

  inject(dispatch)
    .get('http://example.com:8080/hello')
    .payload('payload')
    .end((err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.payload, 'payload')
      done()
    })
})

test('chainable api: payload method should throw if already invoked', (t) => {
  t.plan(1)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  const chain = inject(dispatch)
  chain
    .get('http://example.com:8080/hello')
    .end()
  t.assert.throws(() => chain.payload('payload'), Error)
})

test('chainable api: query method should work correctly', (t, done) => {
  t.plan(2)

  const query = {
    message: 'OK',
    xs: ['foo', 'bar']
  }

  function dispatch (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.url)
  }

  inject(dispatch)
    .get('http://example.com:8080/hello')
    .query(query)
    .end((err, res) => {
      t.assert.ifError(err)
      t.assert.deepEqual(parseQuery(res.payload), query)
      done()
    })
})

test('chainable api: query method should throw if already invoked', (t) => {
  t.plan(1)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  const chain = inject(dispatch)
  chain
    .get('http://example.com:8080/hello')
    .end()
  t.assert.throws(() => chain.query({ foo: 'bar' }), Error)
})

test('chainable api: invoking end method after promise method should throw', (t) => {
  t.plan(1)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  const chain = inject(dispatch).get('http://example.com:8080/hello')

  chain.then()
  t.assert.throws(() => chain.end(), Error)
})

test('chainable api: invoking promise method after end method with a callback function should throw', (t, done) => {
  t.plan(2)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  const chain = inject(dispatch).get('http://example.com:8080/hello')

  chain.end((err) => {
    t.assert.ifError(err)
    done()
  })
  t.assert.throws(() => chain.then(), Error)
})

test('chainable api: invoking promise method after end method without a callback function should work properly', (t, done) => {
  t.plan(1)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello')
  }

  inject(dispatch)
    .get('http://example.com:8080/hello')
    .end()
    .then(res => t.assert.strictEqual(res.payload, 'hello'))
    .finally(done)
})

test('chainable api: invoking end method multiple times should throw', (t) => {
  t.plan(1)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  const chain = inject(dispatch).get('http://example.com:8080/hello')

  chain.end()
  t.assert.throws(() => chain.end(), Error)
})

test('chainable api: string url', (t, done) => {
  t.plan(2)

  function dispatch (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
    t.assert.ok('pass')
  }

  const chain = inject(dispatch, 'http://example.com:8080/hello')

  chain.then(() => t.assert.ok('pass')).finally(done)
})

test('Response.json() should parse the JSON payload', (t, done) => {
  t.plan(2)

  const jsonData = {
    a: 1,
    b: '2'
  }

  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(jsonData))
  }

  inject(dispatch, { method: 'GET', path: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    const { json } = res
    t.assert.deepStrictEqual(json(), jsonData)
    done()
  })
})

test('Response.json() should not throw an error if content-type is not application/json', (t, done) => {
  t.plan(2)

  const jsonData = {
    a: 1,
    b: '2'
  }

  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(JSON.stringify(jsonData))
  }

  inject(dispatch, { method: 'GET', path: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    const { json } = res
    t.assert.deepStrictEqual(json(), jsonData)
    done()
  })
})

test('Response.json() should throw an error if the payload is not of valid JSON format', (t, done) => {
  t.plan(2)

  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end('notAJSON')
  }

  inject(dispatch, { method: 'GET', path: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.throws(res.json, Error)
    done()
  })
})

test('Response.stream() should provide a Readable stream', (t, done) => {
  const lines = [
    JSON.stringify({ foo: 'bar' }),
    JSON.stringify({ hello: 'world' })
  ]

  t.plan(2 + lines.length)

  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'multiple/json' })
    for (const line of lines) {
      res.write(line)
    }
    res.end()
  }

  inject(dispatch, { method: 'GET', path: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    const readable = res.stream()
    const payload = []
    t.assert.strictEqual(readable instanceof Readable, true)
    readable.on('data', function (chunk) {
      payload.push(chunk)
    })
    readable.on('end', function () {
      for (let i = 0; i < lines.length; i++) {
        t.assert.strictEqual(lines[i], payload[i].toString())
      }
      done()
    })
  })
})

test('promise api should auto start (fire and forget)', (t, done) => {
  t.plan(1)

  function dispatch (_req, res) {
    t.assert.ok('dispatch called')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  }

  inject(dispatch, 'http://example.com:8080/hello')
  process.nextTick(done)
})

test('disabling autostart', (t, done) => {
  t.plan(3)

  let called = false

  function dispatch (_req, res) {
    t.assert.ok('dispatch called')
    called = true
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
    done()
  }

  const p = inject(dispatch, {
    url: 'http://example.com:8080/hello',
    autoStart: false
  })

  setImmediate(() => {
    t.assert.strictEqual(called, false)
    p.then(() => {
      t.assert.strictEqual(called, true)
    })
  })
})

function getTestStream (encoding) {
  const word = 'hi'
  let i = 0

  const stream = new Readable({
    read () {
      this.push(word[i] ? word[i++] : null)
    }
  })

  if (encoding) {
    stream.setEncoding(encoding)
  }

  return stream
}

function readStream (stream, callback) {
  const chunks = []

  stream.on('data', (chunk) => chunks.push(chunk))

  stream.on('end', () => {
    return callback(Buffer.concat(chunks))
  })
}

test('send cookie', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host + '|' + req.headers.cookie)
  }

  inject(dispatch, { url: 'http://example.com:8080/hello', cookies: { foo: 'bar', grass: 'àìùòlé' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'example.com:8080|foo=bar; grass=%C3%A0%C3%AC%C3%B9%C3%B2l%C3%A9')
    t.assert.strictEqual(res.rawPayload.toString(), 'example.com:8080|foo=bar; grass=%C3%A0%C3%AC%C3%B9%C3%B2l%C3%A9')
    done()
  })
})

test('send cookie with header already set', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host + '|' + req.headers.cookie)
  }

  inject(dispatch, {
    url: 'http://example.com:8080/hello',
    headers: { cookie: 'custom=one' },
    cookies: { foo: 'bar', grass: 'àìùòlé' }
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'example.com:8080|custom=one; foo=bar; grass=%C3%A0%C3%AC%C3%B9%C3%B2l%C3%A9')
    t.assert.strictEqual(res.rawPayload.toString(), 'example.com:8080|custom=one; foo=bar; grass=%C3%A0%C3%AC%C3%B9%C3%B2l%C3%A9')
    done()
  })
})

test('read cookie', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.setHeader('Set-Cookie', [
      'type=ninja',
      'dev=me; Expires=Fri, 17 Jan 2020 20:26:08 -0000; Max-Age=1234; Domain=.home.com; Path=/wow; Secure; HttpOnly; SameSite=Strict'
    ])
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host + '|' + req.headers.cookie)
  }

  inject(dispatch, { url: 'http://example.com:8080/hello', cookies: { foo: 'bar' } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'example.com:8080|foo=bar')
    t.assert.deepStrictEqual(res.cookies, [
      { name: 'type', value: 'ninja' },
      {
        name: 'dev',
        value: 'me',
        expires: new Date('Fri, 17 Jan 2020 20:26:08 -0000'),
        maxAge: 1234,
        domain: '.home.com',
        path: '/wow',
        secure: true,
        httpOnly: true,
        sameSite: 'Strict'
      }
    ])
    done()
  })
})

test('correctly handles no string headers', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    const payload = JSON.stringify(req.headers)
    res.writeHead(200, {
      'Content-Type': 'application/json',
      integer: 12,
      float: 3.14,
      null: null,
      string: 'string',
      object: { foo: 'bar' },
      array: [1, 'two', 3],
      date,
      true: true,
      false: false
    })
    res.end(payload)
  }

  const date = new Date(0)
  const headers = {
    integer: 12,
    float: 3.14,
    null: null,
    string: 'string',
    object: { foo: 'bar' },
    array: [1, 'two', 3],
    date,
    true: true,
    false: false
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', headers }, (err, res) => {
    t.assert.ifError(err)

    t.assert.deepStrictEqual(res.headers, {
      integer: '12',
      float: '3.14',
      null: 'null',
      string: 'string',
      object: '[object Object]',
      array: ['1', 'two', '3'],
      date: date.toString(),
      true: 'true',
      false: 'false',
      connection: 'keep-alive',
      'transfer-encoding': 'chunked',
      'content-type': 'application/json'
    })

    t.assert.deepStrictEqual(JSON.parse(res.payload), {
      integer: '12',
      float: '3.14',
      null: 'null',
      string: 'string',
      object: '[object Object]',
      array: '1,two,3',
      date: date.toString(),
      true: 'true',
      false: 'false',
      host: 'example.com:8080',
      'user-agent': 'lightMyRequest'
    })
    done()
  })
})

test('errors for invalid undefined header value', (t, done) => {
  t.plan(1)
  try {
    inject(() => {}, { url: '/', headers: { 'header-key': undefined } }, () => {})
  } catch (err) {
    t.assert.ok(err)
    done()
  }
})

test('example with form-auto-content', (t, done) => {
  t.plan(4)
  const dispatch = function (req, res) {
    let body = ''
    req.on('data', d => {
      body += d
    })
    req.on('end', () => {
      res.end(body)
    })
  }

  const form = formAutoContent({
    myField: 'my value',
    myFile: fs.createReadStream('./LICENSE')
  })

  inject(dispatch, {
    method: 'POST',
    url: 'http://example.com:8080/hello',
    payload: form.payload,
    headers: form.headers
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.ok(/--.+\r\nContent-Disposition: form-data; name="myField"\r\n\r\nmy value\r\n--.*/.test(res.payload))
    t.assert.ok(/--.+\r\nContent-Disposition: form-data; name="myFile"; filename="LICENSE"\r\n.*/.test(res.payload))
    done()
  })
})

test('simulate invalid alter _lightMyRequest.isDone with end', (t, done) => {
  const dispatch = function (req) {
    req.resume()
    req._lightMyRequest.isDone = true
    req.on('end', () => {
      t.assert.ok('should have end event')
      done()
    })
  }

  inject(dispatch, { method: 'GET', url: '/', simulate: { end: true } }, () => {
    t.assert.fail('should not have reply')
  })
})

test('simulate invalid alter _lightMyRequest.isDone without end', (t, done) => {
  const dispatch = function (req) {
    req.resume()
    req._lightMyRequest.isDone = true
    req.on('end', () => {
      t.assert.fail('should not have end event')
    })
    done()
  }

  inject(dispatch, { method: 'GET', url: '/', simulate: { end: false } }, () => {
    t.assert.fail('should not have reply')
  })
})

test('no error for response destroy', (t, done) => {
  t.plan(2)

  const dispatch = function (_req, res) {
    res.destroy()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.equal(res, null)
    t.assert.equal(err.code, 'LIGHT_ECONNRESET')
    done()
  })
})

test('request destory without.assert.ifError', (t, done) => {
  t.plan(2)

  const dispatch = function (req) {
    req.destroy()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.equal(err.code, 'LIGHT_ECONNRESET')
    t.assert.equal(res, null)
    done()
  })
})

test('request destory with error', (t, done) => {
  t.plan(2)

  const fakeError = new Error('some-err')

  const dispatch = function (req) {
    req.destroy(fakeError)
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.strictEqual(err, fakeError)
    t.assert.strictEqual(res, null)
    done()
  })
})

test('compatible with stream.finished', (t, done) => {
  t.plan(3)

  const dispatch = function (req, res) {
    finished(res, (err) => {
      t.assert.ok(err instanceof Error)
    })

    req.destroy()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.equal(err.code, 'LIGHT_ECONNRESET')
    t.assert.equal(res, null)
    done()
  })
})

test('compatible with eos', (t, done) => {
  t.plan(4)

  const dispatch = function (req, res) {
    eos(res, (err) => {
      t.assert.ok(err instanceof Error)
    })

    req.destroy()
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ok(err)
    t.assert.equal(err.code, 'LIGHT_ECONNRESET')
    t.assert.equal(res, null)
    done()
  })
})

test('compatible with stream.finished pipe a Stream', (t, done) => {
  t.plan(3)

  const dispatch = function (_req, res) {
    finished(res, (err) => {
      t.assert.ifError(err)
    })

    new Readable({
      read () {
        this.push('hello world')
        this.push(null)
      }
    }).pipe(res)
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.body, 'hello world')
    done()
  })
})

test('compatible with eos, passes error correctly', (t, done) => {
  t.plan(3)

  const fakeError = new Error('some-error')

  const dispatch = function (req, res) {
    eos(res, (err) => {
      t.assert.strictEqual(err, fakeError)
    })

    req.destroy(fakeError)
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.strictEqual(err, fakeError)
    t.assert.strictEqual(res, null)
    done()
  })
})

test('multiple calls to req.destroy should not be called', (t, done) => {
  t.plan(2)

  const dispatch = function (req) {
    req.destroy()
    req.destroy() // twice
  }

  inject(dispatch, { method: 'GET', url: '/' }, (err, res) => {
    t.assert.equal(res, null)
    t.assert.equal(err.code, 'LIGHT_ECONNRESET')
    done()
  })
})

test('passes headers when using an express app', (t, done) => {
  t.plan(2)

  const app = express()

  app.get('/hello', (_req, res) => {
    res.setHeader('Some-Fancy-Header', 'a very cool value')
    res.end()
  })

  inject(app, { method: 'GET', url: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['some-fancy-header'], 'a very cool value')
    done()
  })
})

test('value of request url when using inject should not differ', (t, done) => {
  t.plan(1)

  const server = http.createServer()

  const dispatch = function (req, res) {
    res.end(req.url)
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080//hello', server })
    .then(res => { t.assert.strictEqual(res.body, '//hello') })
    .catch(err => t.assert.ifError(err))
    .finally(done)
})

test('Can parse paths with single leading slash', (t) => {
  t.plan(1)
  const parsedURL = parseURL('/test', undefined)
  t.assert.strictEqual(parsedURL.href, 'http://localhost/test')
})

test('Can parse paths with two leading slashes', (t) => {
  t.plan(1)
  const parsedURL = parseURL('//test', undefined)
  t.assert.strictEqual(parsedURL.href, 'http://localhost//test')
})

test('Can parse URLs with two leading slashes', (t) => {
  t.plan(1)
  const parsedURL = parseURL('https://example.com//test', undefined)
  t.assert.strictEqual(parsedURL.href, 'https://example.com//test')
})

test('Can parse URLs with single leading slash', (t) => {
  t.plan(1)
  const parsedURL = parseURL('https://example.com/test', undefined)
  t.assert.strictEqual(parsedURL.href, 'https://example.com/test')
})

test('Can abort a request using AbortController/AbortSignal', (t) => {
  t.plan(1)

  const dispatch = function () {}

  const controller = new AbortController()
  const promise = inject(dispatch, {
    method: 'GET',
    url: 'http://example.com:8080/hello',
    signal: controller.signal
  })
  controller.abort()
  const wanted = new Error('The operation was aborted')
  wanted.name = 'AbortError'
  t.assert.rejects(promise, wanted)
}, { skip: globalThis.AbortController == null })

test('should pass req to ServerResponse', (t, done) => {
  if (parseInt(process.versions.node.split('.', 1)[0], 10) < 16) {
    t.assert.ok('Skip because Node version < 16')
    t.end()
    return
  }

  t.plan(5)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.host + '|' + req.url)
  }

  inject(dispatch, 'http://example.com:8080/hello', (err, res) => {
    t.assert.ifError(err)
    t.assert.ok(res.raw.req === res.raw.res.req)
    t.assert.ok(res.raw.res.req.removeListener)
    t.assert.strictEqual(res.payload, 'example.com:8080|/hello')
    t.assert.strictEqual(res.rawPayload.toString(), 'example.com:8080|/hello')
    done()
  })
})

test('should work with pipeline', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    pipeline(req.headers.host + '|' + req.url, res, () => res.end())
  }

  inject(dispatch, 'http://example.com:8080/hello', (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, 'example.com:8080|/hello')
    t.assert.strictEqual(res.rawPayload.toString(), 'example.com:8080|/hello')
    done()
  })
})

test('should leave the headers user-agent and content-type undefined when the headers are explicitly set to undefined in the inject', (t, done) => {
  t.plan(5)
  const dispatch = function (req, res) {
    t.assert.ok(Array.isArray(req.rawHeaders))
    t.assert.strictEqual(req.headers['user-agent'], undefined)
    t.assert.strictEqual(req.headers['content-type'], undefined)
    t.assert.strictEqual(req.headers['x-foo'], 'bar')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Ok')
  }

  inject(dispatch, {
    url: 'http://example.com:8080/hello',
    method: 'POST',
    headers: {
      'x-foo': 'bar',
      'user-agent': undefined,
      'content-type': undefined
    },
    body: {}
  }, (err) => {
    t.assert.ifError(err)
    done()
  })
})

test("passes payload when using express' send", (t, done) => {
  t.plan(3)

  const app = express()

  app.get('/hello', (_req, res) => {
    res.send('some text')
  })

  inject(app, { method: 'GET', url: 'http://example.com:8080/hello' }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-length'], '9')
    t.assert.strictEqual(res.payload, 'some text')
    done()
  })
})

test('request that is destroyed errors', (t, done) => {
  t.plan(2)
  const dispatch = function (req, res) {
    readStream(req, () => {
      req.destroy() // this should be a no-op
      setImmediate(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('hi')
      })
    })
  }

  const payload = getTestStream()

  inject(dispatch, { method: 'POST', url: '/', payload }, (err, res) => {
    t.assert.equal(res, null)
    t.assert.equal(err.code, 'LIGHT_ECONNRESET')
    done()
  })
})

function runFormDataUnitTest (name, { FormData, Blob }) {
  test(`${name} - form-data should be handled correctly`, (t, done) => {
    t.plan(23)

    const dispatch = function (req, res) {
      let body = ''
      t.assert.ok(/multipart\/form-data; boundary=----formdata-[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}(--)?$/.test(req.headers['content-type']), 'proper Content-Type provided')
      req.on('data', d => {
        body += d
      })
      req.on('end', () => {
        res.end(body)
      })
    }

    const form = new FormData()
    form.append('field', 'value')
    form.append('blob', new Blob(['value']), '')
    form.append('blob-with-type', new Blob(['value'], { type: 'text/plain' }), '')
    form.append('blob-with-name', new Blob(['value']), 'file.txt')
    form.append('number', 1)

    inject(dispatch, {
      method: 'POST',
      url: 'http://example.com:8080/hello',
      payload: form
    }, (err, res) => {
      t.assert.ifError(err)
      t.assert.strictEqual(res.statusCode, 200)

      const regexp = [
      // header
        /^------formdata-[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}(--)?$/,
        // content-disposition
        /^Content-Disposition: form-data; name="(.*)"(; filename="(.*)")?$/,
        // content-type
        /^Content-Type: (.*)$/
      ]
      const readable = Readable.from(res.body.split('\r\n'))
      let i = 1
      readable.on('data', function (chunk) {
        switch (i) {
          case 1:
          case 5:
          case 10:
          case 15:
          case 20: {
          // header
            t.assert.ok(regexp[0].test(chunk), 'correct header')
            break
          }
          case 2:
          case 6:
          case 11:
          case 16: {
          // content-disposition
            t.assert.ok(regexp[1].test(chunk), 'correct content-disposition')
            break
          }
          case 7:
          case 12:
          case 17: {
          // content-type
            t.assert.ok(regexp[2].test(chunk), 'correct content-type')
            break
          }
          case 3:
          case 8:
          case 13:
          case 18: {
          // empty
            t.assert.strictEqual(chunk, '', 'correct space')
            break
          }
          case 4:
          case 9:
          case 14:
          case 19: {
          // value
            t.assert.strictEqual(chunk, 'value', 'correct value')
            break
          }
        }
        i++
      })
      done()
    })
  }, { skip: FormData == null || Blob == null })
}

// supports >= node@18
runFormDataUnitTest('native', { FormData: globalThis.FormData, Blob: globalThis.Blob })
// supports >= node@16
runFormDataUnitTest('undici', { FormData: require('undici').FormData, Blob: require('node:buffer').Blob })
// supports >= node@14
runFormDataUnitTest('formdata-node', { FormData: require('formdata-node').FormData, Blob: require('formdata-node').Blob })

test('QUERY method works', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'content-type': req.headers['content-type'] })
    req.pipe(res)
  }

  inject(dispatch, { method: 'QUERY', url: '/test', payload: { a: 1 } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-type'], 'application/json')
    t.assert.strictEqual(res.payload, '{"a":1}')
    done()
  })
})

test('query method works', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'content-type': req.headers['content-type'] })
    req.pipe(res)
  }

  inject(dispatch, { method: 'query', url: '/test', payload: { a: 1 } }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-type'], 'application/json')
    t.assert.strictEqual(res.payload, '{"a":1}')
    done()
  })
})

test('should return the file content', async (t) => {
  const multerMiddleware = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 1024
    }
  })

  const app = express()

  app.use((req, res, next) => {
    if (req.headers['content-type'].indexOf('multipart/form-data') === 0) {
      req.multipart = true
    }
    next()
  })

  app.post('/hello', multerMiddleware.single('textFile'), (req, res) => {
    res.send(req.file.buffer.toString('utf8'))
  })
  app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send('Something was wrong')
  })

  const formData = new FormData()
  formData.append('textFile', new Blob(['some data']), 'sample.txt')

  const response = await inject(app, {
    method: 'POST',
    url: 'http://example.com:8080/hello',
    payload: formData
  })

  t.assert.equal(response.statusCode, 200)
  t.assert.equal(response.payload, 'some data')
})
