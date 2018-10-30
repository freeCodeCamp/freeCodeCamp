import createValidator = require('../')

/** Static assertion that `value` has type `T` */
// Disable tslint here b/c the generic is used to let us do a type coercion and
// validate that coercion works for the type value "passed into" the function.
// tslint:disable-next-line:no-unnecessary-generics
function assertType<T>(value: T): void {}

const input = null as unknown

const nullValidator = createValidator({ type: 'null' })
assertType<{ type: 'null' }>(nullValidator.toJSON())

if (nullValidator(input)) {
  assertType<null>(input)
}

assertType<createValidator.ValidationError[]>(nullValidator.errors)
assertType<createValidator.ValidationError>(nullValidator.errors[0])
assertType<string>(nullValidator.errors[0].field)
assertType<string>(nullValidator.errors[0].message)
assertType<string>(nullValidator.errors[0].type)
assertType<unknown>(nullValidator.errors[0].value)

const numberValidator = createValidator({ type: 'number' })
assertType<{ type: 'number' }>(numberValidator.toJSON())

if (numberValidator(input)) {
  assertType<number>(input)
}

const stringValidator = createValidator({ type: 'string' })
assertType<{ type: 'string' }>(stringValidator.toJSON())

if (stringValidator(input)) {
  assertType<string>(input)
}

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

if (personValidator(input)) {
  assertType<string>(input.name)
  if (typeof input.age !== 'undefined') assertType<number>(input.age)
  if (typeof input.age !== 'number') assertType<undefined>(input.age)
}

const namesValidator = createValidator({
  type: 'array',
  items: { type: 'string' }
})

if (namesValidator(input)) {
  assertType<number>(input.length)
  assertType<string>(input[0])
}

const boxValidator = createValidator({
  type: 'object',
  properties: {
    name: { type: 'string' },
    items: { type: 'array', items: { type: 'boolean' } },
  },
  required: [
    'name',
    'items',
  ]
})

if (boxValidator(input)) {
  assertType<string>(input.name)
  assertType<number>(input.items.length)
  assertType<boolean>(input.items[0])
}

const matrixValidator = createValidator({
  type: 'array',
  items: {
    type: 'array',
    items: {
      type: 'number'
    }
  }
})

if (matrixValidator(input)) {
  assertType<number>(input[0][0])
}

const userValidator = createValidator({
  type: 'object',
  properties: {
    name: { type: 'string' },
    items: { type: 'array', items: { type: 'string' } },
  },
  required: [
    'name',
    'items',
  ]
})

if (userValidator(input)) {
  assertType<string>(input.name)
  assertType<number>(input.items.length)
  assertType<string>(input.items[0])
}

const user2Validator = createValidator({
  type: 'object',
  properties: {
    name: {
      type: 'object',
      properties: {
        first: { type: 'string' },
        last: { type: 'string' },
      },
      required: [
        'last' as 'last'
      ]
    },
    items: {
      type: 'array',
      items: { type: 'string' },
    }
  },
  required: [
    'name'
  ]
})

if (user2Validator(input)) {
  assertType<{ first: string | undefined, last: string }>(input.name)
  if (typeof input.name.first !== 'undefined') assertType<string>(input.name.first)
  if (typeof input.name.first !== 'string') assertType<undefined>(input.name.first)
  assertType<string>(input.name.last)

  if (input.items !== undefined) {
    assertType<number>(input.items.length)
    assertType<string>(input.items[0])
  }
}

const booleanValidator = createValidator({
  enum: [true, false]
})

if (booleanValidator(input)) {
  assertType<boolean>(input)
}

const specificValuesValidator = createValidator({
  enum: [
    true as true,
    1000 as 1000,
    'XX' as 'XX'
  ]
})

if (specificValuesValidator(input)) {
  if (input !== true && input !== 1000) assertType<'XX'>(input)
  if (input !== 1000 && input !== 'XX') assertType<true>(input)
  if (input !== 'XX' && input !== true) assertType<1000>(input)
}

const metricValidator = createValidator({
  type: 'object',
  properties: {
    name: { type: 'string', enum: ['page-view' as 'page-view'] },
    page: { type: 'string', minLength: 0 }
  },
  required: [
    'name',
    'page'
  ]
})

if (metricValidator(input)) {
  assertType<'page-view'>(input.name)
  assertType<string>(input.page)
}

const noRequiredFieldsValidator = createValidator({
  type: 'object',
  properties: {
    a: { type: 'string' },
    b: { type: 'string' },
    c: { type: 'string' }
  }
})

if (noRequiredFieldsValidator(input)) {
  if (typeof input.a !== 'string') assertType<undefined>(input.a)
  if (typeof input.b !== 'string') assertType<undefined>(input.b)
  if (typeof input.c !== 'string') assertType<undefined>(input.c)
  if (typeof input.a !== 'undefined') assertType<string>(input.a)
  if (typeof input.b !== 'undefined') assertType<string>(input.b)
  if (typeof input.c !== 'undefined') assertType<string>(input.c)
}

const signupValidator = createValidator({
  type: 'object',
  properties: {
    email: {
      type: 'string'
    },
    paymentInformation: {
      type: 'object',
      properties: {
        plan: { type: 'string' },
        token: { type: 'string' }
      },
      required: [
        'plan' as 'plan',
        'token' as 'token'
      ]
    }
  },
  required: [
    'paymentInformation'
  ]
})

if (signupValidator(input)) {
  if (typeof input.email !== 'string') assertType<undefined>(input.email)
  if (typeof input.email !== 'undefined') assertType<string>(input.email)
  assertType<string>(input.paymentInformation.plan)
  assertType<string>(input.paymentInformation.token)
}

const animalValidator = createValidator({
  oneOf: [
    {
      type: 'object',
      properties: {
        type: { enum: ['cat' as 'cat'] },
        name: { type: 'string' }
      },
      required: [
        'type',
        'name'
      ]
    },
    {
      type: 'object',
      properties: {
        type: { enum: ['dog' as 'dog'] },
        name: { type: 'string' }
      },
      required: [
        'type',
        'name'
      ]
    }
  ]
})

if (animalValidator(input)) {
  if (input.type !== 'cat') assertType<'dog'>(input.type)
  if (input.type !== 'dog') assertType<'cat'>(input.type)
  assertType<string>(input.name)
}

const shapeValidator = createValidator({
  oneOf: [
    { type: 'object', properties: { kind: { enum: ['triangle' as 'triangle'] } }, required: ['kind'] },
    { type: 'object', properties: { kind: { enum: ['rectangle' as 'rectangle'] } }, required: ['kind'] },
    { type: 'object', properties: { kind: { enum: ['circle' as 'circle'] } }, required: ['kind'] },
  ]
})

if (shapeValidator(input)) {
  if (input.kind !== 'triangle' && input.kind !== 'rectangle') assertType<'circle'>(input.kind)
  if (input.kind !== 'rectangle' && input.kind !== 'circle') assertType<'triangle'>(input.kind)
  if (input.kind !== 'circle' && input.kind !== 'triangle') assertType<'rectangle'>(input.kind)
}

const foobar = createValidator({
  oneOf: [
    { type: 'object', properties: { a: { type: 'string' } }, required: ['a'] },
    { type: 'object', properties: { b: { type: 'number' } }, required: ['b'] },
    { type: 'object', properties: { c: { type: 'boolean' } }, required: ['c'] },
    { type: 'object', properties: { d: { type: 'null' } }, required: ['d'] },
  ]
})

if (foobar(input)) {
  if ('a' in input) assertType<string>(input.a)
  if ('b' in input) assertType<number>(input.b)
  if ('c' in input) assertType<boolean>(input.c)
  if ('d' in input) assertType<null>(input.d)
}

const stringOrNullValidator = createValidator({
  oneOf: [
    { type: 'string' },
    { type: 'null' }
  ]
})

if (stringOrNullValidator(input)) {
  if (typeof input !== 'object') assertType<string>(input)
  if (typeof input !== 'string') assertType<null>(input)
}

const primitiveValidator = createValidator({
  oneOf: [
    { type: 'string' },
    { type: 'number' },
    { type: 'boolean' }
  ]
})

if (primitiveValidator(input)) {
  if (typeof input !== 'string' && typeof input !== 'number') assertType<boolean>(input)
  if (typeof input !== 'number' && typeof input !== 'boolean') assertType<string>(input)
  if (typeof input !== 'boolean' && typeof input !== 'string') assertType<number>(input)
}

const overengineeredColorValidator = createValidator({
  oneOf: [
    { enum: ['red' as 'red', 'pink' as 'pink'] },
    { enum: ['green' as 'green', 'olive' as 'olive'] },
    { enum: ['blue' as 'blue', 'teal' as 'teal'] },
    { enum: ['yellow' as 'yellow', 'cream' as 'cream'] }
  ]
})

if (overengineeredColorValidator(input)) {
  if (input !== 'red' && input !== 'pink' && input !== 'green' && input !== 'olive' && input !== 'blue' && input !== 'teal' && input !== 'yellow') assertType<'cream'>(input)
  if (input !== 'pink' && input !== 'green' && input !== 'olive' && input !== 'blue' && input !== 'teal' && input !== 'yellow' && input !== 'cream') assertType<'red'>(input)
  if (input !== 'green' && input !== 'olive' && input !== 'blue' && input !== 'teal' && input !== 'yellow' && input !== 'cream' && input !== 'red') assertType<'pink'>(input)
  if (input !== 'olive' && input !== 'blue' && input !== 'teal' && input !== 'yellow' && input !== 'cream' && input !== 'red' && input !== 'pink') assertType<'green'>(input)
  if (input !== 'blue' && input !== 'teal' && input !== 'yellow' && input !== 'cream' && input !== 'red' && input !== 'pink' && input !== 'green') assertType<'olive'>(input)
  if (input !== 'teal' && input !== 'yellow' && input !== 'cream' && input !== 'red' && input !== 'pink' && input !== 'green' && input !== 'olive') assertType<'blue'>(input)
  if (input !== 'yellow' && input !== 'cream' && input !== 'red' && input !== 'pink' && input !== 'green' && input !== 'olive' && input !== 'blue') assertType<'teal'>(input)
  if (input !== 'cream' && input !== 'red' && input !== 'pink' && input !== 'green' && input !== 'olive' && input !== 'blue' && input !== 'teal') assertType<'yellow'>(input)
}

const nullableStringValidator = createValidator({
  type: ['string', 'null']
})

if (nullableStringValidator(input)) {
  if (typeof input !== 'object') assertType<string>(input)
  if (typeof input !== 'string') assertType<null>(input)
}

const nullableNameValidator = createValidator({
  type: 'object',
  properties: {
    name: { type: ['string', 'null'] }
  },
  required: [
    'name'
  ]
})

if (nullableNameValidator(input)) {
  if (typeof input.name !== 'object') assertType<string>(input.name)
  if (typeof input.name !== 'string') assertType<null>(input.name)
}

const nullableInventoryValidator = createValidator({
  type: 'object',
  properties: {
    inventory: {
      type: ['array', 'null'],
      items: { type: 'string' }
    }
  },
  required: [
    'inventory'
  ]
})

if (nullableInventoryValidator(input)) {
  if (input.inventory === null) assertType<null>(input.inventory)
  if (input.inventory !== null) assertType<string[]>(input.inventory)
}

const nullableParentValidator = createValidator({
  type: 'object',
  properties: {
    parent: {
      type: ['object', 'null'],
      properties: {
        name: { type: 'string' }
      },
      required: [
        'name' as 'name'
      ]
    }
  },
  required: [
    'parent'
  ]
})

if (nullableParentValidator(input)) {
  if (input.parent === null) assertType<null>(input.parent)
  if (input.parent !== null) assertType<string>(input.parent.name)
}
