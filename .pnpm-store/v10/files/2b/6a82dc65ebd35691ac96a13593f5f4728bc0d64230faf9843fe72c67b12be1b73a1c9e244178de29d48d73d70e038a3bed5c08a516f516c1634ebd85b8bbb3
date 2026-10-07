---
description: 'Disallow the use of parameter properties in class constructors.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-parameter-properties** for documentation.

:::danger Deprecated

This rule has been deprecated in favour of the equivalent, better named [`parameter-properties`](./parameter-properties.md) rule.
:::

Parameter properties can be confusing to those new to TypeScript as they are less explicit than other ways
of declaring and initializing class members.

## Examples

This rule disallows the use of parameter properties in constructors, forcing the user to explicitly
declare all properties in the class.

## Options

This rule, in its default state, does not require any argument and would completely disallow the use of parameter properties.
If you would like to allow certain types of parameter properties then you may pass an object with the following options:

- `allows`, an array containing one or more of the allowed modifiers. Valid values are:
  - `readonly`, allows **readonly** parameter properties.
  - `private`, allows **private** parameter properties.
  - `protected`, allows **protected** parameter properties.
  - `public`, allows **public** parameter properties.
  - `private readonly`, allows **private readonly** parameter properties.
  - `protected readonly`, allows **protected readonly** parameter properties.
  - `public readonly`, allows **public readonly** parameter properties.

### default

Examples of code for this rule with no options at all:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}
```

### readonly

Examples of code for the `{ "allows": ["readonly"] }` options:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(readonly name: string) {}
}
```

### private

Examples of code for the `{ "allows": ["private"] }` options:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(private name: string) {}
}
```

### protected

Examples of code for the `{ "allows": ["protected"] }` options:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}
```

### public

Examples of code for the `{ "allows": ["public"] }` options:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(public name: string) {}
}
```

### private readonly

Examples of code for the `{ "allows": ["private readonly"] }` options:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}
```

### protected readonly

Examples of code for the `{ "allows": ["protected readonly"] }` options:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}
```

### public readonly

Examples of code for the `{ "allows": ["public readonly"] }` options:

<!--tabs-->

#### ❌ Incorrect

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}
```

#### ✅ Correct

```ts
class Foo {
  constructor(name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

## When Not To Use It

If you don't care about the using parameter properties in constructors, then you will not need this rule.
