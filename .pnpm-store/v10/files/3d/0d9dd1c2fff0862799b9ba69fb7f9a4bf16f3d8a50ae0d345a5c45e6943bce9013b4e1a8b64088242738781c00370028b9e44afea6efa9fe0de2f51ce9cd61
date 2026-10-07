---
description: "Require explicit return and argument types on exported functions' and classes' public class methods."
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/explicit-module-boundary-types** for documentation.

Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output.
Adding explicit type annotations for those types can help improve code readability.
It can also improve TypeScript type checking performance on larger codebases.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
// Should indicate that no value is returned (void)
export function test() {
  return;
}

// Should indicate that a number is returned
export default function () {
  return 1;
}

// Should indicate that a string is returned
export var arrowFn = () => 'test';

// All arguments should be typed
export var arrowFn = (arg): string => `test ${arg}`;
export var arrowFn = (arg: any): string => `test ${arg}`;

export class Test {
  // Should indicate that no value is returned (void)
  method() {
    return;
  }
}
```

### ✅ Correct

```ts
// Function is not exported
function test() {
  return;
}

// A return value of type number
export var fn = function (): number {
  return 1;
};

// A return value of type string
export var arrowFn = (): string => 'test';

// All arguments should be typed
export var arrowFn = (arg: string): string => `test ${arg}`;
export var arrowFn = (arg: unknown): string => `test ${arg}`;

// Class is not exported
class Test {
  method() {
    return;
  }
}
```

## Options

### Configuring in a mixed JS/TS codebase

If you are working on a codebase within which you lint non-TypeScript code (i.e. `.js`/`.mjs`/`.cjs`/`.jsx`), you should ensure that you should use [ESLint `overrides`](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) to only enable the rule on `.ts`/`.mts`/`.cts`/`.tsx` files. If you don't, then you will get unfixable lint errors reported within `.js`/`.mjs`/`.cjs`/`.jsx` files.

```jsonc
{
  "rules": {
    // disable the rule for all files
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "error"
      }
    }
  ]
}
```

### `allowArgumentsExplicitlyTypedAsAny`

Examples of code for this rule with `{ allowArgumentsExplicitlyTypedAsAny: false }`:

<!--tabs-->

#### ❌ Incorrect

```ts
export const func = (value: any): number => value + 1;
```

#### ✅ Correct

```ts
export const func = (value: number): number => value + 1;
```

### `allowDirectConstAssertionInArrowFunctions`

Examples of code for this rule with `{ allowDirectConstAssertionInArrowFunctions: false }`:

<!--tabs-->

#### ❌ Incorrect

```ts
export const func = (value: number) => ({ type: 'X', value });
export const foo = () => ({
  bar: true,
});
export const bar = () => 1;
```

#### ✅ Correct

```ts
export const func = (value: number) => ({ type: 'X', value } as const);
export const foo = () =>
  ({
    bar: true,
  } as const);
export const bar = () => 1 as const;
```

### `allowedNames`

You may pass function/method names you would like this rule to ignore, like so:

```json
{
  "@typescript-eslint/explicit-module-boundary-types": [
    "error",
    {
      "allowedNames": ["ignoredFunctionName", "ignoredMethodName"]
    }
  ]
}
```

### `allowHigherOrderFunctions`

Examples of code for this rule with `{ allowHigherOrderFunctions: false }`:

<!--tabs-->

#### ❌ Incorrect

```ts
export const arrowFn = () => () => {};

export function fn() {
  return function () {};
}

export function foo(outer: string) {
  return function (inner: string) {};
}
```

#### ✅ Correct

```ts
export const arrowFn = () => (): void => {};

export function fn() {
  return function (): void {};
}

export function foo(outer: string) {
  return function (inner: string): void {};
}
```

### `allowTypedFunctionExpressions`

Examples of code for this rule with `{ allowTypedFunctionExpressions: false }`:

<!--tabs-->

#### ❌ Incorrect

```ts
export let arrowFn = () => 'test';

export let funcExpr = function () {
  return 'test';
};

export let objectProp = {
  foo: () => 1,
};

export const foo = bar => {};
```

#### ✅ Correct

```ts
type FuncType = () => string;

export let arrowFn: FuncType = () => 'test';

export let funcExpr: FuncType = function () {
  return 'test';
};

export let asTyped = (() => '') as () => string;
export let castTyped = <() => string>(() => '');

interface ObjectType {
  foo(): number;
}
export let objectProp: ObjectType = {
  foo: () => 1,
};
export let objectPropAs = {
  foo: () => 1,
} as ObjectType;
export let objectPropCast = <ObjectType>{
  foo: () => 1,
};

type FooType = (bar: string) => void;
export const foo: FooType = bar => {};
```

## When Not To Use It

If you wish to make sure all functions have explicit return types, as opposed to only the module boundaries, you can use [explicit-function-return-type](./explicit-function-return-type.md)

## Further Reading

- TypeScript [Functions](https://www.typescriptlang.org/docs/handbook/functions.html#function-types)
