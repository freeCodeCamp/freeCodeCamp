# import/no-cycle

<!-- end auto-generated rule header -->

Ensures that there is no resolvable path back to this module via its dependencies.

This includes cycles of depth 1 (imported module imports me) to `"∞"` (or `Infinity`), if the
[`maxDepth`](#maxdepth) option is not set.

```js
// dep-b.js
import './dep-a.js'

export function b() { /* ... */ }
```

```js
// dep-a.js
import { b } from './dep-b.js' // reported: Dependency cycle detected.
```

This rule does _not_ detect imports that resolve directly to the linted module;
for that, see [`no-self-import`].

This rule ignores type-only imports in Flow and TypeScript syntax (`import type` and `import typeof`), which have no runtime effect.

## Rule Details

### Options

By default, this rule only detects cycles for ES6 imports, but see the [`no-unresolved` options](./no-unresolved.md#options) as this rule also supports the same `commonjs` and `amd` flags. However, these flags only impact which import types are _linted_; the
import/export infrastructure only registers `import` statements in dependencies, so
cycles created by `require` within imported modules may not be detected.

#### `maxDepth`

There is a `maxDepth` option available to prevent full expansion of very deep dependency trees:

```js
/*eslint import/no-cycle: [2, { maxDepth: 1 }]*/

// dep-c.js
import './dep-a.js'
```

```js
// dep-b.js
import './dep-c.js'

export function b() { /* ... */ }
```

```js
// dep-a.js
import { b } from './dep-b.js' // not reported as the cycle is at depth 2
```

This is not necessarily recommended, but available as a cost/benefit tradeoff mechanism
for reducing total project lint time, if needed.

#### `ignoreExternal`

An `ignoreExternal` option is available to prevent the cycle detection to expand to external modules:

```js
/*eslint import/no-cycle: [2, { ignoreExternal: true }]*/

// dep-a.js
import 'module-b/dep-b.js'

export function a() { /* ... */ }
```

```js
// node_modules/module-b/dep-b.js
import { a } from './dep-a.js' // not reported as this module is external
```

Its value is `false` by default, but can be set to `true` for reducing total project lint time, if needed.

#### `allowUnsafeDynamicCyclicDependency`

This option disable reporting of errors if a cycle is detected with at least one dynamic import.

```js
// bar.js
import { foo } from './foo';
export const bar = foo;

// foo.js
export const foo = 'Foo';
export function getBar() { return import('./bar'); }
```

> Cyclic dependency are **always** a dangerous anti-pattern as discussed extensively in [#2265](https://github.com/import-js/eslint-plugin-import/issues/2265). Please be extra careful about using this option.

#### `disableScc`

This option disables a pre-processing step that calculates [Strongly Connected Components](https://en.wikipedia.org/wiki/Strongly_connected_component), which are used for avoiding unnecessary work checking files in different SCCs for cycles.

However, under some configurations, this pre-processing may be more expensive than the time it saves.

When this option is `true`, we don't calculate any SCC graph, and check all files for cycles (leading to higher time-complexity). Default is `false`.

## When Not To Use It

This rule is comparatively computationally expensive. If you are pressed for lint
time, or don't think you have an issue with dependency cycles, you may not want
this rule enabled.

## Further Reading

 - [Original inspiring issue](https://github.com/import-js/eslint-plugin-import/issues/941)
 - Rule to detect that module imports itself: [`no-self-import`]
 - [`import/external-module-folders`] setting

[`no-self-import`]: ./no-self-import.md

[`import/external-module-folders`]: ../../README.md#importexternal-module-folders
