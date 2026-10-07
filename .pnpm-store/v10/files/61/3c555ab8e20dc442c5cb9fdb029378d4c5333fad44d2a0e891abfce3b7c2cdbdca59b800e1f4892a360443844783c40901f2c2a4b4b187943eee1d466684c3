---
description: 'Disallow duplicate enum member values.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-duplicate-enum-values** for documentation.

Although TypeScript supports duplicate enum member values, people usually expect members to have unique values within the same enum. Duplicate values can lead to bugs that are hard to track down.

## Examples

This rule disallows defining an enum with multiple members initialized to the same value.

> This rule only enforces on enum members initialized with string or number literals.
> Members without an initializer or initialized with an expression are not checked by this rule.

<!--tabs-->

### ❌ Incorrect

```ts
enum E {
  A = 0,
  B = 0,
}
```

```ts
enum E {
  A = 'A',
  B = 'A',
}
```

### ✅ Correct

```ts
enum E {
  A = 0,
  B = 1,
}
```

```ts
enum E {
  A = 'A',
  B = 'B',
}
```
