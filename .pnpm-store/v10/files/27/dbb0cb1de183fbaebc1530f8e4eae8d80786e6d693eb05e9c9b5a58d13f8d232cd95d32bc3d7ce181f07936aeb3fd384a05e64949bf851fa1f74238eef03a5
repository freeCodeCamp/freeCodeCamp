# json-schema-resolver

[![CI](https://github.com/Eomm/json-schema-resolver/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Eomm/json-schema-resolver/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/json-schema-resolver.svg?style=flat)](https://www.npmjs.com/package/json-schema-resolver)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Resolve all `$refs` in your [JSON schema](https://json-schema.org/specification.html)!  
This module will resolve the `$ref` keyword against the `externalSchemas` you will provide.  
By resolving the `$ref` keyword, means that you get back a single BIG inlined JSON schema that does not rely on any external schema.
If a reference is missing, it will not throw any error.


## Install

```sh
npm install json-schema-resolver
```

This plugin support Node.js >= 10

## Usage: resolve one schema against external schemas

The `$ref` string is going to be modified to point to a local reference URI: `#/definitions/<generated key>`.
Moreover, the `definitions` keyword will be decorated with the external schemas to get only one JSON schema resolved as output.

By default the `<generated key>` has the `def-${index}` format.
You can customize it by passing a `buildLocalReference` function as follows:

```js
const RefResolver = require('json-schema-resolver')

const ref = RefResolver({
  clone: true, // Clone the input schema without changing it. Default: false,
  buildLocalReference (json, baseUri, fragment, i) {
    // the `json` that is being resolved
    // the `baseUri` object of the schema. Its values is the parse result from https://www.npmjs.com/package/fast-uri
    // the `fragment` is the `$ref` string when the `$ref` is a relative reference
    // the `i` is a local counter to generate a unique key
    return `def-${i}` // default value
  }
})

const inputSchema = {
  $id: 'http://example.com/SimplePerson',
  type: 'object',
  properties: {
    name: { type: 'string' },
    address: { $ref: 'relativeAddress#' },
    houses: { type: 'array', items: { $ref: 'relativeAddress#' } }
  }
}

const addresSchema = {
  $id: 'relativeAddress', // Note: prefer always absolute URI like: http://mysite.com
  type: 'object',
  properties: {
    zip: { type: 'string' },
    city: { type: 'string' }
  }
}

const singleSchema = ref.resolve(inputSchema, { externalSchemas: [addresSchema] })
// inputSchema is untouched thanks to clone:true
```

`singleSchema` will be like:

```json
{
  "$id": "http://example.com/SimplePerson",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "address": {
      "$ref": "#/definitions/def-0"
    },
    "houses": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/def-0"
      }
    }
  },
  "definitions": {
    "def-0": {
      "$id": "relativeAddress",
      "type": "object",
      "properties": {
        "zip": {
          "type": "string"
        },
        "city": {
          "type": "string"
        }
      }
    }
  }
}
```

## Usage: resolve multiple schemas against external shared schemas

When you have multiple schemas to resolve against a collection of shared schema you need to use this
module with little changes.

This is needed to have all the same definitions path (`#/definitions/<generated key>`) across all the
root schemas

```js
const ref = RefResolver({
  clone: true, // Clone the input schema without changing it. Default: false
  applicationUri: 'my-application.org', // You need to provide an unique URI to resolve relative `$id`s
  externalSchemas: [addresSchema] // The schemas provided at the creation of the resolver, will be used evvery time `.resolve` will be called
})

const inputSchema = {
  $id: 'http://example.com/SimplePerson',
  type: 'object',
  properties: {
    name: { type: 'string' },
    address: { $ref: 'relativeAddress#' },
    houses: { type: 'array', items: { $ref: 'relativeAddress#' } }
  }
}

// the resolved schema DOES NOT have definitions added
const singleSchema = ref.resolve(inputSchema)
const anotherResolvedSchema = ref.resolve(input_2_Schema) // resolve schemas within the same externalSchemas

// to get the definition you need only to call:
const sharedDefinitions = ref.definitions()
```

## Debug

To debug this module, simply set:

```bash
export DEBUG=json-schema-resolver
```

## License

Licensed under [MIT](./LICENSE).
