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
    dependentSchemas: {
      foo: { required: ['bar'] }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' }
    },
    dependentSchemas: {
      foo: { required: ['bar'] }
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
    dependentSchemas: {
      foo: { required: ['bar', 'que'] },
      bar: { required: ['que'] }
    }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      baz: { type: 'string' }
    },
    dependentSchemas: {
      foo: { required: ['baz'] },
      baz: { required: ['foo'] }
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
    dependentSchemas: {
      foo: { required: ['bar', 'que', 'baz'] },
      bar: { required: ['que'] },
      baz: { required: ['foo'] }
    }
  })
})
