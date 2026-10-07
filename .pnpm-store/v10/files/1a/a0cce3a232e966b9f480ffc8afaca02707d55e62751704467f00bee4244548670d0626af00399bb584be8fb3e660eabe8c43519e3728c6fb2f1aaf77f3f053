<div align='center'>

<h1>TypeBox</h1>

<p>JSON Schema Type Builder with Static Type Resolution for TypeScript</p>

<img src="typebox.png" />

<br />
<br />

[![npm version](https://badge.fury.io/js/typebox.svg)](https://badge.fury.io/js/typebox)
[![Downloads](https://img.shields.io/npm/dm/typebox.svg)](https://www.npmjs.com/package/typebox)
[![Build](https://github.com/sinclairzx81/typebox/actions/workflows/build.yml/badge.svg)](https://github.com/sinclairzx81/typebox/actions/workflows/build.yml)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## Install

```bash
$ npm install typebox
```


## Usage

```typescript
import Type from 'typebox'

const T = Type.Object({                     // const T = {
  x: Type.Number(),                         //   type: 'object',
  y: Type.Number(),                         //   properties: {
  z: Type.Number()                          //     x: { type: 'number' },
})                                          //     y: { type: 'number' },
                                            //     z: { type: 'number' }
                                            //   },
                                            //   required: ['x', 'y', 'z']
                                            // }

type T = Type.Static<typeof T>              // type T = {
                                            //   x: number,
                                            //   y: number,
                                            //   z: number
                                            // }

```

## Overview

[Documentation](https://sinclairzx81.github.io/typebox/)

TypeBox is a runtime type system that creates in-memory JSON Schema objects that infer as TypeScript types. The schematics produced by this library are designed to match the static type checking rules of the TypeScript compiler. TypeBox offers a unified type system that can be statically checked by TypeScript and validated at runtime using standard JSON Schema.

This library is designed to allow JSON Schema to compose similar to how types compose within TypeScript's type system. It can be used as a simple tool to build up complex schematics or integrated into REST, RPC and MCP services to help validate data received over the wire.

License: MIT

## Contents

- [Type](#Type)
- [Script](#Script)
- [Schema](#Schema)
- [Versions](#Versions)
- [Contribute](#Contribute)


<a name="Type"></a>

## Type

[Documentation](https://sinclairzx81.github.io/typebox/#/docs/type/overview) | [Example](https://www.typescriptlang.org/play/?#code/JYWwDg9gTgLgBAFQJ5gKZwGZQiOByGFVAIwgA88AoSgehrgFonmXW32POvueHb7kafo16ix4ic2oBjCADsAzvACqC1FDgBeREQB0AeWIArVNJgAKAN5wbtu-Yc26cWYpVqN2y5RvAAJgBcOmi6AMowUMByAObmAJQANI7JKfbONoRoQXgQxqYweAk+cHIAhiCoQYKoYRFRsYmpTQ7pcGDYaLDAqApB3jaoIKXAADZVeuGRMVaY0EMw2YPDI3hwAL5xya2+gXDWmZX4SlPRq2tFG81X11v0dmUVfXAH2cf1Z0U3X99w23BLoyexR+INSfwyRFedRihTgwNBCLSd3sGDmpQW+ABKzhiNxdj+a3heIRrUJxLxrSgqAAjgBXYBU3YAbSJ5J+fzw-lhrLZXw5D1Q3N5JORNjwWKowtBrQAujypc1nIThJJVWr1XxnOF0cBpCqNQbDZxqAc4Kp1FpgjVtTBdQAeA4QDBmjwAPmuzlN5s8e3lCqarX8QTeMU+-u+rQFweh0TD4ZurSx0ZOfvjjiVQA)

TypeBox types are JSON Schema fragments that compose into more complex types. The library offers a set of types used to construct JSON Schema compliant schematics as well as a set of extended types used to model constructs native to the JavaScript language. The schematics produced by TypeBox can be passed directly to any JSON Schema compliant validator.

## Example

The following creates a User type and infers with Static.

```typescript
import Type from 'typebox'

// Type

const User = Type.Object({                       // const User = {
  id: Type.String(),                             //   type: 'object',
  name: Type.String(),                           //   properties: {
  email: Type.String({ format: 'email' })        //     id: { type: 'string' },
})                                               //     name: { type: 'string' },
                                                 //     email: { 
                                                 //       type: 'string', 
                                                 //       format: 'email' 
                                                 //     }
                                                 //   }
                                                 //   required: [
                                                 //     'id', 
                                                 //     'name', 
                                                 //     'email'
                                                 //   ]
                                                 // }

// Static

type User = Type.Static<typeof User>              // type User = {
                                                  //   id: string,
                                                  //   name: string,
                                                  //   email: string
                                                  // }

```

## Script

[Documentation](https://sinclairzx81.github.io/typebox/#/docs/script/overview) | [Example 1](https://www.typescriptlang.org/play/#code/JYWwDg9gTgLgBAFQJ5gKZwGZQiOByGFVAIwgA88AoSgehrgFonmXW32POvueHb6AygGMowMDH6Ne0mbLnNqQiADsAzvADecAKqrUUADQ69UbWAAmAQxjoAvnAC8iIgDpho8QAoABtThxgZRsoDEshdABRIOBCOA1Kf39gcwAuOHVRZQBzBLhbPwCg-VDw4304VDIbZXNVOCiYGKQ4uFz-ZUsQVDSMwKyjNoqQS2AAGx6YTKzW-3zcwjQy0wtrdCcIgDdLUYBXVYAeQYAFYCEAa33dfSMz1CQIDHrowgA+OAAyGcSjy1hgbf2AHkQDFLiYbncHk9Gq8Xrk4ZRvABKah0KTyDGYzGSABKqAwo1QQgkaKxZPJvEUKlUEEJLlGECyniuUCRiXZHM5XK5aPi3P5AsFgrR-gW3XwEGIACsiTA8AZBkKlcrOSK4GBsGg-qhVGk+SqDYa1UlUi0xWk8L1sng8grDfblca4B0unq4Ob8FasjbbHaHf7+U7UMMxm6PZbJn0fYqA7G4GrfTG4-61VBUABHHbANOmgDaSeT9qdeGS8q+hdjxZdqDLBYrKuLwZGoyo9cr9H8AF0622hWi5ko1LTUPTGcyTGYrDY2YXeT3ewK1eHJTLifL5wvuWqNRAtY0dXqN5vVR3Eskw0QLV6fX7jw3T+1OuKtOHr7aj3fEkGQ+MzZfPZG1p5B+n7xqeiagY6p5ppm2aoHmJbmHg3aQUq-aovQFJYdhLCSAIMDWKckg4SRFLUGKSyOM4aBuARjRCPsYpQiybxofQFEslR+qocKp7nukgH9CBoFqtWExTLePGBqeTahgJUzCZ+6GUBxE4rDYVHIDR+GEQxTGPCyk6rKxaKqfoRkaU43FSVufGml6kk2SeiTVgA-OJfSOU57JqrJozufJfSKXe6FAA) | [Example 2](https://www.typescriptlang.org/play/#code/JYWwDg9gTgLgBAFQJ5gKZwGZQiOByGFVAIwgA88AoSgehrgFonmXW32POvnb7k1ejbsJGj21AMYQAdgGd4AUWkxghOAF5ERAHQBJZaigYAhhNQAKANoBdADRwA3pThxgAEwBcWtNoDKMKGBpAHNzAEpKAF8Iyik5eABVWUMNb1Q9AyNTC0slFUI7R2c4aWMQVC9+dP9AkPDbYtQQY2AAG0qdGqDQiOjJGXk4JMMEsDdjGHRNKu0FADdjVoBXCYsZ-UmoZIkYK2KZgAVgCQBrc2GoexmAaVQkAHkMczzVJDCwhpdD41hgRfMZvcQKpzslLmltLcHk8XoR3hFrO9qHQhGI0eiMdxBAAlVAYVqoHaCTEk0mY-pyCAE7StCChC5hFxM5ks1lslkopzs7k83m8lEuQhoLx4CDEABWhJgeE+fLl8u5ArgYGwaF+qFkXi5Cp1uqVLncWrgQoq+HktWCeDgkVlurtfP1JTKpocxqIIvN3StNuK9r97MdTRa7UcbuFZoCXutvv9saZSp9caTLiVUFQAEclsA0544JYY8m-Y68O4ZXAC4W7cXSuUyxXKzri0G2lQG-6ldZ6225SjIhTZFT0rT6WDRuNJozk5yu93+fRBe78GLJTsZTPZ4r58rVYYVBqteuN2zHYbQyaPZGQt7bUee1uXDWXWHTXhPVfrTfb3OWc2Q67zxGFreoeX7xluiagQ6W5ppm2aoLmlglm4eCdpBUHRsSZJYdhnCCP4EzHJhOHEcR1AmkMYKpDM+EqBIAA8JoQBgFGGAAfPKKLkRcqTamhPJKqeb7BJ+fGskqj5eEJImicySq-pJl7BCBaG9mRRAsVAY6rFRnQwAR9GMcxFxaZM7FwJx6nGWM2maLxMliVugmKdJ9nmVuj4APwKRaLn2XJzRtF5cBCcpkG9kAA)

The TypeBox Script function is a micro DSL for constructing JSON Schema from TypeScript syntax. It offers a full syntactic frontend to Type.* with broad support for type-level expressions including Conditional, Mapped, Infer, Generic, Distributive types and more. This feature is implemented symmetrically at both runtime and in the type system.

### Example

The following uses the Script function to parse TypeScript interfaces into JSON Schema.

```typescript
import Type from 'typebox'

// Script

const { User, UserUpdate } = Type.Script(`

  interface Entity {
    id: string
  }

  interface User extends Entity { 
    name: string, 
    email: string 
  }

  type UserUpdate = Evaluate<
    Pick<User, keyof Entity> & 
    Partial<Omit<User, keyof Entity>>
  >

`)

// Reflect

console.log(User)                                // {
                                                 //   type: 'object',
                                                 //   properties: {
                                                 //     id: { type: 'string' },
                                                 //     name: { type: 'string' },
                                                 //     email: { type: 'string' }
                                                 //   },
                                                 //   required: [
                                                 //     'id', 
                                                 //     'name', 
                                                 //     'email'
                                                 //   ]
                                                 // }

console.log(UserUpdate)                          // {
                                                 //   type: 'object',
                                                 //   properties: {
                                                 //     id: { type: 'string' },
                                                 //     name: { type: 'string' },
                                                 //     email: { type: 'string' }
                                                 //   },
                                                 //   required: ['id']
                                                 // }

// Static

type User = Type.Static<typeof User>              // type User = {
                                                  //   id: string,
                                                  //   name: string,
                                                  //   email: string
                                                  // }

type UserUpdate = Type.Static<typeof UserUpdate>  // type UserUpdate = {
                                                  //   id: string,
                                                  //   name?: string,
                                                  //   email?: string
                                                  // }


```

<a name="Schema"></a>

## Schema

[Documentation](https://sinclairzx81.github.io/typebox/#/docs/schema/overview) | [Example 1](https://www.typescriptlang.org/play/?#code/JYWwDg9gTgLgBAZQMYAsCmICGcBmUIhwDkMAnmGgEYQAeA9AM6oaZEBQokscAKuWrnyES-ajXZs6dOAFo58hYqXKVqteo0zJ0gMIEwwADZptszeYuWr8tmyQQAdg3gBVBmihwAvImZYAdHrgRmgAFHwU-gDylABWaEgwoQDebHBwwAAmAFy8-P4IMFDADgDmoQCUADRpcA6YIGi5EWgFRSXl1bUsRs35hcVlKbjQWDC5RD2GRHAAvhVs8wum1qtr61pScAAKmFDuKxtHx6q29k7wAK7unj5uHv67+2HJ6W-vH5-vW+fOcNceXKpdJZCYANgArDgAIyYABMlAAzEgACyZCFoME4ADsmAAHJQAJxIAAMmWhRCqX2pcC2IJycGcg1KNXS9UaEwBUEpNN5fO+0jZDSajPaZVZcCmnJuAAFMgRMCV-PYQDN+by6ZKsL1RczFhV1YajR8trNvHB-JagA) | [Example 2](https://www.typescriptlang.org/play/#code/JYWwDg9gTgLgBAZQMYAsCmICGcBmUIhwDkMAnmGgEYQAeA9AM6oaZEBQbddcAtH-wMFDhI0WPESenbgGECYYABs003pPUbNW-hyQQAdg3gBVBmihwAvImZYAdHPBK0ACgDebOHDIUAXMQhKACs0JBgiABpPODB8ClhgNAZ-Dy8vYAATFO9yNH8iIyhgfQBzIjgAXyi0uH1MEDy4Nxy-YkLissrqtJYlbJ9Ggpgi0sjcaCwYfN7FcoroquioNABHAFdgZay4AG1oryJMsf3iOobjmqIZ9i8AXTYKgEoOLjVtd4+P1QAFTCgzVSfIHAyS6AxGOBrMwWaymcx2X7-VzNGqotHouCvPSGeBQ8wpaKZfIANgArDgAIyYABMlAAzEgACwZUloYk4ADsmAAHJQAJxIAAMGQpYwx6Ne6W27VK3TOgzxUDF4pVqq8ktq9UaMpK3Rm+UVAAEMgRMMU7HoQOU1SqNfq4DqHo8bS7XajXhUrHA7D6gA) | [Specification](https://sinclairzx81.github.io/typebox/#/docs/schema/1_spec)

TypeBox includes a high-performance JSON Schema compiler with support for drafts 3 through to 2020-12. The compiler is designed to be a lightweight industry-grade alternative to Ajv and offers improved compilation and validation performance. The compiler also offers automatic fallback to dynamic checking in JIT-restricted environments such as Cloudflare Workers.

### Example

The following uses the Schema submodule to compile a TypeBox type.

```typescript
import Schema from 'typebox/schema'

// Compile

const User = Schema.Compile(Type.Object({        // const User = Validator<Type.TObject<{
  id: Type.String(),                             //   id: Type.TString;
  name: Type.String(),                           //   name: Type.TString;
  email: Type.String({ format: 'email' })        //   email: Type.TString;
}))                                              // }>, { ... }>

// Parse

const user = User.Parse({                        // const user: {
  id: '65f1a2b3c4d5e6f7a8b9c0d1',                //   id: string,
  name: 'user',                                  //   name: string,
  email: 'user@domain.com'                       //   email: string
})                                               // } = ...

```

### Coverage

The following table shows specification coverage implemented by TypeBox.

Ref: [JSON Schema Test Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite) 

| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependencies | 17/18 | ✅ | ✅ | ✅ | - | - | - |
| dependentRequired | - | - | - | - | ✅ | ✅ | ✅ |
| dependentSchemas | - | - | - | - | ✅ | ✅ | ✅ |
| dynamicRef | - | - | - | - | - | 38/44 | 19/27 |
| enum | 14/16 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMaximum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMinimum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxContains | - | - | - | - | ✅ | ✅ | ✅ |
| maximum | 13/14 | 13/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minContains | - | - | - | - | ✅ | ✅ | ✅ |
| minimum | 12/13 | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| prefixItems | - | - | - | - | - | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | ✅ | - | - |
| ref | 23/27 | 37/45 | 67/70 | 75/78 | 79/81 | 77/79 | 77/79 |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 73/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | ✅ | 65/71 | 64/71 |
| unevaluatedProperties | - | - | - | - | ✅ | ✅ | 124/125 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |


### Performance

The following table shows compile performance for various JSON Schema structures using AJV8 as a basis for comparison. 

```python
┌──────────────────────┬─────────────┬─────────────┐
│ Compile              │ TB1X        │ AJV8        │
├──────────────────────┼─────────────┼─────────────┤
│ Boolean              │ 28.4K ops/s │    7K ops/s │
│ Number               │ 21.8K ops/s │  7.7K ops/s │
│ String               │ 47.8K ops/s │  7.3K ops/s │
│ Null                 │ 35.6K ops/s │  7.8K ops/s │
│ Literal_String       │ 28.6K ops/s │  6.3K ops/s │
│ Literal_Number       │ 46.6K ops/s │  6.2K ops/s │
│ Literal_Boolean      │ 40.8K ops/s │  6.6K ops/s │
│ Pattern              │ 29.7K ops/s │  4.9K ops/s │
│ Object_Open          │  6.8K ops/s │  1.1K ops/s │
│ Object_Close         │  7.4K ops/s │   833 ops/s │
│ Object_Vector3       │ 19.4K ops/s │  2.1K ops/s │
│ Object_Basis3        │    6K ops/s │   895 ops/s │
│ Intersect_And        │   12K ops/s │  3.5K ops/s │
│ Intersect_Structural │  8.4K ops/s │  1.1K ops/s │
│ Union_Or             │ 18.2K ops/s │  2.5K ops/s │
│ Union_Structural     │ 10.9K ops/s │  1.3K ops/s │
│ Tuple_Values         │  7.3K ops/s │  1.6K ops/s │
│ Tuple_Objects        │  1.9K ops/s │   339 ops/s │
│ Array_Numbers_4      │ 29.9K ops/s │  3.4K ops/s │
│ Array_Numbers_8      │ 20.3K ops/s │  3.4K ops/s │
│ Array_Numbers_16     │ 29.4K ops/s │  3.3K ops/s │
│ Array_Objects_Open   │  6.3K ops/s │   684 ops/s │
│ Array_Objects_Close  │  7.3K ops/s │   762 ops/s │
└──────────────────────┴─────────────┴─────────────┘
```


The following tables shows validation performance for various JSON Schema structures using AJV8 as a basis for comparison.

```python
┌──────────────────────┬──────────────┬──────────────┐
│ Validate             │ TB1X         │ AJV8         │
├──────────────────────┼──────────────┼──────────────┤
│ Boolean              │ 164.1M ops/s │ 181.5M ops/s │
│ Number               │   107M ops/s │  50.2M ops/s │
│ String               │ 102.2M ops/s │  61.9M ops/s │
│ Null                 │ 112.1M ops/s │  48.2M ops/s │
│ Literal_String       │ 102.8M ops/s │  61.5M ops/s │
│ Literal_Number       │ 109.1M ops/s │  46.4M ops/s │
│ Literal_Boolean      │ 109.6M ops/s │  63.3M ops/s │
│ Pattern              │  24.7M ops/s │  20.3M ops/s │
│ Object_Open          │  75.4M ops/s │  37.3M ops/s │
│ Object_Close         │  35.9M ops/s │  21.9M ops/s │
│ Object_Vector3       │  77.6M ops/s │  47.4M ops/s │
│ Object_Basis3        │    37M ops/s │  24.3M ops/s │
│ Intersect_And        │  93.3M ops/s │  61.1M ops/s │
│ Intersect_Structural │    83M ops/s │  36.4M ops/s │
│ Union_Or             │  99.7M ops/s │   8.6M ops/s │
│ Union_Structural     │  81.3M ops/s │  43.5M ops/s │
│ Tuple_Values         │  72.4M ops/s │  41.7M ops/s │
│ Tuple_Objects        │  32.6M ops/s │  22.4M ops/s │
│ Array_Numbers_4      │  94.1M ops/s │  42.8M ops/s │
│ Array_Numbers_8      │  90.6M ops/s │  42.3M ops/s │
│ Array_Numbers_16     │  77.5M ops/s │  40.2M ops/s │
│ Array_Objects_Open   │  26.3M ops/s │  19.6M ops/s │
│ Array_Objects_Close  │   9.1M ops/s │    10M ops/s │
└──────────────────────┴──────────────┴──────────────┘
```

<a name="Versions"></a>

## Versions

TypeBox ships two distinct versions that span two generations of the TypeScript compiler. 

| TypeBox | TypeScript | Description |
| :--- | :--- | :--- |
| 1.x | 6.0 - 7.0+ | **Latest.** Developed against the TypeScript 7 native compiler. Provides advanced type inference and native JSON Schema 2020-12 support. Includes backwards compatibility with `0.x` types. **ESM only.** |
| 0.x | 5.0 - 6.0 | **LTS.** Developed against older TypeScript versions and actively maintained under Long Term Support. Compatible with both **ESM and CJS**. Issues should be submitted to the [Sinclair TypeBox](https://github.com/sinclairzx81/sinclair-typebox) repository. |

## Contribute

TypeBox is open to community contribution. Please ensure you submit an issue before submitting a pull request. The TypeBox project prefers open community discussion before accepting new features.