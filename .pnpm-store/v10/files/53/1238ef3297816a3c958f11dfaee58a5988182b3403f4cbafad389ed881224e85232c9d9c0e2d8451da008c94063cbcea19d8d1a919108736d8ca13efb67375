'use strict'

const { test, before } = require('node:test')
const fastify = require('..')
const helper = require('./helper')
const Request = require('../lib/request')
const buildRequest = Request.buildRequest

const fetchForwardedRequest = async (fastifyServer, forHeader, path, protoHeader) => {
  const headers = {
    'X-Forwarded-For': forHeader,
    'X-Forwarded-Host': 'fastify.test'
  }
  if (protoHeader) {
    headers['X-Forwarded-Proto'] = protoHeader
  }

  return fetch(fastifyServer + path, {
    headers
  })
}

const testRequestValues = (t, req, options) => {
  if (options.ip) {
    t.assert.ok(req.ip, 'ip is defined')
    t.assert.strictEqual(req.ip, options.ip, 'gets ip from x-forwarded-for')
  }
  if (options.host) {
    t.assert.ok(req.host, 'host is defined')
    t.assert.strictEqual(req.host, options.host, 'gets host from x-forwarded-host')
    t.assert.ok(req.hostname)
    t.assert.strictEqual(req.hostname, options.host, 'gets hostname from x-forwarded-host')
  }
  if (options.ips) {
    t.assert.deepStrictEqual(req.ips, options.ips, 'gets ips from x-forwarded-for')
  }
  if (options.protocol) {
    t.assert.ok(req.protocol, 'protocol is defined')
    t.assert.strictEqual(req.protocol, options.protocol, 'gets protocol from x-forwarded-proto')
  }
  if (options.port) {
    t.assert.ok(req.port, 'port is defined')
    t.assert.strictEqual(req.port, options.port, 'port is taken from x-forwarded-for or host')
  }
}

let localhost
before(async function () {
  [localhost] = await helper.getLoopbackHost()
})

test('trust proxy, not add properties to node req', async t => {
  t.plan(13)
  const app = fastify({
    trustProxy: true
  })
  t.after(() => app.close())

  app.get('/trustproxy', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })

  app.get('/trustproxychain', function (req, reply) {
    testRequestValues(t, req, { ip: '2.2.2.2', ips: [localhost, '1.1.1.1', '2.2.2.2'], port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })

  await fetchForwardedRequest(fastifyServer, '1.1.1.1', '/trustproxy', undefined)
  await fetchForwardedRequest(fastifyServer, '2.2.2.2, 1.1.1.1', '/trustproxychain', undefined)
})

test('trust proxy chain', async t => {
  t.plan(8)
  const app = fastify({
    trustProxy: [localhost, '192.168.1.1']
  })
  t.after(() => app.close())

  app.get('/trustproxychain', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })
  await fetchForwardedRequest(fastifyServer, '192.168.1.1, 1.1.1.1', '/trustproxychain', undefined)
})

test('trust proxy function', async t => {
  t.plan(8)
  const app = fastify({
    trustProxy: (address) => address === localhost
  })
  t.after(() => app.close())

  app.get('/trustproxyfunc', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })
  await fetchForwardedRequest(fastifyServer, '1.1.1.1', '/trustproxyfunc', undefined)
})

test('trust proxy number', async t => {
  t.plan(9)
  const app = fastify({
    trustProxy: 1
  })
  t.after(() => app.close())

  app.get('/trustproxynumber', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', ips: [localhost, '1.1.1.1'], host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })
  await fetchForwardedRequest(fastifyServer, '2.2.2.2, 1.1.1.1', '/trustproxynumber', undefined)
})

test('trust proxy IP addresses', async t => {
  t.plan(9)
  const app = fastify({
    trustProxy: `${localhost}, 2.2.2.2`
  })
  t.after(() => app.close())

  app.get('/trustproxyipaddrs', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', ips: [localhost, '1.1.1.1'], host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })
  await fetchForwardedRequest(fastifyServer, '3.3.3.3, 2.2.2.2, 1.1.1.1', '/trustproxyipaddrs', undefined)
})

test('trust proxy protocol', async t => {
  t.plan(30)
  const app = fastify({
    trustProxy: true
  })
  t.after(() => app.close())

  app.get('/trustproxyprotocol', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', protocol: 'lorem', host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })
  app.get('/trustproxynoprotocol', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', protocol: 'http', host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })
  app.get('/trustproxyprotocols', function (req, reply) {
    testRequestValues(t, req, { ip: '1.1.1.1', protocol: 'dolor', host: 'fastify.test', port: app.server.address().port })
    reply.code(200).send({ ip: req.ip, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })

  await fetchForwardedRequest(fastifyServer, '1.1.1.1', '/trustproxyprotocol', 'lorem')
  await fetchForwardedRequest(fastifyServer, '1.1.1.1', '/trustproxynoprotocol', undefined)
  await fetchForwardedRequest(fastifyServer, '1.1.1.1', '/trustproxyprotocols', 'ipsum, dolor')
})

test('trust proxy ignores forwarded headers from untrusted connections', async t => {
  t.plan(3)

  // Use a restrictive trust function that does NOT trust localhost
  // (simulates a direct connection bypassing the proxy)
  const app = fastify({
    trustProxy: '10.0.0.1'
  })
  t.after(() => app.close())

  app.get('/untrusted', function (req, reply) {
    // protocol should fall back to socket state, not read x-forwarded-proto
    t.assert.strictEqual(req.protocol, 'http', 'protocol ignores x-forwarded-proto from untrusted connection')
    // host should fall back to raw Host header, not read x-forwarded-host
    t.assert.notStrictEqual(req.host, 'evil.com', 'host ignores x-forwarded-host from untrusted connection')
    // hostname should also not be spoofed
    t.assert.notStrictEqual(req.hostname, 'evil.com', 'hostname ignores x-forwarded-host from untrusted connection')
    reply.code(200).send({ protocol: req.protocol, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })

  // Attacker connects directly (from localhost, which is NOT in the trust list)
  // and sends spoofed forwarded headers
  await fetch(fastifyServer + '/untrusted', {
    headers: {
      'X-Forwarded-For': '1.1.1.1',
      'X-Forwarded-Host': 'evil.com',
      'X-Forwarded-Proto': 'https'
    }
  })
})

test('trust proxy reads forwarded headers from trusted connections', async t => {
  t.plan(2)

  // Trust localhost (the actual connecting IP in tests)
  const app = fastify({
    trustProxy: (address) => address === localhost
  })
  t.after(() => app.close())

  app.get('/trusted', function (req, reply) {
    t.assert.strictEqual(req.protocol, 'https', 'protocol reads x-forwarded-proto from trusted connection')
    t.assert.strictEqual(req.host, 'example.com', 'host reads x-forwarded-host from trusted connection')
    reply.code(200).send({ protocol: req.protocol, host: req.host })
  })

  const fastifyServer = await app.listen({ port: 0 })

  await fetch(fastifyServer + '/trusted', {
    headers: {
      'X-Forwarded-For': '1.1.1.1',
      'X-Forwarded-Host': 'example.com',
      'X-Forwarded-Proto': 'https'
    }
  })
})

test('trust proxy with number and undefined socket remoteAddress', t => {
  t.plan(3)

  // Test case for issue #6606: trustProxy: 1 with undefined/null socket.remoteAddress
  // This simulates IISNode on Windows where socket.remoteAddress may be undefined
  const headers = {
    'x-forwarded-for': '2.2.2.2, 1.1.1.1',
    'x-forwarded-host': 'fastify.test',
    'x-forwarded-proto': 'https'
  }
  // socket must exist but remoteAddress can be undefined
  // This is what happens in IISNode with enableXFF="true"
  const req = {
    method: 'GET',
    url: '/',
    socket: { remoteAddress: undefined },
    headers
  }

  const TpRequest = buildRequest(Request, 1)
  const request = new TpRequest('id', 'params', req, 'query', 'log')
  // Even with undefined socket.remoteAddress, req.ip should be populated from X-Forwarded-For
  t.assert.ok(request.ip, 'ip is defined')
  // With trustProxy: 1, we trust 1 hop from socket. Since socket.remoteAddress is undefined,
  // the hop count check should skip it and we get 1.1.1.1 (the first trusted address from X-Forwarded-For)
  t.assert.strictEqual(request.ip, '1.1.1.1', 'gets ip from x-forwarded-for')
  // The host should also work correctly
  t.assert.strictEqual(request.host, 'fastify.test', 'gets host from x-forwarded-host')
})

test('trust proxy with number and null socket remoteAddress', t => {
  t.plan(2)

  // Test case for trustProxy: 1 with null socket.remoteAddress
  const headers = {
    'x-forwarded-for': '2.2.2.2, 1.1.1.1',
    'x-forwarded-host': 'fastify.test'
  }
  const req = {
    method: 'GET',
    url: '/',
    socket: { remoteAddress: null },
    headers
  }

  const TpRequest = buildRequest(Request, 1)
  const request = new TpRequest('id', 'params', req, 'query', 'log')
  t.assert.ok(request.ip, 'ip is defined')
  t.assert.strictEqual(request.ip, '1.1.1.1', 'gets ip from x-forwarded-for')
})
