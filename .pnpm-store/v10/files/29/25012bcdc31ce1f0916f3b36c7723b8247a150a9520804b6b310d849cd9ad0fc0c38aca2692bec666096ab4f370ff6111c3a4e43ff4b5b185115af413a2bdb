---
description: 'Disallow variable redeclaration.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-redeclare** for documentation.

## Examples

This rule extends the base [`eslint/no-redeclare`](https://eslint.org/docs/rules/no-redeclare) rule.
It adds support for TypeScript function overloads, and declaration merging.

## Options

This rule adds the following options:

```ts
interface Options extends BaseNoRedeclareOptions {
  ignoreDeclarationMerge?: boolean;
}

const defaultOptions: Options = {
  ...baseNoRedeclareDefaultOptions,
  ignoreDeclarationMerge: true,
};
```

### `ignoreDeclarationMerge`

When set to `true`, the rule will ignore declaration merges between the following sets:

- interface + interface
- namespace + namespace
- class + interface
- class + namespace
- class + interface + namespace
- function + namespace
- enum + namespace

Examples of **correct** code with `{ ignoreDeclarationMerge: true }`:

```ts
interface A {
  prop1: 1;
}
interface A {
  prop2: 2;
}

namespace Foo {
  export const a = 1;
}
namespace Foo {
  export const b = 2;
}

class Bar {}
namespace Bar {}

function Baz() {}
namespace Baz {}
```

**Note:** Even with this option set to true, this rule will report if you name a type and a variable the same name. **_This is intentional_**.
Declaring a variable and a type and a variable the same is usually an accident, and it can lead to hard-to-understand code.
If you have a rare case where you're intentionally naming a type the same name as a variable, use a disable comment. For example:

```ts
type something = string;
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const something = 2;
```
