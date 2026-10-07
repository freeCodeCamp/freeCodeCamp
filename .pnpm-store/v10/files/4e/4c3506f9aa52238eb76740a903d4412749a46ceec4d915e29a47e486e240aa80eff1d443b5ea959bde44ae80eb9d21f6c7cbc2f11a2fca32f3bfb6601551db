---
description: 'Disallow classes used as namespaces.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-extraneous-class** for documentation.

This rule reports when a class has no non-static members, such as for a class used exclusively as a static namespace.

Users who come from a [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) paradigm may wrap their utility functions in an extra class, instead of putting them at the top level of an ECMAScript module.
Doing so is generally unnecessary in JavaScript and TypeScript projects.

- Wrapper classes add extra cognitive complexity to code without adding any structural improvements
  - Whatever would be put on them, such as utility functions, are already organized by virtue of being in a module.
  - As an alternative, you can `import * as ...` the module to get all of them in a single object.
- IDEs can't provide as good suggestions for static class or namespace imported properties when you start typing property names
- It's more difficult to statically analyze code for unused variables, etc. when they're all on the class (see: [Finding dead code (and dead types) in TypeScript](https://effectivetypescript.com/2020/10/20/tsprune)).

This rule also reports classes that have only a constructor and no fields.
Those classes can generally be replaced with a standalone function.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
class StaticConstants {
  static readonly version = 42;

  static isProduction() {
    return process.env.NODE_ENV === 'production';
  }
}

class HelloWorldLogger {
  constructor() {
    console.log('Hello, world!');
  }
}
```

### ✅ Correct

```ts
export const version = 42;

export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function logHelloWorld() {
  console.log('Hello, world!');
}
```

## Alternatives

### Individual Exports (Recommended)

Instead of using a static utility class we recommend you individually export the utilities from your module.

<!--tabs-->

#### ❌ Incorrect

```ts
export class Utilities {
  static util1() {
    return Utilities.util3();
  }

  static util2() {
    /* ... */
  }

  static util3() {
    /* ... */
  }
}
```

#### ✅ Correct

```ts
export function util1() {
  return util3();
}

export function util2() {
  /* ... */
}

export function util3() {
  /* ... */
}
```

### Namespace Imports (Not Recommended)

If you strongly prefer to have all constructs from a module available as properties of a single object, you can `import * as` the module.
This is known as a "namespace import".
Namespace imports are sometimes preferable because they keep all properties nested and don't need to be changed as you start or stop using various properties from the module.

However, namespace imports are impacted by these downsides:

- They also don't play as well with tree shaking in modern bundlers
- They require a name prefix before each property's usage

<!--tabs-->

#### ❌ Incorrect

```ts
// utilities.ts
export class Utilities {
  static sayHello() {
    console.log('Hello, world!');
  }
}

// consumers.ts
import { Utilities } from './utilities';

Utilities.sayHello();
```

#### ⚠️ Namespace Imports

```ts
// utilities.ts
export function sayHello() {
  console.log('Hello, world!');
}

// consumers.ts
import * as utilities from './utilities';

utilities.sayHello();
```

#### ✅ Standalone Imports

```ts
// utilities.ts
export function sayHello() {
  console.log('Hello, world!');
}

// consumers.ts
import { sayHello } from './utilities';

sayHello();
```

### Notes on Mutating Variables

One case you need to be careful of is exporting mutable variables.
While class properties can be mutated externally, exported variables are always constant.
This means that importers can only ever read the first value they are assigned and cannot write to the variables.

Needing to write to an exported variable is very rare and is generally considered a code smell.
If you do need it you can accomplish it using getter and setter functions:

<!--tabs-->

#### ❌ Incorrect

```ts
export class Utilities {
  static mutableCount = 1;

  static incrementCount() {
    Utilities.mutableCount += 1;
  }
}
```

#### ✅ Correct

```ts
let mutableCount = 1;

export function getMutableCount() {
  return mutableField;
}

export function incrementCount() {
  mutableField += 1;
}
```

## Options

This rule normally bans classes that are empty (have no constructor or fields).
The rule's options each add an exemption for a specific type of class.

### `allowConstructorOnly`

`allowConstructorOnly` adds an exemption for classes that have only a constructor and no fields.

<!--tabs-->

#### ❌ Incorrect

```ts
class NoFields {}
```

#### ✅ Correct

```ts
class NoFields {
  constructor() {
    console.log('Hello, world!');
  }
}
```

### `allowEmpty`

The `allowEmpty` option adds an exemption for classes that are entirely empty.

<!--tabs-->

#### ❌ Incorrect

```ts
class NoFields {
  constructor() {
    console.log('Hello, world!');
  }
}
```

#### ✅ Correct

```ts
class NoFields {}
```

### `allowStaticOnly`

The `allowStaticOnly` option adds an exemption for classes that only contain static members.

:::caution
We strongly recommend against the `allowStaticOnly` exemption.
It works against this rule's primary purpose of discouraging classes used only for static members.
:::

<!--tabs-->

#### ❌ Incorrect

```ts
class EmptyClass {}
```

#### ✅ Correct

```ts
class NotEmptyClass {
  static version = 42;
}
```

### `allowWithDecorator`

The `allowWithDecorator` option adds an exemption for classes that contain a member decorated with a `@` decorator.

<!--tabs-->

#### ❌ Incorrect

```ts
class Constants {
  static readonly version = 42;
}
```

#### ✅ Correct

```ts
class Constants {
  @logOnRead()
  static readonly version = 42;
}
```

## When Not To Use It

You can disable this rule if you are unable -or unwilling- to switch off using classes as namespaces.
