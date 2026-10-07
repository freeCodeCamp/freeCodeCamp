# import/no-unresolved

💼 This rule is enabled in the following configs: ❗ `errors`, ☑️ `recommended`.

<!-- end auto-generated rule header -->

Ensures an imported module can be resolved to a module on the local filesystem,
as defined by standard Node `require.resolve` behavior.

See [settings](../../README.md#settings) for customization options for the resolution (i.e.
additional filetypes, `NODE_PATH`, etc.)

This rule can also optionally report on unresolved modules in CommonJS `require('./foo')` calls and AMD `require(['./foo'], function (foo) {...})` and `define(['./foo'], function (foo) {...})`.

To enable this, send `{ commonjs: true/false, amd: true/false }` as a rule option.
Both are disabled by default.

If you are using Webpack, see the section on [resolvers](../../README.md#resolvers).

## Rule Details

### Options

By default, only ES6 imports will be resolved:

```js
/*eslint import/no-unresolved: 2*/
import x from './foo' // reports if './foo' cannot be resolved on the filesystem
```

If `{commonjs: true}` is provided, single-argument `require` calls will be resolved:

```js
/*eslint import/no-unresolved: [2, { commonjs: true }]*/
const { default: x } = require('./foo') // reported if './foo' is not found

require(0) // ignored
require(['x', 'y'], function (x, y) { /*...*/ }) // ignored
```

Similarly, if `{ amd: true }` is provided, dependency paths for `define` and `require`
calls will be resolved:

```js
/*eslint import/no-unresolved: [2, { amd: true }]*/
define(['./foo'], function (foo) { /*...*/ }) // reported if './foo' is not found
require(['./foo'], function (foo) { /*...*/ }) // reported if './foo' is not found

const { default: x } = require('./foo') // ignored
```

Both may be provided, too:

```js
/*eslint import/no-unresolved: [2, { commonjs: true, amd: true }]*/
const { default: x } = require('./foo') // reported if './foo' is not found
define(['./foo'], function (foo) { /*...*/ }) // reported if './foo' is not found
require(['./foo'], function (foo) { /*...*/ }) // reported if './foo' is not found
```

#### `ignore`

This rule has its own ignore list, separate from [`import/ignore`]. This is because you may want to know whether a module can be located, regardless of whether it can be parsed for exports: `node_modules`, CoffeeScript files, etc. are all good to resolve properly, but will not be parsed if configured as such via [`import/ignore`].

To suppress errors from files that may not be properly resolved by your [resolver settings](../../README.md#resolver-plugins), you may add an `ignore` key with an array of `RegExp` pattern strings:

```js
/*eslint import/no-unresolved: [2, { ignore: ['\\.img$'] }]*/

import { x } from './mod' // may be reported, if not resolved to a module

import coolImg from '../../img/coolImg.img' // will not be reported, even if not found
```

#### `caseSensitive`

By default, this rule will report paths whose case do not match the underlying filesystem path, if the FS is not case-sensitive. To disable this behavior, set the `caseSensitive` option to `false`.

```js
/*eslint import/no-unresolved: [2, { caseSensitive: true (default) | false }]*/
const { default: x } = require('./foo') // reported if './foo' is actually './Foo' and caseSensitive: true
```

#### `caseSensitiveStrict`

The `caseSensitive` option does not detect case for the current working directory. The `caseSensitiveStrict` option allows checking `cwd` in resolved path. By default, the option is disabled.

```js
/*eslint import/no-unresolved: [2, { caseSensitiveStrict: true }]*/

// Absolute paths
import Foo from `/Users/fOo/bar/file.js` // reported, /Users/foo/bar/file.js
import Foo from `d:/fOo/bar/file.js` // reported, d:/foo/bar/file.js

// Relative paths, cwd is Users/foo/
import Foo from `./../fOo/bar/file.js` // reported
```

## When Not To Use It

If you're using a module bundler other than Node or Webpack, you may end up with a lot of false positive reports of missing dependencies.

## Further Reading

 - [Resolver plugins](../../README.md#resolvers)
 - [Node resolver](https://npmjs.com/package/eslint-import-resolver-node) (default)
 - [Webpack resolver](https://npmjs.com/package/eslint-import-resolver-webpack)
 - [`import/ignore`] global setting

[`import/ignore`]: ../../README.md#importignore
