# import/order

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Enforce a convention in the order of `require()` / `import` statements.

With the [`groups`][18] option set to `["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]` the order is as shown in the following example:

```ts
// 1. node "builtin" modules
import fs from 'fs';
import path from 'path';
// 2. "external" modules
import _ from 'lodash';
import chalk from 'chalk';
// 3. "internal" modules
// (if you have configured your path or webpack to handle your internal paths differently)
import foo from 'src/foo';
// 4. modules from a "parent" directory
import foo from '../foo';
import qux from '../../foo/qux';
// 5. "sibling" modules from the same or a sibling's directory
import bar from './bar';
import baz from './bar/baz';
// 6. "index" of the current directory
import main from './';
// 7. "object"-imports (only available in TypeScript)
import log = console.log;
// 8. "type" imports (only available in Flow and TypeScript)
import type { Foo } from 'foo';
```

See [here][3] for further details on how imports are grouped.

## Fail

```ts
import _ from 'lodash';
import path from 'path'; // `path` import should occur before import of `lodash`

// -----

var _ = require('lodash');
var path = require('path'); // `path` import should occur before import of `lodash`

// -----

var path = require('path');
import foo from './foo'; // `import` statements must be before `require` statement
```

## Pass

```ts
import path from 'path';
import _ from 'lodash';

// -----

var path = require('path');
var _ = require('lodash');

// -----

// Allowed as ̀`babel-register` is not assigned.
require('babel-register');
var path = require('path');

// -----

// Allowed as `import` must be before `require`
import foo from './foo';
var path = require('path');
```

## Limitations of `--fix`

Unbound imports are assumed to have side effects, and will never be moved/reordered. This can cause other imports to get "stuck" around them, and the fix to fail.

```javascript
import b from 'b'
import 'format.css';  // This will prevent --fix from working.
import a from 'a'
```

As a workaround, move unbound imports to be entirely above or below bound ones.

```javascript
import 'format1.css';  // OK
import b from 'b'
import a from 'a'
import 'format2.css';  // OK
```

## Options

This rule supports the following options (none of which are required):

 - [`groups`][18]
 - [`pathGroups`][8]
 - [`pathGroupsExcludedImportTypes`][9]
 - [`distinctGroup`][32]
 - [`newlines-between`][20]
 - [`alphabetize`][30]
 - [`named`][33]
 - [`warnOnUnassignedImports`][5]
 - [`sortTypesGroup`][7]
 - [`newlines-between-types`][27]
 - [`consolidateIslands`][25]

---

### `groups`

Valid values: `("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")[]` \
Default: `["builtin", "external", "parent", "sibling", "index"]`

Determines which imports are subject to ordering, and how to order
them. The predefined groups are: `"builtin"`, `"external"`, `"internal"`,
`"unknown"`, `"parent"`, `"sibling"`, `"index"`, `"object"`, and `"type"`.

The import order enforced by this rule is the same as the order of each group
in `groups`. Imports belonging to groups omitted from `groups` are lumped
together at the end.

#### Example

```jsonc
{
  "import/order": ["error", {
    "groups": [
      // Imports of builtins are first
      "builtin",
      // Then sibling and parent imports. They can be mingled together
      ["sibling", "parent"],
      // Then index file imports
      "index",
      // Then any arcane TypeScript imports
      "object",
      // Then the omitted imports: internal, external, type, unknown
    ],
  }],
}
```

#### How Imports Are Grouped

An import (a `ImportDeclaration`, `TSImportEqualsDeclaration`, or `require()` `CallExpression`) is grouped by its type (`"require"` vs `"import"`), its [specifier][4], and any corresponding identifiers.

```ts
import { identifier1, identifier2 } from 'specifier1';
import type { MyType } from 'specifier2';
const identifier3 = require('specifier3');
```

Roughly speaking, the grouping algorithm is as follows:

1. If the import has no corresponding identifiers (e.g. `import './my/thing.js'`), is otherwise "unassigned," or is an unsupported use of `require()`, and [`warnOnUnassignedImports`][5] is disabled, it will be ignored entirely since the order of these imports may be important for their [side-effects][31]
2. If the import is part of an arcane TypeScript declaration (e.g. `import log = console.log`), it will be considered **object**. However, note that external module references (e.g. `import x = require('z')`) are treated as normal `require()`s and import-exports (e.g. `export import w = y;`) are ignored entirely
3. If the import is [type-only][6], `"type"` is in `groups`, and [`sortTypesGroup`][7] is disabled, it will be considered **type** (with additional implications if using [`pathGroups`][8] and `"type"` is in [`pathGroupsExcludedImportTypes`][9])
4. If the import's specifier matches [`import/internal-regex`][28], it will be considered **internal**
5. If the import's specifier is an absolute path, it will be considered **unknown**
6. If the import's specifier has the name of a Node.js core module (using [is-core-module][10]), it will be considered **builtin**
7. If the import's specifier matches [`import/core-modules`][11], it will be considered **builtin**
8. If the import's specifier is a path relative to the parent directory of its containing file (e.g. starts with `../`), it will be considered **parent**
9. If the import's specifier is one of `['.', './', './index', './index.js']`, it will be considered **index**
10. If the import's specifier is a path relative to its containing file (e.g. starts with `./`), it will be considered **sibling**
11. If the import's specifier is a path pointing to a file outside the current package's root directory (determined using [package-up][12]), it will be considered **external**
12. If the import's specifier matches [`import/external-module-folders`][29] (defaults to matching anything pointing to files within the current package's `node_modules` directory), it will be considered **external**
13. If the import's specifier is a path pointing to a file within the current package's root directory (determined using [package-up][12]), it will be considered **internal**
14. If the import's specifier has a name that looks like a scoped package (e.g. `@scoped/package-name`), it will be considered **external**
15. If the import's specifier has a name that starts with a word character, it will be considered **external**
16. If this point is reached, the import will be ignored entirely

At the end of the process, if they co-exist in the same file, all top-level `require()` statements that haven't been ignored are shifted (with respect to their order) below any ES6 `import` or similar declarations. Finally, any type-only declarations are potentially reorganized according to [`sortTypesGroup`][7].

### `pathGroups`

Valid values: `PathGroup[]` \
Default: `[]`

Sometimes [the predefined groups][18] are not fine-grained enough, especially when using import aliases.
`pathGroups` defines one or more [`PathGroup`][13]s relative to a predefined group.
Imports are associated with a [`PathGroup`][13] based on path matching against the import specifier (using [minimatch][14]).

> [!IMPORTANT]
>
> Note that, by default, imports grouped as `"builtin"`, `"external"`, or `"object"` will not be considered for further `pathGroups` matching unless they are removed from [`pathGroupsExcludedImportTypes`][9].

#### `PathGroup`

|     property     | required |          type          | description                                                                                                                     |
| :--------------: | :------: | :--------------------: | ------------------------------------------------------------------------------------------------------------------------------- |
|     `pattern`    |    ☑️    |        `string`        | [Minimatch pattern][16] for specifier matching                                                                                  |
| `patternOptions` |          |        `object`        | [Minimatch options][17]; default: `{nocomment: true}`                                                                           |
|      `group`     |    ☑️    | [predefined group][18] | One of the [predefined groups][18] to which matching imports will be positioned relatively                                      |
|    `position`    |          |  `"after" \| "before"` | Where, in relation to `group`, matching imports will be positioned; default: same position as `group` (neither before or after) |

#### Example

```jsonc
{
  "import/order": ["error", {
    "pathGroups": [
      {
        // Minimatch pattern used to match against specifiers
        "pattern": "~/**",
        // The predefined group this PathGroup is defined in relation to
        "group": "external",
        // How matching imports will be positioned relative to "group"
        "position": "after"
      }
    ]
  }]
}
```

### `pathGroupsExcludedImportTypes`

Valid values: `("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")[]` \
Default: `["builtin", "external", "object"]`

By default, imports in certain [groups][18] are excluded from being matched against [`pathGroups`][8] to prevent overeager sorting.
Use `pathGroupsExcludedImportTypes` to modify which groups are excluded.

> [!TIP]
>
> If using imports with custom specifier aliases (e.g.
> you're using `eslint-import-resolver-alias`, `paths` in `tsconfig.json`, etc) that [end up
> grouped][3] as `"builtin"` or `"external"` imports,
> remove them from  `pathGroupsExcludedImportTypes` to ensure they are ordered
> correctly.

#### Example

```jsonc
{
  "import/order": ["error", {
    "pathGroups": [
      {
        "pattern": "@app/**",
        "group": "external",
        "position": "after"
      }
    ],
    "pathGroupsExcludedImportTypes": ["builtin"]
  }]
}
```

### `distinctGroup`

Valid values: `boolean` \
Default: `true`

> [!CAUTION]
>
> Currently, `distinctGroup` defaults to `true`. However, in a later update, the
> default will change to `false`.

This changes how [`PathGroup.position`][13] affects grouping, and is most useful when [`newlines-between`][20] is set to `always` and at least one [`PathGroup`][13] has a `position` property set.

When [`newlines-between`][20] is set to `always` and an import matching a specific [`PathGroup.pattern`][13] is encountered, that import is added to a sort of "sub-group" associated with that [`PathGroup`][13]. Thanks to [`newlines-between`][20], imports in this "sub-group" will have a new line separating them from the rest of the imports in [`PathGroup.group`][13].

This behavior can be undesirable when using [`PathGroup.position`][13] to order imports _within_ [`PathGroup.group`][13] instead of creating a distinct "sub-group". Set `distinctGroup` to `false` to disable the creation of these "sub-groups".

#### Example

```jsonc
{
  "import/order": ["error", {
    "distinctGroup": false,
    "newlines-between": "always",
    "pathGroups": [
      {
        "pattern": "@app/**",
        "group": "external",
        "position": "after"
      }
    ]
  }]
}
```

### `newlines-between`

Valid values: `"ignore" | "always" | "always-and-inside-groups" | "never"` \
Default: `"ignore"`

Enforces or forbids new lines between import groups.

 - If set to `ignore`, no errors related to new lines between import groups will be reported

 - If set to `always`, at least one new line between each group will be enforced, and new lines inside a group will be forbidden

  > [!TIP]
  >
  > To prevent multiple lines between imports, the [`no-multiple-empty-lines` rule][21], or a tool like [Prettier][22], can be used.

 - If set to `always-and-inside-groups`, it will act like `always` except new lines are allowed inside import groups

 - If set to `never`, no new lines are allowed in the entire import section

#### Example

With the default [`groups`][18] setting, the following will fail the rule check:

```ts
/* eslint import/order: ["error", {"newlines-between": "always"}] */
import fs from 'fs';
import path from 'path';
import sibling from './foo';
import index from './';
```

```ts
/* eslint import/order: ["error", {"newlines-between": "always-and-inside-groups"}] */
import fs from 'fs';

import path from 'path';
import sibling from './foo';
import index from './';
```

```ts
/* eslint import/order: ["error", {"newlines-between": "never"}] */
import fs from 'fs';
import path from 'path';

import sibling from './foo';

import index from './';
```

While this will pass:

```ts
/* eslint import/order: ["error", {"newlines-between": "always"}] */
import fs from 'fs';
import path from 'path';

import sibling from './foo';

import index from './';
```

```ts
/* eslint import/order: ["error", {"newlines-between": "always-and-inside-groups"}] */
import fs from 'fs';

import path from 'path';

import sibling from './foo';

import index from './';
```

```ts
/* eslint import/order: ["error", {"newlines-between": "never"}] */
import fs from 'fs';
import path from 'path';
import sibling from './foo';
import index from './';
```

### `alphabetize`

Valid values: `{ order?: "asc" | "desc" | "ignore", orderImportKind?: "asc" | "desc" | "ignore", caseInsensitive?: boolean }` \
Default: `{ order: "ignore", orderImportKind: "ignore", caseInsensitive: false }`

Determine the sort order of imports within each [predefined group][18] or [`PathGroup`][8] alphabetically based on specifier.

> [!NOTE]
>
> Imports will be alphabetized based on their _specifiers_, not by their
> identifiers. For example, `const a = require('z');` will come _after_ `const z = require('a');` when `alphabetize` is set to `{ order: "asc" }`.

Valid properties and their values include:

 - **`order`**: use `"asc"` to sort in ascending order, `"desc"` to sort in descending order, or "ignore" to prevent sorting

 - **`orderImportKind`**: use `"asc"` to sort various _import kinds_, e.g. [type-only and typeof imports][6], in ascending order, `"desc"` to sort them in descending order, or "ignore" to prevent sorting

 - **`caseInsensitive`**: use `true` to ignore case and `false` to consider case when sorting

#### Example

Given the following settings:

```jsonc
{
  "import/order": ["error", {
    "alphabetize": {
      "order": "asc",
      "caseInsensitive": true
    }
  }]
}
```

This will fail the rule check:

```ts
import React, { PureComponent } from 'react';
import aTypes from 'prop-types';
import { compose, apply } from 'xcompose';
import * as classnames from 'classnames';
import blist from 'BList';
```

While this will pass:

```ts
import blist from 'BList';
import * as classnames from 'classnames';
import aTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { compose, apply } from 'xcompose';
```

### `named`

Valid values: `boolean | { enabled: boolean, import?: boolean, export?: boolean, require?: boolean, cjsExports?: boolean, types?: "mixed" | "types-first" | "types-last" }` \
Default: `false`

Enforce ordering of names within imports and exports.

If set to `true` or `{ enabled: true }`, _all_ named imports must be ordered according to [`alphabetize`][30].
If set to `false` or `{ enabled: false }`, named imports can occur in any order.

If set to `{ enabled: true, ... }`, and any of the properties `import`, `export`, `require`, or `cjsExports` are set to `false`, named ordering is disabled with respect to the following kind of expressions:

 - `import`:

  ```ts
  import { Readline } from "readline";
  ```

 - `export`:

  ```ts
  export { Readline };
  // and
  export { Readline } from "readline";
  ```

 - `require`:

  ```ts
  const { Readline } = require("readline");
  ```

 - `cjsExports`:

  ```ts
  module.exports.Readline = Readline;
  // and
  module.exports = { Readline };
  ```

Further, the `named.types` option allows you to specify the order of [import identifiers with inline type qualifiers][23] (or "type-only" identifiers/names), e.g. `import { type TypeIdentifier1, normalIdentifier2 } from 'specifier';`.

`named.types` accepts the following values:

 - `types-first`: forces type-only identifiers to occur first
 - `types-last`: forces type-only identifiers to occur last
 - `mixed`: sorts all identifiers in alphabetical order

#### Example

Given the following settings:

```jsonc
{
  "import/order": ["error", {
    "named": true,
    "alphabetize": {
      "order": "asc"
    }
  }]
}
```

This will fail the rule check:

```ts
import { compose, apply } from 'xcompose';
```

While this will pass:

```ts
import { apply, compose } from 'xcompose';
```

### `warnOnUnassignedImports`

Valid values: `boolean` \
Default: `false`

Warn when "unassigned" imports are out of order.
Unassigned imports are imports with no corresponding identifiers (e.g. `import './my/thing.js'` or `require('./side-effects.js')`).

> [!NOTE]
>
> These warnings are not fixable with `--fix` since unassigned imports might be used for their [side-effects][31],
> and changing the order of such imports cannot be done safely.

#### Example

Given the following settings:

```jsonc
{
  "import/order": ["error", {
    "warnOnUnassignedImports": true
  }]
}
```

This will fail the rule check:

```ts
import fs from 'fs';
import './styles.css';
import path from 'path';
```

While this will pass:

```ts
import fs from 'fs';
import path from 'path';
import './styles.css';
```

### `sortTypesGroup`

Valid values: `boolean` \
Default: `false`

> [!NOTE]
>
> This setting is only meaningful when `"type"` is included in [`groups`][18].

Sort [type-only imports][6] separately from normal non-type imports.

When enabled, the intragroup sort order of [type-only imports][6] will mirror the intergroup ordering of normal imports as defined by [`groups`][18], [`pathGroups`][8], etc.

#### Example

Given the following settings:

```jsonc
{
  "import/order": ["error", {
    "groups": ["type", "builtin", "parent", "sibling", "index"],
    "alphabetize": { "order": "asc" }
  }]
}
```

This will fail the rule check even though it's logically ordered as we expect (builtins come before parents, parents come before siblings, siblings come before indices), the only difference is we separated type-only imports from normal imports:

```ts
import type A from "fs";
import type B from "path";
import type C from "../foo.js";
import type D from "./bar.js";
import type E from './';

import a from "fs";
import b from "path";
import c from "../foo.js";
import d from "./bar.js";
import e from "./";
```

This happens because [type-only imports][6] are considered part of one global
[`"type"` group](#how-imports-are-grouped) by default. However, if we set
`sortTypesGroup` to `true`:

```jsonc
{
  "import/order": ["error", {
    "groups": ["type", "builtin", "parent", "sibling", "index"],
    "alphabetize": { "order": "asc" },
    "sortTypesGroup": true
  }]
}
```

The same example will pass.

### `newlines-between-types`

Valid values: `"ignore" | "always" | "always-and-inside-groups" | "never"` \
Default: the value of [`newlines-between`][20]

> [!NOTE]
>
> This setting is only meaningful when [`sortTypesGroup`][7] is enabled.

`newlines-between-types` is functionally identical to [`newlines-between`][20] except it only enforces or forbids new lines between _[type-only][6] import groups_, which exist only when [`sortTypesGroup`][7] is enabled.

In addition, when determining if a new line is enforceable or forbidden between the type-only imports and the normal imports, `newlines-between-types` takes precedence over [`newlines-between`][20].

#### Example

Given the following settings:

```jsonc
{
  "import/order": ["error", {
    "groups": ["type", "builtin", "parent", "sibling", "index"],
    "sortTypesGroup": true,
    "newlines-between": "always"
  }]
}
```

This will fail the rule check:

```ts
import type A from "fs";
import type B from "path";
import type C from "../foo.js";
import type D from "./bar.js";
import type E from './';

import a from "fs";
import b from "path";

import c from "../foo.js";

import d from "./bar.js";

import e from "./";
```

However, if we set `newlines-between-types` to `"ignore"`:

```jsonc
{
  "import/order": ["error", {
    "groups": ["type", "builtin", "parent", "sibling", "index"],
    "sortTypesGroup": true,
    "newlines-between": "always",
    "newlines-between-types": "ignore"
  }]
}
```

The same example will pass.

Note the new line after `import type E from './';` but before `import a from "fs";`. This new line separates the type-only imports from the normal imports. Its existence is governed by [`newlines-between-types`][27] and _not `newlines-between`_.

> [!IMPORTANT]
>
> In certain situations, [`consolidateIslands: true`][25] will take precedence over `newlines-between-types: "never"`, if used, when it comes to the new line separating type-only imports from normal imports.

The next example will pass even though there's a new line preceding the normal import and [`newlines-between`][20] is set to `"never"`:

```jsonc
{
  "import/order": ["error", {
    "groups": ["type", "builtin", "parent", "sibling", "index"],
    "sortTypesGroup": true,
    "newlines-between": "never",
    "newlines-between-types": "always"
  }]
}
```

```ts
import type A from "fs";

import type B from "path";

import type C from "../foo.js";

import type D from "./bar.js";

import type E from './';

import a from "fs";
import b from "path";
import c from "../foo.js";
import d from "./bar.js";
import e from "./";
```

While the following fails due to the new line between the last type import and the first normal import:

```jsonc
{
  "import/order": ["error", {
    "groups": ["type", "builtin", "parent", "sibling", "index"],
    "sortTypesGroup": true,
    "newlines-between": "always",
    "newlines-between-types": "never"
  }]
}
```

```ts
import type A from "fs";
import type B from "path";
import type C from "../foo.js";
import type D from "./bar.js";
import type E from './';

import a from "fs";

import b from "path";

import c from "../foo.js";

import d from "./bar.js";

import e from "./";
```

### `consolidateIslands`

Valid values: `"inside-groups" | "never"` \
Default: `"never"`

> [!NOTE]
>
> This setting is only meaningful when [`newlines-between`][20] and/or [`newlines-between-types`][27] is set to `"always-and-inside-groups"`.

When set to `"inside-groups"`, this ensures imports spanning multiple lines are separated from other imports with a new line while single-line imports are grouped together (and the space between them consolidated) if they belong to the same [group][18] or [`pathGroups`][8].

> [!IMPORTANT]
>
> When all of the following are true:
>
>  - [`sortTypesGroup`][7] is set to `true`
>  - `consolidateIslands` is set to `"inside-groups"`
>  - [`newlines-between`][20] is set to `"always-and-inside-groups"` when [`newlines-between-types`][27] is set to `"never"` (or vice-versa)
>
> Then [`newlines-between`][20]/[`newlines-between-types`][27] will yield to
> `consolidateIslands` and allow new lines to separate multi-line imports
> regardless of the `"never"` setting.
>
> This configuration is useful, for instance, to keep single-line type-only
> imports stacked tightly together at the bottom of your import block to
> preserve space while still logically organizing normal imports for quick and
> pleasant reference.

#### Example

Given the following settings:

```jsonc
{
  "import/order": ["error", {
    "newlines-between": "always-and-inside-groups",
    "consolidateIslands": "inside-groups"
  }]
}
```

This will fail the rule check:

```ts
var fs = require('fs');
var path = require('path');
var { util1, util2, util3 } = require('util');
var async = require('async');
var relParent1 = require('../foo');
var {
  relParent21,
  relParent22,
  relParent23,
  relParent24,
} = require('../');
var relParent3 = require('../bar');
var { sibling1,
  sibling2, sibling3 } = require('./foo');
var sibling2 = require('./bar');
var sibling3 = require('./foobar');
```

While this will succeed (and is what `--fix` would yield):

```ts
var fs = require('fs');
var path = require('path');
var { util1, util2, util3 } = require('util');

var async = require('async');

var relParent1 = require('../foo');

var {
  relParent21,
  relParent22,
  relParent23,
  relParent24,
} = require('../');

var relParent3 = require('../bar');

var { sibling1,
  sibling2, sibling3 } = require('./foo');

var sibling2 = require('./bar');
var sibling3 = require('./foobar');
```

Note the intragroup "islands" of grouped single-line imports, as well as multi-line imports, are surrounded by new lines. At the same time, note the typical new lines separating different groups are still maintained thanks to [`newlines-between`][20].

The same holds true for the next example; when given the following settings:

```jsonc
{
  "import/order": ["error", {
    "alphabetize": { "order": "asc" },
    "groups": ["external", "internal", "index", "type"],
    "pathGroups": [
      {
        "pattern": "dirA/**",
        "group": "internal",
        "position": "after"
      },
      {
        "pattern": "dirB/**",
        "group": "internal",
        "position": "before"
      },
      {
        "pattern": "dirC/**",
        "group": "internal"
      }
    ],
    "newlines-between": "always-and-inside-groups",
    "newlines-between-types": "never",
    "pathGroupsExcludedImportTypes": [],
    "sortTypesGroup": true,
    "consolidateIslands": "inside-groups"
  }]
}
```

> [!IMPORTANT]
>
> **Pay special attention to the value of [`pathGroupsExcludedImportTypes`][9]** in this example's settings.
> Without it, the successful example below would fail.
> This is because the imports with specifiers starting with "dirA/", "dirB/", and "dirC/" are all [considered part of the `"external"` group](#how-imports-are-grouped), and imports in that group are excluded from [`pathGroups`][8] matching by default.
>
> The fix is to remove `"external"` (and, in this example, the others) from [`pathGroupsExcludedImportTypes`][9].

This will fail the rule check:

```ts
import c from 'Bar';
import d from 'bar';
import {
  aa,
  bb,
  cc,
  dd,
  ee,
  ff,
  gg
} from 'baz';
import {
  hh,
  ii,
  jj,
  kk,
  ll,
  mm,
  nn
} from 'fizz';
import a from 'foo';
import b from 'dirA/bar';
import index from './';
import type { AA,
  BB, CC } from 'abc';
import type { Z } from 'fizz';
import type {
  A,
  B
} from 'foo';
import type { C2 } from 'dirB/Bar';
import type {
  D2,
  X2,
  Y2
} from 'dirB/bar';
import type { E2 } from 'dirB/baz';
import type { C3 } from 'dirC/Bar';
import type {
  D3,
  X3,
  Y3
} from 'dirC/bar';
import type { E3 } from 'dirC/baz';
import type { F3 } from 'dirC/caz';
import type { C1 } from 'dirA/Bar';
import type {
  D1,
  X1,
  Y1
} from 'dirA/bar';
import type { E1 } from 'dirA/baz';
import type { F } from './index.js';
import type { G } from './aaa.js';
import type { H } from './bbb';
```

While this will succeed (and is what `--fix` would yield):

```ts
import c from 'Bar';
import d from 'bar';

import {
  aa,
  bb,
  cc,
  dd,
  ee,
  ff,
  gg
} from 'baz';

import {
  hh,
  ii,
  jj,
  kk,
  ll,
  mm,
  nn
} from 'fizz';

import a from 'foo';

import b from 'dirA/bar';

import index from './';

import type { AA,
  BB, CC } from 'abc';

import type { Z } from 'fizz';

import type {
  A,
  B
} from 'foo';

import type { C2 } from 'dirB/Bar';

import type {
  D2,
  X2,
  Y2
} from 'dirB/bar';

import type { E2 } from 'dirB/baz';
import type { C3 } from 'dirC/Bar';

import type {
  D3,
  X3,
  Y3
} from 'dirC/bar';

import type { E3 } from 'dirC/baz';
import type { F3 } from 'dirC/caz';
import type { C1 } from 'dirA/Bar';

import type {
  D1,
  X1,
  Y1
} from 'dirA/bar';

import type { E1 } from 'dirA/baz';
import type { F } from './index.js';
import type { G } from './aaa.js';
import type { H } from './bbb';
```

## Related

 - [`import/external-module-folders`][29]
 - [`import/internal-regex`][28]
 - [`import/core-modules`][11]

[3]: #how-imports-are-grouped
[4]: https://nodejs.org/api/esm.html#terminology
[5]: #warnonunassignedimports
[6]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
[7]: #sorttypesgroup
[8]: #pathgroups
[9]: #pathgroupsexcludedimporttypes
[10]: https://www.npmjs.com/package/is-core-module
[11]: ../../README.md#importcore-modules
[12]: https://www.npmjs.com/package/package-up
[13]: #pathgroup
[14]: https://www.npmjs.com/package/minimatch
[16]: https://www.npmjs.com/package/minimatch#features
[17]: https://www.npmjs.com/package/minimatch#options
[18]: #groups
[20]: #newlines-between
[21]: https://eslint.org/docs/latest/rules/no-multiple-empty-lines
[22]: https://prettier.io
[23]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#type-modifiers-on-import-names
[25]: #consolidateislands
[27]: #newlines-between-types
[28]: ../../README.md#importinternal-regex
[29]: ../../README.md#importexternal-module-folders
[30]: #alphabetize
[31]: https://webpack.js.org/guides/tree-shaking#mark-the-file-as-side-effect-free
[32]: #distinctgroup
[33]: #named
