# fast-json-stringify

[![CI](https://github.com/fastify/fast-json-stringify/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fastify/fast-json-stringify/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/fast-json-stringify.svg?style=flat)](https://www.npmjs.com/package/fast-json-stringify)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![NPM downloads](https://img.shields.io/npm/dm/fast-json-stringify.svg?style=flat)](https://www.npmjs.com/package/fast-json-stringify)


__fast-json-stringify__ is significantly faster than `JSON.stringify()` for small payloads.
Its performance advantage shrinks as your payload grows.
It pairs well with [__flatstr__](https://www.npmjs.com/package/flatstr), which triggers a V8 optimization that improves performance when eventually converting the string to a `Buffer`.


### How it works

fast-json-stringify requires a [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) input to generate a fast `stringify` function.

##### Benchmarks

- Machine: `EX41S-SSD, Intel Core i7, 4Ghz, 64GB RAM, 4C/8T, SSD`.
- Node.js `v18.12.1`

```
FJS creation x 4,129 ops/sec ±0.82% (92 runs sampled)
CJS creation x 184,196 ops/sec ±0.12% (97 runs sampled)
AJV Serialize creation x 61,130,591 ops/sec ±0.40% (92 runs sampled)
JSON.stringify array x 5,057 ops/sec ±0.10% (100 runs sampled)
fast-json-stringify array default x 6,243 ops/sec ±0.14% (98 runs sampled)
fast-json-stringify array json-stringify x 6,261 ops/sec ±0.30% (99 runs sampled)
compile-json-stringify array x 6,842 ops/sec ±0.18% (96 runs sampled)
AJV Serialize array x 6,964 ops/sec ±0.11% (95 runs sampled)
JSON.stringify large array x 248 ops/sec ±0.07% (90 runs sampled)
fast-json-stringify large array default x 99.96 ops/sec ±0.22% (74 runs sampled)
fast-json-stringify large array json-stringify x 248 ops/sec ±0.07% (90 runs sampled)
compile-json-stringify large array x 317 ops/sec ±0.09% (89 runs sampled)
AJV Serialize large array x 111 ops/sec ±0.07% (33 runs sampled)
JSON.stringify long string x 16,002 ops/sec ±0.09% (98 runs sampled)
fast-json-stringify long string x 15,979 ops/sec ±0.09% (96 runs sampled)
compile-json-stringify long string x 15,952 ops/sec ±0.31% (97 runs sampled)
AJV Serialize long string x 21,416 ops/sec ±0.08% (98 runs sampled)
JSON.stringify short string x 12,944,272 ops/sec ±0.09% (96 runs sampled)
fast-json-stringify short string x 30,585,790 ops/sec ±0.27% (97 runs sampled)
compile-json-stringify short string x 30,656,406 ops/sec ±0.12% (96 runs sampled)
AJV Serialize short string x 30,406,785 ops/sec ±0.37% (96 runs sampled)
JSON.stringify obj x 3,153,043 ops/sec ±0.33% (99 runs sampled)
fast-json-stringify obj x 6,866,434 ops/sec ±0.11% (100 runs sampled)
compile-json-stringify obj x 15,886,723 ops/sec ±0.15% (98 runs sampled)
AJV Serialize obj x 8,969,043 ops/sec ±0.36% (97 runs sampled)
JSON stringify date x 1,126,547 ops/sec ±0.09% (97 runs sampled)
fast-json-stringify date format x 1,836,188 ops/sec ±0.12% (99 runs sampled)
compile-json-stringify date format x 1,125,735 ops/sec ±0.19% (98 runs sampled)
```

#### Table of contents:
- <a href="#example">`Example`</a>
- <a href="#options">`Options`</a>
- <a href="#api">`API`</a>
 - <a href="#fastJsonStringify">`fastJsonStringify`</a>
 - <a href="#specific">`Specific use cases`</a>
 - <a href="#required">`Required`</a>
 - <a href="#missingFields">`Missing fields`</a>
 - <a href="#patternProperties">`Pattern Properties`</a>
 - <a href="#additionalProperties">`Additional Properties`</a>
 - <a href="#AnyOf-and-OneOf">`AnyOf` and `OneOf`</a>
 - <a href="#ref">`Reuse - $ref`</a>
 - <a href="#long">`Long integers`</a>
 - <a href="#integer">`Integers`</a>
 - <a href="#nullable">`Nullable`</a>
 - <a href="#largearrays">`Large Arrays`</a>
- <a href="#security">`Security Notice`</a>
- <a href="#debug">`Debug Mode`</a>
- <a href="#standalone">`Standalone Mode`</a>
- <a href="#acknowledgments">`Acknowledgments`</a>
- <a href="#license">`License`</a>


<a name="example"></a>
Try it out on RunKit: <a href="https://runkit.com/npm/fast-json-stringify">https://runkit.com/npm/fast-json-stringify</a>
## Example

```js
const fastJson = require('fast-json-stringify')
const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer'
    },
    reg: {
      type: 'string'
    }
  }
})

console.log(stringify({
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  reg: /"([^"]|\\")*"/
}))
```

<a name="options"></a>
## Options

Optionally, you may provide to `fast-json-stringify` an option object as the second parameter:

```js
const fastJson = require('fast-json-stringify')
const stringify = fastJson(mySchema, {
  schema: { ... },
  ajv: { ... },
  rounding: 'ceil'
})
```

- `schema`: external schemas references by $ref property. [More details](#ref)
- `ajv`: [ajv v8 instance's settings](https://ajv.js.org/options.html) for those properties that require `ajv`. [More details](#anyof)
- `rounding`: setup how the `integer` types will be rounded when not integers. [More details](#integer)
- `largeArrayMechanism`: set the mechanism that should be used to handle large
(by default `20000` or more items) arrays. [More details](#largearrays)


<a name="api"></a>
## API
<a name="fastJsonStringify"></a>
### fastJsonStringify(schema)

Build a `stringify()` function based on [jsonschema draft 7 spec](https://json-schema.org/specification-links.html#draft-7).

Supported types:

 * `'string'`
 * `'integer'`
 * `'number'`
 * `'array'`
 * `'object'`
 * `'boolean'`
 * `'null'`

And nested ones, too.

<a name="specific"></a>
#### Specific use cases

| Instance | Serialized as                |
| -------- | ---------------------------- |
| `Date`   | `string` via `toISOString()` |
| `RegExp` | `string`                     |
| `BigInt` | `integer` via `toString`     |

[JSON Schema built-in formats](https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats) for dates are supported and will be serialized as:

| Format      | Serialized format example  |
| ----------- | -------------------------- |
| `date-time` | `2020-04-03T09:11:08.615Z` |
| `date`      | `2020-04-03`               |
| `time`      | `09:11:08`                 |

**Note**: In the case of a string formatted Date and not Date Object, there will be no manipulation on it. It should be properly formatted.

Example with a Date object:

```javascript
const stringify = fastJson({
  title: 'Example Schema with string date-time field',
  type: 'string',
  format: 'date-time'
})

const date = new Date()
console.log(stringify(date)) // '"YYYY-MM-DDTHH:mm:ss.sssZ"'
```


<a name="required"></a>
#### Required
You can set specific fields of an object as required in your schema by adding the field name inside the `required` array in your schema.
Example:
```javascript
const schema = {
  title: 'Example Schema with required field',
  type: 'object',
  properties: {
    nickname: {
      type: 'string'
    },
    mail: {
      type: 'string'
    }
  },
  required: ['mail']
}
```
If the object to stringify is missing the required field(s), `fast-json-stringify` will throw an error.

<a name="missingFields"></a>
#### Missing fields
If a field *is present* in the schema (and is not required) but it *is not present* in the object to stringify, `fast-json-stringify` will not write it in the final string.
Example:
```javascript
const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    nickname: {
      type: 'string'
    },
    mail: {
      type: 'string'
    }
  }
})

const obj = {
  mail: 'mail@example.com'
}

console.log(stringify(obj)) // '{"mail":"mail@example.com"}'
```

<a name="defaults"></a>
#### Defaults
`fast-json-stringify` supports `default` jsonschema key in order to serialize a value
if it is `undefined` or not present.

Example:
```javascript
const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    nickname: {
      type: 'string',
      default: 'the default string'
    }
  }
})

console.log(stringify({})) // '{"nickname":"the default string"}'
console.log(stringify({nickname: 'my-nickname'})) // '{"nickname":"my-nickname"}'
```

<a name="patternProperties"></a>
#### Pattern properties
`fast-json-stringify` supports pattern properties as defined by JSON schema.
*patternProperties* must be an object, where the key is a valid regex and the value is an object, declared in this way: `{ type: 'type' }`.
*patternProperties* will work only for the properties that are not explicitly listed in the properties object.
Example:
```javascript
const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    nickname: {
      type: 'string'
    }
  },
  patternProperties: {
    'num': {
      type: 'number'
    },
    '.*foo$': {
      type: 'string'
    }
  }
})

const obj = {
  nickname: 'nick',
  matchfoo: 42,
  otherfoo: 'str',
  matchnum: 3
}

console.log(stringify(obj)) // '{"matchfoo":"42","otherfoo":"str","matchnum":3,"nickname":"nick"}'
```

<a name="additionalProperties"></a>
#### Additional properties
`fast-json-stringify` supports additional properties as defined by JSON schema.
*additionalProperties* must be an object or a boolean, declared in this way: `{ type: 'type' }`.
*additionalProperties* will work only for the properties that are not explicitly listed in the *properties* and *patternProperties* objects.

If *additionalProperties* is not present or is set to `false`, every property that is not explicitly listed in the *properties* and *patternProperties* objects will be ignored, as described in <a href="#missingFields">Missing fields</a>.
Missing fields are ignored to avoid having to rewrite objects before serializing. However, other schema rules would throw in similar situations.
If *additionalProperties* is set to `true`, it will be used by `JSON.stringify` to stringify the additional properties. If you want to achieve maximum performance, we strongly encourage you to use a fixed schema where possible.
The additional properties will always be serialized at the end of the object.
Example:
```javascript
const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    nickname: {
      type: 'string'
    }
  },
  patternProperties: {
    'num': {
      type: 'number'
    },
    '.*foo$': {
      type: 'string'
    }
  },
  additionalProperties: {
    type: 'string'
  }
})

const obj = {
  nickname: 'nick',
  matchfoo: 42,
  otherfoo: 'str',
  matchnum: 3,
  nomatchstr: 'valar morghulis',
  nomatchint: 313
}

console.log(stringify(obj)) // '{"nickname":"nick","matchfoo":"42","otherfoo":"str","matchnum":3,"nomatchstr":"valar morghulis",nomatchint:"313"}'
```

#### AnyOf and OneOf

`fast-json-stringify` supports the **anyOf** and **oneOf** keywords as defined by JSON schema. Both must be an array of valid JSON schemas. The different schemas will be tested in the specified order. The more schemas `stringify` has to try before finding a match, the slower it will be.

*anyOf* and *oneOf* use [ajv](https://www.npmjs.com/package/ajv) as a JSON schema validator to find the schema that matches the data. This has an impact on performance—only use it as a last resort.

Example:
```javascript
const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    'undecidedType': {
      'anyOf': [{
	type: 'string'
      }, {
	type: 'boolean'
      }]
    }
  }
})
```

When specifying object JSON schemas for *anyOf*, add *required* validation keyword to match only the objects with the properties you want.

Example:
```javascript
const stringify = fastJson({
  title: 'Example Schema',
  type: 'array',
  items: {
    anyOf: [
      {
        type: 'object',
        properties: {
          savedId: { type: 'string' }
        },
        // without "required" validation any object will match
        required: ['savedId']
      },
      {
        type: 'object',
        properties: {
          error: { type: 'string' }
        },
        required: ['error']
      }
    ]
  }
})
```

<a name="if-then-else"></a>
#### If/then/else
`fast-json-stringify` supports `if/then/else` jsonschema feature. See [ajv documentation](https://ajv.js.org/keywords.html#ifthenelse).

Example:
```javascript
const stringify = fastJson({
  'type': 'object',
  'properties': {
  },
  'if': {
    'properties': {
      'kind': { 'type': 'string', 'enum': ['foobar'] }
    }
  },
  'then': {
    'properties': {
      'kind': { 'type': 'string', 'enum': ['foobar'] },
      'foo': { 'type': 'string' },
      'bar': { 'type': 'number' }
    }
  },
  'else': {
    'properties': {
      'kind': { 'type': 'string', 'enum': ['greeting'] },
      'hi': { 'type': 'string' },
      'hello': { 'type': 'number' }
    }
  }
})

console.log(stringify({
  kind: 'greeting',
  foo: 'FOO',
  bar: 42,
  hi: 'HI',
  hello: 45
})) // {"kind":"greeting","hi":"HI","hello":45}
console.log(stringify({
  kind: 'foobar',
  foo: 'FOO',
  bar: 42,
  hi: 'HI',
  hello: 45
})) // {"kind":"foobar","foo":"FOO","bar":42}
```

**NB** Do not declare the properties twice or you will print them twice!

<a name="ref"></a>
#### Reuse - $ref
If you want to reuse a definition of a value, you can use the property `$ref`.
The value of `$ref` must be a string in [JSON Pointer](https://tools.ietf.org/html/rfc6901) format.
Example:
```javascript
const schema = {
  title: 'Example Schema',
  definitions: {
    num: {
      type: 'object',
      properties: {
        int: {
          type: 'integer'
        }
      }
    },
    str: {
      type: 'string'
    }
  },
  type: 'object',
  properties: {
    nickname: {
      $ref: '#/definitions/str'
    }
  },
  patternProperties: {
    'num': {
      $ref: '#/definitions/num'
    }
  },
  additionalProperties: {
    $ref: '#/definitions/def'
  }
}

const stringify = fastJson(schema)
```
If you need to use an external definition, you can pass it as an option to `fast-json-stringify`.
Example:
```javascript
const schema = {
  title: 'Example Schema',
  type: 'object',
  properties: {
    nickname: {
      $ref: 'strings#/definitions/str'
    }
  },
  patternProperties: {
    'num': {
      $ref: 'numbers#/definitions/num'
    }
  },
  additionalProperties: {
    $ref: 'strings#/definitions/def'
  }
}

const externalSchema = {
  numbers: {
    definitions: {
      num: {
        type: 'object',
        properties: {
          int: {
            type: 'integer'
          }
        }
      }
    }
  },
  strings: require('./string-def.json')
}

const stringify = fastJson(schema, { schema: externalSchema })
```
External definitions can also reference each other.
Example:
```javascript
const schema = {
  title: 'Example Schema',
  type: 'object',
  properties: {
    foo: {
      $ref: 'strings#/definitions/foo'
    }
  }
}

const externalSchema = {
  strings: {
    definitions: {
      foo: {
        $ref: 'things#/definitions/foo'
      }
    }
  },
  things: {
    definitions: {
      foo: {
        type: 'string'
      }
    }
  }
}

const stringify = fastJson(schema, { schema: externalSchema })
```

<a name="long"></a>
#### Long integers
By default, the library will handle automatically [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

<a name="integer"></a>
#### Integers
The `type: integer` property will be truncated if a floating point is provided.
You can customize this behavior with the `rounding` option that will accept [`round`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), [`ceil`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil), [`floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), or [`trunc`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc). Default is `trunc`:

```js
const stringify = fastJson(schema, { rounding: 'ceil' })
```


<a name="nullable"></a>
#### Nullable

According to the [Open API 3.0 specification](https://swagger.io/docs/specification/data-models/data-types/#null), a value that can be null must be declared `nullable`.

##### Nullable object
```javascript
const stringify = fastJson({
  'title': 'Nullable schema',
  'type': 'object',
  'nullable': true,
  'properties': {
    'product': {
      'nullable': true,
      'type': 'object',
      'properties': {
        'name': {
          'type': 'string'
        }
      }
    }
  }
})

console.log(stringify({product: {name: "hello"}})) // "{"product":{"name":"hello"}}"
console.log(stringify({product: null})) // "{"product":null}"
console.log(stringify(null)) // null
```

Otherwise, instead of raising an error, null values will be coerced as follows:

- `integer` -> `0`
- `number` -> `0`
- `string` -> `""`
- `boolean` -> `false`
- `object` -> `{}`
- `array` -> `[]`

<a name="largearrays"></a>
#### Large Arrays

Large arrays are, for the scope of this document, defined as arrays containing,
by default, `20000` elements or more. That value can be adjusted via the option
parameter `largeArraySize`.

At some point the overhead caused by the default mechanism used by
`fast-json-stringify` to handle arrays starts increasing exponentially, leading
to slow overall executions.

##### Settings

In order to improve that the user can set the `largeArrayMechanism` and
`largeArraySize` options.

`largeArrayMechanism`'s default value is `default`. Valid values for it are:

- `default` - This option is a compromise between performance and feature set by
still providing the expected functionality out of this lib but giving up some
possible performance gain. With this option set, **large arrays** would be
stringified by joining their stringified elements using `Array.join` instead of
string concatenation for better performance
- `json-stringify` - This option will remove support for schema validation
within **large arrays** completely. By doing so the overhead previously
mentioned is nulled, greatly improving execution time. Mind there's no change
in behavior for arrays not considered _large_

`largeArraySize`'s default value is `20000`. Valid values for it are
integer-like values, such as:

- `20000`
- `2e4`
- `'20000'`
- `'2e4'` - _note this will be converted to `2`, not `20000`_
- `1.5` - _note this will be converted to `1`_

<a name="unsafe"></a>
#### Unsafe string
By default, the library escapes all strings. With the 'unsafe' format, the string isn't escaped. This has a potentially dangerous security issue. You can use it only if you are sure that your data doesn't need escaping. The advantage is a significant performance improvement.

Example:
```javascript
const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    'code': {
	    type: 'string',
	    format 'unsafe'
    }
  }
})
```

##### Benchmarks

For reference, here are some benchmarks for comparison over the three
mechanisms. Benchmarks were conducted on an old machine.

- Machine: `ST1000LM024 HN-M 1TB HDD, Intel Core i7-3610QM @ 2.3GHz, 12GB RAM, 4C/8T`.
- Node.js `v16.13.1`

```
JSON.stringify large array x 157 ops/sec ±0.73% (86 runs sampled)
fast-json-stringify large array default x 48.72 ops/sec ±4.92% (48 runs sampled)
fast-json-stringify large array json-stringify x 157 ops/sec ±0.76% (86 runs sampled)
compile-json-stringify large array x 175 ops/sec ±4.47% (79 runs sampled)
AJV Serialize large array x 58.76 ops/sec ±4.59% (60 runs sampled)
```

<a name="security"></a>
## Security notice

Treat the schema definition as application code, it
is not safe to use user-provided schemas.

To achieve low cost and high performance redaction `fast-json-stringify`
creates and compiles a function (using the `Function` constructor) on initialization.
While the `schema` is currently validated for any developer errors,
there is no guarantee that supplying user-generated schema could not
expose your application to remote attacks.

Users are responsible for sending trusted data. `fast-json-stringify` guarantees that you will get
a valid output only if your input matches the schema or can be coerced to the schema. If your input
doesn't match the schema, you will get undefined behavior.

<a name="debug"></a>
### Debug Mode

The debug mode can be activated during your development to understand what is going on when things do not
work as you expect.

```js
const debugCompiled = fastJson({
  title: 'default string',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    }
  }
}, { mode: 'debug' })

console.log(debugCompiled) // it is a object contain code, ajv instance
const rawString = debugCompiled.code // it is the generated code
console.log(rawString)

const stringify = fastJson.restore(debugCompiled) // use the generated string to get back the `stringify` function
console.log(stringify({ firstName: 'Foo', surname: 'bar' })) // '{"firstName":"Foo"}'
```

<a name="standalone"></a>
### Standalone Mode

The standalone mode is used to compile the code that can be directly run by `node`
itself. You need to have `fast-json-stringify` installed for the standalone code to work.

```js
const fs = require('fs')
const code = fastJson({
  title: 'default string',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    }
  }
}, { mode: 'standalone' })

fs.writeFileSync('stringify.js', code)
const stringify = require('stringify.js')
console.log(stringify({ firstName: 'Foo', surname: 'bar' })) // '{"firstName":"Foo"}'
```

<a name="acknowledgments"></a>
## Acknowledgments

This project was kindly sponsored by [nearForm](https://nearform.com).

<a name="license"></a>
## License

Licensed under [MIT](./LICENSE).
