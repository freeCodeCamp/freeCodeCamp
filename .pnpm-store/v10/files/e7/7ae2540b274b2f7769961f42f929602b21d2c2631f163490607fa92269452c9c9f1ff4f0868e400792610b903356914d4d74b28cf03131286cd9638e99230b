'use strict'

const { test } = require('tap')
const boot = require('..')

test('boot a plugin and then execute a call after that', (t) => {
  t.plan(5)

  const app = boot()
  let pluginLoaded = false
  let afterCalled = false

  app.use(function (s, opts, done) {
    t.notOk(afterCalled, 'after not called')
    pluginLoaded = true
    done()
  })

  app.after(function (err, cb) {
    t.error(err)
    t.ok(pluginLoaded, 'afterred!')
    afterCalled = true
    cb()
  })

  app.on('start', () => {
    t.ok(afterCalled, 'after called')
    t.ok(pluginLoaded, 'plugin loaded')
  })
})

test('after without a done callback', (t) => {
  t.plan(5)

  const app = boot()
  let pluginLoaded = false
  let afterCalled = false

  app.use(function (s, opts, done) {
    t.notOk(afterCalled, 'after not called')
    pluginLoaded = true
    done()
  })

  app.after(function (err) {
    t.error(err)
    t.ok(pluginLoaded, 'afterred!')
    afterCalled = true
  })

  app.on('start', () => {
    t.ok(afterCalled, 'after called')
    t.ok(pluginLoaded, 'plugin loaded')
  })
})

test('verify when a afterred call happens', (t) => {
  t.plan(3)

  const app = boot()

  app.use(function (s, opts, done) {
    done()
  })

  app.after(function (err, cb) {
    t.error(err)
    t.pass('afterred finished')
    cb()
  })

  app.on('start', () => {
    t.pass('booted')
  })
})

test('internal after', (t) => {
  t.plan(18)

  const app = boot()
  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false
  let afterCalled = false

  app.use(first)
  app.use(third)

  function first (s, opts, done) {
    t.notOk(firstLoaded, 'first is not loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    firstLoaded = true
    s.use(second)
    s.after(function (err, cb) {
      t.error(err)
      t.notOk(afterCalled, 'after was not called')
      afterCalled = true
      cb()
    })
    done()
  }

  function second (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    t.notOk(afterCalled, 'after was not called')
    secondLoaded = true
    done()
  }

  function third (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.ok(afterCalled, 'after was called')
    t.notOk(thirdLoaded, 'third is not loaded')
    thirdLoaded = true
    done()
  }

  app.on('start', () => {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.ok(thirdLoaded, 'third is loaded')
    t.ok(afterCalled, 'after was called')
    t.pass('booted')
  })
})

test('ready adds at the end of the queue', (t) => {
  t.plan(14)

  const app = boot()
  let pluginLoaded = false
  let afterCalled = false
  let readyCalled = false

  app.ready(function (err, cb) {
    t.error(err)
    t.ok(pluginLoaded, 'after the plugin')
    t.ok(afterCalled, 'after after')
    readyCalled = true
    process.nextTick(cb)
  })

  app.use(function (s, opts, done) {
    t.notOk(afterCalled, 'after not called')
    t.notOk(readyCalled, 'ready not called')
    pluginLoaded = true

    app.ready(function (err) {
      t.error(err)
      t.ok(readyCalled, 'after the first ready')
      t.ok(afterCalled, 'after the after callback')
    })

    done()
  })

  app.after(function (err, cb) {
    t.error(err)
    t.ok(pluginLoaded, 'executing after!')
    t.notOk(readyCalled, 'ready not called')
    afterCalled = true
    cb()
  })

  app.on('start', () => {
    t.ok(afterCalled, 'after called')
    t.ok(pluginLoaded, 'plugin loaded')
    t.ok(readyCalled, 'ready called')
  })
})

test('if the after/ready callback has two parameters, the first one must be the context', (t) => {
  t.plan(4)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done()
  })

  app.after(function (err, context, cb) {
    t.error(err)
    t.equal(server, context)
    cb()
  })

  app.ready(function (err, context, cb) {
    t.error(err)
    t.equal(server, context)
    cb()
  })
})

test('if the after/ready async, the returns must be the context generated', (t) => {
  t.plan(3)

  const server = { my: 'server', index: 0 }
  const app = boot(server)
  app.override = function (old) {
    return { ...old, index: old.index + 1 }
  }

  app.use(function (s, opts, done) {
    s.use(function (s, opts, done) {
      s.ready().then(itself => t.same(itself, s, 'deep deep'))
      done()
    })
    s.ready().then(itself => t.same(itself, s, 'deep'))
    done()
  })

  app.ready().then(itself => t.same(itself, server, 'outer'))
})

test('if the after/ready callback, the returns must be the context generated', (t) => {
  t.plan(3)

  const server = { my: 'server', index: 0 }
  const app = boot(server)
  app.override = function (old) {
    return { ...old, index: old.index + 1 }
  }

  app.use(function (s, opts, done) {
    s.use(function (s, opts, done) {
      s.ready((_, itself, done) => {
        t.same(itself, s, 'deep deep')
        done()
      })
      done()
    })
    s.ready((_, itself, done) => {
      t.same(itself, s, 'deep')
      done()
    })
    done()
  })

  app.ready((_, itself, done) => {
    t.same(itself, server, 'outer')
    done()
  })
})

test('error should come in the first after - one parameter', (t) => {
  t.plan(3)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  })

  app.after(function (err) {
    t.ok(err instanceof Error)
    t.equal(err.message, 'err')
  })

  app.ready(function (err) {
    t.error(err)
  })
})

test('error should come in the first after - two parameters', (t) => {
  t.plan(3)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  })

  app.after(function (err, cb) {
    t.ok(err instanceof Error)
    t.equal(err.message, 'err')
    cb()
  })

  app.ready(function (err) {
    t.error(err)
  })
})

test('error should come in the first after - three parameter', (t) => {
  t.plan(4)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  })

  app.after(function (err, context, cb) {
    t.ok(err instanceof Error)
    t.equal(err.message, 'err')
    t.equal(context, server)
    cb()
  })

  app.ready(function (err) {
    t.error(err)
  })
})

test('error should come in the first ready - one parameter', (t) => {
  t.plan(2)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  })

  app.ready(function (err) {
    t.ok(err instanceof Error)
    t.equal(err.message, 'err')
  })
})

test('error should come in the first ready - two parameters', (t) => {
  t.plan(2)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  })

  app.ready(function (err, cb) {
    t.ok(err instanceof Error)
    t.equal(err.message, 'err')
    cb()
  })
})

test('error should come in the first ready - three parameters', (t) => {
  t.plan(3)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  })

  app.ready(function (err, context, cb) {
    t.ok(err instanceof Error)
    t.equal(err.message, 'err')
    t.equal(context, server)
    cb()
  })
})

test('if `use` has a callback with more then one parameter, the error must not reach ready', (t) => {
  t.plan(1)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  })

  app.ready(function (err) {
    t.ok(err)
  })
})

test('if `use` has a callback without parameters, the error must reach ready', (t) => {
  t.plan(1)

  const server = { my: 'server' }
  const app = boot(server)

  app.use(function (s, opts, done) {
    done(new Error('err'))
  }, () => {})

  app.ready(function (err) {
    t.ok(err)
  })
})

test('should pass the errors from after to ready', (t) => {
  t.plan(6)

  const server = {}
  const app = boot(server, {})

  server.use(function (s, opts, done) {
    t.equal(s, server, 'the first argument is the server')
    t.same(opts, {}, 'no options')
    done()
  }).after((err, done) => {
    t.error(err)
    done(new Error('some error'))
  })

  server.onClose(() => {
    t.ok('onClose called')
  })

  server.ready(err => {
    t.equal(err.message, 'some error')
  })

  app.on('start', () => {
    server.close(() => {
      t.pass('booted')
    })
  })
})

test('after no encapsulation', t => {
  t.plan(4)

  const app = boot()
  app.override = function (s, fn, opts) {
    s = Object.create(s)
    return s
  }

  app.use(function (instance, opts, next) {
    instance.test = true
    instance.after(function (err, i, done) {
      t.error(err)
      t.notOk(i.test)
      done()
    })
    next()
  })

  app.after(function (err, i, done) {
    t.error(err)
    t.notOk(i.test)
    done()
  })
})

test('ready no encapsulation', t => {
  t.plan(4)

  const app = boot()
  app.override = function (s, fn, opts) {
    s = Object.create(s)
    return s
  }

  app.use(function (instance, opts, next) {
    instance.test = true
    instance.ready(function (err, i, done) {
      t.error(err)
      t.notOk(i.test)
      done()
    })
    next()
  })

  app.ready(function (err, i, done) {
    t.error(err)
    t.notOk(i.test)
    done()
  })
})

test('after encapsulation with a server', t => {
  t.plan(4)

  const server = { my: 'server' }
  const app = boot(server)
  app.override = function (s, fn, opts) {
    s = Object.create(s)
    return s
  }

  app.use(function (instance, opts, next) {
    instance.test = true
    instance.after(function (err, i, done) {
      t.error(err)
      t.ok(i.test)
      done()
    })
    next()
  })

  app.after(function (err, i, done) {
    t.error(err)
    t.notOk(i.test)
    done()
  })
})

test('ready encapsulation with a server', t => {
  t.plan(4)

  const server = { my: 'server' }
  const app = boot(server)
  app.override = function (s, fn, opts) {
    s = Object.create(s)
    return s
  }

  app.use(function (instance, opts, next) {
    instance.test = true
    instance.ready(function (err, i, done) {
      t.error(err)
      t.ok(i.test)
      done()
    })
    next()
  })

  app.ready(function (err, i, done) {
    t.error(err)
    t.notOk(i.test)
    done()
  })
})

test('after should passthrough the errors', (t) => {
  t.plan(5)

  const app = boot()
  let pluginLoaded = false
  let afterCalled = false

  app.use(function (s, opts, done) {
    t.notOk(afterCalled, 'after not called')
    pluginLoaded = true
    done(new Error('kaboom'))
  })

  app.after(function () {
    t.ok(pluginLoaded, 'afterred!')
    afterCalled = true
  })

  app.ready(function (err) {
    t.ok(err)
    t.ok(afterCalled, 'after called')
    t.ok(pluginLoaded, 'plugin loaded')
  })
})

test('stop loading plugins if it errors', (t) => {
  t.plan(2)

  const app = boot()

  app.use(function first (server, opts, done) {
    t.pass('first called')
    done(new Error('kaboom'))
  })

  app.use(function second (server, opts, done) {
    t.fail('this should never be called')
  })

  app.ready((err) => {
    t.equal(err.message, 'kaboom')
  })
})

test('keep loading if there is an .after', (t) => {
  t.plan(4)

  const app = boot()

  app.use(function first (server, opts, done) {
    t.pass('first called')
    done(new Error('kaboom'))
  })

  app.after(function (err) {
    t.equal(err.message, 'kaboom')
  })

  app.use(function second (server, opts, done) {
    t.pass('second called')
    done()
  })

  app.ready((err) => {
    t.error(err)
  })
})

test('do not load nested plugin if parent errors', (t) => {
  t.plan(4)

  const app = boot()

  app.use(function first (server, opts, done) {
    t.pass('first called')

    server.use(function second (_, opts, done) {
      t.fail('this should never be called')
    })

    done(new Error('kaboom'))
  })

  app.after(function (err) {
    t.equal(err.message, 'kaboom')
  })

  app.use(function third (server, opts, done) {
    t.pass('third called')
    done()
  })

  app.ready((err) => {
    t.error(err)
  })
})

test('.after nested', (t) => {
  t.plan(4)

  const app = boot()

  app.use(function outer (app, opts, done) {
    app.use(function first (app, opts, done) {
      t.pass('first called')
      done(new Error('kaboom'))
    })

    app.after(function (err) {
      t.equal(err.message, 'kaboom')
    })

    app.use(function second (app, opts, done) {
      t.pass('second called')
      done()
    })

    done()
  })

  app.ready((err) => {
    t.error(err)
  })
})

test('nested error', (t) => {
  t.plan(4)

  const app = boot()

  app.use(function outer (app, opts, done) {
    app.use(function first (app, opts, done) {
      t.pass('first called')
      done(new Error('kaboom'))
    })

    app.use(function second (app, opts, done) {
      t.fail('this should never be called')
    })

    done()
  })

  app.after(function (err) {
    t.equal(err.message, 'kaboom')
  })

  app.use(function third (server, opts, done) {
    t.pass('third called')
    done()
  })

  app.ready((err) => {
    t.error(err)
  })
})

test('preReady event', (t) => {
  t.plan(4)

  const app = boot()
  const order = [1, 2]

  app.use(function first (server, opts, done) {
    t.pass('first called')
    done()
  })

  app.use(function second (server, opts, done) {
    t.pass('second called')
    done()
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 1)
  })

  app.ready(() => {
    t.equal(order.shift(), 2)
  })
})

test('preReady event (multiple)', (t) => {
  t.plan(6)

  const app = boot()
  const order = [1, 2, 3, 4]

  app.use(function first (server, opts, done) {
    t.pass('first called')
    done()
  })

  app.use(function second (server, opts, done) {
    t.pass('second called')
    done()
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 1)
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 2)
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 3)
  })

  app.ready(() => {
    t.equal(order.shift(), 4)
  })
})

test('preReady event (nested)', (t) => {
  t.plan(6)

  const app = boot()
  const order = [1, 2, 3, 4]

  app.use(function first (server, opts, done) {
    t.pass('first called')
    done()
  })

  app.use(function second (server, opts, done) {
    t.pass('second called')

    server.on('preReady', () => {
      t.equal(order.shift(), 3)
    })

    done()
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 1)
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 2)
  })

  app.ready(() => {
    t.equal(order.shift(), 4)
  })
})

test('preReady event (errored)', (t) => {
  t.plan(5)

  const app = boot()
  const order = [1, 2, 3]

  app.use(function first (server, opts, done) {
    t.pass('first called')
    done(new Error('kaboom'))
  })

  app.use(function second (server, opts, done) {
    t.fail('We should not be here')
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 1)
  })

  app.on('preReady', () => {
    t.equal(order.shift(), 2)
  })

  app.ready((err) => {
    t.ok(err)
    t.equal(order.shift(), 3)
  })
})

test('after return self', (t) => {
  t.plan(6)

  const app = boot()
  let pluginLoaded = false
  let afterCalled = false
  let second = false

  app.use(function (s, opts, done) {
    t.notOk(afterCalled, 'after not called')
    pluginLoaded = true
    done()
  })

  app.after(function () {
    t.ok(pluginLoaded, 'afterred!')
    afterCalled = true
    // happens with after(() => app.use(..))
    return app
  })

  app.use(function (s, opts, done) {
    t.ok(afterCalled, 'after called')
    second = true
    done()
  })

  app.on('start', () => {
    t.ok(afterCalled, 'after called')
    t.ok(pluginLoaded, 'plugin loaded')
    t.ok(second, 'second plugin loaded')
  })
})

test('after 1 param swallows errors with server and timeout', (t) => {
  t.plan(3)

  const server = {}
  boot(server, { autostart: false, timeout: 1000 })

  server.use(function first (server, opts, done) {
    t.pass('first called')
    done(new Error('kaboom'))
  })

  server.use(function second (server, opts, done) {
    t.fail('We should not be here')
  })

  server.after(function (err) {
    t.ok(err)
  })

  server.ready(function (err) {
    t.error(err)
  })
})
