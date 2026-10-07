'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and items keyword', () => {
  const schema1 = { type: 'array' }
  const schema2 = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  })
})

test('should merge two equal item schemas', () => {
  const schema1 = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  }

  const schema2 = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  })
})

test('should merge two different sets of item schemas', () => {
  const schema1 = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        bar: { type: 'number' }
      }
    }
  }

  const schema2 = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        baz: { type: 'boolean' }
      }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        bar: { type: 'number' },
        baz: { type: 'boolean' }
      }
    }
  })
})

test('should merge two different sets of item schemas with additionalItems', () => {
  const schema1 = {
    type: 'array',
    items: [
      {
        type: 'object',
        properties: {
          foo: { type: 'string', const: 'foo' }
        }
      }
    ],
    additionalItems: {
      type: 'object',
      properties: {
        baz: { type: 'string', const: 'baz' }
      }
    }
  }

  const schema2 = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        baz: { type: 'string' }
      }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    items: [
      {
        type: 'object',
        properties: {
          foo: { type: 'string', const: 'foo' },
          baz: { type: 'string' }
        }
      }
    ],
    additionalItems: {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        baz: { type: 'string', const: 'baz' }
      }
    }
  })
})
