---
description: 'Disallow two overloads that could be unified into one with a union or an optional/rest parameter.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/unified-signatures** for documentation.

Function overload signatures are a TypeScript way to define a function that can be called in multiple very different ways.
Overload signatures add syntax and theoretical bloat, so it's generally best to avoid using them when possible.
Switching to union types and/or optional or rest parameters can often avoid the need for overload signatures.

This rule reports when function overload signatures can be replaced by a single function signature.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
function x(x: number): void;
function x(x: string): void;
```

```ts
function y(): void;
function y(...x: number[]): void;
```

### ✅ Correct

```ts
function x(x: number | string): void;
```

```ts
function y(...x: number[]): void;
```

```ts
// This rule won't check overload signatures with different rest parameter types.
// See https://github.com/microsoft/TypeScript/issues/5077
function f(...a: number[]): void;
function f(...a: string[]): void;
```

## Options

### `ignoreDifferentlyNamedParameters`

Examples of code for this rule with `ignoreDifferentlyNamedParameters`:

<!--tabs-->

### ❌ Incorrect

```ts
function f(a: number): void;
function f(a: string): void;
```

### ✅ Correct

```ts
function f(a: number): void;
function f(b: string): void;
```

## Options
