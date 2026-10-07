---
description: 'Enforce using `@ts-expect-error` over `@ts-ignore`.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-ts-expect-error** for documentation.

TypeScript allows you to suppress all errors on a line by placing a comment starting with `@ts-ignore` or `@ts-expect-error` immediately before the erroring line.
The two directives work the same, except `@ts-expect-error` causes a type error if placed before a line that's not erroring in the first place.

This means its easy for `@ts-ignore`s to be forgotten about, and remain in code even after the error they were suppressing is fixed.
This is dangerous, as if a new error arises on that line it'll be suppressed by the forgotten about `@ts-ignore`, and so be missed.

## Examples

This rule reports any usage of `@ts-ignore`, including a fixer to replace with `@ts-expect-error`.

<!--tabs-->

### ❌ Incorrect

```ts
// @ts-ignore
const str: string = 1;

/**
 * Explaining comment
 *
 * @ts-ignore */
const multiLine: number = 'value';

/** @ts-ignore */
const block: string = 1;

const isOptionEnabled = (key: string): boolean => {
  // @ts-ignore: if key isn't in globalOptions it'll be undefined which is false
  return !!globalOptions[key];
};
```

### ✅ Correct

```ts
// @ts-expect-error
const str: string = 1;

/**
 * Explaining comment
 *
 * @ts-expect-error */
const multiLine: number = 'value';

/** @ts-expect-error */
const block: string = 1;

const isOptionEnabled = (key: string): boolean => {
  // @ts-expect-error: if key isn't in globalOptions it'll be undefined which is false
  return !!globalOptions[key];
};
```

## When Not To Use It

If you are compiling against multiple versions of TypeScript and using `@ts-ignore` to ignore version-specific type errors, this rule might get in your way.

## Further Reading

- [Original Implementing PR](https://github.com/microsoft/TypeScript/pull/36014)
