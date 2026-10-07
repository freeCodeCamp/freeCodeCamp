'use strict'

const { test } = require('node:test')
const build = require('..')

test('sanitize 5', t => {
  const payload = '(throw "pwoned")'

  t.assert.throws(() => {
    build({
      patternProperties: {
        '*': { type: `*/${payload}){//` }
      }
    })
  }, { message: 'schema is invalid: data/patternProperties must match format "regex"' })
})
