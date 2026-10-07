'use strict'

const t = require('node:test')
const fs = require('node:fs')
const test = t.test
const zlib = require('node:zlib')
const express = require('express')

const inject = require('../index')

function accumulate (stream, cb) {
  const chunks = []
  stream.on('error', cb)
  stream.on('data', (chunk) => {
    chunks.push(chunk)
  })
  stream.on('end', () => {
    cb(null, Buffer.concat(chunks))
  })
}

test('stream mode - non-chunked payload', (t, done) => {
  t.plan(9)
  const output = 'example.com:8080|/hello'

  const dispatch = function (req, res) {
    res.statusMessage = 'Super'
    res.setHeader('x-extra', 'hello')
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': output.length })
    res.end(req.headers.host + '|' + req.url)
  }

  inject(dispatch, {
    url: 'http://example.com:8080/hello',
    payloadAsStream: true
  }, (err, res) => {
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
    t.assert.strictEqual(res.payload, undefined)
    t.assert.strictEqual(res.rawPayload, undefined)

    accumulate(res.stream(), (err, payload) => {
      t.assert.ifError(err)
      t.assert.strictEqual(payload.toString(), 'example.com:8080|/hello')
      done()
    })
  })
})

test('stream mode - passes headers', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(req.headers.super)
  }

  inject(dispatch, {
    method: 'GET',
    url: 'http://example.com:8080/hello',
    headers: { Super: 'duper' },
    payloadAsStream: true
  }, (err, res) => {
    t.assert.ifError(err)
    accumulate(res.stream(), (err, payload) => {
      t.assert.ifError(err)
      t.assert.strictEqual(payload.toString(), 'duper')
      done()
    })
  })
})

test('stream mode - returns chunked payload', (t, done) => {
  t.plan(6)
  const dispatch = function (_req, res) {
    res.writeHead(200, 'OK')
    res.write('a')
    res.write('b')
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    t.assert.ok(res.headers.date)
    t.assert.ok(res.headers.connection)
    t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
    accumulate(res.stream(), (err, payload) => {
      t.assert.ifError(err)
      t.assert.strictEqual(payload.toString(), 'ab')
      done()
    })
  })
})

test('stream mode - backpressure', (t, done) => {
  t.plan(7)
  let expected
  const dispatch = function (_req, res) {
    res.writeHead(200, 'OK')
    res.write('a')
    const buf = Buffer.alloc(1024 * 1024).fill('b')
    t.assert.strictEqual(res.write(buf), false)
    expected = 'a' + buf.toString()
    res.on('drain', () => {
      res.end()
    })
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    t.assert.ok(res.headers.date)
    t.assert.ok(res.headers.connection)
    t.assert.strictEqual(res.headers['transfer-encoding'], 'chunked')
    accumulate(res.stream(), (err, payload) => {
      t.assert.ifError(err)
      t.assert.strictEqual(payload.toString(), expected)
      done()
    })
  })
})

test('stream mode - sets trailers in response object', (t, done) => {
  t.plan(4)
  const dispatch = function (_req, res) {
    res.setHeader('Trailer', 'Test')
    res.addTrailers({ Test: 123 })
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers.trailer, 'Test')
    t.assert.strictEqual(res.headers.test, undefined)
    t.assert.strictEqual(res.trailers.test, '123')
    done()
  })
})

test('stream mode - parses zipped payload', (t, done) => {
  t.plan(5)
  const dispatch = function (_req, res) {
    res.writeHead(200, 'OK')
    const stream = fs.createReadStream('./package.json')
    stream.pipe(zlib.createGzip()).pipe(res)
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    fs.readFile('./package.json', { encoding: 'utf-8' }, (err, file) => {
      t.assert.ifError(err)

      accumulate(res.stream(), (err, payload) => {
        t.assert.ifError(err)

        zlib.unzip(payload, (err, unzipped) => {
          t.assert.ifError(err)
          t.assert.strictEqual(unzipped.toString('utf-8'), file)
          done()
        })
      })
    })
  })
})

test('stream mode - returns multi buffer payload', (t, done) => {
  t.plan(3)
  const dispatch = function (_req, res) {
    res.writeHead(200)
    res.write('a')
    res.write(Buffer.from('b'))
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)

    const chunks = []
    const stream = res.stream()
    stream.on('data', (chunk) => {
      chunks.push(chunk)
    })

    stream.on('end', () => {
      t.assert.strictEqual(chunks.length, 2)
      t.assert.strictEqual(Buffer.concat(chunks).toString(), 'ab')
      done()
    })
  })
})

test('stream mode - returns null payload', (t, done) => {
  t.plan(4)
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Length': 0 })
    res.end()
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, undefined)
    accumulate(res.stream(), (err, payload) => {
      t.assert.ifError(err)
      t.assert.strictEqual(payload.toString(), '')
      done()
    })
  })
})

test('stream mode - simulates error', (t, done) => {
  t.plan(3)
  const dispatch = function (req, res) {
    req.on('readable', () => {
    })

    req.on('error', () => {
      res.writeHead(200, { 'Content-Length': 0 })
      res.end('error')
    })
  }

  const body = 'something special just for you'
  inject(dispatch, { method: 'GET', url: '/', payload: body, simulate: { error: true }, payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    accumulate(res.stream(), (err, payload) => {
      t.assert.ifError(err)
      t.assert.strictEqual(payload.toString(), 'error')
      done()
    })
  })
})

test('stream mode - promises support', (t, done) => {
  t.plan(1)
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello')
  }

  inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello', payloadAsStream: true })
    .then((res) => {
      return new Promise((resolve, reject) => {
        accumulate(res.stream(), (err, payload) => {
          if (err) {
            return reject(err)
          }
          resolve(payload)
        })
      })
    })
    .then(payload => t.assert.strictEqual(payload.toString(), 'hello'))
    .catch(t.assert.fail)
    .finally(done)
})

test('stream mode - Response.json() should throw', (t, done) => {
  t.plan(2)

  const jsonData = {
    a: 1,
    b: '2'
  }

  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(jsonData))
  }

  inject(dispatch, { method: 'GET', path: 'http://example.com:8080/hello', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    const { json } = res
    t.assert.throws(json, Error)
    done()
  })
})

test('stream mode - error for response destroy', (t, done) => {
  t.plan(2)

  const dispatch = function (_req, res) {
    res.writeHead(200)
    setImmediate(() => {
      res.destroy()
    })
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    accumulate(res.stream(), (err) => {
      t.assert.ok(err)
      done()
    })
  })
})

test('stream mode - request destroy with error', (t, done) => {
  t.plan(3)

  const fakeError = new Error('some-err')

  const dispatch = function (req) {
    req.destroy(fakeError)
  }

  inject(dispatch, { method: 'GET', url: '/', payloadAsStream: true }, (err, res) => {
    t.assert.ok(err)
    t.assert.strictEqual(err, fakeError)
    t.assert.strictEqual(res, null)
    done()
  })
})

test('stream mode - Can abort a request using AbortController/AbortSignal', async (t) => {
  const dispatch = function (_req, res) {
    res.writeHead(200)
  }

  const controller = new AbortController()
  const res = await inject(dispatch, {
    method: 'GET',
    url: 'http://example.com:8080/hello',
    signal: controller.signal,
    payloadAsStream: true
  })
  controller.abort()

  await t.assert.rejects(async () => {
    for await (const c of res.stream()) {
      t.assert.fail(`should not loop, got ${c.toString()}`)
    }
  }, Error)
}, { skip: globalThis.AbortController == null })

test("stream mode - passes payload when using express' send", (t, done) => {
  t.plan(4)

  const app = express()

  app.get('/hello', (_req, res) => {
    res.send('some text')
  })

  inject(app, { method: 'GET', url: 'http://example.com:8080/hello', payloadAsStream: true }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.headers['content-length'], '9')
    accumulate(res.stream(), function (err, payload) {
      t.assert.ifError(err)
      t.assert.strictEqual(payload.toString(), 'some text')
      done()
    })
  })
})
