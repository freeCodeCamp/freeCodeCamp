babel-plugin-add-module-exports
---

<p align="right">
  <a href="https://npmjs.org/package/babel-plugin-add-module-exports">
    <img src="https://img.shields.io/npm/v/babel-plugin-add-module-exports.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/babel-plugin-add-module-exports">
    <img src="http://img.shields.io/travis/59naga/babel-plugin-add-module-exports.svg?style=flat-square">
  </a>
</p>

Why?
---

Babel@6 doesn't export default `module.exports` any more - [T2212 *Kill CommonJS default export behavior*](https://phabricator.babeljs.io/T2212).

Babel@6 transforms the following file

```js
export default 'foo'
```

into

```js
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'foo';
```

Therefore, it is a need to use the ugly `.default` in node.js.

```js
require('./bundle.js') // { default: 'foo' }
require('./bundle.js').default // 'foo'
```

This plugin follows the babel@5 behavior - add the `module.exports` if **only** the `export default` declaration exists.

```js
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'foo';
module.exports = exports['default'];
```

Therefore, our old codes still work fine - the `.default` goes away. :wink:

```js
require('./bundle.js') // foo
```

Usage
---

Install this plugin from npm:

```bash
npm install babel-plugin-add-module-exports --save-dev
# or
yarn add -D babel-plugin-add-module-exports
```

Write the name to [babelrc](https://babeljs.io/docs/usage/babelrc/). It works with [preset-env](http://babeljs.io/docs/en/babel-preset-env/) to output CommonJS code:

```json
{
  "presets": ["@babel/env"],
  "plugins": ["add-module-exports"]
}
```

### modules: false

**However, the plugin doesn't change the pure-esmodule**.
this plugin makes changes only when exists `exports.default` (in other words, using [commonjs](https://babeljs.io/docs/en/babel-plugin-transform-es2015-modules-commonjs/)).

```json
{
  "presets": [["@babel/env", { "modules": false }]],
  "plugins": ["add-module-exports"]
}
```

into

```js
export default 'foo'
```

`1.0.0` Currently support is `commonjs` and `umd`.
Doesn't support `amd`, `systemjs` modules(don't use. there are no plans to support at the moment).

### with Webpack

Likewise, webpack doesn't perform commonjs transformation for [codesplitting](https://webpack.js.org/guides/code-splitting/). Need to set commonjs conversion.

```json
{
  "presets": [["@babel/env", { "modules": "commonjs" }]],
  "plugins": ["add-module-exports"]
}
```

Options
---

## `addDefaultProperty`

If you're exporting an object and wish to maintain compatibility with code using the `require('./bundle.js').default` syntax, you can optionally enable the `addDefaultProperty` option as follows:

```json
{
  "presets": ["env"],
  "plugins": [
    [
      "add-module-exports",
      {
        "addDefaultProperty": true
      }
    ]
  ]
}
```

This will cause a second line of code to be added which aliases the `default` name to the exported object like so:

```js
module.exports = exports['default'];
module.exports.default = exports['default']
```

See also
---
* [babel-plugin-experimental-syntax-dynamic-import](https://github.com/59naga/babel-plugin-experimental-syntax-dynamic-import)

License
---
[MIT](http://59naga.mit-license.org/)
