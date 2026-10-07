---
description: 'Disallow non-null assertions using the `!` postfix operator.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-non-null-assertion** for documentation.

TypeScript's `!` non-null assertion operator asserts to the type system that an expression is non-nullable, as in not `null` or `undefined`.
Using assertions to tell the type system new information is often a sign that code is not fully type-safe.
It's generally better to structure program logic so that TypeScript understands when values may be nullable.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
interface Example {
  property?: string;
}

declare const example: Example;
const includesBaz = example.property!.includes('baz');
```

### ✅ Correct

```ts
interface Example {
  property?: string;
}

declare const example: Example;
const includesBaz = example.property?.includes('baz') ?? false;
```

## When Not To Use It

If your project does not use the `strictNullChecks` compiler option, this rule is likely useless to you.
If your code is often wildly incorrect with respect to strict null-checking, your code may not yet be ready for this rule.
