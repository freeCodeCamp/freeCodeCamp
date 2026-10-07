// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Test using this disabled, see https://github.com/fastify/fast-json-stringify/pull/683
import Ajv from 'ajv'
import build, { restore, Schema, validLargeArrayMechanisms } from '..'
import { expectError, expectType } from 'tsd'

// Number schemas
build({
  type: 'number'
})(25)
build({
  type: 'integer'
})(-5)
build({
  type: 'integer'
})(5n)

build({
  type: 'number'
}, { rounding: 'ceil' })
build({
  type: 'number'
}, { rounding: 'floor' })
build({
  type: 'number'
}, { rounding: 'round' })
build({
  type: 'number'
}, { rounding: 'trunc' })
expectError(build({
  type: 'number'
}, { rounding: 'invalid' }))

// String schema
build({
  type: 'string'
})('foobar')

// Boolean schema
build({
  type: 'boolean'
})(true)

// Null schema
build({
  type: 'null'
})(null)

// Array schemas
build({
  type: 'array',
  items: { type: 'number' }
})([25])
build({
  type: 'array',
  items: [{ type: 'string' }, { type: 'integer' }]
})(['hello', 42])

// Object schemas
build({
  type: 'object'
})({})
build({
  type: 'object',
  properties: {
    foo: { type: 'string' },
    bar: { type: 'integer' }
  },
  required: ['foo'],
  patternProperties: {
    'baz*': { type: 'null' }
  },
  additionalProperties: {
    type: 'boolean'
  }
})({ foo: 'bar' })
build({
  type: 'object',
  properties: {
    foo: { type: 'string' },
    bar: { type: 'integer' }
  },
  required: ['foo'],
  patternProperties: {
    'baz*': { type: 'null' }
  },
  additionalProperties: {
    type: 'boolean'
  }
}, { rounding: 'floor' })({ foo: 'bar' })

// Reference schemas
build({
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
    },
    def: {
      type: 'null'
    }
  },
  type: 'object',
  properties: {
    nickname: {
      $ref: '#/definitions/str'
    }
  },
  patternProperties: {
    num: {
      $ref: '#/definitions/num'
    }
  },
  additionalProperties: {
    $ref: '#/definitions/def'
  }
})({ nickname: '', num: { int: 5 }, other: null })

// Conditional/Combined schemas
build({
  title: 'Conditional/Combined Schema',
  type: 'object',
  properties: {
    something: {
      anyOf: [
        { type: 'string' },
        { type: 'boolean' }
      ]
    }
  },
  if: {
    properties: {
      something: { type: 'string' }
    }
  },
  then: {
    properties: {
      somethingElse: { type: 'number' }
    }
  },
  else: {
    properties: {
      somethingElse: { type: 'null' }
    }
  }
})({ something: 'a string', somethingElse: 42 })

// String schema with format

build({
  type: 'string',
  format: 'date-time'
})(new Date())

/*
This overload doesn't work yet -
TypeScript chooses the generic for the schema
before it chooses the overload for the options
parameter.
let str: string, ajv: Ajv
str = build({
    type: 'number'
}, { debugMode: true }).code
ajv = build({
    type: 'number'
}, { debugMode: true }).ajv
str = build({
    type: 'number'
}, { mode: 'debug' }).code
ajv = build({
    type: 'number'
}, { mode: 'debug' }).ajv
str = build({
    type: 'number'
}, { mode: 'standalone' })
*/

const debugCompiled = build({
  title: 'default string',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    }
  }
}, { mode: 'debug' })
expectType<ReturnType<typeof build>>(build.restore(debugCompiled))
expectType<ReturnType<typeof build>>(restore(debugCompiled))

expectType<string[]>(build.validLargeArrayMechanisms)
expectType<string[]>(validLargeArrayMechanisms)

/**
 * Schema inference
 */

// With inference
interface InferenceSchema {
  id: string;
  a?: number;
}

const stringify3 = build({
  type: 'object',
  properties: { a: { type: 'string' } },
})
stringify3<InferenceSchema>({ id: '123' })
stringify3<InferenceSchema>({ a: 123, id: '123' })
expectError(stringify3<InferenceSchema>({ anotherOne: 'bar' }))
expectError(stringify3<Schema>({ a: 'bar' }))

// Without inference
const stringify4 = build({
  type: 'object',
  properties: { a: { type: 'string' } },
})
stringify4({ id: '123' })
stringify4({ a: 123, id: '123' })
stringify4({ anotherOne: 'bar' })
stringify4({ a: 'bar' })

// Without inference - string type
const stringify5 = build({
  type: 'string',
})
stringify5('foo')
expectError(stringify5({ id: '123' }))

// Without inference - null type
const stringify6 = build({
  type: 'null',
})
stringify6(null)
expectError(stringify6('a string'))

// Without inference - boolean type
const stringify7 = build({
  type: 'boolean',
})
stringify7(true)
expectError(stringify7('a string'))

// largeArrayMechanism

build({}, { largeArrayMechanism: 'json-stringify' })
build({}, { largeArrayMechanism: 'default' })
expectError(build({} as Schema, { largeArrayMechanism: 'invalid' }))

build({}, { largeArraySize: 2000 })
build({}, { largeArraySize: '2e4' })
build({}, { largeArraySize: 2n })
expectError(build({} as Schema, { largeArraySize: ['asdf'] }))
