<a href="http://promisesaplus.com/">
    <img src="https://promises-aplus.github.io/promises-spec/assets/logo-small.png" align="right" alt="Promises/A+ logo" />
</a>

# request-promise-core

[![Gitter](https://img.shields.io/badge/gitter-join_chat-blue.svg?style=flat-square&maxAge=2592000)](https://gitter.im/request/request-promise?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/request/promise-core/master.svg?style=flat-square&maxAge=2592000)](https://travis-ci.org/request/promise-core)
[![Coverage Status](https://img.shields.io/coveralls/request/promise-core.svg?style=flat-square&maxAge=2592000)](https://coveralls.io/r/request/promise-core)
[![Dependency Status](https://img.shields.io/david/request/promise-core.svg?style=flat-square&maxAge=2592000)](https://david-dm.org/request/promise-core)
[![Known Vulnerabilities](https://snyk.io/test/npm/promise-core/badge.svg?style=flat-square&maxAge=2592000)](https://snyk.io/test/npm/promise-core)


This package is the core for the following packages:

- [`request-promise`](https://github.com/request/request-promise)
- [`request-promise-any`](https://github.com/request/request-promise-any)
- [`request-promise-bluebird`](https://github.com/request/request-promise-bluebird)
- [`request-promise-native`](https://github.com/request/request-promise-native)

`request-promise-core` contains the core logic to add Promise support to [`request`](https://github.com/request/request).

Please use one of the libraries above. It is only recommended to use this library directly, if you have very specific requirements.

## Installation for `request@^2.34`

This module is installed via npm:

```
npm install --save request
npm install --save request-promise-core
```

`request` is defined as a peer-dependency and thus has to be installed separately.

## Usage for `request@^2.34`

``` js
// 1. Load the request library

// Only use a direct require if you are 100% sure that:
// - Your project does not use request directly. That is without the Promise capabilities by calling require('request').
// - Any of the installed libraries use request.
// ...because Request's prototype will be patched in step 2.
/* var request = require('request'); */

// Instead use:
var stealthyRequire = require('stealthy-require');
var request = stealthyRequire(require.cache, function () {
    return require('request');
});


// 2. Add Promise support to request

var configure = require('request-promise-core/configure/request2');

configure({
    request: request,
	// Pass your favorite ES6-compatible promise implementation
    PromiseImpl: Promise,
	// Expose all methods of the promise instance you want to call on the request(...) call
    expose: [
        'then',   // Allows to use request(...).then(...)
        'catch',  // Allows to use request(...).catch(...)
        'promise' // Allows to use request(...).promise() which returns the promise instance
    ],
    // Optional: Pass a callback that is called within the Promise constructor
    constructorMixin: function (resolve, reject) {
        // `this` is the request object
        // Additional arguments may be passed depending on the PromiseImpl used
    }
});


// 3. Use request with its promise capabilities

// E.g. crawl a web page:
request('http://www.google.com')
    .then(function (htmlString) {
        // Process html...
    })
    .catch(function (err) {
        // Crawling failed...
    });
```

## Installation and Usage for `request@next`

[Request Next](https://github.com/request/request/issues/1982) is still in alpha. However, `request-promise-core` is already designed to be compatible and ships with a configuration helper – `require('request-promise-core/configure/request-next')` – that is [used by `request-promise`](https://github.com/request/request-promise/blob/next/lib/rp.js) in its "next" branch.

## Contributing

To set up your development environment:

1. clone the repo to your desktop,
2. in the shell `cd` to the main folder,
3. hit `npm install`,
4. hit `npm install gulp -g` if you haven't installed gulp globally yet, and
5. run `gulp dev`. (Or run `node ./node_modules/.bin/gulp dev` if you don't want to install gulp globally.)

`gulp dev` watches all source files and if you save some changes it will lint the code and execute all tests. The test coverage report can be viewed from `./coverage/lcov-report/index.html`.

If you want to debug a test you should use `gulp test-without-coverage` to run all tests without obscuring the code by the test coverage instrumentation.

## Change History

- 1.1.1 (2016-08-08)
    - Renamed package to `request-promise-core` because there where [too many issues](https://github.com/request/request-promise/issues/137) with the scoped package name `@request/promise-core`
- 1.1.0 (2016-07-30)
    - Added `constructorMixin` option to enable [request/request-promise#123](https://github.com/request/request-promise/pull/123)
- 1.0.0 (2016-07-15)
    - All tests green, ready for prime time
- 1.0.0-rc.1 (2016-07-10)
    - Reimplementation of core logic based on `request-promise@3.0.0`
    - Plus `transform2xxOnly` option (fixes [request/request-promise#131](https://github.com/request/request-promise/issues/131))

## License (ISC)

In case you never heard about the [ISC license](http://en.wikipedia.org/wiki/ISC_license) it is functionally equivalent to the MIT license.

See the [LICENSE file](LICENSE) for details.