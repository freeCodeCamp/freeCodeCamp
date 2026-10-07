---
description: 'Require consistently using either `T[]` or `Array<T>` for arrays.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/array-type** for documentation.

TypeScript provides two equivalent ways to define an array type: `T[]` and `Array<T>`.
The two styles are functionally equivalent.
Using the same style consistently across your codebase makes it easier for developers to read and understand array types.

## Options

The default config will enforce that all mutable and readonly arrays use the `'array'` syntax.

### `"array"`

Always use `T[]` or `readonly T[]` for all array types.

<!--tabs-->

#### ❌ Incorrect

```ts
const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];
```

#### ✅ Correct

```ts
const x: string[] = ['a', 'b'];
const y: readonly string[] = ['a', 'b'];
```

### `"generic"`

Always use `Array<T>` or `ReadonlyArray<T>` for all array types.

<!--tabs-->

#### ❌ Incorrect

```ts
const x: string[] = ['a', 'b'];
const y: readonly string[] = ['a', 'b'];
```

#### ✅ Correct

```ts
const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];
```

### `"array-simple"`

Use `T[]` or `readonly T[]` for simple types (i.e. types which are just primitive names or type references).
Use `Array<T>` or `ReadonlyArray<T>` for all other types (union types, intersection types, object types, function types, etc).

<!--tabs-->

#### ❌ Incorrect

```ts
const a: (string | number)[] = ['a', 'b'];
const b: { prop: string }[] = [{ prop: 'a' }];
const c: (() => void)[] = [() => {}];
const d: Array<MyType> = ['a', 'b'];
const e: Array<string> = ['a', 'b'];
const f: ReadonlyArray<string> = ['a', 'b'];
```

#### ✅ Correct

```ts
const a: Array<string | number> = ['a', 'b'];
const b: Array<{ prop: string }> = [{ prop: 'a' }];
const c: Array<() => void> = [() => {}];
const d: MyType[] = ['a', 'b'];
const e: string[] = ['a', 'b'];
const f: readonly string[] = ['a', 'b'];
```

## Combination Matrix

This matrix lists all possible option combinations and their expected results for different types of Arrays.

| defaultOption  | readonlyOption | Array with simple type | Array with non simple type | Readonly array with simple type | Readonly array with non simple type |
| -------------- | -------------- | ---------------------- | -------------------------- | ------------------------------- | ----------------------------------- |
| `array`        |                | `number[]`             | `(Foo & Bar)[]`            | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `array`        | `array`        | `number[]`             | `(Foo & Bar)[]`            | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `array`        | `array-simple` | `number[]`             | `(Foo & Bar)[]`            | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `array`        | `generic`      | `number[]`             | `(Foo & Bar)[]`            | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |
| `array-simple` |                | `number[]`             | `Array<Foo & Bar>`         | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `array-simple` | `array`        | `number[]`             | `Array<Foo & Bar>`         | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `array-simple` | `array-simple` | `number[]`             | `Array<Foo & Bar>`         | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `array-simple` | `generic`      | `number[]`             | `Array<Foo & Bar>`         | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |
| `generic`      |                | `Array<number>`        | `Array<Foo & Bar>`         | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |
| `generic`      | `array`        | `Array<number>`        | `Array<Foo & Bar>`         | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `generic`      | `array-simple` | `Array<number>`        | `Array<Foo & Bar>`         | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `generic`      | `generic`      | `Array<number>`        | `Array<Foo & Bar>`         | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |
