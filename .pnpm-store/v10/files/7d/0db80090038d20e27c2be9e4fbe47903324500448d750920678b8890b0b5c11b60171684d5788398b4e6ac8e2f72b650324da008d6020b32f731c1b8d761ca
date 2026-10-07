---
description: 'Disallow non-null assertions in the left operand of a nullish coalescing operator.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing** for documentation.

The `??` nullish coalescing runtime operator allows providing a default value when dealing with `null` or `undefined`.
Using a `!` non-null assertion type operator in the left operand of a nullish coalescing operator is redundant, and likely a sign of programmer error or confusion over the two operators.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
foo! ?? bar;
foo.bazz! ?? bar;
foo!.bazz! ?? bar;
foo()! ?? bar;

let x!: string;
x! ?? '';

let x: string;
x = foo();
x! ?? '';
```

### ✅ Correct

```ts
foo ?? bar;
foo ?? bar!;
foo!.bazz ?? bar;
foo!.bazz ?? bar!;
foo() ?? bar;

// This is considered correct code because there's no way for the user to satisfy it.
let x: string;
x! ?? '';
```

## Further Reading

- [TypeScript 3.7 Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
- [Nullish Coalescing Proposal](https://github.com/tc39/proposal-nullish-coalescing)
