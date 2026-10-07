# expect-type

[![CI](https://github.com/mmkal/expect-type/actions/workflows/ci.yml/badge.svg)](https://github.com/mmkal/expect-type/actions/workflows/ci.yml)
![npm](https://img.shields.io/npm/dt/expect-type)
[![X Follow](https://img.shields.io/twitter/follow/mmkal)](https://x.com/mmkalmmkal)

Compile-time tests for types. Useful to make sure types don't regress into being overly permissive as changes go in over time.

Similar to `expect`, but with type-awareness. Gives you access to several type-matchers that let you make assertions about the form of a reference or generic type parameter.

```ts
import {expectTypeOf} from 'expect-type'
import {foo, bar} from '../foo'

// make sure `foo` has type {a: number}
expectTypeOf(foo).toEqualTypeOf<{a: number}>()

// make sure `bar` is a function taking a string:
expectTypeOf(bar).parameter(0).toBeString()
expectTypeOf(bar).returns.not.toBeAny()
```

It can be used in your existing test files (and is actually [built in to vitest](https://vitest.dev/guide/testing-types)). Or it can be used in any other type-checked file you'd like - it's built into existing tooling with no dependencies. No extra build step, cli tool, IDE extension, or lint plugin is needed. Just import the function and start writing tests. Failures will be at compile time - they'll appear in your IDE and when you run `tsc`.

See below for lots more examples.

## Contents
<!-- codegen:start {preset: markdownTOC, minDepth: 2, maxDepth: 5} -->
- [Contents](#contents)
- [Installation and usage](#installation-and-usage)
- [Documentation](#documentation)
   - [Features](#features)
   - [Why is my assertion failing?](#why-is-my-assertion-failing)
   - [Why is `.toMatchTypeOf` deprecated?](#why-is-tomatchtypeof-deprecated)
   - [Internal type helpers](#internal-type-helpers)
   - [Error messages](#error-messages)
      - [Concrete "expected" objects vs type arguments](#concrete-expected-objects-vs-type-arguments)
   - [Overloaded functions](#overloaded-functions)
   - [Within test frameworks](#within-test-frameworks)
   - [Vitest](#vitest)
      - [Jest & `eslint-plugin-jest`](#jest--eslint-plugin-jest)
   - [Limitations](#limitations)
- [Similar projects](#similar-projects)
   - [Comparison](#comparison)
- [TypeScript backwards-compatibility](#typescript-backwards-compatibility)
- [Contributing](#contributing)
   - [Documentation of limitations through tests](#documentation-of-limitations-through-tests)
<!-- codegen:end -->

## Installation and usage

```cli
npm install expect-type --save-dev
```

```typescript
import {expectTypeOf} from 'expect-type'
```

## Documentation

The `expectTypeOf` method takes a single argument or a generic type parameter. Neither it nor the functions chained off its return value have any meaningful runtime behaviour. The assertions you write will be _compile-time_ errors if they don't hold true.

### Features

<!-- codegen:start {preset: markdownFromTests, source: test/usage.test.ts} -->
Check an object's type with `.toEqualTypeOf`:

```typescript
expectTypeOf({a: 1}).toEqualTypeOf<{a: number}>()
```

`.toEqualTypeOf` can check that two concrete objects have equivalent types (note: when these assertions _fail_, the error messages can be less informative vs the generic type argument syntax above - see [error messages docs](#error-messages)):

```typescript
expectTypeOf({a: 1}).toEqualTypeOf({a: 1})
```

`.toEqualTypeOf` succeeds for objects with different values, but the same type:

```typescript
expectTypeOf({a: 1}).toEqualTypeOf({a: 2})
```

`.toEqualTypeOf` fails on excess properties:

```typescript
// @ts-expect-error
expectTypeOf({a: 1, b: 1}).toEqualTypeOf<{a: number}>()
```

To allow for extra properties on an object type, use `.toMatchObjectType`. This is a strict check, but only on the subset of keys that are in the expected type:

```typescript
expectTypeOf({a: 1, b: 1}).toMatchObjectType<{a: number}>()
```

`.toMatchObjectType` can check partial matches on deeply nested objects:

```typescript
const user = {
  email: 'a@b.com',
  name: 'John Doe',
  address: {street: '123 2nd St', city: 'New York', zip: '10001', state: 'NY', country: 'USA'},
}

expectTypeOf(user).toMatchObjectType<{name: string; address: {city: string}}>()
```

To check that a type extends another type, use `.toExtend`:

```typescript
expectTypeOf('some string').toExtend<string | boolean>()
// @ts-expect-error
expectTypeOf({a: 1}).toExtend<{b: number}>()
```

`.toExtend` can be used with object types, but `.toMatchObjectType` is usually a better choice when dealing with objects, since it's stricter:

```typescript
expectTypeOf({a: 1, b: 2}).toExtend<{a: number}>() // avoid this
expectTypeOf({a: 1, b: 2}).toMatchObjectType<{a: number}>() // prefer this
```

`.toEqualTypeOf`, `.toMatchObjectType`, and `.toExtend` all fail on missing properties:

```typescript
// @ts-expect-error
expectTypeOf({a: 1}).toEqualTypeOf<{a: number; b: number}>()
// @ts-expect-error
expectTypeOf({a: 1}).toMatchObjectType<{a: number; b: number}>()
// @ts-expect-error
expectTypeOf({a: 1}).toExtend<{a: number; b: number}>()
```

Another example of the difference between `.toExtend`, `.toMatchObjectType`, and `.toEqualTypeOf`. `.toExtend` can be used for "is-a" relationships:

```typescript
type Fruit = {type: 'Fruit'; edible: boolean}
type Apple = {type: 'Fruit'; name: 'Apple'; edible: true}

expectTypeOf<Apple>().toExtend<Fruit>()

// @ts-expect-error - the `editable` property isn't an exact match. In `Apple`, it's `true`, which extends `boolean`, but they're not identical.
expectTypeOf<Apple>().toMatchObjectType<Fruit>()

// @ts-expect-error - Apple is not an identical type to Fruit, it's a subtype
expectTypeOf<Apple>().toEqualTypeOf<Fruit>()

// @ts-expect-error - Apple is a Fruit, but not vice versa
expectTypeOf<Fruit>().toExtend<Apple>()
```

Assertions can be inverted with `.not`:

```typescript
expectTypeOf({a: 1}).not.toExtend<{b: 1}>()
expectTypeOf({a: 1}).not.toMatchObjectType<{b: 1}>()
```

`.not` can be easier than relying on `// @ts-expect-error`:

```typescript
type Fruit = {type: 'Fruit'; edible: boolean}
type Apple = {type: 'Fruit'; name: 'Apple'; edible: true}

expectTypeOf<Apple>().toExtend<Fruit>()

expectTypeOf<Fruit>().not.toExtend<Apple>()
expectTypeOf<Apple>().not.toEqualTypeOf<Fruit>()
```

Catch any/unknown/never types:

```typescript
expectTypeOf<unknown>().toBeUnknown()
expectTypeOf<any>().toBeAny()
expectTypeOf<never>().toBeNever()

// @ts-expect-error
expectTypeOf<never>().toBeNumber()
```

`.toEqualTypeOf` distinguishes between deeply-nested `any` and `unknown` properties:

```typescript
expectTypeOf<{deeply: {nested: any}}>().not.toEqualTypeOf<{deeply: {nested: unknown}}>()
```

You can test for basic JavaScript types:

```typescript
expectTypeOf(() => 1).toBeFunction()
expectTypeOf({}).toBeObject()
expectTypeOf([]).toBeArray()
expectTypeOf('').toBeString()
expectTypeOf(1).toBeNumber()
expectTypeOf(true).toBeBoolean()
expectTypeOf(() => {}).returns.toBeVoid()
expectTypeOf(Promise.resolve(123)).resolves.toBeNumber()
expectTypeOf(Symbol(1)).toBeSymbol()
expectTypeOf(1n).toBeBigInt()
```

`.toBe...` methods allow for types that extend the expected type:

```typescript
expectTypeOf<number>().toBeNumber()
expectTypeOf<1>().toBeNumber()

expectTypeOf<any[]>().toBeArray()
expectTypeOf<number[]>().toBeArray()

expectTypeOf<string>().toBeString()
expectTypeOf<'foo'>().toBeString()

expectTypeOf<boolean>().toBeBoolean()
expectTypeOf<true>().toBeBoolean()

expectTypeOf<bigint>().toBeBigInt()
expectTypeOf<0n>().toBeBigInt()
```

`.toBe...` methods protect against `any`:

```typescript
const goodIntParser = (s: string) => Number.parseInt(s, 10)
const badIntParser = (s: string) => JSON.parse(s) // uh-oh - works at runtime if the input is a number, but return 'any'

expectTypeOf(goodIntParser).returns.toBeNumber()
// @ts-expect-error - if you write a test like this, `.toBeNumber()` will let you know your implementation returns `any`.
expectTypeOf(badIntParser).returns.toBeNumber()
```

Nullable types:

```typescript
expectTypeOf(undefined).toBeUndefined()
expectTypeOf(undefined).toBeNullable()
expectTypeOf(undefined).not.toBeNull()

expectTypeOf(null).toBeNull()
expectTypeOf(null).toBeNullable()
expectTypeOf(null).not.toBeUndefined()

expectTypeOf<1 | undefined>().toBeNullable()
expectTypeOf<1 | null>().toBeNullable()
expectTypeOf<1 | undefined | null>().toBeNullable()
```

More `.not` examples:

```typescript
expectTypeOf(1).not.toBeUnknown()
expectTypeOf(1).not.toBeAny()
expectTypeOf(1).not.toBeNever()
expectTypeOf(1).not.toBeNull()
expectTypeOf(1).not.toBeUndefined()
expectTypeOf(1).not.toBeNullable()
expectTypeOf(1).not.toBeBigInt()
```

Detect assignability of unioned types:

```typescript
expectTypeOf<number>().toExtend<string | number>()
expectTypeOf<string | number>().not.toExtend<number>()
```

Use `.extract` and `.exclude` to narrow down complex union types:

```typescript
type ResponsiveProp<T> = T | T[] | {xs?: T; sm?: T; md?: T}
const getResponsiveProp = <T>(_props: T): ResponsiveProp<T> => ({})
type CSSProperties = {margin?: string; padding?: string}

const cssProperties: CSSProperties = {margin: '1px', padding: '2px'}

expectTypeOf(getResponsiveProp(cssProperties))
  .exclude<unknown[]>()
  .exclude<{xs?: unknown}>()
  .toEqualTypeOf<CSSProperties>()

expectTypeOf(getResponsiveProp(cssProperties))
  .extract<unknown[]>()
  .toEqualTypeOf<CSSProperties[]>()

expectTypeOf(getResponsiveProp(cssProperties))
  .extract<{xs?: any}>()
  .toEqualTypeOf<{xs?: CSSProperties; sm?: CSSProperties; md?: CSSProperties}>()

expectTypeOf<ResponsiveProp<number>>().exclude<number | number[]>().toHaveProperty('sm')
expectTypeOf<ResponsiveProp<number>>().exclude<number | number[]>().not.toHaveProperty('xxl')
```

`.extract` and `.exclude` return never if no types remain after exclusion:

```typescript
type Person = {name: string; age: number}
type Customer = Person & {customerId: string}
type Employee = Person & {employeeId: string}

expectTypeOf<Customer | Employee>().extract<{foo: string}>().toBeNever()
expectTypeOf<Customer | Employee>().exclude<{name: string}>().toBeNever()
```

Use `.pick` to pick a set of properties from an object:

```typescript
type Person = {name: string; age: number}

expectTypeOf<Person>().pick<'name'>().toEqualTypeOf<{name: string}>()
```

Use `.omit` to remove a set of properties from an object:

```typescript
type Person = {name: string; age: number}

expectTypeOf<Person>().omit<'name'>().toEqualTypeOf<{age: number}>()
```

Make assertions about object properties:

```typescript
const obj = {a: 1, b: ''}

// check that properties exist (or don't) with `.toHaveProperty`
expectTypeOf(obj).toHaveProperty('a')
expectTypeOf(obj).not.toHaveProperty('c')

// check types of properties
expectTypeOf(obj).toHaveProperty('a').toBeNumber()
expectTypeOf(obj).toHaveProperty('b').toBeString()
expectTypeOf(obj).toHaveProperty('a').not.toBeString()
```

`.toEqualTypeOf` can be used to distinguish between functions:

```typescript
type NoParam = () => void
type HasParam = (s: string) => void

expectTypeOf<NoParam>().not.toEqualTypeOf<HasParam>()
```

But often it's preferable to use `.parameters` or `.returns` for more specific function assertions:

```typescript
type NoParam = () => void
type HasParam = (s: string) => void

expectTypeOf<NoParam>().parameters.toEqualTypeOf<[]>()
expectTypeOf<NoParam>().returns.toBeVoid()

expectTypeOf<HasParam>().parameters.toEqualTypeOf<[string]>()
expectTypeOf<HasParam>().returns.toBeVoid()
```

Up to ten overloads will produce union types for `.parameters` and `.returns`:

```typescript
type Factorize = {
  (input: number): number[]
  (input: bigint): bigint[]
}

expectTypeOf<Factorize>().parameters.not.toEqualTypeOf<[number]>()
expectTypeOf<Factorize>().parameters.toEqualTypeOf<[number] | [bigint]>()
expectTypeOf<Factorize>().returns.toEqualTypeOf<number[] | bigint[]>()

expectTypeOf<Factorize>().parameter(0).toEqualTypeOf<number | bigint>()
```

Note that these aren't exactly like TypeScript's built-in Parameters<...> and ReturnType<...>:

The TypeScript builtins simply choose a single overload (see the [Overloaded functions](#overloaded-functions) section for more information)

```typescript
type Factorize = {
  (input: number): number[]
  (input: bigint): bigint[]
}

// overload using `number` is ignored!
expectTypeOf<Parameters<Factorize>>().toEqualTypeOf<[bigint]>()
expectTypeOf<ReturnType<Factorize>>().toEqualTypeOf<bigint[]>()
```

More examples of ways to work with functions - parameters using `.parameter(n)` or `.parameters`, and return values using `.returns`:

```typescript
const f = (a: number) => [a, a]

expectTypeOf(f).toBeFunction()

expectTypeOf(f).toBeCallableWith(1)
expectTypeOf(f).not.toBeAny()
expectTypeOf(f).returns.not.toBeAny()
expectTypeOf(f).returns.toEqualTypeOf([1, 2])
expectTypeOf(f).returns.toEqualTypeOf([1, 2, 3])
expectTypeOf(f).parameter(0).not.toEqualTypeOf('1')
expectTypeOf(f).parameter(0).toEqualTypeOf(1)
expectTypeOf(1).parameter(0).toBeNever()

const twoArgFunc = (a: number, b: string) => ({a, b})

expectTypeOf(twoArgFunc).parameters.toEqualTypeOf<[number, string]>()
```

`.toBeCallableWith` allows for overloads. You can also use it to narrow down the return type for given input parameters.:

```typescript
type Factorize = {
  (input: number): number[]
  (input: bigint): bigint[]
}

expectTypeOf<Factorize>().toBeCallableWith(6)
expectTypeOf<Factorize>().toBeCallableWith(6n)
```

`.toBeCallableWith` returns a type that can be used to narrow down the return type for given input parameters.:

```typescript
type Factorize = {
  (input: number): number[]
  (input: bigint): bigint[]
}
expectTypeOf<Factorize>().toBeCallableWith(6).returns.toEqualTypeOf<number[]>()
expectTypeOf<Factorize>().toBeCallableWith(6n).returns.toEqualTypeOf<bigint[]>()
```

`.toBeCallableWith` can be used to narrow down the parameters of a function:

```typescript
type Delete = {
  (path: string): void
  (paths: string[], options?: {force: boolean}): void
}

expectTypeOf<Delete>().toBeCallableWith('abc').parameters.toEqualTypeOf<[string]>()
expectTypeOf<Delete>()
  .toBeCallableWith(['abc', 'def'], {force: true})
  .parameters.toEqualTypeOf<[string[], {force: boolean}?]>()

expectTypeOf<Delete>().toBeCallableWith('abc').parameter(0).toBeString()
expectTypeOf<Delete>().toBeCallableWith('abc').parameter(1).toBeUndefined()

expectTypeOf<Delete>()
  .toBeCallableWith(['abc', 'def', 'ghi'])
  .parameter(0)
  .toEqualTypeOf<string[]>()

expectTypeOf<Delete>()
  .toBeCallableWith(['abc', 'def', 'ghi'])
  .parameter(1)
  .toEqualTypeOf<{force: boolean} | undefined>()
```

You can't use `.toBeCallableWith` with `.not` - you need to use ts-expect-error::

```typescript
const f = (a: number) => [a, a]

// @ts-expect-error
expectTypeOf(f).toBeCallableWith('foo')
```

Use `.map` to transform types:

This can be useful for generic functions or complex types which you can't access via `.toBeCallableWith`, `.toHaveProperty` etc. The callback function isn't called at runtime, which can make this a useful way to get complex inferred types without worrying about running code.

```typescript
const capitalize = <S extends string>(input: S) =>
  (input.slice(0, 1).toUpperCase() + input.slice(1)) as Capitalize<S>

expectTypeOf(capitalize)
  .map(fn => fn('hello world'))
  .toEqualTypeOf<'Hello world'>()
```

You can also check type guards & type assertions:

```typescript
const assertNumber = (v: any): asserts v is number => {
  if (typeof v !== 'number') {
    throw new TypeError('Nope !')
  }
}

expectTypeOf(assertNumber).asserts.toBeNumber()

const isString = (v: any): v is string => typeof v === 'string'

expectTypeOf(isString).guards.toBeString()

const isBigInt = (value: any): value is bigint => typeof value === 'bigint'

expectTypeOf(isBigInt).guards.toBeBigInt()
```

Assert on constructor parameters:

```typescript
expectTypeOf(Date).toBeConstructibleWith('1970')
expectTypeOf(Date).toBeConstructibleWith(0)
expectTypeOf(Date).toBeConstructibleWith(new Date())
expectTypeOf(Date).toBeConstructibleWith()

expectTypeOf(Date).constructorParameters.toEqualTypeOf<
  | []
  | [value: string | number]
  | [value: string | number | Date]
  | [
      year: number,
      monthIndex: number,
      date?: number | undefined,
      hours?: number | undefined,
      minutes?: number | undefined,
      seconds?: number | undefined,
      ms?: number | undefined,
    ]
>()
```

Constructor overloads:

```typescript
class DBConnection {
  constructor()
  constructor(connectionString: string)
  constructor(options: {host: string; port: number})
  constructor(..._: unknown[]) {}
}

expectTypeOf(DBConnection).toBeConstructibleWith()
expectTypeOf(DBConnection).toBeConstructibleWith('localhost')
expectTypeOf(DBConnection).toBeConstructibleWith({host: 'localhost', port: 1234})
// @ts-expect-error - as when calling `new DBConnection(...)` you can't actually use the `(...args: unknown[])` overlaod, it's purely for the implementation.
expectTypeOf(DBConnection).toBeConstructibleWith(1, 2)
```

Check function `this` parameters:

```typescript
function greet(this: {name: string}, message: string) {
  return `Hello ${this.name}, here's your message: ${message}`
}

expectTypeOf(greet).thisParameter.toEqualTypeOf<{name: string}>()
```

Distinguish between functions with different `this` parameters:

```typescript
function greetFormal(this: {title: string; name: string}, message: string) {
  return `Dear ${this.title} ${this.name}, here's your message: ${message}`
}

function greetCasual(this: {name: string}, message: string) {
  return `Hi ${this.name}, here's your message: ${message}`
}

expectTypeOf(greetFormal).not.toEqualTypeOf(greetCasual)
```

Class instance types:

```typescript
expectTypeOf(Date).instance.toHaveProperty('toISOString')
```

Promise resolution types can be checked with `.resolves`:

```typescript
const asyncFunc = async () => 123

expectTypeOf(asyncFunc).returns.resolves.toBeNumber()
```

Array items can be checked with `.items`:

```typescript
expectTypeOf([1, 2, 3]).items.toBeNumber()
expectTypeOf([1, 2, 3]).items.not.toBeString()
```

You can also compare arrays directly:

```typescript
expectTypeOf<any[]>().not.toEqualTypeOf<number[]>()
```

Check that functions never return:

```typescript
const thrower = () => {
  throw new Error('oh no')
}

expectTypeOf(thrower).returns.toBeNever()
```

Generics can be used rather than references:

```typescript
expectTypeOf<{a: string}>().not.toEqualTypeOf<{a: number}>()
```

Distinguish between missing/null/optional properties:

```typescript
expectTypeOf<{a?: number}>().not.toEqualTypeOf<{}>()
expectTypeOf<{a?: number}>().not.toEqualTypeOf<{a: number}>()
expectTypeOf<{a?: number}>().not.toEqualTypeOf<{a: number | undefined}>()
expectTypeOf<{a?: number | null}>().not.toEqualTypeOf<{a: number | null}>()
expectTypeOf<{a: {b?: number}}>().not.toEqualTypeOf<{a: {}}>()
```

Detect the difference between regular and `readonly` properties:

```typescript
type A1 = {readonly a: string; b: string}
type E1 = {a: string; b: string}

expectTypeOf<A1>().toExtend<E1>()
expectTypeOf<A1>().not.toEqualTypeOf<E1>()

type A2 = {a: string; b: {readonly c: string}}
type E2 = {a: string; b: {c: string}}

expectTypeOf<A2>().toExtend<E2>()
expectTypeOf<A2>().not.toEqualTypeOf<E2>()
```

Distinguish between classes with different constructors:

```typescript
class A {
  value: number
  constructor(a: 1) {
    this.value = a
  }
}
class B {
  value: number
  constructor(b: 2) {
    this.value = b
  }
}

expectTypeOf<typeof A>().not.toEqualTypeOf<typeof B>()

class C {
  value: number
  constructor(c: 1) {
    this.value = c
  }
}

expectTypeOf<typeof A>().toEqualTypeOf<typeof C>()
```

Known limitation: Intersection types can cause issues with `toEqualTypeOf`:

```typescript
// @ts-expect-error the following line doesn't compile, even though the types are arguably the same.
// See https://github.com/mmkal/expect-type/pull/21
expectTypeOf<{a: 1} & {b: 2}>().toEqualTypeOf<{a: 1; b: 2}>()
```

To workaround for simple cases, you can use a mapped type:

```typescript
type Simplify<T> = {[K in keyof T]: T[K]}

expectTypeOf<Simplify<{a: 1} & {b: 2}>>().toEqualTypeOf<{a: 1; b: 2}>()
```

But this won't work if the nesting is deeper in the type. For these situations, you can use the `.branded` helper. Note that this comes at a performance cost, and can cause the compiler to 'give up' if used with excessively deep types, so use sparingly. This helper is under `.branded` because it deeply transforms the Actual and Expected types into a pseudo-AST:

```typescript
// @ts-expect-error
expectTypeOf<{a: {b: 1} & {c: 1}}>().toEqualTypeOf<{a: {b: 1; c: 1}}>()

expectTypeOf<{a: {b: 1} & {c: 1}}>().branded.toEqualTypeOf<{a: {b: 1; c: 1}}>()
```

Be careful with `.branded` for very deep or complex types, though. If possible you should find a way to simplify your test to avoid needing to use it:

```typescript
// This *should* result in an error, but the "branding" mechanism produces too large a type and TypeScript just gives up! https://github.com/microsoft/TypeScript/issues/50670
expectTypeOf<() => () => () => () => 1>().branded.toEqualTypeOf<() => () => () => () => 2>()

// @ts-expect-error the non-branded implementation catches the error as expected.
expectTypeOf<() => () => () => () => 1>().toEqualTypeOf<() => () => () => () => 2>()
```

So, if you have an extremely deep type that ALSO has an intersection in it, you're out of luck and this library won't be able to test your type properly:

```typescript
// @ts-expect-error this fails, but it should succeed.
expectTypeOf<() => () => () => () => {a: 1} & {b: 2}>().toEqualTypeOf<
  () => () => () => () => {a: 1; b: 2}
>()

// this succeeds, but it should fail.
expectTypeOf<() => () => () => () => {a: 1} & {b: 2}>().branded.toEqualTypeOf<
  () => () => () => () => {a: 1; c: 2}
>()
```

Another limitation: passing `this` references to `expectTypeOf` results in errors.:

```typescript
class B {
  b = 'b'

  foo() {
    // @ts-expect-error
    expectTypeOf(this).toEqualTypeOf(this)
  }
}

// Instead of the above, try something like this:
expectTypeOf(B).instance.toEqualTypeOf<{b: string; foo: () => void}>()
```
<!-- codegen:end -->

Overloads limitation for TypeScript <5.3: Due to a [TypeScript bug fixed in 5.3](https://github.com/microsoft/TypeScript/issues/28867), overloaded functions which include an overload resembling `(...args: unknown[]) => unknown` will exclude `unknown[]` from `.parameters` and exclude `unknown` from `.returns`:

```typescript
type Factorize = {
  (...args: unknown[]): unknown
  (input: number): number[]
  (input: bigint): bigint[]
}

expectTypeOf<Factorize>().parameters.toEqualTypeOf<[number] | [bigint]>()
expectTypeOf<Factorize>().returns.toEqualTypeOf<number[] | bigint[]>()
```

This overload, however, allows any input and returns an unknown output anyway, so it's not very useful. If you are worried about this for some reason, you'll have to update TypeScript to 5.3+.

### Why is my assertion failing?

For complex types, an assertion might fail when it should if the `Actual` type contains a deeply-nested intersection type but the `Expected` doesn't. In these cases you can use `.branded` as described above:

```typescript
// @ts-expect-error this unfortunately fails - a TypeScript limitation prevents making this pass without a big perf hit
expectTypeOf<{a: {b: 1} & {c: 1}}>().toEqualTypeOf<{a: {b: 1; c: 1}}>()

expectTypeOf<{a: {b: 1} & {c: 1}}>().branded.toEqualTypeOf<{a: {b: 1; c: 1}}>()
```

### Why is `.toMatchTypeOf` deprecated?

The `.toMatchTypeOf` method is deprecated in favour of `.toMatchObjectType` (when strictly checking against an object type with a subset of keys), or `.toExtend` (when checking for "is-a" relationships). There are no foreseeable plans to remove `.toMatchTypeOf`, but there's no reason to continue using it - `.toMatchObjectType` is stricter, and `.toExtend` is identical.

### Internal type helpers

🚧 This library also exports some helper types for performing boolean operations on types, checking extension/equality in various ways, branding types, and checking for various special types like `never`, `any`, `unknown`. Use at your own risk! Nothing is stopping you from using these beyond this warning:

>All internal types that are not documented here are _not_ part of the supported API surface, and may be renamed, modified, or removed, without warning or documentation in release notes.

For a dedicated internal type library, feel free to look at the [source code](./src/index.ts) for inspiration - or better, use a library like [type-fest](https://npmjs.com/package/type-fest).

### Error messages

When types don't match, `.toEqualTypeOf` and `.toMatchTypeOf` use a special helper type to produce error messages that are as actionable as possible. But there's a bit of a nuance to understanding them. Since the assertions are written "fluently", the failure should be on the "expected" type, not the "actual" type (`expect<Actual>().toEqualTypeOf<Expected>()`). This means that type errors can be a little confusing - so this library produces a `MismatchInfo` type to try to make explicit what the expectation is. For example:

```ts
expectTypeOf({a: 1}).toEqualTypeOf<{a: string}>()
```

Is an assertion that will fail, since `{a: 1}` has type `{a: number}` and not `{a: string}`.  The error message in this case will read something like this:

```
test/test.ts:999:999 - error TS2344: Type '{ a: string; }' does not satisfy the constraint '{ a: \\"Expected: string, Actual: number\\"; }'.
  Types of property 'a' are incompatible.
    Type 'string' is not assignable to type '\\"Expected: string, Actual: number\\"'.

999 expectTypeOf({a: 1}).toEqualTypeOf<{a: string}>()
```

Note that the type constraint reported is a human-readable messaging specifying both the "expected" and "actual" types. Rather than taking the sentence `Types of property 'a' are incompatible // Type 'string' is not assignable to type "Expected: string, Actual: number"` literally - just look at the property name (`'a'`) and the message: `Expected: string, Actual: number`. This will tell you what's wrong, in most cases. Extremely complex types will, of course, be more effort to debug, and may require some experimentation. Please [raise an issue](https://github.com/mmkal/expect-type) if the error messages are misleading.

The `toBe...` methods (like `toBeString`, `toBeNumber`, `toBeVoid`, etc.) fail by resolving to a non-callable type when the `Actual` type under test doesn't match up. For example, the failure for an assertion like `expectTypeOf(1).toBeString()` will look something like this:

```
test/test.ts:999:999 - error TS2349: This expression is not callable.
  Type 'ExpectString<number>' has no call signatures.

999 expectTypeOf(1).toBeString()
                    ~~~~~~~~~~
```

The `This expression is not callable` part isn't all that helpful - the meaningful error is the next line, `Type 'ExpectString<number> has no call signatures`. This essentially means you passed a number but asserted it should be a string.

If TypeScript added support for ["throw" types](https://github.com/microsoft/TypeScript/pull/40468) these error messages could be improved. Until then they will take a certain amount of squinting.

#### Concrete "expected" objects vs type arguments

Error messages for an assertion like this:

```ts
expectTypeOf({a: 1}).toEqualTypeOf({a: ''})
```

Will be less helpful than for an assertion like this:

```ts
expectTypeOf({a: 1}).toEqualTypeOf<{a: string}>()
```

This is because the TypeScript compiler needs to infer the type argument for the `.toEqualTypeOf({a: ''})` style and this library can only mark it as a failure by comparing it against a generic `Mismatch` type. So, where possible, use a type argument rather than a concrete type for `.toEqualTypeOf` and `toMatchTypeOf`. If it's much more convenient to compare two concrete types, you can use `typeof`:

```ts
const one = valueFromFunctionOne({some: {complex: inputs}})
const two = valueFromFunctionTwo({some: {other: inputs}})

expectTypeOf(one).toEqualTypeof<typeof two>()
```

### Overloaded functions

Due to a TypeScript [design limitation](https://github.com/microsoft/TypeScript/issues/32164#issuecomment-506810756), the native TypeScript `Parameters<...>` and `ReturnType<...>` helpers only return types from one variant of an overloaded function. This limitation doesn't apply to expect-type, since it is not used to author TypeScript code, only to assert on existing types. So, we use a workaround for this TypeScript behaviour to assert on _all_ overloads as a union (actually, not necessarily _all_ - we cap out at 10 overloads).

### Within test frameworks

### Vitest

`expectTypeOf` is built in to [vitest](https://vitest.dev/guide/testing-types), so you can import `expectTypeOf` from the vitest library directly if you prefer. Note that there is no set release cadence, at time of writing, so vitest may not always be using the very latest version.

```ts
import {expectTypeOf} from 'vitest'
import {mount} from './mount.js'

test('my types work properly', () => {
  expectTypeOf(mount).toBeFunction()
  expectTypeOf(mount).parameter(0).toEqualTypeOf<{name: string}>()

  expectTypeOf(mount({name: 42})).toBeString()
})
```

#### Jest & `eslint-plugin-jest`

If you're using Jest along with `eslint-plugin-jest`, and you put assertions inside `test(...)` definitions, you may get warnings from the [`jest/expect-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md) rule, complaining that "Test has no assertions" for tests that only use `expectTypeOf()`.

To remove this warning, configure the ESLint rule to consider `expectTypeOf` as an assertion:

```json
"rules": {
  // ...
  "jest/expect-expect": [
    "warn",
    {
      "assertFunctionNames": [
        "expect", "expectTypeOf"
      ]
    }
  ],
  // ...
}
```

### Limitations

A summary of some of the limitations of this library. Some of these are documented more fully elsewhere.

1. Intersection types can result in failures when the expected and actual types are not identically defined, even when they are effectively identical. See [Why is my assertion failing](#why-is-my-assertion-failing) for details. TL;DR: use `.brand` in these cases - and accept the performance hit that it comes with.
1. `toBeCallableWith` will likely fail if you try to use it with a generic function or an overload. See [this issue](https://github.com/mmkal/expect-type/issues/50) for an example and how to work around it.
1. (For now) overloaded functions might trip up the `.parameter` and `.parameters` helpers. This matches how the built-in TypeScript helper `Parameters<...>` works. This may be improved in the future though ([see related issue](https://github.com/mmkal/expect-type/issues/30)).
1. `expectTypeOf(this).toEqualTypeOf(this)` inside class methods does not work.

## Similar projects

Other projects with similar goals:

- [`tsd`](https://github.com/SamVerschueren/tsd) is a CLI that runs the TypeScript type checker over assertions
- [`ts-expect`](https://github.com/TypeStrong/ts-expect) exports several generic helper types to perform type assertions
- [`dtslint`](https://github.com/Microsoft/dtslint) does type checks via comment directives and tslint
- [`type-plus`](https://github.com/unional/type-plus) comes with various type and runtime TypeScript assertions
- [`static-type-assert`](https://github.com/ksxnodemodules/static-type-assert) type assertion functions

### Comparison

The key differences in this project are:

- a fluent, jest-inspired API, making the difference between `actual` and `expected` clear. This is helpful with complex types and assertions.
- inverting assertions intuitively and easily via `expectTypeOf(...).not`
- checks generics properly and strictly ([tsd doesn't](https://github.com/SamVerschueren/tsd/issues/142))
- first-class support for:
  - `any` (as well as `unknown` and `never`) (see issues outstanding at time of writing in tsd for [never](https://github.com/SamVerschueren/tsd/issues/78) and [any](https://github.com/SamVerschueren/tsd/issues/82)).
    - This can be especially useful in combination with `not`, to protect against functions returning too-permissive types. For example, `const parseFile = (filename: string) => JSON.parse(readFileSync(filename).toString())` returns `any`, which could lead to errors. After giving it a proper return-type, you can add a test for this with `expect(parseFile).returns.not.toBeAny()`
  - object properties
  - function parameters
  - function return values
  - constructor parameters
  - class instances
  - array item values
  - nullable types
- assertions on types "matching" rather than exact type equality, for "is-a" relationships e.g. `expectTypeOf(square).toExtend<Shape>()`
- built into existing tooling. No extra build step, cli tool, IDE extension, or lint plugin is needed. Just import the function and start writing tests. Failures will be at compile time - they'll appear in your IDE and when you run `tsc`.
- small implementation with no dependencies. [Take a look!](./src/index.ts) (tsd, for comparison, is [2.6MB](https://bundlephobia.com/result?p=tsd@0.13.1) because it ships a patched version of TypeScript).

## TypeScript backwards-compatibility

There is a CI job called `test-types` that checks whether the tests still pass with certain older TypeScript versions. To check the supported TypeScript versions, [refer to the job definition](./.github/workflows/ci.yml).

## Contributing

In most cases, it's worth checking existing issues or creating one to discuss a new feature or a bug fix before opening a pull request.

Once you're ready to make a pull request: clone the repo, and install pnpm if you don't have it already with `npm install --global pnpm`. Lockfiles for `npm` and `yarn` are gitignored.

If you're adding a feature, you should write a self-contained usage example in the form of a test, in [test/usage.test.ts](./test/usage.test.ts). This file is used to populate the bulk of this readme using [eslint-plugin-codegen](https://npmjs.com/package/eslint-plugin-codegen), and to generate an ["errors" test file](./test/errors.test.ts), which captures the error messages that are emitted for failing assertions by the TypeScript compiler. So, the test name should be written as a human-readable sentence explaining the usage example. Have a look at the existing tests for an idea of the style.

After adding the tests, run `npm run lint -- --fix` to update the readme, and `npm test -- --updateSnapshot` to update the errors test. The generated documentation and tests should be pushed to the same branch as the source code, and submitted as a pull request. CI will test that the docs and tests are up to date if you forget to run these commands.

### Documentation of limitations through tests

Limitations of the library are documented through tests in `usage.test.ts`. This means that if a future TypeScript version (or library version) fixes the limitation, the test will start failing, and it will be automatically removed from the documentation once it no longer applies.
