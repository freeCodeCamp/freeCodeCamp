---
description: 'Disallow non-null assertions after an optional chain expression.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain** for documentation.

`?.` optional chain expressions provide `undefined` if an object is `null` or `undefined`.
Using a `!` non-null assertion to assert the result of an `?.` optional chain expression is non-nullable is likely wrong.

> Most of the time, either the object was not nullable and did not need the `?.` for its property lookup, or the `!` is incorrect and introducing a type safety hole.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
foo?.bar!;
foo?.bar()!;
```

### ✅ Correct

```ts
foo?.bar;
foo?.bar();
```

## Further Reading

- [TypeScript 3.7 Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
- [Optional Chaining Proposal](https://github.com/tc39/proposal-optional-chaining/)
