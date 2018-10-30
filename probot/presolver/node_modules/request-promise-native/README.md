<a href="http://promisesaplus.com/">
    <img src="https://promises-aplus.github.io/promises-spec/assets/logo-small.png" align="right" alt="Promises/A+ logo" />
</a>

# Request-Promise-Native

[![Gitter](https://img.shields.io/badge/gitter-join_chat-blue.svg?style=flat-square&maxAge=2592000)](https://gitter.im/request/request-promise?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/request/request-promise-native/master.svg?style=flat-square&maxAge=2592000)](https://travis-ci.org/request/request-promise-native)
[![Coverage Status](https://img.shields.io/coveralls/request/request-promise-native.svg?style=flat-square&maxAge=2592000)](https://coveralls.io/r/request/request-promise-native)
[![Dependency Status](https://img.shields.io/david/request/request-promise-native.svg?style=flat-square&maxAge=2592000)](https://david-dm.org/request/request-promise-native)
[![Known Vulnerabilities](https://snyk.io/test/npm/request-promise-native/badge.svg?style=flat-square&maxAge=2592000)](https://snyk.io/test/npm/request-promise-native)

This package is similar to [`request-promise`](https://www.npmjs.com/package/request-promise) but uses native ES6 promises.

Please refer to the [`request-promise` documentation](https://www.npmjs.com/package/request-promise). Everything applies to `request-promise-native` except the following:
- Instead of using Bluebird promises this library uses native ES6 promises.
- Mind that native ES6 promises have fewer features than Bluebird promises do. In particular, the `.finally(...)` method is not available.

## Installation

This module is installed via npm:

```
npm install --save request
npm install --save request-promise-native
```

`request` is defined as a peer-dependency and thus has to be installed separately.

## Migration from `request-promise` to `request-promise-native`

1. Go through the [migration instructions](https://github.com/request/request-promise#migration-from-v3-to-v4) to upgrade to `request-promise` v4.
2. Ensure that you don't use Bluebird-specific features on the promise returned by your request calls. In particular, you can't use `.finally(...)` anymore.
3. You are done.

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

- v1.0.5 (2017-09-22)
    - Upgraded `tough-cookie` to a version without regex DoS vulnerability
      *(Thanks to @sophieklm for [pull request #13](https://github.com/request/request-promise-native/pull/13))*
- v1.0.4 (2017-05-07)
    - Fix that allows to use `tough-cookie` for [cookie creation](https://github.com/request/request-promise#include-a-cookie)
- v1.0.3 (2016-08-08)
    - Renamed internally used package `@request/promise-core` to `request-promise-core` because there where [too](https://github.com/request/request-promise/issues/137) [many](https://github.com/request/request-promise/issues/141) issues with the scoped package name
- v1.0.2 (2016-07-18)
    - Fix for using with module bundlers like Webpack and Browserify
- v1.0.1 (2016-07-17)
    - Fixed `@request/promise-core` version for safer versioning
- v1.0.0 (2016-07-15)
    - Initial version similar to [`request-promise`](https://www.npmjs.com/package/request-promise) v4

## License (ISC)

In case you never heard about the [ISC license](http://en.wikipedia.org/wiki/ISC_license) it is functionally equivalent to the MIT license.

See the [LICENSE file](LICENSE) for details.
