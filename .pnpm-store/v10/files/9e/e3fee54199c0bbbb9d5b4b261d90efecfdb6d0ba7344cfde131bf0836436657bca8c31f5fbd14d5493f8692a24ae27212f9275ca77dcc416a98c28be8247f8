---
description: 'Enforce using a particular method signature syntax.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/method-signature-style** for documentation.

TypeScript provides two ways to define an object/interface function property:

```ts
interface Example {
  // method shorthand syntax
  func(arg: string): number;

  // regular property with function type
  func: (arg: string) => number;
}
```

The two are very similar; most of the time it doesn't matter which one you use.

A good practice is to use the TypeScript's `strict` option (which implies `strictFunctionTypes`) which enables correct typechecking for function properties only (method signatures get old behavior).

TypeScript FAQ:

> A method and a function property of the same type behave differently.
> Methods are always bivariant in their argument, while function properties are contravariant in their argument under `strictFunctionTypes`.

See the reasoning behind that in the [TypeScript PR for the compiler option](https://github.com/microsoft/TypeScript/pull/18654).

## Options

This rule accepts one string option:

- `"property"`: Enforce using property signature for functions. Use this to enforce maximum correctness together with TypeScript's strict mode.
- `"method"`: Enforce using method signature for functions. Use this if you aren't using TypeScript's strict mode and prefer this style.

The default is `"property"`.

### `property`

Examples of code with `property` option.

<!--tabs-->

#### ❌ Incorrect

```ts
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
interface T3 {
  func(arg: number): void;
  func(arg: string): void;
  func(arg: boolean): void;
}
```

#### ✅ Correct

```ts
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
// this is equivalent to the overload
interface T3 {
  func: ((arg: number) => void) &
    ((arg: string) => void) &
    ((arg: boolean) => void);
}
```

### `method`

Examples of code with `method` option.

<!--tabs-->

#### ❌ Incorrect

```ts
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
```

#### ✅ Correct

```ts
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
```

## When Not To Use It

If you don't want to enforce a particular style for object/interface function types, and/or if you don't use `strictFunctionTypes`, then you don't need this rule.
