# import/no-named-default

<!-- end auto-generated rule header -->

Reports use of a default export as a locally named import.

Rationale: the syntax exists to import default exports expressively, let's use it.

Note that type imports, as used by [Flow], are always ignored.

[Flow]: https://flow.org/

## Rule Details

Given:

```js
// foo.js
export default 'foo';
export const bar = 'baz';
```

...these would be valid:

```js
import foo from './foo.js';
import foo, { bar } from './foo.js';
```

...and these would be reported:

```js
// message: Using exported name 'bar' as identifier for default export.
import { default as foo } from './foo.js';
import { default as foo, bar } from './foo.js';
```
