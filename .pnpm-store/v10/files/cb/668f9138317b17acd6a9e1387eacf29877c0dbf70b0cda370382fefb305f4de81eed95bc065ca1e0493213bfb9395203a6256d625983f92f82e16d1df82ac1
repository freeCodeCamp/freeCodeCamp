---
description: 'Require that function overload signatures be consecutive.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/adjacent-overload-signatures** for documentation.

Function overload signatures represent multiple ways a function can be called, potentially with different return types.
It's typical for an interface or type alias describing a function to place all overload signatures next to each other.
If Signatures placed elsewhere in the type are easier to be missed by future developers reading the code.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  foo(sn: string | number): void {}
}

export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;
```

### ✅ Correct

```ts
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}

export function bar(): void;
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void;
```

## When Not To Use It

If you don't care about the general structure of the code, then you will not need this rule.
