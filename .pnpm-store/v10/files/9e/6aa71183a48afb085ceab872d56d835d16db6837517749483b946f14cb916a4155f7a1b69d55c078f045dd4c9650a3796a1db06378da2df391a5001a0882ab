# import/named

💼🚫 This rule is enabled in the following configs: ❗ `errors`, ☑️ `recommended`. This rule is _disabled_ in the ⌨️ `typescript` config.

<!-- end auto-generated rule header -->

Verifies that all named imports are part of the set of named exports in the referenced module.

For `export`, verifies that all named exports exist in the referenced module.

Note: for packages, the plugin will find exported names
from [`jsnext:main`] (deprecated) or `module`, if present in `package.json`.
Redux's npm module includes this key, and thereby is lintable, for example.

A module path that is [ignored] or not [unambiguously an ES module] will not be reported when imported. Note that type imports and exports, as used by [Flow], are always ignored.

[ignored]: ../../README.md#importignore
[unambiguously an ES module]: https://github.com/bmeck/UnambiguousJavaScriptGrammar
[Flow]: https://flow.org/

## Rule Details

Given:

```js
// ./foo.js
export const foo = "I'm so foo"
```

The following is considered valid:

```js
// ./bar.js
import { foo } from './foo'

// ES7 proposal
export { foo as bar } from './foo'

// node_modules without jsnext:main are not analyzed by default
// (import/ignore setting)
import { SomeNonsenseThatDoesntExist } from 'react'
```

...and the following are reported:

```js
// ./baz.js
import { notFoo } from './foo'

// ES7 proposal
export { notFoo as defNotBar } from './foo'

// will follow 'jsnext:main', if available
import { dontCreateStore } from 'redux'
```

### Settings

[`import/ignore`] can be provided as a setting to ignore certain modules (node_modules,
CoffeeScript, CSS if using Webpack, etc.).

Given:

```yaml
# .eslintrc (YAML)
---
settings:
  import/ignore:
    - node_modules  # included by default, but replaced if explicitly configured
    - *.coffee$     # can't parse CoffeeScript (unless a custom polyglot parser was configured)
```

and

```coffeescript
# ./whatever.coffee
exports.whatever = (foo) -> console.log foo
```

then the following is not reported:

```js
// ./foo.js

// can't be analyzed, and ignored, so not reported
import { notWhatever } from './whatever'
```

## When Not To Use It

If you are using CommonJS and/or modifying the exported namespace of any module at
runtime, you will likely see false positives with this rule.

## Further Reading

 - [`import/ignore`] setting
 - [`jsnext:main`] deprecation
 - [`pkg.module`] (Rollup)

[`jsnext:main`]: https://github.com/jsforum/jsforum/issues/5
[`pkg.module`]: https://github.com/rollup/rollup/wiki/pkg.module
[`import/ignore`]: ../../README.md#importignore
