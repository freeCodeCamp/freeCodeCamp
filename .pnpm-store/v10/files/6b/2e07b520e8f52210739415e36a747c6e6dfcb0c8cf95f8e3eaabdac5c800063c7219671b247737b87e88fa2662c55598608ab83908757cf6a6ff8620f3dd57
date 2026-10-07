---
description: 'Disallow member access on a value with type `any`.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-unsafe-member-access** for documentation.

The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
Using `any` disables many type checking rules and is generally best used only as a last resort or when prototyping code.

Despite your best intentions, the `any` type can sometimes leak into your codebase.
Accessing a member of an `any`-typed value creates a potential type safety hole and source of bugs in your codebase.

This rule disallows member access on any variable that is typed as `any`.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
declare const anyVar: any;
declare const nestedAny: { prop: any };

anyVar.a;
anyVar.a.b;
anyVar['a'];
anyVar['a']['b'];

nestedAny.prop.a;
nestedAny.prop['a'];

const key = 'a';
nestedAny.prop[key];

// Using an any to access a member is unsafe
const arr = [1, 2, 3];
arr[anyVar];
nestedAny[anyVar];
```

### ✅ Correct

```ts
declare const properlyTyped: { prop: { a: string } };

properlyTyped.prop.a;
properlyTyped.prop['a'];

const key = 'a';
properlyTyped.prop[key];

const arr = [1, 2, 3];
arr[1];
const idx = 1;
arr[idx];
arr[idx++];
```

## Related To

- [`no-explicit-any`](./no-explicit-any.md)
