'use strict'

const { test } = require('tap')
const boot = require('..')
const { AVV_ERR_CALLBACK_NOT_FN } = require('../lib/errors')

test('boot an app with a plugin', (t) => {
  t.plan(4)

  const app = boot()
  let last = false

  app.use(function (server, opts, done) {
    app.onClose(() => {
      t.ok('onClose called')
      t.notOk(last)
      last = true
    })
    done()
  })

  app.on('start', () => {
    app.close(() => {
      t.ok(last)
      t.pass('Closed in the correct order')
    })
  })
})

test('onClose arguments', (t) => {
  t.plan(5)

  const app = boot()

  app.use(function (server, opts, next) {
    server.onClose((instance, done) => {
      t.ok('called')
      t.equal(server, instance)
      done()
    })
    next()
  })

  app.use(function (server, opts, next) {
    server.onClose((instance) => {
      t.ok('called')
      t.equal(server, instance)
    })
    next()
  })

  app.on('start', () => {
    app.close(() => {
      t.pass('Closed in the correct order')
    })
  })
})

test('onClose arguments - fastify encapsulation test case', (t) => {
  t.plan(5)

  const server = { my: 'server' }
  const app = boot(server)

  app.override = function (s, fn, opts) {
    s = Object.create(s)
    return s
  }

  app.use(function (instance, opts, next) {
    instance.test = true
    instance.onClose((i, done) => {
      t.ok(i.test)
      done()
    })
    next()
  })

  app.use(function (instance, opts, next) {
    t.notOk(instance.test)
    instance.onClose((i, done) => {
      t.notOk(i.test)
      done()
    })
    next()
  })

  app.on('start', () => {
    t.notOk(app.test)
    app.close(() => {
      t.pass('Closed in the correct order')
    })
  })
})

test('onClose arguments - fastify encapsulation test case / 2', (t) => {
  t.plan(5)

  const server = { my: 'server' }
  const app = boot(server)

  app.override = function (s, fn, opts) {
    s = Object.create(s)
    return s
  }

  server.use(function (instance, opts, next) {
    instance.test = true
    instance.onClose((i, done) => {
      t.ok(i.test)
      done()
    })
    next()
  })

  server.use(function (instance, opts, next) {
    t.notOk(instance.test)
    instance.onClose((i, done) => {
      t.notOk(i.test)
      done()
    })
    next()
  })

  app.on('start', () => {
    t.notOk(server.test)
    try {
      server.close()
      t.pass()
    } catch (err) {
      t.fail(err)
    }
  })
})

test('onClose arguments - encapsulation test case no server', (t) => {
  t.plan(5)

  const app = boot()

  app.override = function (s, fn, opts) {
    s = Object.create(s)
    return s
  }

  app.use(function (instance, opts, next) {
    instance.test = true
    instance.onClose((i, done) => {
      t.notOk(i.test)
      done()
    })
    next()
  })

  app.use(function (instance, opts, next) {
    t.notOk(instance.test)
    instance.onClose((i) => {
      t.notOk(i.test)
    })
    next()
  })

  app.on('start', () => {
    t.notOk(app.test)
    app.close(() => {
      t.pass('Closed in the correct order')
    })
  })
})

test('onClose should handle errors', (t) => {
  t.plan(3)

  const app = boot()

  app.use(function (server, opts, done) {
    app.onClose((instance, done) => {
      t.ok('called')
      done(new Error('some error'))
    })
    done()
  })

  app.on('start', () => {
    app.close(err => {
      t.equal(err.message, 'some error')
      t.pass('Closed in the correct order')
    })
  })
})

test('#54 close handlers should receive same parameters when queue is not empty', (t) => {
  t.plan(6)

  const context = { test: true }
  const app = boot(context)

  app.use(function (server, opts, done) {
    done()
  })
  app.on('start', () => {
    app.close((err, done) => {
      t.equal(err, null)
      t.pass('Closed in the correct order')
      setImmediate(done)
    })
    app.close(err => {
      t.equal(err, null)
      t.pass('Closed in the correct order')
    })
    app.close(err => {
      t.equal(err, null)
      t.pass('Closed in the correct order')
    })
  })
})

test('onClose should handle errors / 2', (t) => {
  t.plan(4)

  const app = boot()

  app.onClose((instance, done) => {
    t.ok('called')
    done(new Error('some error'))
  })

  app.use(function (server, opts, done) {
    app.onClose((instance, done) => {
      t.ok('called')
      done()
    })
    done()
  })

  app.on('start', () => {
    app.close(err => {
      t.equal(err.message, 'some error')
      t.pass('Closed in the correct order')
    })
  })
})

test('close arguments', (t) => {
  t.plan(4)

  const app = boot()

  app.use(function (server, opts, done) {
    app.onClose((instance, done) => {
      t.ok('called')
      done()
    })
    done()
  })

  app.on('start', () => {
    app.close((err, instance, done) => {
      t.error(err)
      t.equal(instance, app)
      done()
      t.pass('Closed in the correct order')
    })
  })
})

test('close event', (t) => {
  t.plan(3)

  const app = boot()
  let last = false

  app.on('start', () => {
    app.close(() => {
      t.notOk(last)
      last = true
    })
  })

  app.on('close', () => {
    t.ok(last)
    t.pass('event fired')
  })
})

test('close order', (t) => {
  t.plan(5)

  const app = boot()
  const order = [1, 2, 3, 4]

  app.use(function (server, opts, done) {
    app.onClose(() => {
      t.equal(order.shift(), 3)
    })

    app.use(function (server, opts, done) {
      app.onClose(() => {
        t.equal(order.shift(), 2)
      })
      done()
    })
    done()
  })

  app.use(function (server, opts, done) {
    app.onClose(() => {
      t.equal(order.shift(), 1)
    })
    done()
  })

  app.on('start', () => {
    app.close(() => {
      t.equal(order.shift(), 4)
      t.pass('Closed in the correct order')
    })
  })
})

test('close without a cb', (t) => {
  t.plan(1)

  const app = boot()

  app.onClose((instance, done) => {
    t.ok('called')
    done()
  })

  app.close()
})

test('onClose with 0 parameters', (t) => {
  t.plan(4)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (instance, opts, next) {
    instance.onClose(function () {
      t.ok('called')
      t.equal(arguments.length, 0)
    })
    next()
  })

  app.close(err => {
    t.error(err)
    t.pass('Closed')
  })
})

test('onClose with 1 parameter', (t) => {
  t.plan(3)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (instance, opts, next) {
    instance.onClose(function (context) {
      t.equal(arguments.length, 1)
    })
    next()
  })

  app.close(err => {
    t.error(err)
    t.pass('Closed')
  })
})

test('close passing not a function', (t) => {
  t.plan(1)

  const app = boot()

  app.onClose((instance, done) => {
    t.ok('called')
    done()
  })

  t.throws(() => app.close({}), { message: 'not a function' })
})

test('close passing not a function', (t) => {
  t.plan(1)

  const app = boot()

  app.onClose((instance, done) => {
    t.ok('called')
    done()
  })

  t.throws(() => app.close({}), { message: 'not a function' })
})

test('close passing not a function when wrapping', (t) => {
  t.plan(1)

  const app = {}
  boot(app)

  app.onClose((instance, done) => {
    t.ok('called')
    done()
  })

  t.throws(() => app.close({}), { message: 'not a function' })
})

test('close should trigger ready()', (t) => {
  t.plan(2)

  const app = boot(null, {
    autostart: false
  })

  app.on('start', () => {
    // this will be emitted after the
    // callback in close() is fired
    t.pass('started')
  })

  app.close(() => {
    t.pass('closed')
  })
})

test('close without a cb returns a promise', (t) => {
  t.plan(1)

  const app = boot()
  app.close().then(() => {
    t.pass('promise resolves')
  })
})

test('close without a cb returns a promise when attaching to a server', (t) => {
  t.plan(1)

  const server = {}
  boot(server)
  server.close().then(() => {
    t.pass('promise resolves')
  })
})

test('close with async onClose handlers', t => {
  t.plan(7)

  const app = boot()
  const order = [1, 2, 3, 4, 5, 6]

  app.onClose(() => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 5)
    })
  })

  app.onClose(() => {
    t.equal(order.shift(), 4)
  })

  app.onClose(instance => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 3)
    })
  })

  app.onClose(async instance => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 2)
    })
  })

  app.onClose(async () => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 1)
    })
  })

  app.on('start', () => {
    app.close(() => {
      t.equal(order.shift(), 6)
      t.pass('Closed in the correct order')
    })
  })
})

test('onClose callback must be a function', (t) => {
  t.plan(1)

  const app = boot()

  app.use(function (server, opts, done) {
    t.throws(() => app.onClose({}), new AVV_ERR_CALLBACK_NOT_FN('onClose', 'object'))
    done()
  })
})

test('close custom server with async onClose handlers', t => {
  t.plan(7)

  const server = {}
  const app = boot(server)
  const order = [1, 2, 3, 4, 5, 6]

  server.onClose(() => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 5)
    })
  })

  server.onClose(() => {
    t.equal(order.shift(), 4)
  })

  server.onClose(instance => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 3)
    })
  })

  server.onClose(async instance => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 2)
    })
  })

  server.onClose(async () => {
    return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
      t.equal(order.shift(), 1)
    })
  })

  app.on('start', () => {
    app.close(() => {
      t.equal(order.shift(), 6)
      t.pass('Closed in the correct order')
    })
  })
})
