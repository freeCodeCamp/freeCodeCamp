---
description: 'Enforce dot notation whenever possible.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/dot-notation** for documentation.

## Examples

This rule extends the base [`eslint/dot-notation`](https://eslint.org/docs/rules/dot-notation) rule.
It adds:

- Support for optionally ignoring computed `private` and/or `protected` member access.
- Compatibility with TypeScript's `noPropertyAccessFromIndexSignature` option.

## Options

This rule adds the following options:

```ts
interface Options extends BaseDotNotationOptions {
  allowPrivateClassPropertyAccess?: boolean;
  allowProtectedClassPropertyAccess?: boolean;
  allowIndexSignaturePropertyAccess?: boolean;
}

const defaultOptions: Options = {
  ...baseDotNotationDefaultOptions,
  allowPrivateClassPropertyAccess: false,
  allowProtectedClassPropertyAccess: false,
  allowIndexSignaturePropertyAccess: false,
};
```

If the TypeScript compiler option `noPropertyAccessFromIndexSignature` is set to `true`, then this rule always allows the use of square bracket notation to access properties of types that have a `string` index signature, even if `allowIndexSignaturePropertyAccess` is `false`.

### `allowPrivateClassPropertyAccess`

Example of a correct code when `allowPrivateClassPropertyAccess` is set to `true`:

```ts
class X {
  private priv_prop = 123;
}

const x = new X();
x['priv_prop'] = 123;
```

### `allowProtectedClassPropertyAccess`

Example of a correct code when `allowProtectedClassPropertyAccess` is set to `true`:

```ts
class X {
  protected protected_prop = 123;
}

const x = new X();
x['protected_prop'] = 123;
```

### `allowIndexSignaturePropertyAccess`

Example of correct code when `allowIndexSignaturePropertyAccess` is set to `true`:

```ts
class X {
  [key: string]: number;
}

const x = new X();
x['hello'] = 123;
```

If the TypeScript compiler option `noPropertyAccessFromIndexSignature` is set to `true`, then the above code is always allowed, even if `allowIndexSignaturePropertyAccess` is `false`.
