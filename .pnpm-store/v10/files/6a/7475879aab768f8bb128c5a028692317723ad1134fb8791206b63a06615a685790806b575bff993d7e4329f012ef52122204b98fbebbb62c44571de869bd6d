# import/no-duplicates

⚠️ This rule _warns_ in the following configs: ☑️ `recommended`, 🚸 `warnings`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Reports if a resolved path is imported more than once.

ESLint core has a similar rule ([`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)), but this version
is different in two key ways:

1. the paths in the source code don't have to exactly match, they just have to point to the same module on the filesystem. (i.e. `./foo` and `./foo.js`)
2. this version distinguishes Flow `type` imports from standard imports. ([#334](https://github.com/import-js/eslint-plugin-import/pull/334))

## Rule Details

Valid:

```js
import SomeDefaultClass, * as names from './mod'
// Flow `type` import from same module is fine
import type SomeType from './mod'
```

...whereas here, both `./mod` imports will be reported:

```js
import SomeDefaultClass from './mod'

// oops, some other import separated these lines
import foo from './some-other-mod'

import * as names from './mod'

// will catch this too, assuming it is the same target module
import { something } from './mod.js'
```

The motivation is that this is likely a result of two developers importing different
names from the same module at different times (and potentially largely different
locations in the file.) This rule brings both (or n-many) to attention.

### Query Strings

By default, this rule ignores query strings (i.e. paths followed by a question mark), and thus imports from `./mod?a` and `./mod?b` will be considered as duplicates. However you can use the option `considerQueryString` to handle them as different (primarily because browsers will resolve those imports differently).

Config:

```json
"import/no-duplicates": ["error", {"considerQueryString": true}]
```

And then the following code becomes valid:

```js
import minifiedMod from './mod?minify'
import noCommentsMod from './mod?comments=0'
import originalMod from './mod'
```

It will still catch duplicates when using the same module and the exact same query string:

```js
import SomeDefaultClass from './mod?minify'

// This is invalid, assuming `./mod` and `./mod.js` are the same target:
import * from './mod.js?minify'
```

### Inline Type imports

TypeScript 4.5 introduced a new [feature](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#type-on-import-names) that allows mixing of named value and type imports. In order to support fixing to an inline type import when duplicate imports are detected, `prefer-inline` can be set to true.

Config:

```json
"import/no-duplicates": ["error", {"prefer-inline": true}]
```

<!--tabs-->

❌ Invalid `["error", {"prefer-inline": true}]`

```js
import { AValue, type AType } from './mama-mia'
import type { BType } from './mama-mia'

import { CValue } from './papa-mia'
import type { CType } from './papa-mia'
```

✅ Valid with `["error", {"prefer-inline": true}]`

```js
import { AValue, type AType, type BType } from './mama-mia'

import { CValue, type CType } from './papa-mia'
```

<!--tabs-->

## When Not To Use It

If the core ESLint version is good enough (i.e. you're _not_ using Flow and you _are_ using [`import/extensions`](./extensions.md)), keep it and don't use this.

If you like to split up imports across lines or may need to import a default and a namespace,
you may not want to enable this rule.
