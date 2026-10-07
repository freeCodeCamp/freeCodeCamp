# possible-typed-array-names <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A simple list of possible Typed Array names.

## Example

```js
const assert = require('assert');

const names = require('possible-typed-array-names');

assert(Array.isArray(names));
assert(names.every(name => (
    typeof name === 'string'
    && ((
        typeof globalThis[name] === 'function'
        && globalThis[name].name === name
    ) || typeof globalThis[name] === 'undefined')
)));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

## Security

Please email [@ljharb](https://github.com/ljharb) or see https://tidelift.com/security if you have a potential security vulnerability to report.

[package-url]: https://npmjs.org/package/possible-typed-array-names
[npm-version-svg]: https://versionbadg.es/ljharb/possible-typed-array-names.svg
[deps-svg]: https://david-dm.org/ljharb/possible-typed-array-names.svg
[deps-url]: https://david-dm.org/ljharb/possible-typed-array-names
[dev-deps-svg]: https://david-dm.org/ljharb/possible-typed-array-names/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/possible-typed-array-names#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/possible-typed-array-names.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/possible-typed-array-names.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/possible-typed-array-names.svg
[downloads-url]: https://npm-stat.com/charts.html?package=possible-typed-array-names
[codecov-image]: https://codecov.io/gh/ljharb/possible-typed-array-names/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/possible-typed-array-names/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/possible-typed-array-names
[actions-url]: https://github.com/ljharb/possible-typed-array-names/actions
