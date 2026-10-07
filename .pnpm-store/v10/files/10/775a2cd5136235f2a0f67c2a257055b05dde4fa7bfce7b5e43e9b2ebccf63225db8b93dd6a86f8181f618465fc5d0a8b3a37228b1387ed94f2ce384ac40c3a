'use strict'

const { test } = require('node:test')
const path = require('node:path')
const request = require('supertest')
const send = require('..')
const { shouldNotHaveHeader, createServer } = require('./utils')

const fixtures = path.join(__dirname, 'fixtures')

test('send.mime', async function (t) {
  t.plan(2)

  await t.test('should be exposed', function (t) {
    t.plan(1)
    t.assert.ok(send.mime)
  })

  await t.test('.default_type', async function (t) {
    t.plan(3)

    t.before(() => {
      this.default_type = send.mime.default_type
    })

    t.afterEach(() => {
      send.mime.default_type = this.default_type
    })

    await t.test('should change the default type', async function (t) {
      send.mime.default_type = 'text/plain'

      await request(createServer({ root: fixtures }))
        .get('/no_ext')
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(200)
    })

    await t.test('should not add Content-Type for undefined default', async function (t) {
      t.plan(1)
      send.mime.default_type = undefined

      await request(createServer({ root: fixtures }))
        .get('/no_ext')
        .expect(shouldNotHaveHeader('Content-Type', t))
        .expect(200)
    })

    await t.test('should return Content-Type without charset', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/images/node-js.png')
        .expect('Content-Type', 'image/png')
        .expect(200)
    })
  })
})
