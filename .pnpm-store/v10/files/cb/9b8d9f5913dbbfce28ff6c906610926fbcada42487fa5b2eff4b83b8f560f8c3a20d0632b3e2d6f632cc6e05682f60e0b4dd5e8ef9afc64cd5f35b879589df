---
description: 'Disallow type aliases.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-type-alias** for documentation.

In TypeScript, type aliases serve three purposes:

- Aliasing other types so that we can refer to them using a simpler name.

```ts
// this...
type Person = {
    firstName: string,
    lastName: string,
    age: number
};

function addPerson(person : Person) { ... }

// is easier to read than this...
function addPerson(person : { firstName: string, lastName: string, age: number}) { ... }
```

- Act sort of like an interface, providing a set of methods and properties that must exist
  in the objects implementing the type.

```ts
type Person = {
    firstName: string,
    lastName: string,
    age: number,
    walk: () => void,
    talk: () => void
};

// you know person will have 3 properties and 2 methods,
// because the structure has already been defined.
var person : Person = { ... }

// so we can be sure that this will work
person.walk();
```

- Act like mapping tools between types to allow quick modifications.

```ts
type Immutable<T> = { readonly [P in keyof T]: T[P] };

type Person = {
  name: string;
  age: number;
};

type ImmutablePerson = Immutable<Person>;

var person: ImmutablePerson = { name: 'John', age: 30 };
person.name = 'Brad'; // error, readonly property
```

When aliasing, the type alias does not create a new type, it just creates a new name
to refer to the original type. So aliasing primitives and other simple types, tuples, unions
or intersections can some times be redundant.

```ts
// this doesn't make much sense
type myString = string;
```

On the other hand, using a type alias as an interface can limit your ability to:

- Reuse your code: interfaces can be extended or implemented by other types. Type aliases cannot.
- Debug your code: interfaces create a new name, so is easy to identify the base type of an object
  while debugging the application.

Finally, mapping types is an advanced technique and leaving it open can quickly become a pain point
in your application.

## Examples

This rule disallows the use of type aliases in favor of interfaces
and simplified types (primitives, tuples, unions, intersections, etc).

## Options

### `allowAliases`

This applies to primitive types and reference types.

The setting accepts the following values:

- `"always"` or `"never"` to active or deactivate the feature.
- `"in-unions"`, allows aliasing in union statements, e.g. `type Foo = string | string[];`
- `"in-intersections"`, allows aliasing in intersection statements, e.g. `type Foo = string & string[];`
- `"in-unions-and-intersections"`, allows aliasing in union and/or intersection statements.

Examples of **correct** code for the `{ "allowAliases": "always" }` options:

```ts
// primitives
type Foo = 'a';

type Foo = 'a' | 'b';

type Foo = string;

type Foo = string | string[];

type Foo = string & string[];

type Foo = `foo-${number}`;

// reference types
interface Bar {}
class Baz implements Bar {}

type Foo = Bar;

type Foo = Bar | Baz;

type Foo = Bar & Baz;
```

Examples of **incorrect** code for the `{ "allowAliases": "in-unions" }` option:

```ts
// primitives
type Foo = 'a';

type Foo = string;

type Foo = string & string[];

type Foo = `foo-${number}`;

// reference types
interface Bar {}
class Baz implements Bar {}

type Foo = Bar;

type Foo = Bar & Baz;
```

Examples of **correct** code for the `{ "allowAliases": "in-unions" }` option:

```ts
// primitives
type Foo = 'a' | 'b';

type Foo = string | string[];

type Foo = `a-${number}` | `b-${number}`;

// reference types
interface Bar {}
class Baz implements Bar {}

type Foo = Bar | Baz;
```

Examples of **incorrect** code for the `{ "allowAliases": "in-intersections" }` option:

```ts
// primitives
type Foo = 'a';

type Foo = 'a' | 'b';

type Foo = string;

type Foo = string | string[];

type Foo = `a-${number}` | `b-${number}`;

// reference types
interface Bar {}
class Baz implements Bar {}

type Foo = Bar;

type Foo = Bar | Baz;
```

Examples of **correct** code for the `{ "allowAliases": "in-intersections" }` option:

```ts
// primitives
type Foo = string & string[];

type Foo = `a-${number}` & `b-${number}`;

// reference types
interface Bar {}
class Baz implements Bar {}

type Foo = Bar & Baz;
```

Examples of **incorrect** code for the `{ "allowAliases": "in-unions-and-intersections" }` option:

```ts
// primitives
type Foo = 'a';

type Foo = string;

type Foo = `foo-${number}`;

// reference types
interface Bar {}
class Baz implements Bar {}

type Foo = Bar;
```

Examples of **correct** code for the `{ "allowAliases": "in-unions-and-intersections" }` option:

```ts
// primitives
type Foo = 'a' | 'b';

type Foo = string | string[];

type Foo = string & string[];

type Foo = `a-${number}` & `b-${number}`;

type Foo = `a-${number}` | `b-${number}`;

// reference types
interface Bar {}
class Baz implements Bar {}

type Foo = Bar | Baz;

type Foo = Bar & Baz;
```

### `allowCallbacks`

This applies to function types.

The setting accepts the following values:

- `"always"` or `"never"` to active or deactivate the feature.

Examples of **correct** code for the `{ "allowCallbacks": "always" }` option:

```ts
type Foo = () => void;

type Foo = (name: string) => string;

class Person {}

type Foo = (name: string, age: number) => string | Person;

type Foo = (name: string, age: number) => string & Person;
```

### `allowConditionalTypes`

This applies to conditional types.

Examples of **correct** code for the `{ "allowConditionalTypes": "always" }` option:

```ts
type Foo<T> = T extends number ? number : null;
```

### `allowConstructors`

This applies to constructor types.

The setting accepts the following values:

- `"always"` or `"never"` to active or deactivate the feature.

Examples of **correct** code for the `{ "allowConstructors": "always" }` option:

```ts
type Foo = new () => void;
```

### `allowLiterals`

This applies to literal types (`type Foo = { ... }`).

The setting accepts the following options:

- `"always"` or `"never"` to active or deactivate the feature.
- `"in-unions"`, allows literals in union statements, e.g. `type Foo = string | string[];`
- `"in-intersections"`, allows literals in intersection statements, e.g. `type Foo = string & string[];`
- `"in-unions-and-intersections"`, allows literals in union and/or intersection statements.

Examples of **correct** code for the `{ "allowLiterals": "always" }` options:

```ts
type Foo = {};

type Foo = {
  name: string;
  age: number;
};

type Foo = {
  name: string;
  age: number;
  walk: (miles: number) => void;
};

type Foo = { name: string } | { age: number };

type Foo = { name: string } & { age: number };
```

Examples of **incorrect** code for the `{ "allowLiterals": "in-unions" }` option:

```ts
type Foo = {};

type Foo = {
  name: string;
  age: number;
};

type Foo = {
  name: string;
  age: number;
  walk: (miles: number) => void;
};

type Foo = { name: string } & { age: number };
```

Examples of **correct** code for the `{ "allowLiterals": "in-unions" }` option:

```ts
type Foo = { name: string } | { age: number };
```

Examples of **incorrect** code for the `{ "allowLiterals": "in-intersections" }` option:

```ts
type Foo = {};

type Foo = {
  name: string;
  age: number;
};

type Foo = {
  name: string;
  age: number;
  walk: (miles: number) => void;
};

type Foo = { name: string } | { age: number };
```

Examples of **correct** code for the `{ "allowLiterals": "in-intersections" }` option:

```ts
type Foo = { name: string } & { age: number };
```

Examples of **incorrect** code for the `{ "allowLiterals": "in-unions-and-intersections" }` option:

```ts
type Foo = {};

type Foo = {
  name: string;
  age: number;
};

type Foo = {
  name: string;
  age: number;
  walk: (miles: number) => void;
};
```

Examples of **correct** code for the `{ "allowLiterals": "in-unions-and-intersections" }` option:

```ts
type Foo = { name: string } | { age: number };

type Foo = { name: string } & { age: number };
```

### `allowMappedTypes`

This applies to literal types.

The setting accepts the following values:

- `"always"` or `"never"` to active or deactivate the feature.
- `"in-unions"`, allows aliasing in union statements, e.g. `type Foo = string | string[];`
- `"in-intersections"`, allows aliasing in intersection statements, e.g. `type Foo = string & string[];`
- `"in-unions-and-intersections"`, allows aliasing in union and/or intersection statements.

Examples of **correct** code for the `{ "allowMappedTypes": "always" }` options:

```ts
type Foo<T> = { readonly [P in keyof T]: T[P] };

type Foo<T> = { [P in keyof T]?: T[P] };

type Foo<T, U> =
  | { readonly [P in keyof T]: T[P] }
  | { readonly [P in keyof U]: U[P] };

type Foo<T, U> = { [P in keyof T]?: T[P] } | { [P in keyof U]?: U[P] };

type Foo<T, U> = { readonly [P in keyof T]: T[P] } & {
  readonly [P in keyof U]: U[P];
};

type Foo<T, U> = { [P in keyof T]?: T[P] } & { [P in keyof U]?: U[P] };
```

Examples of **incorrect** code for the `{ "allowMappedTypes": "in-unions" }` option:

```ts
type Foo<T> = { readonly [P in keyof T]: T[P] };

type Foo<T> = { [P in keyof T]?: T[P] };

type Foo<T, U> = { readonly [P in keyof T]: T[P] } & {
  readonly [P in keyof U]: U[P];
};

type Foo<T, U> = { [P in keyof T]?: T[P] } & { [P in keyof U]?: U[P] };
```

Examples of **correct** code for the `{ "allowMappedTypes": "in-unions" }` option:

```ts
type Foo<T, U> =
  | { readonly [P in keyof T]: T[P] }
  | { readonly [P in keyof U]: U[P] };

type Foo<T, U> = { [P in keyof T]?: T[P] } | { [P in keyof U]?: U[P] };
```

Examples of **incorrect** code for the `{ "allowMappedTypes": "in-intersections" }` option:

```ts
type Foo<T> = { readonly [P in keyof T]: T[P] };

type Foo<T> = { [P in keyof T]?: T[P] };

type Foo<T, U> =
  | { readonly [P in keyof T]: T[P] }
  | { readonly [P in keyof U]: U[P] };

type Foo<T, U> = { [P in keyof T]?: T[P] } | { [P in keyof U]?: U[P] };
```

Examples of **correct** code for the `{ "allowMappedTypes": "in-intersections" }` option:

```ts
type Foo<T, U> = { readonly [P in keyof T]: T[P] } & {
  readonly [P in keyof U]: U[P];
};

type Foo<T, U> = { [P in keyof T]?: T[P] } & { [P in keyof U]?: U[P] };
```

Examples of **incorrect** code for the `{ "allowMappedTypes": "in-unions-and-intersections" }` option:

```ts
type Foo<T> = { readonly [P in keyof T]: T[P] };

type Foo<T> = { [P in keyof T]?: T[P] };
```

Examples of **correct** code for the `{ "allowMappedTypes": "in-unions-and-intersections" }` option:

```ts
type Foo<T, U> =
  | { readonly [P in keyof T]: T[P] }
  | { readonly [P in keyof U]: U[P] };

type Foo<T, U> = { [P in keyof T]?: T[P] } | { [P in keyof U]?: U[P] };

type Foo<T, U> = { readonly [P in keyof T]: T[P] } & {
  readonly [P in keyof U]: U[P];
};

type Foo<T, U> = { [P in keyof T]?: T[P] } & { [P in keyof U]?: U[P] };
```

### `allowTupleTypes`

This applies to tuple types (`type Foo = [number]`).

The setting accepts the following options:

- `"always"` or `"never"` to active or deactivate the feature.
- `"in-unions"`, allows tuples in union statements, e.g. `type Foo = [string] | [string, string];`
- `"in-intersections"`, allows tuples in intersection statements, e.g. `type Foo = [string] & [string, string];`
- `"in-unions-and-intersections"`, allows tuples in union and/or intersection statements.

Examples of **correct** code for the `{ "allowTupleTypes": "always" }` options:

```ts
type Foo = [number];

type Foo = [number] | [number, number];

type Foo = [number] & [number, number];

type Foo = [number] | ([number, number] & [string, string]);
```

Examples of **incorrect** code for the `{ "allowTupleTypes": "in-unions" }` option:

```ts
type Foo = [number];

type Foo = [number] & [number, number];

type Foo = [string] & [number];
```

Examples of **correct** code for the `{ "allowTupleTypes": "in-unions" }` option:

```ts
type Foo = [number] | [number, number];

type Foo = [string] | [number];
```

Examples of **incorrect** code for the `{ "allowTupleTypes": "in-intersections" }` option:

```ts
type Foo = [number];

type Foo = [number] | [number, number];

type Foo = [string] | [number];
```

Examples of **correct** code for the `{ "allowTupleTypes": "in-intersections" }` option:

```ts
type Foo = [number] & [number, number];

type Foo = [string] & [number];
```

Examples of **incorrect** code for the `{ "allowTupleTypes": "in-unions-and-intersections" }` option:

```ts
type Foo = [number];

type Foo = [string];
```

Examples of **correct** code for the `{ "allowLiterals": "in-unions-and-intersections" }` option:

```ts
type Foo = [number] & [number, number];

type Foo = [string] | [number];
```

### `allowGenerics`

This applies to generic types, including TypeScript provided global utility types (`type Foo = Record<string, number>`).

The setting accepts the following options:

- `"always"` or `"never"` to active or deactivate the feature.

Examples of **correct** code for the `{ "allowGenerics": "always" }` options:

```ts
type Foo = Bar<string>;

type Foo = Record<string, number>;

type Foo = Readonly<Bar>;

type Foo = Partial<Bar>;

type Foo = Omit<Bar, 'a' | 'b'>;
```

## When Not To Use It

When you can't express some shape with an interface or you need to use a union, tuple type,
callback, etc. that would cause the code to be unreadable or impractical.

## Further Reading

- [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
