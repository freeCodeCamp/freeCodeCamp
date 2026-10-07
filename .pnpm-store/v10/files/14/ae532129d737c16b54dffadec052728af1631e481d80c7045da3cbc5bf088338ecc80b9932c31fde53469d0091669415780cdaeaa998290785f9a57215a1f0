# side-channel <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Store information about any JS value in a side channel. Uses WeakMap if available.

Warning: in an environment that lacks `WeakMap`, this implementation will leak memory until you `delete` the `key`.

## Getting started

```sh
npm install --save side-channel
```

## Usage/Examples

```js
const assert = require('assert');
const getSideChannel = require('side-channel');

const channel = getSideChannel();

const key = {};
assert.equal(channel.has(key), false);
assert.throws(() => channel.assert(key), TypeError);

channel.set(key, 42);

channel.assert(key); // does not throw
assert.equal(channel.has(key), true);
assert.equal(channel.get(key), 42);

channel.delete(key);
assert.equal(channel.has(key), false);
assert.throws(() => channel.assert(key), TypeError);
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/side-channel
[npm-version-svg]: https://versionbadg.es/ljharb/side-channel.svg
[deps-svg]: https://david-dm.org/ljharb/side-channel.svg
[deps-url]: https://david-dm.org/ljharb/side-channel
[dev-deps-svg]: https://david-dm.org/ljharb/side-channel/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/side-channel#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/side-channel.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/side-channel.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/side-channel.svg
[downloads-url]: https://npm-stat.com/charts.html?package=side-channel
[codecov-image]: https://codecov.io/gh/ljharb/side-channel/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/side-channel/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/side-channel
[actions-url]: https://github.com/ljharb/side-channel/actions
