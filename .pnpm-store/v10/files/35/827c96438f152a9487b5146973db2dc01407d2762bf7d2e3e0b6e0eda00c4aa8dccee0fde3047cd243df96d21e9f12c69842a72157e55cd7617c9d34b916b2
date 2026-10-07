'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const fastifyCookie = require('@fastify/cookie')
const fastifySession = require('@fastify/session')
const fastifySecureSession = require('@fastify/secure-session')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const fastifyCsrf = require('../')

const sodium = require('sodium-native')
const key = Buffer.alloc(sodium.crypto_secretbox_KEYBYTES)
sodium.randombytes_buf(key)

test('Cookies', async t => {
  async function load () {
    const fastify = Fastify()
    await fastify.register(fastifyCookie)
    await fastify.register(fastifyCsrf)
    fastify.decorate('testType', 'fastify-cookie')
    return fastify
  }
  await runtTest(t, load, { property: '_csrf', place: 'body' }, 'preValidation')
  await runtTest(t, load, { property: 'csrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'xsrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'x-csrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'x-xsrf-token', place: 'headers' })
  await runCookieOpts(t, load)

  await t.test('Default cookie options', async t => {
    const fastify = await load()

    fastify.get('/', async (_req, reply) => {
      const token = reply.generateCsrf()
      return { token }
    })

    const response = await fastify.inject({
      method: 'GET',
      path: '/'
    })

    const cookie = response.cookies[0]
    t.assert.deepStrictEqual({ path: cookie.path, sameSite: cookie.sameSite, httpOnly: cookie.httpOnly }, { path: '/', sameSite: 'Strict', httpOnly: true })
  })
})

test('Cookies signed', async t => {
  async function load () {
    const fastify = Fastify()
    await fastify.register(fastifyCookie, { secret: 'supersecret' })
    await fastify.register(fastifyCsrf, { cookieOpts: { signed: true } })
    fastify.decorate('testType', 'fastify-cookie')
    return fastify
  }
  await runtTest(t, load, { property: '_csrf', place: 'body' }, 'preValidation')
  await runtTest(t, load, { property: 'csrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'xsrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'x-csrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'x-xsrf-token', place: 'headers' })
  await runCookieOpts(t, load)
})

test('Fastify Session', async t => {
  async function load () {
    const fastify = Fastify()
    await fastify.register(fastifyCookie)
    await fastify.register(fastifySession, {
      secret: 'a'.repeat(32),
      cookie: { path: '/', secure: false }
    })
    await fastify.register(fastifyCsrf, { sessionPlugin: '@fastify/session' })
    fastify.decorate('testType', 'fastify-session')
    return fastify
  }
  await runtTest(t, load, { property: '_csrf', place: 'body' }, 'preValidation')
  await runtTest(t, load, { property: 'csrf-token', place: 'headers' }, 'preValidation')
  await runtTest(t, load, { property: 'xsrf-token', place: 'headers' }, 'preValidation')
  await runtTest(t, load, { property: 'x-csrf-token', place: 'headers' }, 'preValidation')
  await runtTest(t, load, { property: 'x-xsrf-token', place: 'headers' }, 'preValidation')
})

test('Fastify Secure Session', async t => {
  async function load () {
    const fastify = Fastify()
    await fastify.register(fastifySecureSession, { key, cookie: { path: '/', secure: false } })
    await fastify.register(fastifyCsrf, { sessionPlugin: '@fastify/secure-session' })
    fastify.decorate('testType', 'fastify-secure-session')
    return fastify
  }
  await runtTest(t, load, { property: '_csrf', place: 'body' }, 'preValidation')
  await runtTest(t, load, { property: 'csrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'xsrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'x-csrf-token', place: 'headers' })
  await runtTest(t, load, { property: 'x-xsrf-token', place: 'headers' })
  await runCookieOpts(t, load)
})

test('Validation', async t => {
  await t.test('cookieKey', async t => {
    t.plan(1)
    try {
      const fastify = Fastify()
      await fastify.register(fastifyCookie)
      await fastify.register(fastifyCsrf, { cookieKey: 42 })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(err.message, 'cookieKey should be a string')
    }
  })

  await t.test('sessionKey', async t => {
    t.plan(1)
    const fastify = Fastify()
    try {
      await fastify.register(fastifyCookie)
      await fastify.register(fastifyCsrf, { sessionKey: 42 })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(err.message, 'sessionKey should be a string')
    }
  })

  await t.test('getToken', async t => {
    t.plan(1)
    try {
      const fastify = Fastify()
      await fastify.register(fastifyCookie)
      await fastify.register(fastifyCsrf, { getToken: 42 })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(err.message, 'getToken should be a function')
    }
  })

  await t.test('cookieOpts', async t => {
    t.plan(1)
    try {
      const fastify = Fastify()
      await fastify.register(fastifyCookie)
      await fastify.register(fastifyCsrf, { cookieOpts: 42 })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(err.message, 'cookieOpts should be a object')
    }
  })

  await t.test('sessionPlugin', async t => {
    t.plan(1)
    try {
      const fastify = Fastify()
      await fastify.register(fastifyCookie)
      await fastify.register(fastifyCsrf, { sessionPlugin: 42 })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(err.message, "sessionPlugin should be one of the following: '@fastify/cookie', '@fastify/session', '@fastify/secure-session'")
    }
  })

  await t.test('logLevel', async t => {
    t.plan(1)
    try {
      const fastify = Fastify()
      await fastify.register(fastifyCookie)
      await fastify.register(fastifyCsrf, { logLevel: undefined })
      await fastify.ready()
    } catch (err) {
      t.assert.strictEqual(err.message, 'logLevel should be a string')
    }
  })
})

test('csrf options', async () => {
  const csrf = sinon.stub()

  const fastifyCsrf = proxyquire('../', {
    '@fastify/csrf': function (...args) {
      return csrf(...args)
    }
  })

  const csrfOpts = { some: 'options' }

  await Fastify()
    .register(fastifyCookie)
    .register(fastifyCsrf, { csrfOpts })

  sinon.assert.calledWith(csrf, csrfOpts)
})

const spyLogger = {
  warn: sinon.spy(),
  error: sinon.spy(),
  info: sinon.spy(),
  debug: sinon.spy(),
  fatal: sinon.spy(),
  trace: sinon.spy(),
  child: () => spyLogger
}

test('logLevel options', async t => {
  async function load (logLevel) {
    const opts = logLevel ? { logLevel } : {}
    const fastify = Fastify({ loggerInstance: spyLogger })
    await fastify.register(fastifyCookie)
    await fastify.register(fastifyCsrf, opts)
    fastify.get('/', async (_req, reply) => {
      reply.generateCsrf()
      return {}
    })

    fastify.post('/', {
      onRequest: fastify.csrfProtection
    }, async () => {
      return {}
    })
    await fastify.ready()
    return fastify
  }

  async function makeRequests (fastify) {
    const response = await fastify.inject({
      method: 'GET',
      path: '/'
    })

    const cookie = response.cookies[0]

    // missing csrf secret
    await fastify.inject({
      method: 'POST',
      payload: { hello: 'world' },
      path: '/',
    })

    // invalid csrf token
    await fastify.inject({
      method: 'POST',
      payload: { hello: 'world' },
      path: '/',
      cookies: {
        [cookie.name]: cookie.value
      }
    })
  }

  t.afterEach(() => {
    spyLogger.warn.resetHistory()
    spyLogger.error.resetHistory()
  })

  await t.test('default log level', async t => {
    t.plan(1)
    const fastify = await load()
    await makeRequests(fastify)

    t.assert.strictEqual(spyLogger.warn.callCount, 2)
  })

  await t.test('custom log level', async t => {
    t.plan(2)
    const fastify = await load('error')
    await makeRequests(fastify)

    t.assert.strictEqual(spyLogger.error.callCount, 2)
    t.assert.ok(spyLogger.warn.notCalled)
  })

  await t.test('silent log level', async t => {
    t.plan(1)
    const fastify = await load('silent')
    await makeRequests(fastify)

    t.assert.ok(spyLogger.warn.notCalled)
  })
})

async function runtTest (t, load, tkn, hook = 'onRequest') {
  await t.test(`Token in ${tkn.place}`, async t => {
    const fastify = await load()

    fastify.get('/', async (_req, reply) => {
      const token = reply.generateCsrf()
      return { token }
    })

    fastify.post('/', { [hook]: fastify.csrfProtection }, async (req) => {
      return req.body
    })

    let response = await fastify.inject({
      method: 'GET',
      path: '/'
    })

    t.assert.strictEqual(response.statusCode, 200)
    const cookie = response.cookies[0]
    const tokenFirst = response.json().token

    response = await fastify.inject({
      method: 'GET',
      path: '/',
      cookies: {
        [cookie.name]: cookie.value
      }
    })

    t.assert.strictEqual(response.statusCode, 200)
    const cookieSecond = response.cookies[0]
    const token = response.json().token

    if (fastify.testType === 'fastify-session') {
      t.assert.deepStrictEqual(cookie, cookieSecond)
    } else if (fastify.testType === 'fastify-secure-session') {
      t.assert.notStrictEqual(cookie, cookieSecond)
    } else {
      t.assert.strictEqual(cookieSecond, undefined)
    }
    t.assert.notStrictEqual(tokenFirst, token)

    if (tkn.place === 'body') {
      response = await fastify.inject({
        method: 'POST',
        path: '/',
        payload: {
          hello: 'world',
          [tkn.property]: token
        },
        cookies: {
          [cookie.name]: cookie.value
        }
      })
    } else {
      response = await fastify.inject({
        method: 'POST',
        path: '/',
        payload: { hello: 'world' },
        headers: {
          [tkn.property]: token
        },
        cookies: {
          [cookie.name]: cookie.value
        }
      })
    }

    t.assert.strictEqual(response.statusCode, 200)
    t.assert.strictEqual(response.json().hello, 'world')

    response = await fastify.inject({
      method: 'POST',
      path: '/',
      payload: { hello: 'world' }
    })

    t.assert.strictEqual(response.statusCode, 403)
    t.assert.strictEqual(response.json().message, 'Missing csrf secret')

    response = await fastify.inject({
      method: 'POST',
      path: '/',
      payload: { hello: 'world' },
      cookies: {
        [cookie.name]: cookie.value
      }
    })

    t.assert.strictEqual(response.statusCode, 403)
    t.assert.strictEqual(response.json().message, 'Invalid csrf token')
  })
}

async function runCookieOpts (t, load) {
  await t.test('Custom cookie options', async t => {
    const fastify = await load()

    fastify.get('/', async (_req, reply) => {
      const token = reply.generateCsrf({ path: '/hello' })
      return { token }
    })

    const response = await fastify.inject({
      method: 'GET',
      path: '/'
    })

    const cookie = response.cookies[0]
    t.assert.strictEqual(cookie.path, '/hello')
  })
}
