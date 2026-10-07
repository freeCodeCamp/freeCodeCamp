'use strict'

const { test } = require('tap')
const boot = require('..')
const { AVV_ERR_EXPOSE_ALREADY_DEFINED, AVV_ERR_ATTRIBUTE_ALREADY_DEFINED } = require('../lib/errors')
const { kAvvio } = require('../lib/symbols')

for (const key of ['use', 'after', 'ready', 'onClose', 'close']) {
  test('throws if ' + key + ' is by default already there', (t) => {
    t.plan(1)

    const app = {}
    app[key] = () => { }

    t.throws(() => boot(app), new AVV_ERR_EXPOSE_ALREADY_DEFINED(key, key))
  })

  test('throws if ' + key + ' is already there', (t) => {
    t.plan(1)

    const app = {}
    app['cust' + key] = () => { }

    t.throws(() => boot(app, { expose: { [key]: 'cust' + key } }), new AVV_ERR_EXPOSE_ALREADY_DEFINED('cust' + key, key))
  })

  test('support expose for ' + key, (t) => {
    const app = {}
    app[key] = () => { }

    const expose = {}
    expose[key] = 'muahah'

    boot(app, {
      expose
    })

    t.end()
  })
}

test('set the kAvvio to true on the server', (t) => {
  t.plan(1)

  const server = {}
  boot(server)

  t.ok(server[kAvvio])
})

test('.then()', t => {
  t.plan(3)

  t.test('.then() can not be overwritten', (t) => {
    t.plan(1)

    const server = {
      then: () => {}
    }
    t.throws(() => boot(server), AVV_ERR_ATTRIBUTE_ALREADY_DEFINED('then'))
  })

  t.test('.then() is a function', (t) => {
    t.plan(1)

    const server = {}
    boot(server)

    t.type(server.then, 'function')
  })

  t.test('.then() can not be overwritten', (t) => {
    t.plan(1)

    const server = {}
    boot(server)

    t.throws(() => { server.then = 'invalid' }, TypeError('Cannot set property then of #<Object> which has only a getter'))
  })
})
