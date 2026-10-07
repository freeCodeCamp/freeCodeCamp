---
description: 'Require type annotations in certain places.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/typedef** for documentation.

TypeScript cannot always infer types for all places in code.
Some locations require type annotations for their types to be inferred.

This rule can enforce type annotations in locations regardless of whether they're required.
This is typically used to maintain consistency for element types that sometimes require them.

```ts
class ContainsText {
  // There must be a type annotation here to infer the type
  delayedText: string;

  // `typedef` requires a type annotation here to maintain consistency
  immediateTextExplicit: string = 'text';

  // This is still a string type because of its initial value
  immediateTextImplicit = 'text';
}
```

> To enforce type definitions existing on call signatures, use [`explicit-function-return-type`](./explicit-function-return-type.md), or [`explicit-module-boundary-types`](./explicit-module-boundary-types.md).

:::caution

Requiring type annotations unnecessarily can be cumbersome to maintain and generally reduces code readability.
TypeScript is often better at inferring types than easily written type annotations would allow.

**Instead of enabling `typedef`, it is generally recommended to use the `--noImplicitAny` and `--strictPropertyInitialization` compiler options to enforce type annotations only when useful.**

:::

## Options

For example, with the following configuration:

```json
{
  "rules": {
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": true,
        "variableDeclaration": true
      }
    ]
  }
}
```

- Type annotations on arrow function parameters are required
- Type annotations on variables are required

### `arrayDestructuring`

Whether to enforce type annotations on variables declared using array destructuring.

Examples of code with `{ "arrayDestructuring": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
const [a] = [1];
const [b, c] = [1, 2];
```

#### ✅ Correct

```ts
const [a]: number[] = [1];
const [b]: [number] = [2];
const [c, d]: [boolean, string] = [true, 'text'];

for (const [key, val] of new Map([['key', 1]])) {
}
```

### `arrowParameter`

Whether to enforce type annotations for parameters of arrow functions.

Examples of code with `{ "arrowParameter": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
const logsSize = size => console.log(size);

['hello', 'world'].map(text => text.length);

const mapper = {
  map: text => text + '...',
};
```

#### ✅ Correct

```ts
const logsSize = (size: number) => console.log(size);

['hello', 'world'].map((text: string) => text.length);

const mapper = {
  map: (text: string) => text + '...',
};
```

### `memberVariableDeclaration`

Whether to enforce type annotations on member variables of classes.

Examples of code with `{ "memberVariableDeclaration": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
class ContainsText {
  delayedText;
  immediateTextImplicit = 'text';
}
```

#### ✅ Correct

```ts
class ContainsText {
  delayedText: string;
  immediateTextImplicit: string = 'text';
}
```

### `objectDestructuring`

Whether to enforce type annotations on variables declared using object destructuring.

Examples of code with `{ "objectDestructuring": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
const { length } = 'text';
const [b, c] = Math.random() ? [1, 2] : [3, 4];
```

#### ✅ Correct

```ts
const { length }: { length: number } = 'text';
const [b, c]: [number, number] = Math.random() ? [1, 2] : [3, 4];

for (const { key, val } of [{ key: 'key', val: 1 }]) {
}
```

### `parameter`

Whether to enforce type annotations for parameters of functions and methods.

Examples of code with `{ "parameter": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
function logsSize(size): void {
  console.log(size);
}

const doublesSize = function (size): number {
  return size * 2;
};

const divider = {
  curriesSize(size): number {
    return size;
  },
  dividesSize: function (size): number {
    return size / 2;
  },
};

class Logger {
  log(text): boolean {
    console.log('>', text);
    return true;
  }
}
```

#### ✅ Correct

```ts
function logsSize(size: number): void {
  console.log(size);
}

const doublesSize = function (size: number): number {
  return size * 2;
};

const divider = {
  curriesSize(size: number): number {
    return size;
  },
  dividesSize: function (size: number): number {
    return size / 2;
  },
};

class Logger {
  log(text: boolean): boolean {
    console.log('>', text);
    return true;
  }
}
```

### `propertyDeclaration`

Whether to enforce type annotations for properties of interfaces and types.

Examples of code with `{ "propertyDeclaration": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
type Members = {
  member;
  otherMember;
};
```

#### ✅ Correct

```ts
type Members = {
  member: boolean;
  otherMember: string;
};
```

### `variableDeclaration`

Whether to enforce type annotations for variable declarations, excluding array and object destructuring.

Examples of code with `{ "variableDeclaration": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
const text = 'text';
let initialText = 'text';
let delayedText;
```

#### ✅ Correct

```ts
const text: string = 'text';
let initialText: string = 'text';
let delayedText: string;
```

### `variableDeclarationIgnoreFunction`

Ignore variable declarations for non-arrow and arrow functions.

Examples of code with `{ "variableDeclaration": true, "variableDeclarationIgnoreFunction": true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
const text = 'text';
```

#### ✅ Correct

```ts
const a = (): void => {};
const b = function (): void => {};
const c: () => void = (): void => {};

class Foo {
  a = (): void => {};
  b = function (): void => {};
  c = () => void = (): void => {};
}
```

## When Not To Use It

If you are using stricter TypeScript compiler options, particularly `--noImplicitAny` and/or `--strictPropertyInitialization`, you likely don't need this rule.

In general, if you do not consider the cost of writing unnecessary type annotations reasonable, then do not use this rule.

## Further Reading

- [TypeScript Type System](https://basarat.gitbooks.io/typescript/docs/types/type-system.html)
- [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
