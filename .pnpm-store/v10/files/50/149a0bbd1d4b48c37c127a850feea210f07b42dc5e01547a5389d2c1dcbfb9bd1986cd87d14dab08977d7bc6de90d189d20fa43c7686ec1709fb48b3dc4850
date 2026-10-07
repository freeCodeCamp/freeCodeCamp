# stop-iteration-iterator <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Firefox 17-26 iterators throw a StopIteration object to indicate "done". This normalizes it.

# Usage

```js
var stopIterationIterator = require('stop-iteration-iterator');

var s = new Set([1, 2]);

var iterator = stopIterationIterator(s.keys());

iterator.next(); // { done: false, value: 1 }
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`


[package-url]: https://npmjs.org/package/stop-iteration-iterator
[npm-version-svg]: https://versionbadg.es/ljharb/stop-iteration-iterator.svg
[deps-svg]: https://david-dm.org/ljharb/stop-iteration-iterator.svg
[deps-url]: https://david-dm.org/ljharb/stop-iteration-iterator
[dev-deps-svg]: https://david-dm.org/ljharb/stop-iteration-iterator/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/stop-iteration-iterator#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/stop-iteration-iterator.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/stop-iteration-iterator.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/stop-iteration-iterator.svg
[downloads-url]: https://npm-stat.com/charts.html?package=stop-iteration-iterator
[codecov-image]: https://codecov.io/gh/ljharb/stop-iteration-iterator/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/stop-iteration-iterator/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/stop-iteration-iterator
[actions-url]: https://github.com/ljharb/stop-iteration-iterator/actions
