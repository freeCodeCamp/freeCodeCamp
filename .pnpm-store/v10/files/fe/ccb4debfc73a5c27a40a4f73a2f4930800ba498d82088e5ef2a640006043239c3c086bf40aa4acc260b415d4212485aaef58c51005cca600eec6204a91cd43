'use strict'

const { test } = require('node:test')
const build = require('..')

test('sanitize 6', t => {
  const payload = '(throw "pwoned")'

  const stringify = build({
    type: 'object',
    properties: {
      '/*': { type: 'object' },
      x: {
        type: 'object',
        properties: {
          a: { type: 'string', default: `*/}${payload};{//` }
        }
      }
    }
  })
  t.assert.doesNotThrow(() => { stringify({}) })
})
