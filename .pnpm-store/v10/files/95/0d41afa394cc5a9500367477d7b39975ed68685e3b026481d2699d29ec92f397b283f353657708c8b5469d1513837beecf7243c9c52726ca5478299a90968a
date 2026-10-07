# import/no-relative-packages

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Use this rule to prevent importing packages through relative paths.

It's useful in Yarn/Lerna workspaces, where it's possible to import a sibling package using `../package` relative path, while direct `package` is the correct one.

## Examples

Given the following folder structure:

```pt
my-project
├── packages
│   ├── foo
│   │   ├── index.js
│   │   └── package.json
│   └── bar
│       ├── index.js
│       └── package.json
└── entry.js
```

And the .eslintrc file:

```json
{
  ...
  "rules": {
    "import/no-relative-packages": "error"
  }
}
```

The following patterns are considered problems:

```js
/**
 *  in my-project/packages/foo.js
 */

import bar from '../bar'; // Import sibling package using relative path
import entry from '../../entry.js'; // Import from parent package using relative path

/**
 *  in my-project/entry.js
 */

import bar from './packages/bar'; // Import child package using relative path
```

The following patterns are NOT considered problems:

```js
/**
 *  in my-project/packages/foo.js
 */

import bar from 'bar'; // Import sibling package using package name

/**
 *  in my-project/entry.js
 */

import bar from 'bar'; // Import sibling package using package name
```
