# deep-equal <sup>[![Version Badge][2]][1]</sup>

Node's `assert.deepEqual() algorithm` as a standalone module.

This module is around [46 times faster](https://gist.github.com/substack/2790507#gistcomment-3099862) than wrapping `assert.deepEqual()` in a `try/catch`.

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

# example

``` js
var equal = require('deep-equal');
console.dir([
    equal(
        { a : [ 2, 3 ], b : [ 4 ] },
        { a : [ 2, 3 ], b : [ 4 ] }
    ),
    equal(
        { x : 5, y : [6] },
        { x : 5, y : 6 }
    )
]);
```

# methods

``` js
var deepEqual = require('deep-equal')
```

## deepEqual(a, b, opts)

Compare objects `a` and `b`, returning whether they are equal according to a
recursive equality algorithm.

If `opts.strict` is `true`, use strict equality (`===`) to compare leaf nodes.
The default is to use coercive equality (`==`) because that's how
`assert.deepEqual()` works by default.

# install

With [npm](https://npmjs.org) do:

```
npm install deep-equal
```

# test

With [npm](https://npmjs.org) do:

```
npm test
```

[1]: https://npmjs.org/package/deep-equal
[2]: https://versionbadg.es/inspect-js/node-deep-equal.svg
[5]: https://david-dm.org/inspect-js/node-deep-equal.svg
[6]: https://david-dm.org/inspect-js/node-deep-equal
[7]: https://david-dm.org/inspect-js/node-deep-equal/dev-status.svg
[8]: https://david-dm.org/inspect-js/node-deep-equal#info=devDependencies
[11]: https://nodei.co/npm/deep-equal.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/deep-equal.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/deep-equal.svg
[downloads-url]: https://npm-stat.com/charts.html?package=deep-equal
[codecov-image]: https://codecov.io/gh/inspect-js/node-deep-equal/branch/master/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/node-deep-equal/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/node-deep-equal
[actions-url]: https://github.com/inspect-js/node-deep-equal/actions
