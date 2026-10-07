---
description: 'Enforce `includes` method over `indexOf` method.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-includes** for documentation.

Prior to ES2015, `Array#indexOf` and `String#indexOf` comparisons against `-1` were the standard ways to check whether a value exists in an array or string, respectively.
Alternatives that are easier to read and write now exist: ES2015 added `String#includes` and ES2016 added `Array#includes`.

This rule reports when an `.indexOf` call can be replaced with an `.includes`.
Additionally, this rule reports the tests of simple regular expressions in favor of `String#includes`.

> This rule will report on any receiver object of an `indexOf` method call that has an `includes` method where the two methods have the same parameters.
> Matching types include: `String`, `Array`, `ReadonlyArray`, and typed arrays.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
const str: string;
const array: any[];
const readonlyArray: ReadonlyArray<any>;
const typedArray: UInt8Array;
const maybe: string;
const userDefined: {
  indexOf(x: any): number;
  includes(x: any): boolean;
};

str.indexOf(value) !== -1;
array.indexOf(value) !== -1;
readonlyArray.indexOf(value) === -1;
typedArray.indexOf(value) > -1;
maybe?.indexOf('') !== -1;
userDefined.indexOf(value) >= 0;

/example/.test(str);
```

### ✅ Correct

```ts
const str: string;
const array: any[];
const readonlyArray: ReadonlyArray<any>;
const typedArray: UInt8Array;
const maybe: string;
const userDefined: {
  indexOf(x: any): number;
  includes(x: any): boolean;
};

str.includes(value);
array.includes(value);
!readonlyArray.includes(value);
typedArray.includes(value);
maybe?.includes('');
userDefined.includes(value);

str.includes('example');

// The two methods have different parameters.
declare const mismatchExample: {
  indexOf(x: unknown, fromIndex?: number): number;
  includes(x: unknown): boolean;
};
mismatchExample.indexOf(value) >= 0;
```

## When Not To Use It

If you don't want to suggest `includes`, you can safely turn this rule off.
