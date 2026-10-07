'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and allOf keyword', () => {
  const schema1 = {}
  const schema2 = {
    allOf: [
      { type: 'string', const: 'foo' }
    ]
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    allOf: [
      { type: 'string', const: 'foo' }
    ]
  })
})

test('should merge schemas with allOfs schemas', () => {
  const schema1 = {
    allOf: [
      { type: 'number', minimum: 0 }
    ]
  }
  const schema2 = {
    allOf: [
      { type: 'string', const: 'foo' }
    ]
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    allOf: [
      { type: 'number', minimum: 0 },
      { type: 'string', const: 'foo' }
    ]
  })
})
