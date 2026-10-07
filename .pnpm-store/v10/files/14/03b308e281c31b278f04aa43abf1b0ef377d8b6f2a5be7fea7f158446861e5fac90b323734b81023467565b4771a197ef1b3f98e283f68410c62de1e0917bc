# Methods

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

HTTP verbs that Node.js core's HTTP parser supports.

This module provides an export that is just like `http.METHODS` from Node.js core,
with the following differences:

  * All method names are lower-cased.
  * Contains a fallback list of methods for Node.js versions that do not have a
    `http.METHODS` export (0.10 and lower).
  * Provides the fallback list when using tools like `browserify` without pulling
    in the `http` shim module.

## Install

```bash
$ npm install methods
```

## API

```js
var methods = require('methods')
```

### methods

This is an array of lower-cased method names that Node.js supports. If Node.js
provides the `http.METHODS` export, then this is the same array lower-cased,
otherwise it is a snapshot of the verbs from Node.js 0.10.

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/methods.svg?style=flat
[npm-url]: https://npmjs.org/package/methods
[node-version-image]: https://img.shields.io/node/v/methods.svg?style=flat
[node-version-url]: https://nodejs.org/en/download/
[travis-image]: https://img.shields.io/travis/jshttp/methods.svg?style=flat
[travis-url]: https://travis-ci.org/jshttp/methods
[coveralls-image]: https://img.shields.io/coveralls/jshttp/methods.svg?style=flat
[coveralls-url]: https://coveralls.io/r/jshttp/methods?branch=master
[downloads-image]: https://img.shields.io/npm/dm/methods.svg?style=flat
[downloads-url]: https://npmjs.org/package/methods
