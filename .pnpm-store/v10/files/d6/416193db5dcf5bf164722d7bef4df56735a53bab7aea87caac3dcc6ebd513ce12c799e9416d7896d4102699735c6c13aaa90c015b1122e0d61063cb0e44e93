---
description: 'Disallow extra non-null assertions.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-extra-non-null-assertion** for documentation.

The `!` non-null assertion operator in TypeScript is used to assert that a value's type does not include `null` or `undefined`.
Using the operator any more than once on a single value does nothing.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;
```

```ts
function foo(bar: number | undefined) {
  const bar: number = bar!!!;
}
```

```ts
function foo(bar?: { n: number }) {
  return bar!?.n;
}
```

### ✅ Correct

```ts
const foo: { bar: number } | null = null;
const bar = foo!.bar;
```

```ts
function foo(bar: number | undefined) {
  const bar: number = bar!;
}
```

```ts
function foo(bar?: { n: number }) {
  return bar?.n;
}
```
