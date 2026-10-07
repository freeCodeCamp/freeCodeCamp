# is-async-function <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this a native `async function`?

## Example

```js
var isAsyncFunction = require('is-async-function');
assert(!isAsyncFunction(function () {}));
assert(!isAsyncFunction(null));
assert(!isAsyncFunction(function* () { yield 42; return Infinity; }));
assert(isAsyncFunction(async function () {}));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-async-function
[2]: https://versionbadg.es/inspect-js/is-async-function.svg
[5]: https://david-dm.org/inspect-js/is-async-function.svg
[6]: https://david-dm.org/inspect-js/is-async-function
[7]: https://david-dm.org/inspect-js/is-async-function/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-async-function#info=devDependencies
[11]: https://nodei.co/npm/is-async-function.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-async-function.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-async-function.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-async-function
[codecov-image]: https://codecov.io/gh/inspect-js/is-async-function/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-async-function/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-async-function
[actions-url]: https://github.com/inspect-js/is-async-function/actions
