---
description: 'Disallow magic numbers.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-magic-numbers** for documentation.

## Examples

This rule extends the base [`eslint/no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers) rule.
It adds support for:

- numeric literal types (`type T = 1`),
- `enum` members (`enum Foo { bar = 1 }`),
- `readonly` class properties (`class Foo { readonly bar = 1 }`).

## Options

This rule adds the following options:

```ts
interface Options extends BaseNoMagicNumbersOptions {
  ignoreEnums?: boolean;
  ignoreNumericLiteralTypes?: boolean;
  ignoreReadonlyClassProperties?: boolean;
  ignoreTypeIndexes?: boolean;
}

const defaultOptions: Options = {
  ...baseNoMagicNumbersDefaultOptions,
  ignoreEnums: false,
  ignoreNumericLiteralTypes: false,
  ignoreReadonlyClassProperties: false,
  ignoreTypeIndexes: false,
};
```

### `ignoreEnums`

A boolean to specify if enums used in TypeScript are considered okay. `false` by default.

Examples of **incorrect** code for the `{ "ignoreEnums": false }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreEnums": false }]*/

enum foo {
  SECOND = 1000,
}
```

Examples of **correct** code for the `{ "ignoreEnums": true }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreEnums": true }]*/

enum foo {
  SECOND = 1000,
}
```

### `ignoreNumericLiteralTypes`

A boolean to specify if numbers used in TypeScript numeric literal types are considered okay. `false` by default.

Examples of **incorrect** code for the `{ "ignoreNumericLiteralTypes": false }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreNumericLiteralTypes": false }]*/

type SmallPrimes = 2 | 3 | 5 | 7 | 11;
```

Examples of **correct** code for the `{ "ignoreNumericLiteralTypes": true }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreNumericLiteralTypes": true }]*/

type SmallPrimes = 2 | 3 | 5 | 7 | 11;
```

### `ignoreReadonlyClassProperties`

Examples of **incorrect** code for the `{ "ignoreReadonlyClassProperties": false }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreReadonlyClassProperties": false }]*/

class Foo {
  readonly A = 1;
  readonly B = 2;
  public static readonly C = 1;
  static readonly D = 1;
}
```

Examples of **correct** code for the `{ "ignoreReadonlyClassProperties": true }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreReadonlyClassProperties": true }]*/

class Foo {
  readonly A = 1;
  readonly B = 2;
  public static readonly C = 1;
  static readonly D = 1;
}
```

### `ignoreTypeIndexes`

A boolean to specify if numbers used to index types are okay. `false` by default.

Examples of **incorrect** code for the `{ "ignoreTypeIndexes": false }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreTypeIndexes": false }]*/

type Foo = Bar[0];
type Baz = Parameters<Foo>[2];
```

Examples of **correct** code for the `{ "ignoreTypeIndexes": true }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreTypeIndexes": true }]*/

type Foo = Bar[0];
type Baz = Parameters<Foo>[2];
```
