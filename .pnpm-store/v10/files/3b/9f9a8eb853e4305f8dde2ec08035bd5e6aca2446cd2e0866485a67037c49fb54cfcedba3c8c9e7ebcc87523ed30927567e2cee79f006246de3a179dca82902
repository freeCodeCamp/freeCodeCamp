<div align="center">

# utility-types

Collection of utility types, complementing TypeScript built-in mapped types and aliases (think "lodash" for static types).

[![Latest Stable Version](https://img.shields.io/npm/v/utility-types.svg)](https://www.npmjs.com/package/utility-types)
[![NPM Downloads](https://img.shields.io/npm/dm/utility-types.svg)](https://www.npmjs.com/package/utility-types)
[![NPM Downloads](https://img.shields.io/npm/dt/utility-types.svg)](https://www.npmjs.com/package/utility-types)
[![Bundlephobia Size](https://img.shields.io/bundlephobia/minzip/utility-types.svg)](https://www.npmjs.com/package/utility-types)

[![Build Status](https://semaphoreci.com/api/v1/piotrekwitek/utility-types/branches/master/shields_badge.svg)](https://semaphoreci.com/piotrekwitek/utility-types)
[![Dependency Status](https://img.shields.io/david/piotrwitek/utility-types.svg)](https://david-dm.org/piotrwitek/utility-types)
[![License](https://img.shields.io/npm/l/utility-types.svg?style=flat)](https://david-dm.org/piotrwitek/utility-types?type=peer)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/utility-types)

_Found it useful? Want more updates?_

[**Show your support by giving a :star:**](https://github.com/piotrwitek/utility-types/stargazers)

<a href="https://www.buymeacoffee.com/piotrekwitek">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me a Coffee">
</a>
<a href="https://www.patreon.com/piotrekwitek">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" alt="Become a Patron" width="160">
</a>

<br/><hr/>

### **What's new?**

:tada: _Now updated to support **TypeScript v3.7**_ :tada:

<hr/><br/>

</div>

## Features

* Providing a set of [Common Types](#table-of-contents) for TypeScript projects that are idiomatic and complementary to existing [TypeScript Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html) so you don't need to copy them between the projects.
* Providing a set of [Additional Types](#) compatible with [Flow's Utility Types](https://flow.org/en/docs/types/utilities/) to allow much easier migration to `TypeScript`.

## Goals

* Quality - thoroughly tested for type correctness with type-testing library `dts-jest`
* Secure and minimal - no third-party dependencies
* No runtime cost - it's type-level only

## Installation

```bash
# NPM
npm install utility-types

# YARN
yarn add utility-types
```

## Compatibility Notes

**TypeScript support**
* `v3.x.x` - TypeScript v3.1+
* `v2.x.x` - TypeScript v2.8.1+
* `v1.x.x` - TypeScript v2.7.2+

## Funding Issues
**Utility-Types** is an open-source project created by people investing their time for the benefit of our community.

Issues like bug fixes or feature requests can be very quickly resolved when funded through the IssueHunt platform.

I highly recommend adding a bounty to the issue that you're waiting for to attract some contributors willing to work on it.

[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/repos/76400842)

## Contributing

We are open for contributions. If you're planning to contribute please make sure to read the contributing guide as it can save you from wasting your time: [CONTRIBUTING.md](/CONTRIBUTING.md)

---

* _(built-in)_ - types built-in TypeScript, no need to import

# Table of Contents

## Aliases & Type Guards

* [`Primitive`](#primitive)
* [`isPrimitive`](#isprimitive)
* [`Falsy`](#falsy)
* [`isFalsy`](#isfalsy)
* [`Nullish`](#nullish)
* [`isNullish`](#isnullish)

## Union operators

* [`SetIntersection<A, B>`](#setintersectiona-b-same-as-extract)
* [`SetDifference<A, B>`](#setdifferencea-b-same-as-exclude)
* [`SetComplement<A, A1>`](#setcomplementa-a1)
* [`SymmetricDifference<A, B>`](#symmetricdifferencea-b)
* [`Exclude<A, B>`](#excludea-b) _(built-in)_
* [`Extract<A, B>`](#extracta-b) _(built-in)_
* [`NonNullable<T>`](#nonnullablea) _(built-in)_
* [`NonUndefined<T>`](#nonundefineda)

## Object operators

* [`FunctionKeys<T>`](#functionkeyst)
* [`NonFunctionKeys<T>`](#nonfunctionkeyst)
* [`MutableKeys<T>`](#mutablekeyst)
* [`ReadonlyKeys<T>`](#readonlykeyst)
* [`RequiredKeys<T>`](#requiredkeyst)
* [`OptionalKeys<T>`](#optionalkeyst)
* [`Optional<T, K>`](#optionalt-k)
* [`Partial<T>`](#partialt) _(built-in)_
* [`DeepPartial<T>`](#deeppartialt)
* [`Required<T, K>`](#requiredt-k)
* [`DeepRequired<T>`](#deeprequiredt)
* [`Readonly<T>`](#readonlyt) _(built-in)_
* [`DeepReadonly<T>`](#deepreadonlyt)
* [`Mutable<T>`](#mutablet)
* [`Pick<T, K>` _(built-in)_](#pickt-k-built-in)
* [`Omit<T, K>`](#omitt-k) _(built-in)_
* [`PickByValue<T, ValueType>`](#pickbyvaluet-valuetype)
* [`PickByValueExact<T, ValueType>`](#pickbyvalueexactt-valuetype)
* [`OmitByValue<T, ValueType>`](#omitbyvaluet-valuetype)
* [`OmitByValueExact<T, ValueType>`](#omitbyvalueexactt-valuetype)
* [`Intersection<T, U>`](#intersectiont-u)
* [`Diff<T, U>`](#difft-u)
* [`Subtract<T, T1>`](#subtractt-t1)
* [`Overwrite<T, U>`](#overwritet-u)
* [`Assign<T, U>`](#assignt-u)
* [`ValuesType<T>`](#valuestypet)

## Special operators

* [`ReturnType<T>`](#returntypet) _(built-in)_
* [`InstanceType<T>`](#instancetypet) _(built-in)_
* [`PromiseType<T>`](#promisetypet)
* [`Unionize<T>`](#unionizet)
* [`Brand<T, U>`](#brandt-u)
* [`UnionToIntersection<U>`](#uniontointersectionu)

## Flow's Utility Types

* [`$Keys<T>`](#keyst)
* [`$Values<T>`](#valuest)
* [`$ReadOnly<T>`](#readonly2)
* [`$Diff<T, U>`](#diff2)
* [`$PropertyType<T, K>`](#propertytypet-k)
* [`$ElementType<T, K>`](#elementtypet-k)
* [`$Call<T>`](#callt)
* [`$Shape<T>`](#shapet)
* [`$NonMaybeType<T>`](#nonmaybetypet)
* [`Class<T>`](#classt)
* [`mixed`](#mixed)

## Deprecated API (use at own risk)
* `getReturnOfExpression()` - from TS v2.0 it's better to use type-level `ReturnType` instead

---

### `Primitive`

Type representing primitive types in JavaScript, and thus TypeScript: `string | number | bigint | boolean |  symbol | null | undefined`

You can test for singular of these types with [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

### `isPrimitive`

This is a [TypeScript Typeguard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types) for the [`Primitive`](#primitive) type.

This can be useful to control the type of a parameter as the program flows. Example:

```ts
const consumer = (param: Primitive[] | Primitive): string => {
    if (isPrimitive(param)) {
        // typeof param === Primitive
        return String(param) + ' was Primitive';
    }
    // typeof param === Primitive[]
    const resultArray = param
        .map(consumer)
        .map(rootString => '\n\t' + rootString);
    return resultArray.reduce((comm, newV) => comm + newV, 'this was nested:');
};
```

[⇧ back to top](#table-of-contents)

### `Falsy`

Type representing falsy values in TypeScript: `false | "" | 0 | null | undefined`
> Except `NaN` which cannot be represented as a type literal

### `isFalsy`

```ts
const consumer = (param: Falsy | string): string => {
    if (isFalsy(param)) {
        // typeof param === Falsy
        return String(param) + ' was Falsy';
    }
    // typeof param === string
    return param.toString();
};
```

[⇧ back to top](#table-of-contents)

### `Nullish`

Type representing [nullish values](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing) in TypeScript: `null | undefined`

[⇧ back to top](#table-of-contents)

### `isNullish`

```ts
const consumer = (param: Nullish | string): string => {
    if (isNullish(param)) {
        // typeof param === Nullish
        return String(param) + ' was Nullish';
    }
    // typeof param === string
    return param.toString();
};
```

[⇧ back to top](#table-of-contents)

### `SetIntersection<A, B>` (same as Extract)

Set intersection of given union types `A` and `B`

**Usage:**

```ts
import { SetIntersection } from 'utility-types';

// Expect: "2" | "3"
type ResultSet = SetIntersection<'1' | '2' | '3', '2' | '3' | '4'>;
// Expect: () => void
type ResultSetMixed = SetIntersection<string | number | (() => void), Function>;
```

[⇧ back to top](#table-of-contents)

### `SetDifference<A, B>` (same as Exclude)

Set difference of given union types `A` and `B`

**Usage:**

```ts
import { SetDifference } from 'utility-types';

// Expect: "1"
type ResultSet = SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;
// Expect: string | number
type ResultSetMixed = SetDifference<string | number | (() => void), Function>;
```

[⇧ back to top](#table-of-contents)

### `SetComplement<A, A1>`

Set complement of given union types `A` and (it's subset) `A1`

**Usage:**

```ts
import { SetComplement } from 'utility-types';

// Expect: "1"
type ResultSet = SetComplement<'1' | '2' | '3', '2' | '3'>;
```

[⇧ back to top](#table-of-contents)

### `SymmetricDifference<A, B>`

Set difference of union and intersection of given union types `A` and `B`

**Usage:**

```ts
import { SymmetricDifference } from 'utility-types';

// Expect: "1" | "4"
type ResultSet = SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>;
```

[⇧ back to top](#table-of-contents)

### `NonNullable<A>`

Exclude `null` and `undefined` from set `A`

[⇧ back to top](#table-of-contents)

### `NonUndefined<A>`

Exclude `undefined` from set `A`

[⇧ back to top](#table-of-contents)

### `Exclude<A, B>`

Exclude subset `B` from set `A`

[⇧ back to top](#table-of-contents)

### `Extract<A, B>`

Extract subset `B` from set `A`

[⇧ back to top](#table-of-contents)

## Operations on objects

### `FunctionKeys<T>`

Get union type of keys that are functions in object type `T`

**Usage:**

```ts
import { FunctionKeys } from 'utility-types';

type MixedProps = { name: string; setName: (name: string) => void };

// Expect: "setName"
type Keys = FunctionKeys<MixedProps>;
```

[⇧ back to top](#table-of-contents)

### `NonFunctionKeys<T>`

Get union type of keys that are non-functions in object type `T`

**Usage:**

```ts
import { NonFunctionKeys } from 'utility-types';

type MixedProps = { name: string; setName: (name: string) => void };

// Expect: "name"
type Keys = NonFunctionKeys<MixedProps>;
```

[⇧ back to top](#table-of-contents)

### `MutableKeys<T>`

Get union type of keys that are mutable (not readonly) in object type `T`

Alias: `WritableKeys<T>`

**Usage:**

```ts
import { MutableKeys } from 'utility-types';

type Props = { readonly foo: string; bar: number };

// Expect: "bar"
type Keys = MutableKeys<Props>;
```

[⇧ back to top](#table-of-contents)

### `ReadonlyKeys<T>`

Get union type of keys that are readonly in object type `T`

**Usage:**

```ts
import { ReadonlyKeys } from 'utility-types';

type Props = { readonly foo: string; bar: number };

// Expect: "foo"
type Keys = ReadonlyKeys<Props>;
```

[⇧ back to top](#table-of-contents)

### `RequiredKeys<T>`

Get union type of keys that are required in object type `T`

**Usage:**

```ts
import { RequiredKeys } from 'utility-types';

type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };

// Expect: "req" | "reqUndef"
type Keys = RequiredKeys<Props>;
```

[⇧ back to top](#table-of-contents)

### `OptionalKeys<T>`

Get union type of keys that are optional in object type `T`

**Usage:**

```ts
import { OptionalKeys } from 'utility-types';

type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };

// Expect: "opt" | "optUndef"
type Keys = OptionalKeys<Props>;
```

[⇧ back to top](#table-of-contents)

### `Optional<T, K>`

From `T` make a set of properties by key `K` become optional

**Usage:**

```ts
import { Optional } from 'utility-types';

type Props = { name: string; age: number; visible: boolean; };

// Expect: { name?: string; age?: number; visible?: boolean; }
type Props = Optional<Props>
// Expect: { name: string; age?: number; visible?: boolean; }
type Props = Optional<Props, 'age' | 'visible'>;
```

[⇧ back to top](#table-of-contents)


### `Pick<T, K>` _(built-in)_

From `T` pick a set of properties by key `K`

**Usage:**

```ts
type Props = { name: string; age: number; visible: boolean };

// Expect: { age: number; }
type Props = Pick<Props, 'age'>;
```

[⇧ back to top](#table-of-contents)

### `PickByValue<T, ValueType>`

From `T` pick a set of properties by value matching `ValueType`.
_(Credit: [Piotr Lewandowski](https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c))_

**Usage:**

```ts
import { PickByValue } from 'utility-types';

type Props = { req: number; reqUndef: number | undefined; opt?: string; };

// Expect: { req: number }
type Props = PickByValue<Props, number>;
// Expect: { req: number; reqUndef: number | undefined; }
type Props = PickByValue<Props, number | undefined>;
```

[⇧ back to top](#table-of-contents)

### `PickByValueExact<T, ValueType>`

From `T` pick a set of properties by value matching exact `ValueType`.

**Usage:**

```ts
import { PickByValueExact } from 'utility-types';

type Props = { req: number; reqUndef: number | undefined; opt?: string; };

// Expect: { req: number }
type Props = PickByValueExact<Props, number>;
// Expect: { reqUndef: number | undefined; }
type Props = PickByValueExact<Props, number | undefined>;
```

[⇧ back to top](#table-of-contents)

### `Omit<T, K>`

From `T` remove a set of properties by key `K`

**Usage:**

```ts
import { Omit } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };

// Expect: { name: string; visible: boolean; }
type Props = Omit<Props, 'age'>;
```

[⇧ back to top](#table-of-contents)

### `OmitByValue<T, ValueType>`

From `T` remove a set of properties by value matching `ValueType`.
_(Credit: [Piotr Lewandowski](https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c))_

**Usage:**

```ts
import { OmitByValue } from 'utility-types';

type Props = { req: number; reqUndef: number | undefined; opt?: string; };

// Expect: { reqUndef: number | undefined; opt?: string; }
type Props = OmitByValue<Props, number>;
// Expect: { opt?: string; }
type Props = OmitByValue<Props, number | undefined>;
```

[⇧ back to top](#table-of-contents)

### `OmitByValueExact<T, ValueType>`

From `T` remove a set of properties by value matching exact `ValueType`.

**Usage:**

```ts
import { OmitByValueExact } from 'utility-types';

type Props = { req: number; reqUndef: number | undefined; opt?: string; };

// Expect: { reqUndef: number | undefined; opt?: string; }
type Props = OmitByValueExact<Props, number>;
// Expect: { req: number; opt?: string }
type Props = OmitByValueExact<Props, number | undefined>;
```

[⇧ back to top](#table-of-contents)

### `Intersection<T, U>`

From `T` pick properties that exist in `U`

**Usage:**

```ts
import { Intersection } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { age: number; }
type DuplicatedProps = Intersection<Props, DefaultProps>;
```

[⇧ back to top](#table-of-contents)

### `Diff<T, U>`

From `T` remove properties that exist in `U`

**Usage:**

```ts
import { Diff } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { name: string; visible: boolean; }
type RequiredProps = Diff<Props, DefaultProps>;
```

[⇧ back to top](#table-of-contents)

### `Subtract<T, T1>`

From `T` remove properties that exist in `T1` (`T1` has a subset of the properties of `T`)

**Usage:**

```ts
import { Subtract } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { name: string; visible: boolean; }
type RequiredProps = Subtract<Props, DefaultProps>;
```

[⇧ back to top](#table-of-contents)

### `Overwrite<T, U>`

From `U` overwrite properties to `T`

**Usage:**

```ts
import { Overwrite } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };

// Expect: { name: string; age: string; visible: boolean; }
type ReplacedProps = Overwrite<Props, NewProps>;
```

[⇧ back to top](#table-of-contents)

### `Assign<T, U>`

From `U` assign properties to `T` (just like object assign)

**Usage:**

```ts
import { Assign } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };

// Expect: { name: string; age: string; visible: boolean; other: string; }
type ExtendedProps = Assign<Props, NewProps>;
```

[⇧ back to top](#table-of-contents)

### `ValuesType<T>`

Get the union type of all the values in an object, tuple, array or array-like type `T`.

**Usage:**

```ts
import { ValuesType } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
// Expect: string | number | boolean
type PropsValues = ValuesType<Props>;

type NumberArray = number[];
// Expect: number
type NumberItems = ValuesType<NumberArray>;

type ReadonlyNumberTuple = readonly [1, 2];
// Expect: 1 | 2
type AnotherNumberUnion = ValuesType<NumberTuple>;

type BinaryArray = Uint8Array;
// Expect: number
type BinaryItems = ValuesType<BinaryArray>;
```

[⇧ back to top](#table-of-contents)

### `Partial<T>`

Make all properties of object type optional

[⇧ back to top](#table-of-contents)

### `Required<T, K>`

From `T` make a set of properties by key `K` become required

**Usage:**

```ts
import { Required } from 'utility-types';

type Props = { name?: string; age?: number; visible?: boolean; };

// Expect: { name: string; age: number; visible: boolean; }
type Props = Required<Props>
// Expect: { name?: string; age: number; visible: boolean; }
type Props = Required<Props, 'age' | 'visible'>;
```

[⇧ back to top](#table-of-contents)

### `Readonly<T>`

Make all properties of object type readonly

[⇧ back to top](#table-of-contents)

### `Mutable<T>`

From `T` make all properties become mutable

Alias: `Writable<T>`

```ts
import { Mutable } from 'utility-types';

type Props = {
  readonly name: string;
  readonly age: number;
  readonly visible: boolean;
};

// Expect: { name: string; age: number; visible: boolean; }
Mutable<Props>;
```

[⇧ back to top](#table-of-contents)

### `ReturnType<T>`

Obtain the return type of a function

[⇧ back to top](#table-of-contents)

### `InstanceType<T>`

Obtain the instance type of a class

[⇧ back to top](#table-of-contents)

### `Unionize<T>`

Disjoin object to form union of objects, each with single property

**Usage:**

```ts
import { Unionize } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };

// Expect: { name: string; } | { age: number; } | { visible: boolean; }
type UnionizedType = Unionize<Props>;
```

[⇧ back to top](#table-of-contents)

### `PromiseType<T>`

Obtain Promise resolve type

**Usage:**

```ts
import { PromiseType } from 'utility-types';

// Expect: string
type Response = PromiseType<Promise<string>>;
```

[⇧ back to top](#table-of-contents)

### `DeepReadonly<T>`

Readonly that works for deeply nested structures

**Usage:**

```ts
import { DeepReadonly } from 'utility-types';

type NestedProps = {
  first: {
    second: {
      name: string;
    };
  };
};

// Expect: {
//   readonly first: {
//     readonly second: {
//       readonly name: string;
//     };
//   };
// }
type ReadonlyNestedProps = DeepReadonly<NestedProps>;
```

[⇧ back to top](#table-of-contents)

### `DeepRequired<T>`

Required that works for deeply nested structures

**Usage:**

```ts
import { DeepRequired } from 'utility-types';

type NestedProps = {
  first?: {
    second?: {
      name?: string;
    };
  };
};

// Expect: {
//   first: {
//     second: {
//       name: string;
//     };
//   };
// }
type RequiredNestedProps = DeepRequired<NestedProps>;
```

[⇧ back to top](#table-of-contents)

### `DeepNonNullable<T>`

NonNullable that works for deeply nested structure

**Usage:**

```ts
import { DeepNonNullable } from 'utility-types';

type NestedProps = {
  first?: null | {
    second?: null | {
      name?: string | null | undefined;
    };
  };
};

// Expect: {
//   first: {
//     second: {
//       name: string;
//     };
//   };
// }
type RequiredNestedProps = DeepNonNullable<NestedProps>;
```

[⇧ back to top](#table-of-contents)

### `DeepPartial<T>`

Partial that works for deeply nested structures

**Usage:**

```ts
import { DeepPartial } from 'utility-types';

type NestedProps = {
  first: {
    second: {
      name: string;
    };
  };
};

// Expect: {
//   first?: {
//     second?: {
//       name?: string;
//     };
//   };
// }
type PartialNestedProps = DeepPartial<NestedProps>;
```

[⇧ back to top](#table-of-contents)

### `Brand<T, U>`

Define nominal type of `U` based on type of `T`. Similar to Opaque types in Flow.

**Usage:**

```ts
import { Brand } from 'utility-types';

type USD = Brand<number, "USD">
type EUR = Brand<number, "EUR">

const tax = 5 as USD;
const usd = 10 as USD;
const eur = 10 as EUR;

function gross(net: USD): USD {
  return (net + tax) as USD;
}

gross(usd); // ok
gross(eur); // Type '"EUR"' is not assignable to type '"USD"'.
```

[⇧ back to top](#table-of-contents)

### `UnionToIntersection<U>`

Get intersection type given union type `U`

**Usage:**

```ts
import { UnionToIntersection } from 'utility-types';

// Expect: { name: string } & { age: number } & { visible: boolean }
UnionToIntersection<{ name: string } | { age: number } | { visible: boolean }>
```

[⇧ back to top](#table-of-contents)

---

## Flow's Utility Types

### `$Keys<T>`

get the union type of all the keys in an object type `T`<br>
https://flow.org/en/docs/types/utilities/#toc-keys

**Usage:**

```ts
import { $Keys } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };

// Expect: "name" | "age" | "visible"
type PropsKeys = $Keys<Props>;
```

[⇧ back to top](#flows-utility-types)

### `$Values<T>`

get the union type of all the values in an object type `T`<br>
https://flow.org/en/docs/types/utilities/#toc-values

**Usage:**

```ts
import { $Values } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };

// Expect: string | number | boolean
type PropsValues = $Values<Props>;
```

[⇧ back to top](#flows-utility-types)

### <a id="readonly2"></a> `$ReadOnly<T>`

get the read-only version of a given object type `T`<br>
https://flow.org/en/docs/types/utilities/#toc-readonly

**Usage:**

```ts
import { $ReadOnly } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };

// Expect: Readonly<{ name: string; age: number; visible: boolean; }>
type ReadOnlyProps = $ReadOnly<Props>;
```

[⇧ back to top](#flows-utility-types)

### <a id="diff2"></a> `$Diff<T, U>`

get the set difference of a given object types `T` and `U` (`T \ U`)<br>
https://flow.org/en/docs/types/utilities/#toc-diff

**Usage:**

```ts
import { $Diff } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { name: string; visible: boolean; }
type RequiredProps = $Diff<Props, DefaultProps>;
```

[⇧ back to top](#flows-utility-types)

### `$PropertyType<T, K>`

get the type of property of an object at a given key `K`<br>
https://flow.org/en/docs/types/utilities/#toc-propertytype

**Usage:**

```ts
import { $PropertyType } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
// Expect: string
type NameType = $PropertyType<Props, 'name'>;

type Tuple = [boolean, number];
// Expect: boolean
type A = $PropertyType<Tuple, '0'>;
// Expect: number
type B = $PropertyType<Tuple, '1'>;
```

[⇧ back to top](#flows-utility-types)

### `$ElementType<T, K>`

get the type of elements inside of array, tuple or object of type `T`, that matches the given index type `K`<br>
https://flow.org/en/docs/types/utilities/#toc-elementtype

**Usage:**

```ts
import { $ElementType } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };
// Expect: string
type NameType = $ElementType<Props, 'name'>;

type Tuple = [boolean, number];
// Expect: boolean
type A = $ElementType<Tuple, 0>;
// Expect: number
type B = $ElementType<Tuple, 1>;

type Arr = boolean[];
// Expect: boolean
type ItemsType = $ElementType<Arr, number>;

type Obj = { [key: string]: number };
// Expect: number
type ValuesType = $ElementType<Obj, string>;
```

[⇧ back to top](#flows-utility-types)

### `$Call<T>`

get the return type of a given expression type<br>
https://flow.org/en/docs/types/utilities/#toc-call

The built-in [`ReturnType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype) can be used to accomplish the same goal, although it may have some subtle differences.

**Usage:**

```ts
import { $Call } from 'utility-types';

// Common use-case
const add = (amount: number) => ({ type: 'ADD' as 'ADD', payload: amount });
type AddAction = $Call<typeof add>; // { type: 'ADD'; payload: number }

// Examples migrated from Flow docs
type ExtractPropType<T extends { prop: any }> = (arg: T) => T['prop'];
type Obj = { prop: number };
type PropType = $Call<ExtractPropType<Obj>>; // number
// type Nope = $Call<ExtractPropType<{ nope: number }>>; // Error: argument doesn't match `Obj`.

type ExtractReturnType<T extends () => any> = (arg: T) => ReturnType<T>;
type Fn = () => number;
type FnReturnType = $Call<ExtractReturnType<Fn>>; // number
```

[⇧ back to top](#flows-utility-types)

### `$Shape<T>`

Copies the shape of the type supplied, but marks every field optional.<br>
https://flow.org/en/docs/types/utilities/#toc-shape

**Usage:**

```ts
import { $Shape } from 'utility-types';

type Props = { name: string; age: number; visible: boolean };

// Expect: Partial<Props>
type PartialProps = $Shape<Props>;
```

[⇧ back to top](#flows-utility-types)

### `$NonMaybeType<T>`

Converts a type `T` to a non-maybe type. In other words, the values of `$NonMaybeType<T>` are the values of `T` except for `null` and `undefined`.<br>
https://flow.org/en/docs/types/utilities/#toc-nonmaybe

**Usage:**

```ts
import { $NonMaybeType } from 'utility-types';

type MaybeName = string | null;

// Expect: string
type Name = $NonMaybeType<MaybeName>;
```

[⇧ back to top](#flows-utility-types)

### `Class<T>`

Given a type T representing instances of a class C, the type Class<T> is the type of the class C<br>
https://flow.org/en/docs/types/utilities/#toc-class
\* Differs from original Flow's util - implements only constructor part and won't include any static members. Additionally classes in Typescript are not treated as nominal

**Usage:**

```ts
import { Class } from 'utility-types';


function makeStore(storeClass: Class<Store>): Store {
  return new storeClass();
}
```

[⇧ back to top](#flows-utility-types)

### mixed

An arbitrary type that could be anything (same as `unknown`)<br>
https://flow.org/en/docs/types/mixed

[⇧ back to top](#table-of-contents)

---

## Related Projects

- [`ts-toolbelt`](https://github.com/pirix-gh/ts-toolbelt) - Higher type safety for TypeScript
- [`$mol_type`](https://github.com/eigenmethod/mol/tree/master/type) - Collection of TypeScript meta types for complex logic

---

## License

[MIT License](/LICENSE)

Copyright (c) 2016 Piotr Witek <mailto:piotrek.witek@gmail.com> (http://piotrwitek.github.io)
