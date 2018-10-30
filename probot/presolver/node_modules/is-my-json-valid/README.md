# is-my-json-valid

A [JSONSchema](http://json-schema.org/) validator that uses code generation
to be extremely fast

```
npm install is-my-json-valid
```

It passes the entire JSONSchema v4 test suite except for `remoteRefs` and `maxLength`/`minLength` when using unicode surrogate pairs.

[![build status](http://img.shields.io/travis/mafintosh/is-my-json-valid.svg?style=flat)](http://travis-ci.org/mafintosh/is-my-json-valid)

## Usage

Simply pass a schema to compile it

``` js
var validator = require('is-my-json-valid')

var validate = validator({
  required: true,
  type: 'object',
  properties: {
    hello: {
      required: true,
      type: 'string'
    }
  }
})

console.log('should be valid', validate({hello: 'world'}))
console.log('should not be valid', validate({}))

// get the last list of errors by checking validate.errors
// the following will print [{field: 'data.hello', message: 'is required'}]
console.log(validate.errors)
```

You can also pass the schema as a string

``` js
var validate = validator('{"type": ... }')
```

Optionally you can use the require submodule to load a schema from `__dirname`

``` js
var validator = require('is-my-json-valid/require')
var validate = validator('my-schema.json')
```

## Custom formats

is-my-json-valid supports the formats specified in JSON schema v4 (such as date-time).
If you want to add your own custom formats pass them as the formats options to the validator

``` js
var validate = validator({
  type: 'string',
  required: true,
  format: 'only-a'
}, {
  formats: {
    'only-a': /^a+$/
  }
})

console.log(validate('aa')) // true
console.log(validate('ab')) // false
```

## External schemas

You can pass in external schemas that you reference using the `$ref` attribute as the `schemas` option

``` js
var ext = {
  required: true,
  type: 'string'
}

var schema = {
  $ref: '#ext' // references another schema called ext
}

// pass the external schemas as an option
var validate = validator(schema, {schemas: {ext: ext}})

validate('hello') // returns true
validate(42) // return false
```

## Filtering away additional properties

is-my-json-valid supports filtering away properties not in the schema

``` js
var filter = validator.filter({
  required: true,
  type: 'object',
  properties: {
    hello: {type: 'string', required: true}
  },
  additionalProperties: false
})

var doc = {hello: 'world', notInSchema: true}
console.log(filter(doc)) // {hello: 'world'}
```

## Verbose mode shows more information about the source of the error

When the `verbose` options is set to `true`, `is-my-json-valid` also outputs:

- `value`: The data value that caused the error
- `schemaPath`: an array of keys indicating which sub-schema failed

``` js
var schema = {
  required: true,
  type: 'object',
  properties: {
    hello: {
      required: true,
      type: 'string'
    }
  }
}
var validate = validator(schema, {
  verbose: true
})

validate({hello: 100});
console.log(validate.errors)
// [ { field: 'data.hello',
//     message: 'is the wrong type',
//     value: 100,
//     type: 'string',
//     schemaPath: [ 'properties', 'hello' ] } ]
```

Many popular libraries make it easy to retrieve the failing rule with the `schemaPath`:
```
var schemaPath = validate.errors[0].schemaPath
var R = require('ramda')

console.log( 'All evaluate to the same thing: ', R.equals(
  schema.properties.hello,
  { required: true, type: 'string' },
  R.path(schemaPath, schema),
  require('lodash').get(schema, schemaPath),
  require('jsonpointer').get(schema, [""].concat(schemaPath))
))
// All evaluate to the same thing: true
```

## Greedy mode tries to validate as much as possible

By default is-my-json-valid bails on first validation error but when greedy is
set to true it tries to validate as much as possible:

``` js
var validate = validator({
  type: 'object',
  properties: {
    x: {
      type: 'number'
    }
  },
  required: ['x', 'y']
}, {
  greedy: true
});

validate({x: 'string'});
console.log(validate.errors) // [{field: 'data.y', message: 'is required'},
                             //  {field: 'data.x', message: 'is the wrong type'}]
```

## Error messages

Here is a list of possible `message` values for errors:

* `is required`
* `is the wrong type`
* `has additional items`
* `must be FORMAT format` (FORMAT is the `format` property from the schema)
* `must be unique`
* `must be an enum value`
* `dependencies not set`
* `has additional properties`
* `referenced schema does not match`
* `negative schema matches`
* `pattern mismatch`
* `no schemas match`
* `no (or more than one) schemas match`
* `has a remainder`
* `has more properties than allowed`
* `has less properties than allowed`
* `has more items than allowed`
* `has less items than allowed`
* `has longer length than allowed`
* `has less length than allowed`
* `is less than minimum`
* `is more than maximum`

## Performance

is-my-json-valid uses code generation to turn your JSON schema into basic javascript code that is easily optimizeable by v8.

At the time of writing, is-my-json-valid is the __fastest validator__ when running

* [json-schema-benchmark](https://github.com/Muscula/json-schema-benchmark)
* [cosmicreals.com benchmark](http://cosmicrealms.com/blog/2014/08/29/benchmark-of-node-dot-js-json-validation-modules-part-3/)
* [jsck benchmark](https://github.com/pandastrike/jsck/issues/72#issuecomment-70992684)
* [themis benchmark](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)
* [z-schema benchmark](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)

If you know any other relevant benchmarks open a PR and I'll add them.

## TypeScript support

This library ships with TypeScript typings. They are still early on and not perfect at the moment, but should hopefully handle the most common cases. If you find anything that doesn't work, please open an issue and we'll try to solve it.

The typings are using `unknown` and thus require TypeScript 3.0 or later.

Here is a quick sample of usage together with express:

```typescript
import createError = require('http-errors')
import createValidator = require('is-my-json-valid')
import { Request, Response, NextFunction } from 'express'

const personValidator = createValidator({
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
  },
  required: [
    'name'
  ]
})

export function post (req: Request, res: Response, next: NextFunction) {
  // Here req.body is typed as: any

  if (!personValidator(req.body)) {
    throw createError(400, { errors: personValidator.errors })
  }

  // Here req.body is typed as: { name: string, age: number | undefined }
}
```

As you can see, the typings for is-my-json-valid will contruct an interface from the schema passed in. This allows you to work with your incoming json body in a type safe way.

## License

MIT
