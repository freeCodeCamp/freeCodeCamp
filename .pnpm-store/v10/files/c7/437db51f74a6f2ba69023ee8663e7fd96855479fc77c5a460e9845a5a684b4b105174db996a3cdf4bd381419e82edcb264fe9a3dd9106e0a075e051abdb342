---
description: 'Disallow awaiting a value that is not a Thenable.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/await-thenable** for documentation.

A "Thenable" value is an object which has a `then` method, such as a Promise.
The `await` keyword is generally used to retrieve the result of calling a Thenable's `then` method.

If the `await` keyword is used on a value that is not a Thenable, the value is directly resolved immediately.
While doing so is valid JavaScript, it is often a programmer error, such as forgetting to add parenthesis to call a function that returns a Promise.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
await 'value';

const createValue = () => 'value';
await createValue();
```

### ✅ Correct

```ts
await Promise.resolve('value');

const createValue = async () => 'value';
await createValue();
```

## When Not To Use It

If you want to allow code to `await` non-Promise values.
This is generally not preferred, but can sometimes be useful for visual consistency.
