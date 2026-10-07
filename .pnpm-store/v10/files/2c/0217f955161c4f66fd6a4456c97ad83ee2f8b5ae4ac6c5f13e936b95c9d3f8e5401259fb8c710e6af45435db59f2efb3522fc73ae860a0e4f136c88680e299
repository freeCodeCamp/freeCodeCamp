'use strict'

const { test } = require('node:test')
const proxyquire = require('proxyquire')
const fp = require('../plugin')
const Fastify = require('fastify')

const pkg = require('../package.json')

test('fastify-plugin is a function', (t) => {
  t.plan(1)
  t.assert.ok(typeof fp === 'function')
})

test('should return the function with the skip-override Symbol', (t) => {
  t.plan(1)

  function plugin (_fastify, _opts, next) {
    next()
  }

  fp(plugin)
  t.assert.ok(plugin[Symbol.for('skip-override')])
})

test('should support "default" function from babel module', (t) => {
  t.plan(1)

  const plugin = {
    default: () => { }
  }

  try {
    fp(plugin)
    t.assert.ok(true)
  } catch (e) {
    t.assert.strictEqual(e.message, 'fastify-plugin expects a function, instead got a \'object\'')
  }
})

test('should throw if the plugin is not a function', (t) => {
  t.plan(1)

  try {
    fp('plugin')
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.message, 'fastify-plugin expects a function, instead got a \'string\'')
  }
})

test('should check the fastify version', (t) => {
  t.plan(1)

  function plugin (_fastify, _opts, next) {
    next()
  }

  try {
    fp(plugin, { fastify: '>=0.10.0' })
    t.assert.ok(true)
  } catch {
    t.assert.fail()
  }
})

test('should check the fastify version', (t) => {
  t.plan(1)

  function plugin (_fastify, _opts, next) {
    next()
  }

  try {
    fp(plugin, '>=0.10.0')
    t.assert.ok(true)
  } catch {
    t.assert.fail()
  }
})

test('the options object should be an object', (t) => {
  t.plan(2)

  try {
    fp(() => { }, null)
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.message, 'The options object should be an object')
  }

  try {
    fp(() => { }, [])
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.message, 'The options object should be an object')
  }
})

test('should throw if the version number is not a string', (t) => {
  t.plan(1)

  try {
    fp(() => { }, { fastify: 12 })
    t.assert.fail()
  } catch (e) {
    t.assert.strictEqual(e.message, 'fastify-plugin expects a version string, instead got \'number\'')
  }
})

test('Should accept an option object', (t) => {
  t.plan(2)

  const opts = { hello: 'world' }

  function plugin (_fastify, _opts, next) {
    next()
  }

  fp(plugin, opts)

  t.assert.ok(plugin[Symbol.for('skip-override')], 'skip-override symbol should be present')
  t.assert.deepStrictEqual(plugin[Symbol.for('plugin-meta')], opts, 'plugin-meta should match opts')
})

test('Should accept an option object and checks the version', (t) => {
  t.plan(2)

  const opts = { hello: 'world', fastify: '>=0.10.0' }

  function plugin (_fastify, _opts, next) {
    next()
  }

  fp(plugin, opts)
  t.assert.ok(plugin[Symbol.for('skip-override')])
  t.assert.deepStrictEqual(plugin[Symbol.for('plugin-meta')], opts)
})

test('should set anonymous function name to file it was called from with a counter', (t) => {
  const fp = proxyquire('../plugin.js', { stubs: {} })

  const fn = fp((_fastify, _opts, next) => {
    next()
  })

  t.assert.strictEqual(fn[Symbol.for('plugin-meta')].name, 'test-auto-0')
  t.assert.strictEqual(fn[Symbol.for('fastify.display-name')], 'test-auto-0')

  const fn2 = fp((_fastify, _opts, next) => {
    next()
  })

  t.assert.strictEqual(fn2[Symbol.for('plugin-meta')].name, 'test-auto-1')
  t.assert.strictEqual(fn2[Symbol.for('fastify.display-name')], 'test-auto-1')
})

test('should set function name if Error.stackTraceLimit is set to 0', (t) => {
  const stackTraceLimit = Error.stackTraceLimit = 0

  const fp = proxyquire('../plugin.js', { stubs: {} })

  const fn = fp((_fastify, _opts, next) => {
    next()
  })

  t.assert.strictEqual(fn[Symbol.for('plugin-meta')].name, 'test-auto-0')
  t.assert.strictEqual(fn[Symbol.for('fastify.display-name')], 'test-auto-0')

  const fn2 = fp((_fastify, _opts, next) => {
    next()
  })

  t.assert.strictEqual(fn2[Symbol.for('plugin-meta')].name, 'test-auto-1')
  t.assert.strictEqual(fn2[Symbol.for('fastify.display-name')], 'test-auto-1')

  Error.stackTraceLimit = stackTraceLimit
})

test('should set display-name to meta name', (t) => {
  t.plan(2)

  const functionName = 'superDuperSpecialFunction'

  const fn = fp((_fastify, _opts, next) => next(), {
    name: functionName
  })

  t.assert.strictEqual(fn[Symbol.for('plugin-meta')].name, functionName)
  t.assert.strictEqual(fn[Symbol.for('fastify.display-name')], functionName)
})

test('should preserve fastify version in meta', (t) => {
  t.plan(1)

  const opts = { hello: 'world', fastify: '>=0.10.0' }

  const fn = fp((_fastify, _opts, next) => next(), opts)

  t.assert.strictEqual(fn[Symbol.for('plugin-meta')].fastify, '>=0.10.0')
})

test('should check fastify dependency graph - plugin', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.register(fp((_fastify, _opts, next) => next(), {
    fastify: '5.x',
    name: 'plugin1-name'
  }))

  fastify.register(fp((_fastify, _opts, next) => next(), {
    fastify: '5.x',
    name: 'test',
    dependencies: ['plugin1-name', 'plugin2-name']
  }))

  await t.assert.rejects(fastify.ready(), { message: "The dependency 'plugin2-name' of plugin 'test' is not registered" })
})

test('should check fastify dependency graph - decorate', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.decorate('plugin1', fp((_fastify, _opts, next) => next(), {
    fastify: '5.x',
    name: 'plugin1-name'
  }))

  fastify.register(fp((_fastify, _opts, next) => next(), {
    fastify: '5.x',
    name: 'test',
    decorators: { fastify: ['plugin1', 'plugin2'] }
  }))

  await t.assert.rejects(fastify.ready(), { message: "The decorator 'plugin2' required by 'test' is not present in Fastify" })
})

test('should check fastify dependency graph - decorateReply', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.decorateReply('plugin1', fp((_fastify, _opts, next) => next(), {
    fastify: '5.x',
    name: 'plugin1-name'
  }))

  fastify.register(fp((_fastify, _opts, next) => next(), {
    fastify: '5.x',
    name: 'test',
    decorators: { reply: ['plugin1', 'plugin2'] }
  }))

  await t.assert.rejects(fastify.ready(), { message: "The decorator 'plugin2' required by 'test' is not present in Reply" })
})

test('should accept an option to encapsulate', async (t) => {
  t.plan(3)

  const fastify = Fastify()

  fastify.register(fp((fastify, _opts, next) => {
    fastify.decorate('accessible', true)
    next()
  }, {
    name: 'accessible-plugin'
  }))

  fastify.register(fp((fastify, _opts, next) => {
    fastify.decorate('alsoAccessible', true)
    next()
  }, {
    name: 'accessible-plugin2',
    encapsulate: false
  }))

  fastify.register(fp((fastify, _opts, next) => {
    fastify.decorate('encapsulated', true)
    next()
  }, {
    name: 'encapsulated-plugin',
    encapsulate: true
  }))

  await fastify.ready()

  t.assert.ok(fastify.hasDecorator('accessible'))
  t.assert.ok(fastify.hasDecorator('alsoAccessible'))
  t.assert.ok(!fastify.hasDecorator('encapsulated'))
})

test('should check dependencies when encapsulated', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.register(fp((_fastify, _opts, next) => next(), {
    name: 'test',
    dependencies: ['missing-dependency-name'],
    encapsulate: true
  }))

  await t.assert.rejects(fastify.ready(), { message: "The dependency 'missing-dependency-name' of plugin 'test' is not registered" })
})

test(
  'should check version when encapsulated',
  { skip: /\d-.+/.test(pkg.devDependencies.fastify) },
  async (t) => {
    t.plan(1)
    const fastify = Fastify()

    fastify.register(fp((_fastify, _opts, next) => next(), {
      name: 'test',
      fastify: '<=2.10.0',
      encapsulate: true
    }))

    await t.assert.rejects(fastify.ready(), { message: /fastify-plugin: test - expected '<=2.10.0' fastify version, '\d.\d+.\d+' is installed/ })
  }
)

test('should check decorators when encapsulated', async (t) => {
  t.plan(1)
  const fastify = Fastify()

  fastify.decorate('plugin1', 'foo')

  fastify.register(fp((_fastify, _opts, next) => next(), {
    fastify: '5.x',
    name: 'test',
    encapsulate: true,
    decorators: { fastify: ['plugin1', 'plugin2'] }
  }))

  await t.assert.rejects(fastify.ready(), { message: "The decorator 'plugin2' required by 'test' is not present in Fastify" })
})

test('plugin name when encapsulated', async (t) => {
  t.plan(6)
  const fastify = Fastify()

  fastify.register(function plugin (_instance, _opts, next) {
    next()
  })

  fastify.register(fp(getFn('hello'), {
    fastify: '5.x',
    name: 'hello',
    encapsulate: true
  }))

  fastify.register(function plugin (fastify, _opts, next) {
    fastify.register(fp(getFn('deep'), {
      fastify: '5.x',
      name: 'deep',
      encapsulate: true
    }))

    fastify.register(fp(function genericPlugin (fastify, _opts, next) {
      t.assert.strictEqual(fastify.pluginName, 'deep-deep', 'should be deep-deep')

      fastify.register(fp(getFn('deep-deep-deep'), {
        fastify: '5.x',
        name: 'deep-deep-deep',
        encapsulate: true
      }))

      fastify.register(fp(getFn('deep-deep -> not-encapsulated-2'), {
        fastify: '5.x',
        name: 'not-encapsulated-2'
      }))

      next()
    }, {
      fastify: '5.x',
      name: 'deep-deep',
      encapsulate: true
    }))

    fastify.register(fp(getFn('plugin -> not-encapsulated'), {
      fastify: '5.x',
      name: 'not-encapsulated'
    }))

    next()
  })

  await fastify.ready()

  function getFn (expectedName) {
    return function genericPlugin (fastify, _opts, next) {
      t.assert.strictEqual(fastify.pluginName, expectedName, `should be ${expectedName}`)
      next()
    }
  }
})
