'use strict'

const { test } = require('tap')
const boot = require('..')

test('proper support for after with a passed async function in wrapped mode', (t) => {
  const app = {}
  boot(app)

  t.plan(5)

  const e = new Error('kaboom')

  app.use(function (f, opts) {
    return Promise.reject(e)
  }).after(function (err, cb) {
    t.equal(err, e)
    cb(err)
  }).after(function () {
    t.pass('this is just called')
  }).after(function (err, cb) {
    t.equal(err, e)
    cb(err)
  })

  app.ready().then(() => {
    t.fail('this should not be called')
  }).catch(err => {
    t.ok(err)
    t.equal(err.message, 'kaboom')
  })
})
