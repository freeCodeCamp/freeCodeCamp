---
description: 'Enforce default parameters to be last.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/default-param-last** for documentation.

## Examples

This rule extends the base [`eslint/default-param-last`](https://eslint.org/docs/rules/default-param-last) rule.
It adds support for optional parameters.

<!--tabs-->

### ❌ Incorrect

```ts
/* eslint @typescript-eslint/default-param-last: "error" */

function f(a = 0, b: number) {}
function f(a: number, b = 0, c: number) {}
function f(a: number, b?: number, c: number) {}
class Foo {
  constructor(public a = 10, private b: number) {}
}
class Foo {
  constructor(public a?: number, private b: number) {}
}
```

### ✅ Correct

```ts
/* eslint @typescript-eslint/default-param-last: "error" */

function f(a = 0) {}
function f(a: number, b = 0) {}
function f(a: number, b?: number) {}
function f(a: number, b?: number, c = 0) {}
function f(a: number, b = 0, c?: number) {}
class Foo {
  constructor(public a, private b = 0) {}
}
class Foo {
  constructor(public a, private b?: number) {}
}
```
