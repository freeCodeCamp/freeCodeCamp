---
description: 'Require or disallow the `Record` type.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/consistent-indexed-object-style** for documentation.

TypeScript supports defining arbitrary object keys using an index signature. TypeScript also has a builtin type named `Record` to create an empty object defining only an index signature. For example, the following types are equal:

```ts
interface Foo {
  [key: string]: unknown;
}

type Foo = {
  [key: string]: unknown;
};

type Foo = Record<string, unknown>;
```

Keeping to one declaration form consistently improve code readability.

## Options

- `"record"` _(default)_: only allow the `Record` type.
- `"index-signature"`: only allow index signatures.

### `record`

<!--tabs-->

#### ❌ Incorrect

```ts
/* eslint @typescript-eslint/consistent-indexed-object-style: ["error", "record"] */

interface Foo {
  [key: string]: unknown;
}

type Foo = {
  [key: string]: unknown;
};
```

#### ✅ Correct

```ts
/* eslint @typescript-eslint/consistent-indexed-object-style: ["error", "record"] */

type Foo = Record<string, unknown>;
```

### `index-signature`

<!--tabs-->

#### ❌ Incorrect

```ts
/* eslint @typescript-eslint/consistent-indexed-object-style: ["error", "index-signature"] */

type Foo = Record<string, unknown>;
```

#### ✅ Correct

```ts
/* eslint @typescript-eslint/consistent-indexed-object-style: ["error", "index-signature"] */

interface Foo {
  [key: string]: unknown;
}

type Foo = {
  [key: string]: unknown;
};
```
