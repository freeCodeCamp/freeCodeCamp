'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and propertyNames keyword', () => {
  const schema1 = {}
  const schema2 = {
    type: 'object',
    propertyNames: {
      pattern: '^[a-zA-Z]+$',
      minLength: 42
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    propertyNames: {
      pattern: '^[a-zA-Z]+$',
      minLength: 42
    }
  })
})

test('should merge two propertyNames keyword schemas', () => {
  const schema1 = {
    type: 'object',
    propertyNames: {
      minLength: 42
    }
  }
  const schema2 = {
    type: 'object',
    propertyNames: {
      minLength: 43
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    propertyNames: {
      minLength: 43
    }
  })
})
