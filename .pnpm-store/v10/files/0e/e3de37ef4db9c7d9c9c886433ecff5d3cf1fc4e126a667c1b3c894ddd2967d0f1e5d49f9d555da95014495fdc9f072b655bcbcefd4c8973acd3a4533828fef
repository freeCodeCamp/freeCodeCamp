'use strict'

const { test } = require('node:test')
const fastifySuccess = require('./dist/success')
const fastifyFailPlugin = require('./dist/failPlugin')

test('Bundled package should work', (t, done) => {
  t.plan(4)
  fastifySuccess.ready((err) => {
    t.assert.ifError(err)
    fastifySuccess.inject(
      {
        method: 'GET',
        url: '/'
      },
      (error, res) => {
        t.assert.ifError(error)
        t.assert.strictEqual(res.statusCode, 200)
        t.assert.deepStrictEqual(res.json(), { hello: 'world' })
        done()
      }
    )
  })
})

test('Bundled package should not work with bad plugin version', (t, done) => {
  t.plan(1)
  fastifyFailPlugin.ready((err) => {
    t.assert.match(err.message, /expected '9.x' fastify version/i)
    done()
  })
})
