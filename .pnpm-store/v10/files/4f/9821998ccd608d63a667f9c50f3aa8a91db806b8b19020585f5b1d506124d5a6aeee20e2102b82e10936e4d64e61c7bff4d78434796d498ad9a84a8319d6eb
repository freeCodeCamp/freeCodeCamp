---
description: 'Disallow the `any` type.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-explicit-any** for documentation.

The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
Using `any` disables many type checking rules and is generally best used only as a last resort or when prototyping code.
This rule reports on explicit uses of the `any` keyword as a type annotation.

> TypeScript's `--noImplicitAny` compiler option prevents an implied `any`, but doesn't prevent `any` from being explicitly used the way this rule does.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
const age: any = 'seventeen';
```

```ts
const ages: any[] = ['seventeen'];
```

```ts
const ages: Array<any> = ['seventeen'];
```

```ts
function greet(): any {}
```

```ts
function greet(): any[] {}
```

```ts
function greet(): Array<any> {}
```

```ts
function greet(): Array<Array<any>> {}
```

```ts
function greet(param: Array<any>): string {}
```

```ts
function greet(param: Array<any>): Array<any> {}
```

### ✅ Correct

```ts
const age: number = 17;
```

```ts
const ages: number[] = [17];
```

```ts
const ages: Array<number> = [17];
```

```ts
function greet(): string {}
```

```ts
function greet(): string[] {}
```

```ts
function greet(): Array<string> {}
```

```ts
function greet(): Array<Array<string>> {}
```

```ts
function greet(param: Array<string>): string {}
```

```ts
function greet(param: Array<string>): Array<string> {}
```

## Options

### `ignoreRestArgs`

A boolean to specify if arrays from the rest operator are considered okay. `false` by default.

Examples of **incorrect** code for the `{ "ignoreRestArgs": false }` option:

```ts
/*eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": false }]*/

function foo1(...args: any[]): void {}
function foo2(...args: readonly any[]): void {}
function foo3(...args: Array<any>): void {}
function foo4(...args: ReadonlyArray<any>): void {}

declare function bar(...args: any[]): void;

const baz = (...args: any[]) => {};
const qux = function (...args: any[]) {};

type Quux = (...args: any[]) => void;
type Quuz = new (...args: any[]) => void;

interface Grault {
  (...args: any[]): void;
}
interface Corge {
  new (...args: any[]): void;
}
interface Garply {
  f(...args: any[]): void;
}
```

Examples of **correct** code for the `{ "ignoreRestArgs": true }` option:

```ts
/*eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": true }]*/

function foo1(...args: any[]): void {}
function foo2(...args: readonly any[]): void {}
function foo3(...args: Array<any>): void {}
function foo4(...args: ReadonlyArray<any>): void {}

declare function bar(...args: any[]): void;

const baz = (...args: any[]) => {};
const qux = function (...args: any[]) {};

type Quux = (...args: any[]) => void;
type Quuz = new (...args: any[]) => void;

interface Grault {
  (...args: any[]): void;
}
interface Corge {
  new (...args: any[]): void;
}
interface Garply {
  f(...args: any[]): void;
}
```

## When Not To Use It

If an unknown type or a library without typings is used
and you want to be able to specify `any`.

## Related To

- [`no-unsafe-argument`](./no-unsafe-argument.md)
- [`no-unsafe-assignment`](./no-unsafe-assignment.md)
- [`no-unsafe-call`](./no-unsafe-call.md)
- [`no-unsafe-member-access`](./no-unsafe-member-access.md)
- [`no-unsafe-return`](./no-unsafe-return.md)

## Further Reading

- TypeScript [any type](https://www.typescriptlang.org/docs/handbook/basic-types.html#any)
