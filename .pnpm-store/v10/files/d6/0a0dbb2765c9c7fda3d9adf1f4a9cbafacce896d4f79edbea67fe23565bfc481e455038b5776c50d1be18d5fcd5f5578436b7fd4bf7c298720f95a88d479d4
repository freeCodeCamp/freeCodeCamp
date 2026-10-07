'use strict'

const { test, describe } = require('node:test')
const Fastify = require('../fastify')
const fp = require('fastify-plugin')
const fakeTimer = require('@sinonjs/fake-timers')
const { FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER } = require('../lib/errors')

test('pluginTimeout', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify({
    pluginTimeout: 10
  })
  fastify.register(function (app, opts, done) {
    // to no call done on purpose
  })
  fastify.ready((err) => {
    t.assert.ok(err)
    t.assert.strictEqual(err.message,
      "fastify-plugin: Plugin did not start in time: 'function (app, opts, done) { -- // to no call done on purpose'. You may have forgotten to call 'done' function or to resolve a Promise")
    t.assert.strictEqual(err.code, 'FST_ERR_PLUGIN_TIMEOUT')
    t.assert.ok(err.cause)
    t.assert.strictEqual(err.cause.code, 'AVV_ERR_PLUGIN_EXEC_TIMEOUT')
    testDone()
  })
})

test('pluginTimeout - named function', (t, testDone) => {
  t.plan(5)
  const fastify = Fastify({
    pluginTimeout: 10
  })
  fastify.register(function nameFunction (app, opts, done) {
    // to no call done on purpose
  })
  fastify.ready((err) => {
    t.assert.ok(err)
    t.assert.strictEqual(err.message,
      "fastify-plugin: Plugin did not start in time: 'nameFunction'. You may have forgotten to call 'done' function or to resolve a Promise")
    t.assert.strictEqual(err.code, 'FST_ERR_PLUGIN_TIMEOUT')
    t.assert.ok(err.cause)
    t.assert.strictEqual(err.cause.code, 'AVV_ERR_PLUGIN_EXEC_TIMEOUT')
    testDone()
  })
})

test('pluginTimeout default', (t, testDone) => {
  t.plan(5)
  const clock = fakeTimer.install({ shouldClearNativeTimers: true })

  const fastify = Fastify()
  fastify.register(function (app, opts, done) {
    // default time elapsed without calling done
    clock.tick(10000)
  })

  fastify.ready((err) => {
    t.assert.ok(err)
    t.assert.strictEqual(err.message,
      "fastify-plugin: Plugin did not start in time: 'function (app, opts, done) { -- // default time elapsed without calling done'. You may have forgotten to call 'done' function or to resolve a Promise")
    t.assert.strictEqual(err.code, 'FST_ERR_PLUGIN_TIMEOUT')
    t.assert.ok(err.cause)
    t.assert.strictEqual(err.cause.code, 'AVV_ERR_PLUGIN_EXEC_TIMEOUT')
    testDone()
  })

  t.after(clock.uninstall)
})

test('plugin metadata - version', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    name: 'plugin',
    fastify: '2.0.0'
  }

  fastify.register(plugin)

  fastify.ready(() => {
    t.assert.ok('everything right')
    testDone()
  })

  function plugin (instance, opts, done) {
    done()
  }
})

test('plugin metadata - version range', (t, testDone) => {
  t.plan(1)
  const fastify = Fastify()

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    name: 'plugin',
    fastify: '>=2.0.0'
  }

  fastify.register(plugin)

  fastify.ready(() => {
    t.assert.ok('everything right')
    testDone()
  })

  function plugin (instance, opts, done) {
    done()
  }
})

test('plugin metadata - version not matching requirement', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    name: 'plugin',
    fastify: '99.0.0'
  }

  fastify.register(plugin)

  fastify.ready((err) => {
    t.assert.ok(err)
    t.assert.strictEqual(err.code, 'FST_ERR_PLUGIN_VERSION_MISMATCH')
    testDone()
  })

  function plugin (instance, opts, done) {
    done()
  }
})

test('plugin metadata - version not matching requirement 2', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()
  Object.defineProperty(fastify, 'version', {
    value: '99.0.0'
  })

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    name: 'plugin',
    fastify: '<=3.0.0'
  }

  fastify.register(plugin)

  fastify.ready((err) => {
    t.assert.ok(err)
    t.assert.strictEqual(err.code, 'FST_ERR_PLUGIN_VERSION_MISMATCH')
    testDone()
  })

  function plugin (instance, opts, done) {
    done()
  }
})

test('plugin metadata - version not matching requirement 3', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()

  plugin[Symbol.for('skip-override')] = true
  plugin[Symbol.for('plugin-meta')] = {
    name: 'plugin',
    fastify: '>=99.0.0'
  }

  fastify.register(plugin)

  fastify.ready((err) => {
    t.assert.ok(err)
    t.assert.strictEqual(err.code, 'FST_ERR_PLUGIN_VERSION_MISMATCH')
    testDone()
  })

  function plugin (instance, opts, done) {
    done()
  }
})

test('plugin metadata - release candidate', (t, testDone) => {
  t.plan(2)
  const fastify = Fastify()
  Object.defineProperty(fastify, 'version', {
    value: '99.0.0-rc.1'
  })

  plugin[Symbol.for('plugin-meta')] = {
    name: 'plugin',
    fastify: '99.x'
  }

  fastify.register(plugin)

  fastify.ready((err) => {
    t.assert.ifError(err)
    t.assert.ok('everything right')
    testDone()
  })

  function plugin (instance, opts, done) {
    done()
  }
})

describe('fastify-rc loads prior version plugins', async () => {
  test('baseline (rc)', (t, testDone) => {
    t.plan(1)

    const fastify = Fastify()
    Object.defineProperty(fastify, 'version', {
      value: '99.0.0-rc.1'
    })

    plugin[Symbol.for('plugin-meta')] = {
      name: 'plugin',
      fastify: '^98.1.0'
    }
    plugin2[Symbol.for('plugin-meta')] = {
      name: 'plugin2',
      fastify: '98.x'
    }

    fastify.register(plugin)

    fastify.ready((err) => {
      t.assert.ifError(err)
      testDone()
    })

    function plugin (instance, opts, done) {
      done()
    }

    function plugin2 (instance, opts, done) {
      done()
    }
  })

  test('pre', (t, testDone) => {
    t.plan(1)

    const fastify = Fastify()
    Object.defineProperty(fastify, 'version', { value: '99.0.0-pre.1' })

    plugin[Symbol.for('plugin-meta')] = { name: 'plugin', fastify: '^98.x' }

    fastify.register(plugin)

    fastify.ready((err) => {
      t.assert.ifError(err)
      testDone()
    })

    function plugin (instance, opts, done) { done() }
  })

  test('alpha', (t, testDone) => {
    t.plan(1)

    const fastify = Fastify()
    Object.defineProperty(fastify, 'version', { value: '99.0.0-pre.1' })

    plugin[Symbol.for('plugin-meta')] = { name: 'plugin', fastify: '^98.x' }

    fastify.register(plugin)

    fastify.ready((err) => {
      t.assert.ifError(err)
      testDone()
    })

    function plugin (instance, opts, done) { done() }
  })
})

test('hasPlugin method exists as a function', (t) => {
  const fastify = Fastify()
  t.assert.strictEqual(typeof fastify.hasPlugin, 'function')
})

test('hasPlugin returns true if the specified plugin has been registered', async t => {
  t.plan(4)

  const fastify = Fastify()

  function pluginA (fastify, opts, done) {
    t.assert.ok(fastify.hasPlugin('plugin-A'))
    done()
  }
  pluginA[Symbol.for('fastify.display-name')] = 'plugin-A'
  fastify.register(pluginA)

  fastify.register(function pluginB (fastify, opts, done) {
    t.assert.ok(fastify.hasPlugin('pluginB'))
    done()
  })

  fastify.register(function (fastify, opts, done) {
    // one line
    t.assert.ok(fastify.hasPlugin('function (fastify, opts, done) { -- // one line'))
    done()
  })

  await fastify.ready()

  t.assert.ok(fastify.hasPlugin('fastify'))
})

test('hasPlugin returns false if the specified plugin has not been registered', (t) => {
  const fastify = Fastify()
  t.assert.ok(!fastify.hasPlugin('pluginFoo'))
})

test('hasPlugin returns false when using encapsulation', async t => {
  t.plan(25)

  const fastify = Fastify()
  t.after(() => fastify.close())

  fastify.register(function pluginA (fastify, opts, done) {
    t.assert.ok(fastify.hasPlugin('pluginA'))
    t.assert.ok(!fastify.hasPlugin('pluginAA'))
    t.assert.ok(!fastify.hasPlugin('pluginAAA'))
    t.assert.ok(!fastify.hasPlugin('pluginAB'))
    t.assert.ok(!fastify.hasPlugin('pluginB'))

    fastify.register(function pluginAA (fastify, opts, done) {
      t.assert.ok(!fastify.hasPlugin('pluginA'))
      t.assert.ok(fastify.hasPlugin('pluginAA'))
      t.assert.ok(!fastify.hasPlugin('pluginAAA'))
      t.assert.ok(!fastify.hasPlugin('pluginAB'))
      t.assert.ok(!fastify.hasPlugin('pluginB'))

      fastify.register(function pluginAAA (fastify, opts, done) {
        t.assert.ok(!fastify.hasPlugin('pluginA'))
        t.assert.ok(!fastify.hasPlugin('pluginAA'))
        t.assert.ok(fastify.hasPlugin('pluginAAA'))
        t.assert.ok(!fastify.hasPlugin('pluginAB'))
        t.assert.ok(!fastify.hasPlugin('pluginB'))

        done()
      })

      done()
    })

    fastify.register(function pluginAB (fastify, opts, done) {
      t.assert.ok(!fastify.hasPlugin('pluginA'))
      t.assert.ok(!fastify.hasPlugin('pluginAA'))
      t.assert.ok(!fastify.hasPlugin('pluginAAA'))
      t.assert.ok(fastify.hasPlugin('pluginAB'))
      t.assert.ok(!fastify.hasPlugin('pluginB'))

      done()
    })

    done()
  })

  fastify.register(function pluginB (fastify, opts, done) {
    t.assert.ok(!fastify.hasPlugin('pluginA'))
    t.assert.ok(!fastify.hasPlugin('pluginAA'))
    t.assert.ok(!fastify.hasPlugin('pluginAAA'))
    t.assert.ok(!fastify.hasPlugin('pluginAB'))
    t.assert.ok(fastify.hasPlugin('pluginB'))

    done()
  })

  await fastify.ready()
})

test('hasPlugin returns true when using no encapsulation', async t => {
  t.plan(26)

  const fastify = Fastify()

  fastify.register(fp((fastify, opts, done) => {
    t.assert.strictEqual(fastify.pluginName, 'fastify -> plugin-AA')
    t.assert.ok(fastify.hasPlugin('plugin-AA'))
    t.assert.ok(!fastify.hasPlugin('plugin-A'))
    t.assert.ok(!fastify.hasPlugin('plugin-AAA'))
    t.assert.ok(!fastify.hasPlugin('plugin-AB'))
    t.assert.ok(!fastify.hasPlugin('plugin-B'))

    fastify.register(fp((fastify, opts, done) => {
      t.assert.ok(fastify.hasPlugin('plugin-AA'))
      t.assert.ok(fastify.hasPlugin('plugin-A'))
      t.assert.ok(!fastify.hasPlugin('plugin-AAA'))
      t.assert.ok(!fastify.hasPlugin('plugin-AB'))
      t.assert.ok(!fastify.hasPlugin('plugin-B'))

      fastify.register(fp((fastify, opts, done) => {
        t.assert.ok(fastify.hasPlugin('plugin-AA'))
        t.assert.ok(fastify.hasPlugin('plugin-A'))
        t.assert.ok(fastify.hasPlugin('plugin-AAA'))
        t.assert.ok(!fastify.hasPlugin('plugin-AB'))
        t.assert.ok(!fastify.hasPlugin('plugin-B'))

        done()
      }, { name: 'plugin-AAA' }))

      done()
    }, { name: 'plugin-A' }))

    fastify.register(fp((fastify, opts, done) => {
      t.assert.ok(fastify.hasPlugin('plugin-AA'))
      t.assert.ok(fastify.hasPlugin('plugin-A'))
      t.assert.ok(fastify.hasPlugin('plugin-AAA'))
      t.assert.ok(fastify.hasPlugin('plugin-AB'))
      t.assert.ok(!fastify.hasPlugin('plugin-B'))

      done()
    }, { name: 'plugin-AB' }))

    done()
  }, { name: 'plugin-AA' }))

  fastify.register(fp((fastify, opts, done) => {
    t.assert.ok(fastify.hasPlugin('plugin-AA'))
    t.assert.ok(fastify.hasPlugin('plugin-A'))
    t.assert.ok(fastify.hasPlugin('plugin-AAA'))
    t.assert.ok(fastify.hasPlugin('plugin-AB'))
    t.assert.ok(fastify.hasPlugin('plugin-B'))

    done()
  }, { name: 'plugin-B' }))

  await fastify.ready()
})

test('hasPlugin returns true when using encapsulation', async t => {
  t.plan(2)

  const fastify = Fastify()

  const pluginCallback = function (server, options, done) {
    done()
  }
  const pluginName = 'awesome-plugin'
  const plugin = fp(pluginCallback, { name: pluginName })

  fastify.register(plugin)

  fastify.register(async (server) => {
    t.assert.ok(server.hasPlugin(pluginName))
  })

  fastify.register(async function foo (server) {
    server.register(async function bar (server) {
      t.assert.ok(server.hasPlugin(pluginName))
    })
  })

  await fastify.ready()
})

test('registering anonymous plugin with mixed style should throw', async t => {
  t.plan(2)

  const fastify = Fastify()

  const anonymousPlugin = async (app, opts, done) => {
    done()
  }

  fastify.register(anonymousPlugin)

  try {
    await fastify.ready()
    t.fail('should throw')
  } catch (error) {
    t.assert.ok(error instanceof FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER)
    t.assert.strictEqual(error.message, 'The anonymousPlugin plugin being registered mixes async and callback styles. Async plugin should not mix async and callback style.')
  }
})

test('registering named plugin with mixed style should throw', async t => {
  t.plan(2)

  const fastify = Fastify()

  const pluginName = 'error-plugin'
  const errorPlugin = async (app, opts, done) => {
    done()
  }
  const namedPlugin = fp(errorPlugin, { name: pluginName })

  fastify.register(namedPlugin)

  try {
    await fastify.ready()
    t.fail('should throw')
  } catch (error) {
    t.assert.ok(error instanceof FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER)
    t.assert.strictEqual(error.message, 'The error-plugin plugin being registered mixes async and callback styles. Async plugin should not mix async and callback style.')
  }
})
