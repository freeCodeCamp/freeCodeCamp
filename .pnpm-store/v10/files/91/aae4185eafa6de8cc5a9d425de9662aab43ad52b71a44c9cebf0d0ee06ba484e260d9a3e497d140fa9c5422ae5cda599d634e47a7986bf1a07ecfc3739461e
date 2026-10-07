'use strict'

const { test } = require('tap')
const boot = require('..')

test('one level', (t) => {
  t.plan(13)

  const app = boot()
  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false

  app.use(first)
  app.use(third)

  function first (s, opts, done) {
    t.notOk(firstLoaded, 'first is not loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    firstLoaded = true
    s.use(second)
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
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    thirdLoaded = true
    done()
  }

  app.on('start', () => {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.ok(thirdLoaded, 'third is loaded')
    t.pass('booted')
  })
})

test('multiple reentrant plugin loading', (t) => {
  t.plan(31)

  const app = boot()
  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false
  let fourthLoaded = false
  let fifthLoaded = false

  app.use(first)
  app.use(fifth)

  function first (s, opts, done) {
    t.notOk(firstLoaded, 'first is not loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    t.notOk(fourthLoaded, 'fourth is not loaded')
    t.notOk(fifthLoaded, 'fifth is not loaded')
    firstLoaded = true
    s.use(second)
    done()
  }

  function second (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.notOk(secondLoaded, 'second is not loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    t.notOk(fourthLoaded, 'fourth is not loaded')
    t.notOk(fifthLoaded, 'fifth is not loaded')
    secondLoaded = true
    s.use(third)
    s.use(fourth)
    done()
  }

  function third (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.notOk(thirdLoaded, 'third is not loaded')
    t.notOk(fourthLoaded, 'fourth is not loaded')
    t.notOk(fifthLoaded, 'fifth is not loaded')
    thirdLoaded = true
    done()
  }

  function fourth (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.ok(thirdLoaded, 'third is loaded')
    t.notOk(fourthLoaded, 'fourth is not loaded')
    t.notOk(fifthLoaded, 'fifth is not loaded')
    fourthLoaded = true
    done()
  }

  function fifth (s, opts, done) {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.ok(thirdLoaded, 'third is loaded')
    t.ok(fourthLoaded, 'fourth is loaded')
    t.notOk(fifthLoaded, 'fifth is not loaded')
    fifthLoaded = true
    done()
  }

  app.on('start', () => {
    t.ok(firstLoaded, 'first is loaded')
    t.ok(secondLoaded, 'second is loaded')
    t.ok(thirdLoaded, 'third is loaded')
    t.ok(fourthLoaded, 'fourth is loaded')
    t.ok(fifthLoaded, 'fifth is loaded')
    t.pass('booted')
  })
})
