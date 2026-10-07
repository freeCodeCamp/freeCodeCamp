# Webpack Virtual Modules

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

**Webpack Virtual Modules** is a plugin that allows for dynamical generation of in-memory virtual modules for JavaScript
builds created with webpack. When virtual module is created all the parent virtual dirs that lead to the module filename are created too. This plugin supports watch mode meaning any write to a virtual module is seen by webpack as
if a real file stored on disk has changed.

## Installation

Use NPM or Yarn to install Webpack Virtual Modules as a development dependency:

```bash
# with NPM
npm install webpack-virtual-modules --save-dev

# with Yarn
yarn add webpack-virtual-modules --dev
```

## Usage

You can use Webpack Virtual Modules with webpack 5, 4 and 3. The examples below show the usage with webpack 5 or 4. If you want to use our plugin with webpack 3, check out a dedicated doc:

* [Webpack Virtual Modules with Webpack 3]

### Generating static virtual modules

Require the plugin in the webpack configuration file, then create and add virtual modules in the `plugins` array in the
webpack configuration object:

```js
var VirtualModulesPlugin = require('webpack-virtual-modules');

var virtualModules = new VirtualModulesPlugin({
  'node_modules/module-foo.js': 'module.exports = { foo: "foo" };',
  'node_modules/module-bar.js': 'module.exports = { bar: "bar" };'
});

module.exports = {
  // ...
  plugins: [
    virtualModules
  ]
};
```

You can now import your virtual modules anywhere in the application and use them:

```js
var moduleFoo = require('module-foo');
// You can now use moduleFoo
console.log(moduleFoo.foo);
```

### Generating dynamic virtual modules

You can generate virtual modules **_dynamically_** with Webpack Virtual Modules.

Here's an example of dynamic generation of a module. All you need to do is create new virtual modules using the plugin
and add them to the `plugins` array. After that, you need to add a webpack hook. For using hooks, consult [webpack
compiler hook documentation].

```js
var webpack = require('webpack');
var VirtualModulesPlugin = require('webpack-virtual-modules');

// Create an empty set of virtual modules
const virtualModules = new VirtualModulesPlugin();

var compiler = webpack({
  // ...
  plugins: [
    virtualModules
  ]
});

compiler.hooks.compilation.tap('MyPlugin', function(compilation) {
  virtualModules.writeModule('node_modules/module-foo.js', '');
});

compiler.watch();
```

In other module or a Webpack plugin, you can write to the module `module-foo` whatever you need. After this write,
webpack will "see" that `module-foo.js` has changed and will restart compilation.

```js
virtualModules.writeModule(
  'node_modules/module-foo.js',
  'module.exports = { foo: "foo" };'
);
```

## More Examples

  - [Swagger and JSDoc Example with Webpack 5]
  - [Swagger and JSDoc Example with Webpack 4]
  - [Swagger and JSDoc Example with Webpack 3]

## API Reference

  - [API Reference]

## Inspiration

This project is inspired by [virtual-module-webpack-plugin].

## License

Copyright © 2017 [SysGears INC]. This source code is licensed under the [MIT] license.

[webpack virtual modules with webpack 3]: https://github.com/sysgears/webpack-virtual-modules/tree/master/docs/webpack3.md
[webpack compiler hook documentation]: https://webpack.js.org/api/compiler-hooks/
[swagger and jsdoc example with webpack 3]: https://github.com/sysgears/webpack-virtual-modules/tree/master/examples/swagger-webpack3
[swagger and jsdoc example with webpack 4]: https://github.com/sysgears/webpack-virtual-modules/tree/master/examples/swagger-webpack4
[swagger and jsdoc example with webpack 5]: https://github.com/sysgears/webpack-virtual-modules/tree/master/examples/swagger-webpack5
[api reference]: https://github.com/sysgears/webpack-virtual-modules/tree/master/docs/API%20Reference.md
[virtual-module-webpack-plugin]: https://github.com/rmarscher/virtual-module-webpack-plugin
[MIT]: LICENSE
[SysGears INC]: http://sysgears.com

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/webpack-virtual-modules?style=flat
[npm-version-href]: https://npmjs.com/package/webpack-virtual-modules
[npm-downloads-src]: https://img.shields.io/npm/dm/webpack-virtual-modules?style=flat
[npm-downloads-href]: https://npmjs.com/package/webpack-virtual-modules
[license-src]: https://img.shields.io/github/license/sysgears/webpack-virtual-modules.svg?style=flat
[license-href]: https://github.com/sysgears/webpack-virtual-modules/blob/main/LICENSE
