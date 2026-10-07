---
description: 'Disallow unnecessary equality comparisons against boolean literals.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare** for documentation.

Comparing boolean values to boolean literals is unnecessary: those comparisons result in the same booleans.
Using the boolean values directly, or via a unary negation (`!value`), is more concise and clearer.

This rule ensures that you do not include unnecessary comparisons with boolean literals.
A comparison is considered unnecessary if it checks a boolean literal against any variable with just the `boolean` type.
A comparison is **_not_** considered unnecessary if the type is a union of booleans (`string | boolean`, `SomeObject | boolean`, etc.).

## Examples

:::note
Throughout this page, only strict equality (`===` and `!==`) are used in the examples.
However, the implementation of the rule does not distinguish between strict and loose equality.
Any example below that uses `===` would be treated the same way if `==` was used, and `!==` would be treated the same way if `!=` was used.
:::

<!--tabs-->

### ❌ Incorrect

```ts
declare const someCondition: boolean;
if (someCondition === true) {
}
```

### ✅ Correct

```ts
declare const someCondition: boolean;
if (someCondition) {
}

declare const someObjectBoolean: boolean | Record<string, unknown>;
if (someObjectBoolean === true) {
}

declare const someStringBoolean: boolean | string;
if (someStringBoolean === true) {
}
```

## Options

This rule always checks comparisons between a boolean variable and a boolean
literal. Comparisons between nullable boolean variables and boolean literals
are **not** checked by default.

### `allowComparingNullableBooleansToTrue`

Examples of code for this rule with `{ allowComparingNullableBooleansToTrue: false }`:

<!--tabs-->

#### ❌ Incorrect

```ts
declare const someUndefinedCondition: boolean | undefined;
if (someUndefinedCondition === true) {
}

declare const someNullCondition: boolean | null;
if (someNullCondition !== true) {
}
```

#### ✅ Correct

```ts
declare const someUndefinedCondition: boolean | undefined;
if (someUndefinedCondition) {
}

declare const someNullCondition: boolean | null;
if (!someNullCondition) {
}
```

### `allowComparingNullableBooleansToFalse`

Examples of code for this rule with `{ allowComparingNullableBooleansToFalse: false }`:

<!--tabs-->

#### ❌ Incorrect

```ts
declare const someUndefinedCondition: boolean | undefined;
if (someUndefinedCondition === false) {
}

declare const someNullCondition: boolean | null;
if (someNullCondition !== false) {
}
```

#### ✅ Correct

```ts
declare const someUndefinedCondition: boolean | undefined;
if (someUndefinedCondition ?? true) {
}

declare const someNullCondition: boolean | null;
if (!(someNullCondition ?? true)) {
}
```

## Fixer

|            Comparison             | Fixer Output                    | Notes                                                                               |
| :-------------------------------: | ------------------------------- | ----------------------------------------------------------------------------------- |
|       `booleanVar === true`       | `booleanVar`                    |                                                                                     |
|       `booleanVar !== true`       | `!booleanVar`                   |                                                                                     |
|      `booleanVar === false`       | `!booleanVar`                   |                                                                                     |
|      `booleanVar !== false`       | `booleanVar`                    |                                                                                     |
|   `nullableBooleanVar === true`   | `nullableBooleanVar`            | Only checked/fixed if the `allowComparingNullableBooleansToTrue` option is `false`  |
|   `nullableBooleanVar !== true`   | `!nullableBooleanVar`           | Only checked/fixed if the `allowComparingNullableBooleansToTrue` option is `false`  |
| `!(nullableBooleanVar === false)` | `nullableBooleanVar ?? true`    | Only checked/fixed if the `allowComparingNullableBooleansToFalse` option is `false` |
| `!(nullableBooleanVar !== false)` | `!(nullableBooleanVar ?? true)` | Only checked/fixed if the `allowComparingNullableBooleansToFalse` option is `false` |

## Not To Use It

Do not use this rule when `strictNullChecks` is disabled.
ESLint is not able to distinguish between `false` and `undefined` or `null` values.
This can cause unintended code changes when using autofix.
