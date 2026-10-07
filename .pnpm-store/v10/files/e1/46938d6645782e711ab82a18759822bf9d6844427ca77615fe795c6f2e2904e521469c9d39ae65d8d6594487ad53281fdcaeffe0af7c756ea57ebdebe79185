'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and dependentRequired keyword', () => {
  const schema1 = {}
  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' }
    },
    dependentRequired: {
      foo: ['bar']
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' }
    },
    dependentRequired: {
      foo: ['bar']
    }
  })
})

test('should merge two dependentRequired keyword schemas', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      que: { type: 'string' }
    },
    dependentRequired: {
      foo: ['bar', 'que'],
      bar: ['que']
    }
  }
  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      baz: { type: 'string' }
    },
    dependentRequired: {
      foo: ['baz'],
      baz: ['foo']
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      que: { type: 'string' },
      baz: { type: 'string' }
    },
    dependentRequired: {
      foo: ['bar', 'que', 'baz'],
      bar: ['que'],
      baz: ['foo']
    }
  })
})
