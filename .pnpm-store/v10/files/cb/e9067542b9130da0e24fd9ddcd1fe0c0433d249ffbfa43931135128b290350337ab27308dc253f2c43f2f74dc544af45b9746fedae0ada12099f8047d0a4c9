# import/max-dependencies

<!-- end auto-generated rule header -->

Forbid modules to have too many dependencies (`import` or `require` statements).

This is a useful rule because a module with too many dependencies is a code smell, and usually indicates the module is doing too much and/or should be broken up into smaller modules.

Importing multiple named exports from a single module will only count once (e.g. `import {x, y, z} from './foo'` will only count as a single dependency).

## Options

This rule has the following options, with these defaults:

```js
"import/max-dependencies": ["error", {
  "max": 10,
  "ignoreTypeImports": false,
}]
```

### `max`

This option sets the maximum number of dependencies allowed. Anything over will trigger the rule. **Default is 10** if the rule is enabled and no `max` is specified.

Given a max value of `{"max": 2}`:

### Fail

```js
import a from './a'; // 1
const b = require('./b'); // 2
import c from './c'; // 3 - exceeds max!
```

### Pass

```js
import a from './a'; // 1
const anotherA = require('./a'); // still 1
import {x, y, z} from './foo'; // 2
```

### `ignoreTypeImports`

Ignores `type` imports. Type imports are a feature released in TypeScript 3.8, you can [read more here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export). Defaults to `false`.

Given `{"max": 2, "ignoreTypeImports": true}`:

<!-- markdownlint-disable-next-line MD024 -- duplicate header -->
### Fail

```ts
import a from './a';
import b from './b';
import c from './c';
```

<!-- markdownlint-disable-next-line MD024 -- duplicate header -->
### Pass

```ts
import a from './a';
import b from './b';
import type c from './c'; // Doesn't count against max
```

## When Not To Use It

If you don't care how many dependencies a module has.
