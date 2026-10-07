'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should return all nested schema dependencies', () => {
  const refResolver = new RefResolver()

  const schema1Id = 'schemaId1'
  const schema1 = {
    $id: schema1Id,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schema2Id = 'schemaId2'
  const schema2 = {
    $id: schema2Id,
    $ref: schema1Id
  }

  const schema3Id = 'schemaId3'
  const schema3 = {
    $id: schema3Id,
    $ref: schema2Id
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)
  refResolver.addSchema(schema3)

  const schema1Deps = refResolver.getSchemaDependencies(schema1Id)
  assert.deepStrictEqual(schema1Deps, {})

  const schema2Deps = refResolver.getSchemaDependencies(schema2Id)
  assert.deepStrictEqual(schema2Deps, { [schema1Id]: schema1 })

  const schema3Deps = refResolver.getSchemaDependencies(schema3Id)
  assert.deepStrictEqual(schema3Deps, {
    [schema1Id]: schema1,
    [schema2Id]: schema2
  })
})

test('should resolve a dependency to a subschema', () => {
  const refResolver = new RefResolver()

  const schema1Id = 'schemaId1'
  const subSchema1Id = 'subSchemaId1'
  const schema1 = {
    $id: schema1Id,
    definitions: {
      subSchema: {
        $id: subSchema1Id,
        type: 'object',
        properties: {
          bar: { type: 'string' }
        }
      }
    }
  }

  const schema2Id = 'schemaId2'
  const schema2 = {
    $id: schema2Id,
    $ref: subSchema1Id + '#/definitions/subSchema'
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  const schema1Deps = refResolver.getSchemaDependencies(schema1Id)
  assert.deepStrictEqual(schema1Deps, {})

  const schema2Deps = refResolver.getSchemaDependencies(schema2Id)
  assert.deepStrictEqual(schema2Deps, { [subSchema1Id]: schema1.definitions.subSchema })
})

test('should resolve a dependency with a json path', () => {
  const refResolver = new RefResolver()

  const schema1Id = 'schemaId1'
  const subSchema1Id = 'subSchemaId1'
  const schema1 = {
    $id: schema1Id,
    definitions: {
      subSchema: {
        $id: subSchema1Id,
        type: 'object',
        properties: {
          bar: { type: 'string' }
        }
      }
    }
  }

  const schema2Id = 'schemaId2'
  const schema2 = {
    $id: schema2Id,
    $ref: schema1Id + '#/definitions/subSchema'
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  const schema1Deps = refResolver.getSchemaDependencies(schema1Id)
  assert.deepStrictEqual(schema1Deps, {})

  const schema2Deps = refResolver.getSchemaDependencies(schema2Id)
  assert.deepStrictEqual(schema2Deps, { [schema1Id]: schema1 })
})

test('should include dependency schema only once', () => {
  const refResolver = new RefResolver()

  const schema1Id = 'schemaId1'
  const schema1 = {
    $id: schema1Id,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schema2Id = 'schemaId2'
  const schema2 = {
    $id: schema2Id,
    $ref: schema1Id
  }

  const schema3Id = 'schemaId3'
  const schema3 = {
    $id: schema3Id,
    allOf: [
      { $ref: schema1Id },
      { $ref: schema2Id }
    ]
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)
  refResolver.addSchema(schema3)

  const schema1Deps = refResolver.getSchemaDependencies(schema1Id)
  assert.deepStrictEqual(schema1Deps, {})

  const schema2Deps = refResolver.getSchemaDependencies(schema2Id)
  assert.deepStrictEqual(schema2Deps, { [schema1Id]: schema1 })

  const schema3Deps = refResolver.getSchemaDependencies(schema3Id)
  assert.deepStrictEqual(schema3Deps, {
    [schema1Id]: schema1,
    [schema2Id]: schema2
  })
})
