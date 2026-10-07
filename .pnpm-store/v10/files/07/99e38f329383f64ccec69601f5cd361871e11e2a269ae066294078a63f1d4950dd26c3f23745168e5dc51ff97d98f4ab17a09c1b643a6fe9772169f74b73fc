'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and contains keyword', () => {
  const schema1 = {}
  const schema2 = {
    type: 'array',
    contains: {
      type: 'integer',
      minimum: 5
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    contains: {
      type: 'integer',
      minimum: 5
    }
  })
})

test('should merge two contains keyword schemas', () => {
  const schema1 = {
    type: 'array',
    contains: {
      type: 'integer',
      minimum: 5,
      maximum: 14
    }
  }
  const schema2 = {
    type: 'array',
    contains: {
      type: 'integer',
      minimum: 9,
      maximum: 10
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    contains: {
      type: 'integer',
      minimum: 9,
      maximum: 10
    }
  })
})
