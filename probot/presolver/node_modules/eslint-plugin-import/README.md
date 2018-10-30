# eslint-plugin-import

[![build status](https://travis-ci.org/benmosher/eslint-plugin-import.svg?branch=master)](https://travis-ci.org/benmosher/eslint-plugin-import)
[![Coverage Status](https://coveralls.io/repos/github/benmosher/eslint-plugin-import/badge.svg?branch=master)](https://coveralls.io/github/benmosher/eslint-plugin-import?branch=master)
[![win32 build status](https://ci.appveyor.com/api/projects/status/3mw2fifalmjlqf56/branch/master?svg=true)](https://ci.appveyor.com/project/benmosher/eslint-plugin-import/branch/master)
[![npm](https://img.shields.io/npm/v/eslint-plugin-import.svg)](https://www.npmjs.com/package/eslint-plugin-import)
[![npm downloads](https://img.shields.io/npm/dt/eslint-plugin-import.svg?maxAge=2592000)](http://www.npmtrends.com/eslint-plugin-import)

This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.

**IF YOU ARE USING THIS WITH SUBLIME**: see the [bottom section](#sublimelinter-eslint) for important info.

## Rules

**Static analysis:**

* Ensure imports point to a file/module that can be resolved. ([`no-unresolved`])
* Ensure named imports correspond to a named export in the remote file. ([`named`])
* Ensure a default export is present, given a default import. ([`default`])
* Ensure imported namespaces contain dereferenced properties as they are dereferenced. ([`namespace`])
* Restrict which files can be imported in a given folder ([`no-restricted-paths`])
* Forbid import of modules using absolute paths ([`no-absolute-path`])
* Forbid `require()` calls with expressions ([`no-dynamic-require`])
* Prevent importing the submodules of other modules ([`no-internal-modules`])
* Forbid Webpack loader syntax in imports ([`no-webpack-loader-syntax`])

[`no-unresolved`]: ./docs/rules/no-unresolved.md
[`named`]: ./docs/rules/named.md
[`default`]: ./docs/rules/default.md
[`namespace`]: ./docs/rules/namespace.md
[`no-restricted-paths`]: ./docs/rules/no-restricted-paths.md
[`no-absolute-path`]: ./docs/rules/no-absolute-path.md
[`no-dynamic-require`]: ./docs/rules/no-dynamic-require.md
[`no-internal-modules`]: ./docs/rules/no-internal-modules.md
[`no-webpack-loader-syntax`]: ./docs/rules/no-webpack-loader-syntax.md

**Helpful warnings:**


* Report any invalid exports, i.e. re-export of the same name ([`export`])
* Report use of exported name as identifier of default export ([`no-named-as-default`])
* Report use of exported name as property of default export ([`no-named-as-default-member`])
* Report imported names marked with `@deprecated` documentation tag ([`no-deprecated`])
* Forbid the use of extraneous packages ([`no-extraneous-dependencies`])
* Forbid the use of mutable exports with `var` or `let`. ([`no-mutable-exports`])

[`export`]: ./docs/rules/export.md
[`no-named-as-default`]: ./docs/rules/no-named-as-default.md
[`no-named-as-default-member`]: ./docs/rules/no-named-as-default-member.md
[`no-deprecated`]: ./docs/rules/no-deprecated.md
[`no-extraneous-dependencies`]: ./docs/rules/no-extraneous-dependencies.md
[`no-mutable-exports`]: ./docs/rules/no-mutable-exports.md

**Module systems:**

* Report potentially ambiguous parse goal (`script` vs. `module`) ([`unambiguous`])
* Report CommonJS `require` calls and `module.exports` or `exports.*`. ([`no-commonjs`])
* Report AMD `require` and `define` calls. ([`no-amd`])
* No Node.js builtin modules. ([`no-nodejs-modules`])

[`unambiguous`]: ./docs/rules/unambiguous.md
[`no-commonjs`]: ./docs/rules/no-commonjs.md
[`no-amd`]: ./docs/rules/no-amd.md
[`no-nodejs-modules`]: ./docs/rules/no-nodejs-modules.md


**Style guide:**

* Ensure all imports appear before other statements ([`first`])
* Report repeated import of the same module in multiple places ([`no-duplicates`])
* Report namespace imports ([`no-namespace`])
* Ensure consistent use of file extension within the import path ([`extensions`])
* Enforce a convention in module import order ([`order`])
* Enforce a newline after import statements ([`newline-after-import`])
* Prefer a default export if module exports a single name ([`prefer-default-export`])
* Limit the maximum number of dependencies a module can have ([`max-dependencies`])
* Forbid unassigned imports ([`no-unassigned-import`])
* Forbid named default exports ([`no-named-default`])

[`first`]: ./docs/rules/first.md
[`no-duplicates`]: ./docs/rules/no-duplicates.md
[`no-namespace`]: ./docs/rules/no-namespace.md
[`extensions`]: ./docs/rules/extensions.md
[`order`]: ./docs/rules/order.md
[`newline-after-import`]: ./docs/rules/newline-after-import.md
[`prefer-default-export`]: ./docs/rules/prefer-default-export.md
[`max-dependencies`]: ./docs/rules/max-dependencies.md
[`no-unassigned-import`]: ./docs/rules/no-unassigned-import.md
[`no-named-default`]: ./docs/rules/no-named-default.md

## Installation

```sh
npm install eslint-plugin-import -g
```

or if you manage ESLint as a dev dependency:

```sh
# inside your project's working tree
npm install eslint-plugin-import --save-dev
```

All rules are off by default. However, you may configure them manually
in your `.eslintrc.(yml|json|js)`, or extend one of the canned configs:

```yaml
---
extends:
  - eslint:recommended
  - plugin:import/errors
  - plugin:import/warnings

# or configure manually:
plugins:
  - import

rules:
  import/no-unresolved: [2, {commonjs: true, amd: true}]
  import/named: 2
  import/namespace: 2
  import/default: 2
  import/export: 2
  # etc...
```

# Resolvers

With the advent of module bundlers and the current state of modules and module
syntax specs, it's not always obvious where `import x from 'module'` should look
to find the file behind `module`.

Up through v0.10ish, this plugin has directly used substack's [`resolve`] plugin,
which implements Node's import behavior. This works pretty well in most cases.

However, Webpack allows a number of things in import module source strings that
Node does not, such as loaders (`import 'file!./whatever'`) and a number of
aliasing schemes, such as [`externals`]: mapping a module id to a global name at
runtime (allowing some modules to be included more traditionally via script tags).

In the interest of supporting both of these, v0.11 introduces resolvers.

Currently [Node] and [Webpack] resolution have been implemented, but the
resolvers are just npm packages, so [third party packages are supported](https://github.com/benmosher/eslint-plugin-import/wiki/Resolvers) (and encouraged!).

You can reference resolvers in several ways(in order of precedence):

- as a conventional `eslint-import-resolver` name, like `eslint-import-resolver-foo`:

```yaml
# .eslintrc.yml
settings:
  # uses 'eslint-import-resolver-foo':
  import/resolver: foo
```
```js
// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      foo: { someConfig: value }
    }
  }
}
```

- with a full npm module name, like `my-awesome-npm-module`:

```yaml
# .eslintrc.yml
settings:
  import/resolver: 'my-awesome-npm-module'
```
```js
// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      'my-awesome-npm-module': { someConfig: value }
    }
  }
}
```

- with a filesystem path to resolver, defined in this example as a `computed property` name:

```js
// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      [path.resolve('../../../my-resolver')]: { someConfig: value }
    }
  }
}
```

Relative paths will be resolved relative to the source's nearest `package.json` or
the process's current working directory if no `package.json` is found.



If you are interesting in writing a resolver, see the [spec](./resolvers/README.md) for more details.

[`resolve`]: https://www.npmjs.com/package/resolve
[`externals`]: http://webpack.github.io/docs/library-and-externals.html

[Node]: https://www.npmjs.com/package/eslint-import-resolver-node
[Webpack]: https://www.npmjs.com/package/eslint-import-resolver-webpack

# Settings

You may set the following settings in your `.eslintrc`:

#### `import/extensions`

A list of file extensions that will be parsed as modules and inspected for
`export`s.

This defaults to `['.js']`, unless you are using the `react` shared config,
in which case it is specified as `['.js', '.jsx']`.

Note that this is different from (and likely a subset of) any `import/resolver`
extensions settings, which may include `.json`, `.coffee`, etc. which will still
factor into the `no-unresolved` rule.

Also, the following `import/ignore` patterns will overrule this list.

#### `import/ignore`

A list of regex strings that, if matched by a path, will
not report the matching module if no `export`s are found.
In practice, this means rules other than [`no-unresolved`](./docs/rules/no-unresolved.md#ignore) will not report on any
`import`s with (absolute filesystem) paths matching this pattern.

`no-unresolved` has its own [`ignore`](./docs/rules/no-unresolved.md#ignore) setting.

```yaml
settings:
  import/ignore:
    - \.coffee$          # fraught with parse errors
    - \.(scss|less|css)$ # can't parse unprocessed CSS modules, either
```

#### `import/core-modules`

An array of additional modules to consider as "core" modules--modules that should
be considered resolved but have no path on the filesystem. Your resolver may
already define some of these (for example, the Node resolver knows about `fs` and
`path`), so you need not redefine those.

For example, Electron exposes an `electron` module:

```js
import 'electron'  // without extra config, will be flagged as unresolved!
```

that would otherwise be unresolved. To avoid this, you may provide `electron` as a
core module:

```yaml
# .eslintrc.yml
settings:
  import/core-modules: [ electron ]
```

In Electron's specific case, there is a shared config named `electron`
that specifies this for you.

Contribution of more such shared configs for other platforms are welcome!

#### `import/external-module-folders`

An array of folders. Resolved modules only from those folders will be considered as "external". By default - `["node_modules"]`. Makes sense if you have configured your path or webpack to handle your internal paths differently and want to considered modules from some folders, for example `bower_components` or `jspm_modules`, as "external".

#### `import/parsers`

A map from parsers to file extension arrays. If a file extension is matched, the
dependency parser will require and use the map key as the parser instead of the
configured ESLint parser. This is useful if you're inter-op-ing with TypeScript
directly using Webpack, for example:

```yaml
# .eslintrc.yml
settings:
  import/parsers:
    typescript-eslint-parser: [ .ts, .tsx ]
```

In this case, [`typescript-eslint-parser`](https://github.com/eslint/typescript-eslint-parser) must be installed and require-able from
the running `eslint` module's location (i.e., install it as a peer of ESLint).

This is currently only tested with `typescript-eslint-parser` but should theoretically
work with any moderately ESTree-compliant parser.

It's difficult to say how well various plugin features will be supported, too,
depending on how far down the rabbit hole goes. Submit an issue if you find strange
behavior beyond here, but steel your heart against the likely outcome of closing
with `wontfix`.


#### `import/resolver`

See [resolvers](#resolvers).

#### `import/cache`

Settings for cache behavior. Memoization is used at various levels to avoid the copious amount of `fs.statSync`/module parse calls required to correctly report errors.

For normal `eslint` console runs, the cache lifetime is irrelevant, as we can strongly assume that files should not be changing during the lifetime of the linter process (and thus, the cache in memory)

For long-lasting processes, like [`eslint_d`] or [`eslint-loader`], however, it's important that there be some notion of staleness.

If you never use [`eslint_d`] or [`eslint-loader`], you may set the cache lifetime to `Infinity` and everything should be fine:

```yaml
# .eslintrc.yml
settings:
  import/cache:
    lifetime: ∞  # or Infinity
```

Otherwise, set some integer, and cache entries will be evicted after that many seconds have elapsed:

```yaml
# .eslintrc.yml
settings:
  import/cache:
    lifetime: 5  # 30 is the default
```

[`eslint_d`]: https://www.npmjs.com/package/eslint_d
[`eslint-loader`]: https://www.npmjs.com/package/eslint-loader

## SublimeLinter-eslint

SublimeLinter-eslint introduced a change to support `.eslintignore` files
which altered the way file paths are passed to ESLint when linting during editing.
This change sends a relative path instead of the absolute path to the file (as ESLint
normally provides), which can make it impossible for this plugin to resolve dependencies
on the filesystem.

This workaround should no longer be necessary with the release of ESLint 2.0, when
`.eslintignore` will be updated to work more like a `.gitignore`, which should
support proper ignoring of absolute paths via `--stdin-filename`.

In the meantime, see [roadhump/SublimeLinter-eslint#58](https://github.com/roadhump/SublimeLinter-eslint/issues/58)
for more details and discussion, but essentially, you may find you need to add the following
`SublimeLinter` config to your Sublime project file:

```json
{
    "folders":
    [
        {
            "path": "code"
        }
    ],
    "SublimeLinter":
    {
        "linters":
        {
            "eslint":
            {
                "chdir": "${project}/code"
            }
        }
    }
}
```

Note that `${project}/code` matches the `code` provided at `folders[0].path`.

The purpose of the `chdir` setting, in this case, is to set the working directory
from which ESLint is executed to be the same as the directory on which SublimeLinter-eslint
bases the relative path it provides.

See the SublimeLinter docs on [`chdir`](http://www.sublimelinter.com/en/latest/linter_settings.html#chdir)
for more information, in case this does not work with your project.

If you are not using `.eslintignore`, or don't have a Sublime project file, you can also
do the following via a `.sublimelinterrc` file in some ancestor directory of your
code:

```json
{
  "linters": {
    "eslint": {
      "args": ["--stdin-filename", "@"]
    }
  }
}
```

I also found that I needed to set `rc_search_limit` to `null`, which removes the file
hierarchy search limit when looking up the directory tree for `.sublimelinterrc`:

In Package Settings / SublimeLinter / User Settings:
```json
{
  "user": {
    "rc_search_limit": null
  }
}
```

I believe this defaults to `3`, so you may not need to alter it depending on your
project folder max depth.
