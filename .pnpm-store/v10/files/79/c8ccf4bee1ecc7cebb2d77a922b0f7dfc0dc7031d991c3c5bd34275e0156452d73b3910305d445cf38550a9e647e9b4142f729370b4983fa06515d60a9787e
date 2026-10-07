'use strict'

const fs = require('node:fs')
const { test } = require('node:test')
const Fastify = require('../fastify')
const jsonParser = require('fast-json-body')
const { plainTextParser } = require('./helper')

process.removeAllListeners('warning')

test('contentTypeParser method should exist', t => {
  t.plan(1)
  const fastify = Fastify()
  t.assert.ok(fastify.addContentTypeParser)
})

test('contentTypeParser should add a custom parser', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.options('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/jsoff', function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  await t.test('in POST', async (t) => {
    t.plan(3)

    const result = await fetch(fastifyServer, {
      method: 'POST',
      body: '{"hello":"world"}',
      headers: {
        'Content-Type': 'application/jsoff'
      }
    })

    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    t.assert.deepStrictEqual(await result.json(), { hello: 'world' })
  })

  await t.test('in OPTIONS', async (t) => {
    t.plan(2)

    const result = await fetch(fastifyServer, {
      method: 'OPTIONS',
      body: '{"hello":"world"}',
      headers: {
        'Content-Type': 'application/jsoff'
      }
    })

    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(body, JSON.stringify({ hello: 'world' }))
  })
})

test('contentTypeParser should handle multiple custom parsers', async (t) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.post('/hello', (req, reply) => {
    reply.send(req.body)
  })

  function customParser (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  }

  fastify.addContentTypeParser('application/jsoff', customParser)
  fastify.addContentTypeParser('application/ffosj', customParser)

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/jsoff'
    }
  })

  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.deepStrictEqual(await result1.json(), { hello: 'world' })

  const result2 = await fetch(fastifyServer + '/hello', {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/ffosj'
    }
  })

  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)

  t.assert.deepStrictEqual(await result2.json(), { hello: 'world' })
})

test('contentTypeParser should handle an array of custom contentTypes', async (t) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.post('/hello', (req, reply) => {
    reply.send(req.body)
  })

  function customParser (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  }

  fastify.addContentTypeParser(['application/jsoff', 'application/ffosj'], customParser)

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/jsoff'
    }
  })

  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.deepStrictEqual(await result1.json(), { hello: 'world' })

  const result2 = await fetch(fastifyServer + '/hello', {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/ffosj'
    }
  })

  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.deepStrictEqual(await result2.json(), { hello: 'world' })
})

test('contentTypeParser should handle errors', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/jsoff', function (req, payload, done) {
    done(new Error('kaboom!'), {})
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/jsoff'
    }
  })

  t.assert.strictEqual(result.status, 500)
})

test('contentTypeParser should support encapsulation', (t, testDone) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addContentTypeParser('application/jsoff', () => {})
    t.assert.ok(instance.hasContentTypeParser('application/jsoff'))

    instance.register((instance, opts, done) => {
      instance.addContentTypeParser('application/ffosj', () => {})
      t.assert.ok(instance.hasContentTypeParser('application/jsoff'))
      t.assert.ok(instance.hasContentTypeParser('application/ffosj'))
      done()
    })

    done()
  })

  fastify.ready(err => {
    t.assert.ifError(err)
    t.assert.ok(!fastify.hasContentTypeParser('application/jsoff'))
    t.assert.ok(!fastify.hasContentTypeParser('application/ffosj'))
    testDone()
  })
})

test('contentTypeParser should support encapsulation, second try', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.post('/', (req, reply) => {
      reply.send(req.body)
    })

    instance.addContentTypeParser('application/jsoff', function (req, payload, done) {
      jsonParser(payload, function (err, body) {
        done(err, body)
      })
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/jsoff'
    }
  })

  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(body, JSON.stringify({ hello: 'world' }))
})

test('contentTypeParser shouldn\'t support request with undefined "Content-Type"', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/jsoff', function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: 'unknown content type!',
    headers: {
      'Content-Type': undefined
    }
  })

  t.assert.strictEqual(result.status, 415)
})

test('the content type should be a string or RegExp', t => {
  t.plan(2)
  const fastify = Fastify()

  try {
    fastify.addContentTypeParser(null, () => {})
    t.assert.fail()
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_CTP_INVALID_TYPE')
    t.assert.strictEqual(err.message, 'The content type should be a string or a RegExp')
  }
})

test('the content type cannot be an empty string', t => {
  t.plan(2)
  const fastify = Fastify()

  try {
    fastify.addContentTypeParser('', () => {})
    t.assert.fail()
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_CTP_EMPTY_TYPE')
    t.assert.strictEqual(err.message, 'The content type cannot be an empty string')
  }
})

test('the content type handler should be a function', t => {
  t.plan(2)
  const fastify = Fastify()

  try {
    fastify.addContentTypeParser('aaa', null)
    t.assert.fail()
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_CTP_INVALID_HANDLER')
    t.assert.strictEqual(err.message, 'The content type handler should be a function')
  }
})

test('catch all content type parser', async (t) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('*', function (req, payload, done) {
    let data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello',
    headers: {
      'Content-Type': 'application/jsoff'
    }
  })

  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.strictEqual(await result1.text(), 'hello')

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello',
    headers: {
      'Content-Type': 'very-weird-content-type/foo'
    }
  })

  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.strictEqual(await result2.text(), 'hello')
})

test('catch all content type parser should not interfere with other content type parsers', async (t) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('*', function (req, payload, done) {
    let data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data)
    })
  })

  fastify.addContentTypeParser('application/jsoff', function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result1 = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/jsoff'
    }
  })

  t.assert.ok(result1.ok)
  t.assert.strictEqual(result1.status, 200)
  t.assert.deepStrictEqual(await result1.json(), { hello: 'world' })

  const result2 = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello',
    headers: {
      'Content-Type': 'very-weird-content-type/foo'
    }
  })

  t.assert.ok(result2.ok)
  t.assert.strictEqual(result2.status, 200)
  t.assert.strictEqual(await result2.text(), 'hello')
})

// Issue 492 https://github.com/fastify/fastify/issues/492
test('\'*\' catch undefined Content-Type requests', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.addContentTypeParser('*', function (req, payload, done) {
    let data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data)
    })
  })

  fastify.post('/', (req, res) => {
    // Needed to avoid json stringify
    res.type('text/plain').send(req.body)
  })

  const fastifyServer = await fastify.listen({ port: 0 })

  const fileStream = fs.createReadStream(__filename)

  const result = await fetch(fastifyServer + '/', {
    method: 'POST',
    body: fileStream,
    duplex: 'half'
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), fs.readFileSync(__filename).toString())
})

test('cannot add custom parser after binding', (t, testDone) => {
  t.plan(2)

  const fastify = Fastify()

  t.after(() => fastify.close())

  fastify.post('/', (req, res) => {
    res.type('text/plain').send(req.body)
  })

  fastify.listen({ port: 0 }, function (err) {
    t.assert.ifError(err)

    try {
      fastify.addContentTypeParser('*', () => {})
      t.assert.fail()
    } catch (e) {
      t.assert.ok(true)
      testDone()
    }
  })
})

test('Can override the default json parser', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/json', function (req, payload, done) {
    t.assert.ok('called')
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(body, '{"hello":"world"}')
})

test('Can override the default plain text parser', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('text/plain', function (req, payload, done) {
    t.assert.ok('called')
    plainTextParser(payload, function (err, body) {
      done(err, body)
    })
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello world',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(body, 'hello world')
})

test('Can override the default json parser in a plugin', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.register((instance, opts, done) => {
    instance.addContentTypeParser('application/json', function (req, payload, done) {
      t.assert.ok('called')
      jsonParser(payload, function (err, body) {
        done(err, body)
      })
    })

    instance.post('/', (req, reply) => {
      reply.send(req.body)
    })

    done()
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(body, '{"hello":"world"}')
})

test('Can\'t override the json parser multiple times', t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.addContentTypeParser('application/json', function (req, payload, done) {
    jsonParser(payload, function (err, body) {
      done(err, body)
    })
  })

  try {
    fastify.addContentTypeParser('application/json', function (req, payload, done) {
      t.assert.ok('called')
      jsonParser(payload, function (err, body) {
        done(err, body)
      })
    })
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_CTP_ALREADY_PRESENT')
    t.assert.strictEqual(err.message, 'Content type parser \'application/json\' already present.')
  }
})

test('Can\'t override the plain text parser multiple times', t => {
  t.plan(2)
  const fastify = Fastify()

  fastify.addContentTypeParser('text/plain', function (req, payload, done) {
    plainTextParser(payload, function (err, body) {
      done(err, body)
    })
  })

  try {
    fastify.addContentTypeParser('text/plain', function (req, payload, done) {
      t.assert.ok('called')
      plainTextParser(payload, function (err, body) {
        done(err, body)
      })
    })
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_CTP_ALREADY_PRESENT')
    t.assert.strictEqual(err.message, 'Content type parser \'text/plain\' already present.')
  }
})

test('Should get the body as string', async (t) => {
  t.plan(4)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
    t.assert.ok('called')
    t.assert.ok(typeof body === 'string')
    try {
      const json = JSON.parse(body)
      done(null, json)
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: '{"hello":"world"}',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(body, '{"hello":"world"}')
})

test('Should return defined body with no custom parser defined and content type = \'text/plain\'', async (t) => {
  t.plan(2)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => fastify.close())

  const result = await fetch(fastifyServer, {
    method: 'POST',
    body: 'hello world',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.strictEqual(result.status, 200)
  const body = await result.text()
  t.assert.strictEqual(body, 'hello world')
})

test('Should have typeof body object with no custom parser defined, no body defined and content type = \'text/plain\'', async (t) => {
  t.plan(3)
  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  t.after(() => fastify.close())

  const fastifyServer = await fastify.listen({ port: 0 })

  const result = await fetch(fastifyServer, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  t.assert.ok(result.ok)
  t.assert.strictEqual(result.status, 200)
  t.assert.strictEqual(await result.text(), '')
})
