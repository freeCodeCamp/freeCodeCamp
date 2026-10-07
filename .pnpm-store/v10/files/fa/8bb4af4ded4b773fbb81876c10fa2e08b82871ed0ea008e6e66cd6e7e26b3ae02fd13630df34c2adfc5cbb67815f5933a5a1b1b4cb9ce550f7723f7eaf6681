'use strict'

const { test } = require('node:test')
const validator = require('is-my-json-valid')
const build = require('..')

function buildTest (schema, toStringify) {
  test(`render a ${schema.title} as JSON`, (t) => {
    t.plan(3)

    const validate = validator(schema)
    const stringify = build(schema)
    const output = stringify(toStringify)

    t.assert.deepStrictEqual(JSON.parse(output), toStringify)
    t.assert.equal(output, JSON.stringify(toStringify))
    t.assert.ok(validate(JSON.parse(output)), 'valid schema')
  })
}

buildTest({
  title: 'infer type object by keyword',
  // 'type': 'object',
  properties: {
    name: {
      type: 'string'
    }
  }
}, {
  name: 'foo'
})

buildTest({
  title: 'infer type of nested object by keyword',
  // 'type': 'object',
  properties: {
    more: {
      description: 'more properties',
      // 'type': 'object',
      properties: {
        something: {
          type: 'string'
        }
      }
    }
  }
}, {
  more: {
    something: 'else'
  }
})

buildTest({
  title: 'infer type array by keyword',
  type: 'object',
  properties: {
    ids: {
      // 'type': 'array',
      items: {
        type: 'string'
      }
    }
  }
}, {
  ids: ['test']
})

buildTest({
  title: 'infer type string by keyword',
  type: 'object',
  properties: {
    name: {
      // 'type': 'string',
      maxLength: 3
    }
  }
}, {
  name: 'foo'
})

buildTest({
  title: 'infer type number by keyword',
  type: 'object',
  properties: {
    age: {
      // 'type': 'number',
      maximum: 18
    }
  }
}, {
  age: 18
})
