# util [![Build Status](https://travis-ci.org/browserify/node-util.png?branch=master)](https://travis-ci.org/browserify/node-util)

> Node.js's [util][util] module for all engines.

This implements the Node.js [`util`][util] module for environments that do not have it, like browsers.

## Install

You usually do not have to install `util` yourself. If your code runs in Node.js, `util` is built in. If your code runs in the browser, bundlers like [browserify](https://github.com/browserify/browserify) or [webpack](https://github.com/webpack/webpack) (up to version 4 -- [see this documentation](https://webpack.js.org/configuration/resolve/#resolvefallback) for how to include polyfills like `util` in webpack 5+) also include the `util` module.

But if none of those apply, with npm do:

```shell
npm install util
```

## Usage

```javascript
var util = require('util')
var EventEmitter = require('events')

function MyClass() { EventEmitter.call(this) }
util.inherits(MyClass, EventEmitter)
```

## Browser Support

The `util` module uses ES5 features. If you need to support very old browsers like IE8, use a shim like [`es5-shim`](https://www.npmjs.com/package/es5-shim). You need both the shim and the sham versions of `es5-shim`.

To use `util.promisify` and `util.callbackify`, Promises must already be available. If you need to support browsers like IE11 that do not support Promises, use a shim. [es6-promise](https://github.com/stefanpenner/es6-promise) is a popular one but there are many others available on npm.

## API

See the [Node.js util docs][util].  `util` currently supports the Node 8 LTS API. However, some of the methods are outdated. The `inspect` and `format` methods included in this module are a lot more simple and barebones than the ones in Node.js.

## Contributing

PRs are very welcome! The main way to contribute to `util` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5, rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js.
This module intends to provide exactly the same API as Node.js, so features that are not available in the core `util` module will not be accepted. Feature requests should instead be directed at [nodejs/node](https://github.com/nodejs/node) and will be added to this module once they are implemented in Node.js.

If there is a difference in behaviour between Node.js's `util` module and this module, please open an issue!

## License

[MIT](./LICENSE)

[util]: https://nodejs.org/docs/latest-v8.x/api/util.html
