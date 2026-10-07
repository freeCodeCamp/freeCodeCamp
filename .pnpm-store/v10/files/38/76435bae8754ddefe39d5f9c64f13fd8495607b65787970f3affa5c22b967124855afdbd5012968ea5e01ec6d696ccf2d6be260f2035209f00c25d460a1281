---
description: 'Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/consistent-generic-constructors** for documentation.

When constructing a generic class, you can specify the type arguments on either the left-hand side (as a type annotation) or the right-hand side (as part of the constructor call):

```ts
// Left-hand side
const map: Map<string, number> = new Map();

// Right-hand side
const map = new Map<string, number>();
```

This rule ensures that type arguments appear consistently on one side of the declaration.
Keeping to one side consistently improve code readability.

> The rule never reports when there are type parameters on both sides, or neither sides of the declaration.
> It also doesn't report if the names of the type annotation and the constructor don't match.

## Options

- `constructor` _(default)_: type arguments that **only** appear on the type annotation are disallowed.
- `type-annotation`: type arguments that **only** appear on the constructor are disallowed.

### `constructor`

<!--tabs-->

#### ❌ Incorrect

```ts
const map: Map<string, number> = new Map();
const set: Set<string> = new Set();
```

#### ✅ Correct

```ts
const map = new Map<string, number>();
const map: Map<string, number> = new MyMap();
const set = new Set<string>();
const set = new Set();
const set: Set<string> = new Set<string>();
```

### `type-annotation`

<!--tabs-->

#### ❌ Incorrect

```ts
const map = new Map<string, number>();
const set = new Set<string>();
```

#### ✅ Correct

```ts
const map: Map<string, number> = new Map();
const set: Set<string> = new Set();
const set = new Set();
const set: Set<string> = new Set<string>();
```

## When Not To Use It

You can turn this rule off if you don't want to enforce one kind of generic constructor style over the other.
