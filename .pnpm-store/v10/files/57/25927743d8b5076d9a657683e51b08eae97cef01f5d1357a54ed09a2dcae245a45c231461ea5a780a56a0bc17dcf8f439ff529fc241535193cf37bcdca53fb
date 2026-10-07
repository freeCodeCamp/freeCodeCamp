---
description: 'Disallow members of unions and intersections that do nothing or override type information.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-redundant-type-constituents** for documentation.

Some types can override some other types ("constituents") in a union or intersection and/or be overridden by some other types.
TypeScript's set theory of types includes cases where a constituent type might be useless in the parent union or intersection.

Within `|` unions:

- `any` and `unknown` "override" all other union members
- `never` is dropped from unions in any position except when in a return type position
- primitive types such as `string` "override" any of their literal types such as `""`

Within `&` intersections:

- `any` and `never` "override" all other intersection members
- `unknown` is dropped from intersections
- literal types "override" any primitive types in an intersection
- literal types such as `""` "override" any of their primitive types such as `string`

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
type UnionAny = any | 'foo';
type UnionUnknown = unknown | 'foo';
type UnionNever = never | 'foo';

type UnionBooleanLiteral = boolean | false;
type UnionNumberLiteral = number | 1;
type UnionStringLiteral = string | 'foo';

type IntersectionAny = any & 'foo';
type IntersectionUnknown = string & unknown;
type IntersectionNever = string | never;

type IntersectionBooleanLiteral = boolean & false;
type IntersectionNumberLiteral = number & 1;
type IntersectionStringLiteral = string & 'foo';
```

### ✅ Correct

```ts
type UnionAny = any;
type UnionUnknown = unknown;
type UnionNever = never;

type UnionBooleanLiteral = boolean;
type UnionNumberLiteral = number;
type UnionStringLiteral = string;

type IntersectionAny = any;
type IntersectionUnknown = string;
type IntersectionNever = string;

type IntersectionBooleanLiteral = false;
type IntersectionNumberLiteral = 1;
type IntersectionStringLiteral = 'foo';
```

## Limitations

This rule plays it safe and only works with bottom types, top types, and comparing literal types to primitive types.

## Further Reading

- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)
- [Bottom Types](https://en.wikipedia.org/wiki/Bottom_type)
- [Top Types](https://en.wikipedia.org/wiki/Top_type)
