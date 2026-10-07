'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and anyOf keyword', () => {
  const schema1 = {}
  const schema2 = {
    anyOf: [
      { type: 'string', const: 'foo' }
    ]
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    anyOf: [
      { type: 'string', const: 'foo' }
    ]
  })
})

test('should merge two schemas with anyOfs schemas', () => {
  const schema1 = {
    anyOf: [
      { type: 'string', enum: ['foo1', 'foo2', 'foo3'] },
      { type: 'string', enum: ['foo3', 'foo4', 'foo5'] }
    ]
  }
  const schema2 = {
    anyOf: [
      { type: 'string', enum: ['foo2', 'foo3', 'foo4'] },
      { type: 'string', enum: ['foo3', 'foo6', 'foo7'] }
    ]
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    anyOf: [
      { type: 'string', enum: ['foo2', 'foo3'] },
      { type: 'string', enum: ['foo3'] },
      { type: 'string', enum: ['foo3', 'foo4'] },
      { type: 'string', enum: ['foo3'] }
    ]
  })
})

test('should merge three schemas with anyOfs schemas', () => {
  const schema1 = {
    anyOf: [
      { type: 'string', enum: ['foo1', 'foo2', 'foo3', 'foo4'] },
      { type: 'string', enum: ['foo3', 'foo4', 'foo5', 'foo7'] }
    ]
  }
  const schema2 = {
    anyOf: [
      { type: 'string', enum: ['foo2', 'foo3', 'foo4', 'foo5'] },
      { type: 'string', enum: ['foo3', 'foo6', 'foo7', 'foo8'] }
    ]
  }

  const schema3 = {
    anyOf: [
      { type: 'string', enum: ['foo1', 'foo3', 'foo5', 'foo7'] },
      { type: 'string', enum: ['foo2', 'foo4', 'foo6', 'foo8'] }
    ]
  }

  const mergedSchema = mergeSchemas([schema1, schema2, schema3], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    anyOf: [
      { type: 'string', enum: ['foo3'] },
      { type: 'string', enum: ['foo2', 'foo4'] },
      { type: 'string', enum: ['foo3'] },
      { type: 'string', enum: ['foo3', 'foo5'] },
      { type: 'string', enum: ['foo4'] },
      { type: 'string', enum: ['foo3', 'foo7'] }
    ]
  })
})
