'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and properties keyword', () => {
  const schema1 = { type: 'object' }
  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  })
})

test('should merge two equal property schemas', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  })
})

test('should merge two different sets of property schemas', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      baz: { type: 'boolean' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' },
      baz: { type: 'boolean' }
    }
  })
})

test('should merge property with different schemas', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: {
        type: ['string', 'number'],
        enum: ['42', 2, 3]
      }
    }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: {
        type: ['number', 'null'],
        enum: [1, 2, 3, null]
      }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'number', enum: [2, 3] }
    }
  })
})

test('should merge properties if one schema has additionalProperties = false', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    },
    additionalProperties: false
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      baz: { type: 'string' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      bar: { type: 'number' },
      baz: false
    },
    additionalProperties: false
  })
})

test('should merge properties if both schemas have additionalProperties = false', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    },
    additionalProperties: false
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      baz: { type: 'string' }
    },
    additionalProperties: false
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      bar: false,
      baz: false
    },
    additionalProperties: false
  })
})

test('should merge properties if one schema has additionalProperties schema', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    },
    additionalProperties: { type: 'string', enum: ['43'] }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      baz: { type: 'string' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      bar: { type: 'number' },
      baz: { type: 'string', enum: ['43'] }
    },
    additionalProperties: { type: 'string', enum: ['43'] }
  })
})

test('should merge properties if both schemas have additionalProperties schemas', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    },
    additionalProperties: {
      type: ['string', 'number', 'null'],
      enum: ['45', '43', 41, null]
    }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      baz: { type: 'string' }
    },
    additionalProperties: {
      type: ['string', 'boolean', 'number'],
      enum: ['44', '43', true, 41]
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      bar: { type: 'number', enum: ['44', '43', true, 41] },
      baz: { type: 'string', enum: ['45', '43', 41, null] }
    },
    additionalProperties: { type: ['string', 'number'], enum: ['43', 41] }
  })
})

test('should merge properties if one schema has patternProperties schema', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' }
    },
    patternProperties: {
      '^baz$': { type: 'string', enum: ['43'] }
    }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      baz: { type: 'string' },
      qux: { type: 'string' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      bar: { type: 'number' },
      baz: { type: 'string', enum: ['43'] },
      qux: { type: 'string' }
    },
    patternProperties: {
      '^baz$': { type: 'string', enum: ['43'] }
    }
  })
})

test('should merge properties if both schemas have patternProperties schemas', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'number' },
      bak: { type: 'number' }
    },
    patternProperties: {
      '^baz$': { type: 'string', enum: ['43'] }
    }
  }

  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      baz: { type: 'string' },
      qux: { type: 'string' }
    },
    patternProperties: {
      '^bar$': { type: 'number', minimum: 2 }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string', enum: ['42'] },
      bar: { type: 'number', minimum: 2 },
      bak: { type: 'number' },
      baz: { type: 'string', enum: ['43'] },
      qux: { type: 'string' }
    },
    patternProperties: {
      '^bar$': { type: 'number', minimum: 2 },
      '^baz$': { type: 'string', enum: ['43'] }
    }
  })
})
