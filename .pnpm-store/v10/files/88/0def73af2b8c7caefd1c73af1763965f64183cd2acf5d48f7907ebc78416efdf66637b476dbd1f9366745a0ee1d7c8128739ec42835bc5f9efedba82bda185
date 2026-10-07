'use strict'

const { test } = require('tap')
const boot = require('..')

test('reentrant', (t) => {
  t.plan(7)

  const app = boot()
  let firstLoaded = false
  let secondLoaded = false

  app
    .use(first)
    .after(() => {
      t.ok(firstLoaded, 'first is loaded')
      t.ok(secondLoaded, 'second is loaded')
      t.pass('booted')
    })

  function first (s, opts, done) {
    t.notOk(firstLoaded, 'first is not loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    firstLoaded = true
    s.use(second)
    done()
  }

  function second (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    secondLoaded = true
    done()
  }
})

test('reentrant with callbacks deferred', (t) => {
  t.plan(11)

  const app = boot()
  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false

  app.use(first)

  function first (s, opts, done) {
    t.notOk(firstLoaded, 'first is not loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    firstLoaded = true
    s.use(second)
    setTimeout(() => {
      try {
        s.use(third)
      } catch (err) {
        t.equal(err.message, 'Root plugin has already booted')
      }
    }, 500)
    done()
  }

  function second (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    secondLoaded = true
    done()
  }

  function third (s, opts, done) {
    thirdLoaded = true
    done()
  }

  app.on('start', () => {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    t.pass('booted')
  })
})

test('multiple loading time', t => {
  t.plan(1)
  const app = boot()

  function a (instance, opts, done) {
    (opts.use || []).forEach(_ => { instance.use(_, { use: opts.subUse || [] }) })
    setTimeout(done, 10)
  }
  const pointer = a

  function b (instance, opts, done) {
    (opts.use || []).forEach(_ => { instance.use(_, { use: opts.subUse || [] }) })
    setTimeout(done, 20)
  }

  function c (instance, opts, done) {
    (opts.use || []).forEach(_ => { instance.use(_, { use: opts.subUse || [] }) })
    setTimeout(done, 30)
  }

  app
    .use(function a (instance, opts, done) {
      instance.use(pointer, { use: [b], subUse: [c] })
        .use(b)
      setTimeout(done, 0)
    })
    .after(() => {
      t.pass('booted')
    })
})
