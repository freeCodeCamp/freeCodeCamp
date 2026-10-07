---
description: 'Disallow empty functions.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-empty-function** for documentation.

## Examples

This rule extends the base [`eslint/no-empty-function`](https://eslint.org/docs/rules/no-empty-function) rule.
It adds support for handling TypeScript specific code that would otherwise trigger the rule.

One example of valid TypeScript specific code that would otherwise trigger the `no-empty-function` rule is the use of [parameter properties](https://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties) in constructor functions.

## Options

This rule adds the following options:

```ts
type AdditionalAllowOptionEntries =
  | 'private-constructors'
  | 'protected-constructors'
  | 'decoratedFunctions'
  | 'overrideMethods';

type AllowOptionEntries =
  | BaseNoEmptyFunctionAllowOptionEntries
  | AdditionalAllowOptionEntries;

interface Options extends BaseNoEmptyFunctionOptions {
  allow?: Array<AllowOptionEntries>;
}
const defaultOptions: Options = {
  ...baseNoEmptyFunctionDefaultOptions,
  allow: [],
};
```

### allow: `private-constructors`

Examples of correct code for the `{ "allow": ["private-constructors"] }` option:

```ts
class Foo {
  private constructor() {}
}
```

### allow: `protected-constructors`

Examples of correct code for the `{ "allow": ["protected-constructors"] }` option:

```ts
class Foo {
  protected constructor() {}
}
```

### allow: `decoratedFunctions`

Examples of correct code for the `{ "allow": ["decoratedFunctions"] }` option:

```ts
@decorator()
function foo() {}

class Foo {
  @decorator()
  foo() {}
}
```

### allow: `overrideMethods`

Examples of correct code for the `{ "allow": ["overrideMethods"] }` option:

```ts
abstract class Base {
  protected greet(): void {
    console.log('Hello!');
  }
}

class Foo extends Base {
  protected override greet(): void {}
}
```
