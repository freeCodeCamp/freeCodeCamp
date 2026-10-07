# events [![Build Status](https://travis-ci.org/Gozala/events.png?branch=master)](https://travis-ci.org/Gozala/events)

> Node's event emitter for all engines.

This implements the Node.js [`events`][node.js docs] module for environments that do not have it, like browsers.

> `events` currently matches the **Node.js 11.13.0** API.

Note that the `events` module uses ES5 features. If you need to support very old browsers like IE8, use a shim like [`es5-shim`](https://www.npmjs.com/package/es5-shim). You need both the shim and the sham versions of `es5-shim`.

This module is maintained, but only by very few people. If you'd like to help, let us know in the [Maintainer Needed](https://github.com/Gozala/events/issues/43) issue!

## Install

You usually do not have to install `events` yourself! If your code runs in Node.js, `events` is built in. If your code runs in the browser, bundlers like [browserify](https://github.com/browserify/browserify) or [webpack](https://github.com/webpack/webpack) also include the `events` module.

But if none of those apply, with npm do:

```
npm install events
```

## Usage

```javascript
var EventEmitter = require('events')

var ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text)
})
ee.emit('message', 'hello world')
```

## API

See the [Node.js EventEmitter docs][node.js docs]. `events` currently matches the Node.js 11.13.0 API.

## Contributing

PRs are very welcome! The main way to contribute to `events` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5, rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js.
This module intends to provide exactly the same API as Node.js, so features that are not available in the core `events` module will not be accepted. Feature requests should instead be directed at [nodejs/node](https://github.com/nodejs/node) and will be added to this module once they are implemented in Node.js.

If there is a difference in behaviour between Node.js's `events` module and this module, please open an issue!

## License

[MIT](./LICENSE)

[node.js docs]: https://nodejs.org/dist/v11.13.0/docs/api/events.html
