# path-browserify [![Build Status](https://travis-ci.org/browserify/path-browserify.png?branch=master)](https://travis-ci.org/browserify/path-browserify)

> The `path` module from Node.js for browsers

This implements the Node.js [`path`][path] module for environments that do not have it, like browsers.

> `path-browserify` currently matches the **Node.js 10.3** API.

## Install

You usually do not have to install `path-browserify` yourself! If your code runs in Node.js, `path` is built in. If your code runs in the browser, bundlers like [browserify](https://github.com/browserify/browserify) or [webpack](https://github.com/webpack/webpack) include the `path-browserify` module by default.

But if none of those apply, with npm do:

```
npm install path-browserify
```

## Usage

```javascript
var path = require('path')

var filename = 'logo.png';
var logo = path.join('./assets/img', filename);
document.querySelector('#logo').src = logo;
```

## API

See the [Node.js path docs][path]. `path-browserify` currently matches the Node.js 10.3 API.
`path-browserify` only implements the POSIX functions, not the win32 ones.

## Contributing

PRs are very welcome! The main way to contribute to `path-browserify` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5, rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js.
This module intends to provide exactly the same API as Node.js, so features that are not available in the core `path` module will not be accepted. Feature requests should instead be directed at [nodejs/node](https://github.com/nodejs/node) and will be added to this module once they are implemented in Node.js.

If there is a difference in behaviour between Node.js's `path` module and this module, please open an issue!

## License

[MIT](./LICENSE)

[path]: https://nodejs.org/docs/v10.3.0/api/path.html
