'use strict'

const { test } = require('tap')
const boot = require('..')
const { promisify } = require('node:util')
const sleep = promisify(setTimeout)
const fs = require('node:fs').promises
const path = require('node:path')

test('await after - nested plugins with same tick callbacks', async (t) => {
  const app = {}
  boot(app)

  let secondLoaded = false

  app.use(async (app) => {
    t.pass('plugin init')
    app.use(async () => {
      t.pass('plugin2 init')
      await sleep(1)
      secondLoaded = true
    })
  })
  await app.after()
  t.pass('reachable')
  t.equal(secondLoaded, true)

  await app.ready()
  t.pass('reachable')
})

test('await after without server', async (t) => {
  const app = boot()

  let secondLoaded = false

  app.use(async (app) => {
    t.pass('plugin init')
    app.use(async () => {
      t.pass('plugin2 init')
      await sleep(1)
      secondLoaded = true
    })
  })
  await app.after()
  t.pass('reachable')
  t.equal(secondLoaded, true)

  await app.ready()
  t.pass('reachable')
})

test('await after with cb functions', async (t) => {
  const app = boot()
  let secondLoaded = false
  let record = ''

  app.use(async (app) => {
    t.pass('plugin init')
    record += 'plugin|'
    app.use(async () => {
      t.pass('plugin2 init')
      record += 'plugin2|'
      await sleep(1)
      secondLoaded = true
    })
  })
  await app.after(() => {
    record += 'after|'
  })
  t.pass('reachable')
  t.equal(secondLoaded, true)
  record += 'ready'
  await app.ready()
  t.pass('reachable')
  t.equal(record, 'plugin|plugin2|after|ready')
})

test('await after - nested plugins with future tick callbacks', async (t) => {
  const app = {}
  boot(app)

  t.plan(4)

  app.use((f, opts, cb) => {
    t.pass('plugin init')
    app.use((f, opts, cb) => {
      t.pass('plugin2 init')
      setImmediate(cb)
    })
    setImmediate(cb)
  })
  await app.after()
  t.pass('reachable')

  await app.ready()
  t.pass('reachable')
})

test('await after - nested async function plugins', async (t) => {
  const app = {}
  boot(app)

  t.plan(5)

  app.use(async (f, opts) => {
    t.pass('plugin init')
    await app.use(async (f, opts) => {
      t.pass('plugin2 init')
    })
    t.pass('reachable')
  })
  await app.after()
  t.pass('reachable')

  await app.ready()
  t.pass('reachable')
})

test('await after - promise resolves to undefined', async (t) => {
  const app = {}
  boot(app)

  t.plan(4)

  app.use(async (f, opts, cb) => {
    app.use((f, opts, cb) => {
      t.pass('plugin init')
      cb()
    })
    const instance = await app.after()
    t.equal(instance, undefined)
  })
  t.pass('reachable')

  await app.ready()
  t.pass('reachable')
})

test('await after - promise returning function plugins + promise chaining', async (t) => {
  const app = {}
  boot(app)

  t.plan(6)

  app.use((f, opts) => {
    t.pass('plugin init')
    return app.use((f, opts) => {
      t.pass('plugin2 init')
      return Promise.resolve()
    }).then((f2) => {
      t.equal(f2, f)
      return 'test'
    }).then((val) => {
      t.equal(val, 'test')
    })
  })
  await app.after()
  t.pass('reachable')

  await app.ready()
  t.pass('reachable')
})

test('await after - error handling, async throw', async (t) => {
  const app = {}
  boot(app)

  t.plan(2)

  const e = new Error('kaboom')

  app.use(async (f, opts) => {
    throw Error('kaboom')
  })

  await t.rejects(app.after(), e)

  await t.rejects(() => app.ready(), Error('kaboom'))
})

test('await after - error handling, async throw, nested', async (t) => {
  const app = {}
  boot(app)

  t.plan(2)

  const e = new Error('kaboom')

  app.use(async (f, opts) => {
    app.use(async (f, opts) => {
      throw e
    })
  })

  await t.rejects(app.after())
  await t.rejects(() => app.ready(), e)
})

test('await after - error handling, same tick cb err', async (t) => {
  const app = {}
  boot(app)

  t.plan(2)

  app.use((f, opts, cb) => {
    cb(Error('kaboom'))
  })
  await t.rejects(app.after())
  await t.rejects(app.ready(), Error('kaboom'))
})

test('await after - error handling, same tick cb err, nested', async (t) => {
  const app = {}
  boot(app)

  t.plan(2)

  app.use((f, opts, cb) => {
    app.use((f, opts, cb) => {
      cb(Error('kaboom'))
    })
    cb()
  })

  await t.rejects(app.after())
  await t.rejects(app.ready(), Error('kaboom'))
})

test('await after - error handling, future tick cb err', async (t) => {
  const app = {}
  boot(app)

  t.plan(2)

  app.use((f, opts, cb) => {
    setImmediate(() => { cb(Error('kaboom')) })
  })

  await t.rejects(app.after())
  await t.rejects(app.ready(), Error('kaboom'))
})

test('await after - error handling, future tick cb err, nested', async (t) => {
  const app = {}
  boot(app)

  t.plan(2)

  app.use((f, opts, cb) => {
    app.use((f, opts, cb) => {
      setImmediate(() => { cb(Error('kaboom')) })
    })
    cb()
  })
  await t.rejects(app.after(), Error('kaboom'))
  await t.rejects(app.ready(), Error('kaboom'))
})

test('await after complex scenario', async (t) => {
  const app = {}
  boot(app)
  t.plan(16)

  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false
  let fourthLoaded = false

  app.use(first)
  await app.after()
  t.ok(firstLoaded, 'first is loaded')
  t.notOk(secondLoaded, 'second is not loaded')
  t.notOk(thirdLoaded, 'third is not loaded')
  t.notOk(fourthLoaded, 'fourth is not loaded')
  app.use(second)
  t.ok(firstLoaded, 'first is loaded')
  t.notOk(secondLoaded, 'second is not loaded')
  t.notOk(thirdLoaded, 'third is not loaded')
  t.notOk(fourthLoaded, 'fourth is not loaded')
  app.use(third)
  await app.after()
  t.ok(firstLoaded, 'first is loaded')
  t.ok(secondLoaded, 'second is loaded')
  t.ok(thirdLoaded, 'third is loaded')
  t.ok(fourthLoaded, 'fourth is loaded')
  await app.ready()
  t.ok(firstLoaded, 'first is loaded')
  t.ok(secondLoaded, 'second is loaded')
  t.ok(thirdLoaded, 'third is loaded')
  t.ok(fourthLoaded, 'fourth is loaded')

  async function first () {
    firstLoaded = true
  }

  async function second () {
    secondLoaded = true
  }

  async function third (app) {
    thirdLoaded = true
    app.use(fourth)
  }

  async function fourth () {
    fourthLoaded = true
  }
})

test('without autostart and sync/async plugin mix', async (t) => {
  const app = {}
  boot(app, { autostart: false })
  t.plan(21)

  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false
  let fourthLoaded = false

  app.use(first)
  await app.after()
  t.ok(firstLoaded, 'first is loaded')
  t.notOk(secondLoaded, 'second is not loaded')
  t.notOk(thirdLoaded, 'third is not loaded')
  t.notOk(fourthLoaded, 'fourth is not loaded')

  app.use(second)
  await app.after()
  t.ok(firstLoaded, 'first is loaded')
  t.ok(secondLoaded, 'second is loaded')
  t.notOk(thirdLoaded, 'third is not loaded')
  t.notOk(fourthLoaded, 'fourth is not loaded')

  await sleep(10)

  app.use(third)
  await app.after()
  t.ok(firstLoaded, 'first is loaded')
  t.ok(secondLoaded, 'second is loaded')
  t.ok(thirdLoaded, 'third is loaded')
  t.notOk(fourthLoaded, 'fourth is not loaded')

  app.use(fourth)
  t.ok(firstLoaded, 'first is loaded')
  t.ok(secondLoaded, 'second is loaded')
  t.ok(thirdLoaded, 'third is loaded')
  t.notOk(fourthLoaded, 'fourth is not loaded')

  await app.after()
  t.ok(firstLoaded, 'first is loaded')
  t.ok(secondLoaded, 'second is loaded')
  t.ok(thirdLoaded, 'third is loaded')
  t.ok(fourthLoaded, 'fourth is loaded')

  await app.ready()

  async function first () {
    firstLoaded = true
  }

  async function second () {
    const contents = await fs.readFile(path.join(__dirname, 'fixtures', 'dummy.txt'), 'utf-8')
    t.equal(contents, 'hello, world!')
    secondLoaded = true
  }

  async function third () {
    await sleep(10)
    thirdLoaded = true
  }

  function fourth (server, opts, done) {
    fourthLoaded = true
    done()
  }
})

test('without autostart', async (t) => {
  const app = {}
  boot(app, { autostart: false })
  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false

  app.use(async function first (app) {
    firstLoaded = true
    app.use(async () => {
      await sleep(1)
      secondLoaded = true
    })
  })

  await app.after()
  t.equal(firstLoaded, true)
  t.equal(secondLoaded, true)

  await app.use(async () => {
    thirdLoaded = true
  })

  t.equal(thirdLoaded, true)

  await app.ready()
})

test('without autostart and with override', async (t) => {
  const app = {}
  const _ = boot(app, { autostart: false })
  let count = 0

  _.override = function (s) {
    const res = Object.create(s)
    res.count = ++count

    return res
  }

  app.use(async function first (app) {
    t.equal(app.count, 1)
    app.use(async (app) => {
      t.equal(app.count, 2)
      await app.after()
    })
  })

  await app.after()

  await app.use(async (app) => {
    t.equal(app.count, 3)
  })

  await app.ready()
})

test('stop processing after errors', async (t) => {
  t.plan(2)

  const app = boot()

  try {
    await app.use(async function first (app) {
      t.pass('first should be loaded')
      throw new Error('kaboom')
    })
  } catch (e) {
    t.equal(e.message, 'kaboom')
  }
})
