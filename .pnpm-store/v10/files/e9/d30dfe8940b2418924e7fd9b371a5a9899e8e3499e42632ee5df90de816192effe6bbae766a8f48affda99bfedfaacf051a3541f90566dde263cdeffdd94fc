---
description: 'Require Promise-like statements to be handled appropriately.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-floating-promises** for documentation.

A "floating" Promise is one that is created without any code set up to handle any errors it might throw.
Floating Promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections, and more.

This rule reports when a Promise is created and not properly handled.
Valid ways of handling a Promise-valued statement include:

- `await`ing it
- `return`ing it
- Calling its `.then()` with two arguments
- Calling its `.catch()` with one argument

:::tip
`no-floating-promises` only detects unhandled Promise _statements_.
See [`no-misused-promises`](./no-misused-promises.md) for detecting code that provides Promises to _logical_ locations such as if statements.
:::

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
const promise = new Promise((resolve, reject) => resolve('value'));
promise;

async function returnsPromise() {
  return 'value';
}
returnsPromise().then(() => {});

Promise.reject('value').catch();

Promise.reject('value').finally();
```

### ✅ Correct

```ts
const promise = new Promise((resolve, reject) => resolve('value'));
await promise;

async function returnsPromise() {
  return 'value';
}
returnsPromise().then(
  () => {},
  () => {},
);

Promise.reject('value').catch(() => {});

Promise.reject('value').finally(() => {});
```

## Options

### `ignoreVoid`

This allows you to stop the rule reporting promises consumed with void operator.
This can be a good way to explicitly mark a promise as intentionally not awaited.

Examples of **correct** code for this rule with `{ ignoreVoid: true }`:

```ts
async function returnsPromise() {
  return 'value';
}
void returnsPromise();

void Promise.reject('value');
```

With this option set to `true`, and if you are using `no-void`, you should turn on the [`allowAsStatement`](https://eslint.org/docs/rules/no-void#allowasstatement) option.

### `ignoreIIFE`

This allows you to skip checking of async IIFEs (Immediately Invocated function Expressions).

Examples of **correct** code for this rule with `{ ignoreIIFE: true }`:

```ts
await(async function () {
  await res(1);
})();

(async function () {
  await res(1);
})();
```

## When Not To Use It

If you do not use Promise-like values in your codebase, or want to allow them to remain unhandled.

## Related To

- [`no-misused-promises`](./no-misused-promises.md)
