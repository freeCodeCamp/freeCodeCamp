'use strict'

const { test } = require('node:test')
const Fastify = require('..')

test('Fastify should throw on wrong options', (t) => {
  t.plan(2)
  try {
    Fastify('lol')
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.message, 'Options must be an object')
    t.assert.ok(true)
  }
})

test('Fastify should throw on multiple assignment to the same route', (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.get('/', () => {})

  try {
    fastify.get('/', () => {})
    t.assert.fail('Should throw fastify duplicated route declaration')
  } catch (error) {
    t.assert.strictEqual(error.code, 'FST_ERR_DUPLICATED_ROUTE')
  }
})

test('Fastify should throw for an invalid schema, printing the error route - headers', async (t) => {
  t.plan(1)

  const badSchema = {
    type: 'object',
    properties: {
      bad: {
        type: 'bad-type'
      }
    }
  }
  const fastify = Fastify()
  fastify.get('/', { schema: { headers: badSchema } }, () => {})
  fastify.get('/not-loaded', { schema: { headers: badSchema } }, () => {})

  await t.assert.rejects(fastify.ready(), {
    code: 'FST_ERR_SCH_VALIDATION_BUILD',
    message: /Failed building the validation schema for GET: \//
  })
})

test('Fastify should throw for an invalid schema, printing the error route - body', async (t) => {
  t.plan(1)
  const badSchema = {
    type: 'object',
    properties: {
      bad: {
        type: 'bad-type'
      }
    }
  }

  const fastify = Fastify()
  fastify.register((instance, opts, done) => {
    instance.post('/form', { schema: { body: badSchema } }, () => {})
    done()
  }, { prefix: 'hello' })

  await t.assert.rejects(fastify.ready(), {
    code: 'FST_ERR_SCH_VALIDATION_BUILD',
    message: /Failed building the validation schema for POST: \/hello\/form/
  })
})

test('Should throw on unsupported method', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  try {
    fastify.route({
      method: 'TROLL',
      url: '/',
      schema: {},
      handler: function (req, reply) {}
    })
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should throw on missing handler', (t) => {
  t.plan(1)
  const fastify = Fastify()
  try {
    fastify.route({
      method: 'GET',
      url: '/'
    })
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should throw if one method is unsupported', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  try {
    fastify.route({
      method: ['GET', 'TROLL'],
      url: '/',
      schema: {},
      handler: function (req, reply) {}
    })
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should throw on duplicate content type parser', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  function customParser (req, payload, done) { done(null, '') }

  fastify.addContentTypeParser('application/qq', customParser)
  try {
    fastify.addContentTypeParser('application/qq', customParser)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should throw on duplicate decorator', async (t) => {
  t.plan(1)

  const fastify = Fastify()
  const fooObj = {}

  fastify.decorate('foo', fooObj)
  try {
    fastify.decorate('foo', fooObj)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should not throw on duplicate decorator encapsulation', async (t) => {
  t.plan(1)
  const fastify = Fastify()
  const foo2Obj = {}

  fastify.decorate('foo2', foo2Obj)

  fastify.register(function (fastify, opts, done) {
    t.assert.doesNotThrow(() => {
      fastify.decorate('foo2', foo2Obj)
    })
    done()
  })

  await fastify.ready()
})

test('Should throw on duplicate request decorator', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  fastify.decorateRequest('foo', null)
  try {
    fastify.decorateRequest('foo', null)
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_DEC_ALREADY_PRESENT')
    t.assert.strictEqual(e.message, 'The decorator \'foo\' has already been added!')
  }
})

test('Should throw if request decorator dependencies are not met', async (t) => {
  t.plan(2)

  const fastify = Fastify()

  try {
    fastify.decorateRequest('bar', null, ['world'])
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.code, 'FST_ERR_DEC_MISSING_DEPENDENCY')
    t.assert.strictEqual(e.message, 'The decorator is missing dependency \'world\'.')
  }
})

test('Should throw on duplicate reply decorator', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  fastify.decorateReply('foo', null)
  try {
    fastify.decorateReply('foo', null)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(/has already been added/.test(e.message))
  }
})

test('Should throw if reply decorator dependencies are not met', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  try {
    fastify.decorateReply('bar', null, ['world'])
    t.assert.fail()
  } catch (e) {
    t.assert.ok(/missing dependency/.test(e.message))
  }
})

test('Should throw if handler as the third parameter to the shortcut method is missing and the second parameter is not a function and also not an object', async (t) => {
  t.plan(5)

  const fastify = Fastify()

  try {
    fastify.get('/foo/1', '')
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/2', 1)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/3', [])
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/4', undefined)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/5', null)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should throw if handler as the third parameter to the shortcut method is missing and the second parameter is not a function and also not an object', async (t) => {
  t.plan(5)

  const fastify = Fastify()

  try {
    fastify.get('/foo/1', '')
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/2', 1)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/3', [])
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/4', undefined)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/5', null)
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should throw if there is handler function as the third parameter to the shortcut method and options as the second parameter is not an object', async (t) => {
  t.plan(5)

  const fastify = Fastify()

  try {
    fastify.get('/foo/1', '', (req, res) => {})
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/2', 1, (req, res) => {})
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/3', [], (req, res) => {})
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/4', undefined, (req, res) => {})
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }

  try {
    fastify.get('/foo/5', null, (req, res) => {})
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})

test('Should throw if found duplicate handler as the third parameter to the shortcut method and in options', async (t) => {
  t.plan(1)

  const fastify = Fastify()

  try {
    fastify.get('/foo/abc', {
      handler: (req, res) => {}
    }, (req, res) => {})
    t.assert.fail()
  } catch (e) {
    t.assert.ok(true)
  }
})
