---
description: 'Disallow the `void` operator except when used to discard a value.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-meaningless-void-operator** for documentation.

`void` in TypeScript refers to a function return that is meant to be ignored.
The `void` operator is a useful tool to convey the programmer's intent to discard a value.
For example, it is recommended as one way of suppressing [`@typescript-eslint/no-floating-promises`](./no-floating-promises.md) instead of adding `.catch()` to a promise.

This rule helps an authors catch API changes where previously a value was being discarded at a call site, but the callee changed so it no longer returns a value.
When combined with [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions), it also helps _readers_ of the code by ensuring consistency: a statement that looks like `void foo();` is **always** discarding a return value, and a statement that looks like `foo();` is **never** discarding a return value.
This rule reports on any `void` operator whose argument is already of type `void` or `undefined`.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
void (() => {})();

function foo() {}
void foo();
```

### ✅ Correct

```ts
(() => {})();

function foo() {}
foo(); // nothing to discard

function bar(x: number) {
  void x; // discarding a number
  return 2;
}
void bar(); // discarding a number
```

## Options

`checkNever: true` will suggest removing `void` when the argument has type `never`.
