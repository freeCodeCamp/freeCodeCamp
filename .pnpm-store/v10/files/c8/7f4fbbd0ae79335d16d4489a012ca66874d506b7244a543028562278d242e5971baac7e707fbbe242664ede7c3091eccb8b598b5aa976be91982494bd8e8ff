'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge two "not" keyword schemas', () => {
  const schema1 = {
    type: 'array',
    not: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'array',
    not: {
      type: 'string', minLength: 1
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    not: {
      type: 'string', minLength: 1
    }
  })
})
