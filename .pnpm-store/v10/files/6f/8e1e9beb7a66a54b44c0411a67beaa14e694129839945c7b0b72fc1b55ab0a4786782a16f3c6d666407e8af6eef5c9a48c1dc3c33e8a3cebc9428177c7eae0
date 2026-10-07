'use strict'

const http = require('http')
const os = require('node:os')
const semver = require('semver')
const { test, skip } = require('tap')
const { sink, once } = require('./helper')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()

test('http request support', async ({ ok, same, error, teardown }) => {
  let originalReq
  const instance = pino(sink((chunk, enc) => {
    ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    same(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my request',
      req: {
        method: originalReq.method,
        url: originalReq.url,
        headers: originalReq.headers,
        remoteAddress: originalReq.socket.remoteAddress,
        remotePort: originalReq.socket.remotePort
      }
    })
  }))

  const server = http.createServer((req, res) => {
    originalReq = req
    instance.info(req, 'my request')
    res.end('hello')
  })
  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  error(err)
  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()
})

test('http request support via serializer', async ({ ok, same, error, teardown }) => {
  let originalReq
  const instance = pino({
    serializers: {
      req: pino.stdSerializers.req
    }
  }, sink((chunk, enc) => {
    ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    same(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my request',
      req: {
        method: originalReq.method,
        url: originalReq.url,
        headers: originalReq.headers,
        remoteAddress: originalReq.socket.remoteAddress,
        remotePort: originalReq.socket.remotePort
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    originalReq = req
    instance.info({ req }, 'my request')
    res.end('hello')
  })
  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  error(err)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()
})

// skipped because request connection is deprecated since v13, and request socket is always available
skip('http request support via serializer without request connection', async ({ ok, same, error, teardown }) => {
  let originalReq
  const instance = pino({
    serializers: {
      req: pino.stdSerializers.req
    }
  }, sink((chunk, enc) => {
    ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    const expected = {
      pid,
      hostname,
      level: 30,
      msg: 'my request',
      req: {
        method: originalReq.method,
        url: originalReq.url,
        headers: originalReq.headers
      }
    }
    if (semver.gte(process.version, '13.0.0')) {
      expected.req.remoteAddress = originalReq.socket.remoteAddress
      expected.req.remotePort = originalReq.socket.remotePort
    }
    same(chunk, expected)
  }))

  const server = http.createServer(function (req, res) {
    originalReq = req
    delete req.connection
    instance.info({ req }, 'my request')
    res.end('hello')
  })
  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  error(err)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()
})

test('http response support', async ({ ok, same, error, teardown }) => {
  let originalRes
  const instance = pino(sink((chunk, enc) => {
    ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    same(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my response',
      res: {
        statusCode: originalRes.statusCode,
        headers: originalRes.getHeaders()
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    originalRes = res
    res.end('hello')
    instance.info(res, 'my response')
  })
  server.unref()
  server.listen()
  const err = await once(server, 'listening')

  error(err)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()
})

test('http response support via a serializer', async ({ ok, same, error, teardown }) => {
  const instance = pino({
    serializers: {
      res: pino.stdSerializers.res
    }
  }, sink((chunk, enc) => {
    ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    same(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my response',
      res: {
        statusCode: 200,
        headers: {
          'x-single': 'y',
          'x-multi': [1, 2]
        }
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    res.setHeader('x-single', 'y')
    res.setHeader('x-multi', [1, 2])
    res.end('hello')
    instance.info({ res }, 'my response')
  })

  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  error(err)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()
})

test('http request support via serializer in a child', async ({ ok, same, error, teardown }) => {
  let originalReq
  const instance = pino({
    serializers: {
      req: pino.stdSerializers.req
    }
  }, sink((chunk, enc) => {
    ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    same(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my request',
      req: {
        method: originalReq.method,
        url: originalReq.url,
        headers: originalReq.headers,
        remoteAddress: originalReq.socket.remoteAddress,
        remotePort: originalReq.socket.remotePort
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    originalReq = req
    const child = instance.child({ req })
    child.info('my request')
    res.end('hello')
  })

  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  error(err)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()
})
