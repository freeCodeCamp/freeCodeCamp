# import/no-deprecated

<!-- end auto-generated rule header -->

Reports use of a deprecated name, as indicated by a JSDoc block with a `@deprecated`
tag or TomDoc `Deprecated:` comment.

using a JSDoc `@deprecated` tag:

```js
// @file: ./answer.js

/**
 * this is what you get when you trust a mouse talk show
 * @deprecated need to restart the experiment
 * @returns {Number} nonsense
 */
export function multiply(six, nine) {
  return 42
}
```

will report as such:

```js
import { multiply } from './answer' // Deprecated: need to restart the experiment

function whatever(y, z) {
  return multiply(y, z) // Deprecated: need to restart the experiment
}
```

or using the TomDoc equivalent:

```js
// Deprecated: This is what you get when you trust a mouse talk show, need to
// restart the experiment.
//
// Returns a Number nonsense
export function multiply(six, nine) {
  return 42
}
```

Only JSDoc is enabled by default. Other documentation styles can be enabled with
the `import/docstyle` setting.

```yaml
# .eslintrc.yml
settings:
  import/docstyle: ['jsdoc', 'tomdoc']
```

## Worklist

 - [x] report explicit imports on the import node
 - [x] support namespaces
   - [x] should bubble up through deep namespaces (#157)
 - [x] report explicit imports at reference time (at the identifier) similar to namespace
 - [x] mark module deprecated if file JSDoc has a @deprecated tag?
 - [ ] don't flag redeclaration of imported, deprecated names
 - [ ] flag destructuring
