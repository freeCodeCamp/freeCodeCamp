'use strict'

const { test } = require('node:test')
const build = require('..')

// Covers issue #139
test('Should throw on invalid schema', t => {
  t.plan(1)
  t.assert.throws(() => {
    build({}, {
      schema: {
        invalid: {
          type: 'Dinosaur'
        }
      }
    })
  }, { message: /^"invalid" schema is invalid:.*/ })
})
