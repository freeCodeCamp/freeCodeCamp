'use strict'

const { test } = require('node:test')
const build = require('..')

test('sanitize 4', t => {
  const payload = '(throw "pwoned")'

  const stringify = build({
    required: [`"];${payload}//`]
  })

  t.assert.throws(() => {
    stringify({})
  }, { message: '""];(throw "pwoned")//" is required!' })
})
