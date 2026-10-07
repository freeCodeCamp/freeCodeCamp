'use strict'

const { test } = require('node:test')
const Fastify = require('../..')
const http2 = require('node:http2')
const { promisify } = require('node:util')
const connect = promisify(http2.connect)
const { once } = require('node:events')
const { buildCertificate } = require('../build-certificate')
const { getServerUrl } = require('../helper')
const { kHttp2ServerSessions } = require('../../lib/symbols')

test.before(buildCertificate)

const isNode24OrGreater = Number(process.versions.node.split('.')[0]) >= 24

test('http/2 request while fastify closing Node <24', { skip: isNode24OrGreater }, (t, done) => {
  const fastify = Fastify({
    http2: true
  })
  t.assert.ok('http2 successfully loaded')

  fastify.get('/', () => Promise.resolve({}))

  t.after(() => { fastify.close() })
  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const url = getServerUrl(fastify)
    const session = http2.connect(url, function () {
      this.request({
        ':method': 'GET',
        ':path': '/'
      }).on('response', headers => {
        t.assert.strictEqual(headers[':status'], 503)
        done()
        this.destroy()
      }).on('error', () => {
        // Nothing to do here,
        // we are not interested in this error that might
        // happen or not
      })
      session.on('error', () => {
        // Nothing to do here,
        // we are not interested in this error that might
        // happen or not
        done()
      })
      fastify.close()
    })
  })
})

test('http/2 request while fastify closing Node >=24', { skip: !isNode24OrGreater }, (t, done) => {
  const fastify = Fastify({
    http2: true
  })
  t.assert.ok('http2 successfully loaded')

  fastify.get('/', () => Promise.resolve({}))

  t.after(() => { fastify.close() })
  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)

    const url = getServerUrl(fastify)
    const session = http2.connect(url, function () {
      session.on('error', () => {
        // Nothing to do here,
        // we are not interested in this error that might
        // happen or not
      })
      session.on('close', () => {
        done()
      })
      fastify.close()
    })
  })
})

test('http/2 request while fastify closing - return503OnClosing: false', { skip: isNode24OrGreater }, (t, done) => {
  const fastify = Fastify({
    http2: true,
    return503OnClosing: false
  })

  t.after(() => { fastify.close() })

  fastify.get('/', () => Promise.resolve({}))

  fastify.listen({ port: 0 }, err => {
    t.assert.ifError(err)
    const url = getServerUrl(fastify)
    const session = http2.connect(url, function () {
      this.request({
        ':method': 'GET',
        ':path': '/'
      }).on('response', headers => {
        t.assert.strictEqual(headers[':status'], 200)
        done()
        this.destroy()
      }).on('error', () => {
        // Nothing to do here,
        // we are not interested in this error that might
        // happen or not
      })
      fastify.close()
    })
    session.on('error', () => {
      // Nothing to do here,
      // we are not interested in this error that might
      // happen or not
      done()
    })
  })
})

test('http/2 closes successfully with async await', async t => {
  const fastify = Fastify({
    http2SessionTimeout: 100,
    http2: true
  })

  await fastify.listen({ port: 0 })

  const url = getServerUrl(fastify)
  const session = await connect(url)
  // An error might or might not happen, as it's OS dependent.
  session.on('error', () => {})
  await fastify.close()
})

test('https/2 closes successfully with async await', async t => {
  const fastify = Fastify({
    http2SessionTimeout: 100,
    http2: true,
    https: {
      key: global.context.key,
      cert: global.context.cert
    }
  })

  await fastify.listen({ port: 0 })

  const url = getServerUrl(fastify)
  const session = await connect(url)
  // An error might or might not happen, as it's OS dependent.
  session.on('error', () => {})
  await fastify.close()
})

test('http/2 server side session emits a timeout event', async t => {
  let _resolve
  const p = new Promise((resolve) => { _resolve = resolve })

  const fastify = Fastify({
    http2SessionTimeout: 100,
    http2: true
  })

  fastify.get('/', async (req) => {
    req.raw.stream.session.on('timeout', () => _resolve())
    return {}
  })

  await fastify.listen({ port: 0 })

  const url = getServerUrl(fastify)
  const session = await connect(url)
  const req = session.request({
    ':method': 'GET',
    ':path': '/'
  }).end()

  const [headers] = await once(req, 'response')
  t.assert.strictEqual(headers[':status'], 200)
  req.resume()

  // An error might or might not happen, as it's OS dependent.
  session.on('error', () => {})
  await p
  await fastify.close()
})

test('http/2 sessions closed after closing server', async t => {
  t.plan(1)
  const fastify = Fastify({
    http2: true,
    http2SessionTimeout: 100
  })
  await fastify.listen()
  const url = getServerUrl(fastify)
  const waitSessionConnect = once(fastify.server, 'session')
  const session = http2.connect(url)
  await once(session, 'connect')
  await waitSessionConnect
  const waitSessionClosed = once(session, 'close')
  await fastify.close()
  await waitSessionClosed
  t.assert.strictEqual(session.closed, true)
})

test('http/2 sessions should be closed when setting forceClosedConnections to true', async t => {
  t.plan(2)
  const fastify = Fastify({ http2: true, http2SessionTimeout: 100, forceCloseConnections: true })
  fastify.get('/', () => 'hello world')
  await fastify.listen()
  const client = await connect(getServerUrl(fastify))
  const req = client.request({
    [http2.HTTP2_HEADER_PATH]: '/',
    [http2.HTTP2_HEADER_METHOD]: 'GET'
  })
  await once(req, 'response')
  fastify.close()
  const r2 = client.request({
    [http2.HTTP2_HEADER_PATH]: '/',
    [http2.TTP2_HEADER_METHOD]: 'GET'
  })
  r2.on('error', (err) => {
    t.assert.strictEqual(err.toString(), 'Error [ERR_HTTP2_STREAM_ERROR]: Stream closed with error code NGHTTP2_REFUSED_STREAM')
  })
  await once(r2, 'error')
  r2.end()
  t.assert.strictEqual(client.closed, true)
  client.destroy()
})

test('http/2 sessions should be removed from server[kHttp2ServerSessions] Set on goaway', async t => {
  t.plan(2)
  const fastify = Fastify({ http2: true, http2SessionTimeout: 100, forceCloseConnections: true })
  await fastify.listen()
  const waitSession = once(fastify.server, 'session')
  const client = http2.connect(getServerUrl(fastify))
  const [session] = await waitSession
  const waitGoaway = once(session, 'goaway')
  t.assert.strictEqual(fastify.server[kHttp2ServerSessions].size, 1)
  client.goaway()
  await waitGoaway
  t.assert.strictEqual(fastify.server[kHttp2ServerSessions].size, 0)
  client.destroy()
  await fastify.close()
})

test('http/2 sessions should be removed from server[kHttp2ServerSessions] Set on frameError', async t => {
  t.plan(2)
  const fastify = Fastify({ http2: true, http2SessionTimeout: 100, forceCloseConnections: true })
  await fastify.listen()
  const waitSession = once(fastify.server, 'session')
  const client = http2.connect(getServerUrl(fastify))
  const [session] = await waitSession
  t.assert.strictEqual(fastify.server[kHttp2ServerSessions].size, 1)
  session.emit('frameError', 0, 0, 0)
  t.assert.strictEqual(fastify.server[kHttp2ServerSessions].size, 0)
  client.destroy()
  await fastify.close()
})

test('http/2 sessions should not be removed from server[kHttp2ServerSessions] from Set if stream id passed on frameError', async t => {
  t.plan(2)
  const fastify = Fastify({ http2: true, http2SessionTimeout: 100, forceCloseConnections: true })
  await fastify.listen()
  const waitSession = once(fastify.server, 'session')
  const client = http2.connect(getServerUrl(fastify))
  const [session] = await waitSession
  t.assert.strictEqual(fastify.server[kHttp2ServerSessions].size, 1)
  session.emit('frameError', 0, 0, 1)
  t.assert.strictEqual(fastify.server[kHttp2ServerSessions].size, 1)
  client.destroy()
  await fastify.close()
})
