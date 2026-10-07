'use strict'

/* eslint n/no-deprecated-api: "off" */

const path = require('node:path')
const fs = require('node:fs')
const url = require('node:url')
const http = require('node:http')
const { test } = require('node:test')
const Fastify = require('fastify')
const compress = require('@fastify/compress')
const concat = require('concat-stream')
const pino = require('pino')
const proxyquire = require('proxyquire')

const fastifyStatic = require('../')

const indexContent = fs
  .readFileSync('./test/static/index.html')
  .toString('utf8')
const index2Content = fs
  .readFileSync('./test/static2/index.html')
  .toString('utf8')
const foobarContent = fs
  .readFileSync('./test/static/foobar.html')
  .toString('utf8')
const deepContent = fs
  .readFileSync('./test/static/deep/path/for/test/purpose/foo.html')
  .toString('utf8')
const innerIndex = fs
  .readFileSync('./test/static/deep/path/for/test/index.html')
  .toString('utf8')
const allThreeBr = fs.readFileSync(
  './test/static-pre-compressed/all-three.html.br'
)
const allThreeGzip = fs.readFileSync(
  './test/static-pre-compressed/all-three.html.gz'
)
const gzipOnly = fs.readFileSync(
  './test/static-pre-compressed/gzip-only.html.gz'
)
const indexBr = fs.readFileSync(
  './test/static-pre-compressed/index.html.br'
)
const dirIndexBr = fs.readFileSync(
  './test/static-pre-compressed/dir/index.html.br'
)
const dirIndexGz = fs.readFileSync(
  './test/static-pre-compressed/dir-gz/index.html.gz'
)
const uncompressedStatic = fs
  .readFileSync('./test/static-pre-compressed/uncompressed.html')
  .toString('utf8')
const fooContent = fs.readFileSync('./test/static/foo.html').toString('utf8')
const barContent = fs.readFileSync('./test/static2/bar.html').toString('utf8')
const jsonHiddenContent = fs.readFileSync('./test/static-hidden/.hidden/sample.json').toString('utf8')

const GENERIC_RESPONSE_CHECK_COUNT = 5
function genericResponseChecks (t, response) {
  t.assert.ok(/text\/(html|css)/.test(response.headers.get?.('content-type') ?? response.headers['content-type']))
  t.assert.ok(response.headers.get?.('etag') ?? response.headers.etag)
  t.assert.ok(response.headers.get?.('last-modified') ?? response.headers['last-modified'])
  t.assert.ok(response.headers.get?.('date') ?? response.headers.date)
  t.assert.ok(response.headers.get?.('cache-control') ?? response.headers['cache-control'])
}

const GENERIC_ERROR_RESPONSE_CHECK_COUNT = 2
function genericErrorResponseChecks (t, response) {
  t.assert.deepStrictEqual(response.headers.get?.('content-type') ?? response.headers['content-type'], 'application/json; charset=utf-8')
  t.assert.ok(response.headers.get?.('date') ?? response.headers.date)
}

if (typeof Promise.withResolvers === 'undefined') {
  Promise.withResolvers = function () {
    let promiseResolve, promiseReject
    const promise = new Promise((resolve, reject) => {
      promiseResolve = resolve
      promiseReject = reject
    })
    return { promise, resolve: promiseResolve, reject: promiseReject }
  }
}

test('register /static prefixAvoidTrailingSlash', async t => {
  t.plan(11)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    prefixAvoidTrailingSlash: true
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')

    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)

    genericResponseChecks(t, response)
  })

  await t.test('/static/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.css')

    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/static/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test/purpose/foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/purpose/foo.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/this/path/for/test', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/for/test')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/this/path/doesnt/exist.html', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/doesnt/exist.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/../index.js', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/../index.js')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('file not exposed outside of the plugin', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foobar.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })

  await t.test('file retrieve with HEAD method', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', {
      method: 'HEAD'
    })

    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })
})

test('register /static', async (t) => {
  t.plan(10)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/static/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })

  await t.test('/static/deep/path/for/test/purpose/foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/purpose/foo.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/this/path/for/test', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/for/test')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/this/path/doesnt/exist.html', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/doesnt/exist.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/../index.js', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/../index.js', {
      redirect: 'error'
    })
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('file not exposed outside of the plugin', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foobar.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })
})

test('register /static/', async t => {
  t.plan(11)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', {
      method: 'HEAD'
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/static/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })

  await t.test('/static/deep/path/for/test/purpose/foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/purpose/foo.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/this/path/for/test', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/for/test')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/this/path/doesnt/exist.html', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/doesnt/exist.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/../index.js', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/../index.js')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('304', async t => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)

    const response2 = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', {
      headers: {
        'if-none-match': response.headers.get('etag')
      },
      cache: 'no-cache'
    })
    t.assert.ok(!response2.ok)
    t.assert.deepStrictEqual(response2.status, 304)
  })
})

test('register /static and /static2', async (t) => {
  t.plan(4)

  const pluginOptions = {
    root: [path.join(__dirname, '/static'), path.join(__dirname, '/static2')],
    prefix: '/static'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/foo', (_req, rep) => {
    rep.sendFile('foo.html')
  })

  fastify.get('/bar', (_req, rep) => {
    rep.sendFile('bar.html')
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    const responseText = await response.text()
    t.assert.deepStrictEqual(responseText, indexContent)
    t.assert.notDeepStrictEqual(responseText, index2Content)
    genericResponseChecks(t, response)
  })

  await t.test('/static/bar.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/bar.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), barContent)
    genericResponseChecks(t, response)
  })

  await t.test('sendFile foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), fooContent)
    genericResponseChecks(t, response)
  })

  await t.test('sendFile bar.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), barContent)
    genericResponseChecks(t, response)
  })
})

test('register /static with constraints', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    constraints: {
      version: '1.2.0'
    }
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  await t.test('example.com/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', {
      headers: {
        'accept-version': '1.x'
      }
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('not-example.com/static/index.html', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', {
      headers: {
        'accept-version': '2.x'
      }
    })
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })
})

test('payload.path is set', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/'
  }
  const fastify = Fastify()
  let gotFilename
  fastify.register(fastifyStatic, pluginOptions)
  fastify.addHook('onSend', function (_req, _reply, payload, next) {
    gotFilename = payload.path
    next()
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    t.assert.deepStrictEqual(typeof gotFilename, 'string')
    t.assert.deepStrictEqual(gotFilename, path.join(pluginOptions.root, 'index.html'))
    genericResponseChecks(t, response)
  })

  await t.test('/static/this/path/doesnt/exist.html', async (t) => {
    t.plan(3 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/doesnt/exist.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    t.assert.deepStrictEqual(typeof gotFilename, 'undefined')
    genericErrorResponseChecks(t, response)
  })
})

test('error responses can be customized with fastify.setErrorHandler()', async t => {
  t.plan(1)

  const pluginOptions = {
    root: path.join(__dirname, '/static')
  }
  const fastify = Fastify()

  fastify.setErrorHandler(function errorHandler (err, _request, reply) {
    reply.code(403).type('text/plain').send(`${err.statusCode} Custom error message`)
  })

  fastify.get('/index.js', (_, reply) => {
    return reply.type('text/html').sendFile('foo.js')
  })

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/../index.js', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.js')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 403)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/plain')
    t.assert.deepStrictEqual(await response.text(), '500 Custom error message')
  })
})

test('not found responses can be customized with fastify.setNotFoundHandler()', async t => {
  t.plan(1)

  const pluginOptions = {
    root: path.join(__dirname, '/static')
  }
  const fastify = Fastify()

  fastify.setNotFoundHandler(function notFoundHandler (request, reply) {
    reply.code(404).type('text/plain').send(request.raw.url + ' Not Found')
  })

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/path/does/not/exist.html', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/path/does/not/exist.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/plain')
    t.assert.deepStrictEqual(await response.text(), '/path/does/not/exist.html Not Found')
  })
})

test('fastify.setNotFoundHandler() is called for dotfiles when send is configured to ignore dotfiles', async t => {
  t.plan(1)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    send: {
      dotfiles: 'ignore'
    }
  }
  const fastify = Fastify()

  fastify.setNotFoundHandler(function notFoundHandler (request, reply) {
    reply.code(404).type('text/plain').send(request.raw.url + ' Not Found')
  })

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  // Requesting files with a leading dot doesn't follow the same code path as
  // other 404 errors
  await t.test('/path/does/not/.exist.html', async t => {
    t.plan(4)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/path/does/not/.exist.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/plain')
    t.assert.deepStrictEqual(await response.text(), '/path/does/not/.exist.html Not Found')
  })
})

test('serving disabled', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/',
    serve: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  fastify.get('/foo/bar', (_request, reply) => {
    reply.sendFile('index.html')
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html not found', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })

  await t.test('/static/index.html via sendFile found', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })
})

test('serving disabled without root', async (t) => {
  t.plan(2)

  const pluginOptions = {
    prefix: '/static/',
    serve: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  fastify.get('/foo/bar/r', (_request, reply) => {
    reply.sendFile('index.html')
  })

  fastify.get('/foo/bar/a', (_request, reply) => {
    reply.sendFile(path.join(__dirname, pluginOptions.prefix, 'index.html'))
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html via sendFile not found', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar/a')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.html via sendFile with relative path not found', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar/r')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })
})

test('sendFile', async (t) => {
  t.plan(4)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static'
  }
  const fastify = Fastify()
  const maxAge = Math.round(Math.random() * 10) * 10000
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  fastify.get('/foo/bar', function (_req, reply) {
    reply.sendFile('/index.html')
  })

  fastify.get('/root/path/override/test', (_request, reply) => {
    reply.sendFile(
      '/foo.html',
      path.join(__dirname, 'static', 'deep', 'path', 'for', 'test', 'purpose')
    )
  })

  fastify.get('/foo/bar/options/override/test', function (_req, reply) {
    reply.sendFile('/index.html', { maxAge })
  })

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  await t.test('reply.sendFile()', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.sendFile() with rootPath', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/root/path/override/test')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.sendFile() again without root path', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.sendFile() with options', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar/options/override/test')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    t.assert.deepStrictEqual(response.headers.get('cache-control'), `public, max-age=${maxAge / 1000}`)
    genericResponseChecks(t, response)
  })
})

test('sendFile with multiple roots', async (t) => {
  t.plan(4)

  const pluginOptions = {
    root: [path.join(__dirname, '/static'), path.join(__dirname, '/static2')],
    prefix: '/static'
  }
  const fastify = Fastify()
  const maxAge = Math.round(Math.random() * 10) * 10000
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  fastify.get('/foo', function (_req, rep) {
    rep.sendFile('foo.html')
  })

  fastify.get('/foo-with-options', function (_req, rep) {
    rep.sendFile('foo.html', { maxAge })
  })

  fastify.get('/bar', function (_req, rep) {
    rep.sendFile('bar.html')
  })

  fastify.get('/bar-with-options', function (_req, rep) {
    rep.sendFile('bar.html', { maxAge })
  })

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  await t.test('reply.sendFile() first root', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), fooContent)
    t.assert.deepStrictEqual(response.headers.get('cache-control'), 'public, max-age=0')
    genericResponseChecks(t, response)
  })

  await t.test('reply.sendFile() first root with options', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo-with-options')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), fooContent)
    t.assert.deepStrictEqual(response.headers.get('cache-control'), `public, max-age=${maxAge / 1000}`)
    genericResponseChecks(t, response)
  })

  await t.test('reply.sendFile() second root', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), barContent)
    t.assert.deepStrictEqual(response.headers.get('cache-control'), 'public, max-age=0')
    genericResponseChecks(t, response)
  })

  await t.test('reply.sendFile() second root with options', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/bar-with-options')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), barContent)
    t.assert.deepStrictEqual(response.headers.get('cache-control'), `public, max-age=${maxAge / 1000}`)
    genericResponseChecks(t, response)
  })
})

test('sendFile disabled', async (t) => {
  t.plan(1)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    decorateReply: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  fastify.get('/foo/bar', function (_req, reply) {
    if (reply.sendFile === undefined) {
      reply.send('pass')
    } else {
      reply.send('fail')
    }
  })

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('reply.sendFile undefined', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), 'pass')
  })
})

test('allowedPath option - pathname', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    allowedPath: (pathName) => pathName !== '/foobar.html'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  await t.test('/foobar.html not found', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foobar.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/index.css found', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
  })
})

test('allowedPath option - request', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    allowedPath: (_pathName, _root, request) => request.query.key === 'temporaryKey'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/foobar.html not found', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foobar.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/index.css found', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.css?key=temporaryKey')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
  })
})

test('download', async (t) => {
  t.plan(6)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  fastify.get('/foo/bar', function (_req, reply) {
    reply.download('/index.html')
  })

  fastify.get('/foo/bar/change', function (_req, reply) {
    reply.download('/index.html', 'hello-world.html')
  })

  fastify.get('/foo/bar/override', function (_req, reply) {
    reply.download('/index.html', 'hello-world.html', {
      maxAge: '2 hours',
      immutable: true
    })
  })

  fastify.get('/foo/bar/override/2', function (_req, reply) {
    reply.download('/index.html', { acceptRanges: false })
  })

  fastify.get('/root/path/override/test', (_request, reply) => {
    reply.download('/foo.html', {
      root: path.join(
        __dirname,
        'static',
        'deep',
        'path',
        'for',
        'test',
        'purpose'
      )
    })
  })

  fastify.get('/root/path/override/test/change', (_request, reply) => {
    reply.download('/foo.html', 'hello-world.html', {
      root: path.join(
        __dirname,
        'static',
        'deep',
        'path',
        'for',
        'test',
        'purpose'
      )
    })
  })

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('reply.download()', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.headers.get('content-disposition'), 'attachment; filename="index.html"')
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.download() with fileName', async t => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar/change')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-disposition'), 'attachment; filename="hello-world.html"')
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.download() with fileName - override', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/root/path/override/test')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-disposition'), 'attachment; filename="foo.html"')
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.download() with custom opts', async (t) => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar/override')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-disposition'), 'attachment; filename="hello-world.html"')
    t.assert.deepStrictEqual(response.headers.get('cache-control'), 'public, max-age=7200, immutable')
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.download() with custom opts (2)', async (t) => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar/override/2')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-disposition'), 'attachment; filename="index.html"')
    t.assert.deepStrictEqual(response.headers.get('accept-ranges'), null)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('reply.download() with rootPath and fileName', async (t) => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/root/path/override/test/change')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-disposition'), 'attachment; filename="hello-world.html"')
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })
})

test('download disabled', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    decorateReply: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/foo/bar', function (_req, reply) {
    if (reply.download === undefined) {
      t.assert.deepStrictEqual(reply.download, undefined)
      reply.send('pass')
    } else {
      reply.send('fail')
    }
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('reply.sendFile undefined', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/foo/bar')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), 'pass')
  })
})

test('prefix default', (t) => {
  t.plan(1)
  const pluginOptions = { root: path.join(__dirname, 'static') }
  const fastify = Fastify({ logger: false })
  t.assert.doesNotThrow(() => fastify.register(fastifyStatic, pluginOptions))
})

test('root not found warning', async (t) => {
  t.plan(1)
  const rootPath = path.join(__dirname, 'does-not-exist')
  const pluginOptions = { root: rootPath }
  const destination = concat((data) => {
    t.assert.deepStrictEqual(JSON.parse(data).msg, `"root" path "${rootPath}" must exist`)
  })
  const loggerInstance = pino(
    {
      level: 'warn'
    },
    destination
  )
  const fastify = Fastify({ loggerInstance })
  fastify.register(fastifyStatic, pluginOptions)

  await fastify.listen({ port: 0 })
  fastify.server.unref()
  destination.end()
})

test('send options', (t) => {
  t.plan(12)
  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    acceptRanges: 'acceptRanges',
    contentType: 'contentType',
    cacheControl: 'cacheControl',
    dotfiles: 'dotfiles',
    etag: 'etag',
    extensions: 'extensions',
    immutable: 'immutable',
    index: 'index',
    lastModified: 'lastModified',
    maxAge: 'maxAge'
  }
  const fastify = Fastify({ logger: false })
  const { resolve, promise } = Promise.withResolvers()
  const fastifyStatic = require('proxyquire')('../', {
    '@fastify/send': function sendStub (_req, pathName, options) {
      t.assert.deepStrictEqual(pathName, '/index.html')
      t.assert.deepStrictEqual(options.root, path.join(__dirname, '/static'))
      t.assert.deepStrictEqual(options.acceptRanges, 'acceptRanges')
      t.assert.deepStrictEqual(options.contentType, 'contentType')
      t.assert.deepStrictEqual(options.cacheControl, 'cacheControl')
      t.assert.deepStrictEqual(options.dotfiles, 'dotfiles')
      t.assert.deepStrictEqual(options.etag, 'etag')
      t.assert.deepStrictEqual(options.extensions, 'extensions')
      t.assert.deepStrictEqual(options.immutable, 'immutable')
      t.assert.deepStrictEqual(options.index, 'index')
      t.assert.deepStrictEqual(options.lastModified, 'lastModified')
      t.assert.deepStrictEqual(options.maxAge, 'maxAge')
      resolve()
      return { on: () => { }, pipe: () => { } }
    }
  })
  fastify.register(fastifyStatic, pluginOptions)
  fastify.inject({ url: '/index.html' })

  return promise
})

test('setHeaders option', async (t) => {
  t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

  const pluginOptions = {
    root: path.join(__dirname, 'static'),
    setHeaders: function (res, pathName) {
      t.assert.deepStrictEqual(pathName, path.join(__dirname, 'static/index.html'))
      res.setHeader('X-Test-Header', 'test')
    }
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)
  t.assert.deepStrictEqual(response.headers.get('x-test-header'), 'test')
  t.assert.deepStrictEqual(await response.text(), indexContent)
  genericResponseChecks(t, response)
})

test('maxAge option', async (t) => {
  t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

  const pluginOptions = {
    root: path.join(__dirname, 'static'),
    maxAge: 3600000
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)
  t.assert.deepStrictEqual(response.headers.get('cache-control'), 'public, max-age=3600')
  t.assert.deepStrictEqual(await response.text(), indexContent)
  genericResponseChecks(t, response)
})

test('errors', async (t) => {
  t.plan(12)

  await t.test('no root', async (t) => {
    t.plan(1)
    const pluginOptions = {}
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('root is not a string', async (t) => {
    t.plan(1)
    const pluginOptions = { root: 42 }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('root is not an absolute path', async (t) => {
    t.plan(1)
    const pluginOptions = { root: './my/path' }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('root is not a directory', async (t) => {
    t.plan(1)
    const pluginOptions = { root: __filename }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('root is an empty array', async (t) => {
    t.plan(1)
    const pluginOptions = { root: [] }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('root array does not contain strings', async (t) => {
    t.plan(1)
    const pluginOptions = { root: [1] }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('root array does not contain an absolute path', async (t) => {
    t.plan(1)
    const pluginOptions = { root: ['./my/path'] }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('root array path is not a directory', async (t) => {
    t.plan(1)
    const pluginOptions = { root: [__filename] }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('all root array paths must be valid', async (t) => {
    t.plan(1)
    const pluginOptions = { root: [path.join(__dirname, '/static'), 1] }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('no root and serve: false', async (t) => {
    t.plan(1)
    const pluginOptions = {
      serve: false,
      root: []
    }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('duplicate root paths are not allowed', async (t) => {
    t.plan(1)
    const pluginOptions = {
      root: [path.join(__dirname, '/static'), path.join(__dirname, '/static')]
    }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })

  await t.test('setHeaders is not a function', async (t) => {
    t.plan(1)
    const pluginOptions = { root: __dirname, setHeaders: 'headers' }
    const fastify = Fastify({ logger: false })
    await t.assert.rejects(async () => await fastify.register(fastifyStatic, pluginOptions))
  })
})

test('register no prefix', async (t) => {
  t.plan(7)

  const pluginOptions = {
    root: path.join(__dirname, '/static')
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/', (_request, reply) => {
    reply.send({ hello: 'world' })
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('/deep/path/for/test/purpose/foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/for/test/purpose/foo.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/this/path/doesnt/exist.html', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/this/path/doesnt/exist.html')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/../index.js', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/../index.js')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })
})

test('with fastify-compress', { timeout: 60000 }, async t => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static')
  }
  const fastify = Fastify()
  fastify.register(compress, { threshold: 0 })
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  await t.test('deflate', async function (t) {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html', {
      headers: {
        'accept-encoding': ['deflate']
      }
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-encoding'), 'deflate')
    genericResponseChecks(t, response)
  })

  await t.test('gzip', async function (t) {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-encoding'), 'gzip')
    genericResponseChecks(t, response)
  })
})

test('register /static/ with schemaHide true', async t => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/',
    schemaHide: true
  }

  const fastify = Fastify()

  fastify.addHook('onRoute', function (routeOptions) {
    t.assert.deepStrictEqual(routeOptions.schema, { hide: true })
  })

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=utf-8')
    genericResponseChecks(t, response)
  })
})

test('register /static/ with schemaHide false', async t => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/',
    schemaHide: false
  }

  const fastify = Fastify()

  fastify.addHook('onRoute', function (routeOptions) {
    t.assert.deepStrictEqual(routeOptions.schema, { hide: false })
  })

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=utf-8')
    genericResponseChecks(t, response)
  })
})

test('register /static/ without schemaHide', async t => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/'
  }

  const fastify = Fastify()

  fastify.addHook('onRoute', function (routeOptions) {
    t.assert.deepStrictEqual(routeOptions.schema, { hide: true })
  })

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=utf-8')
    genericResponseChecks(t, response)
  })
})

test('fastify with exposeHeadRoutes', async t => {
  t.plan(1)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    wildcard: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/index.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html', { method: 'HEAD' })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })
})

test('register with wildcard false', async t => {
  t.plan(8)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    wildcard: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/*', (_request, reply) => {
    reply.send({ hello: 'world' })
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/index.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/not-defined', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/not-defined')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('/deep/path/for/test/purpose/foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/for/test/purpose/foo.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/../index.js', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/../index.js')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('/index.css', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })
})

test('register with wildcard false (trailing slash in the root)', async t => {
  t.plan(5)

  const pluginOptions = {
    root: path.join(__dirname, '/static/'),
    prefix: '/assets/',
    index: false,
    wildcard: false
  }
  const fastify = Fastify({
    routerOptions: {
      ignoreTrailingSlash: true
    }
  })
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/*', (_request, reply) => {
    reply.send({ hello: 'world' })
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/assets/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/not-defined', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/assets/not-defined')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('/deep/path/for/test/purpose/foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/assets/deep/path/for/test/purpose/foo.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/../index.js', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/assets/../index.js')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('/index.css', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/assets/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })
})

test('register with wildcard string', async (t) => {
  t.plan(1)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    wildcard: '**/index.html'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/*', (_request, reply) => {
    reply.send({ hello: 'world' })
  })

  await t.assert.rejects(fastify.ready())
})

test('register with wildcard string on multiple root paths', async (t) => {
  t.plan(1)

  const pluginOptions = {
    root: [path.join(__dirname, '/static'), path.join(__dirname, '/static2')],
    wildcard: '**/*.js'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/*', (_request, reply) => {
    reply.send({ hello: 'world' })
  })

  t.after(() => fastify.close())

  await t.assert.rejects(fastify.listen({ port: 0 }))
})

test('register with wildcard false and alternative index', async t => {
  t.plan(10)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    wildcard: false,
    index: ['foobar.html', 'foo.html', 'index.html']
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/*', (_request, reply) => {
    reply.send({ hello: 'world' })
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/index.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html', { method: 'HEAD' })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/?a=b', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), foobarContent)
    genericResponseChecks(t, response)
  })

  await t.test('/?a=b', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port, {
      method: 'HEAD'
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/not-defined', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/not-defined')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('/deep/path/for/test/purpose/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/for/test/purpose/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/deep/path/for/test/', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/for/test/', {
      method: 'HEAD'
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/../index.js', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/../index.js')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })
})

test('register /static with wildcard false and alternative index', async t => {
  t.plan(10)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    wildcard: false,
    index: ['foobar.html', 'foo.html', 'index.html']
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/*', (_request, reply) => {
    reply.send({ hello: 'world' })
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', {
      method: 'HEAD'
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/static', (t) => {
    t.plan(2)

    const { promise, resolve } = Promise.withResolvers()

    const testurl = 'http://localhost:' + fastify.server.address().port + '/static'
    const req = http.request(url.parse(testurl), res => {
      t.assert.deepStrictEqual(res.statusCode, 200)
      let body = ''
      res.on('data', (chunk) => {
        body += chunk.toString()
      })
      res.on('end', () => {
        t.assert.deepStrictEqual(JSON.parse(body.toString()), { hello: 'world' })
        resolve()
      })
    })
    req.on('error', (err) => console.error(err))
    req.end()

    return promise
  })

  await t.test('/static/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), foobarContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/', {
      method: 'HEAD'
    })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/static/not-defined', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/not-defined')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })

  await t.test('/static/deep/path/for/test/purpose/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/purpose/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/../index.js', async (t) => {
    t.plan(3)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/../index.js')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), { hello: 'world' })
  })
})

test('register /static with redirect true', async t => {
  t.plan(6)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    redirect: true,
    index: 'index.html'
  }

  const fastify = Fastify()

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static?a=b', async (t) => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const { promise, resolve } = Promise.withResolvers()

    const testurl = 'http://localhost:' + fastify.server.address().port + '/static?a=b'
    const req = http.request(url.parse(testurl), res => {
      t.assert.deepStrictEqual(res.statusCode, 301)
      t.assert.deepStrictEqual(res.headers.location, '/static/?a=b')
      resolve()
    })
    req.on('error', (err) => console.error(err))
    req.end()

    await promise

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static?a=b')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static', t => {
    t.plan(2)

    const { promise, resolve } = Promise.withResolvers()

    const testurl = 'http://localhost:' + fastify.server.address().port + '/static'
    const req = http.request(url.parse(testurl), res => {
      t.assert.deepStrictEqual(res.statusCode, 301)
      t.assert.deepStrictEqual(res.headers.location, '/static/')

      resolve()
    })
    req.on('error', err => console.error(err))
    req.end()

    return promise
  })

  await t.test('/static/', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test?a=b', async (t) => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const { promise, resolve } = Promise.withResolvers()

    const testurl = 'http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test?a=b'
    const req = http.request(url.parse(testurl), res => {
      t.assert.deepStrictEqual(res.statusCode, 301)
      t.assert.deepStrictEqual(res.headers.location, '/static/deep/path/for/test/?a=b')
      resolve()
    })
    req.on('error', (err) => console.error(err))
    req.end()

    await promise

    // verify the redirect with query parameters works
    const response = await fetch(testurl)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })
})

test('register /static with redirect true and wildcard false', async t => {
  t.plan(7)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    redirect: true,
    wildcard: false,
    index: 'index.html'
  }

  const fastify = Fastify()

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/static?a=b', async t => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const { promise, resolve } = Promise.withResolvers()

    const testurl = 'http://localhost:' + fastify.server.address().port + '/static?a=b'
    const req = http.request(url.parse(testurl), res => {
      t.assert.deepStrictEqual(res.statusCode, 301)
      t.assert.deepStrictEqual(res.headers.location, '/static/?a=b')
      resolve()
    })
    req.on('error', err => console.error(err))
    req.end()
    await promise

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static?a=b')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/?a=b', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/?a=b')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/?a=b - HEAD', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/?a=b', { method: 'HEAD' })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep', async t => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test?a=b', async t => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)

    const { promise, resolve } = Promise.withResolvers()

    const testurl = 'http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test?a=b'
    const req = http.request(url.parse(testurl), res => {
      t.assert.deepStrictEqual(res.statusCode, 301)
      t.assert.deepStrictEqual(res.headers.location, '/static/deep/path/for/test/?a=b')
      resolve()
    })
    req.on('error', err => console.error(err))
    req.end()
    await promise

    const response = await fetch(testurl)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test', { method: 'HEAD' })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })
})

test('trailing slash behavior with redirect = false', async (t) => {
  t.plan(5)

  const fastify = Fastify()
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    redirect: false
  })
  fastify.server.unref()

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  const host = 'http://localhost:' + fastify.server.address().port

  await t.test('prefix with no trailing slash => 404', async (t) => {
    t.plan(2)

    const response = await fetch(host + '/static')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })

  await t.test('prefix with trailing trailing slash => 200', async (t) => {
    t.plan(2)

    const response = await fetch(host + '/static/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
  })

  await t.test('deep path with no index.html or trailing slash => 404', async (t) => {
    t.plan(2)

    const response = await fetch(host + '/static/deep/path')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })

  await t.test('deep path with index.html but no trailing slash => 200', async (t) => {
    t.plan(2)

    const response = await fetch(host + '/static/deep/path/for/test')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
  })

  await t.test('deep path with index.html and trailing slash => 200', async (t) => {
    t.plan(2)

    const response = await fetch(host + '/static/deep/path/for/test/')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
  })
})

test('if dotfiles are properly served according to plugin options', async (t) => {
  t.plan(3)
  const exampleContents = fs
    .readFileSync(path.join(__dirname, 'static', '.example'), {
      encoding: 'utf8'
    })
    .toString()

  await t.test('freely serve dotfiles', async (t) => {
    t.plan(3)
    const fastify = Fastify()

    const pluginOptions = {
      root: path.join(__dirname, 'static'),
      prefix: '/static/',
      dotfiles: 'allow'
    }

    fastify.register(fastifyStatic, pluginOptions)

    t.after(() => fastify.close())

    await fastify.listen({ port: 0 })
    fastify.server.unref()

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/.example')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), exampleContents)
  })

  await t.test('ignore dotfiles', async (t) => {
    t.plan(2)
    const fastify = Fastify()

    const pluginOptions = {
      root: path.join(__dirname, 'static'),
      prefix: '/static/',
      dotfiles: 'ignore'
    }

    fastify.register(fastifyStatic, pluginOptions)

    t.after(() => fastify.close())

    await fastify.listen({ port: 0 })
    fastify.server.unref()

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/.example')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
  })

  await t.test('deny requests to serve a dotfile', async (t) => {
    t.plan(2)
    const fastify = Fastify()

    const pluginOptions = {
      root: path.join(__dirname, 'static'),
      prefix: '/static/',
      dotfiles: 'deny'
    }

    fastify.register(fastifyStatic, pluginOptions)

    t.after(() => fastify.close())
    await fastify.listen({ port: 0 })
    fastify.server.unref()

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/.example')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 403)
  })
})

test('register with failing glob handler', async (t) => {
  const fastifyStatic = proxyquire.noCallThru()('../', {
    glob: function globStub (_pattern, _options, cb) {
      process.nextTick(function () {
        return cb(new Error('mock glob error'))
      })
    }
  })

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    serve: true,
    wildcard: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await t.assert.rejects(fastify.listen({ port: 0 }))
})

test(
  'register with rootpath that causes statSync to fail with non-ENOENT code',
  async (t) => {
    const fastifyStatic = proxyquire('../', {
      'node:fs': {
        statSync: function statSyncStub () {
          throw new Error({ code: 'MOCK' })
        }
      }
    })

    const pluginOptions = {
      root: path.join(__dirname, '/static'),
      wildcard: true
    }
    const fastify = Fastify()
    fastify.register(fastifyStatic, pluginOptions)

    t.after(() => fastify.close())

    await t.assert.rejects(fastify.listen({ port: 0 }))
  }
)

test('inject support', async (t) => {
  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static'
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)
  t.after(() => fastify.close())

  const response = await fastify.inject({
    method: 'GET',
    url: '/static/index.html'
  })
  t.assert.deepStrictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.body.toString(), indexContent)
})

test('routes should use custom errorHandler premature stream close', async t => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/'
  }

  const fastify = Fastify()

  fastify.addHook('onRoute', function (routeOptions) {
    t.assert.ok(routeOptions.errorHandler instanceof Function)

    routeOptions.onRequest = (_request, _reply, done) => {
      const fakeError = new Error()
      fakeError.code = 'ERR_STREAM_PREMATURE_CLOSE'
      done(fakeError)
    }
  })

  fastify.register(fastifyStatic, pluginOptions)
  t.after(() => fastify.close())

  await t.assert.rejects(fastify.inject({ method: 'GET', url: '/static/index.html' }))
})

test('routes should fallback to default errorHandler', async t => {
  t.plan(3)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/'
  }

  const fastify = Fastify()

  fastify.addHook('onRoute', function (routeOptions) {
    t.assert.ok(routeOptions.errorHandler instanceof Function)

    routeOptions.preHandler = (_request, _reply, done) => {
      const fakeError = new Error()
      fakeError.code = 'SOMETHING_ELSE'
      done(fakeError)
    }
  })

  fastify.register(fastifyStatic, pluginOptions)
  t.after(() => fastify.close())

  const response = await fastify.inject({ method: 'GET', url: '/static/index.html' })
  t.assert.deepStrictEqual(response.statusCode, 500)
  t.assert.deepStrictEqual(await response.json(), {
    statusCode: 500,
    code: 'SOMETHING_ELSE',
    error: 'Internal Server Error',
    message: ''
  })
})

test('percent encoded URLs in glob mode', async (t) => {
  t.plan(3)

  const fastify = Fastify({})

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'static'),
    prefix: '/static',
    wildcard: true
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/a .md')
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)
  t.assert.deepStrictEqual(
    fs.readFileSync(path.join(__dirname, 'static', 'a .md'), 'utf-8'),
    await response.text()
  )
})

test('register /static and /static2 without wildcard', async t => {
  t.plan(2)

  const pluginOptions = {
    root: [path.join(__dirname, '/static'), path.join(__dirname, '/static2')],
    wildcard: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  await t.test('/index.html', async t => {
    t.plan(4 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    const responseContent = await response.text()
    t.assert.notDeepStrictEqual(responseContent, index2Content)
    t.assert.deepStrictEqual(responseContent, indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/bar.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/bar.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), barContent)
    genericResponseChecks(t, response)
  })
})

test(
  'will serve pre-compressed files with .br at the highest priority',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/all-three.html',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'br')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeBr)
  }
)

test(
  'will serve pre-compressed files and fallback to .gz if .br is not on disk',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/gzip-only.html',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, gzipOnly)
  }
)

test(
  'will serve pre-compressed files with .gzip if * directive used',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/all-three.html',
      headers: {
        'accept-encoding': '*'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeGzip)
  }
)

test(
  'will serve pre-compressed files with .gzip if multiple * directives used',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/all-three.html',
      headers: {
        'accept-encoding': '*, *'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeGzip)
  }
)

test(
  'will serve uncompressed files if there are no compressed variants on disk',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/uncompressed.html',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], undefined)
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, uncompressedStatic)
  }
)

test(
  'will serve pre-compressed files with .br at the highest priority (with wildcard: false)',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      wildcard: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/all-three.html',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'br')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeBr)
  }
)

test(
  'will serve pre-compressed files and fallback to .gz if .br is not on disk (with wildcard: false)',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      wildcard: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/gzip-only.html',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, gzipOnly)
  }
)

test(
  'will serve pre-compressed files with .gzip if * directive used (with wildcard: false)',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      wildcard: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/all-three.html',
      headers: {
        'accept-encoding': '*'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeGzip)
  }
)

test(
  'will serve pre-compressed files with .gzip if multiple * directives used (with wildcard: false)',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      wildcard: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/all-three.html',
      headers: {
        'accept-encoding': '*, *'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeGzip)
  }
)

test(
  'will serve uncompressed files if there are no compressed variants on disk (with wildcard: false)',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      wildcard: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/uncompressed.html',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], undefined)
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, uncompressedStatic)
  }
)

test(
  'will serve uncompressed files the accept-encoding header is missing',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/uncompressed.html'
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], undefined)
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, uncompressedStatic)
  }
)

test(
  'will serve precompressed index',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'br')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, indexBr)
  }
)

test(
  'will serve preCompressed index without trailing slash',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      redirect: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/dir',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'br')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, dirIndexBr)
  }
)

test(
  'will redirect to preCompressed index without trailing slash when redirect is true',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      redirect: true,
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/dir',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    t.assert.deepStrictEqual(response.statusCode, 301)
    t.assert.deepStrictEqual(response.headers.location, '/static-pre-compressed/dir/')
  }
)

test(
  'will serve precompressed gzip index in subdir',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/dir-gz',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, dirIndexGz)
  }
)

test(
  'will serve precompressed index with alternative index option',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      index: ['all-three.html']
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'br')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeBr)
  }
)

test(
  'will serve precompressed file without content-type charset',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/sample.jpg',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    t.assert.deepStrictEqual(response.headers['content-type'], 'image/jpeg')
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'br')
    t.assert.deepStrictEqual(response.statusCode, 200)
  }
)

test(
  'will not redirect but serve a file if preCompressed but no compressed file exists and redirect is true',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true,
      redirect: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/baz.json',
      headers: {
        'accept-encoding': '*'
      }
    })

    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
  }
)

test(
  'nonexistent index with precompressed option',
  async (t) => {
    const pluginOptions = {
      root: path.join(__dirname, '/static-pre-compressed'),
      prefix: '/static-pre-compressed/',
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: '/static-pre-compressed/empty/',
      headers: {
        'accept-encoding': 'gzip, deflate, br'
      }
    })

    t.assert.deepStrictEqual(response.statusCode, 404)
    genericErrorResponseChecks(t, response)
  }
)

test('should not redirect to protocol-relative locations', async (t) => {
  const urls = [
    ['//^/..', '/', 301],
    ['//^/.', null, 404], // it is NOT recognized as a directory by pillarjs/send
    ['//:/..', '/', 301],
    ['/\\\\a//google.com/%2e%2e%2f%2e%2e', null, 404],
    ['//a//youtube.com/%2e%2e%2f%2e%2e', null, 404],
    ['/^', null, 404], // it is NOT recognized as a directory by pillarjs/send
    ['//google.com/%2e%2e', '/', 301],
    ['//users/%2e%2e', '/', 301],
    ['//users', null, 404],
    ['///deep/path//for//test//index.html', null, 200]
  ]

  t.plan(urls.length * 2)
  const fastify = Fastify()
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    redirect: true
  })
  t.after(() => fastify.close())

  const address = await fastify.listen({ port: 0 })
  fastify.server.unref()

  const promises = urls.map(([testUrl, expected, status]) => {
    const { promise, resolve } = Promise.withResolvers()

    const req = http.request(url.parse(address + testUrl), res => {
      t.assert.deepStrictEqual(res.statusCode, status, `status ${testUrl}`)

      if (expected) {
        t.assert.deepStrictEqual(res.headers.location, expected)
      } else {
        t.assert.ok(!res.headers.location)
      }

      resolve()
    })
    req.on('error', t.assert.fail)
    req.end()
    return promise
  })

  await Promise.all(promises)
})

test('should not serve index if option is `false`', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static',
    index: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })
})

test('should follow symbolic link without wildcard', async (t) => {
  t.plan(4)
  const fastify = Fastify()
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static-symbolic-link'),
    wildcard: false
  })
  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/origin/subdir/subdir/index.html')
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)

  const response2 = await fetch('http://localhost:' + fastify.server.address().port + '/dir/symlink/subdir/subdir/index.html')
  t.assert.ok(response2.ok)
  t.assert.deepStrictEqual(response2.status, 200)
})

test('should serve files into hidden dir with wildcard `false`', async (t) => {
  t.plan(8)

  const pluginOptions = {
    root: path.join(__dirname, '/static-hidden'),
    wildcard: false,
    serveDotFiles: true
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/.hidden/sample.json')
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)
  t.assert.deepStrictEqual(await response.text(), jsonHiddenContent)
  t.assert.ok(/application\/(json)/.test(response.headers.get('content-type')))
  t.assert.ok(response.headers.get('etag'))
  t.assert.ok(response.headers.get('last-modified'))
  t.assert.ok(response.headers.get('date'))
  t.assert.ok(response.headers.get('cache-control'))
})

test('should not found hidden file with wildcard is `false`', async (t) => {
  t.plan(2)

  const pluginOptions = {
    root: path.join(__dirname, '/static-hidden'),
    wildcard: false
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())
  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/.hidden/sample.json')
  t.assert.ok(!response.ok)
  t.assert.deepStrictEqual(response.status, 404)
})

test('should serve files into hidden dir without wildcard option', async (t) => {
  t.plan(8)

  const pluginOptions = {
    root: path.join(__dirname, '/static-hidden')
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/.hidden/sample.json')
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)
  t.assert.deepStrictEqual(await response.text(), jsonHiddenContent)
  t.assert.ok(/application\/(json)/.test(response.headers.get('content-type')))
  t.assert.ok(response.headers.get('etag'))
  t.assert.ok(response.headers.get('last-modified'))
  t.assert.ok(response.headers.get('date'))
  t.assert.ok(response.headers.get('cache-control'))
})

test(
  'will serve pre-compressed files with .gzip if multi-root',
  async (t) => {
    const pluginOptions = {
      root: [path.join(__dirname, '/static-pre-compressed'), path.join(__dirname, '/static')],
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: 'all-three.html',
      headers: {
        'accept-encoding': '*, *'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.headers['content-encoding'], 'gzip')
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.rawPayload, allThreeGzip)
  }
)

test(
  'will still serve un-compressed files with multi-root and preCompressed as true',
  async (t) => {
    const pluginOptions = {
      root: [path.join(__dirname, '/static-pre-compressed'), path.join(__dirname, '/static')],
      preCompressed: true
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    t.after(() => fastify.close())

    const response = await fastify.inject({
      method: 'GET',
      url: 'foobar.html',
      headers: {
        'accept-encoding': '*, *'
      }
    })

    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, foobarContent)
  }
)

test(
  'converts URL to path',
  async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)
    const pluginOptions = {
      root: url.pathToFileURL(path.join(__dirname, '/static'))
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    const response = await fastify.inject({
      method: 'GET',
      url: 'foobar.html',
      headers: {
        'accept-encoding': '*, *'
      }
    })
    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, foobarContent)
  }
)

test(
  'converts array of URLs to path, contains string path',
  async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)
    const pluginOptions = {
      root: [url.pathToFileURL(path.join(__dirname, '/static')), path.join(__dirname, 'static-dotfiles'), url.pathToFileURL(path.join(__dirname, '/static-pre-compressed'))]
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    const response = await fastify.inject({
      method: 'GET',
      url: 'foobar.html',
      headers: {
        'accept-encoding': '*, *'
      }
    })
    genericResponseChecks(t, response)
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, foobarContent)
  }
)

test(
  'serves files with paths that have characters modified by encodeUri when wildcard is false',
  async (t) => {
    const aContent = fs.readFileSync(path.join(__dirname, 'static-encode/[...]', 'a .md'), 'utf-8')

    t.plan(4)
    const pluginOptions = {
      root: url.pathToFileURL(path.join(__dirname, '/static-encode')),
      wildcard: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    const response = await fastify.inject({
      method: 'GET',
      url: '[...]/a .md',
      headers: {
        'accept-encoding': '*, *'
      }
    })
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, aContent)

    const response2 = await fastify.inject({
      method: 'GET',
      url: '%5B...%5D/a%20.md',
      headers: {
        'accept-encoding': '*, *'
      }
    })
    t.assert.deepStrictEqual(response2.statusCode, 200)
    t.assert.deepStrictEqual(response2.body, aContent)
  }
)

test(
  'serves files with % in the filename',
  async (t) => {
    t.plan(2)

    const txtContent = fs.readFileSync(path.join(__dirname, 'static', '100%.txt'), 'utf-8')

    const pluginOptions = {
      root: url.pathToFileURL(path.join(__dirname, '/static')),
      wildcard: false
    }

    const fastify = Fastify()

    fastify.register(fastifyStatic, pluginOptions)
    const response = await fastify.inject({
      method: 'GET',
      url: '100%25.txt',
      headers: {
        'accept-encoding': '*, *'
      }
    })
    t.assert.deepStrictEqual(response.statusCode, 200)
    t.assert.deepStrictEqual(response.body, txtContent)
  }
)

test('wildcard handler falls back to not found when the raw url does not match the route prefix', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  let wildcardHandler

  fastify.addHook('onRoute', (route) => {
    if (route.url === '/static/*') {
      wildcardHandler = route.handler
    }
  })

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    prefix: '/static'
  })

  t.after(() => fastify.close())

  await fastify.ready()
  t.assert.ok(wildcardHandler)

  let notFoundCalled = false
  await wildcardHandler({
    raw: { url: '/nested/static/index.css' },
    routeOptions: { url: '/static/*' }
  }, {
    callNotFound () {
      notFoundCalled = true
    }
  })

  t.assert.deepStrictEqual(notFoundCalled, true)
})

test('wildcard handler falls back to not found when a param segment is empty', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  let wildcardHandler

  fastify.addHook('onRoute', (route) => {
    if (route.url === '/app/:version/*') {
      wildcardHandler = route.handler
    }
  })

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    prefix: '/app/:version'
  })

  t.after(() => fastify.close())

  await fastify.ready()
  t.assert.ok(wildcardHandler)

  let notFoundCalled = false
  await wildcardHandler({
    raw: { url: '/app//index.css' },
    routeOptions: { url: '/app/:version/*' }
  }, {
    callNotFound () {
      notFoundCalled = true
    }
  })

  t.assert.deepStrictEqual(notFoundCalled, true)
})

test('wildcard handler falls back to not found when the wildcard remainder is malformed', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  let wildcardHandler

  fastify.addHook('onRoute', (route) => {
    if (route.url === '/app/:version/*') {
      wildcardHandler = route.handler
    }
  })

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    prefix: '/app/:version'
  })

  t.after(() => fastify.close())

  await fastify.ready()
  t.assert.ok(wildcardHandler)

  let notFoundCalled = false
  await wildcardHandler({
    raw: { url: '/app/1.2.3/%E0%A4%A' },
    routeOptions: { url: '/app/:version/*' }
  }, {
    callNotFound () {
      notFoundCalled = true
    }
  })

  t.assert.deepStrictEqual(notFoundCalled, true)
})

test('wildcard handler falls back to not found when a literal segment after a param does not match', async (t) => {
  t.plan(2)

  const fastify = Fastify()
  let wildcardHandler

  fastify.addHook('onRoute', (route) => {
    if (route.url === '/app/:version/public/*') {
      wildcardHandler = route.handler
    }
  })

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    prefix: '/app/:version/public'
  })

  t.after(() => fastify.close())

  await fastify.ready()
  t.assert.ok(wildcardHandler)

  let notFoundCalled = false
  await wildcardHandler({
    raw: { url: '/app/1.2.3/private/index.css' },
    routeOptions: { url: '/app/:version/public/*' }
  }, {
    callNotFound () {
      notFoundCalled = true
    }
  })

  t.assert.deepStrictEqual(notFoundCalled, true)
})

test('does not serve static files with encoded path separators', async (t) => {
  t.plan(4)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.all('/deep/*', async (_request, reply) => {
    reply.code(401).send('Unauthorized')
  })

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static')
  })

  const response = await fastify.inject({
    method: 'GET',
    url: '/deep/path/for/test/purpose/foo.html'
  })
  t.assert.deepStrictEqual(response.statusCode, 401)
  t.assert.deepStrictEqual(response.body, 'Unauthorized')

  const encodedPathResponse = await fastify.inject({
    method: 'GET',
    url: '/deep%2Fpath/for/test/purpose/foo.html'
  })
  t.assert.deepStrictEqual(encodedPathResponse.statusCode, 404)
  t.assert.deepStrictEqual(encodedPathResponse.json().message, 'Route GET:/deep%2Fpath/for/test/purpose/foo.html not found')
})

test('serves wildcard files when registered in an encapsulated context', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.register(async function (childContext) {
    childContext.register(fastifyStatic, {
      root: path.join(__dirname, '/static'),
      prefix: '/public',
      decorateReply: false
    })
  }, { prefix: '/nested' })

  const response = await fastify.inject({
    method: 'GET',
    url: '/nested/public/index.css'
  })

  t.assert.deepStrictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.headers['content-type'], 'text/css; charset=utf-8')
  t.assert.deepStrictEqual(response.body, fs.readFileSync(path.join(__dirname, '/static/index.css'), 'utf8'))
})

test('serves wildcard files when prefix contains a route param', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    prefix: '/app/:version',
    decorateReply: false
  })

  const response = await fastify.inject({
    method: 'GET',
    url: '/app/1.2.3/index.css'
  })

  t.assert.deepStrictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.headers['content-type'], 'text/css; charset=utf-8')
  t.assert.deepStrictEqual(response.body, fs.readFileSync(path.join(__dirname, '/static/index.css'), 'utf8'))
})

test('serves wildcard index files when a param prefix uses prefixAvoidTrailingSlash', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '/static'),
    prefix: '/app/:version',
    prefixAvoidTrailingSlash: true,
    decorateReply: false
  })

  const response = await fastify.inject({
    method: 'GET',
    url: '/app/1.2.3'
  })

  t.assert.deepStrictEqual(response.statusCode, 200)
  t.assert.deepStrictEqual(response.headers['content-type'], 'text/html; charset=utf-8')
  t.assert.deepStrictEqual(response.body, fs.readFileSync(path.join(__dirname, '/static/index.html'), 'utf8'))
})

test('content-length in head route should not return zero when using wildcard', async t => {
  t.plan(5)

  const pluginOptions = {
    root: path.join(__dirname, '/static')
  }
  const fastify = Fastify()

  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const file = fs.readFileSync(path.join(__dirname, '/static/index.html'))
  const contentLength = Buffer.byteLength(file).toString()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html', { method: 'HEAD' })
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)
  t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=utf-8')
  t.assert.deepStrictEqual(response.headers.get('content-length'), contentLength)
  t.assert.deepStrictEqual(await response.text(), '')
})

test('respect the .code when using with sendFile', async t => {
  t.plan(5)

  const pluginOptions = {
    root: path.join(__dirname, '/static')
  }
  const fastify = Fastify()

  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/custom', (_, reply) => {
    return reply.code(404).type('text/html').sendFile('foo.html')
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const file = fs.readFileSync(path.join(__dirname, '/static/foo.html'))
  const contentLength = Buffer.byteLength(file).toString()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/custom', { method: 'HEAD' })
  t.assert.ok(!response.ok)
  t.assert.deepStrictEqual(response.status, 404)
  t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=utf-8')
  t.assert.deepStrictEqual(response.headers.get('content-length'), contentLength)
  t.assert.deepStrictEqual(await response.text(), '')
})

test('respect the .type when using with sendFile with contentType disabled', async t => {
  t.plan(5)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    contentType: false
  }
  const fastify = Fastify()

  fastify.register(fastifyStatic, pluginOptions)

  fastify.get('/custom', (_, reply) => {
    return reply.type('text/html; charset=windows-1252').sendFile('foo.html')
  })

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  const file = fs.readFileSync(path.join(__dirname, '/static/foo.html'))
  const contentLength = Buffer.byteLength(file).toString()

  const response = await fetch('http://localhost:' + fastify.server.address().port + '/custom')
  t.assert.ok(response.ok)
  t.assert.deepStrictEqual(response.status, 200)
  t.assert.deepStrictEqual(response.headers.get('content-type'), 'text/html; charset=windows-1252')
  t.assert.deepStrictEqual(response.headers.get('content-length'), contentLength)
  t.assert.deepStrictEqual(await response.text(), fooContent)
})

test('register /static/ with custom log level', async t => {
  t.plan(9)

  const pluginOptions = {
    root: path.join(__dirname, '/static'),
    prefix: '/static/',
    logLevel: 'warn'
  }
  const fastify = Fastify({
    logger: {
      stream: {
        write: (logLine) => {
          if (logLine.includes('"msg":"incoming request"')) {
            console.warn(logLine)
            throw new Error('Should never reach this point since log level is set at WARN!! Unexpected log line: ' + logLine)
          }
        },
      },
    },
  })
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })
  fastify.server.unref()

  await t.test('/static/index.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', { method: 'HEAD' })
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), '')
    genericResponseChecks(t, response)
  })

  await t.test('/static/index.css', async (t) => {
    t.plan(2 + GENERIC_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.css')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    genericResponseChecks(t, response)
  })

  await t.test('/static/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/')

    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/static/deep/path/for/test/purpose/foo.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/purpose/foo.html')

    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })
  await t.test('/static/deep/path/for/test/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/deep/path/for/test/')

    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), innerIndex)
    genericResponseChecks(t, response)
  })

  await t.test('/static/this/path/for/test', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/for/test')

    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('/static/this/path/doesnt/exist.html', async (t) => {
    t.plan(2 + GENERIC_ERROR_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/this/path/doesnt/exist.html')

    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    genericErrorResponseChecks(t, response)
  })

  await t.test('304', async t => {
    t.plan(5 + GENERIC_RESPONSE_CHECK_COUNT)
    const response = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html')

    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)

    const response2 = await fetch('http://localhost:' + fastify.server.address().port + '/static/index.html', {
      headers: {
        'if-none-match': response.headers.get('etag')
      },
      cache: 'no-cache'
    })
    t.assert.ok(!response2.ok)
    t.assert.deepStrictEqual(response2.status, 304)
  })
})

test('register with wildcard false and globIgnore', async t => {
  t.plan(5)

  const indexContent = fs
    .readFileSync('./test/static-filtered/index.html')
    .toString('utf8')

  const deepContent = fs
    .readFileSync('./test/static-filtered/deep/path/to/baz.html')
    .toString('utf8')

  const pluginOptions = {
    root: path.join(__dirname, '/static-filtered'),
    wildcard: false,
    globIgnore: ['**/*.private']
  }
  const fastify = Fastify()
  fastify.register(fastifyStatic, pluginOptions)

  t.after(() => fastify.close())

  await fastify.listen({ port: 0 })

  fastify.server.unref()

  await t.test('/index.html', async t => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/index.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/bar.private', async t => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/bar.private')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    await response.text()
  })

  await t.test('/', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), indexContent)
    genericResponseChecks(t, response)
  })

  await t.test('/deep/path/to/baz.html', async (t) => {
    t.plan(3 + GENERIC_RESPONSE_CHECK_COUNT)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/to/baz.html')
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), deepContent)
    genericResponseChecks(t, response)
  })

  await t.test('/deep/path/to/baz.private', async (t) => {
    t.plan(2)

    const response = await fetch('http://localhost:' + fastify.server.address().port + '/deep/path/to/baz.private')
    t.assert.ok(!response.ok)
    t.assert.deepStrictEqual(response.status, 404)
    await response.text()
  })
})
