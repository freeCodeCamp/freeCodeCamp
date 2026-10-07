'use strict'

const { test } = require('node:test')
const build = require('..')

test('should throw a TypeError with the path to the key of the invalid value', (t) => {
  t.plan(1)
  const schema = {
    type: 'object',
    properties: {
      num: {
        type: ['number']
      }
    }
  }

  const stringify = build(schema)
  t.assert.throws(() => stringify({ num: { bla: 123 } }), new TypeError('The value of \'#/properties/num\' does not match schema definition.'))
})
