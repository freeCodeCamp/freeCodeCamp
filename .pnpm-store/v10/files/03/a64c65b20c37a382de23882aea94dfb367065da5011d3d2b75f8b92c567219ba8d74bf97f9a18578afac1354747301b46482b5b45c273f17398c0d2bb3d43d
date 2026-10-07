'use strict'

const { test } = require('node:test')
const validator = require('is-my-json-valid')
const build = require('..')

test('object with RexExp', (t) => {
  t.plan(3)

  const schema = {
    title: 'object with RegExp',
    type: 'object',
    properties: {
      reg: {
        type: 'string'
      }
    }
  }

  const obj = {
    reg: /"([^"]|\\")*"/
  }

  const stringify = build(schema)
  const validate = validator(schema)
  const output = stringify(obj)

  t.assert.doesNotThrow(() => JSON.parse(output))

  t.assert.equal(obj.reg.source, new RegExp(JSON.parse(output).reg).source)
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})
