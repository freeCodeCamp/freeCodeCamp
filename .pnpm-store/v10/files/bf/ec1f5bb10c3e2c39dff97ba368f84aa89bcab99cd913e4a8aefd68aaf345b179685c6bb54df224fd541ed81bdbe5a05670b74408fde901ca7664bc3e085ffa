# EventEmitter3

[![Version npm](https://img.shields.io/npm/v/eventemitter3.svg?style=flat-square)](https://www.npmjs.com/package/eventemitter3)[![CI](https://img.shields.io/github/actions/workflow/status/primus/eventemitter3/ci.yml?branch=master&label=CI&style=flat-square)](https://github.com/primus/eventemitter3/actions?query=workflow%3ACI+branch%3Amaster)[![Coverage Status](https://img.shields.io/coveralls/primus/eventemitter3/master.svg?style=flat-square)](https://coveralls.io/r/primus/eventemitter3?branch=master)

EventEmitter3 is a high performance EventEmitter. It has been micro-optimized
for various of code paths making this, one of, if not the fastest EventEmitter
available for Node.js and browsers. The module is API compatible with the
EventEmitter that ships by default with Node.js but there are some slight
differences:

- Domain support has been removed.
- We do not `throw` an error when you emit an `error` event and nobody is
  listening.
- The `newListener` and `removeListener` events have been removed as they
  are useful only in some uncommon use-cases.
- The `setMaxListeners`, `getMaxListeners`, `prependListener` and
  `prependOnceListener` methods are not available.
- Support for custom context for events so there is no need to use `fn.bind`.
- The `removeListener` method removes all matching listeners, not only the
  first.

It's a drop in replacement for existing EventEmitters, but just faster. Free
performance, who wouldn't want that? The EventEmitter is written in EcmaScript 3
so it will work in the oldest browsers and node versions that you need to
support.

## Installation

```bash
$ npm install --save eventemitter3
```

## CDN

Recommended CDN:

```text
https://unpkg.com/eventemitter3@latest/dist/eventemitter3.umd.min.js
```

## Usage

After installation the only thing you need to do is require the module:

```js
var EventEmitter = require('eventemitter3');
```

And you're ready to create your own EventEmitter instances. For the API
documentation, please follow the official Node.js documentation:

http://nodejs.org/api/events.html

### Contextual emits

We've upgraded the API of the `EventEmitter.on`, `EventEmitter.once` and
`EventEmitter.removeListener` to accept an extra argument which is the `context`
or `this` value that should be set for the emitted events. This means you no
longer have the overhead of an event that required `fn.bind` in order to get a
custom `this` value.

```js
var EE = new EventEmitter()
  , context = { foo: 'bar' };

function emitted() {
  console.log(this === context); // true
}

EE.once('event-name', emitted, context);
EE.on('another-event', emitted, context);
EE.removeListener('another-event', emitted, context);
```

### Tests and benchmarks

To run tests run `npm test`. To run the benchmarks run `npm run benchmark`.

Tests and benchmarks are not included in the npm package. If you want to play
with them you have to clone the GitHub repository. Note that you will have to
run an additional `npm i` in the benchmarks folder before `npm run benchmark`.

## License

[MIT](LICENSE)
