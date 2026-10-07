'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should resolve reference', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schema1 = {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schemaId2 = 'schemaId2'
  const schema2 = {
    $id: schemaId2,
    $ref: schemaId1
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  const derefSchema1 = refResolver.getDerefSchema(schemaId1)
  assert.deepStrictEqual(derefSchema1, schema1)

  const derefSchema2 = refResolver.getDerefSchema(schemaId2)
  assert.deepStrictEqual(derefSchema2, {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  })
})

test('should get deref schema by anchor', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schemaId2 = 'schemaId2'

  const schema1 = {
    $id: schemaId1,
    definitions: {
      $id: '#subschema',
      type: 'object',
      properties: {
        foo: { type: 'string' },
        bar: { $ref: schemaId2 }
      }
    }
  }

  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      baz: { type: 'string' }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  const derefSubSchema = refResolver.getDerefSchema(schemaId1, '#subschema')
  assert.deepStrictEqual(derefSubSchema, {
    $id: '#subschema',
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: {
        type: 'object',
        properties: {
          baz: { type: 'string' }
        }
      }
    }
  })
})

test('should merge main and ref schemas', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schema1 = {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schemaId2 = 'schemaId2'
  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { $ref: schemaId1 + '#/properties/foo' },
      bar: { type: 'string' }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  const derefSchema1 = refResolver.getDerefSchema(schemaId1)
  assert.deepStrictEqual(derefSchema1, schema1)

  const derefSchema2 = refResolver.getDerefSchema(schemaId2)
  assert.deepStrictEqual(derefSchema2, {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' }
    }
  })
})

test('should merge multiple nested schemas', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schema1 = {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schemaId2 = 'schemaId2'
  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { $ref: schemaId1 + '#/properties/foo' },
      bar: { type: 'string' }
    }
  }

  const schemaId3 = 'schemaId3'
  const schema3 = {
    $id: schemaId3,
    type: 'object',
    properties: {
      foo: { $ref: schemaId2 + '#/properties/foo' },
      bar: { $ref: schemaId2 + '#/properties/bar' },
      baz: { type: 'string' }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)
  refResolver.addSchema(schema3)

  const derefSchema3 = refResolver.getDerefSchema(schemaId3)
  assert.deepStrictEqual(derefSchema3, {
    $id: schemaId3,
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      baz: { type: 'string' }
    }
  })
})

test('should resolve schema with circular reference', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const schema = {
    $id: schemaId,
    type: 'object',
    properties: {
      foo: { $ref: '#' }
    }
  }

  refResolver.addSchema(schema)

  const derefSchema = refResolver.getDerefSchema(schemaId)
  const expectedSchema = {
    $id: schemaId,
    type: 'object',
    properties: {
      foo: {
        type: 'object',
        properties: {}
      }
    }
  }
  expectedSchema.properties.foo.properties.foo = expectedSchema.properties.foo
  assert.deepStrictEqual(derefSchema, expectedSchema)
})

test('should resolve schema with cross circular reference', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schemaId2 = 'schemaId2'

  const schema1 = {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { $ref: schemaId2 }
    }
  }

  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      bar: { $ref: schemaId1 }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  const derefSchema1 = refResolver.getDerefSchema(schemaId1)
  const derefSchema2 = refResolver.getDerefSchema(schemaId2)

  const expectedSchema1 = {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: {
        type: 'object',
        properties: {
          bar: {
            type: 'object',
            properties: {}
          }
        }
      }
    }
  }
  expectedSchema1.properties.foo.properties.bar.properties.foo = expectedSchema1.properties.foo

  const expectedSchema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      bar: {
        type: 'object',
        properties: {
          foo: {
            type: 'object',
            properties: {}
          }
        }
      }
    }
  }
  expectedSchema2.properties.bar.properties.foo.properties.bar = expectedSchema2.properties.bar

  assert.deepStrictEqual(derefSchema1, expectedSchema1)
  assert.deepStrictEqual(derefSchema2, expectedSchema2)
})

test('should resolve nested multiple times refs', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schema1 = {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schemaId2 = 'schemaId2'
  const schema2 = {
    $id: schemaId2,
    $ref: schemaId1,
    required: ['foo']
  }

  const schemaId3 = 'schemaId3'
  const schema3 = {
    $id: schemaId3,
    $ref: schemaId2,
    additionalProperties: false
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)
  refResolver.addSchema(schema3)

  // Don't switch the order of these two lines.
  const derefSchema3 = refResolver.getDerefSchema(schemaId3)
  const derefSchema2 = refResolver.getDerefSchema(schemaId2)

  assert.deepStrictEqual(derefSchema2, {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    },
    required: ['foo']
  })
  assert.deepStrictEqual(derefSchema3, {
    $id: schemaId3,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    },
    required: ['foo'],
    additionalProperties: false
  })
})

test('should resolve infinite ref chain', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schemaId2 = 'schemaId2'
  const schemaId3 = 'schemaId3'

  const schema1 = {
    $id: schemaId1,
    $ref: schemaId2
  }

  const schema2 = {
    $id: schemaId2,
    $ref: schemaId3
  }

  const schema3 = {
    $id: schemaId3,
    $ref: schemaId1
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)
  refResolver.addSchema(schema3)

  const derefSchema1 = refResolver.getDerefSchema(schemaId1)
  const derefSchema2 = refResolver.getDerefSchema(schemaId2)
  const derefSchema3 = refResolver.getDerefSchema(schemaId3)

  assert.deepStrictEqual(derefSchema1, {
    $id: schemaId1
  })

  assert.deepStrictEqual(derefSchema2, {
    $id: schemaId2
  })

  assert.deepStrictEqual(derefSchema3, {
    $id: schemaId3
  })
})
