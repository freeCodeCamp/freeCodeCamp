# import/no-unused-modules

<!-- end auto-generated rule header -->

Reports:

 - modules without any exports
 - individual exports not being statically `import`ed or `require`ed from other modules in the same project
 - dynamic imports are supported if argument is a literal string

## Rule Details

### Usage

In order for this plugin to work, at least one of the options `missingExports` or `unusedExports` must be enabled (see "Options" section below). In the future, these options will be enabled by default (see <https://github.com/import-js/eslint-plugin-import/issues/1324>)

Example:

```json
"rules": {
  ...otherRules,
  "import/no-unused-modules": [1, {"unusedExports": true}]
}
```

### Options

This rule takes the following option:

 - **`missingExports`**: if `true`, files without any exports are reported (defaults to `false`)
 - **`unusedExports`**: if `true`, exports without any static usage within other modules are reported (defaults to `false`)
 - **`ignoreUnusedTypeExports`**: if `true`, TypeScript type exports without any static usage within other modules are reported (defaults to `false` and has no effect unless `unusedExports` is `true`)
 - **`src`**: an array with files/paths to be analyzed. It only applies to unused exports. Defaults to `process.cwd()`, if not provided
 - **`ignoreExports`**: an array with files/paths for which unused exports will not be reported (e.g module entry points in a published package)

### Example for missing exports

#### The following will be reported

```js
const class MyClass { /*...*/ }

function makeClass() { return new MyClass(...arguments) }
```

#### The following will not be reported

```js
export default function () { /*...*/ }
```

```js
export const foo = function () { /*...*/ }
```

```js
export { foo, bar }
```

```js
export { foo as bar }
```

### Example for unused exports

given file-f:

```js
import { e } from 'file-a'
import { f } from 'file-b'
import * as fileC from  'file-c'
export { default, i0 } from 'file-d' // both will be reported

export const j = 99 // will be reported
```

and file-d:

```js
export const i0 = 9 // will not be reported
export const i1 = 9 // will be reported
export default () => {} // will not be reported
```

and file-c:

```js
export const h = 8 // will not be reported
export default () => {} // will be reported, as export * only considers named exports and ignores default exports
```

and file-b:

```js
import two, { b, c, doAnything } from 'file-a'

export const f = 6 // will not be reported
```

and file-a:

```js
const b = 2
const c = 3
const d = 4

export const a = 1 // will be reported

export { b, c } // will not be reported

export { d as e } // will not be reported

export function doAnything() {
  // some code
}  // will not be reported

export default 5 // will not be reported
```

### Unused exports with `ignoreUnusedTypeExports` set to `true`

The following will not be reported:

```ts
export type Foo = {}; // will not be reported
export interface Foo = {}; // will not be reported
export enum Foo {}; // will not be reported
```

#### Important Note

Exports from files listed as a main file (`main`, `browser`, or `bin` fields in `package.json`) will be ignored by default. This only applies if the `package.json` is not set to `private: true`

## When not to use

If you don't mind having unused files or dead code within your codebase, you can disable this rule
