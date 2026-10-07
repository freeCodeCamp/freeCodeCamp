'use strict'

const { test } = require('node:test')
const build = require('..')

test('sanitize 2', t => {
  const payload = '(throw "pwoned")'

  const stringify = build({
    properties: {
      [`*///\\\\\\']);${payload};{/*`]: {
        type: 'number'
      }
    }
  })

  t.assert.doesNotThrow(() => stringify({}))
})
