---
description: 'Disallow specified modules when loaded by `import`.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-restricted-imports** for documentation.

## Examples

This rule extends the base [`eslint/no-restricted-imports`](https://eslint.org/docs/rules/no-restricted-imports) rule.

## Options

This rule adds the following options:

### `allowTypeImports`

(default: `false`)

You can specify this option for a specific path or pattern as follows:

```jsonc
"@typescript-eslint/no-restricted-imports": ["error", {
  "paths": [{
    "name": "import-foo",
    "message": "Please use import-bar instead.",
    "allowTypeImports": true
  }, {
    "name": "import-baz",
    "message": "Please use import-quux instead.",
    "allowTypeImports": true
  }]
}]
```

When set to `true`, the rule will allow [Type-Only Imports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export).

Examples of code with the above config:

<!--tabs-->

#### ❌ Incorrect

```ts
import foo from 'import-foo';
export { Foo } from 'import-foo';

import baz from 'import-baz';
export { Baz } from 'import-baz';
```

#### ✅ Correct

```ts
import { foo } from 'other-module';

import type foo from 'import-foo';
export type { Foo } from 'import-foo';

import type baz from 'import-baz';
export type { Baz } from 'import-baz';
```
