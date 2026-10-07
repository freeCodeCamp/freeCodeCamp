# import/no-import-module-exports

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Reports the use of import declarations with CommonJS exports in any module
except for the [main module](https://docs.npmjs.com/files/package.json#main).

If you have multiple entry points or are using `js:next` this rule includes an
`exceptions` option which you can use to exclude those files from the rule.

## Options

### `exceptions`

 - An array of globs. The rule will be omitted from any file that matches a glob
   in the options array. For example, the following setting will omit the rule
   in the `some-file.js` file.

```json
"import/no-import-module-exports": ["error", {
    "exceptions": ["**/*/some-file.js"]
}]
```

## Rule Details

### Fail

```js
import { stuff } from 'starwars'
module.exports = thing

import * as allThings from 'starwars'
exports.bar = thing

import thing from 'other-thing'
exports.foo = bar

import thing from 'starwars'
const baz = module.exports = thing
console.log(baz)
```

### Pass

Given the following package.json:

```json
{
  "main": "lib/index.js",
}
```

```js
import thing from 'other-thing'
export default thing

const thing = require('thing')
module.exports = thing

const thing = require('thing')
exports.foo = bar

import thing from 'otherthing'
console.log(thing.module.exports)

// in lib/index.js
import foo from 'path';
module.exports = foo;

// in some-file.js
// eslint import/no-import-module-exports: ["error", {"exceptions": ["**/*/some-file.js"]}]
import foo from 'path';
module.exports = foo;
```

### Further Reading

 - [webpack issue #4039](https://github.com/webpack/webpack/issues/4039)
