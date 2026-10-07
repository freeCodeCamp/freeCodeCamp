# require-in-the-middle

Hook into the Node.js `require` function. This allows you to modify
modules on-the-fly as they are being required.

[![npm](https://img.shields.io/npm/v/require-in-the-middle.svg)](https://www.npmjs.com/package/require-in-the-middle)
[![Test status](https://github.com/nodejs/require-in-the-middle/workflows/Test/badge.svg)](https://github.com/nodejs/require-in-the-middle/actions)

Also supports hooking into calls to `process.getBuiltinModule()`, which was introduced in Node.js v22.3.0.

## Installation

```
npm install require-in-the-middle --save
```

## Usage

```js
const path = require('path')
const { Hook } = require('require-in-the-middle')

// Hook into the express and mongodb module
new Hook(['express', 'mongodb'], function (exports, name, basedir) {
  const version = require(path.join(basedir, 'package.json')).version

  console.log('loading %s@%s', name, version)

  // expose the module version as a property on its exports object
  exports._version = version

  // whatever you return will be returned by `require`
  return exports
})
```

## API

The require-in-the-middle module exposes a single function:

### `hook = new Hook([modules][, options], onrequire)`

When called a `hook` object is returned.

Arguments:

- `modules` &lt;string[]> An optional array of module names to limit which modules
  trigger a call of the `onrequire` callback. If specified, this must be the
  first argument. Both regular modules (e.g. `react-dom`) and
  sub-modules (e.g. `react-dom/server`) can be specified in the array.
- `options` &lt;Object> An optional object containing fields that change when the
  `onrequire` callback is called. If specified, this must be the second
  argument.
  - `options.internals` &lt;boolean> Specifies whether `onrequire` should be called
    when module-internal files are loaded; defaults to `false`.
- `onrequire` &lt;Function> The function to call when a module is required.

The `onrequire` callback will be called the first time a module is
required. The function is called with three arguments:

- `exports` &lt;Object> The value of the `module.exports` property that would
  normally be exposed by the required module.
- `name` &lt;string> The name of the module being required. If `options.internals`
  was set to `true`, the path of module-internal files that are loaded
  (relative to `basedir`) will be appended to the module name, separated by
  `path.sep`.
- `basedir` &lt;string> The directory where the module is located, or `undefined`
  for core modules.

Return the value you want the module to expose (normally the `exports`
argument).

### `hook.unhook()`

Removes the `onrequire` callback so that it will not be triggerd by
subsequent calls to `require()` or `process.getBuiltinModule()`.

## License

[MIT](https://github.com/nodejs/require-in-the-middle/blob/master/LICENSE)
