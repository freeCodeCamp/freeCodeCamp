'use strict'

const { test } = require('tap')
const boot = require('..')

test('chainable standalone', (t) => {
  t.plan(5)

  const readyResult = boot()
    .use(function (ctx, opts, done) {
      t.pass('1st plugin')
      done()
    }).after(function (err, done) {
      t.error(err)
      t.pass('2nd after')
      done()
    }).ready(function () {
      t.pass('we are ready')
    })
  t.equal(readyResult, undefined)
})

test('chainable automatically binded', (t) => {
  t.plan(5)

  const app = {}
  boot(app)

  const readyResult = app
    .use(function (ctx, opts, done) {
      t.pass('1st plugin')
      done()
    }).after(function (err, done) {
      t.error(err)
      t.pass('2nd after')
      done()
    }).ready(function () {
      t.pass('we are ready')
    })
  t.equal(readyResult, undefined)
})

test('chainable standalone with server', (t) => {
  t.plan(6)

  const server = {}
  boot(server, {
    expose: {
      use: 'register'
    }
  })

  const readyResult = server.register(function (ctx, opts, done) {
    t.pass('1st plugin')
    done()
  }).after(function (err, done) {
    t.error(err)
    t.pass('2nd after')
    done()
  }).register(function (ctx, opts, done) {
    t.pass('3rd plugin')
    done()
  }).ready(function () {
    t.pass('we are ready')
  })
  t.equal(readyResult, undefined)
})
