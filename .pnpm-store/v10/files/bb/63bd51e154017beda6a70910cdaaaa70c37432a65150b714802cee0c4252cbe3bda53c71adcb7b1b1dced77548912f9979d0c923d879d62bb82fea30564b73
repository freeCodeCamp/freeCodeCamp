# json-schema-ref-resolver

[![CI](https://github.com/fastify/json-schema-ref-resolver/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/json-schema-ref-resolver/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/json-schema-ref-resolver)](https://www.npmjs.com/package/json-schema-ref-resolver)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

__json-schema-ref-resolver__ is a javascript library that resolves references in [JSON schemas](https://json-schema.org/draft/2020-12/json-schema-core#name-introduction).

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [RefResolver([options])](#refresolveroptions)
  - [addSchema(schema, [schemaId])](#addschemaschema-schemaid)
  - [getSchema(schemaId, [jsonPointer])](#getschemaschemaid-jsonpointer)
  - [getSchemaRefs(schemaId)](#getschemarefsschemaid)
  - [getSchemaDependencies(schemaId)](#getschemadependenciesschemaid)
  - [derefSchema(schemaId)](#derefschemaschemaid)
  - [getDerefSchema(schemaId, [jsonPointer])](#getderefschemaschemaid-jsonpointer)
- [Caveats](#caveats)

<a name="installation"></a>

## Installation

```bash
npm install json-schema-ref-resolver
```

<a name="usage"></a>

## Usage

```javascript
const assert = require('node:assert')
const { RefResolver } = require('json-schema-ref-resolver')

const sourceSchema = {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: {
      $ref: 'targetSchema#/definitions/bar'
    }
  }
}

const targetSchema = {
  $id: 'targetSchema',
  definitions: {
    bar: {
      type: 'string'
    }
  }
}

const refResolver = new RefResolver()

refResolver.addSchema(sourceSchema)
refResolver.addSchema(targetSchema)

const derefSourceSchema = refResolver.getDerefSchema('sourceSchema')
assert.deepStrictEqual(derefSourceSchema, {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  }
})
```

<a name="api"></a>

## API

<a name="constructor"></a>

#### RefResolver([options])

- __allowEqualDuplicates__ - if set to `false`, an error will be thrown if a schema with the same `$id` is added to the resolver. If set to `true`, the error will be thrown only if the schemas are not equal. Default: `true`.

- __insertRefSymbol__ - if set to `true` resolver inserts a `Symbol.for('json-schema-ref')` instead of the `$ref` property when dereferencing a schema. Default `false`.

- __cloneSchemaWithoutRefs__ - if set to `false` resolver would not clone a schema if it does not have references. That allows to significantly improve performance when dereferencing a schema. If you want to modify a schema after dereferencing, set this option to `true`. Default: `false`.

<a name="add-schema"></a>

#### addSchema(schema, [schemaId])

Adds a json schema to the resolver. If the schema has an `$id` property, it will be used as the schema id. Otherwise, the `schemaId` argument will be used as the schema id. During the addition of the schema, ref resolver will find and add all nested schemas and references.

- `schema` __\<object\>__ - json schema to add to the resolver.
- `schemaId` __\<string\>__ - schema id to use. Will be used only if the schema does not have an `$id` property.

<a name="get-schema"></a>

#### getSchema(schemaId, [jsonPointer])

Returns a json schema by its id. If the `jsonPointer` argument is provided, ref resolver will return the schema at the specified json pointer location.

If shema with the specified id is not found, an error will be thrown. If the `jsonPointer` argument is provided and the schema at the specified location is not found, getSchema will return `null`.

- `schemaId` __\<string\>__ - schema id of the schema to return.
- `jsonPointer` __\<string\>__ - json pointer to the schema location.
- __Returns__ - json schema or `null` if the schema at the specified location is not found.

_Example:_

```javascript
const assert = require('node:assert')
const { RefResolver } = require('json-schema-ref-resolver')

const schema = {
  $id: 'schema',
  type: 'object',
  properties: {
    foo: { type: 'string' }
  }
}

const refResolver = new RefResolver()
refResolver.addSchema(schema)

const rootSchema = refResolver.getSchema(schema.$id)
assert.deepStrictEqual(rootSchema, schema)

const subSchema = refResolver.getSchema(schema.$id, '#/properties/foo')
assert.deepStrictEqual(subSchema, { type: 'string' })
```

`getSchema` can also be used to get a schema by its [json schema anchor](https://json-schema.org/draft/2020-12/json-schema-core#section-8.2.2). To get schema by schema anchor, the `schemaId` argument must be set to the `$id` of the schema that contains the anchor, and the `jsonPointer` argument must be set to the anchor.

_Example:_

```javascript
const assert = require('node:assert')
const { RefResolver } = require('json-schema-ref-resolver')

const schema = {
  $id: 'schema',
  definitions: {
    bar: {
      $id: '#bar',
      type: 'string'
    }
  }
}

const refResolver = new RefResolver()
refResolver.addSchema(schema)

const anchorSchema = refResolver.getSchema(schema.$id, '#bar')
assert.deepStrictEqual(subSchema, {
  $id: '#bar',
  type: 'string'
})
```

<a name="get-schema-refs"></a>

#### getSchemaRefs(schemaId)

Returns all references found in the schema during the addition of the schema to the resolver. If schema with the specified id is not found, an error will be thrown.

- `schemaId` __\<string\>__ - schema id of the schema to return references for.
- __Returns__ - array of objects with the following properties:
  - `schemaId` __\<string\>__ - schema id of the reference.
  - `jsonPointer` __\<string\>__ - json pointer of the reference.

If a reference does not have a schema id part, the schema id of the schema that contains the reference is used as the schema id of the reference.

_Example:_

```javascript
const assert = require('node:assert')

const { RefResolver } = require('json-schema-ref-resolver')

const sourceSchema = {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: {
      $ref: 'targetSchema#/definitions/bar'
    },
    baz: {
      $ref: 'targetSchema#/definitions/qux'
    }
  }
}

const refResolver = new RefResolver()
refResolver.addSchema(sourceSchema)

const refs = refResolver.getSchemaRefs('sourceSchema')
assert.deepStrictEqual(refs, [
  {
    schemaId: 'targetSchema',
    jsonPointer: '#/definitions/bar'
  },
  {
    schemaId: 'targetSchema',
    jsonPointer: '#/definitions/qux'
  }
])
```

<a name="get-schema-dependencies"></a>

#### getSchemaDependencies(schemaId)

Returns all dependencies including nested dependencies found in the schema during the addition of the schema to the resolver. If schema with the specified id is not found, an error will be thrown.

- `schemaId` __\<string\>__ - schema id of the schema to return dependencies for.
- __Returns__ - an object with all found dependencies. The object keys are schema ids and the values are schema dependencies.

_Example:_

```javascript
const assert = require('node:assert')

const { RefResolver } = require('json-schema-ref-resolver')

const targetSchema1 = {
  $id: 'targetSchema1',
  definitions: {
    bar: { type: 'string' }
  }
}

const targetSchema2 = {
  $id: 'targetSchema2',
  type: 'object',
  properties: {
    qux: { $ref: 'targetSchema1' }
  }
}

const sourceSchema = {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: { $ref: 'targetSchema2' }
  }
}

const refResolver = new RefResolver()

refResolver.addSchema(sourceSchema)
refResolver.addSchema(targetSchema1)
refResolver.addSchema(targetSchema2)

const dependencies = refResolver.getSchemaDependencies('sourceSchema')
assert.deepStrictEqual(dependencies, { targetSchema1, targetSchema2 })
```

<a name="deref-schema"></a>

#### derefSchema(schemaId)

Dereferences all references in the schema. All dependencies will also be dereferenced. If schema with the specified id is not found, an error will be thrown.

- `schemaId` __\<string\>__ - schema id of the schema to dereference.

__If a json schema has circular references or circular cross-references, dereferenced schema will have js circular references. Be careful when traversing the dereferenced schema.__

_Example_

```javascript
const assert = require('node:assert')
const { RefResolver } = require('json-schema-ref-resolver')

const sourceSchema = {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: {
      $ref: 'targetSchema#/definitions/bar'
    }
  }
}

const targetSchema = {
  $id: 'targetSchema',
  definitions: {
    bar: {
      type: 'string'
    }
  }
}

const refResolver = new RefResolver()

refResolver.addSchema(sourceSchema)
refResolver.addSchema(targetSchema)

refResolver.derefSchema('sourceSchema')
const derefSourceSchema = refResolver.getDerefSchema('sourceSchema')

assert.deepStrictEqual(derefSourceSchema, {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  }
})
```

<a name="get-deref-schema"></a>

#### getDerefSchema(schemaId, [jsonPointer])

Returns a dereferenced schema by schema id and json pointer. If schema with the specified id is not found, an error will be thrown. If the `jsonPointer` argument is provided, ref resolver will return the schema at the specified json pointer location. If the `jsonPointer` argument is provided and the schema at the specified location is not found, getDerefSchema will return `null`.

If schema was not dereferenced before, it will be dereferenced during the call to `getDerefSchema`.

- `schemaId` __\<string\>__ - schema id of the schema to return.
- `jsonPointer` __\<string\>__ - json pointer to the schema location.
- __Returns__ - dereferenced json schema or `null` if the schema at the specified location is not found.

_Example:_

```javascript
const assert = require('node:assert')
const { RefResolver } = require('json-schema-ref-resolver')

const sourceSchema = {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: {
      $ref: 'targetSchema#/definitions/bar'
    }
  }
}

const targetSchema = {
  $id: 'targetSchema',
  definitions: {
    bar: {
      type: 'string'
    }
  }
}

const refResolver = new RefResolver()

refResolver.addSchema(sourceSchema)
refResolver.addSchema(targetSchema)

const derefSourceSchema = refResolver.getDerefSchema('sourceSchema')
assert.deepStrictEqual(derefSourceSchema, {
  $id: 'sourceSchema',
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  }
})
```

#### Caveats

- If a reference schema and a source schema have a key with the same name and different values, an error will be thrown during a call to `derefSchema` or `getDerefSchema`.

_Example:_

```javascript
const assert = require('node:assert')
const { RefResolver } = require('json-schema-ref-resolver')

const targetSchema = {
  $id: 'targetSchema',
  definitions: {
    bar: {
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  }
}

const sourceSchema = {
  $id: 'sourceSchema',
  type: 'object',
  $ref: 'targetSchema#/definitions/bar'
  properties: {
    foo: { type: 'number' }
  }
}

const refResolver = new RefResolver()
refResolver.addSchema(targetSchema)
refResolver.addSchema(sourceSchema)

refResolver.derefSchema('sourceSchema') // Throws an error
```

## License

Licensed under [MIT](./LICENSE).
