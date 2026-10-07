'use strict'

const { test } = require('node:test')
const build = require('..')

test('sanitize 3', t => {
  t.assert.throws(() => {
    build({
      $defs: {
        type: 'foooo"bar'
      },
      patternProperties: {
        x: { $ref: '#/$defs' }
      }
    })
  }, { message: 'foooo"bar unsupported' })
})
