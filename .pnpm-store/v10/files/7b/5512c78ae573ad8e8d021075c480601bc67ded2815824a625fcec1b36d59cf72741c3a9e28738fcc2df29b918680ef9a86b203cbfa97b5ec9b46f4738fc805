# call-bind-apply-helpers <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Helper functions around Function call/apply/bind, for use in `call-bind`.

The only packages that should likely ever use this package directly are `call-bind` and `get-intrinsic`.
Please use `call-bind` unless you have a very good reason not to.

## Getting started

```sh
npm install --save call-bind-apply-helpers
```

## Usage/Examples

```js
const assert = require('assert');
const callBindBasic = require('call-bind-apply-helpers');

function f(a, b) {
	assert.equal(this, 1);
	assert.equal(a, 2);
	assert.equal(b, 3);
	assert.equal(arguments.length, 2);
}

const fBound = callBindBasic([f, 1]);

delete Function.prototype.call;
delete Function.prototype.bind;

fBound(2, 3);
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/call-bind-apply-helpers
[npm-version-svg]: https://versionbadg.es/ljharb/call-bind-apply-helpers.svg
[deps-svg]: https://david-dm.org/ljharb/call-bind-apply-helpers.svg
[deps-url]: https://david-dm.org/ljharb/call-bind-apply-helpers
[dev-deps-svg]: https://david-dm.org/ljharb/call-bind-apply-helpers/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/call-bind-apply-helpers#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/call-bind-apply-helpers.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/call-bind-apply-helpers.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/call-bind-apply-helpers.svg
[downloads-url]: https://npm-stat.com/charts.html?package=call-bind-apply-helpers
[codecov-image]: https://codecov.io/gh/ljharb/call-bind-apply-helpers/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/call-bind-apply-helpers/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/call-bind-apply-helpers
[actions-url]: https://github.com/ljharb/call-bind-apply-helpers/actions
