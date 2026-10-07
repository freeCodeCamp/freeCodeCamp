'use strict'

const { test } = require('tap')
const boot = require('..')
const app = {}

boot(app)

test('multi after', (t) => {
  t.plan(6)

  app.use(function (f, opts, cb) {
    cb()
  }).after(() => {
    t.pass('this is just called')

    app.use(function (f, opts, cb) {
      t.pass('this is just called')
      cb()
    })
  }).after(function () {
    t.pass('this is just called')
    app.use(function (f, opts, cb) {
      t.pass('this is just called')
      cb()
    })
  }).after(function (err, cb) {
    t.pass('this is just called')
    cb(err)
  })

  app.ready().then(() => {
    t.pass('ready')
  }).catch(() => {
    t.fail('this should not be called')
  })
})

test('after grouping - use called after after called', (t) => {
  t.plan(9)
  const app = {}
  boot(app)

  const TEST_VALUE = {}
  const OTHER_TEST_VALUE = {}
  const NEW_TEST_VALUE = {}

  const sO = (fn) => {
    fn[Symbol.for('skip-override')] = true
    return fn
  }

  app.use(sO(function (f, options, next) {
    f.test = TEST_VALUE

    next()
  }))

  app.after(function (err, f, done) {
    t.error(err)
    t.equal(f.test, TEST_VALUE)

    f.test2 = OTHER_TEST_VALUE
    done()
  })

  app.use(sO(function (f, options, next) {
    t.equal(f.test, TEST_VALUE)
    t.equal(f.test2, OTHER_TEST_VALUE)

    f.test3 = NEW_TEST_VALUE

    next()
  }))

  app.after(function (err, f, done) {
    t.error(err)
    t.equal(f.test, TEST_VALUE)
    t.equal(f.test2, OTHER_TEST_VALUE)
    t.equal(f.test3, NEW_TEST_VALUE)
    done()
  })

  app.ready().then(() => {
    t.pass('ready')
  }).catch((e) => {
    console.log(e)
    t.fail('this should not be called')
  })
})
