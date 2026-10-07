---
description: 'Enforce using function types instead of interfaces with call signatures.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-function-type** for documentation.

TypeScript allows for two common ways to declare a type for a function:

- Function type: `() => string`
- Object type with a signature: `{ (): string }`

The function type form is generally preferred when possible for being more succinct.

This rule suggests using a function type instead of an interface or object type literal with a single call signature.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
interface Example {
  (): string;
}
```

```ts
function foo(example: { (): number }): number {
  return example();
}
```

```ts
interface ReturnsSelf {
  // returns the function itself, not the `this` argument.
  (arg: string): this;
}
```

### ✅ Correct

```ts
type Example = () => string;
```

```ts
function foo(example: () => number): number {
  return bar();
}
```

```ts
// returns the function itself, not the `this` argument.
type ReturnsSelf = (arg: string) => ReturnsSelf;
```

```ts
function foo(bar: { (): string; baz: number }): string {
  return bar();
}
```

```ts
interface Foo {
  bar: string;
}
interface Bar extends Foo {
  (): void;
}
```

```ts
// multiple call signatures (overloads) is allowed:
interface Overloaded {
  (data: string): number;
  (id: number): string;
}
// this is equivelent to Overloaded interface.
type Intersection = ((data: string) => number) & ((id: number) => string);
```

## When Not To Use It

If you specifically want to use an interface or type literal with a single call signature for stylistic reasons, you can disable this rule.

This rule has a known edge case of sometimes triggering on global augmentations such as `interface Function`.
These edge cases are rare and often symptomatic of odd code.
We recommend you use an [inline ESLint disable comment](https://eslint.org/docs/latest/use/configure/rules#using-configuration-comments-1).
See [#454](https://github.com/typescript-eslint/typescript-eslint/issues/454) for details.
