# braces [![NPM version](https://img.shields.io/npm/v/braces.svg?style=flat)](https://www.npmjs.com/package/braces) [![NPM downloads](https://img.shields.io/npm/dm/braces.svg?style=flat)](https://npmjs.org/package/braces) [![Build Status](https://img.shields.io/travis/jonschlinkert/braces.svg?style=flat)](https://travis-ci.org/jonschlinkert/braces)

Fastest brace expansion for node.js, with the most complete support for the Bash 4.3 braces specification.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install braces --save
```

## Features

* Complete support for the braces part of the [Bash 4.3 Brace Expansion](www.gnu.org/software/bash/). Braces passes [all of the relevant unit tests](#bash-4-3-support) from the spec.
* Expands comma-separated values: `a/{b,c}/d` => `['a/b/d', 'a/c/d']`
* Expands alphabetical or numerical ranges: `{1..3}` => `['1', '2', '3']`
* [Very fast](#benchmarks)
* [Special characters](./patterns.md) can be used to generate interesting patterns.

## Example usage

```js
var braces = require('braces');

braces('a/{x,y}/c{d}e')
//=> ['a/x/cde', 'a/y/cde']

braces('a/b/c/{x,y}')
//=> ['a/b/c/x', 'a/b/c/y']

braces('a/{x,{1..5},y}/c{d}e')
//=> ['a/x/cde', 'a/1/cde', 'a/y/cde', 'a/2/cde', 'a/3/cde', 'a/4/cde', 'a/5/cde']
```

### Use case: fixtures

> Use braces to generate test fixtures!

**Example**

```js
var braces = require('./');
var path = require('path');
var fs = require('fs');

braces('blah/{a..z}.js').forEach(function(fp) {
  if (!fs.existsSync(path.dirname(fp))) {
    fs.mkdirSync(path.dirname(fp));
  }
  fs.writeFileSync(fp, '');
});
```

See the [tests](./test/test.js) for more examples and use cases (also see the [bash spec tests](./test/bash-mm-adjusted.js));

### Range expansion

Uses [expand-range](https://github.com/jonschlinkert/expand-range) for range expansion.

```js
braces('a{1..3}b')
//=> ['a1b', 'a2b', 'a3b']

braces('a{5..8}b')
//=> ['a5b', 'a6b', 'a7b', 'a8b']

braces('a{00..05}b')
//=> ['a00b', 'a01b', 'a02b', 'a03b', 'a04b', 'a05b']

braces('a{01..03}b')
//=> ['a01b', 'a02b', 'a03b']

braces('a{000..005}b')
//=> ['a000b', 'a001b', 'a002b', 'a003b', 'a004b', 'a005b']

braces('a{a..e}b')
//=> ['aab', 'abb', 'acb', 'adb', 'aeb']

braces('a{A..E}b')
//=> ['aAb', 'aBb', 'aCb', 'aDb', 'aEb']
```

Pass a function as the last argument to customize range expansions:

```js
var range = braces('x{a..e}y', function (str, i) {
  return String.fromCharCode(str) + i;
});

console.log(range);
//=> ['xa0y', 'xb1y', 'xc2y', 'xd3y', 'xe4y']
```

See [expand-range](https://github.com/jonschlinkert/expand-range) for benchmarks, tests and the full list of range expansion features.

## Options

### options.makeRe

Type: `Boolean`

Deafault: `false`

Return a regex-optimal string. If you're using braces to generate regex, this will result in dramatically faster performance.

**Examples**

With the default settings (`{makeRe: false}`):

```js
braces('{1..5}');
//=> ['1', '2', '3', '4', '5']
```

With `{makeRe: true}`:

```js
braces('{1..5}', {makeRe: true});
//=> ['[1-5]']

braces('{3..9..3}', {makeRe: true});
//=> ['(3|6|9)']
```

### options.bash

Type: `Boolean`

Default: `false`

Enables complete support for the Bash specification. The downside is a 20-25% speed decrease.

**Example**

Using the default setting (`{bash: false}`):

```js
braces('a{b}c');
//=> ['abc']
```

In bash (and minimatch), braces with one item are not expanded. To get the same result with braces, set `{bash: true}`:

```js
braces('a{b}c', {bash: true});
//=> ['a{b}c']
```

### options.nodupes

Type: `Boolean`

Deafault: `true`

Duplicates are removed by default. To keep duplicates, pass `{nodupes: false}` on the options

## Bash 4.3 Support

> Better support for Bash 4.3 than minimatch

This project has comprehensive unit tests, including tests coverted from [Bash 4.3](www.gnu.org/software/bash/). Currently only 8 of 102 unit tests fail, and

## Run benchmarks

Install dev dependencies:

```bash
npm i -d && npm benchmark
```

### Latest results

```bash
#1: escape.js
  brace-expansion.js x 114,934 ops/sec ±1.24% (93 runs sampled)
  braces.js x 342,254 ops/sec ±0.84% (90 runs sampled)

#2: exponent.js
  brace-expansion.js x 12,359 ops/sec ±0.86% (96 runs sampled)
  braces.js x 20,389 ops/sec ±0.71% (97 runs sampled)

#3: multiple.js
  brace-expansion.js x 114,469 ops/sec ±1.44% (94 runs sampled)
  braces.js x 401,621 ops/sec ±0.87% (91 runs sampled)

#4: nested.js
  brace-expansion.js x 102,769 ops/sec ±1.55% (92 runs sampled)
  braces.js x 314,088 ops/sec ±0.71% (98 runs sampled)

#5: normal.js
  brace-expansion.js x 157,577 ops/sec ±1.65% (91 runs sampled)
  braces.js x 1,115,950 ops/sec ±0.74% (94 runs sampled)

#6: range.js
  brace-expansion.js x 138,822 ops/sec ±1.71% (91 runs sampled)
  braces.js x 1,108,353 ops/sec ±0.85% (94 runs sampled)
```

## Related projects

You might also be interested in these projects:

* [expand-range](https://www.npmjs.com/package/expand-range): Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See… [more](https://www.npmjs.com/package/expand-range) | [homepage](https://github.com/jonschlinkert/expand-range)
* [fill-range](https://www.npmjs.com/package/fill-range): Fill in a range of numbers or letters, optionally passing an increment or multiplier to… [more](https://www.npmjs.com/package/fill-range) | [homepage](https://github.com/jonschlinkert/fill-range)
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. | [homepage](https://github.com/jonschlinkert/micromatch)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/braces/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/braces/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on May 21, 2016._