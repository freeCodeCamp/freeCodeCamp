---
description: 'Disallow `void` type outside of generic or return types.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-invalid-void-type** for documentation.

`void` in TypeScript refers to a function return that is meant to be ignored.
Attempting to use a `void` type outside of a return type or generic type argument is often a sign of programmer error.
`void` can also be misleading for other developers even if used correctly.

> The `void` type means cannot be mixed with any other types, other than `never`, which accepts all types.
> If you think you need this then you probably want the `undefined` type instead.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
type PossibleValues = string | number | void;
type MorePossibleValues = string | ((number & any) | (string | void));

function logSomething(thing: void) {}
function printArg<T = void>(arg: T) {}

logAndReturn<void>(undefined);

interface Interface {
  lambda: () => void;
  prop: void;
}

class MyClass {
  private readonly propName: void;
}
```

### ✅ Correct

```ts
type NoOp = () => void;

function noop(): void {}

let trulyUndefined = void 0;

async function promiseMeSomething(): Promise<void> {}

type stillVoid = void | never;
```

## Options

### `allowInGenericTypeArguments`

This option lets you control if `void` can be used as a valid value for generic type parameters.

Alternatively, you can provide an array of strings which whitelist which types may accept `void` as a generic type parameter.

Any types considered valid by this option will be considered valid as part of a union type with `void`.

This option is `true` by default.

The following patterns are considered warnings with `{ allowInGenericTypeArguments: false }`:

```ts
logAndReturn<void>(undefined);

let voidPromise: Promise<void> = new Promise<void>(() => {});
let voidMap: Map<string, void> = new Map<string, void>();
```

The following patterns are considered warnings with `{ allowInGenericTypeArguments: ['Ex.Mx.Tx'] }`:

```ts
logAndReturn<void>(undefined);

type NotAllowedVoid1 = Mx.Tx<void>;
type NotAllowedVoid2 = Tx<void>;
type NotAllowedVoid3 = Promise<void>;
```

The following patterns are not considered warnings with `{ allowInGenericTypeArguments: ['Ex.Mx.Tx'] }`:

```ts
type AllowedVoid = Ex.Mx.Tx<void>;
type AllowedVoidUnion = void | Ex.Mx.Tx<void>;
```

### `allowAsThisParameter`

This option allows specifying a `this` parameter of a function to be `void` when set to `true`.
This pattern can be useful to explicitly label function types that do not use a `this` argument. [See the TypeScript docs for more information](https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters-in-callbacks).

This option is `false` by default.

The following patterns are considered warnings with `{ allowAsThisParameter: false }` but valid with `{ allowAsThisParameter: true }`:

```ts
function doThing(this: void) {}
class Example {
  static helper(this: void) {}
  callback(this: void) {}
}
```

## When Not To Use It

If you don't care about if `void` is used with other types,
or in invalid places, then you don't need this rule.
