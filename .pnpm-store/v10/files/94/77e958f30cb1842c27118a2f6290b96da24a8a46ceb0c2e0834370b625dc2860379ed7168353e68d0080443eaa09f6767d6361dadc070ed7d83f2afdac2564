'use strict'

const { test } = require('node:test')
const build = require('..')

test('should validate anyOf after allOf merge', (t) => {
  t.plan(1)

  const schema = {
    $id: 'schema',
    type: 'object',
    allOf: [
      {
        $id: 'base',
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        },
        required: [
          'name'
        ]
      },
      {
        $id: 'inner_schema',
        type: 'object',
        properties: {
          union: {
            $id: '#id',
            anyOf: [
              {

                $id: 'guid',
                type: 'string'
              },
              {

                $id: 'email',
                type: 'string'
              }
            ]
          }
        },
        required: [
          'union'
        ]
      }
    ]
  }

  const stringify = build(schema)

  t.assert.equal(
    stringify({ name: 'foo', union: 'a8f1cc50-5530-5c62-9109-5ba9589a6ae1' }),
    '{"name":"foo","union":"a8f1cc50-5530-5c62-9109-5ba9589a6ae1"}')
})
