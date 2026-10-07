---
description: 'Disallow certain triple slash directives in favor of ES6-style import declarations.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/triple-slash-reference** for documentation.

TypeScript's `///` triple-slash references are a way to indicate that types from another module are available in a file.
Use of triple-slash reference type directives is generally discouraged in favor of ECMAScript Module `import`s.
This rule reports on the use of `/// <reference path="..." />`, `/// <reference types="..." />`, or `/// <reference lib="..." />` directives.

## Examples

## Options

With `{ "path": "never", "types": "never", "lib": "never" }` options set, the following will all be **incorrect** usage:

```ts
/// <reference path="foo" />
/// <reference types="bar" />
/// <reference lib="baz" />
```

Examples of **incorrect** code for the `{ "types": "prefer-import" }` option. Note that these are only errors when **both** styles are used for the **same** module:

```ts
/// <reference types="foo" />
import * as foo from 'foo';
```

```ts
/// <reference types="foo" />
import foo = require('foo');
```

With `{ "path": "always", "types": "always", "lib": "always" }` options set, the following will all be **correct** usage:

```ts
/// <reference path="foo" />
/// <reference types="bar" />
/// <reference lib="baz" />
```

Examples of **correct** code for the `{ "types": "prefer-import" }` option:

```ts
import * as foo from 'foo';
```

```ts
import foo = require('foo');
```

## When To Use It

If you want to ban use of one or all of the triple slash reference directives, or any time you might use triple-slash type reference directives and ES6 import declarations in the same file.

## When Not To Use It

If you want to use all flavors of triple slash reference directives.
