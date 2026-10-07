'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and additionalItems = false keyword', () => {
  const schema1 = { type: 'array' }
  const schema2 = {
    type: 'array',
    additionalItems: false
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    additionalItems: false
  })
})

test('should merge two schemas with boolean additionalItems', () => {
  const schema1 = {
    type: 'array',
    additionalItems: true
  }
  const schema2 = {
    type: 'array',
    additionalItems: false
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    additionalItems: false
  })
})

test('should merge additionalItems schema with false value', () => {
  const schema1 = {
    type: 'array',
    additionalItems: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'array',
    additionalItems: false
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    additionalItems: false
  })
})

test('should merge additionalItems schema with true value', () => {
  const schema1 = {
    type: 'array',
    additionalItems: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'array',
    additionalItems: true
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    additionalItems: {
      type: 'string'
    }
  })
})

test('should merge two additionalItems schemas', () => {
  const schema1 = {
    type: 'array',
    additionalItems: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'array',
    additionalItems: {
      type: 'string', minLength: 1
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    additionalItems: {
      type: 'string', minLength: 1
    }
  })
})

test('should merge additionalItems with items array', () => {
  const schema1 = {
    type: 'array',
    items: [
      { type: 'string', const: 'foo1' },
      { type: 'string', const: 'foo2' },
      { type: 'string', const: 'foo3' }
    ]
  }
  const schema2 = {
    type: 'array',
    additionalItems: {
      type: 'string', minLength: 42
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    items: [
      { type: 'string', const: 'foo1', minLength: 42 },
      { type: 'string', const: 'foo2', minLength: 42 },
      { type: 'string', const: 'foo3', minLength: 42 }
    ],
    additionalItems: {
      type: 'string', minLength: 42
    }
  })
})

test('should merge items array and additionalItems with items array', () => {
  const schema1 = {
    type: 'array',
    items: [
      { type: 'string', const: 'foo1' },
      { type: 'string', const: 'foo2' },
      { type: 'string', const: 'foo3' }
    ]
  }
  const schema2 = {
    type: 'array',
    items: [
      { type: 'string', minLength: 1 },
      { type: 'string', minLength: 2 }
    ],
    additionalItems: {
      type: 'string', minLength: 3
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'array',
    items: [
      { type: 'string', const: 'foo1', minLength: 1 },
      { type: 'string', const: 'foo2', minLength: 2 },
      { type: 'string', const: 'foo3', minLength: 3 }
    ],
    additionalItems: {
      type: 'string', minLength: 3
    }
  })
})
