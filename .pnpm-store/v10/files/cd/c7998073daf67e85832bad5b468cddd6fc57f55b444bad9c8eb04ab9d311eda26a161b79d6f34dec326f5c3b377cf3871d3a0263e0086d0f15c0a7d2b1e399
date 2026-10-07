# import/no-extraneous-dependencies

<!-- end auto-generated rule header -->

Forbid the import of external modules that are not declared in the `package.json`'s `dependencies`, `devDependencies`, `optionalDependencies`, `peerDependencies`, or `bundledDependencies`.
The closest parent `package.json` will be used. If no `package.json` is found, the rule will not lint anything. This behavior can be changed with the rule option `packageDir`. Normally ignores imports of modules marked internal, but this can be changed with the rule option `includeInternal`. Type imports can be verified by specifying `includeTypes`.

Modules have to be installed for this rule to work.

## Options

This rule supports the following options:

`devDependencies`: If set to `false`, then the rule will show an error when `devDependencies` are imported. Defaults to `true`.
Type imports are ignored by default.

`optionalDependencies`: If set to `false`, then the rule will show an error when `optionalDependencies` are imported. Defaults to `true`.

`peerDependencies`: If set to `false`, then the rule will show an error when `peerDependencies` are imported. Defaults to `true`.

`bundledDependencies`: If set to `false`, then the rule will show an error when `bundledDependencies` are imported. Defaults to `true`.

You can set the options like this:

```js
"import/no-extraneous-dependencies": ["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}]
```

You can also use an array of globs instead of literal booleans:

```js
"import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js"]}]
```

When using an array of globs, the setting will be set to `true` (no errors reported) if the name of the file being linted (i.e. not the imported file/module) matches a single glob in the array, and `false` otherwise.

There are 2 boolean options to opt into checking extra imports that are normally ignored: `includeInternal`, which enables the checking of internal modules, and `includeTypes`, which enables checking of type imports in TypeScript.

```js
"import/no-extraneous-dependencies": ["error", {"includeInternal": true, "includeTypes": true}]
```

Also there is one more option called `packageDir`, this option is to specify the path to the folder containing package.json.

If provided as a relative path string, will be computed relative to the current working directory at linter execution time. If this is not ideal (does not work with some editor integrations), consider using `__dirname` to provide a path relative to your configuration.

```js
"import/no-extraneous-dependencies": ["error", {"packageDir": './some-dir/'}]
// or
"import/no-extraneous-dependencies": ["error", {"packageDir": path.join(__dirname, 'some-dir')}]
```

It may also be an array of multiple paths, to support monorepos or other novel project
folder layouts:

```js
"import/no-extraneous-dependencies": ["error", {"packageDir": ['./some-dir/', './root-pkg']}]
```

## Rule Details

Given the following `package.json`:

```json
{
  "name": "my-project",
  "...": "...",
  "dependencies": {
    "builtin-modules": "^1.1.1",
    "lodash.cond": "^4.2.0",
    "lodash.find": "^4.2.0",
    "pkg-up": "^1.0.0"
  },
  "devDependencies": {
    "ava": "^0.13.0",
    "eslint": "^2.4.0",
    "eslint-plugin-ava": "^1.3.0",
    "xo": "^0.13.0"
  },
  "optionalDependencies": {
    "lodash.isarray": "^4.0.0"
  },
  "peerDependencies": {
    "react": ">=15.0.0 <16.0.0"
  },
  "bundledDependencies": [
    "@generated/foo",
  ]
}
```

## Fail

```js
var _ = require('lodash');
import _ from 'lodash';

import react from 'react';

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": false}] */
import test from 'ava';
var test = require('ava');

/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import isArray from 'lodash.isarray';
var isArray = require('lodash.isarray');

/* eslint import/no-extraneous-dependencies: ["error", {"bundledDependencies": false}] */
import foo from '"@generated/foo"';
var foo = require('"@generated/foo"');

/* eslint import/no-extraneous-dependencies: ["error", {"includeInternal": true}] */
import foo from './foo';
var foo = require('./foo');

/* eslint import/no-extraneous-dependencies: ["error", {"includeTypes": true}] */
import type { MyType } from 'foo';
```

## Pass

```js
// Builtin and internal modules are fine
var path = require('path');
var foo = require('./foo');

import test from 'ava';
import find from 'lodash.find';
import isArray from 'lodash.isarray';
import foo from '"@generated/foo"';
import type { MyType } from 'foo';

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import react from 'react';
```

## When Not To Use It

If you do not have a `package.json` file in your project.
