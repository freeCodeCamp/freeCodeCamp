'use strict'

const { test } = require('node:test')
const Fastify = require('..')

// Because of how error handlers wrap things, following the control flow can be tricky
// In this test file numbered comments indicate the order statements are expected to execute

test('encapsulates an asynchronous error handler', async t => {
  t.plan(3)

  const fastify = Fastify()
  fastify.register(async function (fastify) {
    fastify.setErrorHandler(async function a (err) {
      // 3. the inner error handler catches the error, and throws a new error
      t.assert.strictEqual(err.message, 'from_endpoint')
      throw new Error('from_inner')
    })
    fastify.get('/encapsulated', async () => {
      // 2. the endpoint throws an error
      throw new Error('from_endpoint')
    })
  })

  fastify.setErrorHandler(async function b (err) {
    // 4. the outer error handler catches the error thrown by the inner error handler
    t.assert.strictEqual(err.message, 'from_inner')
    // 5. the outer error handler throws a new error
    throw new Error('from_outer')
  })

  // 1. the endpoint is called
  const res = await fastify.inject('/encapsulated')
  // 6. the default error handler returns the error from the outer error handler
  t.assert.strictEqual(res.json().message, 'from_outer')
})

// See discussion in https://github.com/fastify/fastify/pull/5222#discussion_r1432573655
test('encapsulates a synchronous error handler', async t => {
  t.plan(3)

  const fastify = Fastify()
  fastify.register(async function (fastify) {
    fastify.setErrorHandler(function a (err) {
      // 3. the inner error handler catches the error, and throws a new error
      t.assert.strictEqual(err.message, 'from_endpoint')
      throw new Error('from_inner')
    })
    fastify.get('/encapsulated', async () => {
      // 2. the endpoint throws an error
      throw new Error('from_endpoint')
    })
  })

  fastify.setErrorHandler(async function b (err) {
    // 4. the outer error handler catches the error thrown by the inner error handler
    t.assert.strictEqual(err.message, 'from_inner')
    // 5. the outer error handler throws a new error
    throw new Error('from_outer')
  })

  // 1. the endpoint is called
  const res = await fastify.inject('/encapsulated')
  // 6. the default error handler returns the error from the outer error handler
  t.assert.strictEqual(res.json().message, 'from_outer')
})

test('onError hook nested', async t => {
  t.plan(4)

  const fastify = Fastify()
  fastify.register(async function (fastify) {
    fastify.setErrorHandler(async function a (err) {
      // 4. the inner error handler catches the error, and throws a new error
      t.assert.strictEqual(err.message, 'from_endpoint')
      throw new Error('from_inner')
    })
    fastify.get('/encapsulated', async () => {
      // 2. the endpoint throws an error
      throw new Error('from_endpoint')
    })
  })

  fastify.setErrorHandler(async function b (err) {
    // 5. the outer error handler catches the error thrown by the inner error handler
    t.assert.strictEqual(err.message, 'from_inner')
    // 6. the outer error handler throws a new error
    throw new Error('from_outer')
  })

  fastify.addHook('onError', async function (request, reply, err) {
    // 3. the hook receives the error
    t.assert.strictEqual(err.message, 'from_endpoint')
  })

  // 1. the endpoint is called
  const res = await fastify.inject('/encapsulated')
  // 7. the default error handler returns the error from the outer error handler
  t.assert.strictEqual(res.json().message, 'from_outer')
})

// See https://github.com/fastify/fastify/issues/5220
test('encapuslates an error handler, for errors thrown in hooks', async t => {
  t.plan(3)

  const fastify = Fastify()
  fastify.register(async function (fastify) {
    fastify.setErrorHandler(function a (err) {
      // 3. the inner error handler catches the error, and throws a new error
      t.assert.strictEqual(err.message, 'from_hook')
      throw new Error('from_inner')
    })
    fastify.addHook('onRequest', async () => {
      // 2. the hook throws an error
      throw new Error('from_hook')
    })
    fastify.get('/encapsulated', async () => {})
  })

  fastify.setErrorHandler(function b (err) {
    // 4. the outer error handler catches the error thrown by the inner error handler
    t.assert.strictEqual(err.message, 'from_inner')
    // 5. the outer error handler throws a new error
    throw new Error('from_outer')
  })

  // 1. the endpoint is called
  const res = await fastify.inject('/encapsulated')
  // 6. the default error handler returns the error from the outer error handler
  t.assert.strictEqual(res.json().message, 'from_outer')
})

// See https://github.com/fastify/fastify/issues/5220
test('encapuslates many synchronous error handlers that rethrow errors', async t => {
  const DEPTH = 100
  t.plan(DEPTH + 2)

  /**
   * This creates a very nested set of error handlers, that looks like:
   * plugin
   * - error handler
   * - plugin
   *   - error handler
   *   - plugin
   *     ... {to DEPTH levels}
   *       - plugin
   *           - error handler
   *           - GET /encapsulated
   */
  const createNestedRoutes = (fastify, depth) => {
    if (depth < 0) {
      throw new Error('Expected depth >= 0')
    } else if (depth === 0) {
      fastify.setErrorHandler(function a (err) {
        // 3. innermost error handler catches the error, and throws a new error
        t.assert.strictEqual(err.message, 'from_route')
        throw new Error(`from_handler_${depth}`)
      })
      fastify.get('/encapsulated', async () => {
        // 2. the endpoint throws an error
        throw new Error('from_route')
      })
    } else {
      fastify.setErrorHandler(function d (err) {
        // 4 to {DEPTH+4}. error handlers each catch errors, and then throws a new error
        t.assert.strictEqual(err.message, `from_handler_${depth - 1}`)
        throw new Error(`from_handler_${depth}`)
      })

      fastify.register(async function (fastify) {
        createNestedRoutes(fastify, depth - 1)
      })
    }
  }

  const fastify = Fastify()
  createNestedRoutes(fastify, DEPTH)

  // 1. the endpoint is called
  const res = await fastify.inject('/encapsulated')
  // {DEPTH+5}. the default error handler returns the error from the outermost error handler
  t.assert.strictEqual(res.json().message, `from_handler_${DEPTH}`)
})

// See https://github.com/fastify/fastify/issues/5220
// This was not failing previously, but we want to make sure the behavior continues to work in the same way across async and sync handlers
// Plus, the current setup is somewhat fragile to tweaks to wrapThenable as that's what retries (by calling res.send(err) again)
test('encapuslates many asynchronous error handlers that rethrow errors', async t => {
  const DEPTH = 100
  t.plan(DEPTH + 2)

  /**
   * This creates a very nested set of error handlers, that looks like:
   * plugin
   * - error handler
   * - plugin
   *   - error handler
   *   - plugin
   *     ... {to DEPTH levels}
   *       - plugin
   *           - error handler
   *           - GET /encapsulated
   */
  const createNestedRoutes = (fastify, depth) => {
    if (depth < 0) {
      throw new Error('Expected depth >= 0')
    } else if (depth === 0) {
      fastify.setErrorHandler(async function a (err) {
        // 3. innermost error handler catches the error, and throws a new error
        t.assert.strictEqual(err.message, 'from_route')
        throw new Error(`from_handler_${depth}`)
      })
      fastify.get('/encapsulated', async () => {
        // 2. the endpoint throws an error
        throw new Error('from_route')
      })
    } else {
      fastify.setErrorHandler(async function m (err) {
        // 4 to {DEPTH+4}. error handlers each catch errors, and then throws a new error
        t.assert.strictEqual(err.message, `from_handler_${depth - 1}`)
        throw new Error(`from_handler_${depth}`)
      })

      fastify.register(async function (fastify) {
        createNestedRoutes(fastify, depth - 1)
      })
    }
  }

  const fastify = Fastify()
  createNestedRoutes(fastify, DEPTH)

  // 1. the endpoint is called
  const res = await fastify.inject('/encapsulated')
  // {DEPTH+5}. the default error handler returns the error from the outermost error handler
  t.assert.strictEqual(res.json().message, `from_handler_${DEPTH}`)
})
