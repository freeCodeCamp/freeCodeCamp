'use strict'

const { test } = require('node:test')
const Fastify = require('..')
const keys = require('../lib/symbols')
const { FST_ERR_CTP_ALREADY_PRESENT, FST_ERR_CTP_INVALID_TYPE, FST_ERR_CTP_INVALID_MEDIA_TYPE } = require('../lib/errors')

const first = function (req, payload, done) {}
const second = function (req, payload, done) {}
const third = function (req, payload, done) {}

test('hasContentTypeParser', async t => {
  await t.test('should know about internal parsers', (t, done) => {
    t.plan(5)

    const fastify = Fastify()
    fastify.ready(err => {
      t.assert.ifError(err)
      t.assert.ok(fastify.hasContentTypeParser('application/json'))
      t.assert.ok(fastify.hasContentTypeParser('text/plain'))
      t.assert.ok(fastify.hasContentTypeParser('  text/plain  '))
      t.assert.ok(!fastify.hasContentTypeParser('application/jsoff'))
      done()
    })
  })

  await t.test('should only work with string and RegExp', t => {
    t.plan(8)

    const fastify = Fastify()
    fastify.addContentTypeParser(/^image\/.*/, first)
    fastify.addContentTypeParser(/^application\/.+\+xml/, first)
    fastify.addContentTypeParser('image/gif', first)

    t.assert.ok(fastify.hasContentTypeParser('application/json'))
    t.assert.ok(fastify.hasContentTypeParser(/^image\/.*/))
    t.assert.ok(fastify.hasContentTypeParser(/^application\/.+\+xml/))
    t.assert.ok(fastify.hasContentTypeParser('image/gif'))
    t.assert.ok(!fastify.hasContentTypeParser(/^image\/.+\+xml/))
    t.assert.ok(!fastify.hasContentTypeParser('image/png'))
    t.assert.ok(!fastify.hasContentTypeParser('*'))
    t.assert.throws(
      () => fastify.hasContentTypeParser(123),
      FST_ERR_CTP_INVALID_TYPE
    )
  })
})

test('getParser', async t => {
  await t.test('should return matching parser', t => {
    t.plan(7)

    const fastify = Fastify()

    fastify.addContentTypeParser(/^image\/.*/, first)
    fastify.addContentTypeParser(/^application\/.+\+xml/, second)
    fastify.addContentTypeParser('text/html', third)
    fastify.addContentTypeParser('text/html; charset=utf-8', third)

    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('application/t+xml').fn, second)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('image/png').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html').fn, third)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html; charset=utf-8').fn, third)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html ; charset=utf-8').fn, third)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html\t; charset=utf-8').fn, third)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/htmlINVALID')?.fn, undefined)
  })

  await t.test('should return matching parser with caching /1', t => {
    t.plan(7)

    const fastify = Fastify()

    fastify.addContentTypeParser('text/html', first)

    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 0)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html ').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html ').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
  })

  await t.test('should return matching parser with caching /2', t => {
    t.plan(9)

    const fastify = Fastify()

    fastify.addContentTypeParser('text/html', first)

    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 0)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/HTML').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('TEXT/html').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('TEXT/html').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
  })

  await t.test('should return matching parser with caching /3', t => {
    t.plan(6)

    const fastify = Fastify()

    fastify.addContentTypeParser(/^text\/html(;\s*charset=[^;]+)?$/, first)

    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 1)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html;charset=utf-8').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 2)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html;charset=utf-8').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].cache.size, 2)
  })

  await t.test('should prefer content type parser with string value', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.addContentTypeParser(/^image\/.*/, first)
    fastify.addContentTypeParser('image/gif', second)

    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('image/gif').fn, second)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('image/png').fn, first)
  })

  await t.test('should return parser that catches all if no other is set', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.addContentTypeParser('*', first)
    fastify.addContentTypeParser(/^text\/.*/, second)

    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('image/gif').fn, first)
    t.assert.strictEqual(fastify[keys.kContentTypeParser].getParser('text/html').fn, second)
  })

  await t.test('should return undefined if no matching parser exist', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.addContentTypeParser(/^weirdType\/.+/, first)
    fastify.addContentTypeParser('application/javascript', first)

    t.assert.ok(!fastify[keys.kContentTypeParser].getParser('application/xml'))
    t.assert.ok(!fastify[keys.kContentTypeParser].getParser('weirdType/'))
  })
})

test('existingParser', async t => {
  await t.test('returns always false for "*"', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.addContentTypeParser(/^image\/.*/, first)
    fastify.addContentTypeParser(/^application\/.+\+xml/, first)
    fastify.addContentTypeParser('text/html', first)

    t.assert.ok(!fastify[keys.kContentTypeParser].existingParser('*'))

    fastify.addContentTypeParser('*', first)

    t.assert.ok(!fastify[keys.kContentTypeParser].existingParser('*'))
  })

  await t.test('let you override the default parser once', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.addContentTypeParser('application/json', first)
    fastify.addContentTypeParser('text/plain', first)

    t.assert.throws(
      () => fastify.addContentTypeParser('application/json', first),
      FST_ERR_CTP_ALREADY_PRESENT
    )
    t.assert.throws(
      () => fastify.addContentTypeParser('text/plain', first),
      FST_ERR_CTP_ALREADY_PRESENT
    )
  })

  const fastify = Fastify()
  const contentTypeParser = fastify[keys.kContentTypeParser]

  fastify.addContentTypeParser(/^image\/.*/, first)
  fastify.addContentTypeParser(/^application\/.+\+xml/, first)
  fastify.addContentTypeParser('text/html', first)

  t.assert.ok(contentTypeParser.existingParser(/^image\/.*/))
  t.assert.ok(contentTypeParser.existingParser('text/html'))
  t.assert.ok(contentTypeParser.existingParser(/^application\/.+\+xml/))
  t.assert.ok(!contentTypeParser.existingParser('application/json'))
  t.assert.ok(!contentTypeParser.existingParser('text/plain'))
  t.assert.ok(!contentTypeParser.existingParser('image/png'))
  t.assert.ok(!contentTypeParser.existingParser(/^application\/.+\+json/))
})

test('add', async t => {
  await t.test('should only accept string and RegExp', t => {
    t.plan(4)

    const fastify = Fastify()
    const contentTypeParser = fastify[keys.kContentTypeParser]

    t.assert.ifError(contentTypeParser.add('test/type', {}, first))
    t.assert.ifError(contentTypeParser.add(/test/, {}, first))
    t.assert.throws(
      () => contentTypeParser.add({}, {}, first),
      FST_ERR_CTP_INVALID_TYPE,
      'The content type should be a string or a RegExp'
    )
    t.assert.throws(
      () => contentTypeParser.add(1, {}, first),
      FST_ERR_CTP_INVALID_TYPE,
      'The content type should be a string or a RegExp'
    )
  })

  await t.test('should set "*" as parser that catches all', t => {
    t.plan(1)

    const fastify = Fastify()
    const contentTypeParser = fastify[keys.kContentTypeParser]

    contentTypeParser.add('*', {}, first)
    t.assert.strictEqual(contentTypeParser.customParsers.get('').fn, first)
  })

  await t.test('should lowercase contentTypeParser name', async t => {
    t.plan(1)
    const fastify = Fastify()
    fastify.addContentTypeParser('text/html', function (req, done) {
      done()
    })
    try {
      fastify.addContentTypeParser('TEXT/html', function (req, done) {
        done()
      })
    } catch (err) {
      t.assert.strictEqual(err.message, FST_ERR_CTP_ALREADY_PRESENT('text/html').message)
    }
  })

  await t.test('should trim contentTypeParser name', async t => {
    t.plan(1)
    const fastify = Fastify()
    fastify.addContentTypeParser('text/html', function (req, done) {
      done()
    })
    try {
      fastify.addContentTypeParser('    text/html', function (req, done) {
        done()
      })
    } catch (err) {
      t.assert.strictEqual(err.message, FST_ERR_CTP_ALREADY_PRESENT('text/html').message)
    }
  })
})

test('non-Error thrown from content parser is properly handled', (t, done) => {
  t.plan(3)

  const fastify = Fastify()

  const throwable = 'test'
  const payload = 'error'

  fastify.addContentTypeParser('text/test', (request, payload, done) => {
    done(throwable)
  })

  fastify.post('/', (req, reply) => {
  })

  fastify.setErrorHandler((err, req, res) => {
    t.assert.strictEqual(err, throwable)

    res.send(payload)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    headers: { 'Content-Type': 'text/test' },
    body: 'some text'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.payload, payload)
    done()
  })
})

test('Error thrown 415 from content type is null and make post request to server', (t, done) => {
  t.plan(3)

  const fastify = Fastify()
  const errMsg = new FST_ERR_CTP_INVALID_MEDIA_TYPE().message

  fastify.post('/', (req, reply) => {
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    body: 'some text'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 415)
    t.assert.strictEqual(JSON.parse(res.body).message, errMsg)
    done()
  })
})

test('remove', async t => {
  await t.test('should remove default parser', t => {
    t.plan(6)

    const fastify = Fastify()
    const contentTypeParser = fastify[keys.kContentTypeParser]

    t.assert.ok(contentTypeParser.remove('application/json'))
    t.assert.ok(!contentTypeParser.customParsers['application/json'])
    t.assert.ok(!contentTypeParser.parserList.find(parser => parser === 'application/json'))
    t.assert.ok(contentTypeParser.remove('  text/plain  '))
    t.assert.ok(!contentTypeParser.customParsers['text/plain'])
    t.assert.ok(!contentTypeParser.parserList.find(parser => parser === 'text/plain'))
  })

  await t.test('should remove RegExp parser', t => {
    t.plan(3)

    const fastify = Fastify()
    fastify.addContentTypeParser(/^text\/*/, first)

    const contentTypeParser = fastify[keys.kContentTypeParser]

    t.assert.ok(contentTypeParser.remove(/^text\/*/))
    t.assert.ok(!contentTypeParser.customParsers[/^text\/*/])
    t.assert.ok(!contentTypeParser.parserRegExpList.find(parser => parser.toString() === /^text\/*/.toString()))
  })

  await t.test('should throw an error if content type is neither string nor RegExp', t => {
    t.plan(1)

    const fastify = Fastify()

    t.assert.throws(() => fastify[keys.kContentTypeParser].remove(12), FST_ERR_CTP_INVALID_TYPE)
  })

  await t.test('should return false if content type does not exist', t => {
    t.plan(1)

    const fastify = Fastify()

    t.assert.ok(!fastify[keys.kContentTypeParser].remove('image/png'))
  })

  await t.test('should not remove any content type parser if content type does not exist', t => {
    t.plan(2)

    const fastify = Fastify()

    const contentTypeParser = fastify[keys.kContentTypeParser]

    t.assert.ok(!contentTypeParser.remove('image/png'))
    t.assert.strictEqual(contentTypeParser.customParsers.size, 2)
  })
})

test('remove all should remove all existing parsers and reset cache', t => {
  t.plan(4)

  const fastify = Fastify()
  fastify.addContentTypeParser('application/xml', first)
  fastify.addContentTypeParser(/^image\/.*/, first)

  const contentTypeParser = fastify[keys.kContentTypeParser]

  contentTypeParser.getParser('application/xml') // fill cache with one entry
  contentTypeParser.removeAll()

  t.assert.strictEqual(contentTypeParser.cache.size, 0)
  t.assert.strictEqual(contentTypeParser.parserList.length, 0)
  t.assert.strictEqual(contentTypeParser.parserRegExpList.length, 0)
  t.assert.strictEqual(Object.keys(contentTypeParser.customParsers).length, 0)
})

test('Safeguard against malicious content-type / 1', async t => {
  const badNames = Object.getOwnPropertyNames({}.__proto__) // eslint-disable-line
  t.plan(badNames.length)

  const fastify = Fastify()

  fastify.post('/', async () => {
    return 'ok'
  })

  for (const prop of badNames) {
    const response = await fastify.inject({
      method: 'POST',
      path: '/',
      headers: {
        'content-type': prop
      },
      body: ''
    })

    t.assert.strictEqual(response.statusCode, 415)
  }
})

test('Safeguard against malicious content-type / 2', async t => {
  t.plan(1)

  const fastify = Fastify()

  fastify.post('/', async () => {
    return 'ok'
  })

  const response = await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': '\\u0063\\u006fnstructor'
    },
    body: ''
  })

  t.assert.strictEqual(response.statusCode, 415)
})

test('Safeguard against malicious content-type / 3', async t => {
  t.plan(1)

  const fastify = Fastify()

  fastify.post('/', async () => {
    return 'ok'
  })

  const response = await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': 'constructor; charset=utf-8'
    },
    body: ''
  })

  t.assert.strictEqual(response.statusCode, 415)
})

test('Safeguard against content-type spoofing - string', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.removeAllContentTypeParsers()
  fastify.addContentTypeParser('text/plain', function (request, body, done) {
    t.assert.ok('should be called')
    done(null, body)
  })
  fastify.addContentTypeParser('application/json', function (request, body, done) {
    t.assert.fail('shouldn\'t be called')
    done(null, body)
  })

  fastify.post('/', async () => {
    return 'ok'
  })

  await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': 'text/plain; content-type="application/json"'
    },
    body: ''
  })
})

test('Warning against improper content-type - regexp', async t => {
  await t.test('improper regex - text plain', (t, done) => {
    t.plan(2)
    const fastify = Fastify()

    process.on('warning', onWarning)
    function onWarning (warning) {
      t.assert.strictEqual(warning.name, 'FastifySecurity')
      t.assert.strictEqual(warning.code, 'FSTSEC001')
      done()
    }
    t.after(() => process.removeListener('warning', onWarning))

    fastify.removeAllContentTypeParsers()
    fastify.addContentTypeParser(/text\/plain/, function (request, body, done) {
      done(null, body)
    })
  })

  await t.test('improper regex - application json', (t, done) => {
    t.plan(2)
    const fastify = Fastify()

    process.on('warning', onWarning)
    function onWarning (warning) {
      t.assert.strictEqual(warning.name, 'FastifySecurity')
      t.assert.strictEqual(warning.code, 'FSTSEC001')
      done()
    }
    t.after(() => process.removeListener('warning', onWarning))

    fastify.removeAllContentTypeParsers()

    fastify.addContentTypeParser(/application\/json/, function (request, body, done) {
      done(null, body)
    })
  })
})

test('content-type match parameters - string 1', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.removeAllContentTypeParsers()
  fastify.addContentTypeParser('text/plain; charset=utf8', function (request, body, done) {
    t.assert.fail('shouldn\'t be called')
    done(null, body)
  })
  fastify.addContentTypeParser('application/json; charset=utf8', function (request, body, done) {
    t.assert.ok('should be called')
    done(null, body)
  })

  fastify.post('/', async () => {
    return 'ok'
  })

  await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': 'application/json; charset=utf8'
    },
    body: ''
  })
})

test('content-type match parameters - regexp', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.removeAllContentTypeParsers()
  fastify.addContentTypeParser(/application\/json; charset="utf8"/, function (request, body, done) {
    t.assert.ok('should be called')
    done(null, body)
  })

  fastify.post('/', async () => {
    return 'ok'
  })

  await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': 'application/json; charset=utf8'
    },
    body: ''
  })
})

test('content-type fail when parameters not match - string 1', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.removeAllContentTypeParsers()
  fastify.addContentTypeParser('application/json; charset=utf8; foo=bar', function (request, body, done) {
    t.assert.fail('shouldn\'t be called')
    done(null, body)
  })

  fastify.post('/', async () => {
    return 'ok'
  })

  const response = await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': 'application/json; charset=utf8'
    },
    body: ''
  })

  t.assert.strictEqual(response.statusCode, 415)
})

test('content-type fail when parameters not match - string 2', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.removeAllContentTypeParsers()
  fastify.addContentTypeParser('application/json; charset=utf8; foo=bar', function (request, body, done) {
    t.assert.fail('shouldn\'t be called')
    done(null, body)
  })

  fastify.post('/', async () => {
    return 'ok'
  })

  const response = await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': 'application/json; charset=utf8; foo=baz'
    },
    body: ''
  })

  t.assert.strictEqual(response.statusCode, 415)
})

test('content-type fail when parameters not match - regexp', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.removeAllContentTypeParsers()
  fastify.addContentTypeParser(/application\/json; charset=utf8; foo=bar/, function (request, body, done) {
    t.assert.fail('shouldn\'t be called')
    done(null, body)
  })

  fastify.post('/', async () => {
    return 'ok'
  })

  const response = await fastify.inject({
    method: 'POST',
    path: '/',
    headers: {
      'content-type': 'application/json; charset=utf8'
    },
    body: ''
  })

  t.assert.strictEqual(response.statusCode, 415)
})

// Refs: https://github.com/fastify/fastify/issues/4495
test('content-type regexp list should be cloned when plugin override', async t => {
  t.plan(6)

  const fastify = Fastify()

  fastify.addContentTypeParser(/^image\/.*/, { parseAs: 'buffer' }, (req, payload, done) => {
    done(null, payload)
  })

  fastify.register(function plugin (fastify, options, done) {
    fastify.post('/', function (request, reply) {
      reply.type(request.headers['content-type']).send(request.body)
    })

    done()
  })

  {
    const { payload, headers, statusCode } = await fastify.inject({
      method: 'POST',
      path: '/',
      payload: 'jpeg',
      headers: { 'content-type': 'image/jpeg' }
    })
    t.assert.strictEqual(statusCode, 200)
    t.assert.strictEqual(headers['content-type'], 'image/jpeg')
    t.assert.strictEqual(payload, 'jpeg')
  }

  {
    const { payload, headers, statusCode } = await fastify.inject({
      method: 'POST',
      path: '/',
      payload: 'png',
      headers: { 'content-type': 'image/png' }
    })
    t.assert.strictEqual(statusCode, 200)
    t.assert.strictEqual(headers['content-type'], 'image/png')
    t.assert.strictEqual(payload, 'png')
  }
})

test('invalid content-type error message should not contain format placeholder', (t, done) => {
  t.plan(4)

  const fastify = Fastify()

  fastify.post('/', (req, reply) => {
    reply.send('ok')
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    headers: { 'Content-Type': 'invalid-content-type' },
    body: 'test'
  }, (err, res) => {
    t.assert.ifError(err)
    t.assert.strictEqual(res.statusCode, 415)
    const body = JSON.parse(res.body)
    t.assert.strictEqual(body.code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')
    t.assert.strictEqual(body.message, 'Unsupported Media Type')
    done()
  })
})

test('content-type fail when not a valid type', async t => {
  t.plan(1)

  const fastify = Fastify()
  fastify.removeAllContentTypeParsers()
  try {
    fastify.addContentTypeParser('type-only', function (request, body, done) {
      t.assert.fail('shouldn\'t be called')
      done(null, body)
    })
  } catch (error) {
    t.assert.equal(error.message, 'The content type should be a string or a RegExp')
  }
})
