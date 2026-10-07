---
description: 'Enforce using type parameter when calling `Array#reduce` instead of casting.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-reduce-type-parameter** for documentation.

It's common to call `Array#reduce` with a generic type, such as an array or object, as the initial value.
Since these values are empty, their types are not usable:

- `[]` has type `never[]`, which can't have items pushed into it as nothing is type `never`
- `{}` has type `{}`, which doesn't have an index signature and so can't have properties added to it

A common solution to this problem is to use an `as` assertion on the initial value.
While this will work, it's not the most optimal solution as type assertions have subtle effects on the underlying types that can allow bugs to slip in.

A better solution is to pass the type in as a generic type argument to `Array#reduce` explicitly.
This means that TypeScript doesn't have to try to infer the type, and avoids the common pitfalls that come with casting.

This rule looks for calls to `Array#reduce`, and reports if an initial value is being passed & asserted.
It will suggest instead pass the asserted type to `Array#reduce` as a generic type argument.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
[1, 2, 3].reduce((arr, num) => arr.concat(num * 2), [] as number[]);

['a', 'b'].reduce(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {} as Record<string, boolean>,
);
```

### ✅ Correct

```ts
[1, 2, 3].reduce<number[]>((arr, num) => arr.concat(num * 2), []);

['a', 'b'].reduce<Record<string, boolean>>(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {},
);
```

## When Not To Use It

If you don't want to use typechecking in your linting, you can't use this rule.
