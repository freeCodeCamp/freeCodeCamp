# 3.3.0

 - Support EventTarget emitters in `events.once` from Node.js 12.11.0.

   Now you can use the `events.once` function with objects that implement the EventTarget interface. This interface is used widely in
   the DOM and other web APIs.

   ```js
   var events = require('events');
   var assert = require('assert');

   async function connect() {
     var ws = new WebSocket('wss://example.com');
     await events.once(ws, 'open');
     assert(ws.readyState === WebSocket.OPEN);
   }

   async function onClick() {
     await events.once(document.body, 'click');
     alert('you clicked the page!');
   }
   ```

# 3.2.0

 - Add `events.once` from Node.js 11.13.0.

   To use this function, Promises must be supported in the environment. Use a polyfill like `es6-promise` if you support older browsers.

# 3.1.0 (2020-01-08)

`events` now matches the Node.js 11.12.0 API.

  - pass through return value in wrapped `emitter.once()` listeners

    Now, this works:
    ```js
    emitter.once('myevent', function () { return 1; });
    var listener = emitter.rawListeners('myevent')[0]
    assert(listener() === 1);
    ```
    Previously, `listener()` would return undefined regardless of the implementation.

    Ported from https://github.com/nodejs/node/commit/acc506c2d2771dab8d7bba6d3452bc5180dff7cf

  - Reduce code duplication in listener type check ([#67](https://github.com/Gozala/events/pull/67) by [@friederbluemle](https://github.com/friederbluemle)).
  - Improve `emitter.once()` performance in some engines

# 3.0.0 (2018-05-25)

**This version drops support for IE8.** `events` no longer includes polyfills
for ES5 features. If you need to support older environments, use an ES5 shim
like [es5-shim](https://npmjs.com/package/es5-shim). Both the shim and sham
versions of es5-shim are necessary.

  - Update to events code from Node.js 10.x
    - (semver major) Adds `off()` method
  - Port more tests from Node.js
  - Switch browser tests to airtap, making things more reliable

# 2.1.0 (2018-05-25)

  - add Emitter#rawListeners from Node.js v9.4

# 2.0.0 (2018-02-02)

  - Update to events code from node.js 8.x
    - Adds `prependListener()` and `prependOnceListener()`
    - Adds `eventNames()` method
    - (semver major) Unwrap `once()` listeners in `listeners()`
  - copy tests from node.js

Note that this version doubles the gzipped size, jumping from 1.1KB to 2.1KB,
due to new methods and runtime performance improvements. Be aware of that when
upgrading.

# 1.1.1 (2016-06-22)

  - add more context to errors if they are not instanceof Error

# 1.1.0 (2015-09-29)

  - add Emitter#listerCount (to match node v4 api)

# 1.0.2 (2014-08-28)

  - remove un-reachable code
  - update devDeps

## 1.0.1 / 2014-05-11

  - check for console.trace before using it

## 1.0.0 / 2013-12-10

  - Update to latest events code from node.js 0.10
  - copy tests from node.js

## 0.4.0 / 2011-07-03 ##

  - Switching to graphquire@0.8.0

## 0.3.0 / 2011-07-03 ##

  - Switching to URL based module require.

## 0.2.0 / 2011-06-10 ##

  - Simplified package structure.
  - Graphquire for dependency management.

## 0.1.1 / 2011-05-16 ##

  - Unhandled errors are logged via console.error

## 0.1.0 / 2011-04-22 ##

  - Initial release
