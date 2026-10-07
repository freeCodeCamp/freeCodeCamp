---
description: 'Disallow async functions which have no `await` expression.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/require-await** for documentation.

## Examples

This rule extends the base [`eslint/require-await`](https://eslint.org/docs/rules/require-await) rule.
It uses type information to add support for `async` functions that return a `Promise`.

Examples of **correct** code for this rule:

```ts
async function returnsPromise1() {
  return Promise.resolve(1);
}

const returnsPromise2 = () => returnsPromise1();
```

## How to Use
