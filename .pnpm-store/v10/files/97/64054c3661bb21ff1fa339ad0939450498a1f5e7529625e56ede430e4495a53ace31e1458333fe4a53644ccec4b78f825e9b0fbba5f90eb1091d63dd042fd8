# import/no-named-as-default-member

⚠️ This rule _warns_ in the following configs: ☑️ `recommended`, 🚸 `warnings`.

<!-- end auto-generated rule header -->

Reports use of an exported name as a property on the default export.

Rationale: Accessing a property that has a name that is shared by an exported
name from the same module is likely to be a mistake.

Named import syntax looks very similar to destructuring assignment. It's easy to
make the (incorrect) assumption that named exports are also accessible as
properties of the default export.

Furthermore, [in Babel 5 this is actually how things worked][blog]. This was
fixed in Babel 6. Before upgrading an existing codebase to Babel 6, it can be
useful to run this lint rule.

[blog]: https://kentcdodds.com/blog/misunderstanding-es6-modules-upgrading-babel-tears-and-a-solution

## Rule Details

Given:

```js
// foo.js
export default 'foo';
export const bar = 'baz';
```

...this would be valid:

```js
import foo, {bar} from './foo.js';
```

...and the following would be reported:

```js
// Caution: `foo` also has a named export `bar`.
// Check if you meant to write `import {bar} from './foo.js'` instead.
import foo from './foo.js';
const bar = foo.bar;
```

```js
// Caution: `foo` also has a named export `bar`.
// Check if you meant to write `import {bar} from './foo.js'` instead.
import foo from './foo.js';
const {bar} = foo;
```
