---
description: 'Require all enum members to be literal values.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-literal-enum-member** for documentation.

TypeScript allows the value of an enum member to be many different kinds of valid JavaScript expressions.
However, because enums create their own scope whereby each enum member becomes a variable in that scope, developers are often surprised at the resultant values.
For example:

```ts
const imOutside = 2;
const b = 2;
enum Foo {
  outer = imOutside,
  a = 1,
  b = a,
  c = b,
  // does c == Foo.b == Foo.c == 1?
  // or does c == b == 2?
}
```

> The answer is that `Foo.c` will be `1` at runtime [[TypeScript playground](https://www.typescriptlang.org/play/#src=const%20imOutside%20%3D%202%3B%0D%0Aconst%20b%20%3D%202%3B%0D%0Aenum%20Foo%20%7B%0D%0A%20%20%20%20outer%20%3D%20imOutside%2C%0D%0A%20%20%20%20a%20%3D%201%2C%0D%0A%20%20%20%20b%20%3D%20a%2C%0D%0A%20%20%20%20c%20%3D%20b%2C%0D%0A%20%20%20%20%2F%2F%20does%20c%20%3D%3D%20Foo.b%20%3D%3D%20Foo.c%20%3D%3D%201%3F%0D%0A%20%20%20%20%2F%2F%20or%20does%20c%20%3D%3D%20b%20%3D%3D%202%3F%0D%0A%7D)].

Therefore, it's often better to prevent unexpected results in code by requiring the use of literal values as enum members.
This rule reports when an enum member is given a value that is not a literal.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
const str = 'Test';
enum Invalid {
  A = str, // Variable assignment
  B = {}, // Object assignment
  C = `A template literal string`, // Template literal
  D = new Set(1, 2, 3), // Constructor in assignment
  E = 2 + 2, // Expression assignment
}
```

### ✅ Correct

```ts
enum Valid {
  A,
  B = 'TestStr', // A regular string
  C = 4, // A number
  D = null,
  E = /some_regex/,
}
```

<!--/tabs-->

## Options

- `allowBitwiseExpressions` set to `true` will allow you to use bitwise expressions in enum initializer (Default: `false`).

Examples of code for the `{ "allowBitwiseExpressions": true }` option:

<!--tabs-->

### ❌ Incorrect

```ts
const x = 1;
enum Foo {
  A = x << 0,
  B = x >> 0,
  C = x >>> 0,
  D = x | 0,
  E = x & 0,
  F = x ^ 0,
  G = ~x,
}
```

### ✅ Correct

```ts
enum Foo {
  A = 1 << 0,
  B = 1 >> 0,
  C = 1 >>> 0,
  D = 1 | 0,
  E = 1 & 0,
  F = 1 ^ 0,
  G = ~1,
}
```

## When Not To Use It

If you want use anything other than simple literals as an enum value.
