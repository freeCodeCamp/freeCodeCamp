---
description: 'Enforce type definitions to consistently use either `interface` or `type`.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/consistent-type-definitions** for documentation.

TypeScript provides two common ways to define an object type: `interface` and `type`.

```ts
// type alias
type T1 = {
  a: string;
  b: number;
};

// interface keyword
interface T2 {
  a: string;
  b: number;
}
```

The two are generally very similar, and can often be used interchangeably.
Using the same type declaration style consistently helps with code readability.

## Options

- `"interface"` _(default)_: enforce using `interface`s for object type definitions.
- `"type"`: enforce using `type`s for object type definitions.

### `interface`

<!--tabs-->

#### ❌ Incorrect

```ts
/* eslint @typescript-eslint/consistent-type-definitions: ["error", "interface"] */

type T = { x: number };
```

#### ✅ Correct

```ts
/* eslint @typescript-eslint/consistent-type-definitions: ["error", "interface"] */

type T = string;
type Foo = string | {};

interface T {
  x: number;
}
```

### `type`

<!--tabs-->

#### ❌ Incorrect

```ts
/* eslint @typescript-eslint/consistent-type-definitions: ["error", "type"] */

interface T {
  x: number;
}
```

#### ✅ Correct

```ts
/* eslint @typescript-eslint/consistent-type-definitions: ["error", "type"] */

type T = { x: number };
```

## When Not To Use It

If you specifically want to use an interface or type literal for stylistic reasons, you can disable this rule.
