'use strict'

const { test } = require('tap')
const boot = require('..')

test('boot an empty app', (t) => {
  t.plan(1)
  const app = boot()
  app.on('start', () => {
    t.pass('booted')
  })
})

test('start returns app', (t) => {
  t.plan(1)
  const app = boot({}, { autostart: false })
  app
    .start()
    .ready((err) => {
      t.error(err)
    })
})

test('boot an app with a plugin', (t) => {
  t.plan(4)

  const app = boot()
  let after = false

  app.use(function (server, opts, done) {
    t.equal(server, app, 'the first argument is the server')
    t.same(opts, {}, 'no options')
    t.ok(after, 'delayed execution')
    done()
  })

  after = true

  app.on('start', () => {
    t.pass('booted')
  })
})

test('boot an app with a promisified plugin', (t) => {
  t.plan(4)

  const app = boot()
  let after = false

  app.use(function (server, opts) {
    t.equal(server, app, 'the first argument is the server')
    t.same(opts, {}, 'no options')
    t.ok(after, 'delayed execution')
    return Promise.resolve()
  })

  after = true

  app.on('start', () => {
    t.pass('booted')
  })
})

test('boot an app with a plugin and a callback /1', (t) => {
  t.plan(2)

  const app = boot(() => {
    t.pass('booted')
  })

  app.use(function (server, opts, done) {
    t.pass('plugin loaded')
    done()
  })
})

test('boot an app with a plugin and a callback /2', (t) => {
  t.plan(2)

  const app = boot({}, () => {
    t.pass('booted')
  })

  app.use(function (server, opts, done) {
    t.pass('plugin loaded')
    done()
  })
})

test('boot a plugin with a custom server', (t) => {
  t.plan(4)

  const server = {}
  const app = boot(server)

  app.use(function (s, opts, done) {
    t.equal(s, server, 'the first argument is the server')
    t.same(opts, {}, 'no options')
    done()
  })

  app.onClose(() => {
    t.ok('onClose called')
  })

  app.on('start', () => {
    app.close(() => {
      t.pass('booted')
    })
  })
})

test('custom instance should inherits avvio methods /1', (t) => {
  t.plan(6)

  const server = {}
  const app = boot(server, {})

  server.use(function (s, opts, done) {
    t.equal(s, server, 'the first argument is the server')
    t.same(opts, {}, 'no options')
    done()
  }).after(() => {
    t.ok('after called')
  })

  server.onClose(() => {
    t.ok('onClose called')
  })

  server.ready(() => {
    t.ok('ready called')
  })

  app.on('start', () => {
    server.close(() => {
      t.pass('booted')
    })
  })
})

test('custom instance should inherits avvio methods /2', (t) => {
  t.plan(6)

  const server = {}
  const app = new boot(server, {}) // eslint-disable-line new-cap

  server.use(function (s, opts, done) {
    t.equal(s, server, 'the first argument is the server')
    t.same(opts, {}, 'no options')
    done()
  }).after(() => {
    t.ok('after called')
  })

  server.onClose(() => {
    t.ok('onClose called')
  })

  server.ready(() => {
    t.ok('ready called')
  })

  app.on('start', () => {
    server.close(() => {
      t.pass('booted')
    })
  })
})

test('boot a plugin with options', (t) => {
  t.plan(3)

  const server = {}
  const app = boot(server)
  const myOpts = {
    hello: 'world'
  }

  app.use(function (s, opts, done) {
    t.equal(s, server, 'the first argument is the server')
    t.same(opts, myOpts, 'passed options')
    done()
  }, myOpts)

  app.on('start', () => {
    t.pass('booted')
  })
})

test('boot a plugin with a function that returns the options', (t) => {
  t.plan(4)

  const server = {}
  const app = boot(server)
  const myOpts = {
    hello: 'world'
  }
  const myOptsAsFunc = parent => {
    t.equal(parent, server)
    return parent.myOpts
  }

  app.use(function (s, opts, done) {
    s.myOpts = opts
    done()
  }, myOpts)

  app.use(function (s, opts, done) {
    t.equal(s, server, 'the first argument is the server')
    t.same(opts, myOpts, 'passed options via function accessing parent injected variable')
    done()
  }, myOptsAsFunc)

  app.on('start', () => {
    t.pass('booted')
  })
})

test('throw on non-function use', (t) => {
  t.plan(1)
  const app = boot()
  t.throws(() => {
    app.use({})
  })
})

// https://github.com/mcollina/avvio/issues/20
test('ready and nextTick', (t) => {
  const app = boot()
  process.nextTick(() => {
    app.ready(() => {
      t.end()
    })
  })
})

// https://github.com/mcollina/avvio/issues/20
test('promises and microtask', (t) => {
  const app = boot()
  Promise.resolve()
    .then(() => {
      app.ready(function () {
        t.end()
      })
    })
})

test('always loads nested plugins after the current one', (t) => {
  t.plan(2)

  const server = {}
  const app = boot(server)

  let second = false

  app.use(function (s, opts, done) {
    app.use(function (s, opts, done) {
      second = true
      done()
    })
    t.notOk(second)

    done()
  })

  app.on('start', () => {
    t.ok(second)
  })
})

test('promise long resolve', (t) => {
  t.plan(2)

  const app = boot()

  setTimeout(function () {
    t.throws(() => {
      app.use((s, opts, done) => {
        done()
      })
    }, 'root plugin has already booted')
  })

  app.ready(function (err) {
    t.notOk(err)
  })
})

test('do not autostart', (t) => {
  const app = boot(null, {
    autostart: false
  })
  app.on('start', () => {
    t.fail()
  })
  t.end()
})

test('start with ready', (t) => {
  t.plan(2)

  const app = boot(null, {
    autostart: false
  })

  app.on('start', () => {
    t.pass()
  })

  app.ready(function (err) {
    t.error(err)
  })
})

test('load a plugin after start()', (t) => {
  t.plan(1)

  let startCalled = false
  const app = boot(null, {
    autostart: false
  })

  app.use((s, opts, done) => {
    t.ok(startCalled)
    done()
  })

  // we use a timer because
  // it is more reliable than
  // nextTick and setImmediate
  // this almost always will come
  // after those are completed
  setTimeout(() => {
    app.start()
    startCalled = true
  }, 2)
})

test('booted should be set before ready', (t) => {
  t.plan(2)

  const app = boot()

  app.ready(function (err) {
    t.error(err)
    t.equal(app.booted, true)
  })
})

test('start should be emitted after ready resolves', (t) => {
  t.plan(1)

  const app = boot()
  let ready = false

  app.ready().then(function () {
    ready = true
  })

  app.on('start', function () {
    t.equal(ready, true)
  })
})

test('throws correctly if registering after ready', (t) => {
  t.plan(1)

  const app = boot()

  app.ready(function () {
    t.throws(() => {
      app.use((a, b, done) => done())
    }, 'root plugin has already booted')
  })
})

test('preReady errors must be managed', (t) => {
  t.plan(2)

  const app = boot()

  app.use((f, opts, cb) => {
    cb()
  })

  app.on('preReady', () => {
    throw new Error('boom')
  })

  app.ready(err => {
    t.pass('ready function is called')
    t.equal(err.message, 'boom')
  })
})

test('preReady errors do not override plugin\'s errors', (t) => {
  t.plan(3)

  const app = boot()

  app.use((f, opts, cb) => {
    cb(new Error('baam'))
  })

  app.on('preReady', () => {
    t.pass('preReady is executed')
    throw new Error('boom')
  })

  app.ready(err => {
    t.pass('ready function is called')
    t.equal(err.message, 'baam')
  })
})

test('support faux modules', (t) => {
  t.plan(4)

  const app = boot()
  let after = false

  // Faux modules are modules built with TypeScript
  // or Babel that they export a .default property.
  app.use({
    default: function (server, opts, done) {
      t.equal(server, app, 'the first argument is the server')
      t.same(opts, {}, 'no options')
      t.ok(after, 'delayed execution')
      done()
    }
  })

  after = true

  app.on('start', () => {
    t.pass('booted')
  })
})
