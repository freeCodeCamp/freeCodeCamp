# import/first

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

This rule reports any imports that come after non-import
statements.

## Rule Details

```js
import foo from './foo'

// some module-level initializer
initWith(foo)

import bar from './bar' // <- reported
```

Providing `absolute-first` as an option will report any absolute imports (i.e.
packages) that come after any relative imports:

```js
import foo from 'foo'
import bar from './bar'

import * as _ from 'lodash' // <- reported
```

If you really want import type ordering, check out [`import/order`].

Notably, `import`s are hoisted, which means the imported modules will be evaluated
before any of the statements interspersed between them. Keeping all `import`s together
at the top of the file may prevent surprises resulting from this part of the spec.

### On directives

Directives are allowed as long as they occur strictly before any `import` declarations,
as follows:

```js
'use super-mega-strict'

import { suchFoo } from 'lame-fake-module-name'  // no report here
```

A directive in this case is assumed to be a single statement that contains only
a literal string-valued expression.

`'use strict'` would be a good example, except that [modules are always in strict
mode](https://262.ecma-international.org/6.0/#sec-strict-mode-code) so it would be surprising to see a `'use strict'` sharing a file with `import`s and
`export`s.

Given that, see [#255] for the reasoning.

### With Fixer

This rule contains a fixer to reorder in-body import to top, the following criteria applied:

1. Never re-order relative to each other, even if `absolute-first` is set.
2. If an import creates an identifier, and that identifier is referenced at module level *before* the import itself, that won't be re-ordered.

## When Not To Use It

If you don't mind imports being sprinkled throughout, you may not want to
enable this rule.

## Further Reading

 - [`import/order`]: a major step up from `absolute-first`
 - Issue [#255]

[`import/order`]: ./order.md
[#255]: https://github.com/import-js/eslint-plugin-import/issues/255
