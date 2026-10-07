'use strict'

const { describe, test } = require('node:test')
const Fastify = require('fastify')
const sinon = require('sinon')
const { sign, unsign } = require('../signer')
const plugin = require('../')

test('cookies get set correctly', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', { path: '/' })
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })

  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].path, '/')
})

test('express cookie compatibility', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/espresso', (_req, reply) => {
    reply
      .cookie('foo', 'foo', { path: '/' })
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/espresso'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].path, '/')
})

test('should set multiple cookies', async (t) => {
  t.plan(9)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/', (_req, reply) => {
    reply
      .setCookie('foo', 'foo')
      .cookie('bar', 'test')
      .setCookie('wee', 'woo')
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 3)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[1].name, 'bar')
  t.assert.strictEqual(cookies[1].value, 'test')
  t.assert.strictEqual(cookies[2].name, 'wee')
  t.assert.strictEqual(cookies[2].value, 'woo')
})

test('should set multiple cookies', async (t) => {
  t.plan(11)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/', (_req, reply) => {
    reply
      .setCookie('foo', 'foo')
      .cookie('bar', 'test', {
        partitioned: true
      })
      .setCookie('wee', 'woo', {
        partitioned: true,
        secure: true
      })
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 3)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[1].name, 'bar')
  t.assert.strictEqual(cookies[1].value, 'test')
  t.assert.strictEqual(cookies[2].name, 'wee')
  t.assert.strictEqual(cookies[2].value, 'woo')

  t.assert.strictEqual(res.headers['set-cookie'][1], 'bar=test; Partitioned; SameSite=Lax')
  t.assert.strictEqual(res.headers['set-cookie'][2], 'wee=woo; Secure; Partitioned; SameSite=Lax')
})

test('should set multiple cookies (an array already exists)', async (t) => {
  t.plan(9)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/test1', (_req, reply) => {
    reply
      .header('Set-Cookie', ['bar=bar'])
      .setCookie('foo', 'foo', { path: '/' })
      .setCookie('foo', 'foo', { path: '/path' })
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 3)
  t.assert.strictEqual(cookies[0].name, 'bar')
  t.assert.strictEqual(cookies[0].value, 'bar')
  t.assert.strictEqual(cookies[0].path, undefined)

  t.assert.strictEqual(cookies[1].name, 'foo')
  t.assert.strictEqual(cookies[1].value, 'foo')
  t.assert.strictEqual(cookies[2].path, '/path')
})

test('cookies get set correctly with millisecond dates', async (t) => {
  t.plan(7)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', { path: '/', expires: Date.now() + 1000 })
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].path, '/')
  const expires = new Date(cookies[0].expires)
  t.assert.ok(expires < new Date(Date.now() + 5000))
})

test('share options for setCookie and clearCookie', async (t) => {
  t.plan(7)

  const fastify = Fastify()
  const secret = 'testsecret'
  fastify.register(plugin, { secret })

  const cookieOptions = {
    signed: true,
    maxAge: 36000
  }

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', cookieOptions)
      .clearCookie('foo', cookieOptions)
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, '')
  t.assert.strictEqual(cookies[0].maxAge, 0)

  t.assert.ok(new Date(cookies[0].expires) < new Date())
})

test('expires should not be overridden in clearCookie', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  const secret = 'testsecret'
  fastify.register(plugin, { secret })

  const cookieOptions = {
    signed: true,
    expires: Date.now() + 1000
  }

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', cookieOptions)
      .clearCookie('foo', cookieOptions)
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, '')
  const expires = new Date(cookies[0].expires)
  t.assert.ok(expires < new Date(Date.now() + 5000))
})

test('parses incoming cookies', async (t) => {
  t.plan(14)

  const fastify = Fastify()
  fastify.register(plugin)

  // check that it parses the cookies in the onRequest hook
  for (const hook of ['preValidation', 'preHandler']) {
    fastify.addHook(hook, (req, _reply, done) => {
      t.assert.ok(req.cookies)
      t.assert.ok(req.cookies.bar)
      t.assert.strictEqual(req.cookies.bar, 'bar')
      done()
    })
  }

  fastify.addHook('preParsing', (req, _reply, _payload, done) => {
    t.assert.ok(req.cookies)
    t.assert.ok(req.cookies.bar)
    t.assert.strictEqual(req.cookies.bar, 'bar')
    done()
  })

  fastify.get('/test2', (req, reply) => {
    t.assert.ok(req.cookies)
    t.assert.ok(req.cookies.bar)
    t.assert.strictEqual(req.cookies.bar, 'bar')
    reply.send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test2',
    headers: {
      cookie: 'bar=bar'
    }
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })
})

test('defined and undefined cookies', async (t) => {
  t.plan(22)

  const fastify = Fastify()
  fastify.register(plugin)

  // check that it parses the cookies in the onRequest hook
  for (const hook of ['preValidation', 'preHandler']) {
    fastify.addHook(hook, (req, _reply, done) => {
      t.assert.ok(req.cookies)

      t.assert.ok(req.cookies.bar)
      t.assert.ok(!req.cookies.baz)

      t.assert.strictEqual(req.cookies.bar, 'bar')
      t.assert.strictEqual(req.cookies.baz, undefined)
      done()
    })
  }

  fastify.addHook('preParsing', (req, _reply, _payload, done) => {
    t.assert.ok(req.cookies)

    t.assert.ok(req.cookies.bar)
    t.assert.ok(!req.cookies.baz)

    t.assert.strictEqual(req.cookies.bar, 'bar')
    t.assert.strictEqual(req.cookies.baz, undefined)

    done()
  })

  fastify.get('/test2', (req, reply) => {
    t.assert.ok(req.cookies)

    t.assert.ok(req.cookies.bar)
    t.assert.ok(!req.cookies.baz)

    t.assert.strictEqual(req.cookies.bar, 'bar')
    t.assert.strictEqual(req.cookies.baz, undefined)

    reply.send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test2',
    headers: {
      cookie: 'bar=bar'
    }
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })
})

test('does not modify supplied cookie options object', async (t) => {
  t.plan(2)

  const expireDate = Date.now() + 1000
  const cookieOptions = {
    path: '/',
    expires: expireDate
  }
  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', cookieOptions)
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(cookieOptions, {
    path: '/',
    expires: expireDate
  })
})

test('cookies gets cleared correctly', async (t) => {
  t.plan(4)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.get('/test1', (_req, reply) => {
    reply
      .clearCookie('foo')
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(new Date(cookies[0].expires) < new Date(), true)
})

describe('cookies signature', () => {
  test('unsign', async (t) => {
    t.plan(5)

    const fastify = Fastify()
    const secret = 'bar'
    fastify.register(plugin, { secret })

    fastify.get('/test1', (_req, reply) => {
      reply
        .setCookie('foo', 'foo', { signed: true })
        .send({ hello: 'world' })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1'
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

    const cookies = res.cookies
    t.assert.strictEqual(cookies.length, 1)
    t.assert.strictEqual(cookies[0].name, 'foo')
    t.assert.deepStrictEqual(unsign(cookies[0].value, secret), { valid: true, renew: false, value: 'foo' })
  })

  test('key rotation uses first key to sign', async (t) => {
    t.plan(5)

    const fastify = Fastify()
    const secret1 = 'secret-1'
    const secret2 = 'secret-2'
    fastify.register(plugin, { secret: [secret1, secret2] })

    fastify.get('/test1', (_req, reply) => {
      reply
        .setCookie('foo', 'cookieVal', { signed: true })
        .send({ hello: 'world' })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1'
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

    const cookies = res.cookies
    t.assert.strictEqual(cookies.length, 1)
    t.assert.strictEqual(cookies[0].name, 'foo')
    t.assert.deepStrictEqual(unsign(cookies[0].value, secret1), { valid: true, renew: false, value: 'cookieVal' }) // decode using first key
  })

  test('unsginCookie via fastify instance', async (t) => {
    t.plan(2)

    const fastify = Fastify()
    const secret = 'bar'

    fastify.register(plugin, { secret })

    fastify.get('/test1', (req, rep) => {
      rep.send({
        unsigned: fastify.unsignCookie(req.cookies.foo)
      })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1',
      headers: {
        cookie: `foo=${sign('foo', secret)}`
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: 'foo', renew: false, valid: true } })
  })

  test('unsignCookie via request decorator', async (t) => {
    t.plan(2)

    const fastify = Fastify()
    const secret = 'bar'
    fastify.register(plugin, { secret })

    fastify.get('/test1', (req, reply) => {
      reply.send({
        unsigned: req.unsignCookie(req.cookies.foo)
      })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1',
      headers: {
        cookie: `foo=${sign('foo', secret)}`
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: 'foo', renew: false, valid: true } })
  })

  test('unsignCookie via reply decorator', async (t) => {
    t.plan(2)

    const fastify = Fastify()
    const secret = 'bar'
    fastify.register(plugin, { secret })

    fastify.get('/test1', (req, reply) => {
      reply.send({
        unsigned: reply.unsignCookie(req.cookies.foo)
      })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1',
      headers: {
        cookie: `foo=${sign('foo', secret)}`
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: 'foo', renew: false, valid: true } })
  })

  test('unsignCookie via request decorator after rotation', async (t) => {
    t.plan(2)

    const fastify = Fastify()
    const secret1 = 'sec-1'
    const secret2 = 'sec-2'
    fastify.register(plugin, { secret: [secret1, secret2] })

    fastify.get('/test1', (req, reply) => {
      reply.send({
        unsigned: req.unsignCookie(req.cookies.foo)
      })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1',
      headers: {
        cookie: `foo=${sign('foo', secret2)}`
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: 'foo', renew: true, valid: true } })
  })

  test('unsignCookie via reply decorator after rotation', async (t) => {
    t.plan(2)

    const fastify = Fastify()
    const secret1 = 'sec-1'
    const secret2 = 'sec-2'
    fastify.register(plugin, { secret: [secret1, secret2] })

    fastify.get('/test1', (req, reply) => {
      reply.send({
        unsigned: reply.unsignCookie(req.cookies.foo)
      })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1',
      headers: {
        cookie: `foo=${sign('foo', secret2)}`
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: 'foo', renew: true, valid: true } })
  })

  test('unsignCookie via request decorator failure response', async (t) => {
    t.plan(2)

    const fastify = Fastify()
    const secret1 = 'sec-1'
    const secret2 = 'sec-2'
    fastify.register(plugin, { secret: [secret1, secret2] })

    fastify.get('/test1', (req, reply) => {
      reply.send({
        unsigned: req.unsignCookie(req.cookies.foo)
      })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1',
      headers: {
        cookie: `foo=${sign('foo', 'invalid-secret')}`
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: null, renew: false, valid: false } })
  })

  test('unsignCookie reply decorator failure response', async (t) => {
    t.plan(2)

    const fastify = Fastify()
    const secret1 = 'sec-1'
    const secret2 = 'sec-2'
    fastify.register(plugin, { secret: [secret1, secret2] })

    fastify.get('/test1', (req, reply) => {
      reply.send({
        unsigned: reply.unsignCookie(req.cookies.foo)
      })
    })

    const res = await fastify.inject({
      method: 'GET',
      url: '/test1',
      headers: {
        cookie: `foo=${sign('foo', 'invalid-secret')}`
      }
    })
    t.assert.strictEqual(res.statusCode, 200)
    t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: null, renew: false, valid: false } })
  })
})

test('custom signer', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  const signStub = sinon.stub().returns('SIGNED-VALUE')
  const unsignStub = sinon.stub().returns('ORIGINAL VALUE')
  const secret = { sign: signStub, unsign: unsignStub }
  fastify.register(plugin, { secret })

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'bar', { signed: true })
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'SIGNED-VALUE')
  t.assert.ok(signStub.calledOnceWithExactly('bar'))
})

test('unsignCookie decorator with custom signer', async (t) => {
  t.plan(3)

  const fastify = Fastify()
  const signStub = sinon.stub().returns('SIGNED-VALUE')
  const unsignStub = sinon.stub().returns('ORIGINAL VALUE')
  const secret = { sign: signStub, unsign: unsignStub }
  fastify.register(plugin, { secret })

  fastify.get('/test1', (req, reply) => {
    reply.send({
      unsigned: reply.unsignCookie(req.cookies.foo)
    })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1',
    headers: {
      cookie: 'foo=SOME-SIGNED-VALUE'
    }
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: 'ORIGINAL VALUE' })
  t.assert.ok(unsignStub.calledOnceWithExactly('SOME-SIGNED-VALUE'))
})

test('pass options to `cookies.parse`', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  fastify.register(plugin, {
    parseOptions: {
      decode: decoder
    }
  })

  fastify.get('/test1', (req, reply) => {
    t.assert.ok(req.cookies)
    t.assert.ok(req.cookies.foo)
    t.assert.strictEqual(req.cookies.foo, 'bartest')
    reply.send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1',
    headers: {
      cookie: 'foo=bar'
    }
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  function decoder (str) {
    return str + 'test'
  }
})

test('issue 53', async (t) => {
  t.plan(3)

  const fastify = Fastify()
  fastify.register(plugin)

  let cookies
  let count = 1
  fastify.get('/foo', (req, reply) => {
    if (count > 1) {
      t.assert.notEqual(cookies, req.cookies)
      return reply.send('done')
    }

    count += 1
    cookies = req.cookies
    reply.send('done')
  })
  {
    const res = await fastify.inject({ url: '/foo' })
    t.assert.strictEqual(res.body, 'done')
  }

  {
    const res = await fastify.inject({ url: '/foo' })
    t.assert.strictEqual(res.body, 'done')
  }
})

test('serialize cookie manually using decorator', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  fastify.register(plugin)

  await new Promise(resolve => fastify.ready(resolve))

  t.assert.ok(fastify.serializeCookie)
  t.assert.deepStrictEqual(fastify.serializeCookie('foo', 'bar', {}), 'foo=bar')
})

test('parse cookie manually using decorator', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  fastify.register(plugin)

  await new Promise(resolve => fastify.ready(resolve))

  t.assert.ok(fastify.parseCookie)
  t.assert.deepStrictEqual({ ...fastify.parseCookie('foo=bar', {}) }, { foo: 'bar' })
})

test('cookies set with plugin options parseOptions field', async (t) => {
  t.plan(7)

  const fastify = Fastify()
  fastify.register(plugin, {
    parseOptions: {
      path: '/test',
      domain: 'example.com'
    }
  })

  fastify.get('/test', (_req, reply) => {
    reply.setCookie('foo', 'foo').send({ hello: 'world' })
  })

  const res = await fastify.inject(
    {
      method: 'GET',
      url: '/test'
    })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].path, '/test')
  t.assert.strictEqual(cookies[0].domain, 'example.com')
})

test('create signed cookie manually using signCookie decorator', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  await fastify.register(plugin, { secret: 'secret' })

  fastify.get('/test1', (req, reply) => {
    reply.send({
      unsigned: req.unsignCookie(req.cookies.foo)
    })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1',
    headers: { cookie: `foo=${fastify.signCookie('bar')}` }
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { unsigned: { value: 'bar', renew: false, valid: true } })
})

test('handle secure:auto of cookieOptions', async (t) => {
  t.plan(11)

  const fastify = Fastify({ trustProxy: true })

  await fastify.register(plugin)

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', { path: '/', secure: 'auto' })
      .send()
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1',
    headers: { 'x-forwarded-proto': 'https' }
  })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].secure, true)
  t.assert.strictEqual(cookies[0].path, '/')

  const res2 = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })

  const cookies2 = res2.cookies
  t.assert.strictEqual(cookies2.length, 1)
  t.assert.strictEqual(cookies2[0].name, 'foo')
  t.assert.strictEqual(cookies2[0].value, 'foo')
  t.assert.strictEqual(cookies2[0].sameSite, 'Lax')
  t.assert.deepStrictEqual(cookies2[0].secure, undefined)
  t.assert.strictEqual(cookies2[0].path, '/')
})

test('should not decorate fastify, request and reply if no secret was provided', async (t) => {
  t.plan(8)

  const fastify = Fastify()

  await fastify.register(plugin)

  t.assert.ok(!fastify.signCookie)
  t.assert.ok(!fastify.unsignCookie)

  fastify.get('/testDecorators', (req, reply) => {
    t.assert.ok(!req.signCookie)
    t.assert.ok(!reply.signCookie)
    t.assert.ok(!req.unsignCookie)
    t.assert.ok(!reply.unsignCookie)

    reply.send({
      unsigned: req.unsignCookie(req.cookies.foo)
    })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/testDecorators'
  })

  t.assert.strictEqual(res.statusCode, 500)
  t.assert.deepStrictEqual(JSON.parse(res.body), {
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'req.unsignCookie is not a function'
  })
})

test('dont add auto cookie parsing to onRequest-hook if hook-option is set to false', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  fastify.register(plugin, { hook: false })

  for (const hook of ['preValidation', 'preHandler', 'preParsing']) {
    fastify.addHook(hook, async (req) => {
      t.assert.strictEqual(req.cookies, null)
    })
  }

  fastify.get('/disable', (req, reply) => {
    t.assert.strictEqual(req.cookies, null)
    reply.send()
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/disable',
    headers: {
      cookie: 'bar=bar'
    }
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('result in an error if hook-option is set to an invalid value', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  await t.assert.rejects(
    async () => fastify.register(plugin, { hook: true }),
    new Error("@fastify/cookie: Invalid value provided for the hook-option. You can set the hook-option only to false, 'onRequest' , 'preParsing' , 'preValidation' or 'preHandler'")
  )
})

test('correct working plugin if hook-option to preParsing', async (t) => {
  t.plan(4)

  const fastify = Fastify()
  fastify.register(plugin, { hook: 'preParsing' })

  fastify.addHook('onRequest', async (req) => {
    t.assert.strictEqual(req.cookies, null)
  })

  fastify.addHook('preValidation', async (req) => {
    t.assert.strictEqual(req.cookies.bar, 'bar')
  })

  fastify.get('/preparsing', (req, reply) => {
    t.assert.strictEqual(req.cookies.bar, 'bar')
    reply.send()
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/preparsing',
    headers: {
      cookie: 'bar=bar'
    }
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('if cookies are not set, then the handler creates an empty req.cookies object', async (t) => {
  t.plan(4)

  const fastify = Fastify()
  fastify.register(plugin, { hook: 'preParsing' })

  fastify.addHook('onRequest', async (req) => {
    t.assert.strictEqual(req.cookies, null)
  })

  fastify.addHook('preValidation', async (req) => {
    t.assert.ok(req.cookies)
  })

  fastify.get('/preparsing', (req, reply) => {
    t.assert.ok(req.cookies)
    reply.send()
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/preparsing'
  })
  t.assert.strictEqual(res.statusCode, 200)
})

test('clearCookie should include parseOptions', async (t) => {
  t.plan(9)

  const fastify = Fastify()
  fastify.register(plugin, {
    parseOptions: {
      path: '/test',
      domain: 'example.com'
    }
  })

  const cookieOptions = {
    path: '/test',
    maxAge: 36000
  }

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', cookieOptions)
      .clearCookie('foo', cookieOptions)
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies

  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, '')
  t.assert.strictEqual(cookies[0].maxAge, 0)
  t.assert.strictEqual(cookies[0].path, '/test')
  t.assert.strictEqual(cookies[0].domain, 'example.com')

  t.assert.ok(new Date(cookies[0].expires) < new Date())
})

test('should update a cookie value when setCookie is called multiple times', async (t) => {
  t.plan(14)

  const fastify = Fastify()
  const secret = 'testsecret'
  fastify.register(plugin, { secret })

  const cookieOptions = {
    signed: true,
    path: '/foo',
    maxAge: 36000
  }

  const cookieOptions2 = {
    signed: true,
    maxAge: 36000
  }

  fastify.get('/test1', (_req, reply) => {
    reply
      .setCookie('foo', 'foo', cookieOptions)
      .clearCookie('foo', cookieOptions)
      .setCookie('foo', 'foo', cookieOptions2)
      .setCookie('foos', 'foos', cookieOptions)
      .setCookie('foos', 'foosy', cookieOptions)
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 3)

  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, '')
  t.assert.strictEqual(cookies[0].path, '/foo')

  t.assert.strictEqual(cookies[1].name, 'foo')
  t.assert.strictEqual(cookies[1].value, sign('foo', secret))
  t.assert.strictEqual(cookies[1].maxAge, 36000)

  t.assert.strictEqual(cookies[2].name, 'foos')
  t.assert.strictEqual(cookies[2].value, sign('foosy', secret))
  t.assert.strictEqual(cookies[2].path, '/foo')
  t.assert.strictEqual(cookies[2].maxAge, 36000)

  t.assert.ok(new Date(cookies[0].expires) < new Date())
})

test('should update a cookie value when setCookie is called multiple times (empty header)', async (t) => {
  t.plan(14)

  const fastify = Fastify()
  const secret = 'testsecret'
  fastify.register(plugin, { secret })

  const cookieOptions = {
    signed: true,
    path: '/foo',
    maxAge: 36000
  }

  const cookieOptions2 = {
    signed: true,
    maxAge: 36000
  }

  fastify.get('/test1', (_req, reply) => {
    reply
      .header('Set-Cookie', '', cookieOptions)
      .setCookie('foo', 'foo', cookieOptions)
      .clearCookie('foo', cookieOptions)
      .setCookie('foo', 'foo', cookieOptions2)
      .setCookie('foos', 'foos', cookieOptions)
      .setCookie('foos', 'foosy', cookieOptions)
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 3)

  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, '')
  t.assert.strictEqual(cookies[0].path, '/foo')

  t.assert.strictEqual(cookies[1].name, 'foo')
  t.assert.strictEqual(cookies[1].value, sign('foo', secret))
  t.assert.strictEqual(cookies[1].maxAge, 36000)

  t.assert.strictEqual(cookies[2].name, 'foos')
  t.assert.strictEqual(cookies[2].value, sign('foosy', secret))
  t.assert.strictEqual(cookies[2].path, '/foo')
  t.assert.strictEqual(cookies[2].maxAge, 36000)

  t.assert.ok(new Date(cookies[0].expires) < new Date())
})

test('should update a cookie value when setCookie is called multiple times (non-empty header)', async (t) => {
  t.plan(14)

  const fastify = Fastify()
  const secret = 'testsecret'
  fastify.register(plugin, { secret })

  const cookieOptions = {
    signed: true,
    path: '/foo',
    maxAge: 36000
  }

  const cookieOptions2 = {
    signed: true,
    maxAge: 36000
  }

  fastify.get('/test1', (_req, reply) => {
    reply
      .header('Set-Cookie', 'manual=manual', cookieOptions)
      .setCookie('foo', 'foo', cookieOptions)
      .clearCookie('foo', cookieOptions)
      .setCookie('foo', 'foo', cookieOptions2)
      .setCookie('foos', 'foos', cookieOptions)
      .setCookie('foos', 'foosy', cookieOptions)
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 4)

  t.assert.strictEqual(cookies[1].name, 'foo')
  t.assert.strictEqual(cookies[1].value, '')
  t.assert.strictEqual(cookies[1].path, '/foo')

  t.assert.strictEqual(cookies[2].name, 'foo')
  t.assert.strictEqual(cookies[2].value, sign('foo', secret))
  t.assert.strictEqual(cookies[2].maxAge, 36000)

  t.assert.strictEqual(cookies[3].name, 'foos')
  t.assert.strictEqual(cookies[3].value, sign('foosy', secret))
  t.assert.strictEqual(cookies[3].path, '/foo')
  t.assert.strictEqual(cookies[3].maxAge, 36000)

  t.assert.ok(new Date(cookies[1].expires) < new Date())
})

test('cookies get set correctly if set inside onSend', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.addHook('onSend', async (_req, reply, payload) => {
    reply.setCookie('foo', 'foo', { path: '/' })
    return payload
  })

  fastify.get('/test1', (_req, reply) => {
    reply
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].path, '/')
})

test('cookies get set correctly if set inside multiple onSends', async (t) => {
  t.plan(9)

  const fastify = Fastify()
  fastify.register(plugin)

  fastify.addHook('onSend', async (_req, reply, _payload) => {
    reply.setCookie('foo', 'foo', { path: '/' })
  })

  fastify.addHook('onSend', async (_req, reply, payload) => {
    reply.setCookie('foo', 'foos', { path: '/' })
    return payload
  })

  fastify.get('/test1', (_req, reply) => {
    reply
      .send({ hello: 'world' })
  })

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 2)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].path, '/')

  t.assert.strictEqual(cookies[1].name, 'foo')
  t.assert.strictEqual(cookies[1].value, 'foos')
  t.assert.strictEqual(cookies[1].path, '/')
})

test('cookies get set correctly if set inside onRequest', async (t) => {
  t.plan(6)

  const fastify = Fastify()
  fastify.addHook('onRequest', async (_req, reply) => {
    reply.setCookie('foo', 'foo', { path: '/' })
    return reply.send({ hello: 'world' })
  })

  fastify.register(plugin)

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1'
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })

  const cookies = res.cookies
  t.assert.strictEqual(cookies.length, 1)
  t.assert.strictEqual(cookies[0].name, 'foo')
  t.assert.strictEqual(cookies[0].value, 'foo')
  t.assert.strictEqual(cookies[0].path, '/')
})

test('do not crash if the onRequest hook is not run', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  fastify.addHook('onRequest', async (_req, reply) => {
    return reply.send({ hello: 'world' })
  })

  fastify.register(plugin)

  const res = await fastify.inject({
    method: 'GET',
    url: '/test1',
    headers: {
      cookie: 'foo=foo'
    }
  })
  t.assert.strictEqual(res.statusCode, 200)
  t.assert.deepStrictEqual(JSON.parse(res.body), { hello: 'world' })
})
