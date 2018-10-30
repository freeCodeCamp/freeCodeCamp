# fast-deep-equal
The fastest deep equal

[![Build Status](https://travis-ci.org/epoberezkin/fast-deep-equal.svg?branch=master)](https://travis-ci.org/epoberezkin/fast-deep-equal)
[![npm version](https://badge.fury.io/js/fast-deep-equal.svg)](http://badge.fury.io/js/fast-deep-equal)
[![Coverage Status](https://coveralls.io/repos/github/epoberezkin/fast-deep-equal/badge.svg?branch=master)](https://coveralls.io/github/epoberezkin/fast-deep-equal?branch=master)


## Install

```bash
npm install fast-deep-equal
```


## Features

- ES5 compatible
- works in node.js (0.10+) and browsers (IE9+)
- checks equality of Date and RegExp objects by value.


## Usage

```javascript
var equal = require('fast-deep-equal');
console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
```


## Performance benchmark

```
fast-deep-equal x 82,915 ops/sec ±0.63% (89 runs sampled)
nano-equal x 50,506 ops/sec ±2.23% (86 runs sampled)
shallow-equal-fuzzy x 14,873 ops/sec ±3.19% (83 runs sampled)
underscore.isEqual x 16,055 ops/sec ±2.29% (85 runs sampled)
lodash.isEqual x 10,740 ops/sec ±1.04% (89 runs sampled)
deep-equal x 12,276 ops/sec ±2.44% (84 runs sampled)
deep-eql x 10,565 ops/sec ±0.89% (90 runs sampled)
assert.deepStrictEqual x 965 ops/sec ±2.99% (81 runs sampled)
The fastest is fast-deep-equal
```

To run benchmark (requires node.js 6+):

```bash
npm install
node benchmark
```


## License

[MIT](https://github.com/epoberezkin/fast-deep-equal/blob/master/LICENSE)
