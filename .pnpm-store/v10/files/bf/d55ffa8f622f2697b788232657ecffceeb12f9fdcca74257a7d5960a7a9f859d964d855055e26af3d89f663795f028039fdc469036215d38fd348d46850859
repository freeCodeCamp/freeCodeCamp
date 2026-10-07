---
description: 'Disallow the use of variables before they are defined.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-use-before-define** for documentation.

## Examples

This rule extends the base [`eslint/no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define) rule.
It adds support for `type`, `interface` and `enum` declarations.

## Options

This rule adds the following options:

```ts
interface Options extends BaseNoUseBeforeDefineOptions {
  enums?: boolean;
  typedefs?: boolean;
  ignoreTypeReferences?: boolean;
}

const defaultOptions: Options = {
  ...baseNoUseBeforeDefineDefaultOptions,
  enums: true,
  typedefs: true,
  ignoreTypeReferences: true,
};
```

### `enums`

If this is `true`, this rule warns every reference to a enum before the enum declaration.
If this is `false`, this rule will ignore references to enums, when the reference is in a child scope.

Examples of code for the `{ "enums": true }` option:

<!--tabs-->

#### ❌ Incorrect

```ts
/*eslint no-use-before-define: ["error", { "enums": true }]*/

const x = Foo.FOO;

enum Foo {
  FOO,
}
```

#### ✅ Correct

```ts
/*eslint no-use-before-define: ["error", { "enums": false }]*/

function foo() {
  return Foo.FOO;
}

enum Foo {
  FOO,
}
```

### `typedefs`

If this is `true`, this rule warns every reference to a type before the type declaration.
If this is `false`, this rule will ignore references to types.

Examples of **correct** code for the `{ "typedefs": false }` option:

```ts
/*eslint no-use-before-define: ["error", { "typedefs": false }]*/

let myVar: StringOrNumber;
type StringOrNumber = string | number;
```

### `ignoreTypeReferences`

If this is `true`, this rule ignores all type references, such as in type annotations and assertions.
If this is `false`, this will will check all type references.

Examples of **correct** code for the `{ "ignoreTypeReferences": true }` option:

```ts
/*eslint no-use-before-define: ["error", { "ignoreTypeReferences": true }]*/

let var1: StringOrNumber;
type StringOrNumber = string | number;

let var2: Enum;
enum Enum {}
```
