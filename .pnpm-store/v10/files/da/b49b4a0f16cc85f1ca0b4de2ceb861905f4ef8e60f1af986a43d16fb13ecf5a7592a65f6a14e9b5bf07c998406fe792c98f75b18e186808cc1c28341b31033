'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and additionalProperties=false keyword', () => {
  const schema1 = { type: 'object' }
  const schema2 = {
    type: 'object',
    additionalProperties: false
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    additionalProperties: false
  })
})

test('should merge two schemas with boolean additionalProperties', () => {
  const schema1 = {
    type: 'object',
    additionalProperties: true
  }
  const schema2 = {
    type: 'object',
    additionalProperties: false
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    additionalProperties: false
  })
})

test('should merge additionalProperties schema with false value', () => {
  const schema1 = {
    type: 'object',
    additionalProperties: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'object',
    additionalProperties: false
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    additionalProperties: false
  })
})

test('should merge additionalProperties schema with true value', () => {
  const schema1 = {
    type: 'object',
    additionalProperties: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'object',
    additionalProperties: true
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    additionalProperties: {
      type: 'string'
    }
  })
})

test('should merge two additionalProperties schemas', () => {
  const schema1 = {
    type: 'object',
    additionalProperties: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'object',
    additionalProperties: {
      type: 'string', minLength: 1
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    additionalProperties: {
      type: 'string', minLength: 1
    }
  })
})

test('should merge two additionalProperties and properties schemas', () => {
  const schema1 = {
    type: 'object',
    additionalProperties: {
      type: 'string'
    }
  }
  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: ['string', 'number'] }
    },
    additionalProperties: {
      type: 'string', minLength: 1
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    },
    additionalProperties: {
      type: 'string', minLength: 1
    }
  })
})
