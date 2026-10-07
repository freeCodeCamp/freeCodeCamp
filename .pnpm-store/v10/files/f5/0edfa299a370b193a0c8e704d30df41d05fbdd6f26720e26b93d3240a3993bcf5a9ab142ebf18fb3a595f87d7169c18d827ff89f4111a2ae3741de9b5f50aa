'use strict'

const { test } = require('node:test')
const fjs = require('..')

test('fix-604', t => {
  const schema = {
    type: 'object',
    properties: {
      fullName: { type: 'string' },
      phone: { type: 'number' }
    }
  }

  const input = {
    fullName: 'Jone',
    phone: 'phone'
  }

  const render = fjs(schema)

  t.assert.throws(() => {
    render(input)
  }, { message: 'The value "phone" cannot be converted to a number.' })
})
